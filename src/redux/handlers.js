export const handlePending = state => {
	state.isLoading = true
}
export const handleRejected = (state, action) => {
	state.isLoading = false
	state.error = action.payload
}
export const handleFulfilled = state => {
	state.isLoading = false
	state.error = null
}
export const handleFetchCampersFulfilled = (state, action) => {
	handleFulfilled(state)

	state.campers = action.payload
}

export const handleFetchFavoritesFulfilled = (state, action) => {
	const existingId = state.favorites.find(item => item.id === action.payload.id)
	if (existingId) {
		return
	}
	state.favorites.push(action.payload)
}
