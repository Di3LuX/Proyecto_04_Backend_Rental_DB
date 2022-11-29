'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class show extends Model {

    static associate(models) {
      show.belongsTo(models.genre, {
        foreignKey: 'genre_id'
      });
    }
  };
  show.init({
    title: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    synopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'show',
  });
  return show;
};