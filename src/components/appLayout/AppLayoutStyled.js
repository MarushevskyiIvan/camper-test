import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainContainer = styled.div`
	padding-top: 100px;
	display: flex;
	gap: 64px;
`
export const Header = styled.header`
	width: 1440px;
	padding: 20px 64px;
`

export const HeaderUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 44px;
`

export const HeaderLink = styled(NavLink)`
	color: #101828;
	padding: 12px 32px;
	background-color: #f2f4f7;
	border-radius: 200px;

	&&:hover {
		border: 1px solid #e44848;
		color: #e44848;
	}
	&&:focus {
		border: 1px solid #e44848;
		color: #e44848;
	}

	&.active {
		border: 1px solid #e44848;
		color: #e44848;
	}
`
