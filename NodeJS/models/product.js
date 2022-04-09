const mongoose = require('mongoose');

var Product = mongoose.model('Product', {

    "name": { type: string },
    "price": { type: string },
    "sale_price": { type: string },
    "sales_count": { type: string },
    "sale_date": { type: string },
});

module.exports = { Product };