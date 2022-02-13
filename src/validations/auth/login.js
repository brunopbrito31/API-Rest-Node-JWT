const { validate, Joi } = require('express-validation');

// Validação dos dados de Usuário no Login
module.exports = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(4).required(),
    }),
})