const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('src/interface/http/swagger/swagger.yaml');

module.exports = () => [swaggerUi.serve, swaggerUi.setup(swaggerDocument)];
