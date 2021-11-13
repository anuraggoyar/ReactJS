const router = require('express').Router();
const Category = require('../models/Category');

router.post('/', async (req, res) => {
    const newCat = new Category(req.body)
})

module.exports = router;
