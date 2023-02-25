const { createSlice } = require("@reduxjs/toolkit");

const initialStateCountry = {
  isDarkMode: true,
  country: [
    {
      name: "Loading...",
      population: "Loading...",
      region: "Loading...",
      capital: "Loading...",
      flag: "",
      numericCode: 1,
      callingCodes: ["1"],
    },
  ],
  filteredCountry: [],
  error: null,
  regionToggle: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState: initialStateCountry,
  reducers: {
    changeMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    replaceData(state, action) {
      state.country = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    regionToggle(state) {
      state.regionToggle = !state.regionToggle;
    },
    filterInput(state, action) {
      if (action.payload.search) {
        const filterCountries = state.country.filter((country) =>
          country.name
            .toLowerCase()
            .includes(action.payload.search.toLowerCase())
        );
        state.filteredCountry = filterCountries;
      } else if (action.payload.region) {
        const filterCountries = state.country.filter((country) =>
          country.region
            .toLowerCase()
            .includes(action.payload.region.toLowerCase())
        );
        state.filteredCountry = filterCountries;
      } else if (action.payload.region === "All") {
        state.filteredCountry = state.country;
      } else {
        state.filteredCountry = state.country;
      }
    },
    clearFilterInput(state) {
      state.filteredCountry = [];
    },
  },
});

export const fetchCountryData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(countryAction.setError(null));
      const response = await fetch("https://restcountries.com/v2/all");
      if (!response.ok) {
        throw new Error("Request Fail");
      }

      const data = await response.json();
      return data;
    };
    try {
      const countryData = await fetchData();
      dispatch(countryAction.replaceData(countryData));
    } catch (error) {
      dispatch(countryAction.setError(error.message));
    }
  };
};

export const countryAction = countrySlice.actions;
export default countrySlice;
