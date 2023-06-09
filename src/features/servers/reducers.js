import { SERVERS_REDUCERS } from './types';
import ServerApi from '../../api/server';

export const reducers = {
  [SERVERS_REDUCERS.SET_SERVER]: (state, { payload }) => {
    state.servers = payload;
  },
  [SERVERS_REDUCERS.UPDATE_SELECTED_SERVER]: (state, { payload }) => {
    const servers = ServerApi.getServerById(payload);
    state.selectedServer = servers[0];
  },
  [SERVERS_REDUCERS.UPDATE_CACHE_SERVERS]: (state, { payload }) => {
    state.infoCache = [...state.infoCache, ...payload];
  },
  [SERVERS_REDUCERS.DELETE_SERVER]: (state, { payload }) => {
    state.servers = payload;
  },
  [SERVERS_REDUCERS.FETCH_SERVERS]: (state) => {
    const servers = ServerApi.getServer();
    state.servers = servers;
  },
  [SERVERS_REDUCERS.EDIT_SERVER]: (state, { payload }) => {
    state.servers = payload;
  },
};
