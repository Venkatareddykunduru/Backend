const express = require('express');
const router = express.Router();

const shopcontroller=require('../controllers/shop.js');
const { route } = require('./admin.js');

router.get('/', shopcontroller.getshop);
router.delete('/:id',shopcontroller.deleteshop);
router.get('/cart',shopcontroller.getcart);
router.post('/postcart/:id',shopcontroller.postcart);
router.delete('/deletecart/:id',shopcontroller.deletecart);
router.post('/postorder',shopcontroller.postorder);
router.get('/getorders',shopcontroller.getorders);
module.exports = router;