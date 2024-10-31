const mongoose = require('mongoose');
const dbConnection =async()=>{
    const Mongo_url='mongodb://127.0.0.1:27017/file-sharing'
    try {
       await mongoose.connect(Mongo_url);
       console.log("db connected succefully"); 
    } catch (error) {
        console.error("error while connecting with tyhe Db",error.message)
    }
}

module.exports = dbConnection;