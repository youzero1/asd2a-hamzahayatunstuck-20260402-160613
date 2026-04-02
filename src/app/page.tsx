'use client'

import { useState } from 'react'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import { Todo } from '@/types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Buy groceries', completed: false, createdAt: new Date() },
    { id: '2', text: 'Walk the dog', completed: true, createdAt: new Date() },
    { id: '3', text: 'Read a book', completed: false, createdAt: new Date() },
  ])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter((t) => !t.completed).length

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-indigo-700 mb-2 tracking-tight">✅ Todo App</h1>
          <p className="text-gray-500 text-sm">Stay organized, stay productive</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <AddTodo onAdd={addTodo} />

          {/* Filter Tabs */}
          <div className="flex border-b border-gray-100">
            {(['all', 'active', 'completed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                  filter === f
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              {activeTodosCount} item{activeTodosCount !== 1 ? 's' : ''} left
            </span>
            {todos.some((t) => t.completed) && (
              <button
                onClick={clearCompleted}
                className="text-xs text-red-400 hover:text-red-600 transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
