const express = require('express');
const morgan = require('morgan');
const { scopePerRequest } = require('awilix-express');

class Server {
    /**
    * @param {Object} container - Dependency Injection.
    * @param {import('../../../../config/index')} container.config
    * @param {import('src/interface/http/Router')} container.router
    * @param {import('src/infra/logging/logger')} container.logger
    * @param {import('src/container')} container.container
    */
    constructor ({ config, router, container, logger }) {
        this.config = config;
        this.logger = logger;
        this.express = express();
        this.express.use(scopePerRequest(container));
        this.express.use(morgan('combined', { stream: this.logger.stream }));
        this.express.use(router);
        this.setExceptions();
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
            this.logger.info(`Server started on port: ${ SERVER_PORT } - Environment ${ ENV }`);
        });

    }
}

module.exports = Server;
