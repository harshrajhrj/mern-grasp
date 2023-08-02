const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        required: true
    },
    age: {
        type: Number,
        min: 12,
        required: true
    },
    dob: {
        type: String,
        required: true
    }
}, { collection: 'student', timestamps: true });

module.exports = mongoose.model('Student', studentSchema);