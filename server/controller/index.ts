import initialParts, { newFeatureParameter, Client } from './data/info';

const store = () => {
  let clients: Client[] = [];
  let parts = initialParts;
  
  const addFeatureParameter = () => {
    const newFeature = newFeatureParameter;
    const randomPartIndex = Math.floor(Math.random() * initialParts.length);
    console.log(`New feature: ${newFeature}`);
    parts = parts.map((part) => (
      part.name === initialParts[randomPartIndex].name
        ? { ...part, features: [...part.features, newFeature] }
        : part
    ));
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
      console.log(`${clientId} Connection opened`);
      clients.push(newClient);
      return Promise.resolve();
    },
    removeClient: (clientId: number) => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter(client => client.id !== clientId);
      return Promise.resolve();
    },
  };
};

export default store;
