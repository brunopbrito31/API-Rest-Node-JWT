const { Usuario } = require("../models");
const secret = require('../configs/secret');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const AuthController = {

    async login(req, res){
        const { email, senha } = req.body;

        // Busca do usuário na base
        const usuarioProcurado = await Usuario.findOne(
            {where: {email: email}}
        );
        
        // Verifica se o usuário existe na base para continuar com a verificação, da senha
        if(!usuarioProcurado){
            res.status(400).json("Usuário ou senha inválido");
        }

        // Caso o usuário exista, Verifica a senha
        const senhaValida = bcrypt.compareSync(senha, usuarioProcurado.senha);
        
        if(senhaValida){
            const token = jwt.sign(
                {
                    id: usuarioProcurado.id,
                    email: usuarioProcurado.email,
                    nome: usuarioProcurado.nome,
                },
                secret.key
            );

            return res.status(200).json(token);
        }else{
            return res.status(400).json("Usuário ou senha inválido");
        }
            
    }
};

module.exports = AuthController;