import * as express from "express";
var swaggerJSDoc = require('swagger-jsdoc');
import fs = require("fs");


let Swagger = function (app: express.Application) {
  // swagger definition
  var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger 002'
    },
    host: 'localhost:3300',
    basePath: '/'
  };

  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./**/*Routes.js', 'Routes.js', './**/*Definitions.js']
  };

  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

  // serve swagger
  app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
  const index = fs.readFileSync(`${pathToSwaggerUi}/index.html`)
    .toString()
    .replace("https://petstore.swagger.io/v2/swagger.json", "http://localhost:3300/swagger.json")
  fs.writeFileSync(`${pathToSwaggerUi}/index.html`, index);
  
  app.use("/swagger", express.static(pathToSwaggerUi));
}
export default Swagger;