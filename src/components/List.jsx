import { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";
import { useTasks } from "../hooks/tasks";

export default function List({filters}) {

    const {tasks} = useTasks('http://localhost:3000/tasks')
    const filteredTaks = filters ? tasks.filter(task => task.status === filters) : tasks

    return (
        <div className="flex flex-col gap-4 w-9/10 mx-12">
            {filteredTaks.map( task => (
                <Item
                    key={task._id}
                    {...task}
                />
            ))}
        </div>
    )
}
