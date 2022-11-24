'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'user_id'
      });
      this.hasMany(models.Role, {
        foreignKey: 'role_id'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    pass: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};