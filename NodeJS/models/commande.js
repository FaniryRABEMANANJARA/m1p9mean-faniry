const mongoose = require('mongoose');

var Commande = mongoose.model('Commande', {

    "plat": { type: string },
    "position": { type: string },
    "telephone": { type: string },
    "quantite": { type: string },
    "date": { type: string },
    "fullname": { type: string },
    "prix": { type: string },
});

module.exports = { Commande };