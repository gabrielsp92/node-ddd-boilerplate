const wrapperError = (error) => {
  return error.map(({
    message,
    path
  }) => ({
    message,
    path: path.join('.')
  }));
};

const validate = (req, schema) => schema.validate(req, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
});

const filterReceivedBody = (req, value) => (req.body = value.body);

module.exports = ({ logger, exception }) => (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = validate(req, schema);
      if(error) {
        error.details = wrapperError(error.details) 
        throw exception.contract(error);
      } 

      filterReceivedBody(req, value);
      if (req.body) logger.info({ 'REQUEST': req.body });
      
      next();
    } catch (err) {
      next(err);
    };
  };
};