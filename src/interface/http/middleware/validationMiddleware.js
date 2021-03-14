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

module.exports = ({ logger }) => (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = validate(req, schema);
      if(error) return res.status(400).send({ details: wrapperError(error.details) });
      filterReceivedBody(req, value);
      if (req.body) logger.info({ 'REQUEST': req.body });
    } catch (err) {
      next(err);
    };
  };
};