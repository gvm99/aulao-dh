let produtos = [];

function listaGeral(req, res, next) {
    res.send(produtos)
}

function createProduto(req, res, next) {
    const { id, produto, valor, categoria } = req.body;

    produtos.push({
        id, produto, valor, categoria
    });

    res.send({status: "OK"});
}

function findById(req, res, next) {
    const { id } = req.params;
    const resultado = produtos.find(produto => produto.id == id);
    

    res.send(resultado);
}

function deleteProduct(req, res, next) {
    const { id } = req.params;
    produtos = produtos.filter(produto => produto.id !== parseInt(id));
    

    res.send({status: "OK"});
}

module.exports = {
    listaGeral,
    createProduto,
    findById,
    deleteProduct,
}