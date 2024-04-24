import { configureStore } from '@reduxjs/toolkit'
import { campersReducer } from './campers/campersSlice'
import { favoritesReducer } from './favorites/favoriteSlice'

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

// const favoritePersistConfig = {
// 	key: 'favorites',
// 	storage,
// 	whitelist: ['favorites'],
// }

export const store = configureStore({
	reducer: {
		campers: campersReducer,
		favorites: favoritesReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
