const express = require('express');
const protectedRoutes = require('../middleware.js');
const { orderCont, orderHistory }= require('../controller/order.js');

const router =express.Router();
router.post('/order',  orderCont);

module.exports = router;