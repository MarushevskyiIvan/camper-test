import { ShowMoreButton } from '../showMoreBtn/ShowMoreButton'
import sprite from '../../assets/sprite.svg'
import {
	DescripText,
	DescriptionWrap,
	Img,
	Li,
	Name,
	OptionsLi,
	OptionsSvg,
	OptionsUl,
	Price,
	PriceWrap,
	RatingLocation,
	RatingLocationWrap,
	Span,
	SvgLocation,
	SvgStar,
	TitleWrap,
} from './CamperItemstyled'
import { FavoriteButton } from '../favoriteButton/FavoriteButton'

const defaultImg =
	'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342'

export const CamperItem = ({ campers }) => {
	return (
		<>
			{campers &&
				campers.map(
					({
						id,
						adults,
						description,
						gallery,
						location,
						name,
						price,
						rating,
						reviews,
						details,
						engine,
						transmission,
					}) => {
						const { airConditioner, kitchen, beds } = details

						return (
							<Li key={id}>
								<Img src={gallery ? gallery[0] : defaultImg} />

								<DescriptionWrap>
									<TitleWrap>
										<Name>{name}</Name>
										<PriceWrap>
											<Price>
												{'\u20AC'}
												{price.toFixed(2)}
											</Price>
											<FavoriteButton id={id} />
										</PriceWrap>
									</TitleWrap>

									<RatingLocation>
										<RatingLocationWrap>
											<Span>
												<SvgStar>
													<use href={sprite + '#icon-star'} />
												</SvgStar>
												<p>
													{rating}({reviews.length} Reviews)
												</p>
											</Span>
										</RatingLocationWrap>

										<RatingLocationWrap>
											<SvgLocation>
												<use href={sprite + '#icon-location'} />
											</SvgLocation>
											<p>{location}</p>
										</RatingLocationWrap>
									</RatingLocation>

									<DescripText>{description}</DescripText>

									<OptionsUl>
										<OptionsLi>
											<OptionsSvg>
												<use href={sprite + '#icon-adults'} />
											</OptionsSvg>
											<span>{adults} adults</span>
										</OptionsLi>
										<OptionsLi>
											<OptionsSvg>
												<use
													href={sprite + '#icon-automatic'}
													style={{ stroke: '#101828', fill: 'transparent' }}
												/>
											</OptionsSvg>
											<span>{transmission}</span>
										</OptionsLi>
										<OptionsLi>
											<OptionsSvg>
												<use href={sprite + '#icon-petrol'} />
											</OptionsSvg>
											<span>{engine}</span>
										</OptionsLi>
										{kitchen >= 1 && (
											<OptionsLi>
												<OptionsSvg>
													<use
														href={sprite + '#icon-kitchen'}
														style={{ stroke: '#101828', fill: 'transparent' }}
													/>
												</OptionsSvg>
												<span>Kitchen</span>
											</OptionsLi>
										)}
										<OptionsLi>
											<OptionsSvg>
												<use
													href={sprite + '#icon-beds'}
													style={{ stroke: '#101828', fill: 'transparent' }}
												/>
											</OptionsSvg>
											<span>{beds} beds</span>
										</OptionsLi>
										{airConditioner >= 1 && (
											<OptionsLi>
												<OptionsSvg>
													<use href={sprite + '#icon-ac'} />
												</OptionsSvg>
												<span>AC</span>
											</OptionsLi>
										)}
									</OptionsUl>

									<ShowMoreButton id={id} />
								</DescriptionWrap>
							</Li>
						)
					}
				)}
		</>
	)
}
