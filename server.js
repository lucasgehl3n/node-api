//Nodemon => para execução automática no nodeserver
const express = require('express'); //Dependência de rotas => Express

//Iniciando o app
const app = express();
const Product = require('./src/models/Product');
app.use(express.json()); //Permitindo envio de dados json

//Sempre que tiver /api vai fazer requisição do arquivo
app.use('/api', require('./src/routes'));

app.listen('3001'); //Definir qual a porta