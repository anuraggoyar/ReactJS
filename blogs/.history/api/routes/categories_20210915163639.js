const router = require('express').Router();
const Category = require('../models/Category');

router.post('/', async (req, res) => {
    const newCat = new Category(req.body.name);
    try {
        const cat = await newCat.save();
        res.status(200).json()
    }
})

module.exports = router;
