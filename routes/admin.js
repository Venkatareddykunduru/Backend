const express=require('express');
const router=express.Router();


// Route to show the form
router.get('/add-product', (req, res) => {
    res.send(`
      <form action="/admin/product" method="POST">
        <label for="title">Product Title:</label>
        <input type="text" id="title" name="title"><br><br>
        <label for="size">Product Size:</label>
        <input type="text" id="size" name="size"><br><br>
        <button type="submit">Add Product</button>
      </form>
    `);
  });
  
  // Route to handle form submission
  router.post('/product', (req, res) => {
    console.log(req.body); // Parsed form data
    res.send('Product added!');
  });

  module.exports=router