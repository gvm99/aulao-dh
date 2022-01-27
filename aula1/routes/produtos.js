var express = require('express');
var router = express.Router();
const produtosController = require('../controller/produtos');

const produtos = [];

router.get('/', produtosController.listaGeral);

router.post('/create', produtosController.createProduto);

router.get('/find/:id', produtosController.findById);

router.delete('/:id', produtosController.deleteProduct);

module.exports = router;
