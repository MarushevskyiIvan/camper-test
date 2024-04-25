import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65feab57b2a18489b38664b8.mockapi.io/campers'

export const getAllCarsInformation = createAsyncThunk(
	'campers/getAll',
	async (_, thunkAPI) => {
		try {
			const currentParams = new URLSearchParams(window.location.search)

			const page = currentParams.get('page') || 1
			const limit = currentParams.get('limit') || 4

			const allParams = Object.fromEntries(currentParams)

			const filterParams = Object.entries({ ...allParams, page, limit })
				.filter(([key, value]) => value)
				.map(([key, value]) => `${key}=${value}`)

			const queryString = filterParams.join('&')

			const { data } = await axios.get(`/campers?${queryString}`)

			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const getAllCarsFavorites = createAsyncThunk(
	'favorites/getFavorites',
	async (id, thunkAPI) => {
		console.log('id', id)
		const sentIds = []

		// console.log('idFilter', idFilter)
		// let result = []

		if (sentIds.includes(id)) {
			// Если запрос уже был отправлен, просто возвращаем пустое значение,
			// поскольку результат запроса уже обрабатывается другими средствами
			return
		}

		try {
			const { data } = await axios.get(`/campers/${id}`)

			// result.push(data)

			sentIds.push(id)
			console.log('data', data)

			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
