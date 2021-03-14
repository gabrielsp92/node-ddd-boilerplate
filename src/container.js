const awilix = require('awilix');
const container = awilix.createContainer();

const Config = require('../config');
const Application = require('src/app/Application');
const Server = require('src/interface/http/Server');
const Router = require('src/interface/http/Router');

container
  .register({
    config: awilix.asValue(Config),
    server: awilix.asClass(Server).singleton(),
    router: awilix.asFunction(Router).singleton(),
    application: awilix.asClass(Application).singleton(),
    container: awilix.asValue(container),
  })
  .loadModules(
    [],
    {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY
      }
    }
  );

  module.exports = container;