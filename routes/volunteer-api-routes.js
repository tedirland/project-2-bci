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
    // Create an Volunteer with the data available to us in req.body
    console.log(req.body);
    db.Volunteer.create(req.body).then(function(dbVolunteer) {
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
