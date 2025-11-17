const express = require('express');
require = express();

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//app.use(logger);
app.use('/users', userRouter);
app.use('/posts', postRouter);


app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.render("index", {user: "Anthony!"});
});

app.get(`/new`, (req, res) => {
    res.send("users/new", {firstName: "Please Enter Your Name"});
});
app.listen = (3030);

// function logger (req, res, next) {
//     console.log (`Page Accessed: ${req.originalUrl}`);
//     next();
// }