// import { useSelector } from 'react-redux'
// import { campersSelector } from '../../redux/campers/selectors'
import { useState } from 'react'
import { CamperItem } from '../camperItem/CamperItem'
import { LoadMoreBtn } from '../loadMoreBtn/LoadMoreBtn'

export const CampersList = ({ campers }) => {
	const [paginationCampers, setPaginationCampers] = useState(4)

	const sliceCampers = campers.slice(0, paginationCampers)

	const handlePagination = () => {
		setPaginationCampers(paginationCampers + 4)
	}
	return (
		<>
			<ul>
				<CamperItem campers={sliceCampers} />
				<li>
					{paginationCampers < campers.length && (
						<LoadMoreBtn addCampers={handlePagination} />
					)}
				</li>
			</ul>
		</>
	)
}
