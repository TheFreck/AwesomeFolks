var db = require("../models/");

module.exports = function(app) {
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
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
});
}
