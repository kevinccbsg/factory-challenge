import express from 'express';
import initPartsRoute from './v1/parts';
import { Dependencies } from './routes.model';

const router = express.Router();

const initRouter = (dependencies: Dependencies) => {
  router.use('/parts', initPartsRoute(dependencies));

  return router;
};

export default initRouter;
