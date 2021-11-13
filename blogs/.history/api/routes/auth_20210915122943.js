const router = require('express').Router();
const bcrypt = require('bcrypt'); 
const User = require('../models/User');
//Register User : api/auth/register 
router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username : req.body.username,
            password: hashedPassword,
            email : req.body.email
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json(error);
    }
});
//Login User : api/auth/login
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username : req.body.username});
        !user && res.status(400).send('Wrong credentials!');

        const validatePass = await bcrypt.compare(req.body.password, user.pas)
    } catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;

