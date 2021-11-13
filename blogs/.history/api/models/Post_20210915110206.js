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
        phot
    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)