import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

import AppLayout from './components/appLayout/AppLayout'

const HomePage = lazy(() => import('./pages/Home/HomePage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/catalog' element={<CatalogPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
