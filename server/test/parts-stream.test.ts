import nock from 'nock';
import { Express } from 'express';
import supertest from 'supertest';
import initApp from '../app';
import { beforeAll, describe, expect, it } from 'vitest';
import initialParts from '../controller/data/info';

describe('Conversation ai recipe test', () => {
  let request: Express;

  beforeAll(async () => {
    const { app } = await initApp();
    request = app;
  });

  it.skip('should receive SSE messages', async () => {
    const scope = nock('http://localhost:4000')
      .get('/api/v1/parts/stream')
      .reply(200, {
        data: initialParts,
      });
    
      
      
    const response = await supertest(request).get('/api/v1/parts/stream');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('text/event-stream');
    expect(response.text).toBe(
      `data: ${JSON.stringify(initialParts)}\n\n`
    );

    scope.done();
  });
});
