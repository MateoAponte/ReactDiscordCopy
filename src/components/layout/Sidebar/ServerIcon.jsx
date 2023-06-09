import React from 'react';

const ServerIcon = ({ image, name }) => {
  return (
    <div className="icon__background">
      <img src={image} alt={name} />
    </div>
  );
};

export default ServerIcon;
