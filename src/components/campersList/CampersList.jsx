import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { ShowMoreButton } from '../showMoreBtn/ShowMoreButton'
// import { CamperDetails } from '../camperDetails/CamperDetails'
import { nanoid } from 'nanoid'

const defaultImg =
	'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342'

export const CampersList = () => {
	const campers = useSelector(campersSelector)

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
							<li key={id}>
								<h2>{name}</h2>
								<img
									src={gallery ? gallery[0] : defaultImg}
									style={{
										width: 290,
										height: 310,
									}}
								/>
								<p>{price}</p>
								<span></span>
								<svg></svg>
								<svg></svg>
								<span>
									{rating}({reviews.length} Reviews)
								</span>
								<p>{location}</p>
								<p>{description}</p>
								<ul>
									<li key={nanoid()}>
										<svg></svg> {entries}
									</li>
								</ul>
								{/* <CamperDetails /> */}
								<ShowMoreButton id={id} />
							</li>
						)
					}
				)}
			</ul>
		)
	)
}
