const express = require('express');
const handle = require('express-async-handler');
const compression = require('compression');

const DefaultRouter = express.Router();
const ApiRouter = express.Router();

/**
 * @param {Object} ctx - Dependency Injection.
 */
module.exports = (ctx) => {

    DefaultRouter
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(compression());

        
    DefaultRouter.use('/api', ApiRouter);

    ApiRouter.get('/health-check', (_, res) => res.json({ status: 'UP' }));
        
    ApiRouter.use('/docs', ctx.swaggerMiddleware);
        

    DefaultRouter.use('/*', (_, res) => res.status(404).send({ message: 'Not found' }));

    return DefaultRouter;
};
