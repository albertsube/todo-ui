export default function FormField({
    name,
    label,
    placeholder,
    type,
    options,
}) {
    
    const styles = `rounded py-1 px-4
        ${type === 'textarea' && 'h-24'}`

    const parameters = {
        id: name,
        name: name,
        placeholder: placeholder,
        type: type,
        className: styles
    }

    const renderInput = () => {
        switch(type){
            case('select'):
                return (
                    <select {...parameters}>
                        {options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >{option.text}</option>
                        ))}
                    </select>
                )
            case('textarea'):
                return <textarea {...parameters} />
            case('text'):
            default:
                return <input {...parameters} />
        }
    }

    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            {renderInput()}
        </div>
    )
}
