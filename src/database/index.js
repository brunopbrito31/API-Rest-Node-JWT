const Sequelize = require('sequelize');

const DB_NAME  = 'loja';
const DB_USER = process.env.DbMySql_User;
const DB_PASSWORD = process.env.DbMySql_Pass;
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

// Objeto para guardar a conexão com o banco de dados para
let db = {};

try {
    db = new Sequelize(
        DB_NAME, 
        DB_USER, 
        DB_PASSWORD, 
        DB_CONFIG
    );
} catch( error ){
    console.error("Erro ao tentar uma conexão com o banco de dados")
}

async function hasConnection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado")
    }catch( error ){
        console.error("Erro ao tentar se conectar ao banco de dados");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;

