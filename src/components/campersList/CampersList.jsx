import { useState } from 'react'
import { CamperItem } from '../camperItem/CamperItem'
import { LoadMoreBtn } from '../loadMoreBtn/LoadMoreBtn'
import { useSelector } from 'react-redux'

import { ItemModal } from '../modal/ItemModal'
import { useSearchParams } from 'react-router-dom'
import { selectorCampers } from '../../redux/campers/selectors'

export const CampersList = ({ campers }) => {
	const [selectedItemId, setSelectedItemId] = useState(null)
	const [isModalOpen, setModal] = useState(false)
	const [params, setParams] = useSearchParams()

	const page = params.get('page') || 1
	let limit = parseInt(params.get('limit')) || 4

	const allParams = Object.fromEntries(params)

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
