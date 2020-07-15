var mysql = require('mysql');

var connMySQL = function(){

    return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'root',
    database : 'portal_noticias'
  });
}

module.exports = function(){
  console.log('o autoload carregou o modulo de conexao com bd');
  return connMySQL;
}
