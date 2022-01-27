var express = require('express');
var router = express.Router();
var produtosController = require('../controllers/produtos');

router.get('/', produtosController.lista);

router.post('/cadastro', produtosController.cadastro);

router.put('/edicao', produtosController.editar);

router.delete('/:id', produtosController.deletar);


module.exports = router;
