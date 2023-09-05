import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatue: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
export const { checkStatue } = categoriesSlice.actions;
