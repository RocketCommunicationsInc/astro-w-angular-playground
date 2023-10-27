const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
// for undo testing of optimistic updates on error
// server.use((req, res, next) => {
//   if (req.method === 'PUT') {
//     res.status(500).send('Unknown error');
//     return;
//   }
//   next();
// });
server.use('/api/v1', router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});
