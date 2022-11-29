'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class movie extends Model {

    static associate(models) {

      movie.belongsTo(models.genre, {
        foreignKey: 'genre_id'
      });
    }
  };
  movie.init({
    title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    synopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};