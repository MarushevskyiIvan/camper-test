import Modal from 'react-modal'
import { CamperDetails } from '../camperDetails/CamperDetails'
import { Features } from '../features/Features'
import { ModalForm } from '../modalForm/Modalform'
import { Link } from 'react-router-dom'
import { Reviews } from '../reviews/Reviews'
import { useState } from 'react'
import { ModalContainer, ModalWrap } from '../camperDetails/CamperDetailsStyled'

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
		// overflow: 'hidden',
		padding: '40px',
		width: '982px',

		transform: 'translate(-50%, -50%)',
	},
}

export const ItemModal = ({ isOpen, isClose, id }) => {
	const [activeTab, setActiveTab] = useState(null)

	const handleTabChange = tab => {
		setActiveTab(tab)
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
			<ModalContainer>
				<CamperDetails id={id} />
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
			</ModalContainer>
		</Modal>
	)
}
