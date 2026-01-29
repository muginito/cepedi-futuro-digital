import { useQueryClient } from '@tanstack/react-query'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <>
      <h1>Tasks</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
