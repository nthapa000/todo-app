import { useState } from "react";

export function CreateTodo(){
    // other-way react-query
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    // Not optimal as it causes lot of re-renders
    // In react we minimize re-renders

    return <div>
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
            // e.target is the DOM element
        }} />
        <br /><br />
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value)

        }}/>

        <br /><br />
        <button style={{
            margin:10,
            marginTop:0,
            padding:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    // whole point of React was to get away from the syntax like 
                    // document.getElementById("title").innerHTML,
                    // two ways 
                    // 
                    // react-query(optimal way)
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo added")
            })
        }}>
            Add a todo
        </button>
        {/* We haven't hit the backend yet */}
    </div>
}
