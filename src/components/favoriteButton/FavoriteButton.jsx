import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorites, deleteFavorite } from '../../redux/campers/favoriteSlice'

import sprite from '../../assets/sprite.svg'
import { campersSelector } from '../../redux/campers/selectors'
import { Button, SvgFavoriteHeart, SvgHeart } from './FavoriteButtonStyled'

const storageKey = 'persist:favorites'

export const FavoriteButton = ({ id }) => {
	const [favorite, setFavorite] = useState(false)
	const dispatch = useDispatch()

	const campers = useSelector(campersSelector)

	useEffect(() => {
		const favoritesStorage = JSON.parse(localStorage.getItem(storageKey))
		if (favoritesStorage && favoritesStorage.favorites.includes(id)) {
			setFavorite(true)
		}
	}, [id])

	const favoriteHandler = () => {
		setFavorite(!favorite)
		if (!favorite) {
			dispatch(addFavorites(id))

			localStorage.setItem(storageKey, JSON.stringify([...campers, id]))
		} else {
			dispatch(deleteFavorite(id))

			localStorage.setItem(
				storageKey,
				JSON.stringify(campers.filter(itemId => itemId !== id))
			)
		}
	}

	return (
		<>
			{favorite ? (
				<Button>
					<SvgFavoriteHeart onClick={favoriteHandler}>
						<use href={sprite + '#icon-heart-null'} />
					</SvgFavoriteHeart>
				</Button>
			) : (
				<Button>
					<SvgHeart onClick={favoriteHandler}>
						<use href={sprite + '#icon-heart-null'} />
					</SvgHeart>
				</Button>
			)}
		</>
	)
}
