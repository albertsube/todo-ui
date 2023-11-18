import { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";

export default function List() {

    const [tasks, setTasks] = useState([])

    useEffect( () => {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
    },[])

    return (
        <div className="flex flex-col gap-4 w-9/10 mx-12">
            {tasks.map( task => (
                <Item
                    key={task.id}
                    {...task}
                />
            ))}
        </div>
    )
}
