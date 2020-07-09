var http = require ('http');

var server = http.createServer(function (req, res){

  res.end("<html><body>Track Record de Estrategias</body></html>")

});

server.listen(3000);
