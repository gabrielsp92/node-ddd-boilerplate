/**
    * @param {Object} container - Dependency Injection.
    * @param {import('src/infra/logging/logger')} container.logger
    * @param {import('src/interface/http/constants/HttpConstants')} container.httpConstants
    */
module.exports = ({ logger, httpConstants }) => (err, req, res, next) => {
    logger.error(err);

    const statusCode = err.statusCode || httpConstants.code.INTERNAL_SERVER_ERROR;

    const errorCustom = {
        message: err.message,
        statusCode,
        details: err.details || []
    };
    return res.status(statusCode).json(errorCustom);
};
