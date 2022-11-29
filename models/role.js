'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class role extends Model {

    static associate(models) {
      this.hasMany(models.role, {
        foreignKey: 'role_id'
      });
    }
  }
  role.init({
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};