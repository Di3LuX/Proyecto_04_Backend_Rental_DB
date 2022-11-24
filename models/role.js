'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Role extends Model {

    static associate(models) {
      this.hasMany(models.Role, {
        foreignKey: 'role_id'
      });
    }
  }
  Role.init({
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};