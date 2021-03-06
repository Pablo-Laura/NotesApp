const mongoose = require('mongoose');

const URI = process.env.MONGOBD_URI 
? process.env.MONGOBD_URI 
: 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection; 

connection.once('open', () => {
    console.log('DB is connected');
});