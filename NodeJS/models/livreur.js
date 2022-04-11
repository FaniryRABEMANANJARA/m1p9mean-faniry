const mongoose = require('mongoose');

var Livreur = mongoose.model('Livreur', {

    "fullName": { type: string },
    "email": { type: string },
    "password": { type: string },
    "telephone": { type: string },
    "restaurant": { type: string },
});

module.exports = { Livreur };