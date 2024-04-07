import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filter: {
		location: '',
		AC: false,
		Automatic: false,
		Kitchen: false,
		TV: false,
		Showers: false,
		Form: '',
	},
}

const filterSlice = createSlice({
	name: 'filter',
	initialState: initialState,
	reducers: {
		filter(state, action) {
			state.filter = action.payload
		},
	},
})

export const filterReducer = filterSlice.reducer
export const { filter } = filterSlice.actions
