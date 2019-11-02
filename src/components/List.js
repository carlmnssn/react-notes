import React from 'react'

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
    <ul className="todo-list">
      {todoList.map((todo, i) => todo.done ?
        (<li className='todo todo-done' key={i} id={todo.id}>
          <p>
            {todo.todo}
          </p>
          <div className='list-buttons'>
            <button className='toggle-done' id={todo.id} onClick={toggleDone}>NOT DONE</button>
            <button className='delete-todo' id={todo.id} onClick={deleteTodo}>X</button>
          </div>
        </li>) :
        (<li className='todo' key={i} id={todo.id}>
          <p>
            {todo.todo}
          </p>
          <div className='list-buttons'>
            <button className='toggle-done' id={todo.id} onClick={toggleDone}>DONE</button>
            <button className='delete-todo' id={todo.id} onClick={deleteTodo}>X</button>
          </div>
        </li>))}
    </ul>
  )
}

export default List
