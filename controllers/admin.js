const path = require('path');
const rootDir = require('../util/path');
const Product=require('../models/product.js');
const { profile } = require('console');


exports.postaddproduct=(req, res, next) => {
  const product=new Product(req.body.title);
  product.saveproduct()
  .then(() => {
    console.log('Product saved');
    res.status(200).json({ message: 'Product Added successfully' });
  })
  .catch((err) => {
    console.log('Error Adding product: ' + err);
    res.status(500).json({ error: 'Failed to Add product' });
  });
}



