import { Navigate, Route, Routes } from 'react-router-dom'
import ListPage from './components/ListPage'
import DetailPage from './components/DetailPage'
import './App.css'

function App() {
  return (
    <main className="todo-app">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/todo/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
