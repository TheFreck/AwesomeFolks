module.exports = function(sequelize, DataTypes) {
  var Gifts = sequelize.define("gift", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    comments: {
      type: DataTypes.STRING
    },
    shopping: {
      type: DataTypes.STRING
    }
  });

  Gifts.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Gifts.belongsTo(models.user, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Gifts;
};
