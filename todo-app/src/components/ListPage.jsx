import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTodoStore from '../store/useTodoStore'

function ListPage() {
  const todos = useTodoStore((s) => s.todos)
  const addTodo = useTodoStore((s) => s.addTodo)
  const toggleTodo = useTodoStore((s) => s.toggleTodo)

  const [title, setTitle] = useState('')
  const [memo, setMemo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    addTodo(trimmed, memo.trim())
    setTitle('')
    setMemo('')
  }

  return (
    <>
      <h1>할 일</h1>

      <form className="card form-card" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          aria-label="제목"
        />
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="메모 (선택)"
          aria-label="메모"
          rows={3}
        />
        <button type="submit" className="primary" disabled={!title.trim()}>
          추가
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="empty">등록된 할 일이 없습니다.</p>
      ) : (
        <ul className="card-list">
          {todos.map((todo) => (
            <li key={todo.id} className={`card todo-card${todo.done ? ' done' : ''}`}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                aria-label={`${todo.title} 완료 표시`}
              />
              <Link to={`/todo/${todo.id}`} className="todo-link">
                {todo.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ListPage
