const express = require('express'); //Dependência de rotas => Express
const routes = express.Router();
const Product = require('./models/Product');

//Toda vez que o usuário acessar a rota do "get", fazer tal ação
// Req = O que recebo da requisição
// Res = O que envio como resposta
// routes.get("/", (req, res) => {
//     Product.create({
//         title:"Node teste",
//         description: "Testando",
//         url: "lucasgehl3n.github.io"
//     })
//     return res.send('Olá!')
// });

const ProductController = require('./controllers/ProductController');

//Rota para métodos get
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

//Rota para métodos post
routes.post('/products', ProductController.store);

//Rota para métodos put
routes.put('/products/:id', ProductController.update);


//Rota para método delete
routes.delete('/products/:id', ProductController.delete);


//Para permitir export através da
module.exports = routes;