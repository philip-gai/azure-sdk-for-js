let nock = require('nock');

module.exports.hash = "e883311e9f4c88bc5810514b16c79386";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
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
  '59467bfe-cec4-4309-ac20-7d7016782800',
  'x-ms-ests-server',
  '2.1.12231.8 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=ApRcCgPi979GnPU0u6vsMqY; expires=Sun, 19-Dec-2021 07:07:44 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr06TYzwWe-7naGQL4aIFAqO8gqqTHbCpWkZs2gV7lzUzc4L37XIpDUDbZQu4dgG5LdfisD8XJHLTSeO0YmUTryOff1HOof7RzFCKlCRA9Al0QAcCgvLmvn-FUaiCngTxWTyYpIdiSVYkZu3LCbya1b7u8wKHvZ09uQvn7wJq4Ld8gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 19 Nov 2021 07:07:43 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
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
  '3c88997b-98c8-4a59-9b64-19dac0e33f00',
  'x-ms-ests-server',
  '2.1.12231.8 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AsQU3CbZc7xIlJcjYHItE2Q; expires=Sun, 19-Dec-2021 07:07:44 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrX104esk4wz-5C_XQAf5QjHDj2lHWoXQXU75X7YTiNBmvrEkDDOgYajmIR3MAcfFm0FJjlCfAYT_JQUX2OM0m7ir105XW8IRYn-s-qBDpnWnpmefqd8Y5YVh7j7-6bggKWVBJ6mbljndRK3tLLuqMKy3pj9wLRGz8iBNrJQbBO_cgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 19 Nov 2021 07:07:43 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=f98c0bef-dbd1-4e68-beac-8e4c2ee31985&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
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
  'a7763080-2c94-4c8e-a565-c4ead2a84300',
  'x-ms-ests-server',
  '2.1.12231.8 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=Ah_8dDO3r8dLn78GoDbVXtwWPr5BAQAAAEBEKdkOAAAA; expires=Sun, 19-Dec-2021 07:07:44 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 19 Nov 2021 07:07:43 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .post('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Batch/batchAccounts/myaccountxxx/pools/mypoolxxx/stopResize')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e9f64ed747e77827f8fa7d36abd6cf14226bfbe7bf7eeeeaaaa4a7c849ff4f747a38f96d92227ccfc8fdaeb153eda0c16cd1b6a9cb7d90535feeedddff7a39d77074f1f1e3fd97bb27ff074e7fefed393dff7236a4078aef2ba2df2e6a347bff8a3326bda2faa59715ee420c8decedeeef62efdefe19b9d078fe87ffbfbe37bbb0fe9e3839fa277a7759e81546f0a46923ea6a6f43fdb7a67fc70efc1eefec13e5a534f974543cd8be5c5eb366bf1caebf5749ae733ea2cf2fd9b3a5b36c5ed3bc8cab29a3242fc3abdf0bacdb3d975ffab5b40a6811eecefedec3f00e4cbc5ebe20768f7facdf18ba7c7af9efefe4ff7e9e362d9e6f58b6a969f548bc57a59480fd4ec69d164939247d566cddbd765d5362fa5e9478f76f5c3e93c9fad4b1aeccbaa2ca6d720ff921a3c2bcaf28d4cf1eb151178f6d12f197d34cb576575bdc897ed49b53c2f2ed6b576f58b3f9a96d57af63aaf2f8b29e1d1f9b26a9e658ba224e01fdd2764aae6278923f9bb8fbef5d12f21c0cd342bf3d779db121ecc01e7c5bb7cf61a9fe2af36ab2ff2f6693ec3d8f2190640ad7630027cf1bcba7a5917555db4d7ee2b92082216085bad5beae8e59bddfb5f7067f2cd97c46f8c20a6624def6ce80604799abbd9fb92459380beca7fd13a5fe7342601daed8e4646405b7c4c9ff5a7f7def8feee0171f21ea637afebaaa60ebf47d4a40ee90595a39ffc82084ba27152d5f94facab367b956798367a6791374d7681b66fe679daacf2290b4daad29cceb326a5d943ebf427bf481b86934e0950fa8b00293dafea94705cceb27af65467e9977c9fa8345dd7354d74841afa4d84eabfe4","97fc3f5b72cea5c3040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Last-Modified',
  'Fri, 19 Nov 2021 07:07:44 GMT',
  'ETag',
  'W/"0x8D9AB2B48D054DC"',
  'Vary',
  'Accept-Encoding',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1194',
  'x-ms-request-id',
  'd155c1cb-d383-4adc-8c47-c99c81d4d16e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id',
  'bca61b61-282f-4497-9a22-6fbc2128a5fd',
  'x-ms-routing-request-id',
  'KOREASOUTH:20211119T070745Z:bca61b61-282f-4497-9a22-6fbc2128a5fd',
  'Date',
  'Fri, 19 Nov 2021 07:07:44 GMT'
]);
