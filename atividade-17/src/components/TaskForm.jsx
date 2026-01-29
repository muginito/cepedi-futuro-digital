import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export default function TaskForm() {
const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            const post = await axios.post()
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks'])
        }
    })
    
  return (
    <>
    <form>
        <input type="text" />
        <input type="submit" />
    </form>
    </>
  )
}