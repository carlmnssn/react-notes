import React from 'react'
import Todo from './Todo'

const List = ({ todoList, handleTodos }) => {

  const toggleDone = (e) => {
    e.preventDefault()
    const newArr = todoList
      .map((todo) => {
        if (todo.id === e.target.id) {
          todo.done = !todo.done
        }
        return todo
      })
    handleTodos(newArr)
  }

  const deleteTodo = (e) => {
    e.preventDefault()
    const newArr = todoList.filter(todo => todo.id !== e.target.id)
    handleTodos(newArr)
  }

  return (
    <React.Fragment>
    <Todo todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </React.Fragment>
  )
}

export default List
