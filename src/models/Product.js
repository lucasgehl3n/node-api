const db = require('./db');
const ProductSchema = db.sequelize.define('product', {
    title:{
        type: db.DataTypes.STRING,
        required: true
    },
    description:{
        type: db.DataTypes.STRING, 
        required: true
    },
    url:{
        type: db.DataTypes.STRING, 
        required: true
    },
    createdAt:{
        type: db.DataTypes.DATE,
        default: Date.now
    }
});

// ProductSchema.sync({force: true});  --utilizado para criação do schema
module.exports = ProductSchema;

