// require mongoose
const mongoose = require('mongoose');


const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("DataBase connected successfully");
    } catch (error) {
        console.log("fail to connect");
    }
}

module.exports=connectDb