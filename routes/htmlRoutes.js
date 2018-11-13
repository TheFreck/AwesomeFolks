var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "What Do You Want From Me?!?",
        examples: dbExamples
      });
    });
  });

  app.get("/api/login", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.body.email
      }
    }).then(function(login){
      res.render("index", {
        msg: "Log In",
        examples: login
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Load index page
  app.get("/api/gifts", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("index", giftObject);
      res.json(data);
      });
    });

 // Load example page and pass in an example by id
 app.get("/api/gifts/:id", function(req, res) {
  db.gift.findOne({ where: { id: req.params.id } }).then(function(dbGifts) {
    res.render("gifts", {
      example: dbGifts
    });
 })
})
};

