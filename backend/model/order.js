const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
   
    cart:[{
        description: String,
        title:String,
        price: Number,
        id: String,
        quantity: Number,
        totalPrice: Number
    }]
}, {timeStamp: true});

const order = mongoose.model('order', orderModel);

module.exports=order