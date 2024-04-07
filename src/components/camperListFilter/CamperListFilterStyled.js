import styled from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const P = styled.p`
	margin-bottom: 14px;
`
export const Title = styled.h3`
	margin-bottom: 48px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -24px;
		width: 100%;
		height: 1px;
		background-color: rgba(16, 24, 40, 0.1);
	}
`

export const Svg = styled.svg`
	width: 32px;
	height: 32px;
	stroke: #101828;
	fill: transparent;
`

export const Label = styled.label`
	display: flex;

	align-items: center;
	flex-direction: column;
	gap: 8px;
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 10px;
	padding: 17px 12px;
	width: 112px;
	height: 95px;
	cursor: pointer;

	&&:hover {
		border: 1px solid #e44848;
	}
	&&:focus {
		border: 1px solid #e44848;
	}

	& span {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.25;
		text-align: center;
	}
`

export const Input = styled.input`
	opacity: 0;
	display: none;

	&:checked + ${Label} {
		border-color: ${globalColor.colorRed};
	}
`

export const DivWrap = styled.div`
	display: flex;
	width: 360px;
	margin-bottom: 32px;
	flex-wrap: wrap;
	gap: 10px;
`

export const InputPadding = styled.input`
	padding-top: 8px;
	padding-bottom: 8px;
`

export const SvgType = styled.svg`
	width: 40px;
	height: 28px;
	stroke: #101828;
	fill: transparent;
`

export const LabelType = styled.label`
	padding-top: 9px;
	padding-bottom: 9px;
`

export const FilterBtn = styled.button`
	border-radius: 200px;
	border: none;
	padding: 16px 40px;

	/* background: var(--button); */
	background: #e44848;
	/* font-family: var(--font-family); */
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.01em;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 64px;
	&&:hover {
		background-color: #d84343;
	}
	&&:focus {
		background-color: #d84343;
	}
`

//

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 360px;
	margin-top: 8px;
`
export const LocalDiv = styled.div`
	margin-bottom: 32px;
`
export const InputDiv = styled.div`
	border-radius: 10px;
	padding: 18px 285px 18px 18px;
	width: 360px;
	height: 56px;
`

export const InputLocal = styled.input`
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
export const SvgLocal = styled.svg`
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
