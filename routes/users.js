const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
    res.send("User List");
});
router.get('/new', (req, res) => {
    res.send("New User Form");
});
router.post('/', (req, res) => {
    res.send("Create New User");
});

//router.get('/:id', (req, res) => {res.send(`Getting User Data: ${req.params.id}`);});
router.route('/:id').get((req, res) => {
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res) => {

}).put((req, res) => {
    res.send(`Updating User Data: ${req.params.id}`);
});

router.param("id", (req, res, next, id) => {
    console.log(`Accessing user # ${id}`);
    next();
});

const users = [{name: "Anthony", role: "admin"}, {name: "Daniel", role: "user"}, {name: "Vuaghn", role: "user"}];

router.param("id", (req, res, next, id) => {
    console.log(`Accessing user # ${id}`);
    next();
});

module.exports = router;