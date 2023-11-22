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
    contactsChange: (state, action) => [action.payload, ...state],
    contactsDelete: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { contactsChange, contactsDelete } = contactsSlice.actions;
