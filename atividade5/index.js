const express = require('express');
const estoque = require('./util/estoque');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.adicionarProduto(id, nome, qtd);
    res.send('Produto adicionado ao estoque.');
});

app.get('/listar', (req, res) => {
    const produtos = estoque.listarProdutos();
    res.json(produtos);
});

app.get('/remover/:id', (req, res) => {
    const id = req.params.id;
    estoque.removerProduto(id);
    res.send('Produto removido do estoque.');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.editarProduto(id, qtd);
    res.send('Quantidade do produto atualizada.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});