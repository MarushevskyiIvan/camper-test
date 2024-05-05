import styled from 'styled-components'

import backgroundImage from '../../assets/img/Screenshot_1.png'

export const BackgroundImageContainer = styled.div`
	background-image: linear-gradient(
			rgba(46, 47, 66, 0.7),
			rgba(46, 47, 66, 0.7)
		),
		url(${backgroundImage});

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	width: 100vw;
	height: 740px;
	position: absolute;
	top: 84px;

	left: 50%;
	transform: translateX(-50%);

	padding-left: 50vw;
	padding-right: 50vw;
`

export const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
	z-index: 100;
	font-weight: 900;
	font-size: 32px;
	line-height: 1.25;
	color: white;
`

export const Img = styled.img`
	width: 640px;
	height: 380px;
	object-fit: cover;
	border-radius: 35px;
`
export const SectionContainer = styled.div`
	display: flex;
	gap: 32px;
`

export const P = styled.p`
	margin-top: 16px;
	margin-bottom: 36px;
	font-size: 18px;
	line-height: 1.5;
	letter-spacing: -0.01em;
`

export const H2 = styled.h2`
	margin-top: 16px;
`
