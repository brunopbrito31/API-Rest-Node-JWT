const { Usuario } = require('../models/index');
const bcrypt = require('bcryptjs');

const usuarioController = {
    
    async listarUsuarios (req, res) {
        const listaUsuarios = await Usuario.findAll();
        res.json(listaUsuarios);
    },

    async registro (req, res){
        const { nome, email, senha } = req.body;

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha,10);
        
        // Salva o usuário no banco
        const novoUsuario = await Usuario.create({
            nome : nome, 
            email: email, 
            senha: senhaCriptografada
        });

        res.status(201).json(novoUsuario);
    },

    



    // async deletarProdutoEsp (req,res){
    //     const { id } = req.params;
    //     const tamanho = await Produto.count({where:{id:id}});

    //     if(tamanho > 0){
    //         await Produto.destroy({
    //             where:{
    //                 id,
    //             }
    //         })
    //         res.status(204).json({sucesso: "Produto apagado com sucesso"});
    //     }else{
    //         res.status(400).json({erro: "Produto não encontrado"});
    //     }        
    // },

    // async atualizarProdutoEsp (req,res){
    //     const { id } = req.params;
    //     const { nome, preco, quantidade, fabricante_id } = req.body;
    //     const tamanho = await Produto.count({where:{id:id}});

    //     if(tamanho > 0){
            
    //         const produtoAtualizado = await Produto.update({
    //             nome, 
    //             preco, 
    //             quantidade,
    //             fabricante_id
    //         },
    //         {
    //             where:{
    //                 id,
    //             }
    //         })

    //         res.json(produtoAtualizado);
    //     }else{
    //         res.status(400).json({erro: "Produto não existente"});
    //     }
    // }
}

module.exports = usuarioController;