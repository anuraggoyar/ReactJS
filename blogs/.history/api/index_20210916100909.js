const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
//DB Set
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Connected to MongoDB.'))
    .catch((error) => {console.log(error)});

//file upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename : (req, file, cb) => {
        cb(null, "image-file.jpg");
    }
});
const upload = multer({storage});
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json('File has been uploded.');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/users'));
app.use('/api/post', require('./routes/posts'));
app.use('/api/cat', require('./routes/categories'));


app.listen(5000, () => { console.log('Server is started at port : 5000') });
