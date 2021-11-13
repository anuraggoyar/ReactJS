const router = require('express').Router();
const Category = require('../models/Category');

//Add category
router.post('/', async (req, res) => {
    const newCat = new Category({name : req.body.name.toString().toLowerCase()});
    try {
        const cat = await newCat.save();
        res.status(200).json(cat);
    } catch(err){
        if (error.keyValue.name === req.body.name.toString().toLowerCase()){
            res.
        }
        res.status(500).json(err);
    }
});

// Get All Categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
