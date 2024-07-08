const Product = require('../models/product');

exports.getshop = (req, res, next) => {
  Product.getallproducts()
    .then(([data]) => {
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
  Product.deleteproduct(id)
    .then(() => {
      console.log('Product deleted');
      res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
      console.log('Error deleting product: ' + err);
      res.status(500).json({ error: 'Failed to delete product' });
    });
};
