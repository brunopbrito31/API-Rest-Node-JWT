const express = require('express');
const produtoController = require('../controllers/produtoController');
const fabricanteController = require('../controllers/fabricanteController');
const categoriaController = require('../controllers/categoriaController');
const usuarioController = require('../controllers/usuarioController');
const authController = require('../controllers/authController');
const authValidation = require('../validations/auth/login');
const usuarioCreateValidation = require('../validations/usuarios/create');
// const auth = require('../middlewares/auth');

const routes = express.Router();

// Produtos
routes.get("/produtos/lista", produtoController.listarProduto);
routes.post("/produtos/cadastrar", produtoController.cadastrarProduto);
routes.get("/produtos/lista/:id?", produtoController.listarProdutoEsp);
routes.delete("/produtos/:id/deletar", produtoController.deletarProdutoEsp);
routes.put("/produtos/:id/atualizar", produtoController.atualizarProdutoEsp);

// Categorias
routes.get("/categorias/lista", categoriaController.listarCategoria);
routes.post("/categorias/cadastrar", categoriaController.cadastrarCategoria);
routes.get("/categorias/lista/:id?", categoriaController.listarCategoriaEsp);
routes.delete("/categorias/:id/deletar", categoriaController.deletarCategoriaEsp);
routes.put("/categorias/:id/atualizar", categoriaController.atualizarCategoriaEsp);

// Fabricantes
routes.get("/fabricantes/lista", fabricanteController.listarFabricante);
routes.post("/fabricantes/cadastrar", fabricanteController.cadastrarFabricante);
routes.get("/fabricantes/lista/:id?", fabricanteController.listarFabricanteEsp);
routes.delete("/fabricantes/:id/deletar", fabricanteController.deletarFabricanteEsp);
routes.put("/fabricantes/:id/atualizar", fabricanteController.atualizarFabricanteEsp);

// Usuários
routes.post("/usuarios", usuarioCreateValidation, usuarioController.registro);

// Autenticação
routes.post("/logar", authValidation, authController.login);

module.exports = routes;