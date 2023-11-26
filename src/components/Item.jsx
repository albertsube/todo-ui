import ItemButtons from "./ItemButtons"
import FormDataContext from '../context/FormDataContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"

export default function Item({
    title,
    description,
    status,
    datestart,
    dateend,
    user,
    _id,
}) {

    const {setFormData} = useContext(FormDataContext)
    const navigate = useNavigate()
  
    const completeTask = () => {
        fetch(`http://localhost:3000/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            },
        })
        .catch(error => console.log('Error completing task',error))
    }
  
    const editTask = () => {
        // TODO make task update instead of posting a new task
        setFormData({
            title,
            description,
            status,
            datestart,
            dateend,
            user,
            _id
        })
        navigate('/tasks/create')
    }
  
    const deleteTask = () => {
        fetch(`http://localhost:3000/tasks/${_id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      },
    })
    .catch(error => console.log('Error completing task',error))
    }

    const statusColor = {
        'PENDING': 'bg-red-100',
        'IN PROGRESS': 'bg-yellow-100',
        'COMPLETED': 'bg-green-100',
    }

    return (
        <div className="grid grid-cols-3 bg-slate-100 p-6 rounded-md shadow-md relative group">
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p>{datestart}</p>
                <p>{dateend}</p>
                <p>{user}</p>
            </div>
            <div className="flex flex-col justify-between col-span-2">
                <p className="text-left">{description}</p>
                <p className={`${statusColor[status]} p-2 rounded-md w-fit`}>{status}</p>
            </div>

            <ItemButtons
                completeTask={completeTask}
                editTask={editTask}
                deleteTask={deleteTask}
            />

        </div>
    )
}
