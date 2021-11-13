const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        const newPost = await Post({
            title: req.body.title,
            desc: req.body.desc,
            username: req.body.username,
            categories: req.body.categories,
        })
        const post = await newPost.save();
        res.status(200).json(post);
    } catch(err){
        res.status(500).json(err)
    }
});
//Delete Post : api/post/delete/id
router.delete('/delete/:id', async (req,res) => {
    try{
        await Post.fi
    } catch(err){
        res.status(500).json(err)
    }
});

//Update Post : api/post/update/id

module.exports = router;