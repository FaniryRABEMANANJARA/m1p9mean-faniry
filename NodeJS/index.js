const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//const { mongoose } = require('./db.js');
var usersController = require('./Controllers/usersController.js');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));



app.post("/test", function(req, res) {
    //console.log(req.body);
    // res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        var j = {
            "nom": req.body.nom

        };
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("users").insertOne(j, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

});



app.get("/find", function(req, res) {
    //console.log(req.body);
    // res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

});

app.put("/update", function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        var update = { nom: "ministre" };
        var req = { $set: { nom: "Soupe spécial", qte: "1", prix: "6000" } };
        dbo.collection("users").updateOne(update, req, function(err, res) {
            if (err) throw err;
            console.log("name changed");
            db.close();
        });
    });
});


app.delete("/delete", function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        //delete une a une ;) 
        var sup = { nom: 'ministre' };
        dbo.collection("users").deleteOne(sup, function(err, obj) {
            if (err) throw err;
            console.log("nom deleted");
            db.close();
        });
    });
});

app.delete("/deleteAll", function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        //delete une a une ;) 
        dbo.collection("users").drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) console.log("all name deleted");
            db.close();
        });
    });
});

app.listen(3000, () => console.log('Server start with port : 3000'));

app.use('/users', usersController);