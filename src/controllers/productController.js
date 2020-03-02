const Product = require('../models/Product');

module.exports = {
    async index(req, res){
        const product  = await Product.findAll(); //Await faz ele só retornar depois de buscar tudo
        return res.json(product);
    },

    //Get
    async show(req,res){
        //req.params pegando uma posição do json
        const product = await Product.findByPk(req.params.id);
        return res.json(product);
    },

    //Insert
    async store(req, res){
        const product = await Product.create(req.body); //Passando como parâmetro o json que recebi
        return res.json(product);
    },

    //Update
    async update(req, res){
        const product = await Product.update(req.body, {
                            where: {
                                'id': req.params.id
                            }
                        });

        return res.json(product);
    },

    //Delete
    async delete(req, res){
        await Product.destroy({
            where: {
                'id': req.params.id
            }
        });
        
        return res.send();
    }
}