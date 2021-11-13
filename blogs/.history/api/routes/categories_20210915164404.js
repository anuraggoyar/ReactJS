const router = require('express').Router();
const Category = require('../models/Category');

//Add category
router.post('/', async (req, res) => {
    const newCat = new Category({name : req.body.name});
    try {
        const cat = await newCat.save();
        res.status(200).json(cat);
    } catch(err){
        res.status(500).json(err);
    }
})

// 
module.exports = router;
