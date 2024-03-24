import { useEffect } from 'react'

import // selectError,
// selectIsLoading,
'../redux/campers/selectors'

import { getAllCarsInformation } from '../redux/campers/operations'
import { useDispatch } from 'react-redux'
import { CampersList } from '../components/campersList/CampersList'
import { LocationForm } from '../components/locationsForm/LocationForm'

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

	return (
		<div>
			<LocationForm />
			<CampersList />
		</div>
	)
}

export default CatalogPage
