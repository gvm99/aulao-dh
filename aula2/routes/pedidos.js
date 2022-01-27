var express = require('express');
var router = express.Router();
var pedidosController = require('../controllers/pedidos');

router.put('/atualizar', pedidosController.atualizar);

router.post('/adicionar', pedidosController.adicionar);

router.put('/encerrar', pedidosController.encerrar);

router.get('/listar', pedidosController.listar);

module.exports = router;
