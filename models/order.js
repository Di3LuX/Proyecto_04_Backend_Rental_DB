'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      this.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });
      this.belongsTo(models.Show, {
        foreignKey: "showId"
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }

  Order.init({
    movieId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rentingDate: DataTypes.DATE,
    returnDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};