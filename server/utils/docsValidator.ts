import { Express } from 'express';
import expressJSDocSwagger, { Options } from 'express-jsdoc-swagger';

interface Dependencies {
  app: Express;
  config: Options;
}

const initDocs = ({ config, app }: Dependencies): Promise<void> =>
  new Promise((resolve, reject) => {
    const instance = expressJSDocSwagger(app)(config);

    instance.on('finish', () => {
      resolve();
    });

    instance.on('error', (error) => {
      reject(error);
    });
  });

export default initDocs;
