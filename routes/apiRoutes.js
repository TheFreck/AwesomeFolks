var db = require("../models/");

module.exports = function(app) {
  // Find all Gifts and return them to the user with res.json
  app.get("/api/gifts", function(req, res) {
    db.gift.findAll({}).then(function(data) {
      var giftObject = {
        gift: data
      };
      res.render("index", giftObject);
      // res.json(data);
    });
  });

  app.get("/api/gifts/:id", function(req, res) {
    // Find one Gift with the id in req.params.id and return them to the user with res.json
    db.gift
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbgifts) {
        res.json(dbgifts);
      });
  });

  app.post("/api/gifts/", function(req, res) {
    db.gift
      .create({
        item: req.body.item,
        url: req.body.url,
        category: req.body.category,
        price: req.body.price,
        comment: req.body.comment,
        purchased: req.body.purchased
      })
      .then(function(dbgifts) {
        res.json(dbgifts);
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
};

// app.put("/api/gifts", function(req, res) {
//   db.gift
//     .update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//     })
//     .then(function(dbgifts) {
//     res.json(dbgifts);
//   });
// });
// }};