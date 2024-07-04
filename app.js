const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log('Second middleware');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('<h1> hello to node js </h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
