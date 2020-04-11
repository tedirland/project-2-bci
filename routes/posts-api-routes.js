// Setting up CRUD Routes for Post Model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // ****** All Get Routes ******

  // GET route for getting all of the posts displayed at the top level of browse-posts.html
  app.get("/api/posts", function (req, res) {
   db.Post.findAll().then(function (dbPost) {
      res.json(dbPost);
    });
  });
  // Restrictive findAll from the filter
  app.get("/api/posts/:skill", function (req, res) {
   db.Post.findAll({
     where: {
      // Need to change value of options to comply with database structure
     }
   }).then(function (dbPost) {
      res.json(dbPost);
    });
  });



  // Get route for retrieving all posts by clientID
  app.get("/api/posts/:clientId", function (req, res) {
    db.Post.findAll({
      where: {
        clientId: req.params.id
      }
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // ****** All Post Routes ******

  // Updated Create Route for posts w/ Table Params
  app.post("/api/posts", function (req, res) {
    db.Post.create({
      title: req.body.title,
      content: req.body.content,
      skillsAccounting: req.body.skillsAccounting,
      skillsEngineering: req.body.skillsEngineering,
      skillsEventPlanning: req.body.skillsEventPlanning,
      skillsGraphicDesign: req.body.skillsGraphicDesign,
      skillsPhotography: req.body.skillsPhotography,
      skillsProjectManagement: req.body.skillsProjectManagement,
      skillsWebDevelopment: req.body.skillsWebDevelopment,
      skillsWriting: req.body.skillsWriting,
      skillsGroceryPickup: req.body.skillsGroceryPickup,
      skillsHomeHealthcare: req.body.skillsHomeHealthcare,
      skillsFurnitureMoving: req.body.skillsFurnitureMoving,
      skillsLandscaping: req.body.skillsLandscaping,
      skillsPlumbing: req.body.skillsPlumbing,
      skillsGeneralRepair: req.body.skillsGeneralRepair,
      skillsTransportation: req.body.skillsTransportation,
      //check id 
      id: req.params.id
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

   // ****** All Delete Routes ******
   

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // ***** All Update Routes ********
  app.put("/api/posts", function (req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });
};
