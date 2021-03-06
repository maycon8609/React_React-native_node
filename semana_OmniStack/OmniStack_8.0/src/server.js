const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://maycon:maycon@omnistack-v6g9v.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

server.use(express.json())
server.use(routes)
server.listen(3333)
