const { Fabricante } = require('../models')

const fabricanteController = {
    
    async listarFabricante (req, res) {
        const listaFabricantes = await Fabricante.findAll();
        res.json(listaFabricantes);
    },

    async cadastrarFabricante (req, res){
        const { nome } = req.body;

        const novoFabricante = await Fabricante.create({
            nome
        })
        res.status(201).json(novoFabricante);
    },

    async listarFabricanteEsp (req, res){
        const listaFabricantes = await Fabricante.findAll({where:{id:req.params.id}});

        listaFabricantes.length > 0 ?
            res.json(listaFabricantes)
            : res.status(404).json({erro:"Fabricante não existente"});
    },

    async deletarFabricanteEsp (req,res){
        const { id } = req.params;
        const tamanho = await Fabricante.count({where:{id:id}});

        if(tamanho > 0){
            await Fabricante.destroy({
                where:{
                    id,
                }
            })
            res.status(204).json({sucesso: "Fabricante apagado com sucesso"});
        }else{
            res.status(400).json({erro: "Fabricante não encontrado"});
        }        
    },

    async atualizarFabricanteEsp (req,res){
        const { id } = req.params;
        const { nome } = req.body;
        const tamanho = await Fabricante.count({where:{id:id}});

        if(tamanho > 0){
            
            const fabricanteAtualizado = await Fabricante.update({nome: nome}, { where:{ id } });
            res.json(fabricanteAtualizado);

        }else{
            res.status(400).json({erro: "Produto não existente"});
        }
    }
}

module.exports = fabricanteController;