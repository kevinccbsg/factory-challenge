import { Response } from 'express';
import { Part, Client } from "./data/info";

export interface Controller {
  getParts: () => Promise<Part[]>;
  addFeatureParameter: () => Promise<void>;
  addClient: (clientId: number, response: Response) => Promise<void>;
  removeClient: (clientId: number) => Promise<void>;
  getClients: () => Promise<Client[]>;
}
