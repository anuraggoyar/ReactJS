const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
app.use(express.json())
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Connected to MongoDB.'))
    .catch((error) => {console.log(error)});

app.use('/api/auth', require('./routes/auth'));

app.listen(5000, () => { console.log('Server is started at port : 5000') });
