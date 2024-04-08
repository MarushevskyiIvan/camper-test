import Modal from 'react-modal'
import { CamperDetails } from '../camperDetails/CamperDetails'
import { Features } from '../features/Features'
import { ModalForm } from '../modalForm/Modalform'

import { Reviews } from '../reviews/Reviews'
import { useState } from 'react'
import {
	DescrFormWrap,
	FeatureReviewsFormWrap,
	FeatureReviewsLink,
	FeatureReviewsText,
	ModalContainer,
} from './ItemModalStyled'

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
		overflow: 'hidden',
		overflowX: 'hidden',
		padding: '40px',
		width: '982px',

		transform: 'translate(-50%, -50%)',
	},
}

export const ItemModal = ({ isOpen, isClose, id }) => {
	const [activeTab, setActiveTab] = useState('features')

	const handleTabChange = tab => {
		setActiveTab(tab)
	}

	const openModal = () => {
		document.body.classList.add('modal-open')
	}

	const closeModal = () => {
		document.body.classList.remove('modal-open')
		isClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			onAfterOpen={openModal}
			style={customStyles}
		>
			<ModalContainer>
				<CamperDetails id={id} onClose={closeModal} />
				<FeatureReviewsFormWrap>
					<FeatureReviewsText>
						<li>
							<FeatureReviewsLink
								to='#'
								onClick={() => handleTabChange('features')}
								className={activeTab === 'features' ? 'active' : ''}
							>
								Features
							</FeatureReviewsLink>
						</li>

						<li>
							<FeatureReviewsLink
								to='#'
								onClick={() => handleTabChange('reviews')}
								className={activeTab === 'reviews' ? 'active' : ''}
							>
								Reviews
							</FeatureReviewsLink>
						</li>
					</FeatureReviewsText>
					<DescrFormWrap>
						{activeTab === 'features' && <Features id={id} />}
						{activeTab === 'reviews' && <Reviews id={id} />}

						<ModalForm />
					</DescrFormWrap>
				</FeatureReviewsFormWrap>
			</ModalContainer>
		</Modal>
	)
}
