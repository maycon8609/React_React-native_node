const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index) //lista
routes.get('/products/:id', ProductController.show) //buscar
routes.post('/products', ProductController.storage) //inserir
routes.put('/products/:id', ProductController.update) //atualizar
routes.delete('/products/:id', ProductController.destroy) //deletar

module.exports = routes