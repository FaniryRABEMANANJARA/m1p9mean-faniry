const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var usersController = require('./Controllers/usersController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server start with port : 3000'));

app.use('/users', usersController);