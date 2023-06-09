import { createSlice } from '@reduxjs/toolkit';
import { TYPE_MESSAGES } from './types';
import { state } from './state';
import { reducers } from './reducers';

export const MessagesSlice = createSlice({
  name: TYPE_MESSAGES,
  initialState: state,
  reducers: reducers,
});

export const dispatch = MessagesSlice.actions;

export default MessagesSlice.reducer;
