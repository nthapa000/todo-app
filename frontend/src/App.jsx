import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title:"Go to room",
          description:"In 15 minutes",
          completed:false
        }
      ]}></Todos>
    </div>
  )
}

export default App
