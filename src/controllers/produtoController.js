const { Produto, Fabricante, Categoria } = require('../models')

const produtoController = {
    
    async listarProduto (req, res) {
        const listaProdutos = await Produto.findAll({
            include: Fabricante
        });
        res.json(listaProdutos);
    },

    async cadastrarProduto (req, res){
        const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

        const novoProduto = await Produto.create({
            nome, preco, quantidade, fabricante_id
        })

        const categoria = await Categoria.findByPk(categoria_id);

        await novoProduto.setCategoria(categoria);

        res.status(201).json(novoProduto);
    },

    async listarProdutoEsp (req, res){
        const listaProdutos = await Produto.findAll({where:{id:req.params.id}});

        listaProdutos.length > 0 ?
            res.json(listaProdutos)
            : res.status(404).json({erro:"Produto não existente"});
    },

    async deletarProdutoEsp (req,res){
        const { id } = req.params;
        const tamanho = await Produto.count({where:{id:id}});

        if(tamanho > 0){
            await Produto.destroy({
                where:{
                    id,
                }
            })
            res.status(204).json({sucesso: "Produto apagado com sucesso"});
        }else{
            res.status(400).json({erro: "Produto não encontrado"});
        }        
    },

    async atualizarProdutoEsp (req,res){
        const { id } = req.params;
        const { nome, preco, quantidade, fabricante_id } = req.body;
        const tamanho = await Produto.count({where:{id:id}});

        if(tamanho > 0){
            
            const produtoAtualizado = await Produto.update({
                nome, 
                preco, 
                quantidade,
                fabricante_id
            },
            {
                where:{
                    id,
                }
            })

            res.json(produtoAtualizado);
        }else{
            res.status(400).json({erro: "Produto não existente"});
        }
    }
}

module.exports = produtoController;