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

  //   user.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  // user.hasMany(models.gift);

  return Users;
};
