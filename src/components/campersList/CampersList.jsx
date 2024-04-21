import { useEffect, useState } from 'react'
import { CamperItem } from '../camperItem/CamperItem'
import { LoadMoreBtn } from '../loadMoreBtn/LoadMoreBtn'
import { useDispatch } from 'react-redux'
import { getAllCarsInformation } from '../../redux/campers/operations'
import { ItemModal } from '../modal/ItemModal'
import { useSearchParams } from 'react-router-dom'

export const CampersList = ({ campers }) => {
	const [selectedItemId, setSelectedItemId] = useState(null)
	const [isModalOpen, setModal] = useState(false)
	const [params, setParams] = useSearchParams()

	const dispatch = useDispatch()

	const page = params.get('page') || 1
	let limit = parseInt(params.get('limit')) || 4

	const allParams = Object.fromEntries(params)
	console.log('allParams', allParams)

	useEffect(() => {
		dispatch(getAllCarsInformation())
	}, [dispatch, limit, page])

	const handlePagination = () => {
		limit += 4
		setParams({ ...allParams, page, limit })
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
				{limit === campers.length && (
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
