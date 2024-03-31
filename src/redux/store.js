import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './campers/filterSlice'
import { campersReducer } from './campers/campersSlice'
import { carReducer } from './campers/carSlice'
import { favoritesReducer } from './campers/favoriteSlice'

import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

const favoritePersistConfig = {
	key: 'favorites',
	storage,
	whitelist: ['favorites'],
}

export const store = configureStore({
	reducer: {
		campers: campersReducer,
		car: carReducer,
		filter: filterReducer,
		favorites: persistReducer(favoritePersistConfig, favoritesReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
