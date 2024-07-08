const Product=require('../models/product');
const sequelize=require('../util/database');


exports.postaddproduct=(req, res, next) => {
  const title=req.body.title;
  Product.create({title:title})
  .then(() => {
    console.log('Product saved');
    res.status(200).json({ message: 'Product Added successfully' });
  })
  .catch((err) => {
    console.log('Error Adding product: ' + err);
    res.status(500).json({ error: 'Failed to Add product' });
  });
  // const product=new Product(req.body.title);
  // product.saveproduct()
  
}



