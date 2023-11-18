import FormField from "./FormField";
import formConfig from '../data/form.data'
import { useState } from "react";

export default function Form() {

	const [formData, setFormData] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()

        fetch('http://localhost:3000/tasks', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					"Content-type": "application/json;charset=UTF-8"
				},
			})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	}


	return (
		<>
			<form
				className="flex flex-col items-center gap-3
					bg-slate-300 rounded-lg
					p-8 w-80 fixed top-1/3 left-1/3
					shadow-lg z-10"
				onSubmit={handleSubmit}
			>

				{formConfig.map( (fieldConfig, i) => (
					<FormField
						key={i}
						{...fieldConfig}
						setFormData={setFormData}
					/>
				))}

				<button
					className="p-3 bg-slate-600 rounded-lg w-28 mt-4 text-white"
				>Add</button>

			</form>

			<div
				className='bg-slate-100 fixed inset-0 opacity-80'
			></div>
		</>
	)
}
