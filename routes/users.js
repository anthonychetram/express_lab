const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(`users/list`, { users: users });
});
router.get(`/new`, (req, res) => {
    res.render("users/new", {firstName: ""});
});

router.post('/', (req, res) => {
    // res.send("User Created");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;


    const isVallid = firstName != "" && lastName != ""
    if (isVallid) {
        console.log(`Adding User: ${firstName}`);
        users.push({ 
            firstName: firstName, 
            lastName: lastName,
            age: age,
            gender: gender,
        });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    } else {
        console.log("Invalid User Data");
        res.render("users/new", { firstName: firstName });
    }
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

const users = [];

router.param("id", (req, res, next, id) => {
    console.log(`Accessing user # ${id}`);
    next();
});

module.exports = router;