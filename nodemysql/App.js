const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mysql = require('mysql')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = express.Router()
router.get('/', (req, res) => res.json({message: 'Funcionando!'}))
app.use('/', router)

app.listen(port)
console.log('Api funcionando!')

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'MSmy2097',
    database : 'nodeMysql'
  })

  connection.query(sqlQry, function(error, results, fields){
    if(error)
      res.json(error);
    else
      res.json(results)
    connection.end()
    console.log('Executou consulta!')
  })
}

router.get('/clientes', (req, res) => {
  execSQLQuery('SELECT * FROM clientes', res)
})

router.get('/clientes/:id?', (req, res) => {
  let filter = ''
  if(req.params.id) filter = 'WHERE ID =' + parseInt(req.params.id)
  execSQLQuery(`SELECT * FROM clientes ${filter}`, res)
})

router.delete('/clientes/:id', (req, res) => {
  execSQLQuery('DELETE FROM clientes WHERE ID =' + parseInt(req.params.id), res)
})

router.post('/clientes', (req, res) => {
  const nome = req.body.nome.substring(0,80)
  const cpf = req.body.cpf.substring(0,11)
  execSQLQuery(`INSERT INTO clientes(nome, cpf) VALUES('${nome}', '${cpf}')`, res)
})

router.patch('/clientes/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const nome = req.body.nome.substring(0,80)
  const cpf = req.body.cpf.substring(0,11)
  execSQLQuery(`UPDATE clientes SET nome='${nome}', cpf='${cpf}' WHERE id=${id}`, res)
})
