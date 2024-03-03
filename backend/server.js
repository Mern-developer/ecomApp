const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const createMongoConn = require('./db/config.js');
const authUserRouter = require('./router/user.js')
const app =express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json()); // Parse JSON in the request body
app.use(express.urlencoded({ extended: true })); 

app.use(logger('dev'))

app.use('/api/auth', authUserRouter);


app.listen(port, async ()=>
 {
    await createMongoConn();
    console.log(`server is ruuning on ${port}`)
})