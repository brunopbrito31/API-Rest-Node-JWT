const { validate, Joi} = require('express-validation');

// Validação dos dados necessários para a criação de um usuário
module.exports = validate({
    body:Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required().min(4)
    })
});