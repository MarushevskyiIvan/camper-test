import { createSelector } from '@reduxjs/toolkit'

export const campersSelector = state => state.campers.campers
export const filterSelector = state => (state = state.filter.filter)

export const selectIsLoading = state => state.campers.isLoading
export const selectError = state => state.campers.error

export const selectFilter = createSelector([filterSelector], filter => filter)

// export const selectorCars = createSelector(
// 	[campersSelector, filterSelector],
// 	(campers, filter) => {
// 		return campers.filter(({ name }) =>
// 			name.toLowerCase().includes(filter.toLowerCase())
// 		)
// 	}
// )
