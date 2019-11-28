const express = require('express');
const router = express.Router();
const entregaService = require('../services/EntregaService');
const notFound = require('../middleware/not-found');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, async (request, response) => {
  const entrega = await entregaService.add(request.body);
  response
    .status(201)
    .json(entrega);
});

router.get('/', async (request, response) => {


});

router.get('/:entregasId', async (request, response) => {


});

router.patch('/:entregaId', checkAuth, async (request, response) => {


});

router.delete('/:entregaId', checkAuth, async (request, response) => {


});

module.exports = router;