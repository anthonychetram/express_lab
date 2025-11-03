const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.render("index.html", {user: "Anthony!"});
});
app.get('/users', (req, res) => {
    res.send("User List");
});
app.get('/users/new', (req, res) => {
    res.send("New User Form");
});

app.listen = (3030);