import { createSlice } from '@reduxjs/toolkit'
import {
	handleFetchCarFulfilled,
	handlePending,
	handleRejected,
} from './handlers'
import { getOneCar } from './operations'

const initialState = {
	car: [],
	isLoading: false,
	error: null,
}

const carSlice = createSlice({
	name: 'car',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getOneCar.fulfilled, handleFetchCarFulfilled)
			.addCase(getOneCar.pending, handlePending)
			.addCase(getOneCar.rejected, handleRejected)
	},
})

export const carReducer = carSlice.reducer
