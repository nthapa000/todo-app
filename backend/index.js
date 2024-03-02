// write basic express boilerplate code
// write express.json() middleware
const express = require("express")
const app = express();

app.use(express.json());


app.post("/todo", function (req,res){

})
app.get("/todos",function(req,res){

})
app.post("/completed",function(req,res){
    // marking todo as complicated

})