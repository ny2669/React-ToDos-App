import React from 'react'


export default function Todo({todo, setTodos, todos, list}) {

  
    const deleteHandler = () => {

        setTodos(todos.filter(el => el.id !== list.id))  
    
    }

    
    const completeHandler = () => {

        setTodos(todos.map(items => {

        if(items.id === list.id){
           
            return {

                ...items, 
                completed: !items.completed
                
            }
        }
        return items
        }))  
    
    }

  return (
    <div className="list">
       <li className={`${list.completed ? "complete": ""} `}>{todo}</li> 
       <button className='doneBnt'  onClick={completeHandler}>{!list.completed ? "To Do": "Complete"}</button> 
       <button onClick={deleteHandler}className="fa-solid fa-xmark"></button> 
    </div>
  )
}
