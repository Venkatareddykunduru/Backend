// models/Product.js
const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
