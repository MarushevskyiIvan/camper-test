import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'

import AppLayout from './components/appLayout/AppLayout'
import FavoritesPage from './pages/FavoritesPage'

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
