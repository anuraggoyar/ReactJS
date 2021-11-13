const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        const newPost = new Post({
            title: req.body.title,
            desc: req.body.desc,
            username: req.body.username,
            title: req.body.title,
            
        })
    } catch(err){
        res.status(500).json(err)
    }
})