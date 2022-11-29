'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class genre extends Model {
    
    static associate(models) {
      this.hasMany(models.genre, {
        foreignKey: 'genre_id'
      });
    }
  }

  genre.init({
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
    modelName: 'genre',
  });
  return genre;
};