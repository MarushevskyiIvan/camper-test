import { useEffect, useState } from 'react'
import { CamperItem } from '../camperItem/CamperItem'
import { LoadMoreBtn } from '../loadMoreBtn/LoadMoreBtn'
import { useDispatch } from 'react-redux'
import { getAllCarsInformation } from '../../redux/campers/operations'
import { ItemModal } from '../modal/ItemModal'
import { useParams, useSearchParams } from 'react-router-dom'

export const CampersList = ({ campers }) => {
	// const [page, setPage] = useState(1)
	// const [limit, setLimit] = useState(4)
	const [selectedItemId, setSelectedItemId] = useState(null)
	const [isModalOpen, setModal] = useState(false)

	const [params, setParams] = useSearchParams()

	const dispatch = useDispatch()

	const page = params.get('page') || 1
	let limit = parseInt(params.get('limit')) || 4
	console.log('limit', limit)
	const allParams = Object.fromEntries(params)
	// params.set('page', 1)
	// params.set('limit', 4)
	// const page = params.get('page') ?? 1
	// // const limit = params.get('limit') ?? 4
	// let limit = parseInt(params.get('limit')) || 4

	useEffect(() => {
		dispatch(getAllCarsInformation({ page, limit }))
	}, [dispatch, limit, page])

	const handlePagination = () => {
		// setLimit(prevLimit => prevLimit + 4)
		limit += 4
		setParams({ page, limit })
	}
	const toggleModal = () => {
		setModal(prevState => !prevState)
	}

	const handleShowMoreClick = id => {
		setSelectedItemId(id)
		toggleModal()
	}

	return (
		<>
			<div>
				<ul>
					<CamperItem handleShowMore={handleShowMoreClick} campers={campers} />
				</ul>
				{limit <= campers.length && (
					<LoadMoreBtn addCampers={handlePagination} />
				)}
			</div>
			<ItemModal
				isOpen={isModalOpen}
				isClose={toggleModal}
				id={selectedItemId}
			/>
		</>
	)
}
