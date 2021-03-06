const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        title : {
            type : String,
            required : true,
            unique : true
        }, 
        desc : {
            type : String,
            required : true
        },
        photo : {
            type : String,
            required : false
        },
        username : {
            type : String,
            required : true
        },
        categories : {
            type : Array
        }
    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)