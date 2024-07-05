const path = require('path');
const rootDir = require('../util/path');
const Product=require('../models/product.js');
const { profile } = require('console');
exports.getaddproduct=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postaddproduct=(req, res, next) => {
  const product=new Product(req.body.title);
  product.saveproduct();
  Product.getallproducts();
    //console.log(req.body);
    res.redirect('/');
  }

exports.getcontact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
  }

exports.postcontact=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/success');
  }

exports.getsuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
  }

