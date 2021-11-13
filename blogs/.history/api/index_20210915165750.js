const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
dotenv.config();
app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Connected to MongoDB.'))
    .catch((error) => {console.log(error)});

//file upload 
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "images")
    },
    filename : (req, file, cb) => {
        cb(null, req.body.name)
    }
});
const upload = multer({storage});
app.post('/api/uploads', upload())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/users'));
app.use('/api/post', require('./routes/posts'));
app.use('/api/cat', require('./routes/categories'));


app.listen(5000, () => { console.log('Server is started at port : 5000') });
