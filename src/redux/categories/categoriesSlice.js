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
        return 'Under Construction';
      }
      return 'Ready';
    },
  },
});

export const { stateCheck } = categoriesSlice.actions;

export default categoriesSlice.reducer;
