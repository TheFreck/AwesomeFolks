var db = require("../models");

module.exports = function(app) {
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/
  // GATE KEEPER
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/

  // the root will go to the table of contents...
  // if the user is already logged in
  // otherwise it goes to the login page
  // which has access to the signup page

  app.get("/", function(req, res) {
    console.log("/");
    if (req.isAuthenticated()) {
      var user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("users", user);
    } else {
      res.render("login");
    }
  });

  app.get("/users", function(req, res) {
    console.log("authenticated: ", req.session);
    if (req.isAuthenticated()) {
      var user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("users", user);
    } else {
      res.render("login");
    }
  });

  // signup page
  app.get("/signup", function(req, res) {
    console.log("/signup");
    if (req.isAuthenticated()) {
      res.redirect("/users");
    } else {
      res.render("signup");
    }
  });

  // // login page
  // app.post("/login", function(req, res) {
  //   console.log("/login");
  //   res.redirect("/users");
  //   // if (req.isAuthenticated()) {
  //   // } else {
  //   //   res.render("login");
  //   // }
  // });
  // +-*/+-*/+-*/+-*/+-*/+-*/+-*/+-*/

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // SHOPPING LIST
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  app.put("/add-to-cart", function(req, res) {
    console.log("add to cart");
    console.log("req.user.uuid", req.session.passport.user);
    console.log("req.body.id: ", req.body.id);
    db.gift
      .update(
        {
          shopping: req.session.passport.user
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(data) {
        console.log("data", data);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  app.get("/cart", function(req, res) {
    console.log("you've arrived at the cart");
    db.gift
      .findAll({
        where: {
          shopping: req.session.passport.user
        }
      })
      .then(function(data) {
        console.log("data: ", data[0].dataValues);
        var giftArray = [];
        var giftObject = {
          giftArray: giftArray
        };
        for (i = 0; i < data.length; i++) {
          giftArray.push({
            item: data[0].dataValues.item,
            id: data[0].dataValues.id,
            price: data[0].dataValues.price
          });
        }
        res.render("shoppingList", giftObject);
      });
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


  // ***********Grab list of users************

  app.get("/signup", function(req, res) {
    console.log("/signup");
    if (req.isAuthenticated()) {
      res.redirect("/users");
    } else {
      res.render("signup");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
