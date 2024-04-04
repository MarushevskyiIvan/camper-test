import Modal from 'react-modal'
import { CamperDetails } from '../camperDetails/CamperDetails'
import { Features } from '../features/Features'
import { ModalForm } from '../modalForm/Modalform'

import { Reviews } from '../reviews/Reviews'
import { useState } from 'react'
import {
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
		// overflow: 'hidden',
		overflowX: 'hidden',
		// overflowY: 'hidden',
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
				<CamperDetails id={id} onClose={isClose} />
				<FeatureReviewsFormWrap>
					<div>
						<FeatureReviewsText>
							<li>
								<FeatureReviewsLink
									to='#'
									onClick={() => handleTabChange('features')}
								>
									Features
								</FeatureReviewsLink>
							</li>

							<li>
								<FeatureReviewsLink
									to='#'
									onClick={() => handleTabChange('reviews')}
								>
									Reviews
								</FeatureReviewsLink>
							</li>
						</FeatureReviewsText>

						{activeTab === 'features' && <Features id={id} />}
						{activeTab === 'reviews' && <Reviews id={id} />}
					</div>

					<ModalForm />
				</FeatureReviewsFormWrap>
			</ModalContainer>
		</Modal>
	)
}
