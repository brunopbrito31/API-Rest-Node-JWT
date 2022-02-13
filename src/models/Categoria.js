const db = require('../database');
const { DataTypes } = require('sequelize');

const Categoria = db.define(
    'Categoria',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },

    },
    {
        tableName: 'categorias',
    }
);

module.exports = Categoria;