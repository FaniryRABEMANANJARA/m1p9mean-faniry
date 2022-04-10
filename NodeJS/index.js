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



app.post("/addUser", function(req, res) {
    //console.log(req.body);
    //res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        var j = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            argent: req.body.argent,
            position: req.body.position,
            telephone: req.body.telephone

        };
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("users").insertOne(j, function(err, res) {
            if (err) throw err;
            console.log("1 user inserted");
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
        var update = { fullName: "ministre" };
        var req = { $set: { fullName: "Teg", email: "1", password: "123", argent: "3000" } };
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

app.post("/addProduct", function(req, res) {
    //console.log(req.body);
    //res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        var j = {
            name: req.body.name,
            prix: req.body.prix,
            prixachat: req.body.prixachat,
            quantite: req.body.quantite,
            date: req.body.date

        };
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("product").insertOne(j, function(err, res) {
            if (err) throw err;
            console.log("1 product inserted");
            db.close();
        });
    });

});


app.get("/findproduct", function(req, res) {
    //console.log(req.body);
    // res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("product").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });

});


app.get("/findById", function(req, res) {
    //console.log(req.body);
    // res.send(req.body);
    // res.sendFile(__dirname + "/index.html");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ekalydb");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("product").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });

});

app.use('/users', usersController);