import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { nameSlice } from './nameSlice';
import { numberSlice } from './numberSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    name: nameSlice.reducer,
    number: numberSlice.reducer,
  },
});
