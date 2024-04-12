import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { Li, NameDiv, NameSpan, SvgStar, TitleH3, Ul } from './ReviewsStyled'
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
				reviews.map(({ reviewer_name, comment, reviewer_rating }) => {
					const [firstWord] = reviewer_name

					return (
						<Li key={nanoid()}>
							<NameDiv>
								<NameSpan>{firstWord}</NameSpan>
								<div>
									<TitleH3>{reviewer_name}</TitleH3>

									{Array.from({ length: 5 }, (_, index) => (
										<SvgStar key={nanoid()}>
											<use
												href={sprite + '#icon-star'}
												style={{ fill: 'red' }}
											/>
										</SvgStar>
									))}
								</div>
							</NameDiv>

							<p>{comment}</p>
						</Li>
					)
				})}
		</Ul>
	)
}
