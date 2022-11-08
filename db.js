const config = require('./config/config.json');
const { Sequelize } = require('sequelize');
require('dotenv').config();fa

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || config.development.database,
  process.env.MYSQL_USER || config.development.username,
  process.env.MYSQL_PASSWORD || config.development.password,
  {
    host: process.env.MYSQL_HOST || config.development.host,
    port: process.env.MYSQL_PORT || config.development.port || '3000',
    dialect: process.env.DB_DIALECT
  }
);

module.exports = sequelize;
