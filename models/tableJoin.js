"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    email: {
        type: DataTypes.STRING,
        isEmail: true
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  var Gifts = sequelize.define("gift", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
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
    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Gifts.belongsTo(Users);

  Users.sync();
  Gifts.sync();

  return {
    Users: Users,
    Gifts: Gifts
  };
};