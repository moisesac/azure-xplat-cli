// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/jobManager\",\"eTag\":\"0x701CE1722770000\",\"creationTime\":\"2016-03-21T16:45:25.739224Z\",\"lastModified\":\"1601-01-01T00:00:00Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:25.739224Z\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"name1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"name2\",\"value\":\"value2\"\r\n        }\r\n      ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n        \"numberOfInstances\":1513713265\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D351A83451CC4D\",\"creationTime\":\"2016-03-21T16:45:26.3503437Z\",\"lastModified\":\"2016-03-21T16:45:26.3503437Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:26.3503437Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n        {\r\n          \"name\":\"env1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"env2\",\"value\":\"value2\"\r\n        }\r\n      ],\"runElevated\":false,\"constraints\":{\r\n        \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7bc1e89d-0ab5-4c90-8909-07a2e1433ed4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'b2d2bf9a-09fd-4cca-8b4f-da4ac05e84fd',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/jobManager\",\"eTag\":\"0x701CE1722770000\",\"creationTime\":\"2016-03-21T16:45:25.739224Z\",\"lastModified\":\"1601-01-01T00:00:00Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:25.739224Z\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"name1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"name2\",\"value\":\"value2\"\r\n        }\r\n      ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n        \"numberOfInstances\":1513713265\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D351A83451CC4D\",\"creationTime\":\"2016-03-21T16:45:26.3503437Z\",\"lastModified\":\"2016-03-21T16:45:26.3503437Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:26.3503437Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n        {\r\n          \"name\":\"env1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"env2\",\"value\":\"value2\"\r\n        }\r\n      ],\"runElevated\":false,\"constraints\":{\r\n        \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7bc1e89d-0ab5-4c90-8909-07a2e1433ed4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'b2d2bf9a-09fd-4cca-8b4f-da4ac05e84fd',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:26 GMT',
  connection: 'close' });
 return result; }]];