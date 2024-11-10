//for express
const express = require('express');
//for cors
const cors = require('cors');
//for mongoose
const mongoose = require('mongoose');
//for use .env file
require('dotenv').config();
//server port number
const port = process.env.PORT || 8000
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
app.use(cors({
    origin: process.env.frontend_path, // replace with your frontend url
    credentials: true, // enable cookies
    methods: 'GET, POST, PUT, DELETE', // allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // allow these headers to be sent in the request
}));
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