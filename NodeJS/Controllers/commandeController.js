const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Commande } = require('../models/commande');

router.get('/', (req, res) => {
    commande.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;