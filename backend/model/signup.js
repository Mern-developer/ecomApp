const mongoose = require('mongoose');

const signupModel = new mongoose.Schema({
    email: String,
    password: String
}, {timeStamp: true});

const user = mongoose.model('user', signupModel);

module.exports=user