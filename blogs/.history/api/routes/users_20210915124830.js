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
        
    }
})

//Delete User : api/user/delete
