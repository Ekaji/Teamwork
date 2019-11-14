const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require('./queries');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({message: 'this is a json response'})
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

module.exports = app;

