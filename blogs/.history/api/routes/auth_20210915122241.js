const router = require('express').Router();
const bcrypt = require('bcrypt'); 
const User = require('../models/User');
//Register User :
router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = awiat bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username : req.body.username,
            password: hashedPassword,
            email : req.body.email
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
});
//Login User :

module.exports = router;

