import styled from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const FormWrap = styled.div`
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 10px;
	padding: 24px;
	width: 448px;
`
export const H3Title = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	margin-bottom: 8px;
`
export const P = styled.p`
	font-size: 16px;
	line-height: 1.5;
	color: ${globalColor.colorGrey};
	margin-bottom: 24px;
`

export const Forma = styled.form`
	display: flex;
	flex-direction: column;
	gap: 14px;
`
export const Input = styled.input`
	width: 100%;
	background: ${globalColor.colorWhite};
	border: none;
	border-radius: 10px;
	padding: 18px;

	height: 56px;
	background: ${globalColor.colorWhite};

	&:focus::placeholder {
		color: ${globalColor.colorBlack};
		border-color: red;
		border: none;
	}
`

export const Textarea = styled.textarea`
	width: 100%;
	height: 114px;
	background: ${globalColor.colorWhite};
	border: none;
	border-radius: 10px;
	padding: 18px;

	background: ${globalColor.colorWhite};
	resize: none;
	&:focus::placeholder {
		color: ${globalColor.colorBlack};
	}
`

export const FormBtn = styled.button`
	border-radius: 200px;
	border: none;
	padding: 16px 60px;

	margin-top: 10px;

	width: 160px;
	height: 56px;

	/* background: var(--button); */
	background: #e44848;
	/* font-family: var(--font-family); */
	font-weight: 500;
	font-size: 16px;
	line-height: 1.5;
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
