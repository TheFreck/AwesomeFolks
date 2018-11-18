var db = require("../models");

module.exports = function(app) {
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/gifts", function(req, res) {
    res.render("gifts");
  });

  app.get("/viewGifts", function(req, res) {
    res.render("viewGifts");
  });

  app.get("/contents", function(req, res) {
    res.render("index");
  });

// Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Load index page
  app.get("/api/gifts/", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("gifts", giftObject);
      res.json(data);
    });
  });

  app.get("/api/gifts/", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("gifts", giftObject);
      res.json(data);
    });
  });
  // Load example page and pass in an example by id
  app.get("/api/gifts/:id", function(req, res) {
    db.gift.findOne({ where: { id: req.params.id } }).then(function(dbGifts) {
      res.render("gifts", {
        example: dbGifts
      });
    });
  });
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app){

  app.get("/", function(req,res){
    console.log("/");
      if(req.isAuthenticated()){
          var user = {
              id: req.session.passport.user,
              isloggedin: req.isAuthenticated()
          }
          res.render("index", user);
      }
      else{
          res.render("login");
      }
      
  })


  // ***********Grab list of users************
  app.get("/users", function(req, res) {
    db.user.findAll().then(function (users){
      res.render("decisions", {
        users: users
      }).then(function(dbgift) {
        users: 
      }
      )
    })
  })

    // ***********Grab list of users************


  app.get("/signup", function(req,res){
    console.log("/signup");
      if(req.isAuthenticated()){
          res.redirect("/index");
      }else{
         res.render("signup"); 
      }
  });

  app.get("/index", function(req,res){
      if(req.isAuthenticated()){
          res.render("index");
      }else{
          res.redirect("/login");
      }
  });
  
  app.get("/login", function(req, res) {
    console.log("/login");
      if(req.isAuthenticated()){
          res.redirect("/index");
      }else{
          res.render("login");
      }
  })


};