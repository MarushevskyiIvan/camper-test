import { Outlet } from 'react-router-dom'

import { Suspense } from 'react'

import { Header, HeaderLink, HeaderUl, MainContainer } from './AppLayoutStyled'
import { GlobalStyles } from '../GlobalStyles'

const AppLayout = () => {
	return (
		<>
			<Header>
				<HeaderUl>
					<li>
						<HeaderLink to='/'>Home</HeaderLink>
					</li>
					<li>
						<HeaderLink to='/catalog'>Catalog</HeaderLink>
					</li>
					<li>
						<HeaderLink to='/favorites'>Favorites</HeaderLink>
					</li>
				</HeaderUl>
			</Header>
			<main>
				<MainContainer>
					<Suspense fallback={<div>Loading...</div>}>
						<Outlet />
					</Suspense>
				</MainContainer>
			</main>
			<GlobalStyles />
		</>
	)
}

export default AppLayout
