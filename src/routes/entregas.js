const express = require('express');
const router = express.Router();
const entregaService = require('../services/EntregaService');

router.post('/', checkAuth, async (request, response) => {


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