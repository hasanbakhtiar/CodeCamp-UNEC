import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { todoType } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<todoType[]>([
    {
      id: 1,
      text: "Hello"
    },
    {
      id: 2,
      text: "read book"
    }
  ])

  const todoAppHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Date.now().toString(), text: text }
    ])
  }

  const todoDelAction = (id: number | string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const todoEditAction = (id: number | string , update:todoType) => {
    setTodos((prevTodo) => prevTodo.map((todo) => {
      if (todo.id == id) {
        return { ...todo, ...update }
      } else {
        return todo;
      }
    }))
  }

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <h1 className='my-5'>TODO APP</h1>
      <div className="col-5">
        <TodoInput onAddTodo={todoAppHandler} />
        <TodoList items={todos} onDeleteTodo={todoDelAction} onEditTodo={todoEditAction} />
      </div>
    </div>
  )
}

export default App