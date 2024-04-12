import styled from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const Btn = styled.button`
	border-radius: 200px;
	border: none;
	padding: 16px 40px;

	background: ${globalColor.colorRed};
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: -0.01em;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	&&:hover {
		background-color: #d84343;
	}
	&&:focus {
		background-color: #d84343;
	}
`
