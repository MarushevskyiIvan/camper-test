import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ModalContainer = styled.div`
	/* Стилі для модального вікна */
	/* Додайте інші стилі за потреби */

	/* Стилі для скролбара */
	overflow-x: auto; /* Забезпечте прокрутку по вертикалі */
	scrollbar-width: thin; /* Ширина скролбара (може бути thin, auto або none) */
	scrollbar-color: red transparent; /* Колір скролбара та його фон */
	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 50px;
		margin: 25px 0;
		background-color: red;
	}
`

export const ModalWrap = styled.div`
	/* overflow-y: auto;
	/* Стилізація скролбару */
	&::-webkit-scrollbar {
		width: 100px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: red; /* Колір заповнювача скролбару */
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #990000; /* Колір заповнювача скролбару при наведенні */
	}

	&::-webkit-scrollbar-track {
		background-color: #f0f0f0; /* Колір фону скролбару */
		border-radius: 5px;
	} */
`

export const LinkA = styled(Link)`
	text-decoration: underline;
`
export const SvgClose = styled.svg`
	height: 32px;
	width: 32px;
	fill: transparent;
	stroke: #101828;
	position: absolute;
	top: 40px;
	right: 40px;
`
export const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
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
	margin-bottom: 8px;
`
export const Price = styled.p`
	font-family: var(--font-family);
	font-weight: 600;
	font-size: 24px;
	line-height: 1.25;
	/* color: var(--main); */
`
export const Img = styled.img`
	border-radius: 10px;
	width: 290px;
	height: 310px;
	object-fit: cover;
`
export const PriceWrap = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 24px;
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
	margin-bottom: 16px;
`

export const RatingLocationWrap = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`
export const DescripText = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	width: 902px;
	height: 510px;
	/* text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap; */
	margin-bottom: 24px;
`
