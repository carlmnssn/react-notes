import React from 'react'

const Todo = ({ todoList, deleteTodo, toggleDone }) => {
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

export default Todo
