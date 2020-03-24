const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'api working' }));

module.exports = routes;
