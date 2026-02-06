//importando a framework para dentro do script
const express = require('express');

//importa as configuracoes de outro arquivo dentro da mesma pasta
const routes = require('./routes')

//cria um novo app usando o express
const app = express();

//configura o express para usar o padrao json de comunicacao
app.use(express.json())
app.use(routes)


//abre a porta 3001 para rodar o servico
app.listen(3001)