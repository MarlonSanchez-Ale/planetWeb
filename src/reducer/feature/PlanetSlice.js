import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
    headers: {
      'X-RapidAPI-Key': '8bffd7af86msh9c2827190400929p1240fbjsnc3504409a67c',
      'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
  };

export const getPlanetsAll = createAsyncThunk(
    "planet/getPlanetsAll",
    async () => {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

const initialState = {
    planets: [],
    isLoading: false,
    error: ''
}

export const PlanetSlice = createSlice({
    name: 'planet',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPlanetsAll.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getPlanetsAll.fulfilled, (state, action) => {
                state.planets = action.payload;
                state.isLoading = false;
                state.error = '' 
            })
            .addCase(getPlanetsAll.rejected, (state, action) => {
                state.planets = []                
                state.isLoading = false;
                state.error = action.error.message
            })
    },
})



export default PlanetSlice.reducer