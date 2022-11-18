'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};