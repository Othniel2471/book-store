import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    state: 'Under Construction',
  },
  reducers: {
    stateCheck: (state) => {
      if (state.state === 'Under Construction') {
        state.state = 'Under Construction';
      } else {
        state.state = 'Under Construction';
      }
    },
  },
});

export const { stateCheck } = categoriesSlice.actions;

export default categoriesSlice.reducer;
