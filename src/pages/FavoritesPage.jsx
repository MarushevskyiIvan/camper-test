import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import { selectError, selectIsLoading } from '../redux/campers/selectors'
import { getAllCarsFavorites } from '../redux/operations'
import { Loader } from '../components/loader/Loader'
import { favoritesSelector } from '../redux/favorites/favoritesSelectors'
import { useSearchParams } from 'react-router-dom'

const storageKey = 'persist:favorites'

const FavoritesPage = () => {
	// const [favorites, setFavorites] = useState([])
	const currentParams = new URLSearchParams(window.location.search)

	// const params = useSearchParams()
	// console.log('params', currentParams.get())
	const [params, setParams] = useSearchParams()
	const kitchen = params.get('kitchen') ?? ''
	console.log('kitchen', kitchen)

	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	const { favorites } = useSelector(favoritesSelector)

	useEffect(() => {
		// setFavorites(favorite.favorites)

		const favoritesStorage = JSON.parse(localStorage.getItem(storageKey))

		favoritesStorage.map(id => {
			dispatch(getAllCarsFavorites(id))
		})
	}, [dispatch])

	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					{isLoading && !error && <Loader />}
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
