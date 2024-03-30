import { useSelector } from 'react-redux'
import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import { LocationForm } from '../components/locationsForm/LocationForm'
import { campersSelector, favoritesSelector } from '../redux/campers/selectors'

const FavoritesPage = () => {
	const campers = useSelector(campersSelector)

	const { favorites } = useSelector(favoritesSelector)
	console.log('favorites', favorites)

	const as = campers.filter(({ id }) => favorites.includes(id))

	console.log('as', as)

	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					<LocationForm />
					<CamperListFilter />
				</div>
			</div>

			<CampersList campers={as} />
		</>
	)
}

export default FavoritesPage
