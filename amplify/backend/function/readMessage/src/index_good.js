const ddbGeo = require("dynamodb-geo");
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB()
const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'askJames-wheresStarbucks')
const httpStatusCode = require('http-status-codes');

let response;

exports.handler = async (event) => {
  config.hashKeyLength = 5

  const myGeoTableManager = new ddbGeo.GeoDataManager(config)
  
  const items = await myGeoTableManager.queryRadius({
    RadiusInMeter: 750000,
    CenterPoint: {  
      latitude: 33.1141879,
      longitude: -96.6726919
    }
  
  })

//   const params = {
//     TableName: 'askJames-wheresStarbucks',
//     Limit: 10
// }
//   const items = await ddb.scan(params).promise()


    response = {
      statusCode: httpStatusCode.OK,
      body: items,
    //   body: JSON.stringify(transformedItems),
    };
    return response;    
};
