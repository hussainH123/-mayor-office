const mongoose = require('../db/db');
const authSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    username: { // Corrected field name from lasttname to lastname
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 10
    }
});

const Author = mongoose.model("Author", authSchema);

module.exports = Author;
