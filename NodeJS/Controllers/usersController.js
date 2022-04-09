const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { User } = require('../models/users');
/*
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});
/*
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy misy anio id io ato : ${req.params.id}`);
    User.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Tsy tonga ah xD :' + JSON.stringify(err, undefined, 2)); }

    });
});
*/
router.post('/', (req, res) => {
    var user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        argent: req.body.argent
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('not save!!!' + JSON.stringify(err, undefined, 2)); }
    });
});
/*
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy enregistrer oh!!! : ${req.params.id}`);
    var use = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        argent: req.body.argent,
    };

    User.findByIdAndUpdate(req.params.id, { $set: use }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le update oh!!!' + JSON.stringify(err, undefined, 2)); }

    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tsy enregistrer oh!!! : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Tsy nety le delete oh!!!' + JSON.stringify(err, undefined, 2)); }

    });
});
*/
module.exports = router;