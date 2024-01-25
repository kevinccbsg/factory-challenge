import express from 'express';
import { Dependencies } from './routes.model';
import initTestRoute from './v1/test';

const router = express.Router();

const initRouter = ({ validators }: Dependencies) => {
  router.use('/test', initTestRoute({ validators }));

  return router;
};

export default initRouter;
