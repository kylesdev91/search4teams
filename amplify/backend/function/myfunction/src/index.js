
const moment = require('moment')
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(moment().format()),
    };
    return response;
};
