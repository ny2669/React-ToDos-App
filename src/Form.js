import React from 'react'




export default function Form({input ,setInput, setTodos,  todos, setStatus}) {

    const statusHandler = e => {

        setStatus(e.target.value)
    }


    const inputTextHandler = (e) =>{


console.log(e.target.value)
setInput(e.target.value)

    }

   const submitToDoHandler = (e) => {
    e.preventDefault()
    setTodos([

        ...todos,
        {
            text: input,
            completed: false,
            id: Math.floor(Math.random() * 1000)
        }
    ])
    setInput('')

   }
  return (
    <form onSubmit={submitToDoHandler}>
        <input onChange={inputTextHandler} type="text" value={input} />
        <button className=" add fa-thin fa-plus">
        
        </button>

        <div>
            <select onChange={statusHandler} name="todos">

                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="uncomplete">Uncomplete</option>
            </select>
        </div>
    
    </form>
  )
}
