// This is setting up CRUD Routes for the Volunteer Model

var db = require("../models");

module.exports = function(app) {
  // Find all volunteers and return them to the user with res.json
  app.get("/api/volunteers", function(req, res) {
    db.Volunteer.findAll({}).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.get("/api/volunteers/:id", function(req, res) {
    // Find one Volunteer with the id in req.params.id and return them to the user with res.json
    db.Volunteer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.post("/api/volunteers", function(req, res) {
    // Updated Volunteer routes with shell names for form fields
    db.Volunteer.create({
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
    .then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.delete("/api/volunteers/:id", function(req, res) {
    // Delete the Volunteer with the id available to us in req.params.id
    db.Volunteer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

};
