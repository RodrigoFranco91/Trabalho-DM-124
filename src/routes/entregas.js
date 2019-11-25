const express = require('express');
const router = express.Router();

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