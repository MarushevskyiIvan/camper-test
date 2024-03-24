import { useState } from 'react'
import { Btn, BtnWrap } from './ShowMoreButton.styled'
import { ItemModal } from '../modal/ItemModal.jsx'
import { useDispatch } from 'react-redux'
import { getOneCar } from '../../redux/campers/operations.js'

export const ShowMoreButton = ({ id }) => {
	const [isModalOpen, setModal] = useState(false)
	const dispatch = useDispatch()

	const toggleModal = () => {
		setModal(prevState => !prevState)
		dispatch(getOneCar(id))
	}

	return (
		<>
			<BtnWrap>
				<Btn onClick={toggleModal}>Show more</Btn>
			</BtnWrap>
			<ItemModal isOpen={isModalOpen} isClose={toggleModal} />
		</>
	)
}
