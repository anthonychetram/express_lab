const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.send('Hello, World!');
});

app.listen = (3030);