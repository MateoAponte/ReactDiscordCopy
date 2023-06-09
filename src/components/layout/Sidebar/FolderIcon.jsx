import React, { useMemo, useState } from 'react';
import InteractionIcon from './InteractionIcon';

const FolderIcon = ({ agroupedServers, render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFolder = () => {
    return isOpen && <InteractionIcon name="I" />;
  };

  const servers = useMemo(() => agroupedServers, [agroupedServers]);

  return (
    <div className={`folder__icon ${isOpen ? 'folder__icon--open' : 'folder__icon--close'}`} onClick={() => setIsOpen(!isOpen)}>
      {openFolder()}
      {servers.map((server) => render(server))}
    </div>
  );
};

export default FolderIcon;
