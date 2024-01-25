import express from 'express';
import initTestRoute from './v1/test';
import { Dependencies } from './routes.model';

const router = express.Router();

const initRouter = (dependencies: Dependencies) => {
  router.use('/test', initTestRoute(dependencies));

  return router;
};

export default initRouter;
