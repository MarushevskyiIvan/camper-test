import {} from './CamperDetails'
import sprite from '../../assets/sprite.svg'
import {
	DescripText,
	Img,
	ImgWrap,
	LinkA,
	ModalWrap,
	Name,
	Price,
	PriceWrap,
	RatingLocation,
	RatingLocationWrap,
	Span,
	SvgClose,
	SvgLocation,
	SvgStar,
} from './CamperDetailsStyled'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'

const defaultImg =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjq4Ist4_3GEX01sQ9Kg7Ucxkmg8FbMP7w&usqp=CAU'

export const CamperDetails = ({ id }) => {
	const [camper, setCamper] = useState({})
	const campers = useSelector(campersSelector)

	useEffect(() => {
		const oneCar = campers.find(item => item.id === id)
		setCamper(oneCar)
	}, [campers, id])

	const { name, gallery, price, rating, reviews, location, description } =
		camper

	return (
		<>
			{camper && (
				<ModalWrap>
					<Name>{name}</Name>

					<RatingLocation>
						<RatingLocationWrap>
							<LinkA>
								<Span>
									<SvgStar>
										<use href={sprite + '#icon-star'} />
									</SvgStar>
									<p>
										{rating}({reviews?.length} Reviews)
									</p>
								</Span>
							</LinkA>
						</RatingLocationWrap>

						<RatingLocationWrap>
							<SvgLocation>
								<use href={sprite + '#icon-location'} />
							</SvgLocation>
							<p>{location}</p>
						</RatingLocationWrap>
					</RatingLocation>
					<PriceWrap>
						<Price>
							{'\u20AC'}
							{price}
						</Price>
						<SvgClose>
							<use href={sprite + '#icon-close'} />
						</SvgClose>
					</PriceWrap>
					{gallery && gallery.length > 0 && (
						<ImgWrap>
							<Img src={gallery[0] || defaultImg} />
							<Img src={gallery[1] || defaultImg} />
							<Img src={gallery[2] || defaultImg} />
						</ImgWrap>
					)}

					<DescripText>{description}</DescripText>
				</ModalWrap>
			)}
		</>
	)
}
