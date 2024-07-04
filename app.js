const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to show the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/product" method="POST">
      <label for="title">Product Title:</label>
      <input type="text" id="title" name="title"><br><br>
      <label for="size">Product Size:</label>
      <input type="text" id="size" name="size"><br><br>
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/product', (req, res) => {
  console.log(req.body); // Parsed form data
  res.send('Product added!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
