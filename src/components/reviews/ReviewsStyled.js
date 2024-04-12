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
	font-size: 18px;
	line-height: 1.33;
	margin-bottom: 4px;
`

export const NameSpan = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;

	height: 60px;
	width: 60px;
	background: ${globalColor.colorLightGrey};

	color: ${globalColor.colorRed};

	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
`
export const NameDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 16px;
`

export const SvgStar = styled.svg`
	height: 16px;
	width: 16px;
	display: inline-block;
`

export const OptionsLi = styled.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;
	background: ${globalColor.colorLightGrey};
`
export const OptionsSvg = styled.svg`
	width: 20px;
	height: 20px;
`

export const Ul = styled.ul`
	width: 430px;
	height: 286px;
`

export const Li = styled.li`
	width: 430px;
	font-size: 16px;
	line-height: 1.5;

	margin-bottom: 24px;
`
