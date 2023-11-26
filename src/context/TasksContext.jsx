import { createContext, useState } from "react"
import { useTasks } from "../hooks/useTasks"

const TasksContext = createContext(null)

export function TasksProvider({children}) {

  const {tasks} = useTasks('http://localhost:3000/tasks')
  const [filters, setFilters] = useState('')

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filters,
        setFilters
      }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksContext