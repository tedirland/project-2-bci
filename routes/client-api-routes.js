// This is setting up CRUD Routes for the Client Model
var db = require("../models");

module.exports = function(app) {
  // Find all clients and return them to the user with res.json
  app.get("/api/clients", function(req, res) {
    db.Client.findAll({}).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  app.get("/api/clients/:id", function(req, res) {
    // Find one Client with the id in req.params.id and return them to the user with res.json
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  app.post("/api/clients", function(req, res) {
    // Create an Client with the data available to us in req.body
    console.log(req.body);
    db.Client.create(req.body).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  app.delete("/api/clients/:id", function(req, res) {
    // Delete the Client with the id available to us in req.params.id
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbClient) {
      res.json(dbClient);
    });
  });

};
