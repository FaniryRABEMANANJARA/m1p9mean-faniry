const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Product } = require('../models/product');

router.post('/', (req, res) => {
    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        sale_price: req.body.sale_price,
        sales_count: req.body.sales_count,
        sale_date: req.body.sale_date

    });
    product.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('not save!!!' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;