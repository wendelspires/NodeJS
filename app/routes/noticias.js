//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

    app.get('/noticias', function(req,res){

          var connection = app.config.dbConnection();
          var noticiasModel = new app.app.models.noticiasModel(connection);

          noticiasModel.getNoticias(function(error,result){
              res.render("noticias/noticias", {noticias : result});
          });
    });
};
