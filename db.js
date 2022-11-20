const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "MovieRentalDB", 
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || '33660',
    dialect: 'mysql',
  }
);

module.exports = sequelize.authenticate()
  .then((db) => {
    console.log('MYSQL connected');
    return db;
  });