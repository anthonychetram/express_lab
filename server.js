const express = require('express');
require = express();

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'ejs');
app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log('Anthony is cool!');
    res.render("index", {user: "Anthony!"});
});


app.listen = (3030);