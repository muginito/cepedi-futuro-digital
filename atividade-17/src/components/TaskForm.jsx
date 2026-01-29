import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function TaskForm() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newTask) => {
      return axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          mutation.mutate({
            title: 'New Task',
            completed: false,
          })
        }}
      >
        New Task
      </button>
    </>
  )
}
