const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        const newPost = await Post({
            title: req.body.title,
            desc: req.body.desc,
            username: req.body.username,
            categories: req.body.categories,
        })
        const post = await Post.save();
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})