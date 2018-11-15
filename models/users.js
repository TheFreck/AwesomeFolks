module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    fbID: {
      type: DataTypes.STRING
    },
    fbToken: {
      type: DataTypes.STRING
    },
    fbName: {
      type: DataTypes.STRING
    },
    fbEmail: {
      type: DataTypes.STRING
    },
    twitID: {
      type: DataTypes.STRING
    },
    twitToken: {
      type: DataTypes.STRING
    },
    twitDisplayName: {
      type: DataTypes.STRING
    },
    twitUsername: {
      type: DataTypes.STRING
    },
    googId: {
      type: DataTypes.STRING
    },
    googToken: {
      type: DataTypes.STRING
    },
    googEmail: {
      type: DataTypes.STRING
    },
    googName: {
      type: DataTypes.STRING
    }
  });
  return Users;
};
