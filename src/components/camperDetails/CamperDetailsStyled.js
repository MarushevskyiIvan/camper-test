import styled from 'styled-components'

export const LinkA = styled.a`
	text-decoration: underline;
`

export const Wrap = styled.div`
	position: relative;
`

export const ButtonClose = styled.button`
	width: 32px;
	position: absolute;
	top: 0px;
	right: 0px;
	background: transparent;
	border: none;
`

export const SvgClose = styled.svg`
	height: 32px;
	width: 32px;
	fill: transparent;
	stroke: #101828;
`
export const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin-bottom: 24px;
`

export const Name = styled.h3`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 8px;
`
export const Price = styled.p`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	margin-bottom: 24px;
`
export const Img = styled.img`
	border-radius: 10px;
	width: 290px;
	height: 310px;
	object-fit: cover;
`
export const PriceWrap = styled.div`
	/* display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 24px; */
`

export const TitleWrap = styled.div`
	/* display: flex;
	justify-content: space-between;
	margin-bottom: 8px; */
`
export const SvgStar = styled.svg`
	height: 16px;
	width: 16px;
`

export const SvgLocation = styled.svg`
	width: 16px;
	height: 16px;
	stroke-width: 1.3px;
	fill: transparent;
	stroke: #101828;
`

export const Span = styled.span`
	display: flex;
	align-items: center;
`

export const RatingLocation = styled.div`
	height: 24px;
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
`

export const RatingLocationWrap = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`
export const DescripText = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	width: 902px;
	margin-bottom: 44px;
`
