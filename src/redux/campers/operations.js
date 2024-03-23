import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65feab57b2a18489b38664b8.mockapi.io/campers'

export const getAllCarsInformation = createAsyncThunk(
	'campers/getAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get('/campers')

			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const getOneCamper = createAsyncThunk(
	'campers/getOne',
	async (id, thunkAPI) => {
		try {
			const { data } = await axios.get(`/campers/${id}`)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
