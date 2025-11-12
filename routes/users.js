const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
    res.send("User List");
});
router.get('/new', (req, res) => {
    res.send("New User Form");
});
//router.get('/:id', (req, res) => {res.send(`Getting User Data: ${req.params.id}`);});
router.route('/:id').get('/:id', (req, res) => {
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res) => {
    
}).put((req, res) => {
    res.send(`Updating User Data: ${req.params.id}`);
});
module.exports = router;