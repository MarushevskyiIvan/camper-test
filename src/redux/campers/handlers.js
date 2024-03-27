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

export const handleFetchCarFulfilled = (state, action) => {
	handleFulfilled(state)
	state.car = action.payload
}
