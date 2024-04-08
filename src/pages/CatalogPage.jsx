// import { useEffect } from 'react'

import // selectError,
// selectIsLoading,
'../redux/campers/selectors'

// import { getAllCarsInformation } from '../redux/campers/operations'
// import { useDispatch, useSelector } from 'react-redux'
import { CampersList } from '../components/campersList/CampersList'
// import { LocationForm } from '../components/locationsForm/LocationForm'
import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { useSelector } from 'react-redux'
import {
	selectError,
	selectIsLoading,
	selectorCampers,
} from '../redux/campers/selectors'
import { Loader } from '../components/loader/Loader'

// import { Loader } from '../components/loader/Loader.jsx'
// import { Filter } from '../components/filter/FormFilter.jsx'
// import { ContactForm } from '../components/contactForm/ContactForm.jsx'
// import { ContactsList } from '../components/contactsList/ContactsList.jsx'
// import { ContactsTitle, TextError, Wrapper } from '../components/App.styled.js'

const CatalogPage = () => {
	const campers = useSelector(selectorCampers)
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)

	// const dispatch = useDispatch()
	// const isLoading = useSelector(selectIsLoading)
	// const error = useSelector(selectError)

	// useEffect(() => {
	// 	dispatch(getAllCarsInformation())
	// }, [dispatch])
	// const campers = useSelector(campersSelector)

	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					{/* <LocationForm /> */}
					{isLoading && !error && <Loader />}
					<CamperListFilter />
				</div>
			</div>
			{error ? (
				<TextError>Oоps you have a problem ...</TextError>
			) : (
				<CampersList campers={campers} />
			)}
		</>
	)
}

export default CatalogPage
