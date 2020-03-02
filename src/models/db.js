const { Sequelize, DataTypes, Model } = require('sequelize');

// Iniciando DB
const sequelize = new Sequelize('node', 'root', '', {
    host: "127.0.0.1",
    dialect : 'mysql',
    operatorsAliases: false
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize,
    DataTypes : DataTypes
}