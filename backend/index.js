//for express
const express = require('express');
//for cors
const cors = require('cors');
//for mongoose
const mongoose = require('mongoose');
//for use .env file
require('dotenv').config();
//server port number
const port = process.env.PORT || 3000
//for routes
const authenticate = require('./routes/authentication');
//connet mongoDB
const connectToMongodb = require('./db/connectToMongoDb');
//cookie parser 
const cookieParser = require('cookie-parser')

//massaged routes
const massageRoutes = require('./routes/massageRoutes')

//friendList routes
const friendList = require('./routes/friendListRoutes')

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
    
// routes for authentication

app.use('/authentication',authenticate)
app.use('/api',massageRoutes);
app.use('/friendList',friendList);
    
//server configuration
app.listen(port,()=>{
    connectToMongodb();
    console.log(`Server is running on port ${port}`);
})