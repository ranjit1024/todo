import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  fetch("http://192.168.2.6:3000/todos").then(
    async function(res) {
     const json = await res.json();
     
     setTodos(json.allTodo ) 
    }
  )

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      {console.log(todos)}
    </div>
  )
}

export default App
