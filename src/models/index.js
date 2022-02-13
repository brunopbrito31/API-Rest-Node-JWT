const Categoria = require('./Categoria');
const CategoriaProduto = require('./CategoriaProduto');
const Fabricante = require('./Fabricante');
const Produto = require('./Produto');
const Usuario = require('./Usuario');

Produto.belongsTo(Fabricante, {
    foreignKey: 'fabricante_id'
});

Fabricante.hasMany(Produto, {
    foreignKey: 'fabricante_id'
});

Produto.belongsToMany(Categoria,{
    foreignKey: "produto_id",
    through: CategoriaProduto,
})

Categoria.belongsToMany(Produto,{
    foreignKey: "categoria_id",
    through: CategoriaProduto,
})

module.exports={
    Fabricante,
    Produto,
    Categoria,
    Usuario
}