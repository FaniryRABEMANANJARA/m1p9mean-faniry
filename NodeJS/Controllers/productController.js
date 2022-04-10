const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Product } = require('../models/product');

router.post('/', (req, res) => {
    var product = new Product({
        name: req.body.name,
        prix: req.body.prix,
        prixachat: req.body.prixachat,
        quantite: req.body.quantite,
        date: req.body.date

    });
    product.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('not save!!!' + JSON.stringify(err, undefined, 2)); }
    });
});



router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving product :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.get('/findById/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy misy anio id io ato : ${req.params.id}`);
    Product.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }

    });
});


module.exports = router;