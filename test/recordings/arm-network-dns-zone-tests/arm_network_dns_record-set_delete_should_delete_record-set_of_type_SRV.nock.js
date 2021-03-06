// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'cf759e57-6663-4e85-a536-40af8fee0702',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '35f5e43b-8dcb-4c61-b0b1-75e9993012d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104942Z:35f5e43b-8dcb-4c61-b0b1-75e9993012d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'cf759e57-6663-4e85-a536-40af8fee0702',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '35f5e43b-8dcb-4c61-b0b1-75e9993012d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104942Z:35f5e43b-8dcb-4c61-b0b1-75e9993012d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/SRV/set-srv' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'x-ms-correlation-request-id': 'fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104943Z:fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:42 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/SRV/set-srv' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'x-ms-correlation-request-id': 'fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104943Z:fa8bb010-df3e-4ce4-8844-e35202f49e00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:42 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; }]];