const express = require('express');

const app = express();

app.use('/main', (req,res) => {
    console.log('This is main url');
    res.send()
})

app.listen(5000, () => { console.log('Server is started at port : 5000') });
