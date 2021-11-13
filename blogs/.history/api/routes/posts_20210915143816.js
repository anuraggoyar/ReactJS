const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        connt newPost = new Post()
    } catch(err){
        res.status(500).json(err)
    }
})