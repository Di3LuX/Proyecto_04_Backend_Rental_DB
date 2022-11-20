'use strict';
const {
  Model
} = require('sequelize');
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
    membership: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20]
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};