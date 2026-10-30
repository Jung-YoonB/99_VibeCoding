import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title, memo) =>
        set((state) => ({
          todos: [
            { id: Date.now(), title, memo, done: false },
            ...state.todos,
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t,
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
    }),
    { name: 'todo-app:todos' },
  ),
)

export default useTodoStore
