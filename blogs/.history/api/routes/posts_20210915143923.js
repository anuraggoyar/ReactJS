const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        const newPost = new Post({
            title: req.body.title,
            de: req.body.de,
            title: req.body.title,
            title: req.body.title,
            
        })
    } catch(err){
        res.status(500).json(err)
    }
})