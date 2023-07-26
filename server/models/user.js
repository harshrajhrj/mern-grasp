const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    google_id: String,
    avatar: String
}, { collection: 'users', timestamps: true });

module.exports = mongoose.model('User', userSchema);