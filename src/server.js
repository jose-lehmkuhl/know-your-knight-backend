const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(require('./routes'));

const app = server.listen(8000, () => {
  console.log('server listening at port 8000');
});


module.exports = app;
