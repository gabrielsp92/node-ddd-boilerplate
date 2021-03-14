const { Router } = require('express');
const Status = require('http-status');

/**
    * @param {Object} ctx - Dependency Injection.
    * @param {import('src/app/operations/listCharactersOperations')} ctx.listCharactersOperation
    */
module.exports = (ctx) => ({
    findCharacters: async (req, res, next) => {
      try {
        const params = req.query;
        const result = await ctx.listCharactersOperation.execute(params);
        return res.status(Status.OK).json(result);
      } catch (err) {
        console.log(err)
        next(err);
      }
    },

    get router() {
      const router = Router();
      
      router.get('/', ctx.validationMiddleware(ctx.listCharacterSchema), this.findCharacters);

      return router;
    }

});
