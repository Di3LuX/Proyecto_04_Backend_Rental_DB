const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || '3001',
    dialect: 'mysql',
  }
);

module.exports = sequelize.authenticate()
  .then((db) => {
    console.log('MYSQL connected');
    return db;
  });