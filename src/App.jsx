import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'

import { Features } from './components/features/Features'
import { Reviews } from './components/reviews/Reviews'
import AppLayout from './components/appLayout/AppLayout'
import FavoritesPage from './pages/FavoritesPage'
import { ItemModal } from './components/modal/ItemModal'
// import { ItemModalPage } from './pages/ItemModalPage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/catalog' element={<CatalogPage />} />

					<Route path='/modal' element={<ItemModal />}>
						<Route path='features' element={<Features />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>

					<Route path='/favorites' element={<FavoritesPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
