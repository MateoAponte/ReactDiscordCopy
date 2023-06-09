import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src={user.image} alt="" className="profile__image" />
        <div className={`profile__status profile__status--${user.status}`}></div>
      </div>
      <div className="profile__info">
        <span className="profile__nickname">{user.nickname}</span>
        <span className="profile__id">{user.id}</span>
      </div>
      <div className="profile__properties">
        <span className="profile__icon profile__audio"></span>
        <span className="profile__icon profile__listen"></span>
        <span className="profile__icon profile__settings"></span>
      </div>
    </div>
  );
};

export default Profile;
