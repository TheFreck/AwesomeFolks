var db = require("../models/");

module.exports = function(app) {
  // Find all Gifts and return them to the user with res.json
  app.get("/api/gifts", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("gifts", giftObject);
      // res.json(data);
    });
  });


  app.get("/api/gifts/:id", function(req, res) {
    // Find one Gift with the id in req.params.id and return them to the user with res.json
    db.gift
      .findOne({
        where: {
          userUuid: req.params.id
        },
        include: [db.user]
      })
      .then(function(dbgifts) {
        res.json(dbgifts);
        console.log("THIS IS THE USER UUID" + userUuid);
      });
  });

  app.get("/api/view", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("viewGifts", giftObject);
      // res.json(data);
    });
  });

  app.get("/api/view/:id", function(req, res) {
    // Find one Gift with the id in req.params.id and return them to the user with res.json
    db.gift
      .findAll({
        where: {
          userUuid: req.params.id
        },
        include: [db.user]
      })
      .then(function(data) {
        var giftObject = {
          gift: data
        };
        // res.json(dbgifts);
        res.render("viewUserGift", giftObject)
        console.log("where is my user ID " + req.params.id)
      });
  });

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // ADDED CODE TO PULL DROP DOWN CATEGORY
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//CHANGED BACK TO POST INSTEAD OF PUT
  // app.post("/api/gifts/", function(req, res) {
  //   // console.log("adding an item: ", req.user.uuid);
  //   console.log("req.body.comment: ", req.body.comment);
  //   db.gift
  //     .create({
  //       item: req.body.item,
  //       category: req.body.category,
  //       price: req.body.price,
  //       comment: req.body.comment,
  //       // userUuid: req.user.uuid
  //       userUuid: req.session.passport.user
  //     })
  //     .then(function(dbgifts) {
  //       console.log("\n\n#####: ", dbgifts);
  //       res.json(dbgifts);
  //     });
  // });

  app.post("/api/gifts/", function(req, res) {
    console.log("???" + req.session);
    db.gift
      .create({
        item: req.body.item,
        category: req.body.category,
        price: req.body.price,
        comment: req.body.comment,
        purchased: req.body.purchased,
        // userUuid: req.user.uuid
        userUuid: req.session.passport.user
      })
      .then(function(dbgifts) {
        res.json(dbgifts);
        console.log(req.body.category);
      });
  });


  app.delete("/api/gifts/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.gift
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbgifts) {
        res.json(dbgifts);
      });
  });

  // app.put("/api/addCart", function(req, res) {
  //   console.log("boom");
  //   console.log("apiRoutes adding item to shopping cart", req);
  //   db.gift
  //     .findOne({
  //       where: { item: this.item }
  //     })
  //     .on("success", function(gifts) {
  //       if (gifts) {
  //         gifts.update({
  //           shopping: "smile"
  //         });
  //       }
  //     });
  // });
};
