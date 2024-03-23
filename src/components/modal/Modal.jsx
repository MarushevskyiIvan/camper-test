import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import { carSelector } from '../../redux/campers/selectors'

Modal.setAppElement('#root')

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		height: '720px',

		padding: '0',

		transform: 'translate(-50%, -50%)',
	},
}

const imgStyle = { width: 290, height: 310 }

// const defaultImg =
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjq4Ist4_3GEX01sQ9Kg7Ucxkmg8FbMP7w&usqp=CAU'

export const ItemModal = ({ isOpen, isClose }) => {
	const car = useSelector(carSelector)

	return (
		<Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
			{car && (
				<>
					<h2>{car.name}</h2>

					<img style={imgStyle} src={car.gallery[0]} />
					<img style={imgStyle} src={car.gallery[1]} />
					<img style={imgStyle} src={car.gallery[2]} />
					<p>{car.price}</p>
					<span></span>
					<svg></svg>
					<svg></svg>
					<span>
						{car.rating} ({car.reviews?.length} Reviews)
					</span>
					<p>{car.location}</p>
					<p>{car.description}</p>
				</>
			)}
		</Modal>
	)
}
