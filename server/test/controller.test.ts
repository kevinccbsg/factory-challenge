import { describe, it, expect, vitest, beforeEach } from 'vitest';
import { Response } from 'express';
import controller from '../controller';
import { Controller } from '../controller/controller.model';
import initialParts from '../data/info';

describe('controller tests', () => {
  let controllerInstance: Controller;
  beforeEach(() => {
    controllerInstance = controller();
  });
    
  it('should return parts', async () => {
    const parts = await controllerInstance.getParts();
    expect(parts.length).toBeGreaterThan(0);
    expect(parts).toEqual(initialParts);
  });

  it('should return clients', async () => {
    const clients = await controllerInstance.getClients();
    expect(clients).toHaveLength(0);
  });

  it('should add client', async () => {
    const clientId = Date.now();
    const res = vitest.fn() as unknown as Response;
    await controllerInstance.addClient(clientId, res);
    const clients = await controllerInstance.getClients();
    expect(clients).toHaveLength(1);
  });

  it('should remove client', async () => {
    const clientId = Date.now();
    const res = vitest.fn() as unknown as Response;
    await controllerInstance.addClient(clientId, res);
    await controllerInstance.removeClient(clientId);
    const clients = await controllerInstance.getClients();
    expect(clients).toHaveLength(0);
  });

  it('should add feature parameter', async () => {
    await controllerInstance.addFeatureParameter();
    const parts = await controllerInstance.getParts();
    expect(parts).not.toEqual(initialParts);
  });
});


