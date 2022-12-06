const ddbGeo = require("dynamodb-geo");
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();
const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'askJames-wheresStarbucks')
const httpStatusCode = require('http-status-codes');

let response;

exports.handler = async (event) => {
    let coords;

    coords = {
        latitude: 33.1141879,
        longitude: -96.6726919,
        radius:  50000
    };

    const items = await runGeosearch(coords);
    const transformedItems = transformItems(items);
    response = {
      statusCode: httpStatusCode.OK,
      // body: items,
      // body: JSON.stringify(transformedItems),
      body: transformedItems,
    };
  
  
    return response;    

};
/**
 * Search for items in Dynamo based on coordinates
 * @param {any} coords - Coordinates with radius for search
 * @return {Array} Found items based on coordinates
 */
async function runGeosearch(coords) {
    try {
      const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'askJames-wheresStarbucks');
      config.hashKeyLength = 5;
      const geoTableManager = new ddbGeo.GeoDataManager(config);
      const query = {
        RadiusInMeter: coords.radius,
        CenterPoint: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      };
      const items = await geoTableManager.queryRadius(query);
      return items;
    }
    catch (err) {
      console.log('An error occurred while searching DynamoDB');
      console.log(err);
    }
  }

  /**
 * Transform the raw item values to workable objects
 * @param {Array} items - Array of raw geo data for matching items
 * @return {Array} Transformed data transfer items
 */
function transformItems(items) {
    const transformedItems = [];
    if (items) {
      items.map(item => {
        try {
          const coords = JSON.parse(item.geoJson.S);
          const transformedItem = {
            id: item.rangeKey.S,
            name: item.name.S,
            address: item.address.S,
            coords: {
              lat: coords.coordinates[1],
              lng: coords.coordinates[0],
            },
          };
  
          transformedItems.push(transformedItem);
        } catch (err) { }
      });
    }
  
    return transformedItems;
  }