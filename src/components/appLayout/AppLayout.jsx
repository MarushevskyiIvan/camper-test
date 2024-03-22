import { NavLink, Outlet } from 'react-router-dom'

import { Suspense } from 'react'
// import { GlobalStyle } from 'components/GlobalStyle'

const AppLayout = () => {
	return (
		<>
			<header>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/favorites'>Favorites</NavLink>
					</li>
					<li>
						<NavLink to='/catalog'>Catalog</NavLink>
					</li>
				</ul>
			</header>
			<main>
				<Suspense>
					<Outlet />
				</Suspense>
			</main>

			{/* <GlobalStyle /> */}
		</>
	)
}

export default AppLayout
