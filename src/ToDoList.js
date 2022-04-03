import React from 'react'
import Todo from './Todo'

export default function ToDoList ({todos, setTodos, setFilterTodo, filterTodo}) {
  return (
    <div>
<ul>
   {filterTodo.map(list => (

       <Todo key={list.id} todo={list.text} setTodos={setTodos} todos={todos} list={list} setFilterTodo={setFilterTodo}/>
   ))}
</ul>
    </div>
  )
}
