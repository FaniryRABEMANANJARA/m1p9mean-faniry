const mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    nom: { type: String },
    prenom: { type: String },
    email: { type: String },
    password: { type: String }
}); ///parametre 'user'

module.exports = { Users };