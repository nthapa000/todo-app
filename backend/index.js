// write basic express boilerplate code
// write express.json() middleware
const express = require("express")
const {createTodo, updateTodo} = require("./types")
// destructuring of object

// we can also do it like this 
// const types = require("./types")
// then using it like this
// const parsePayload = types.createTodo;
// importing something which has been exported
const app = express();

app.use(express.json());


app.post("/todo", function (req,res){
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
})
app.get("/todos",function(req,res){

})
app.post("/completed",function(req,res){
    // marking todo as complicated
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong todos id",
        })
        return;
    }
})