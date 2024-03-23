import { useEffect, useState } from 'react'

import {
	campersSelector,
	selectError,
	selectIsLoading,
} from '../redux/campers/selectors'

import { getAllCarsInformation } from '../redux/campers/operations'
import { useDispatch, useSelector } from 'react-redux'
import { CampersList } from '../components/campersList/CampersList'
import { ItemModal } from '../components/modal/Modal'

// import { Loader } from '../components/loader/Loader.jsx'
// import { Filter } from '../components/filter/FormFilter.jsx'
// import { ContactForm } from '../components/contactForm/ContactForm.jsx'
// import { ContactsList } from '../components/contactsList/ContactsList.jsx'
// import { ContactsTitle, TextError, Wrapper } from '../components/App.styled.js'

const CatalogPage = () => {
	const dispatch = useDispatch()
	// const isLoading = useSelector(selectIsLoading)
	// const error = useSelector(selectError)

	useEffect(() => {
		dispatch(getAllCarsInformation())
	}, [dispatch])

	const [isModalOpen, setModal] = useState(false)

	const campers = useSelector(campersSelector)
	console.log(campers)

	const toggleModal = () => {
		setModal(prevState => !prevState)
	}

	return (
		<div>
			<CampersList />

			<ItemModal
				isOpen={isModalOpen}
				isClose={toggleModal}
				image={campers.gallery}
			/>
		</div>
	)
}

export default CatalogPage
