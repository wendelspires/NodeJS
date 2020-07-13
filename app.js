var app = require('./config/server');

var rota_noticias = require('./app/routes/noticias');
rota_noticias(app);

var rota_home = require ('./app/routes/home');
rota_home(app);

var rota_formulario_inclusao_noticias = require('./app/routes/formulario_inclusao_noticia')
rota_formulario_inclusao_noticias(app);


app.listen(3000, function(){
  console.log('Servidor ON');
});
