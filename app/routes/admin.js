module.exports = function(app){

  app.get('/formulario_inclusao_noticia', function(req,res){
    res.render("admin/form_add_noticia")
  });

  app.post('/noticias/salvar', function(req,res){
    var noticia = req.body;

    //conexao com o banco de dados
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;

    //salvar noticia
    noticiasModel.salvarNoticia(noticia,connection, function(error,result){
        res.redirect('/noticias');
    })
  });
}
