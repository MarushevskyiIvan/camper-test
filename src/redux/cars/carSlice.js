import { createSlice } from '@reduxjs/toolkit'
import { handleFulfilled, handlePending, handleRejected } from './handlers'
import { getAllCarsInformation } from './operations'

const initialState = {
	cars: [],
	isLoading: false,
	error: null,
}

const carSlice = createSlice({
	name: 'cars',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getAllCarsInformation.pending, handlePending)
			.addCase(getAllCarsInformation.fulfilled, handleFulfilled)
			.addCase(getAllCarsInformation.rejected, handleRejected)
	},
})

export const carReducer = carSlice.reducer
