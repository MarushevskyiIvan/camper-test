import { createSlice } from '@reduxjs/toolkit'
import {
	handleFetchCampersFulfilled,
	handlePending,
	handleRejected,
} from './handlers'
import { getAllCarsInformation } from './operations'

const initialState = {
	campers: [],
	isLoading: false,
	error: null,
}

const campersSlice = createSlice({
	name: 'campers',
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getAllCarsInformation.fulfilled, handleFetchCampersFulfilled)
			.addCase(getAllCarsInformation.pending, handlePending)
			.addCase(getAllCarsInformation.rejected, handleRejected)
	},
})

export const campersReducer = campersSlice.reducer
