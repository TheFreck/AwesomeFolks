var db = require("../models");

module.exports = function(app) {
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/
  // GATE KEEPER
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/

  // the root will go to the table of contents...
  // if the user is already logged in
  // otherwise it goes to the login page
  // which has access to the signup page

  app.get("/decisions", function(req, res) {
    console.log("decisions hit");
    if (req.isAuthenticated()) {
      // var user = {
      //   id: req.session.passport.user,
      //   isloggedin: req.isAuthenticated()
      // };
      res.render("decisions", { user: req.user });
    } else {
      res.render("login");
    }
  });

  // signup page
  app.get("/signup", function(req, res) {
    console.log("/signup");
    if (req.isAuthenticated()) {
      res.redirect("/decisions");
    } else {
      res.render("signup");
    }
  });

  // login page
  app.get("/login", function(req, res) {
    console.log("/login");
    if (req.isAuthenticated()) {
      res.redirect("/decisions");
    } else {
      res.render("login");
    }
  });
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // SHOPPING LIST
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  app.post("/add-to-cart", function(req, res) {
    console.log("add to cart");
    console.log("req.user.uuid: ", req.user.uuid);
  });

  app.get("/cart", function(req, res) {
    console.log("you've arrived at the cart");
    res.render("shoppingList", { message: "htmlRoutes.js" });
  });

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  app.get("/gifts", function(req, res) {
    res.render("gifts");
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

  // app.get("/api/gifts/:id", function(req, res) {
  //   db.gift.findOne({ where: { id: req.params.id } }).then(function(dbGifts) {
  //     res.render("gifts", {
  //       example: dbGifts
  //     });
  //   });
  // });

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

  app.get("/", function(req, res) {
    console.log("/");
    if (req.isAuthenticated()) {
      var user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("decisions", user);
    } else {
      res.render("login");
    }
  });

  // ***********Grab list of users************
  app.get("/users", function(req, res) {
    db.user.findAll().then(function(user) {
      res.render("decisions", { user: user })
    });
  });

  // ***********Grab list of users************

  app.get("/signup", function(req, res) {
    console.log("/signup");
    if (req.isAuthenticated()) {
      res.redirect("/decisions");
    } else {
      res.render("signup");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
