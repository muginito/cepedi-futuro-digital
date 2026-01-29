import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function deleteTask(taskId) {
  return axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
}

export default function TaskList() {
  const queryClient = useQueryClient()

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await axios('https://jsonplaceholder.typicode.com/todos')
      return data
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data?.map((task) => (
            <div key={task.id}>
              <li>{task.title}</li>
              <button onClick={() => deleteMutation.mutate(task.id)}>Excluir</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}
