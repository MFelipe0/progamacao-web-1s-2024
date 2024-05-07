const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(req.params.a, req.params.b);
    res.send(`O resultado da soma é: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(req.params.a, req.params.b);
    res.send(`O resultado da subtração é: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(req.params.a, req.params.b);
    res.send(`O resultado da multiplicação é: ${resultado}`);
});


app.get('/dividir/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.dividir(req.params.a, req.params.b);
        res.send(`O resultado da divisão é: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});