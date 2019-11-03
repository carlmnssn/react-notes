import React, { useState } from 'react'
import Form from './components/Form.js'
import List from './components/List.js'
import './App.css'



const App = () => {

  //Setup state object (todoList) and function to update state (setTodoList)
  const [todoList, setTodoList] = useState([])

  return (
    <div>
      {/* The form (./components/Form.js) is passed the state as todoList (todoList) and the function to update the state as a callback (addTodos)*/}
      <Form todoList={todoList} addTodos={setTodoList} />
      {/* The list (./components/List.js) is passed the state as todoList (todoList) and the function to update the state as a callback (handleTodos)*/}
      <List todoList={todoList} handleTodos={setTodoList} />
    </div>
  )
}

export default App
