const router = require('express').Router();
const Post = require('../models/Post');

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    const 
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
        const post = await Post.findById(req.params.id);
        if(post){
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post has been deleted!");
        } else {
            res.status(500).json("Post not found!");
        }
    } catch(err){
        res.status(500).json(err)
    }
});

//Update Post : api/post/update/id
router.put('/update/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post && post.Postname === req.body.Postname){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set : req.body
                }, {new : true});
                res.status(200).json(updatedPost);
            } catch(err){
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can update only your posts!")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET Post : api/Post/id
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post){
            res.status(200).json(post);
        } else {
            res.status(404).json("Post not found!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET ALL POSTS 
router.get('/', async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try{
        let posts;
        if(username) {
            posts = await Post.find({username});
        } else if(category) {
            posts = await Post.find({categories : {
                $in : [category]
            }})
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;