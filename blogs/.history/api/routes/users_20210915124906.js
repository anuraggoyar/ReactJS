const User = require('../models/User');
const router = require('express').Router();

//Update User : api/user/update 
router.put('/update/:id', async (req, res) => {
    if (req.body.userID === req.params.id) {
        try{
            
        } catch(error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can update only your account ");
    }
})

//Delete User : api/user/delete

