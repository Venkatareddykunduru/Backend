const Product = require('../models/product');

exports.getshop = (req, res, next) => {

  req.user.getProducts()
  //Product.findAll()
    .then((data) => {
      // Send the retrieved data as a JSON response
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      // Handle the error and send an error response
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve products' });
    });
};

exports.deleteshop = (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((product) => {
      
      return product.destroy();
    })
    .then(()=>{
      console.log('Product deleted');
      res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
      console.log('Error deleting product: ' + err);
      res.status(500).json({ error: 'Failed to delete product' });
    });
};
