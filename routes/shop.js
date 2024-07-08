const express = require('express');
const router = express.Router();

const shopcontroller=require('../controllers/shop.js');

router.get('/', shopcontroller.getshop);
router.delete('/:id',shopcontroller.deleteshop);


module.exports = router;