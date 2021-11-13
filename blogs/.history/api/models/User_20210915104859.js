const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    
})