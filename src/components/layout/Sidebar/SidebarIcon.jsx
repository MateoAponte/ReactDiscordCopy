import React, { useState } from 'react';

const SidebarIcon = ({ children, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`sidebar__item ${isActive ? 'sidebar__item--is-active' : ''}`}>
      <div className="sidebar__icon" onClick={handleClick} onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
        {children}
      </div>
    </div>
  );
};

export default SidebarIcon;
