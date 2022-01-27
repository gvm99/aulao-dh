let produtos = [];

function lista(req, res, next) {
    res.send(produtos);
}

function cadastro(req, res, next) {
    const { id, titulo, descricao, valor, estoque, vendedor_ID } = req.body;

    produtos.push({
        id, titulo, descricao, valor, estoque, vendedor_ID
    });

    res.send({ status: 'sucesso'});
}

function editar (req, res, next) {
    res.send({ status: 'sucesso'});
}

function deletar (req, res, next) {
    const { id } = req.params;
    produtos = produtos.filter(produto => produto.id !== parseInt(id))
    res.send({ status: 'sucesso'});
}

module.exports = {
    lista,
    cadastro,
    editar,
    deletar
}