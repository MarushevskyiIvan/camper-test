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
import { getAllCarsInformation1 } from '../../redux/campers/operations'
import { useParams, useSearchParams } from 'react-router-dom'

export const CamperListFilter = () => {
	// const [formData, setFormData] = useState({
	// 	location: '',
	// 	AC: false,
	// 	transmission: false,
	// 	kitchen: false,
	// 	TV: false,
	// 	shower: false,
	// 	form: '',
	// })

	const [params, setParams] = useSearchParams()

	const allParams = Object.fromEntries(params)

	const location = params.get('location') ?? ''

	const handleParams = (key, evt) => {
		const { type, checked } = evt.target

		if (type === 'checkbox' && checked) {
			params.set(key, 1)
		} else {
			params.delete(key)
		}

		setParams(params)
	}

	const handleRadioParams = (key, evt) => {
		const { type, checked, value } = evt.target

		if (type === 'radio' && checked) {
			params.set(key, value)
		} else {
			params.delete(key)
		}

		setParams(params)
	}

	const handleLocationParams = evt => {
		if (evt.target.value !== '') {
			params.set('location', evt.target.value)
		} else {
			params.delete('location')
		}

		setParams(params)
	}

	const dispatch = useDispatch()

	const handleChange = event => {
		const { name, value, type, checked } = event.target
		const newValue = type === 'checkbox' ? checked : value

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: newValue,
		}))
	}

	const handleSubmit = evt => {
		evt.preventDefault()

		// dispatch(filter(formData))
		dispatch(getAllCarsInformation1(allParams))
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
						onChange={handleLocationParams}
					/>
				</InputWrapper>
			</LocalDiv>

			<P>Filters</P>
			<Title>Vehicle equipment</Title>
			<DivWrap>
				<Input
					type='checkbox'
					name='AC'
					value={false}
					onChange={evt => handleParams('AC', evt)}
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
					name='transmission'
					value={false}
					onChange={evt => handleParams('transmission', evt)}
					id='transmission'
				/>
				<Label htmlFor='transmission'>
					<Svg>
						<use href={sprite + '#icon-automatic'} />
					</Svg>
					<span>Automatic</span>
				</Label>
				<Input
					type='checkbox'
					name='kitchen'
					value={false}
					onChange={evt => handleParams('kitchen', evt)}
					id='kitchen'
				/>
				<Label htmlFor='kitchen'>
					<Svg>
						<use href={sprite + '#icon-kitchen'} />
					</Svg>
					<span>Kitchen</span>
				</Label>

				<Input
					type='checkbox'
					name='TV'
					value={false}
					onChange={evt => handleParams('TV', evt)}
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
					name='shower'
					value={false}
					onChange={evt => handleParams('shower', evt)}
					id='shower'
				/>
				<Label htmlFor='shower'>
					<Svg>
						<use href={sprite + '#icon-shower'} />
					</Svg>
					<span>Showers/WC</span>
				</Label>
			</DivWrap>

			<Title>Vehicle type</Title>
			<DivWrap>
				<Input
					type='radio'
					name='form'
					value='van'
					// checked={formData.Form === 'van'}
					onChange={evt => handleRadioParams('form', evt)}
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
					name='form'
					value='fullyIntegrated'
					// checked={formData.Form === 'fullyIntegrated'}
					onChange={evt => handleRadioParams('form', evt)}
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
					name='form'
					value='alcove'
					// checked={formData.Form === 'alcove'}
					onChange={evt => handleRadioParams('form', evt)}
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
