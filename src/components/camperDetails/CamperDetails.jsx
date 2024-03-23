import { useSelector } from 'react-redux'
import { campersSelector } from '../../redux/campers/selectors'
import { nanoid } from 'nanoid'

export const CamperDetails = () => {
	const campers = useSelector(campersSelector)
	// console.log('campers', campers)
	return (
		campers && (
			<ul>
				{campers.map(({ details }) => {
					// const keys = Object.keys(details)
					// const values = Object.values(details)
					const entries = Object.entries(details)
					console.log('entries', entries)

					return (
						<>
							<li key={nanoid()}> {entries} </li>

							{/* <li key={nanoid()}>{TV} TV</li>
							<li key={nanoid()}>{airConditioner} airConditioner</li>
							<li key={nanoid()}>{bathroom} bathroom</li>
							<li key={nanoid()}>{beds} beds</li>
							<li key={nanoid()}>{freezer} freezer</li>
							<li key={nanoid()}>{gas} gas</li>
							<li key={nanoid()}>{hob} hob</li>
							<li key={nanoid()}>{kitchen} kitchen</li>
							<li key={nanoid()}>{microwave} microwave</li>
							<li key={nanoid()}>{radio} radio</li>
							<li key={nanoid()}>{shower} shower</li>
							<li key={nanoid()}>{toilet} toilet</li>
							<li key={nanoid()}>{water} water</li>
							<li key={nanoid()}>{transmission} transmission</li>
							<li key={nanoid()}>{adults} adults</li>
							<li key={nanoid()}>{children} children</li>
							<li key={nanoid()}>{engine} engine</li> */}
						</>
					)
				})}
			</ul>
		)
	)
}
