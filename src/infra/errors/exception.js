const { NotFound, MakeErrorClass } = require('fejl');

const exceptionsEnum = require('src/domain/enum/ExceptionsEnum');

class Business extends MakeErrorClass('Business') { };
class Contract extends MakeErrorClass('Contract') { };
class Integration extends MakeErrorClass('Integration') { };
class Operation extends MakeErrorClass('Operation') { };

module.exports = () => ({

    [exceptionsEnum.BUSINESS]: (error, errorType) => {
        if (!(error instanceof Error))
            error = new Business(error);

        error.errorType = errorType || exceptionsEnum.BUSINESS;
        error.statusCode = 422;

        return error;
    },

    [exceptionsEnum.CONTRACT]: ({ error, errorType = exceptionsEnum.CONTRACT, details = [] }) => {
        if (!(error instanceof Error))
            error = new Contract(error);

        error.errorType = errorType;
        error.details = details;
        error.statusCode = 400;

        return error;
    },

    [exceptionsEnum.INTEGRATION]: (error, errorType) => {
        if (!(error instanceof Error))
            error = new Integration(error);

        error.errorType = errorType || exceptionsEnum.INTEGRATION;
        return error;
    },

    [exceptionsEnum.OPERATION]: (error, errorType) => {
        if (!(error instanceof Error))
            error = new Operation(error);

        error.errorType = errorType || exceptionsEnum.OPERATION;
        error.statusCode = 403;
        return error;
    },

    [exceptionsEnum.NOT_FOUND]: (error, errorType) => {
        if (!(error instanceof Error))
            error = new NotFound(error);

        error.errorType = errorType || exceptionsEnum.NOT_FOUND;
        return error;
    }
});
