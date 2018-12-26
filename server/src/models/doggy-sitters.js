const mongoose = require('mongoose');

const doggySitterSchema = mongoose.Schema({
    FullName: String,
    Location: String,
    Price: Number,
    Rate: Number
});

module.exports = mongoose.model('DoggySitter', doggySitterSchema);