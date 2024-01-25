import express from 'express';
import { Dependencies } from '../routes.model';

const router = express.Router();

const initRouter = ({ controller }: Dependencies) => {
  /**
   * GET /api/v1/parts/stream
   * @summary Parts stream information
   * @tags Parts
   * @return 500 - Internal server error
   */
  router.get('/', async (req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);

    const parts = await controller.getParts();

    const clientId = Date.now();

    await controller.addClient(clientId, res);

    const data = `data: ${JSON.stringify(parts)}\n\n`;
    
    res.write(data);
    res.flush();

    const intervalId = setInterval(async () => {
      await controller.addFeatureParameter();
      const clients = await controller.getClients();
      const parts = await controller.getParts();
      clients.forEach((client) => {
        const data = `data: ${JSON.stringify(parts)}\n\n`;
        client.response.write(data);
        res.flush();
      });
    }, 5000);

    req.on('close', async () => {
      await controller.removeClient(clientId);
      clearInterval(intervalId);
      res.end();
    });

    req.on('error', async (error) => {
      console.log(`${clientId} Connection error: ${error}`);
      await controller.removeClient(clientId);
      clearInterval(intervalId);
      res.end();
    });
  });

  return router;
};

export default initRouter;
