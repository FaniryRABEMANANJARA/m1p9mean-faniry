const mongoose = require('mongoose');

var User = mongoose.model('User', {
    nom: { type: String }
}); ///parametre 'user'

module.exports = { User };