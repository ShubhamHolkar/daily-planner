const ToDo = require('../model/ToDo');

class ToDoRepository {

    constructor(model) {
        this.model = model;
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    create(todoReq) {
        const todo = new this.model(todoReq);
        return todo.save();
    }
}

module.exports = new ToDoRepository(ToDo);