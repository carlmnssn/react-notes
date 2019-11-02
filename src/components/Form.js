import React, { useState } from 'react'
import uuid from 'uuid'


// Form is passed the state of the parentobject as todoList and the function to update that state as addTodos
const Form = ({ todoList, addTodos }) => {
  // The form object has it's own state for handling the input (input) and a function to update the state (setInput)
  const [input, setInput] = useState()


  const handleInput = (e) => {
    // Handle input sets the state (input) to the text value of the input field
    setInput(e.target.value)
  }


  const setTodo = (e) => {
    e.preventDefault()
    // Empties the text input field of the form
    e.target.reset()
    // Updates the state of the parentobject through the callback described in App.js, line 22
    addTodos([...todoList, {
      todo: input,
      done: false,
      id: uuid.v4()
    }])
  }

  return (
    <div className='form-container'>
      {/* Calls setTodo on form submit*/}
      <form className='form' onSubmit={setTodo}>
        {/* Calls handleInput on input change*/}
        <input className='form__input' type='text' placeholder='TO' onChange={handleInput} required></input>
        <button>DO</button>
      </form>
    </div>
  )
}

export default Form
