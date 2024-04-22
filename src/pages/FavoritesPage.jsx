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

const FavoritesPage = () => {
	const [favorites, setFavorites] = useState([])
	// const isLoading = useSelector(selectIsLoading)
	// const error = useSelector(selectError)
	const dispatch = useDispatch()

	// const campers = useSelector(campersSelector)
	const favoritesId = useSelector(favoritesSelector)
	// console.log('favoritesId', favoritesId.favorites)

	// const favorites = campers.filter(({ id }) =>
	// 	favoritesId.favorites.includes(id)
	// )

	useEffect(() => {
		favoritesId.favorites.map(id => dispatch(getAllCarsFavorites(id)))
	}, [dispatch])

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
