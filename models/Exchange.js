const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exchange extends Model {}

Exchange.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Exchange;
