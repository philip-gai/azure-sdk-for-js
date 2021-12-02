$REPO_ROOT = "$PSScriptRoot/../../"
$MATCHING_PREFIX = @(
  'source-code-folder-path: ./src/generated',
  'output-folder: ../src/generated'
)

$directoresToScan = @((Resolve-Path "$REPO_ROOT/sdk/$ServiceDirectory"))
if (!$ServiceDirectory) {
  $directoresToScan = Get-ChildItem -Path "$REPO_ROOT/sdk" -Directory
}

$packageDirectories = @()
foreach ($serviceDirectory in $directoresToScan) {
  $packageDirectories += Get-ChildItem -Path $serviceDirectory  -Directory
}

$packageFoldersToScan = $packageDirectories.Where({
    $packageJsonLocation = "$_/package.json"
    if (!(Test-Path $packageJsonLocation)) {
      Write-Host "Excluding $_. Package JSON not found ($packageJsonLocation)"
      return $true
    }

    $packageJsonContent = Get-Content $packageJsonLocation -Raw
    $packageJson = ConvertFrom-Json $packageJsonContent -AsHashtable

    if ($packageJson.name.StartsWith('@azure/arm-')) {
      Write-Host "Excluding $_. Package name starts with '@azure/arm-'"
      return $true
    }

    if ($packageJson.name.StartsWith('@azure-rest/')) {
      Write-Host "Excluding $_. Package name starts with '@azure-rest/'"
      return $true
    }

    if ($packageJson.dependencies -and $packageJson.dependencies.ContainsKey('@azure/ms-rest-js')) {
      Write-Host "Excluding $_. Package depends on @azure/ms-rest-js (track 1)"
      return $true
    }

    # Match lines in markdown files under the `swagger` folder with lines in
    # $MATCHING_PREFIX. A folder that has a matching line will be included.
    $swaggerMarkdowns = Get-ChildItem "$_/swagger/*.md" -ErrorAction SilentlyContinue
    if ($swaggerMarkdowns) {
      foreach ($markdownFile in $swaggerMarkdowns) {
        $swaggerMarkdownContent = Get-Content $markdownFile
        foreach ($line in $MATCHING_PREFIX) {
          if ($swaggerMarkdownContent.Where({ $_.StartsWith($line) })) {
            Write-Host "Including $_. $markdownFile contains matching line $line"
            return $false
          }
        }
      }
    }
    elseif (!(Test-Path "$_/src/generated")) {
      Write-Host "Including $_. There is a src/generated folder"
      return $false
    }

    Write-Host "Excluding $_. It is likely machine generated."
    return $true
  })

$packageFoldersToScan `
| Foreach-Object { [IO.Path]::GetRelativePath('.', $_) } `
| Where-Object { Test-Path "$_/review" }
| Foreach-Object { "`"$_/review/*.md`"," } `
| Write-Host
