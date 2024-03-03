// write basic express boilerplate code
// write express.json() middleware
const express = require("express")
const {createTodo, updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require("cors")
// anyfrontend can hit it now not only localhost:3000
// we can restrict
// app.use(cors({
//     origin:"http://localhost:5173"
// }))

// destructuring of object

// we can also do it like this 
// const types = require("./types")
// then using it like this
// const parsePayload = types.createTodo;
// importing something which has been exported
const app = express();
app.use(cors())
app.use(express.json());


app.post("/todo", async function (req,res){
    // validation
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    // await syntax only inside async function 
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    // if we don't await , then it like saying todo is inserted without todo waiting for database.
    // await for todo (to actually reach database) , then only send the message
    // if it throws exception in case something happens to database. 
    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
// getting the todo
const todos =await todo.find({});
// const todos = todo.find({
// title:"go to gym Boi!!"
// });
// If we want to do specific search
// console.log(todos). this will log as promise 
// because todo.find() need to actually hit the database
// it will take long time we have to await for it. If we log right now what we get is promise which eventually resolve with the data.
res.json({
    todos
})
})
app.post("/completed",async function(req,res){
    // marking todo as complicated
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong todos id",
        })
        return;
    }
    await todo.update({
        // automatically generated
        _id: req.body.id
    },{
        // marked the _id todo as completed
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);