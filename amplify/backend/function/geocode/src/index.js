
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {

        fetch("https://reqbin.com/echo/get/json", {
        method: "GET",
        headers: {
          'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'
        },
      }
      )
        .then((response) => response.text())
        .then((text) => console.log(text));
};
