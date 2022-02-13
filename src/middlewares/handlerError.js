const { UnauthorizedError } = require('express-jwt');
const { ValidationError } = require("express-validation");
// Captura os erros de validação e devolve para o usuário de forma amigável
module.exports = (error, req, res, next) => {
    // Verifica se é um erro de validação 
    if(error instanceof ValidationError) {
        return res.status(error.status).json(error);
    }

    // Verifica se é um erro de autorização
    if(error instanceof UnauthorizedError) {
        return res.status(error.status).json(error);
    }

    // Caso seja um erro genérico, declara como um erro interno
    return res.status(500).json(error);
};