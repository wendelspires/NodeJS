var http = require ('http');

var server = http.createServer(function (req, res){

  var categoria = req.url;

  if(categoria == '/tecnologia'){
    res.end("<html><body>Noticias de tecnologia</body></html>")
  }

  else if(categoria == '/mercado'){
    res.end("<html><body>Noticias de mercado</body></html>")
  }

  else if(categoria == '/robôs'){
    res.end("<html><body>Noticias de mercado</body></html>")
  }

  else if(categoria == '/cnpi'){
    res.end("<html><body>Melhor analista CNPI do Brasil!!</body></html>")
  }


  else {
    res.end("<html><body>Track Record de Estrategias</body></html>")
  }

});

server.listen(3000);
