import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import countries from "../utils/countries.json";

export const fetchData = createAsyncThunk(
  "countries/getData",
  async (countryName) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${countryName}`
    );
    return res.data;
  }
);
export const fetchGlobalData = createAsyncThunk("global/getData", async () => {
  const res = await axios.get(`https://covid19.mathdro.id/api`);
  return res.data;
});

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: countries,
    covidInfos: {
      confirmed: { value: 15055576 },
      deaths: { value: 98904 },
      lastUpdate: "2022-05-17T18:20:48.000Z",
    },
    isLoading: false,
  },

  reducers: {},

  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.covidInfos = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchGlobalData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGlobalData.fulfilled]: (state, action) => {
      state.covidInfos = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchGlobalData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const selectCountries = (state) => state.countries.countries;
// export const selectSelectedCountry = (state) => state.countries.selectedCountry;
export const selectCovidInfos = (state) => state.countries.covidInfos;
export const selectLoading = (state) => state.countries.isLoading;
export default countrySlice.reducer;
