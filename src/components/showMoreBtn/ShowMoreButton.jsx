import { Btn } from './ShowMoreButton.styled'

export const ShowMoreButton = ({ id, onShowMore }) => {
	return <Btn onClick={() => onShowMore(id)}>Show more</Btn>
}
