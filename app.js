var express = require('express');
var app = express();


// criar as funções request e response para retornar o valor ao acessar a página
app.get('/',function(req,res){
  res.send("<html><body>Portal de Noticias</body></html>")
});

app.get('/tecnologia',function(req,res){
  res.send("<html><body>NOticias de tecnologia</body></html>")
});


app.listen(3000, function(){
  console.log("Servidor rodando com o Express");
});
