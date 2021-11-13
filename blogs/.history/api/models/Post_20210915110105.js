const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        title : {
            type : String,
            required : 
        }
    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)