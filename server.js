const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.render("index.html");
});

app.listen = (3030);