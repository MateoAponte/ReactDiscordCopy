import React, { useMemo, useState } from 'react';
import InteractionIcon from './InteractionIcon';

const FolderIcon = ({ agroupedServers, render }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openFolder = () => {
    return isOpen && <InteractionIcon name="I" />;
  };

  const servers = useMemo(() => agroupedServers, [agroupedServers]);

  return (
    <div
      className={`sidebar__item ${!isOpen && isActive ? 'sidebar__item--is-active' : ''} ${isOpen ? 'sidebar__item--is-folder' : ''}`}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <div className={`folder__icon ${isOpen ? 'folder__icon--open' : 'folder__icon--close'}`} onClick={() => setIsOpen(!isOpen)}>
        {openFolder()}
        {servers.map((server) => render(server))}
      </div>
    </div>
  );
};

export default FolderIcon;
