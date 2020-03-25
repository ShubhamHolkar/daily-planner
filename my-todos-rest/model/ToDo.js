const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    note: String,
    due_date: Date,
    user_id: String,
    type_id: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

const ToDo = mongoose.model('TODO', todoSchema);

module.exports = ToDo;