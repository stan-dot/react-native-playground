import { createSlice } from '@reduxjs/toolkit';

const breachesSlice = createSlice({
  name: 'breaches',
  initialState: [],
  reducers: {
    setBreaches: (state, action) => action.payload,
  },
});

export const { setBreaches } = breachesSlice.actions;
export default breachesSlice.reducer;
