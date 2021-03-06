// Requiring necessary npm packages
var express = require("express");
// var session = require("cookie-session");
var exphbs = require("express-handlebars")

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
//Setting Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: 'main' }));
app.set("view engine", "handlebars");

// Requiring our orm for our filtering needs
var orm = require("./config/orm.js");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/posts-api-routes.js")(app);
require("./routes/volunteer-api-routes.js")(app);
require("./routes/client-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
