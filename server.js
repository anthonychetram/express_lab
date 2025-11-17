const express = require('express');
require = express();

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'ejs');
app.use(logger);
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.render("index", {user: "Anthony!"});
});


app.listen = (3030);

function logger (req, res, next) {
    console.log (`Page Accessed: ${req.originalUrl}`);
    next();
}