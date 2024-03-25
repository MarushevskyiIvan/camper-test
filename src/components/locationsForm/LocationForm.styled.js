import styled from 'styled-components'

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 360px;
	margin-top: 8px;
`
export const LocalForm = styled.form`
	margin-bottom: 32px;
`
export const InputDiv = styled.div`
	border-radius: 10px;
	padding: 18px 285px 18px 18px;
	width: 360px;
	height: 56px;
`

export const Input = styled.input`
	border-radius: 10px;
	border: none;
	padding: 18px 218px 18px 18px;
	width: 360px;
	height: 56px;
	background: #f7f7f7;
	padding-left: 44px;
	outline: transparent;

	&&:focus {
		border: 0.5px solid #e44848;
	}
`
export const Svg = styled.svg`
	position: absolute;
	left: 18px;
	top: 50%;
	transform: translateY(-50%);
	width: 18px;
	height: 20px;
	stroke-width: 1.3px;
	fill: transparent;
	stroke: #101828;
`
