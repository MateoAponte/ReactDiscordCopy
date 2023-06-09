import React from 'react';

const LeftPanel = ({ children }) => {
  return (
    <div className="left-panel">
      <div className="left-panel__content"></div>
      {children}
    </div>
  );
};

export default LeftPanel;
