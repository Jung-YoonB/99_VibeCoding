import { Link, useNavigate, useParams } from 'react-router-dom'
import useTodoStore from '../store/useTodoStore'

function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const todo = useTodoStore((s) => s.todos.find((t) => t.id === Number(id)))
  const toggleTodo = useTodoStore((s) => s.toggleTodo)
  const removeTodo = useTodoStore((s) => s.removeTodo)

  if (!todo) {
    return (
      <>
        <Link to="/" className="back">← 목록</Link>
        <p className="empty">존재하지 않는 할 일입니다.</p>
      </>
    )
  }

  const handleDelete = () => {
    removeTodo(todo.id)
    navigate('/', { replace: true })
  }

  return (
    <>
      <Link to="/" className="back">← 목록</Link>

      <article className="card detail-card">
        <h2 className={todo.done ? 'done' : ''}>{todo.title}</h2>
        <p className="status">{todo.done ? '완료' : '진행중'}</p>
        <p className="memo">{todo.memo || '메모가 없습니다.'}</p>
      </article>

      <div className="actions">
        <button type="button" onClick={() => toggleTodo(todo.id)}>
          {todo.done ? '미완료로 변경' : '완료로 변경'}
        </button>
        <button type="button" className="danger" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </>
  )
}

export default DetailPage
