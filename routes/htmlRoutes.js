var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("login");
  });

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

  // Load index page

  // app.get("/", function(req, res) {
  //   console.log("req.body    /: ", req.body.tf);
  //   var logicObject = {
  //     msg: "What Do You Want From Me?!?",
  //     loginPage: true
  //   };
  //   res.render("index", logicObject);
  //   console.log("/   ", logicObject);
  // });

  // app.get("/api/login/", function(req, res) {
  //   console.log("api login");
  //   var logicObject = {
  //     msg: "Login",
  //     loginPage: true
  //   };
  //   res.render("index", logicObject);
  // });

  // app.get("/api/signup/", function(req, res) {
  //   console.log("api signup");
  //   var logicObject = {
  //     msg: "Sign up",
  //     signupPage: true
  //   };
  //   res.render("index", logicObject);
  // });

  // app.post("/api/login/", function(req, res) {
  //   console.log("/api/login: ", req.body.tf);
  //   var logicObject = {
  //     msg: "Login",
  //     loginPage: true
  //   };
  //   res.json(logicObject);
  // });

  // app.post("/api/signup/", function(req, res) {
  //   console.log("/api/signup: ", req.body.tf);
  //   var logicObject = {
  //     msg: "Sign up",
  //     signupPage: true
  //   };
  //   res.json(logicObject);
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

  // // Load index page
  // app.get("/api/gifts/", function(req, res) {
  //   db.gift.findAll({}).then(function(data) {
  //     var giftObject = {
  //       gift: data
  //     };
  //     res.render("index", giftObject);
  //     res.json(data);
  //   });
  // });
  // // Load example page and pass in an example by id
  // app.get("/api/gifts/:id", function(req, res) {
  //   db.gift.findOne({ where: { id: req.params.id } }).then(function(dbGifts) {
  //     res.render("gifts", {
  //       example: dbGifts
  //     });
  //   });
  // });
};
