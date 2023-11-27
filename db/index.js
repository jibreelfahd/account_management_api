const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
   host: process.env.HOST,
   dialect: process.env.DIALECT,
   logging: false
});

module.exports = sequelize