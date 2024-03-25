import styled from 'styled-components'

export const Btn = styled.button`
	border: 1px solid rgba(71, 84, 103, 0.2);
	border-radius: 200px;
	padding: 16px 32px;
	height: 56px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		border: 1px solid #ffc531;
	}
	&:focus {
		border: 1px solid #ffc531;
	}
`
export const BtnWrap = styled.div`
	margin-top: 24px;
	margin-bottom: 24px;

	display: flex;
	align-items: center;
	justify-content: center;
`
