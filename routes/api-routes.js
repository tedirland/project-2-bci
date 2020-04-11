// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) { 
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // All the checking is being re-routed through the call
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

    //This will be the post route to log in as a volunteer
  app.post("/api/volunteerlogin", passport.authenticate("volunteers"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(res)
    res.json({
      email: req.user.email,
      password: req.user.password
    });
  });

  //This will be the post route to log in as a client
  app.post("/api/clientlogin", passport.authenticate("clients"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

};
