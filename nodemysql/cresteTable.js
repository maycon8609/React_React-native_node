const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'MSmy2097',
  database: 'nodeMysql'
})

function createTable(conn) {
  const sql = `CREATE TABLE IF NOT EXISTS clientes (\n
                id INT NOT NULL AUTO_INCREMENT,\n
                nome VARCHAR(80) NOT NULL,\n
                cpf CHAR(11) NOT NULL, \n
                PRIMARY KEY(id)\n
               );`

  conn.query(sql, function (error, results, fields) {
    if (error) console.log(error)
    console.log('criou a tabela!')
    addRows(conn)
  })
}

function addRows(conn) {
  const sql = "INSERT INTO clientes(nome, cpf) values ?"
  const values = [
    ['teste01', '12345678901'],
    ['teste02', '23456789012'],
    ['teste03', '34567890123']
  ]
  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error)
    console.log('adicionou registros!')
    conn.end()
  })
}

connection.connect(function (err) {
  if (err) console.log(err)
  console.log('conectou!!!')
  createTable(connection)
})