function atualizar (req, res, next) {
    const pedido = sequelize.findById(req.body.id);
    
    pedido.status = 'A caminho';

    sequelize.update(pedido);
    res.send({ status: 'sucesso'});
}

function adicionar (req, res, next) {
    sequelize.add(req.body);
    res.send({ status: 'sucesso'});
}

function encerrar (req, res, next) {
    const pedido = sequelize.findById(req.body.id);
    
    pedido.status = 'Encerrado';

    sequelize.update(pedido);
    res.send({ status: 'sucesso'});
}

function listar (req, res, next) {
    res.send(sequelize.listAll());
}

module.exports = {
    atualizar,
    adicionar,
    encerrar,
    listar
}