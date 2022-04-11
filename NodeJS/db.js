const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EkalyDB', (err) => { ///localhost/port/nomdb
    if (!err)
        console.log('Connection success');
    else
        console.log('Erreur connection: ' + JSON.stringify(err, undefined, 2));
});

module.export = mongoose;