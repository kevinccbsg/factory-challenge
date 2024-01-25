import express from 'express';
import { Dependencies } from '../routes.model';

const router = express.Router();

const initRouter = ({ controller }: Dependencies) => {
  /**
   * GET /api/v1/test/
   * @summary Test route
   * @tags Test
   * @return 500 - Internal server error
   */
  router.get('/', async (req, res, next) => {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);

    const parts = await controller.getParts();
  
    const data = `data: ${JSON.stringify(parts)}\n\n`;
    res.write(data);

    const clientId = Date.now();
    
    console.log(`${clientId} Connection opened`);
    await controller.addClient(clientId, res);

    const intervalId = setInterval(controller.addFeatureParameter, 3000);

    req.on('close', async () => {
      console.log(`${clientId} Connection closed`);
      await controller.removeClient(clientId);
      clearInterval(intervalId);
    });

    req.on('error', async (error) => {
      console.log(`${clientId} Connection error: ${error}`);
      await controller.removeClient(clientId);
      clearInterval(intervalId);
    });
  });

  return router;
};

export default initRouter;
