import styled from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const OptionsUl = styled.ul`
	width: 430px;

	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex-direction: row;
	margin-bottom: 44px;
`
export const TitleH3 = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2%;

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

export const OptionsLi = styled.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;
	background: ${globalColor.colorLightGrey};

	& span {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.25;
		text-align: center;
	}
`
export const OptionsSvg = styled.svg`
	width: 20px;
	height: 20px;
`

export const Ul = styled.ul`
	width: 430px;
`

export const Li = styled.li`
	display: flex;
	justify-content: space-between;
	margin-bottom: 14px;

	& span {
		font-weight: 500;
		font-size: 18px;
		line-height: 1.33;
		text-align: center;
	}
`
