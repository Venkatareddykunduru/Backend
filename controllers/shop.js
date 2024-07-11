const { where } = require('sequelize');
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

exports.getcart=(req,res,next)=>{
  req.user
  .getCart()
  .then((cart)=>{
    return cart.getProducts()
  })
  .then((products)=>{
    console.log('printing products : '+products);
    res.json(products);
  })
  .catch(err=>console.log('error in getting cart : '+err));
}

exports.postcart=(req,res,next)=>{
  const prodId=req.params.id;
  let newQuantity=1;
  let fetchedCart;
  req.user
  .getCart()
  .then((cart)=>{
    fetchedCart=cart;
    return cart.getProducts({where:{id:prodId}});
  })
  .then((products)=>{
    let product;
    if(products.length>0){
      product=products[0];
    }

    if(product){
      let oldQuantity=product.cartItem.quantity;
      newQuantity=oldQuantity+1;
      return product;
    }

    return Product.findByPk(prodId);

  })
  .then((product)=>{
    return fetchedCart.addProduct(product,{through:{quantity:newQuantity}});
  })
  .then(()=>{
    res.json({message:'Product added to cart'});
  })
  .catch((err)=>{
    res.json({error:"Failed to add to cart"});
    console.log('error in posting to cart : '+err);
  })

}

exports.deletecart=(req,res,next)=>{
  const prodId=req.params.id;
  req.user
  .getCart()
  .then((cart)=>{
    return cart.getProducts({where:{id:prodId}});
  })
  .then((products)=>{
    const product=products[0];
    console.log(product);
    return product.cartItem.destroy();
  })
  .then(()=>{
    res.json({message:'product deleted from cart'});
  })
  .catch(err=>{
    console.log('failed to delete form cart : '+err);
    res.json({error:"Failed to delete from cart"})
  })
}

exports.postorder=(req,res,next)=>{
  let fetchedCart
  req.user
  .getCart()
  .then((cart)=>{
    fetchedCart=cart;
    return cart.getProducts();
  })
  .then((products)=>{
    req.user
    .createOrder()
    .then(order=>{
      return order.addProducts(products.map(product=>{
        product.orderItem={quantity:product.cartItem.quantity};
        return product;
      }))
    })
    .catch(err=>{console.log(err)});
  })
  .then(()=>{
    return fetchedCart.setProducts(null);
  })
  .then(()=>{
    res.json({message:'order creted succesfully'});
  })
  .catch(err=>{
    console.log('error ordering : '+err);
    res.json({err:"error ordering"});
  })
}

exports.getorders=(req, res, next) => {
  req.user
    .getOrders({ include: Product }) // Correct way to include products
    .then(orders => {
      // Process and return orders
      res.json(orders);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'An error occurred in getting orders.' });
    });
};
