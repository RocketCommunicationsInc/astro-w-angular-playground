const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const sleep = require('./sleep');

server.use(sleep);
server.use(middlewares);
server.use('/api/v1', router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});
