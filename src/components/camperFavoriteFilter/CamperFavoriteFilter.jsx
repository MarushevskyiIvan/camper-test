import { Formik } from 'formik'
import {
	DivWrap,
	FilterBtn,
	Input,
	InputLocal,
	InputWrapper,
	Label,
	LocalDiv,
	P,
	Svg,
	SvgLocal,
	Title,
} from './CamperListFilterStyled'
import sprite from '../../assets/sprite.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../../redux/campers/filterSlice'

export const CamperListFilter = () => {
	const [formData, setFormData] = useState({
		location: '',
		AC: false,
		Automatic: false,
		Kitchen: false,
		TV: false,
		Showers: false,
		Form: '',
	})

	const dispatch = useDispatch()

	const handleChange = event => {
		const { name, value, type, checked } = event.target
		const newValue = type === 'checkbox' ? checked : value

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: newValue,
		}))
	}

	// const handleRadioChange = event => {
	// 	setFormData(prevFormData => ({
	// 		...prevFormData,
	// 		Form: event.target.value,
	// 	}))
	// }

	const handleSubmit = evt => {
		evt.preventDefault()

		dispatch(filter(formData))
	}

	return (
		<form onSubmit={handleSubmit}>
			<LocalDiv>
				<label>Location</label>
				<InputWrapper>
					<SvgLocal>
						<use href={sprite + '#icon-location'} />
					</SvgLocal>
					<InputLocal
						type='text'
						placeholder='City'
						name='location'
						onChange={handleChange}
					/>
				</InputWrapper>
			</LocalDiv>

			<P>Filters</P>
			<Title>Vehicle equipment</Title>
			<DivWrap>
				<Input
					type='checkbox'
					name='AC'
					value='AC'
					onChange={handleChange}
					id='AC'
				/>
				<Label htmlFor='AC'>
					<Svg>
						<use href={sprite + '#icon-ac'} />
					</Svg>
					<span>AC</span>
				</Label>
				<Input
					type='checkbox'
					name='Automatic'
					value='Automatic'
					onChange={handleChange}
					id='example'
				/>
				<Label htmlFor='example'>
					<Svg>
						<use href={sprite + '#icon-automatic'} />
					</Svg>
					<span>Automatic</span>
				</Label>
				<Input
					type='checkbox'
					name='Kitchen'
					value='Kitchen'
					onChange={handleChange}
					id='Kitchen'
				/>
				<Label htmlFor='Kitchen'>
					<Svg>
						<use href={sprite + '#icon-kitchen'} />
					</Svg>
					<span>Kitchen</span>
				</Label>

				<Input
					type='checkbox'
					name='TV'
					value='TV'
					onChange={handleChange}
					id='TV'
				/>
				<Label htmlFor='TV'>
					<Svg>
						<use href={sprite + '#icon-tv'} />
					</Svg>
					<span>TV</span>
				</Label>

				<Input
					type='checkbox'
					name='Showers'
					value='Showers'
					onChange={handleChange}
					id='Showers'
				/>
				<Label htmlFor='Showers'>
					<Svg>
						<use href={sprite + '#icon-shower'} />
					</Svg>
				</Label>
			</DivWrap>
			<Title>Vehicle type</Title>
			<DivWrap>
				<Input
					type='radio'
					name='Form'
					value='van'
					// checked={formData.Form === 'van'}
					onChange={handleChange}
					id='van'
				/>
				<Label htmlFor='van'>
					<Svg>
						<use href={sprite + '#icon-van'} />
					</Svg>
					<span>Van</span>
				</Label>

				<Input
					type='radio'
					name='Form'
					value='fullyIntegrated'
					// checked={formData.Form === 'fullyIntegrated'}
					onChange={handleChange}
					id='fullyIntegrated'
				/>
				<Label
					htmlFor='fullyIntegrated'
					style={{
						position: 'relative',
						justifyContent: 'flex-end',
						padding: '9px',
					}}
				>
					<Svg
						style={{
							position: 'absolute',
							top: '9px',
						}}
					>
						<use href={sprite + '#icon-alcove'} />
					</Svg>
					<span>Fully Integrated</span>
				</Label>

				<Input
					type='radio'
					name='Form'
					value='alcove'
					// checked={formData.Form === 'alcove'}
					onChange={handleChange}
					id='alcove'
				/>
				<Label htmlFor='alcove'>
					<Svg>
						<use href={sprite + '#icon-fully-integrated'} />
					</Svg>
					<span>Alcove</span>
				</Label>
			</DivWrap>
			<FilterBtn>Search</FilterBtn>
		</form>
	)
}
