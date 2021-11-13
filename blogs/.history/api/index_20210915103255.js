const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();mon


app.use('/main', (req,res) => {
    console.log('This is main url');
    res.send("Hello main url.")
})

app.listen(5000, () => { console.log('Server is started at port : 5000') });
