

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    'use strict'

// Run 'node query' to see how many Starbucks are within 1km (0.6 miles) of a location in NYC.

const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

const ddb = new AWS.DynamoDB() 
const ddbGeo = require('dynamodb-geo')

const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'askJames-wheresStarbucks')
config.hashKeyLength = 5

const myGeoTableManager = new ddbGeo.GeoDataManager(config)

myGeoTableManager.queryRadius({
  RadiusInMeter: 750000,
  CenterPoint: {  
    
  // New York
  // latitude: 40.7769099,
  // longitude: -73.9822532

  // Alabama
  // latitude: 33.504689,
  // longitude: -86.799091

  // 308 Roma Ct Allen
    latitude: 33.1141879,
    longitude: -96.6726919

    // South Texas
    // latitude: 31.005998,
    // longitude: -100.337384
  }

})
.then((locations) => {
  console.log('Locations found: ', locations.length)
  console.log(locations)
})
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
