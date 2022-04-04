const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Users } = require('../models/users');

router.get('/', (req, res) => {
    Users.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy misy anio id io ato : ${req.params.id}`);
    Users.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }

    });
});

router.post('/', (req, res) => {
    var user = new Users({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password
    }); ///parametre 'user'
    user.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le save oh!!!' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy enregistrer oh!!! : ${req.params.id}`);

    var user = new Users({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password
    });
    Users.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le upudate oh!!!' + JSON.stringify(err, undefined, 2)); }

    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy enregistrer oh!!! : ${req.params.id}`);

    Users.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le delete oh!!!' + JSON.stringify(err, undefined, 2)); }

    });
});

module.exports = router;