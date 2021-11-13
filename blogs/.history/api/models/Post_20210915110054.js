const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        title : {
            type : String
        }
    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)