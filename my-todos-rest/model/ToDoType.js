const mongoose = require('mongoose');

const todoTypeSchema = mongoose.Schema({
    name: String,
    description: String
})

const ToDoType = mongoose.model('TODO_TYPE', todoTypeSchema);

module.exports = ToDoType;