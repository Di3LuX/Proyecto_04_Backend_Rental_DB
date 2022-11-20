'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Show extends Model {

    static associate(models) {

      this.hasMany(models.Order, {
        foreignKey: 'show_id'
      });
      this.hasMany(models.Genre, {
        foreignKey: 'genr_id'
      });
    }
  }
  Show.init({
    title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    synopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};