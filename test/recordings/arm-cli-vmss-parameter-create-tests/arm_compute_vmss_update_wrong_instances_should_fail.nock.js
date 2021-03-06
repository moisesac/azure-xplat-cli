// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"upgradePolicies.instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7dc6ecd9-4b90-4801-98a1-e210f4d629f3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0bed8779-9671-413a-8948-ed27efcf55ee',
  'x-ms-routing-request-id': 'WESTUS:20160322T052253Z:0bed8779-9671-413a-8948-ed27efcf55ee',
  date: 'Tue, 22 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"upgradePolicies.instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '7dc6ecd9-4b90-4801-98a1-e210f4d629f3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0bed8779-9671-413a-8948-ed27efcf55ee',
  'x-ms-routing-request-id': 'WESTUS:20160322T052253Z:0bed8779-9671-413a-8948-ed27efcf55ee',
  date: 'Tue, 22 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; }]];