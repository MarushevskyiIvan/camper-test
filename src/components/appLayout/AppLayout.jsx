import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import { Header, HeaderLink, HeaderUl, MainContainer } from './AppLayoutStyled'
import { Container, GlobalStyles } from '../../GlobalStyles'
import { Loader } from '../loader/Loader'
import { selectError, selectIsLoading } from '../../redux/campers/selectors'
import { useSelector } from 'react-redux'
const AppLayout = () => {
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	return (
		<Container>
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
					<Suspense fallback={<Loader />}>
						{isLoading && !error && <Loader />}
						<Outlet />
					</Suspense>
				</MainContainer>
			</main>
			<GlobalStyles />
		</Container>
	)
}

export default AppLayout
