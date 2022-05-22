// imporation
const express = require('express');


// creation of instance
const app=express()
// require dotenv
require("dotenv").config()
// connect data base
const  connectDB = require('./config/connectDB');
connectDB()
// bch y5ali app tefhm format json
app.use(express.json())
// routes
app.use("/api/contacts",require("./Route/contact")) //path initial du contact



// creation server
const port=process.env.PORT ;
app.listen(port,error=>{
    error?console.log(error):console.log(`the server is runnig${port}`);
})