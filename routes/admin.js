const express = require('express');
const router = express.Router();
const admincontroller=require('../controllers/admin.js');



// /admin/add-product => POST
router.post('/add-product', admincontroller.postaddproduct);



module.exports = router;