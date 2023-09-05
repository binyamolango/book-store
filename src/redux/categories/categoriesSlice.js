import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatue: () => {
      return 'Under construction',
    },
  },
})

export 
