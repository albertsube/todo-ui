import FormField from "./FormField";

const status = {
	PENDING: 'PENDING',
	IN_PROGRESS: 'IN PROGRESS',
	COMPLETED: 'COMPLETED'
};

const formConfig = [
	{
		name: 'title',
		label: 'Title',
		placeholder: 'Buy cookies',
		type: 'text',
	},
	{
		name: 'description',
		label: 'Description',
		placeholder: 'Go to the shop for some delicious cookies',
		type: 'textarea',
	},
	{
		name: 'status',
		label: 'Status',
		type: 'select',
		options: [
			{
				value: status.PENDING,
				text: 'PENDING'
			},
			{
				value: status.IN_PROGRESS,
				text: 'IN PROGRESS'
			},
			{
				value: status.COMPLETED,
				text: 'COMPLETED'
			},
		]
	},
	{
		name: 'datestart',
		label: 'Start date',
		type: 'date',
	},
	{
		name: 'dateend',
		label: 'Start date',
		type: 'date',
	},
	
]

export default function Form() {
	return (
		<>

			<form
			className="flex flex-col gap-2
				bg-slate-100 rounded-lg
				p-8 w-80 fixed top-1/3 left-1/3
				shadow-lg z-10"
			>

				{formConfig.map( (fieldConfig, i) => (
					<FormField
						key={i}
						{...fieldConfig}
					/>
				))}

			</form>

			<div
				className='bg-slate-100 fixed inset-0 opacity-80'
			></div>

		</>
	)
}
