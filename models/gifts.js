module.exports = function(sequelize, DataTypes) {
    var Gifts = sequelize.define("gift", {
      item: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
      },
      category: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL(10, 2)
      },
      comments: {
        type: DataTypes.STRING
      },
      shopping: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Gifts;
  };
  