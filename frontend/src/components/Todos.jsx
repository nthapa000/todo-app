export function Todos({todos}){
    // object destructuring
    /*
        todos = [
        {
            title: "go to gym",
            description: "We will go to gym"
        }
        ]
    */
    // export function Todos(props){
    // const todos = props.todos;
    return <div>
        {/* given the array how do we render one by one?? */}
        {todos.map(function(todo){
            // iterate over the array and map into this div
            return <div>
                {/* we need to have single parent div, sibling not allowed */}
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}

