import { BackgroundOverlay, Car, LoadingWindow, Text } from './LoaderStyled'

export const Loader = () => {
	return (
		<BackgroundOverlay>
			<LoadingWindow>
				<Car>
					<div className='strike'></div>
					<div className='strike strike2'></div>
					<div className='strike strike3'></div>
					<div className='strike strike4'></div>
					<div className='strike strike5'></div>
					<div className='car-detail spoiler'></div>
					<div className='car-detail back'></div>
					<div className='car-detail center'></div>
					<div className='car-detail center1'></div>
					<div className='car-detail front'></div>
					<div className='car-detail wheel'></div>
					<div className='car-detail wheel wheel2'></div>
				</Car>
				<Text>
					<span>Loading</span>
					<span className='dots'>...</span>
				</Text>
			</LoadingWindow>
		</BackgroundOverlay>
	)
}
