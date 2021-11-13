const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    
})