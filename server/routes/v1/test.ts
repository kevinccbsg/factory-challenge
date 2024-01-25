import express from 'express';
import { tagError } from 'error-handler-module';
import { Dependencies } from '../routes.model';

const router = express.Router();

const initRouter = ({ validators }: Dependencies) => {
  const { validateResponse } = validators;
  /**
   * GET /api/v1/test/
   * @summary Test route
   * @tags Recipes
   * @return {RecipesResponse} 200 - Recipe list data
   * @return 401 - Unauthorized
   * @return 404 - Not found
   * @return 500 - Internal server error
   */
  router.get('/', async (req, res, next) => {
    try {
      validateResponse({}, req);
      return res.json({});
    } catch (error) {
      return next(tagError(error));
    }
  });


  return router;
};

export default initRouter;
