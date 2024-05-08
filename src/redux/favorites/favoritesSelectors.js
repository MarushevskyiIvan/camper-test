export const favoritesSelector = state => state.favorites

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
