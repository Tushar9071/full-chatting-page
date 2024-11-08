const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    profilepic:{
        type: String,
        default: "",
    }
})

module.exports = mongoose.model('logins', loginSchema);