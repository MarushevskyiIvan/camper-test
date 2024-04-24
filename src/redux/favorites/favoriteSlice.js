import { createSlice } from '@reduxjs/toolkit'
import { getAllCarsFavorites } from '../operations'
import {
	handleFetchFavoritesFulfilled,
	handlePending,
	handleRejected,
} from '../handlers'

const initialState = {
	favorites: [],
	isLoading: false,
	error: null,
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getAllCarsFavorites.fulfilled, handleFetchFavoritesFulfilled)
			.addCase(getAllCarsFavorites.pending, handlePending)
			.addCase(getAllCarsFavorites.rejected, handleRejected)
		// addFavorites(state, action) {
		// state.favorites = [...state.favorites, action.payload]
	},
	deleteFavorite(state, action) {
		state.favorites = state.favorites.filter(item => item !== action.payload)
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const { deleteFavorite, addFavorites } = favoritesSlice.actions
