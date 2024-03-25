import { useState } from 'react'
import { Input, InputWrapper, Svg, LocalForm } from './LocationForm.styled'
import sprite from '../../assets/sprite.svg'

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
			<LocalForm>
				<label>Location</label>
				<InputWrapper>
					<Svg>
						<use href={sprite + '#icon-location'} />
					</Svg>
					<Input
						type='text'
						placeholder='City'
						name='name'
						onChange={evt => handleChange(evt.target.value)}
					/>
				</InputWrapper>
			</LocalForm>
		</>
	)
}
