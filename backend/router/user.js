const express = require('express');
const { login, logout, signUp } =require('../controller/user.js');


const router =express.Router();

router.post('/auth/login', login);
router.post('/auth/signup', signUp);
router.post('/auth/logout', logout);

module.exports = router;