import { CampersList } from '../components/campersList/CampersList'

import { CamperListFilter } from '../components/camperListFilter/CamperListFilter'
import { useSelector } from 'react-redux'
import {
	selectError,
	selectIsLoading,
	selectorCampers,
} from '../redux/campers/selectors'
import { Loader } from '../components/loader/Loader'

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
					{isLoading && !error && <Loader />}
					<CamperListFilter />
				</div>
			</div>
			{error ? (
				<p>Oоps you have a problem ...</p>
			) : (
				<CampersList campers={campers} />
			)}
		</>
	)
}

export default CatalogPage
