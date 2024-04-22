import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { CampersList } from '../components/campersList/CampersList'
import {
	campersSelector,
	selectError,
	selectIsLoading,
} from '../redux/campers/selectors'
import { Loader } from '../components/loader/Loader'
import { getAllCarsInformation } from '../redux/operations'

const CatalogPage = () => {
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	const [params, setParams] = useSearchParams()

	const campers = useSelector(campersSelector)

	const dispatch = useDispatch()

	const page = params.get('page') || 1
	let limit = parseInt(params.get('limit')) || 4

	useEffect(() => {
		dispatch(getAllCarsInformation())
	}, [dispatch, limit, page])

	return (
		<>
			<div style={{ height: '637px', width: '360px' }}>
				<div style={{ position: 'fixed' }}>
					{/* {isLoading && !error && <Loader />} */}
					<CamperListFilter />
				</div>
			</div>
			{error ? (
				<p style={{ margin: 'auto' }}>This Campers is note found</p>
			) : (
				<CampersList campers={campers} />
			)}
		</>
	)
}

export default CatalogPage
