import ItemButton from "./ItemButton"

export default function Item({
    title,
    description,
    status,
    datestart,
    dateend,
    user,
    _id,
}) {

    const statusColor = {
        'PENDING': 'bg-red-100',
        'IN PROGRESS': 'bg-yellow-100',
        'COMPLETED': 'bg-green-100',
    }

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
        // show()
        // setFormData({
        //     title,
        //     description,
        //     status,
        //     datestart,
        //     dateend,
        //     user,
        //     _id
        // })
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

    const buttonConfig = [
        {
            svg: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>,
            color: 'green',
            handleClick: () => completeTask()
        },
        {
            svg: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>,
            color: 'yellow',
            handleClick: () => editTask()
        },
        {
            svg: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>,
            color: 'red',
            handleClick: () => deleteTask()
        }
    ]

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

            <div className="hidden group-hover:flex gap-1 absolute right-0 translate-x-3/2 -translate-y-1/2">
                {buttonConfig.map((button, i) => (
                    <ItemButton
                        key={i}
                        {...button}
                    />
                ))}
            </div>

        </div>
    )
}
