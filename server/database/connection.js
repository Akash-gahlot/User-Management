const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/User_Management';

const connectDB = async () => { 
    try {
   const con =await mongoose.connect(url);
        console.log(`Connected to MongoDB:${ con.connection.host }`);
    }
    catch(err) { 
        console.log(err);
    }
}

module.exports = connectDB;