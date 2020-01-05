const express = require('express')
const routes = express.Router()

const productController = require('./controllers/productController')

routes.get('/products', productController.index)
routes.get('/show/:id', productController.show)
routes.post('/products', productController.store)
routes.put('/update/:id', productController.update)
routes.delete('/delete/:id', productController.destroy)

module.exports = routes