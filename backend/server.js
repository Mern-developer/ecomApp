const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors =require('cors');

const authUserRouter = require('./router/user.js');
const orderRouter = require('./router/order.js');
const mongoConn = require('./db/config.js');

const app =express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json()); // Parse JSON in the request body
app.use(express.urlencoded({ extended: true })); 

app.use(logger('dev'))
app.use(cors());
app.use('/api/v1', authUserRouter);
app.use('/api/v1', orderRouter);

app.listen(port, async ()=>
 {
    await mongoConn();
    console.log(`server is ruuning on ${port}`)
})