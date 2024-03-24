import { useState } from 'react'
import { Input, InputDiv, InputWrapper, Label } from './locationForm.styled'

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
			<InputWrapper>
				<Label>Location</Label>
				{/* <svg>
					<use></use>
				</svg> */}
				<Input
					type='text'
					placeholder='City'
					name='name'
					onChange={evt => handleChange(evt.target.value)}
				/>
			</InputWrapper>
		</>
	)
}
