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
	Wrap,
} from './FeaturesStyled'
import sprite from '../../assets/sprite.svg'

export const Features = ({ id }) => {
	const [camper, setCamper] = useState({})
	const campers = useSelector(campersSelector)

	useEffect(() => {
		const oneCar = campers.find(item => item.id === id)
		setCamper(oneCar)
	}, [campers, id])
	const { details, form, length, width, height, tank, consumption } = camper

	return (
		<Wrap>
			<OptionsUl>
				{details &&
					Object.entries(details).map(([key, value]) => (
						<OptionsLi key={key}>
							<OptionsSvg>
								<use
									href={sprite + '#icon-kitchen'}
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
		</Wrap>
	)
}
