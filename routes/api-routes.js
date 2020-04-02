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

  //This will be the route to create a new client in the db
  app.post("/api/clients", function (req, res) {
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      category: req.body.category
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      //As long as everything is good, it directs them to the login page
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //This will be the post route to create a new volunteer in the db
  app.post("/api/volunteersignup", function (req, res) {
    db.Volunteer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      category: req.body.category
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      //As long as everything is good, it directs them to the login page
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/posts", function (req, res) {
 db.Post.findAll({
   id: req.params.id 
 })

 app.post("/api/post", function (req, res) {
  db.Post.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    category: req.body.category
  })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    //As long as everything is good, it directs them to the login page
    .catch(function (err) {
      res.status(401).json(err);
    });
});
 
  });
};
