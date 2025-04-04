const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb://localhost:27017/todo-app')

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    compoleted: Boolean
})

const todo = mongoose.model('todos', todosSchema);
module.exports = {
    todo
}