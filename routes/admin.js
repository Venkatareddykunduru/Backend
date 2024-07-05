const express = require('express');
const router = express.Router();
const admincontroller=require('../controllers/admin.js');

// /admin/add-product => GET
router.get('/add-product', admincontroller.getaddproduct);

// /admin/add-product => POST
router.post('/add-product', admincontroller.postaddproduct);

router.get('/contact', admincontroller.getcontact);

router.post('/contact',admincontroller.postcontact);

router.get('/success',admincontroller.getsuccess);

module.exports = router;