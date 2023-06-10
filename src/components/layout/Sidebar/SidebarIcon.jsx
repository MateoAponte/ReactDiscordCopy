import React, { useState } from 'react';

const SidebarIcon = ({ children, handleClick }) => {
  const [isActive, setIsActive] = useState('isActive');

  return (
    <div
      className={['sidebar__icon', isActive && 'sidebar__icon--is-active']}
      onClick={handleClick}
      onMouseOver={setIsActive(true)}
      onMouseLeave={() => {
        setIsActive(false);
      }}>
      {children}
    </div>
  );
};

export default SidebarIcon;
