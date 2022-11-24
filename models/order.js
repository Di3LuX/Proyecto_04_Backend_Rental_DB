'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Order extends Model {

    static associate(models) {
      this.belongsTo(models.Movie, {
        foreignKey: "movie_id"
      });
      this.belongsTo(models.Show, {
        foreignKey: "show_id"
      });
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }

  Order.init({
    movie_id: DataTypes.INTEGER,
    show_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rentingDate: DataTypes.DATE,
    returnDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};