import styled from 'styled-components'

export const Li = styled.li`
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 20px;
	padding: 24px;
	width: 888px;
	height: 358px;
	display: flex;
	gap: 24px;
	margin-bottom: 32px;
`
export const DescriptionWrap = styled.div`
	width: 526px;
	height: 310px;
`

export const Img = styled.img`
	border-radius: 10px;
	width: 290px;
	height: 310px;
	object-fit: cover;
`

export const Name = styled.h3`
	/* font-family: var(--font-family); */
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	/* color: var(--main); */
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`
export const Price = styled.p`
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	/* color: var(--main); */
`
export const PriceWrap = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`

export const TitleWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
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
	margin-bottom: 24px;
`

export const RatingLocationWrap = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const DescripText = styled.p`
	/* color: var(--text); */
	width: 525px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 24px;
`

export const OptionsUl = styled.ul`
	width: 526px;
	max-height: 96px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex-direction: row;
	overflow: hidden;
	margin-bottom: 24px;
`
export const OptionsLi = styled.li`
	border-radius: 100px;
	padding: 12px 18px;
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;

	/* background: var(--block-features); */
	background: #f2f4f7;
`
export const OptionsSvg = styled.svg`
	width: 20px;
	height: 20px;
`
