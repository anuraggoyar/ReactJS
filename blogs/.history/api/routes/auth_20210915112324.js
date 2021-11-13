const router = require('express').Router();
const User = require('../models/User');

//Register User :
router.post('/register', async (req, res) => {
    try{
        const newUser = new User({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        });
        const user = await newUser.save();
        res.status(200)
    } catch(error) {
        res.status(500).json(error)
    }
});
//Login User :


