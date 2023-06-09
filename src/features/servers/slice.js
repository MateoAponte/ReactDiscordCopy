import { createSlice } from '@reduxjs/toolkit';
import { TYPE_SERVERS } from './types';
import { state } from './state';
import { reducers } from './reducers';

export const ServersSlice = createSlice({
  name: TYPE_SERVERS,
  initialState: state,
  reducers: reducers,
});

export const dispatch = ServersSlice.actions;

export default ServersSlice.reducer;
