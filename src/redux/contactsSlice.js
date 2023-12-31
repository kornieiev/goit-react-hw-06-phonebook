import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    contactAdd: (state, action) => {
      return [action.payload, ...state];
    },
    contactDelete: (state, action) => {
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
    contactUpdate: (state, action) => {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1, action.payload);
    },
  },
});

export const { contactAdd, contactDelete, contactUpdate } =
  contactsSlice.actions;
