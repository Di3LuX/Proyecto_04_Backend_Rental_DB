'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {

    static associate(models) {
      this.hasMany(models.role, {
        foreignKey: 'id_role'
      });
    }
  }
  role.init({
    id_role: {
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
    modelName: 'role',
  });
  return role;
};