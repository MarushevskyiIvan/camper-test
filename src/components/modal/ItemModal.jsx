import Modal from 'react-modal'
import { CamperDetails } from '../camperDetails/CamperDetails'
import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { Features } from '../features/Features'
import { ModalForm } from '../modalForm/Modalform'
import { Link } from 'react-router-dom'
import { Reviews } from '../reviews/Reviews'
import { useEffect, useState } from 'react'

Modal.setAppElement('#root')

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		height: '720px',
		position: 'relative',
		borderRadius: '20px',
		padding: '40px',
		width: '982px',

		transform: 'translate(-50%, -50%)',
	},
}

export const ItemModal = ({ isOpen, isClose, id }) => {
	const [camper, setCamper] = useState({})
	const [activeTab, setActiveTab] = useState(null)

	const campers = useSelector(campersSelector)

	useEffect(() => {
		const oneCar = campers.find(item => item.id === id)
		setCamper(oneCar)
	}, [campers, id])

	const handleTabChange = tab => {
		setActiveTab(tab)
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
			<CamperDetails camper={camper} />
			<ul>
				<li>
					<Link to='#' onClick={() => handleTabChange('features')}>
						Features
					</Link>
				</li>

				<li>
					<Link to='#' onClick={() => handleTabChange('reviews')}>
						Reviews
					</Link>
				</li>
			</ul>
			{activeTab === 'features' && <Features car={car} />}
			{activeTab === 'reviews' && <Reviews car={car} />}
			<ModalForm />
		</Modal>
	)
}
