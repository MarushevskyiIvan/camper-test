import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { Li, SvgStar, TitleH3, Ul } from './ReviewsStyled'
import sprite from '../../assets/sprite.svg'

export const Reviews = ({ id }) => {
	const [camper, setCamper] = useState({})
	const campers = useSelector(campersSelector)

	useEffect(() => {
		const oneCar = campers.find(item => item.id === id)
		setCamper(oneCar)
	}, [campers, id])

	const { reviews } = camper
	return (
		<Ul>
			{reviews &&
				reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
					return (
						<Li key={nanoid()}>
							<span>A</span>
							<TitleH3>{reviewer_name}</TitleH3>
							<SvgStar>
								<use href={sprite + '#icon-star'} />
							</SvgStar>
							<p>{comment}</p>
						</Li>
					)
				})}
		</Ul>
	)
}
