const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.BLOB
  },
  {
    sequelize
  }
);

module.exports = Post;
