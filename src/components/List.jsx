import { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";

export default function List({filters, show, setFormData}) {

    const {tasks} = useTasks('http://localhost:3000/tasks')
    const filteredTaks = filters ? tasks.filter(task => task.status === filters) : tasks

    return (
        <div className="flex flex-col gap-6 w-9/10 mx-12">
            {filteredTaks.map( task => (
                <Item
                    key={task._id}
                    {...task}
                    show={show}
                    setFormData={setFormData}
                />
            ))}
        </div>
    )
}
