// Middleware Geral de Teste
module.exports = (req, res, next) => {
    console.log(`Rota acessada: ${req.originalUrl}`);
    next();
};