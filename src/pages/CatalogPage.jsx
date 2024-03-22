import { useEffect } from 'react'
import {
	useDispatch,
	//  useSelector
} from 'react-redux'
// import { selectError, selectIsLoading } from '../redux/cars/selectors'

import { getAllCarsInformation } from '../redux/cars/operations'

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
			<h1>Cars bee beee dzhin dzhin </h1>
		</div>
	)
}

export default CatalogPage
