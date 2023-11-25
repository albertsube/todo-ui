import { useState, useEffect } from "react"

export const useTasks = (url) => {

    const [tasks, setTasks] = useState([])

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTasks(data))
    },[])

    return {
        tasks
    }
}