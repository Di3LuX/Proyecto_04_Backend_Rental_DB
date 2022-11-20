'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Genre extends Model {

    static associate(models) {
      this.hasMany(models.Genre, {
        foreignKey: 'genre_id'
      });
    }
  }

  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};