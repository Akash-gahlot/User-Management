const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required: true,
        unique:true
    },
    Gender: {
        type: String,
    },
    City: String
    
    
});


var user = mongoose.model("USERS", schema);

module.exports = user;


