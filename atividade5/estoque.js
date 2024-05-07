let estoque = [];

module.exports = {
    adicionarProduto: function(id, nome, qtd) {
        estoque.push({ id, nome, qtd });
    },
    listarProdutos: function() {
        return estoque;
    },
    removerProduto: function(id) {
        estoque = estoque.filter(produto => produto.id !== id);
    },
    editarProduto: function(id, qtd) {
        const produto = estoque.find(produto => produto.id === id);
        if (produto) {
            produto.qtd = qtd;
        } else {
            throw new Error("Produto não encontrado.");
        }
    }
};