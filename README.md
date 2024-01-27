# factory-challenge

[![CI tests](https://github.com/kevinccbsg/factory-challenge/actions/workflows/ci.yaml/badge.svg)](https://github.com/kevinccbsg/factory-challenge/actions/workflows/ci.yaml)

This repository is a monorepo that uses npm workspaces to separate the backend server folder and the frontend in the client folder.

Server code is a basic [express](https://expressjs.com/) app with one enpoint that uses Server Sent Events to emit info to the frontend app.

Client code has a [React](https://react.dev/) app with [Antd](https://ant.design/) library, [i18next](https://www.i18next.com/) and [react-router-dom](https://reactrouter.com/en/main). The communication with the backend is by using EventSource.

Both workspaces are using [vitest](https://vitest.dev/) as a testing library.

The app is also Dockerized and deploy it using Google cloud run.

## Demo link

[Try out here](https://factory-app-hkqpmww4gq-ew.a.run.app) (It uses Google cloud run serverless. Therefore the first load might be slow due to cold start).
[OpenAPI docs](https://factory-app-hkqpmww4gq-ew.a.run.app/api-docs/)

## Tools Used

- Core Tools
  - [Node.js](https://nodejs.org/en)
  - [Typescript](https://www.typescriptlang.org/)
  - [npm](https://www.npmjs.com/)
  - [vitest](https://vitest.dev/)
- Backend tools
  - [Express](https://expressjs.com/)
  - [express-jsdoc-swagger](https://www.npmjs.com/package/express-jsdoc-swagger)
  - [error-handler-module](https://www.npmjs.com/package/error-handler-module)
  - [helmet](https://www.npmjs.com/package/helmet)
  - [compression](https://www.npmjs.com/package/compression)
- Frontend tools
  - [React](https://react.dev/)
  - [Antd](https://ant.design/)
  - CSS modules
  - [i18next](https://www.i18next.com/)
  - [react-router-dom](https://reactrouter.com/en/main)
- Deployment
  - [Docker](https://www.docker.com/)
  - [Google cloud run](https://cloud.google.com/run?hl=en)

## Running the App

To run the application, follow these steps:

1. Install the dependencies for both the backend server and the frontend client:

```bash
npm install
```

2. Start the backend server in one terminal (Default Port 4000):

```bash
npm run server:dev
```

3. Start the frontend client (Default Port: 5173):

```bash
npm run client:dev
```

If you want to run the tests

```bash
# server tests
npm run test:server
# client tests
npm run test:client
```

## Future improvements

- Add better meta tags like open graph.
- Improve Server Sent Events tests, both frontend and backend.
- Add cypress E2E tests.
