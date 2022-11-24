'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Genre extends Model {
    
    static associate(models) {
      this.hasMany(models.Genre, {
        foreignKey: 'genre_id'
      });
    }
  }

  Genre.init({
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};