'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {

    static associate(models) {

      this.hasMany(models.Order, {
        foreignKey: 'showId'
      });
      this.hasMany(models.Genre, {
        foreignKey: 'genreId'
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