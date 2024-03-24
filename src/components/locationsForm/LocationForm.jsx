import { useState } from 'react'

export const LocationForm = () => {
	const [name, setName] = useState('')

	const handleChange = newQuery => {
		setName(newQuery)
	}

	const formSubmit = evt => {
		evt.preventDefault()
		// if (!name.trim()) {
		// 	toast.error('Please enter the text of the query')
		// 	return
		// }

		// handleParams(name)
	}

	return (
		<>
			<div>
				<form onSubmit={formSubmit}>
					<label>
						<svg>?</svg>
						Location
						<input
							type='text'
							placeholder='City'
							name='name'
							onChange={evt => handleChange(evt.target.value)}
						/>
					</label>
				</form>
			</div>
		</>
	)
}
