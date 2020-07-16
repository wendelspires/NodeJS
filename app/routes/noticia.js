module.exports = function(app){
    //localhost:3000/noticia
    app.get('/noticia', function(req,res){

          //conexão com o banco de dados
          var connection = app.config.dbConnection();
          var noticiasModel = app.app.models.noticiasModel;


          noticiasModel.getNoticia(connection, function(error, result){
              res.render("noticias/noticia", {noticia : result});
          })
        });
    };
