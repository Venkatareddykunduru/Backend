const path = require('path');
const rootDir = require('../util/path');

exports.getaddproduct=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postaddproduct=(req, res, next) => {
    console.log(req.body);
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

