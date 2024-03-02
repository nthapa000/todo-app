export function CreateTodo(){
    return <div>
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="title" />
        <br /><br />
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="description"/>
        <br /><br />
        <button style={{
            margin:10,
            marginTop:0,
            padding:10
        }}>
            Add a todo
        </button>
        {/* We haven't hit the backend yet */}
    </div>
}
