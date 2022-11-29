'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class user extends Model {

    static associate(models) {
      user.belongsToMany(models.role, { as: "roles", through: "user_role", foreignKey: "user_id" });
    }
  };
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });  // Comprueba que el usuario es administrador

  user.isAdmin = function(roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }
  return user;
};