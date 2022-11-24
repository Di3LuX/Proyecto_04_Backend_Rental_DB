'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Movie extends Model {

    static associate(models) {
      
      this.hasMany(models.Order, {
        foreignKey: 'movie_id'
      });
      this.hasMany(models.Genre, {
        foreignKey: 'genre_id'
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