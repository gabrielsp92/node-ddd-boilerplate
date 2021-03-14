const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Application = require('src/app/Application');
const Server = require('src/interface/http/Server');
const Router = require('src/interface/http/Router');
const Logger = require('src/infra/logging/logger');

container
  .register({
    config: awilix.asValue(Config),
    server: awilix.asClass(Server).singleton(),
    router: awilix.asFunction(Router).singleton(),
    application: awilix.asClass(Application).singleton(),
    logger: awilix.asFunction(Logger).singleton(),
    container: awilix.asValue(container),
  })
  .loadModules(
    ['src/interface/http/middleware/**/*.js',],
    {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY
      }
    }
  );

  module.exports = container;