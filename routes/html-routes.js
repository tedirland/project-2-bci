// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
const clientRoutes = require("../routes/client-api-routes")
const apiRoutes = require("../routes/api-routes")
const volunteerRoutes = require("../routes/volunteer-api-routes")
const postsRoutes = require("../routes/posts-api-routes")

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  
  app.get("/createpost", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/create-post.html"));
  
    
  });

  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  
  app.get("/", function (req, res) {
    db.Client.findAll().then (function(client){
      res.render("client", res);

   
      res.json(client)

      res.sendFile(path.join(__dirname, "../public/login.html"));
    })
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/posts", function (req, res) {
    db.Post.findAll().then(function(data){
      console.log(data)
        res.render("post", {posts: data});
        console.log("This is working")
    
      });

  });

  app.get("/community", function (req, res) {
  db.Client.findAll().then(function(data){
    console.log(data)
      res.render("client", {clients: data});
      console.log("This is working")
  
    });
  });

  app.get("/members", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/volunteers", function (req, res) {
  db.Volunteer.findAll().then(function(data){
    console.log(data)
      res.render("volunteer", {volunteers: data});
      console.log("This is working")
  
    });
   
  });
  app.get("/myPosts", function (req, res) {
  db.Post.findAll({
    where: {
      clientID: 34
    }
  }).then(function(data){
    console.log(data)
      res.render("myposts", {posts: data});
      console.log("This is working")
  
    });
   
  });
  app.get("/myProjects", function (req, res) {
  db.Post.findAll({
    where: {
      volunteerID: 12
    }
  }).then(function(data){
    console.log(data)
      res.render("myproj", {posts: data});
      console.log("This is working")
  
    });
   
  });
};



