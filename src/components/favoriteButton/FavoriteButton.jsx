import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorites, deleteFavorite } from '../../redux/campers/favoriteSlice'
import { SvgFavoriteHeart, SvgHeart } from '../camperItem/CamperItemstyled'
import sprite from '../../assets/sprite.svg'

export const FavoriteButton = ({ id }) => {
	const [favorite, setFavorite] = useState(false)

	const dispatch = useDispatch()

	const favoriteHandler = () => {
		setFavorite(!favorite)
		if (!favorite) {
			dispatch(addFavorites(id))
		}
		if (favorite) {
			dispatch(deleteFavorite(id))
		}
	}

	return (
		<>
			{favorite ? (
				<SvgFavoriteHeart onClick={favoriteHandler}>
					<use href={sprite + '#icon-heart-null'} />
				</SvgFavoriteHeart>
			) : (
				<SvgHeart onClick={favoriteHandler}>
					<use href={sprite + '#icon-heart-null'} />
				</SvgHeart>
			)}
		</>
	)
}
