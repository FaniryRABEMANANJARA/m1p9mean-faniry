header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Content-Length, Accept-Encoding, X-Requested-With, Accept, Access-Control-Request-Method");

if ("OPTIONS" === $_SERVER['REQUEST_METHOD']) {
    die();
}
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
    product.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving product :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy misy anio id io ato : ${req.params.id}`);
    product.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }

    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy enregistrer oh!!! : ${req.params.id}`);
    var product = new Product({
        name: req.body.name,
        prix: req.body.prix,
        prixachat: req.body.prixachat,
        quantite: req.body.quantite,
        date: req.body.date

    });
    Product.findByIdAndUpdate(req.params.id, { $set: use }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le update oh!!!' + JSON.stringify(err, undefined, 2)); }

    });
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy misy anio id io ato : ${req.params.id}`);
    product.deleteProduct(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }

    });
});


module.exports = router;