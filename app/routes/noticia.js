module.exports = function(app){
    //localhost:3000/noticia
    app.get('/noticia', function(req,res){
          //conexão com o bancco de dados
          var connection = app.config.dbConnection();
          //efetuar a query no banco de dados
          connection.query('select * from noticias where id_noticia=2', function(error,result){
              res.render("noticias/noticia", {noticia : result});
          });
    });
};
