// models/Product.js
const {DataTypes} = require('sequelize');
const sequelize = require('../util/database.js');

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Product;
