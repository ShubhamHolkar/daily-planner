const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    mobileNumber: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('USER',userSchema);

module.exports = User;