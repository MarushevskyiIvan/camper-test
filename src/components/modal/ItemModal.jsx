import Modal from 'react-modal'
import { CamperDetails } from '../camperDetails/CamperDetails'
import { useSelector } from 'react-redux'
import { carSelector } from '../../redux/campers/selectors'
import { Features } from '../features/Features'
import { ModalForm } from '../modalForm/Modalform'
import { Link } from 'react-router-dom'
import { Reviews } from '../reviews/Reviews'
import { useState } from 'react'

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

export const ItemModal = ({ isOpen, isClose }) => {
	const car = useSelector(carSelector)

	const [activeTab, setActiveTab] = useState(null)

	const handleTabChange = tab => {
		setActiveTab(tab)
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
			<CamperDetails car={car} />
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

			<ModalForm />
			{activeTab === 'features' && <Features car={car} />}
			{activeTab === 'reviews' && <Reviews car={car} />}
		</Modal>
	)
}
