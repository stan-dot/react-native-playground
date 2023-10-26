import { createSlice } from '@reduxjs/toolkit';

const vulnerabilitiesSlice = createSlice({
  name: 'vulnerabilities',
  initialState: [],
  reducers: {
    setVulnerabilities: (state, action) => action.payload,
  },
});

export const { setVulnerabilities } = vulnerabilitiesSlice.actions;
export default vulnerabilitiesSlice.reducer;
