import React from 'react';

const SidebarIcon = ({ children, handleClick }) => {
  return (
    <div className="sidebar__icon" onClick={handleClick}>
      {children}
    </div>
  );
};

export default SidebarIcon;
