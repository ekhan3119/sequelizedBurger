//requires node packages
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//require routes
var routes = require("./routes/handlers");

//Server listening to port set up
var PORT = process.env.PORT || 8080;
var app = express();
//Parse app Body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Static Directory
app.use(express.static("public"));

//Config express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Specify routes
app.use("/", routes);
//start the express app
app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});