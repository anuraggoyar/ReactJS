const User = require('../models/User');
const router = require('express').Router();

//Create Post : api/post/create
router.post('/create', async (req, res) => {
    try{
        const newPost = {

        }
    } catch(err){
        res.status(500).json(err)
    }
})