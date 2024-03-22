//importar módulo palimdromo
const utils = require("./src/utils.js");

//create a REST API using ExpressJs
const express = require('express');
const app = express();
app.use(express.json()); //Preparar o Express para fazer parse das requisições com JSON

//Ler da variável de ambiente ou usar a porta 3000 como padrão;
const port = process.env.PORT || 9000;

//Método para testar o estado do servidor Express
app.get("/status", (request, response) => {
    const status = {
       "Status": "Funcionando!"
    };
    response.send(status);
});
//metodo que processa json recebido e retorna se é palindromo e as ocorrências de caracteres
app.post("/api/manipulacao-string", (request, response) => {
    const { texto } = request.body;
    if (texto) {
        const resposta = {
            "palindromo": utils.isPalindromo(texto),
            "ocorrencias_caracteres": utils.verificarOcorrencia(texto),
        };
        response.send(resposta);
    } else {
        response.status(400).send("Texto não informado");
    }
    response.send(resposta);
});

//Inicializar o servidor Express
app.listen(port, () => {
    console.log("Servidor iniciado na porta:", port);
});