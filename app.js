const express = require('express');
const bodyParser = require('body-parser');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin',adminroutes);
app.use('/shop',shoproutes);

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
