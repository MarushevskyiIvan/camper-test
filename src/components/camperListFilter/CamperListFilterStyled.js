import styled from 'styled-components'

export const P = styled.p`
	margin-bottom: 14px;
`
export const Title = styled.h3`
	margin-bottom: 24px;
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
`

// &:checked + ${Span} ${SvgIcon} {
// 		stroke: ${globalColor.btn};
// 	}
export const DivWrap = styled.div`
	display: flex;
	width: 360px;

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
