const express = require('express');
const router = express.Router();

const shopcontroller=require('../controllers/shop.js');

router.get('/', shopcontroller.getshop);

module.exports = router;