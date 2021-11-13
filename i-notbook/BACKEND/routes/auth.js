const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = "This is secret."

//Route 1:  create a user using : "api/auth/". Doesn't required auth.
router.post('/createuser', [
    body('email').isEmail(),
    body('name').isLength({min : 3}),
    body('password','Password must be atleast 5 letters.').isLength({min : 5})
], async (req, res) =>{
    //If there are error, Return Bad request & the error.
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array().pop().msg })
    }
    //check if the user alread exists
    try{
        const salt = await bcrypt.genSalt(10);
        const seqPass = await bcrypt.hashSync(req.body.password, salt);
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: 'Email id already exists.' });
        }
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: seqPass,
        })
        const data = {
            user :{
                id : newUser.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success, authToken});
    }catch(error){
        console.log(error);
        res.status(500).send("Internal server error occured.");
    } 
})

//Route 2: Authenticate user for login
router.post('/login', [
    body('email', 'Enter a valid email address.').isEmail(),
    body('password', 'Password can not be blank').exists()
], async (req,res) => {
    let success = false;
    //if there is any error
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({success, errors : errors.array()})
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ success, error : 'Please try to login with correct credentials.'});
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400).json({ success, error: 'Please try to login with correct credentials.' });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        success = true;
        res.json({success, authToken });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error occured.");
    }
})
//Route 3: Get logged in user details, POST: /api/auth/getuser Login required
router.post('/getuser',
    fetchUser,
    async (req,res) =>{
        try{
            userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
        } catch(error) {
            console.error(error.message);
            res.status(500).send("Internal server error.");
        }
});
module.exports = router