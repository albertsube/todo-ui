import { useState } from "react";
import Item from "../components/Item";
import { useTasks } from "../hooks/useTasks";
import Filters from '../components/Filters'

export default function List() {

    const {tasks} = useTasks('http://localhost:3000/tasks')
    const [filters, setFilters] = useState('')
    const filteredTaks = filters ? tasks.filter(task => task.status === filters) : tasks

    return (

        <main className='flex flex-col items-center'>
            <Filters
                filters={filters}
                setFilters={setFilters}
            />
            <div className="flex flex-col gap-6 w-9/10 mx-12">
                {filteredTaks.map( task => (
                    <Item
                        key={task._id}
                        {...task}
                    />
                ))}
            </div>
      </main>

    )
}
