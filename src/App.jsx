import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import FavoritesPage from './pages/FavoritesPage'
import { AppLayout } from './components/appLayout/AppLayout'
import { Features } from './components/features/Features'
import { Reviews } from './components/reviews/Reviews'

function App() {
	return (
		<>
			<header>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/favorite'>Favorite</NavLink>
					</li>
					<li>
						<NavLink to='/catalog'>Catalog</NavLink>
					</li>
				</ul>
			</header>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/catalog' element={<CatalogPage />} />

					<Route path='/favorites' element={<FavoritesPage />}>
						<Route path='features' element={<Features />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
