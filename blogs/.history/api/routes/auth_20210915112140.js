const router = require('express').Router();
const User = require('../models/User');

//Register User :
router.post('/register', async (req, res) => {
    try{
        const newUser = new User(req.body);
    } catch(error) {
        res.status(500).json(error)
    }
});
//Login User :


