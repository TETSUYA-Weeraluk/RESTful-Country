const { configureStore } = require("@reduxjs/toolkit");
const { default: countrySlice } = require("./Country-Slice");

const store = configureStore({
  reducer: {
    country: countrySlice.reducer,
  },
});

export default store;
