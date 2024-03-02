// mongoDb schema 
/* 
    Todo {
        title: string;
        description : string;
        completed : boolean
    }
*/
const mongoose = require("mongoose")
// mongodb+srv://admin:KmCihXn0l1podXRj@cluster0.9gr3ic2.mongodb.net/todos
mongoose.connect("mongodb+srv://admin:KmCihXn0l1podXRj@cluster0.9gr3ic2.mongodb.net/todos")
// we should put it in env file

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}