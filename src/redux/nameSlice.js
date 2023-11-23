import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    nameChange: (state, action) => {
      return action.payload;
    },
  },
});

export const { nameChange } = nameSlice.actions;
