var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
htmlRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });