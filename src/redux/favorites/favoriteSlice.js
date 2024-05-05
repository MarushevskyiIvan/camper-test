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

	reducers: {
		deleteFavorite: (state, action) => {
			state.favorites = state.favorites.filter(
				({ id }) => id !== action.payload
			)
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getAllCarsFavorites.fulfilled, handleFetchFavoritesFulfilled)
			.addCase(getAllCarsFavorites.pending, handlePending)
			.addCase(getAllCarsFavorites.rejected, handleRejected)

		// .addCase(
		// 	deleteFavorite((state, action) => {
		// 		return (state.favorites = state.favorites.filter(
		// 			item => item !== action.payload
		// 		))
		// 	})
		// )

		// .addCase(deleteFavorite.fulfilled, deleteFavoriteFulfilled)
		// .addCase(deleteFavorite.pending, handlePending)
		// .addCase(deleteFavorite.rejected, handleRejected)
		// addFavorites(state, action) {
		// state.favorites = [...state.favorites, action.payload]
	},
	// deleteFavorite(state, action) {
	// 	state.favorites = state.favorites.filter(item => item !== action.payload)
	// },
})

export const favoritesReducer = favoritesSlice.reducer
export const { deleteFavorite, addFavorites } = favoritesSlice.actions
