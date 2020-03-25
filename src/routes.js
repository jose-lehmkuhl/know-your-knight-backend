const { Router } = require('express');
const KnightController = require('./Controllers/KnightController');

const routes = Router();

routes.get('/destinations', KnightController.get2turnsDestination);

module.exports = routes;
