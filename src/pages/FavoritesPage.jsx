import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import {
	campersSelector,
	favoritesSelector,
	selectError,
	selectIsLoading,
} from '../redux/campers/selectors'
import { getAllCarsInformation } from '../redux/campers/operations'
import { Loader } from '../components/loader/Loader'

const FavoritesPage = () => {
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()

	const campers = useSelector(campersSelector)
	const favoritesId = useSelector(favoritesSelector)

	const favorites = campers.filter(({ id }) =>
		favoritesId.favorites.includes(id)
	)

	useEffect(() => {
		dispatch(getAllCarsInformation())
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
