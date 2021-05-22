const Sequelize = require('sequelize');
const cloudinary = require('cloudinary');

require('dotenv').config();

cloudinary.config({
    cloud_name: 'dustingottlieb',
    api_key: '384262337385414',
    api_secret: 'I892sxli4ZxOTCvgQPdGIN_hZ9k'
});

const sequelize = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;