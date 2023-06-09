import { MESSAGES_REDUCERS } from './types';

export const reducers = {
  [MESSAGES_REDUCERS.SET_MESSAGE]: (state, payload) => {
    state.message = payload;
  },
  [MESSAGES_REDUCERS.UPDATE_MESSAGE]: (state, payload) => {
    state.message = payload;
  },
  [MESSAGES_REDUCERS.DELETE_MESSAGE]: (state, payload) => {
    state.message = payload;
  },
  [MESSAGES_REDUCERS.FETCH_MESSAGES]: (state, payload) => {
    state.message = payload;
  },
  [MESSAGES_REDUCERS.EDIT_MESSAGE]: (state, payload) => {
    state.message = payload;
  },
};
