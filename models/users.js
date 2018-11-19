var uuid = require("uuid/v1");

var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      isUnique: true
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
    account_key: {
      type: DataTypes.STRING
    }
  });

  Users.associate = function(models) {
    Users.hasMany(models.gift);
  };
  // generating hash
  Users.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking password
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.account_key);
  };
  return Users;
};
