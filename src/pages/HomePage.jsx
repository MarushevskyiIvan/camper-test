const styles = {
	container: {
		minHeight: 'calc(100vh - 50px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 500,
		fontSize: 48,
		textAlign: 'center',
	},
}

export default function HomePage() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>
				cars manager welcome page bee beee{' '}
				<span role='img' aria-label='Greeting icon'>
					💁‍♀️
				</span>
			</h1>
		</div>
	)
}
