const path = require('path');
const cors = require('cors');
const express = require('express');
const page404controller=require('./controllers/page404.js');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(cors());

app.use(bodyParser.json()); // For parsing application/json


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(page404controller.get404);

app.listen(3000);

