export default function Item({
    title,
    description,
    status,
    datestart,
    dateend,
    user,
}) {

    const statusColor = {
        'PENDING': 'bg-red-100',
        'IN PROGRESS': 'bg-yellow-100',
        'COMPLETED': 'bg-green-100',
    }

    return (
        <div className="grid grid-cols-3 bg-slate-100 p-6 rounded-md shadow-md">
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
        </div>
    )
}
