const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.send('Posts Page');
});

router.get('/new', (req, res) => {
    res.send('Create New Post');
});
module.exports = router;