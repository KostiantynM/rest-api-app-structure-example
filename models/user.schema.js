const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    tags: {
        type: [String],
        required: false,
        default: []
    }
});

module.exports = mongoose.model('user', userSchema);