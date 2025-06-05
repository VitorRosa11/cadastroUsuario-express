const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || idade === undefined) {
        return res.status(400).send('Erro: nome e idade são obrigatórios.');
    }

    if (typeof idade !== 'number') {
        return res.status(400).send('Erro: idade precisa ser um número.');
    }

    if (idade < 0) {
        return res.status(400).send('Erro: idade não pode ser menor que zero.');
    }

    res.send(`Usuário ${nome} com ${idade} anos cadastrado com sucesso!`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});