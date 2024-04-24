import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	addFavorites,
	deleteFavorite,
} from '../../redux/favorites/favoriteSlice'
import sprite from '../../assets/sprite.svg'
import { campersSelector } from '../../redux/campers/selectors'
import { Button, SvgFavoriteHeart, SvgHeart } from './FavoriteButtonStyled'

const storageKey = 'persist:favorites'

export const FavoriteButton = ({ id }) => {
	const [favorite, setFavorite] = useState(false)

	useEffect(() => {
		const favoritesStorage = JSON.parse(localStorage.getItem(storageKey))
		if (favoritesStorage && favoritesStorage.includes(id)) {
			setFavorite(true)
		}
	}, [id])

	const favoriteHandler = () => {
		setFavorite(!favorite)
		const favoritesStorage = JSON.parse(localStorage.getItem(storageKey)) ?? []

		if (!favorite) {
			localStorage.setItem(
				storageKey,
				JSON.stringify([...favoritesStorage, id])
			)
		} else {
			const updatedFavorites = favoritesStorage.filter(favId => favId !== id)
			localStorage.setItem(storageKey, JSON.stringify(updatedFavorites))
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
