import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const ModalContainer = styled.div`
	width: 926px;
	overflow-y: auto;
	height: 100%;
	padding-right: 16px;
	position: relative;
	overflow-x: hidden;

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: #d9d9d9;
		border-radius: 7px;
	}

	&::-webkit-scrollbar {
		width: 8px;
		height: 264px;
		background: transparent;
	}
`

export const FeatureReviewsText = styled.div`
	display: flex;
	gap: 40px;
	margin-bottom: 68px;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;

	position: relative;

	&::after {
		position: absolute;
		content: '';
		background-color: rgba(16, 24, 40, 0.2);
		height: 1px;
		width: 100%;
		bottom: -24px;
	}
`
export const FeatureReviewsLink = styled(Link)`
	display: flex;
	gap: 40px;

	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;

	&.active {
		&::after {
			position: absolute;
			content: '';
			background-color: ${globalColor.colorRed};
			height: 4px;
			width: 85px;
			bottom: -25px;
		}
	}
`
export const DescrFormWrap = styled.div`
	display: flex;
	gap: 24px;
`
