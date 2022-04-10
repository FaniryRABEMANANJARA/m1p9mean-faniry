const mongoose = require('mongoose');

var User = mongoose.model('User', {
    "fullName": { type: String },
    "email": { type: String },
    "password": { type: String },
    "argent": { type: String },
    "telephone": { type: String },
    "position": { type: String },
});

module.exports = { User };