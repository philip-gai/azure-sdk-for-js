let nock = require('nock');

module.exports.hash = "7f5620e8c8366ea064ce460bf752a91c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'bb9ee5f3-6585-4d05-bc64-1b7a0ccc7901',
  'x-ms-ests-server',
  '2.1.12231.7 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AhjRF3yWWCBGqY-gZksnX0g; expires=Thu, 16-Dec-2021 00:33:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrEpT94HIxPowCP0fm4ivCvfzcXqylWqVkAM1_iVt9soo5qRtEQ1rHugBKYniO5WY77nm1Bm-vovpVuBvZVFWDusFWQ4taWKxnXDal9-Hev45rmW_No767fF9uJ-vgmyHB0l54QVRi6yeVGjxu80joECtpWVPsvTYLlIu-9XxhzQwgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:33:47 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8520cdd0-1de8-4392-8fa3-da68a7988c00',
  'x-ms-ests-server',
  '2.1.12231.7 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=Ap2-lPi9IFtOsau1ZTqiyno; expires=Thu, 16-Dec-2021 00:33:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrAa_ZSoBR0Xd-InebeeXaJDI_f2ZihFguey1pdjkKU6PM-tk6vj16d0H8bwAE6835XNXYUTgooLWbPrZZgicV2m0eMNhcEnY4ghoRlPIBIHrgBhCiktgIXE28CEAccoB34nNjkcNG7wSLjxG8kSGcOyCl1ll_hoaWIyKzJEAPW0kgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:33:47 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=38ed3bb8-f80e-4abf-bc8d-90952a85d354&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '4075bfc4-5f01-4303-add0-7d325826d000',
  'x-ms-ests-server',
  '2.1.12231.7 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AuHKh5m3X6tOlBrSyUj8GMA; expires=Thu, 16-Dec-2021 00:33:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:33:47 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/hooks')
  .query(true)
  .reply(200, {"value":[{"hookId":"8c88db0d-0020-4b7d-b88b-0a1b1c0eb315","hookName":"js-test-emailHook-163122810639507343","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id","savaity@microsoft.com"],"hookParameter":{"toList":["test@example.com"]}},{"hookId":"9c5d8942-bcaf-4184-af2b-444446c5df50","hookName":"js-test-emailHook-163615467577705904","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"toList":["test@example.com"]}},{"hookId":"919c4d20-ca07-4e36-a693-977a20aceb5c","hookName":"js-test-emailHook-163615469774902335","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"toList":["test@example.com"]}},{"hookId":"679a3c76-01ec-4abb-909e-8dae6f6d3896","hookName":"js-test-emailHook-163667847631004143","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"toList":["test@example.com"]}},{"hookId":"942727ee-c652-470e-83ac-75059ed08d75","hookName":"js-test-emailHook-163667870166203762","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"toList":["test@example.com"]}},{"hookId":"f00e39a3-ed3c-439c-882b-93c209c846c3","hookName":"js-test-emailHook-163702282212800101","hookType":"Email","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"toList":["test2@example.com","test3@example.com"]}},{"hookId":"6c9a07ab-2e61-411c-bd35-1e0ac0806384","hookName":"js-test-webHook-163702282212808214","hookType":"Webhook","externalLink":"","description":"description","admins":["azure_client_id"],"hookParameter":{"endpoint":"https://httpbin.org/post","username":"user1","password":"SecretPlaceholder"}}]}, [
  'Content-Length',
  '1955',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '5241ce35-d432-4444-90e9-beefdbb9bf5a',
  'x-envoy-upstream-service-time',
  '57',
  'apim-request-id',
  '5241ce35-d432-4444-90e9-beefdbb9bf5a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 16 Nov 2021 00:33:46 GMT'
]);
