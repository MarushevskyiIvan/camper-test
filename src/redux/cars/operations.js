import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllCarsInformation = createAsyncThunk(
	'cars/getAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get('/cars')
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const addOneCar = createAsyncThunk(
	'cars/addOneCar',
	async ({ name, number }, thunkAPI) => {
		try {
			const { data } = await axios.post('/cars', {
				name: name,
				number: number,
			})
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
