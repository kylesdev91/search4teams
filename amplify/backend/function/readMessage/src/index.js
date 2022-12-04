/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const moment = require("moment");
const ddbGeo = require("dynamodb-geo");
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'});
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    await readMessage().then(data => {
        data.Items.forEach(function(item){
            console.log(item.geohash)
        })
    }).catch((err) => {
        console.error(err);
    })
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
    // body: JSON.stringify(moment().format()),
    };
};

function readMessage(){
    const params = {
        TableName: 'askJames-wheresStarbucks',
        Limit: 10
    }
    return ddb.scan(params).promise()
}
