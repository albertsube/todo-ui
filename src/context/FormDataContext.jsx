import { createContext, useState } from "react"

const FormDataContext = createContext(null)

export function FormDataProvider({children}) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: '',
        datestart: '',
        dateend: '',
    })

    return (
        <FormDataContext.Provider
            value={{
                formData,
                setFormData
            }}
        >
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataContext