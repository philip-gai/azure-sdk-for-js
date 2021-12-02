$granularity = 'package' # 'package' or 'service'
# Excluding glob suffix for .NET public API: sdk/**/!(api)/*
$globSuffix = 'review/**/*.md' # '**' for all files
$scanType = "public API surface" # or "" for all files

# Public API surface checking:
# Exclude packages named @azure-rest/*
# Exclude packages named *-rest as well
# ONLY include packages which have swagger/README.md with yaml key
#   `source-code-folder-path:` with value including ./src/generated

$REPO_ROOT = "$PSScriptRoot"

$serviceDirectories = Get-ChildItem -Path 'sdk' -Directory
$packageDirectories = $serviceDirectories | Foreach-Object { Get-ChildItem -Path $_  -Directory }

$directores = $packageDirectories
if ($granularity -eq 'service') {
  $directores = $serviceDirectories
}

$spellingOutput = $directores `
| foreach-object {
  [IO.Path]::GetRelativePath('./', $_)
}
| foreach-object { # Cannot be parallel until we can happily run Invoke-Cspell.ps1 in an isolated fashion (cspell.json)
  # $globSuffix = $using:globSuffix
  $output = @{ Directory = $_ }

  Write-Host "cspell lint --config '.vscode/cspell.json' --relative $REPO_ROOT --no-must-find-files `"$_/$globSuffix`""
  $output.CspellOutput = ./eng/common/spelling/Invoke-Cspell.ps1 `
    -CSpellConfigPath '.vscode/cspell.json' `
    -ScanGlobs "$_/$globSuffix" `
    -PackageInstallCache "/tmp/cspell-fun"

  $output.SpellingErrors = $output.CspellOutput
  | Where-Object { $_ -and $_.Trim() } `
  | ForEach-Object {
    $line = $_;
    $_ -match 'Unknown word \((.*)\)' | Out-Null;

    $file = $line.Substring(0, $line.LastIndexOf(':', $line.LastIndexOf(':') - 1));
    $word = $Matches[1];

    return @{
      Line = $line;
      File = $file;
      Word = $word;
    }
  }

  if ($LASTEXITCODE) {
    $output.Error = $true
  }
  else {
    $output.Error = $false
  }
  Write-Host "Finished $_"
  $output
}

$global:optOut = $spellingOutput | Where-Object { $_.Error }
$global:optIn = $spellingOutput | Where-Object { !$_.Error }

Write-Host "Opt Out: $($optOut.Count) (may be inaccurate if single object)"
$optOut | Foreach-Object { Write-Host "  $($_.Directory)" }
Write-Host "Opt In: $($optIn.Count) (may be inaccurate if single object)"
$optIn | Foreach-Object { Write-Host "  $($_.Directory)" }


foreach ($item in $optOut) {
  $glob = "sdk/$($item.Directory)/$globSuffix"
  if ($granularity -eq 'package') {
    $glob = "$($item.Directory)/$globSuffix"
  }
  
  $item.Glob = $glob
}

Write-Host "Ignore globs: "
$optOut | Foreach-Object { Write-Host "`"$($_.Glob)`"," }


$optOut.SpellingErrors `
| Group-Object -Property Word `
| Sort-Object -Property Count -Descending `
| Select-Object -Property Count, Name -First 100 `
| Out-String `
| Write-Host

Pause
$prNumber = Read-Host "PR Number"

foreach ($item in $optOut) {
  $spellCheckOutputNote = @"
``````
$($item.CspellOutput -join "`n")
``````
"@
  if ($spellCheckOutputNote.Length + 1029 -gt 65536) {
    $spellCheckOutputNote = "Output too large to add to bug, follow instructions in 'What to do' section to get a list of the spelling errors"
  }

  $fileOutput = @"
Spell check scanning of $granularity at ``$($item.Directory)`` detected spelling errors in the public API surface. This directory is opted out of PR spell checking in PR #$prNumber to keep PRs unblocked.

## What to do

1. Ensure Node.js is installed (https://nodejs.org/en/download/). This will include ``npx``
1. Delete the entry in ``.vscode/cspell.json``'s ``ignorePaths`` field. It will look like: ``$($item.Glob)``. You need to do this to enable checking the files.
1. From the root of the repo run spell check using ``npx cspell lint --config '.vscode/cspell.json' --no-must-find-files "$($item.Glob)"``
1. Fix detections according to http://aka.ms/azsdk/engsys/spellcheck use the "False positives" section to fix false positives
1. Check in changes (including the change to ``.vscode/cspell.json`` where the ``ignorePaths`` is updated to remove the entry for this service.). You may need to run ``git add -f .vscode/cspell.json`` to force adding the changes to the file in git.


## Spell checking output

$spellCheckOutputNote


"@

  $outputFileName = "spelling-errors-$($item.Directory.Replace('/','--')).md"
  $fileOutput | Set-Content $outputFileName

  $titleHeader = $item.Directory
  if (Test-Path "$($item.Directory)/package.json") {
    $packageJson = Get-Content "$($item.Directory)/package.json" | ConvertFrom-Json
    $titleHeader = $packageJson.name
    if ($packageJson.'sdk-type' -ne "client") { 
      Write-Host "Non-client SDK found ($($packageJson.'sdk-type')): $($item.Directory)"
    }
  }

  $title = "$titleHeader - cspell found spelling errors in public API surface"

  $searchResults = gh issue list --json number --search "`\`"$title`\`" in:title" | ConvertFrom-Json

  if (!$searchResults) {
    Write-Host "Issue ($title) does not exist... creating"
    # gh issue create `
    #   --title $title `
    #   --body-file $outputFileName `
    #   --label Client
  }
  else {
    $issueNumber = $searchResults[0].number
    Write-Host "Issue ($title) DOES exist (#$issueNumber)... updating"
    # gh issue edit $issueNumber --body-file $outputFileName
  }
}
