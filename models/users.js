module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  Users.associate = function(models) {
    Users.hasMany(models.gift);
  };
  return Users;
};
