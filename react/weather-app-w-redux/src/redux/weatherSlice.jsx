import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import defaultForecast from "../utils/defaultForecast.json";
export const fetchData = createAsyncThunk(
  "weather/getWeather",
  async (data) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        data.latitude || "37.0000"
      }&lon=${
        data.longitude || "35.3213"
      }&lang=en&exclude=alerts,hourly,minutely,current&units=metric&appid=${
        process.env.REACT_APP_API_KEY
      }`
    );
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    selectedCity: {
      id: 1,
      name: "Adana",
      latitude: "37.0000",
      longitude: "35.3213",
      population: 2183167,
      region: "Akdeniz",
    },
    forecast: defaultForecast,
    isLoading: false,
    error: false,
  },
  reducers: {
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
    },
    [fetchData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const forecast = (state) => state.weather.forecast;
export const selectLoading = (state) => state.weather.isLoading;
export const selectError = (state) => state.weather.error;
export const selectedCity = (state) => state.weather.selectedCity;
export const { selectCity } = weatherSlice.actions;
export default weatherSlice.reducer;
