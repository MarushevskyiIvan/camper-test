import { createSelector } from '@reduxjs/toolkit'

export const campersSelector = state => state.campers.campers
export const carSelector = state => state.car.car
export const filterSelector = state => (state = state.filter.filter)
export const favoritesSelector = state => state.favorites

export const selectIsLoading = state => state.campers.isLoading
export const selectError = state => state.campers.error

// export const selectFilter = createSelector([filterSelector], filter => filter)

// export const selectorCampers = createSelector(
// 	[campersSelector, filterSelector],
// 	(campers, filter) => {
// 		return campers.filter(({ location }) =>
// 			location.toLowerCase().includes(filter.toLowerCase())
// 		)
// 	}
// )

export const selectFilter = state => state.filter.filter

export const selectorCampers = createSelector(
	[campersSelector, selectFilter],
	(campers, filter) => {
		return campers.filter(
			({
				location,
				transmission,
				form,
				details: { TV, shower, kitchen, airConditioner },
			}) => {
				return (
					location.toLowerCase().includes(filter.location?.toLowerCase()) &&
					(!!transmission === filter.Automatic || !filter.Automatic) &&
					(form === filter.Form || !filter.Form) &&
					(!!TV === filter.TV || !filter.TV) &&
					(!!shower === filter.Showers || !filter.Showers) &&
					(!!kitchen === filter.Kitchen || !filter.Kitchen) &&
					(!!airConditioner === filter.AC || !filter.AC)
				)
			}
		)
	}
)
