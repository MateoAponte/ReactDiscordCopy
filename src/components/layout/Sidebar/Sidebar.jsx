import React, { useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SERVERS_REDUCERS, TYPE_SERVERS } from '../../../features/servers/types';

import { ServersSlice } from '../../../features/servers/slice';
import SidebarIcon from './SidebarIcon';
import ServerIcon from './ServerIcon';
import InteractionIcon from './InteractionIcon';
import { useNavigate } from 'react-router';
import FolderIcon from './FolderIcon';

const Sidebar = () => {
  const navigate = useNavigate();
  const { selectedServer, servers } = useSelector(
    (state) => ({
      servers: state[TYPE_SERVERS].servers,
      selectedServer: state[TYPE_SERVERS].selectedServer,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  dispatch(ServersSlice.actions[SERVERS_REDUCERS.FETCH_SERVERS]());

  const fetchServer = (id) => {
    dispatch(ServersSlice.actions[SERVERS_REDUCERS.UPDATE_SELECTED_SERVER](id));
    dispatch(ServersSlice.actions[SERVERS_REDUCERS.UPDATE_CACHE_SERVERS]([selectedServer]));
  };
  const navigateTo = (path) => {
    navigate(path);
  };

  const showModal = () => {
    console.log('Show modal and create Portal');
  };

  return (
    <div className="sidebar">
      <SidebarIcon name="Mensajes directos" handleClick={() => navigateTo('/messager')}>
        <InteractionIcon name={'D'} />
      </SidebarIcon>
      {servers.map((server) => {
        return !server.isAgrouped ? (
          <SidebarIcon name={server.name} handleClick={() => fetchServer(server.id)}>
            <ServerIcon image={server.image} name={server.name} />
          </SidebarIcon>
        ) : (
          <FolderIcon
            agroupedServers={server.agroupedServers}
            render={(server) => (
              <SidebarIcon name={server.name} handleClick={() => fetchServer(server.id)}>
                <ServerIcon image={server.image} name={server.name} />
              </SidebarIcon>
            )}
          />
        );
      })}
      <SidebarIcon name="Create your server" handleClick={() => showModal()}>
        <InteractionIcon name={'C'} />
      </SidebarIcon>
      <SidebarIcon name="Explore channels" handleClick={() => navigateTo('/messager')}>
        <InteractionIcon name={'+'} />
      </SidebarIcon>
    </div>
  );
};

export default Sidebar;
