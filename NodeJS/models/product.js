const mongoose = require('mongoose');

var Product = mongoose.model('Product', {

    "name": { type: string },
    "prix": { type: string },
    "prixachat": { type: string },
    "quantite": { type: string },
    "date": { type: string },
});

module.exports = { Product };