const db = require('../database');
const { DataTypes } = require('sequelize');

const Usuario = db.define(
    'Usuario', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        senha:{
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
        tableName: 'usuarios',
    }
);

module.exports = Usuario;