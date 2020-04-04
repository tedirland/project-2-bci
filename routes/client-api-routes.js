// This is setting up CRUD Routes for the Client Model
var db = require("../models");

module.exports = function (app) {
  // Find all clients and return them to the user with res.json
  app.get("/api/clients", function (req, res) {
    db.Client.findAll({}).then(function (dbClient) {
      res.json(dbClient);
    });
  });

  app.get("/api/clients/:id", function (req, res) {
    // Find one Client with the id in req.params.id and return them to the user with res.json
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbClient) {
      res.json(dbClient);
    });
  });

  app.post("/api/clients", function (req, res) {
    console.log(req.body)
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      bio: req.body.bio,
      location: req.body.location,
      linkedIn: req.body.linkedIn,
      facebook: req.body.facebook,
      website: req.body.website,
      employer: req.body.employer,
      twitter: req.body.twitter,
      password: req.body.password,
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
      skillsFurnitureMoving: req.body,skillsFurnitureMoving,
      skillsLandscaping: req.body.skillsLandscaping,
      skillsPlumbing: req.body.skillsPlumbing,
      skillsGeneralRepair: req.body.skillsGeneralRepair,
      skillsTransportation: req.body.skillsTransportation
    })
    .then(function (dbClient) {


    });
  });

  app.delete("/api/clients/:id", function (req, res) {
    // Delete the Client with the id available to us in req.params.id
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbClient) {
      res.json(dbClient);
    });
  });

};
