import { combineReducers } from 'redux';
import MessagesSlice from '../../features/messages/slice';
import { TYPE_MESSAGES } from '../../features/messages/types';

import ServersSlice from '../../features/servers/slice';
import { TYPE_SERVERS } from '../../features/servers/types';

export const rootReducer = combineReducers({
  [TYPE_MESSAGES]: MessagesSlice,
  [TYPE_SERVERS]: ServersSlice,
});
