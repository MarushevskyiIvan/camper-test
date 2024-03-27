import { useEffect, useState } from 'react'
import { CamperItem } from '../camperItem/CamperItem'
import { LoadMoreBtn } from '../loadMoreBtn/LoadMoreBtn'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarsInformation } from '../../redux/campers/operations'
import { campersSelector } from '../../redux/campers/selectors'

export const CampersList = () => {
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(4)

	const dispatch = useDispatch()
	const campers = useSelector(campersSelector)

	useEffect(() => {
		dispatch(getAllCarsInformation({ page, limit }))
	}, [dispatch, limit, page])

	const handlePagination = () => {
		setLimit(prevLimit => prevLimit + 4)
	}

	return (
		<>
			<ul>
				<CamperItem campers={campers} />
				<li>
					{limit <= campers.length && (
						<LoadMoreBtn addCampers={handlePagination} />
					)}
				</li>
			</ul>
		</>
	)
}
