'use client'

import { useState, FormEvent } from 'react'

interface AddTodoProps {
  onAdd: (text: string) => void
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4 border-b border-gray-100">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-sm text-gray-700 placeholder-gray-300 bg-transparent outline-none py-2 px-1"
      />
      <button
        type="submit"
        disabled={!inputValue.trim()}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-200 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
      >
        Add
      </button>
    </form>
  )
}
