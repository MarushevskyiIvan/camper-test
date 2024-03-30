import { useSelector } from 'react-redux'
import { Btn, BtnWrap } from './LoadMoreBtnStyled'

import { favoritesSelector } from '../../redux/campers/selectors'

export const LoadMoreBtn = ({ addCampers }) => {
	const favorite = useSelector(favoritesSelector)
	console.log(favorite)
	return (
		<BtnWrap>
			<Btn onClick={addCampers}>Load more</Btn>
		</BtnWrap>
	)
}
