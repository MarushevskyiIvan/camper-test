import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import {
	OptionsLi,
	OptionsUl,
	OptionsSvg,
	Li,
	Ul,
	TitleH3,
} from './FeaturesStyled'
import sprite from '../../assets/sprite.svg'
import { nanoid } from 'nanoid'

export const Features = ({ id }) => {
	const [camper, setCamper] = useState({})
	const campers = useSelector(campersSelector)

	useEffect(() => {
		const oneCar = campers.find(item => item.id === id)
		setCamper(oneCar)
	}, [campers, id])

	const { details, form, length, width, height, tank, consumption } = camper

	const svgMap = {
		kitchen: 'icon-kitchen',
		bathroom: 'icon-toilet',
		microwave: 'icon-microwave',
		water: 'icon-water',
		gas: 'icon-gas',
		freezer: 'icon-freezer',
		toilet: 'icon-toilet',
		hob: 'icon-hob',
		CD: 'icon-cd',
		airConditioner: 'icon-air-conditioner',
		shower: 'icon-shower',
		TV: 'icon-tv',
		beds: 'icon-beds',
		automatic: 'icon-automatic',
		AC: 'icon-ac',
		alcove: 'icon-alcove',
		radio: 'icon-radio',
	}

	return (
		<div>
			<OptionsUl>
				{details &&
					Object.entries(details).map(([key, value]) => (
						<OptionsLi key={nanoid()}>
							<OptionsSvg>
								<use
									href={`${sprite}#${svgMap[key]}`}
									style={{ stroke: '#101828', fill: 'transparent' }}
								/>
							</OptionsSvg>
							<span>
								{key}: {value}
							</span>
						</OptionsLi>
					))}
			</OptionsUl>

			<Ul>
				<li>
					<TitleH3>Vehicle details</TitleH3>
				</li>
				<Li>
					<span>Form</span>
					<span>{form}</span>
				</Li>
				<Li>
					<span>Length</span>
					<span>{length}</span>
				</Li>
				<Li>
					<span> Width</span>
					<span>{width}</span>
				</Li>
				<Li>
					<span>Height</span>
					<span> {height}</span>
				</Li>
				<Li>
					<span>Tank</span>
					<span>{tank}</span>
				</Li>
				<Li>
					<span> Consumption</span>
					<span> {consumption}</span>
				</Li>
			</Ul>
		</div>
	)
}
