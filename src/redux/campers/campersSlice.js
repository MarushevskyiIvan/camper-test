import { createSlice } from '@reduxjs/toolkit'
import { handleFetchFulfilled, handlePending, handleRejected } from './handlers'
import { getAllCarsInformation } from './operations'

const initialState = {
	campers: [],
	isLoading: false,
	error: null,
}

const camperSlice = createSlice({
	name: 'campers',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getAllCarsInformation.fulfilled, handleFetchFulfilled)
			.addCase(getAllCarsInformation.pending, handlePending)
			.addCase(getAllCarsInformation.rejected, handleRejected)
	},
})

export const camperReducer = camperSlice.reducer
