import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function TaskList() {
    const queryClient = useQueryClient()
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/todos')
            return data
        },
    })
    
    return (
        <div>
            <h1>Tasks</h1>
            {isLoading ? (
                'Loading...'
            ) : isError ? (
                <span>`Error: ${error.message}`</span>                
            ) : (
                <ul>
                    {data?.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}