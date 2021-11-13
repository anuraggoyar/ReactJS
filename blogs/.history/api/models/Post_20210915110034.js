const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        title {}
    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)