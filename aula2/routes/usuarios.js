var express = require('express');
var router = express.Router();

router.put('/esqueci-senha', function(req, res, next) {
    res.send({ status: 'sucesso'});
});

router.post('/cadastro', function(req, res, next) {
    res.send({ status: 'sucesso'});
});

router.put('/edicao', function(req, res, next) {
    res.send({ status: 'sucesso'});
});

router.post('/login', function(req, res, next) {
    res.send({ status: 'sucesso'});
});

module.exports = router;
