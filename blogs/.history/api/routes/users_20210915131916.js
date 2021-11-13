const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

//Update User : api/user/update 
router.put('/update/:id', async (req, res) => {
    if (req.body.userID === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can update only your account only!");
    }
});

//Delete User : api/user/delete
router.delete('/delete/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    !user && 
})

module.exports = router;