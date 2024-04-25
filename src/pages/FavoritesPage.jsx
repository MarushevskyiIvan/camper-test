import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'

import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import {
	campersSelector,
	// selectError,
	// selectIsLoading,
} from '../redux/campers/selectors'
import { getAllCarsFavorites, getAllCarsInformation } from '../redux/operations'
import { Loader } from '../components/loader/Loader'
import { favoritesSelector } from '../redux/favorites/favoritesSelectors'

const storageKey = 'persist:favorites'

const FavoritesPage = () => {
	const [favorites, setFavorites] = useState([])
	// const isLoading = useSelector(selectIsLoading)
	// const error = useSelector(selectError)
	// const dispatch = useDispatch()
	const favorite = useSelector(favoritesSelector)
	// const campers = useSelector(campersSelector)
	console.log('favorites', favorites)
	// console.log('favoritesId', favorites)

	// const favorites = campers.filter(({ id }) =>
	// 	favoritesId.favorites.includes(id)
	// )

	useEffect(() => {
		setFavorites(favorite.favorites)
		// const favoritesStorage = JSON.parse(localStorage.getItem(storageKey))
		// console.log('object', favoritesStorage)
		// favoritesStorage.map(id => {
		// 	dispatch(getAllCarsFavorites(id))
		// })
		// const uniqueIds = Array.from(new Set(favoritesStorage))
		// console.log('uniqueIds', uniqueIds)
		// uniqueIds.forEach(id => dispatch(getAllCarsFavorites(id)))
	}, [favorite])

	// const { favorites } = useSelector(favoritesSelector)
	// console.log('favorites', favorites)
	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					{/* {isLoading && !error && <Loader />} */}
					<CamperListFilter />
				</div>
			</div>
			{favorites && favorites.length > 0 ? (
				<CampersList campers={favorites} />
			) : (
				<p style={{ margin: 'auto' }}> You not have favorites campers</p>
			)}
		</>
	)
}

export default FavoritesPage
