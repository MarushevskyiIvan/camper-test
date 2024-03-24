const defaultImg =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjq4Ist4_3GEX01sQ9Kg7Ucxkmg8FbMP7w&usqp=CAU'

const imgStyle = { width: 290, height: 310 }

export const CamperDetails = ({ car }) => {
	const { name, gallery, price, rating, reviews, location, description } = car

	return (
		car && (
			<>
				<h2>{name}</h2>
				{gallery && gallery.length > 0 && (
					<>
						<img src={gallery[0] || defaultImg} style={imgStyle} />
						<img src={gallery[1] || defaultImg} style={imgStyle} />
						<img src={gallery[2] || defaultImg} style={imgStyle} />
					</>
				)}

				<p>{price}</p>
				<span></span>
				<svg></svg>
				<svg></svg>
				<span>
					{rating} ({reviews?.length} Reviews)
				</span>
				{/* <p>{location}</p> */}
				<p>{description}</p>
			</>
		)
	)
}
