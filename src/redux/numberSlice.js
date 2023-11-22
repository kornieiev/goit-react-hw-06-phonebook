import { createSlice } from '@reduxjs/toolkit';

export const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    numberChange: (state, action) => action.payload,
  },
});

export const { numberChange } = numberSlice.actions;
