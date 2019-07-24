var path = require('path');


// Routing
function htmlRoutes(app){
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    });

    app.use(function(req,res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}
// Export to main server
module.exports = htmlRoutes;