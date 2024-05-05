import HomeImg1 from '../../assets/img/boxstar-600-lifetime-2-be-knaus-van-modello-2018-min.jpg'
import HomeImg2 from '../../assets/img/Miniven-na-beregu-reki-min.jpg'

import {
	BackgroundImageContainer,
	H2,
	Img,
	P,
	SectionContainer,
	Title,
} from './HomePageStyled'

export default function HomePage() {
	return (
		<div>
			<BackgroundImageContainer />
			<Title>Welcome to the platform for renting campervans for travel!</Title>
			<SectionContainer>
				<div style={{ marginTop: 740 }}>
					<Img src={HomeImg1} alt='camper' />
					<div>
						<H2>
							This application will help you find the best campervan option for
							your needs.
						</H2>
						<P>
							Welcome to the camper rental platform! If you love traveling and
							value the freedom of movement, then a camper is the perfect choice
							for you. Traveling in a camper allows you to explore the world
							without the constraints of schedules, stopping in picturesque
							places and changing plans as you desire. Our application provides
							maximum comfort and convenience in choosing and renting campers.
							With the help of an easy-to-use filter, you can easily select a
							camper with the desired characteristics, such as size, amenities,
							body type, and other parameters. Detailed information about each
							camper allows you to get all the necessary details to make the
							right choice. Additionally, you can save your favorite campers to
							favorites to revisit them and make a booking at any time.
						</P>
					</div>
				</div>

				<div style={{ marginTop: 740 }}>
					<div>
						<H2 style={{ marginTop: 40 }}>
							Welcome to the camper rental platform!
						</H2>
						<P>
							If you love traveling and value the freedom of movement, then a
							camper is the perfect choice for you. Traveling in a camper allows
							you to explore the world without the constraints of schedules,
							stopping in picturesque places and changing plans as you desire.
						</P>
					</div>

					<div>
						<Img src={HomeImg2} alt='camper' />
						<H2 style={{ marginTop: 40 }}>
							Embark on an unforgettable journey with our application and enjoy
							every moment of your adventure on wheels!
						</H2>
					</div>
				</div>
			</SectionContainer>
		</div>
	)
}
