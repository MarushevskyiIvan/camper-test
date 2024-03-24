export const Features = ({ car }) => {
	const { details, form, length, width, height, tank, consumption } = car

	return (
		<>
			<ul>
				{details &&
					Object.entries(details).map(([key, value]) => (
						<li key={key}>
							{key}: {value}
						</li>
					))}
			</ul>
			<h2>Vehicle details</h2>
			<ul>
				<li>Form {form}</li>
				<li>Length {length}</li>
				<li>Width {width}</li>
				<li>Height {height}</li>
				<li>Tank {tank}</li>
				<li>Consumption {consumption}</li>
			</ul>
		</>
	)
}
