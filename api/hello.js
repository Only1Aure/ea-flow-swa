module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { message: "Hello from Azure Functions!" },
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
