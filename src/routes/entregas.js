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
  const entregas = await entregaService.getAll();
  entregas && entregas.length
    ? response.json(entregas)
    : response.status(204).end();
});

router.get('/:entregasId', async (request, response) => {
  const entrega = await entregaService.getById(request.params.entregasId);
  entrega
    ? response.json(entrega)
    : notFound(request, response);
});

router.patch('/:entregaId', checkAuth, async (request, response) => {
  const updatedEntrega = await entregaService.update(
    request.params.entregaId,
    request.body
  );
  updatedEntrega
    ? response.json(updatedEntrega)
    : notFound(request, response);

});

router.delete('/:entregaId', checkAuth, async (request, response) => {
  const isDeleted = await entregaService.delete(request.params.entregaId);
  isDeleted
    ? response.end()
    : notFound(request, response)
});

module.exports = router;