import { Btn, BtnWrap } from './LoadMoreBtnStyled'

export const LoadMoreBtn = ({ addCampers }) => {
	return (
		<BtnWrap>
			<Btn onClick={addCampers}>Load more</Btn>
		</BtnWrap>
	)
}
