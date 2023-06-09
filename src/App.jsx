import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { UserContext } from './context/UserContext';

import routes from './routes/routes';
import { useContext } from 'react';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(UserContext);

  useEffect(() => {
    if (routes.findIndex((route) => route.path === location.pathname) === -1) {
      navigate('/server');
    }
  }, [location]);

  return (
    <div className={`discord-container ${theme}-theme`}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
