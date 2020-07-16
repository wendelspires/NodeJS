module.exports = function(app){
    //localhost:3000/noticia
    app.get('/noticia', function(req,res){

          //conexão com o banco de dados
          var connection = app.config.dbConnection();
          var noticiasModel = new app.app.models.noticiasModel(connection);


          noticiasModel.getNoticia(function(error, result){
              res.render("noticias/noticia", {noticia : result});
          })
        });
    };
