const express = require('express');

const server = express();

server.use(express.json());
server.use(require('./routes'));

server.listen(8000, () => {
  console.log('server listening at port 8000');
});

module.exports = server;
