import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: { favorites: [] },
	reducers: {
		addFavorites(state, action) {
			state.favorites = [...state.favorites, action.payload]
		},
		deleteFavorite(state, action) {
			state.favorites = state.favorites.filter(item => item !== action.payload)
		},
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const { deleteFavorite, addFavorites } = favoritesSlice.actions
