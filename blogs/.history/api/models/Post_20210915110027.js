const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    },
    {timestamp : true}
);

module.exports = mongoose.model("Post", PostSchema)