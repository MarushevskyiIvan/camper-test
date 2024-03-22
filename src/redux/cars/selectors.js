import { createSelector } from '@reduxjs/toolkit'

export const filterSelector = state => (state = state.filter.filter)
export const carsSelector = state => state.cars.items
export const selectIsLoading = state => state.cars.isLoading
export const selectError = state => state.cars.error

export const selectFilter = createSelector([filterSelector], filter => filter)

// export const selectorCars = createSelector(
// 	[carsSelector, filterSelector],
// 	(cars, filter) => {
// 		return cars.filter(({ name }) =>
// 			name.toLowerCase().includes(filter.toLowerCase())
// 		)
// 	}
// )
