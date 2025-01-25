const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController.js');

router.get('/user/dummy', userController.dummy);

module.exports=router;