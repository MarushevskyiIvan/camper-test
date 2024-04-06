import { useSelector } from 'react-redux'
import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import { LocationForm } from '../components/locationsForm/LocationForm'
import { campersSelector, favoritesSelector } from '../redux/campers/selectors'
import { useEffect, useState } from 'react'

const FavoritesPage = () => {
	// const [favorites, setFavorites] = useState([])

	// useEffect(() => {
	// 	const result = async () => {

	// 		setFavorites(favorites)
	// 	}
	// 	result()
	// }, [])

	const campers = useSelector(campersSelector)
	const favoritesId = useSelector(favoritesSelector)

	const favorites = campers.filter(({ id }) =>
		favoritesId.favorites.includes(id)
	)

	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					<LocationForm />
					<CamperListFilter />
				</div>
			</div>
			{favorites && favorites.length > 0 ? (
				<CampersList campers={favorites} />
			) : (
				<p> You not have favorites campers</p>
			)}
		</>
	)
}

export default FavoritesPage
