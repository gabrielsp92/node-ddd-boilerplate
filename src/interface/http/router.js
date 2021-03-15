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

    ApiRouter.get('/health-check', (_, res) => res.json({ status: 'UP' }));
    ApiRouter.use('/character', handle(ctx.characterController.router));
    ApiRouter.use('/docs', ctx.swaggerMiddleware);
    
    DefaultRouter.use('/api', ApiRouter);
    DefaultRouter.use('/*', (_, res) => ctx.exception.notFound({ message: 'Not found' }));
    DefaultRouter.use(ctx.httpErrorMiddleware);

    return DefaultRouter;
};
