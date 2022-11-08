'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Movie extends Model {

    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'movieId'
      });
      this.hasMany(models.Genre, {
        foreignKey: 'genreId'
      });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    synopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};