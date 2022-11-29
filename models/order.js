'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class order extends Model {

    static associate(models) {
      this.hasMany(models.movie, {
        foreignKey: "movie_id"
      });
      this.hasMany(models.show, {
        foreignKey: "show_id"
      });
      this.belongsTo(models.user, {
        foreignKey: 'user_id'
      });
    }
  }

  order.init({
    movie_id: DataTypes.INTEGER,
    show_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rentingDate: DataTypes.DATE,
    returnDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};