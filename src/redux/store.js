import { configureStore } from '@reduxjs/toolkit'
import { camperReducer } from './campers/campersSlice'
import { filterReducer } from './campers/filterSlice'

// import { authReducer } from './auth/slice'
// import persistReducer from 'redux-persist/es/persistReducer'
// import storage from 'redux-persist/lib/storage'
// import {
// 	persistStore,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'

// const authPersistConfig = {
// 	key: 'auth',
// 	storage,
// 	whitelist: ['token'],
// }

export const store = configureStore({
	reducer: {
		campers: camperReducer,
		filter: filterReducer,
		// auth: persistReducer(authPersistConfig, authReducer),
	},
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
})

// export const persistor = persistStore(store)
