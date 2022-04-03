import { useEffect, useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import ToDoList from "./ToDoList";

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodo, setFilterTodo] = useState([])

  useEffect(() => {

    getLocalTodos()
 
  },[])
  


  useEffect(() => {

    FilterHandle()
    saveLocalTodos()
  },[todos, status])

  const FilterHandle = () => {

    switch(status){

      case 'complete':
        setFilterTodo(todos.filter(todo => todo.completed === true))
break;

case 'uncomplete':

  setFilterTodo(todos.filter(todo => todo.completed === false))
break;

default:
  setFilterTodo(todos)
  break;
 
    }

  }

 
const saveLocalTodos = () => {
localStorage.setItem("todos", JSON.stringify(todos));

  }
const getLocalTodos = () => {
if(localStorage.getItem("todos") === null){

  localStorage.setItem("todos", JSON.stringify([]))
}else {

 let storage = JSON.parse(localStorage.getItem("todos"))
setTodos(storage)
}
    
  }

  return (
    <div className="App">
     <h1>To Do List
     </h1>
     <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
     <ToDoList setFilterTodo={setFilterTodo} todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
  
    </div>
  );
}

export default App;
