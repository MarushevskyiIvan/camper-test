import { useState } from 'react'
import { Input, InputWrapper, Svg, LocalForm } from './LocationForm.styled'
import sprite from '../../assets/sprite.svg'

export const LocationForm = () => {
	const [name, setName] = useState('')

	const handleChange = newQuery => {
		setName(newQuery)
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
						onSubmit={evt => handleChange(evt.target.value)}
					/>
				</InputWrapper>
			</LocalForm>
		</>
	)
}
