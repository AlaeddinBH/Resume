const mongoose = require('mongoose'); 

const schema = mongoose.Schema;

const formationsSchema = new schema ({
    title: String,
    date: String,
    institut: String,
    location: String,

});

module.exports = mongoose.model('Formation', formationsSchema); 

