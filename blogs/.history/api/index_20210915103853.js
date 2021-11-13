const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
MONGODB_URL = mongodb + srv://anuraggoyar:<anurag@3388>@cluster0.eitii.mongodb.net/blog?retryWrites=true&w=majority
console.log(process.env.
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Connected to MongoDB.'))
    .catch((error) => {console.log(error)});


app.use('/main', (req,res) => {
    console.log('This is main url');
    res.send("Hello main url.")
})

app.listen(5000, () => { console.log('Server is started at port : 5000') });
