const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/DogKeeping';

mongoose.connect(connectionString);
const db = mongoose.connection;

// on error event
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log(`mongoose connected to ${connectionString}`);
});

module.exports = db;