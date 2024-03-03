const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors =require('cors');
const createMongoConn = require('./db/config.js');

const authUserRouter = require('./router/user.js');
const orderRouter = require('./router/order.js');

const app =express();
dotenv.config();
const port = process.env.PORT || 5000;
//MONGO_DB_URL=mongodb+srv://fariabbasiali:LDy5jvlzuQnD8DF2@cluster0.vnawewk.mongodb.net/ecomapp?retryWrites=true&w=majority&appName=Cluster0
app.use(express.json()); // Parse JSON in the request body
app.use(express.urlencoded({ extended: true })); 

app.use(logger('dev'))
app.use(cors());
app.use('/api/v1', authUserRouter);
app.use('/api/v1', orderRouter);

app.listen(port, async ()=>
 {
    await createMongoConn();
    console.log(`server is ruuning on ${port}`)
})