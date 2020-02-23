const express = require("express");
const http = require("http");

const app = express();

// Swagger and swagger-jsdoc
const swaggerJSDoc = require("swagger-jsdoc");
// Swagger UI for express used to serve swagger-ui with output of swagger-jsdoc
const swaggerUi = require("swagger-ui-express");

// swagger definition
const swaggerDefinition = {
  info: {
    title: "Example Swagger API",
    version: "1.0.0",
    description:
      "This is the Example API documentation and is using the OpenAPI spec."
  },
  basePath: "/"
};

// options for swagger jsdoc
const swaggerOptions = {
  swaggerDefinition: swaggerDefinition, // swagger definition
  apis: [
    "./dist/**/*.js", //a file with mocha test and swagger specs written above each implementation test
    "./dist/**/*.js" //a file with mocha test and swagger specs written above each implementation test
  ] // path where API specification are written
};

// initialize swaggerJSDoc generator (outputs swagger docs as JSON to variable)
const swaggerSpec = swaggerJSDoc(swaggerOptions);
// Server swagger at <apiurl>/docs using swagger-ui-express
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.set("port", process.env.PORT || 3001);
const server = http.createServer(app);

server.listen(process.env.PORT || 3001);
