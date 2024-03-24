import { nanoid } from 'nanoid'

export const Reviews = ({ car }) => {
	const { reviews } = car
	console.log('reviews', reviews)
	return (
		<ul>
			{reviews &&
				reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
					return (
						<li key={nanoid()}>
							<span>A</span>
							<h2>{reviewer_name}</h2>
							<p>{comment}</p>
						</li>
					)
				})}
		</ul>
	)
}
