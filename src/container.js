const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Application = require('src/app/Application');
const Server = require('src/interface/http/Server');
const Router = require('src/interface/http/Router');
const Logger = require('src/infra/logging/logger');
const RickAndMortyApiClient = require('src/infra/integration/rest/RickAndMortyApiClient');
const Axios = require('axios');

container
  .register({
    config: awilix.asValue(Config),
    axios: awilix.asValue(Axios),
    rickAndMortyApiClient: awilix.asClass(RickAndMortyApiClient).singleton(),
    server: awilix.asClass(Server).singleton(),
    server: awilix.asClass(Server).singleton(),
    router: awilix.asFunction(Router).singleton(),
    application: awilix.asClass(Application).singleton(),
    logger: awilix.asFunction(Logger).singleton(),
    container: awilix.asValue(container),
  })
  .loadModules(
    [
      'src/interface/http/middleware/**/*.js',
      'src/interface/http/schemas/**/*.js',
      'src/interface/http/controllers/**/*.js',
      'src/app/services/*.js',
      'src/app/operations/*.js',
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY
      }
    }
  );

  module.exports = container;