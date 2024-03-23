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
export const handleFetchFulfilled = (state, action) => {
	handleFulfilled(state)
	state.campers = action.payload
}
