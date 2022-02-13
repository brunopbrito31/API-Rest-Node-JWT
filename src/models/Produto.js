const db = require('../database');
const { DataTypes } = require('sequelize');
const { Fabricantes } = require('../models/Fabricante')

const Produto = db.define(
    'Produtos', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        preco:{
            type: DataTypes.FLOAT,
        },
        quantidade:{
            type: DataTypes.INTEGER,
        },
        fabricante_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Fabricantes,
                key:'id'
            }
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'produtos',
    }
);

module.exports = Produto;