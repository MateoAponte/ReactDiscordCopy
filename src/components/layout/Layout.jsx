import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import LeftPanel from './LeftPanel';
import Profile from './Profile';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <LeftPanel>
        <Profile />
      </LeftPanel>
      <div className="chat-container">
        <section className="chat-container__section">
          <Header></Header>
        </section>
        <div className="chat-divider"></div>
        <section className="chat-container__section">
          <MainContent></MainContent>
          <RightPanel></RightPanel>
        </section>
      </div>
    </>
  );
};

export default Layout;
