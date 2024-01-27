import { Response } from 'express';
import initialParts, { newControlParameter, Client } from '../data/info';
import logger from '../utils/logger';

const controller = () => {
  let clients: Client[] = [];
  let parts = initialParts;
  
  const addFeatureParameter = () => {
    const newFeature = newControlParameter();
    const randomPartIndex = Math.floor(Math.random() * initialParts.length);
    const randomFeatureIndex = Math.floor(Math.random() * initialParts[randomPartIndex].features.length);

    parts = parts.map((part) => {
      if (part.name !== initialParts[randomPartIndex].name) return part;
      const updatedFeatures = part.features.map((feature, index) => {
        if (index !== randomFeatureIndex) return feature;
        return {
          ...feature,
          controls: [newFeature, ...feature.controls],
        };
      });

      return {
        ...part,
        features: updatedFeatures,
      };
    });

    return Promise.resolve();
  };

  return {
    getParts: () => Promise.resolve(parts),
    addFeatureParameter,
    getClients: () => Promise.resolve(clients),
    addClient: (clientId: number, response: Response) => {
      const newClient = {
        id: clientId,
        response,
      };
      logger.info(`${clientId} Connection opened`);
      clients.push(newClient);
      return Promise.resolve();
    },
    removeClient: (clientId: number) => {
      logger.info(`${clientId} Connection closed`);
      clients = clients.filter(client => client.id !== clientId);
      return Promise.resolve();
    },
  };
};

export default controller;
