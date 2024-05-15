const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstoredb')
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(err));

module.exports = mongoose;
