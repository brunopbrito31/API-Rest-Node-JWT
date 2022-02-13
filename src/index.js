const express = require('express');
const app = express();
const routes = require('./routes');
const requestLog = require('./middlewares/requestLog');
require('dotenv').config();
const auth = require('./middlewares/auth');
const db = require('./database');
const handlerError = require('./middlewares/handlerError');

const port = 3200;

db.hasConnection();

// Middleware geral de testes
app.use(requestLog);

// Middleware de verificação de autenticação
app.use(auth);

// Permite o retorno em JSON
app.use(express.json());

// Rotas
app.use(routes);

// Middleware de tratamento de erros
app.use(handlerError);

app.listen(port, ()=> {
    console.log(`Servidor iniciado na porta: ${port}`);
});
