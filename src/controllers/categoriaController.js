const { Categoria } = require('../models')

const categoriaController = {
    
    async listarCategoria (req, res) {
        const listaCategorias = await Categoria.findAll();
        res.json(listaCategorias);
    },

    async cadastrarCategoria (req, res){
        const { nome } = req.body;

        const novaCategoria = await Categoria.create({
            nome
        })
        res.status(201).json(novaCategoria);
    },

    async listarCategoriaEsp (req, res){
        const listaCategorias = await Categoria.findAll({where:{id:req.params.id}});

        listaCategorias.length > 0 ?
            res.json(listaCategorias)
            : res.status(404).json({erro:"Categoria não existente"});
    },

    async deletarCategoriaEsp (req,res){
        const { id } = req.params;
        const tamanho = await Categoria.count({where:{id:id}});

        if(tamanho > 0){
            await Categoria.destroy({
                where:{
                    id,
                }
            })
            res.status(204).json({sucesso: "Categoria apagada com sucesso"});
        }else{
            res.status(400).json({erro: "Categoria não encontrada"});
        }        
    },

    async atualizarCategoriaEsp (req,res){
        const { id } = req.params;
        const { nome } = req.body;
        const tamanho = await Categoria.count({where:{id:id}});

        if(tamanho > 0){
            
            const categoriaAtualizada = await Categoria.update({nome: nome}, { where:{ id } });
            res.json(categoriaAtualizada);

        }else{
            res.status(400).json({erro: "Categoria não existente"});
        }
    }
}

module.exports = categoriaController;