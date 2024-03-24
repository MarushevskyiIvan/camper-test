import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { ShowMoreButton } from '../showMoreBtn/ShowMoreButton'
import { nanoid } from 'nanoid'
import {
	DescripText,
	DescriptionWrap,
	Img,
	Li,
	Name,
	OptionsLi,
	OptionsUl,
	Price,
	RatingLocation,
	TitleWrap,
} from './CampersListStyled'

const defaultImg =
	'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342'

export const CampersList = () => {
	const campers = useSelector(campersSelector)

	const euroSymbol = '\u20AC'

	return (
		campers && (
			<ul>
				{campers.map(
					({
						id,
						description,
						gallery,
						location,
						name,
						price,
						rating,
						reviews,
						details,
					}) => {
						const entries = Object.entries(details)

						return (
							<Li key={id}>
								<Img
									src={gallery ? gallery[0] : defaultImg}
									style={{
										width: 290,
										height: 310,
									}}
								/>
								<DescriptionWrap>
									<TitleWrap>
										<Name>{name}</Name>
										<Price>
											{euroSymbol}
											{price}
										</Price>

										{/* <button></button> */}
									</TitleWrap>
									<RatingLocation>
										<span>
											{/* <svg></svg> */}
											{rating}({reviews.length} Reviews)
										</span>
										<p>{location}</p>
									</RatingLocation>

									<DescripText>{description}</DescripText>
									<OptionsUl>
										{entries &&
											entries.map(([key, value]) => {
												return (
													<OptionsLi key={nanoid()}>
														{/* <svg></svg> */}
														{value >= 2 && <span>{value} </span>}
														<span>{key}</span>
													</OptionsLi>
												)
											})}
									</OptionsUl>
									<ShowMoreButton id={id} />
								</DescriptionWrap>
							</Li>
						)
					}
				)}
			</ul>
		)
	)
}
