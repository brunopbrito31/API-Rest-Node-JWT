const db = require('../database');
const { DataTypes } = require('sequelize');
const { Categoria } = require('../models/Categoria');
const { Produto } = require('../models/Produto');

const CategoriaProduto = db.define(
    'CategoriaProduto', 
    {
        categoria_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Categoria,
                key:'id'
            }
        },
        produto_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Produto,
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
        tableName: 'categoria_produto',
    }
);

module.exports = CategoriaProduto;