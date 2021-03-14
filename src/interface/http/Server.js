const express = require('express');
const morgan = require('morgan');
const { scopePerRequest } = require('awilix-express');

class Server {
    /**
    * @param {Object} container - Dependency Injection.
    * @param {import('../../../../config/index')} container.config
    * @param {import('src/interface/http/Router')} container.router
    * @param {import('src/container')} container.container
    */
    constructor ({ config, router, container }) {
        this.config = config;
        this.express = express();
        this.express.use(scopePerRequest(container));
        this.setRoutes(router);
        this.setLogger();
        this.setExceptions();
    }

    setRoutes(router) {
      this.express.use(router);
    }

    setLogger() {
      this.express.use(morgan('combined'));
    }

    setExceptions () {
        this.express.use(async (err, req, res, next) => {
            let title = 'Internal Server Error';
            if(err.name === 'Validation') title = 'Validation';
            return res.status(err.status || 500).json({ error: title, details:'err.message' });
        });
    }

    start() {
        const SERVER_PORT = this.config.application.port;
        const ENV = this.config.application.env;

        return this.express.listen(SERVER_PORT || 3000, () => {
            console.log(`Server started on port: ${ SERVER_PORT } - Environment ${ ENV }`);
        });

    }
}

module.exports = Server;
