export const CamperListFilter = () => {
	return (
		<form>
			<p>Filters</p>
			<h3>Vehicle equipment</h3>
			<label>
				<input type='checkbox' name='AC' value='AC' />
				AC
			</label>
			<label>
				<input type='checkbox' name='Automatic' value='Automatic' />
				Automatic
			</label>
			<label>
				<input type='checkbox' name='Kitchen' value='Kitchen' />
				Kitchen
			</label>
			<label>
				<input type='checkbox' name='TV' value='TV' />
				TV
			</label>
			<label>
				<input type='checkbox' name='Showers/WC' value='Showers/WC' />
				Showers/WC
			</label>

			<p>Vehicle type</p>
			<label>
				<input type='checkbox' name='Van' value='Van' />
				Van
			</label>
			<label>
				<input type='checkbox' name='FullyIntegrated' value='FullyIntegrated' />
				Fully Integrated
			</label>
			<label>
				<input type='checkbox' name='Alcove' value='Alcove' />
				Alcove
			</label>
		</form>
	)
}
