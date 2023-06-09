import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, compose, legacy_createStore } from 'redux';

import { UserContextProvider } from './context/UserContext.js';
import { asynchronic } from './middlewares/asynchronic.js';
import thunk from 'redux-thunk';

import { rootReducer } from './services/reducers/root.js';

import App from './App.jsx';

import './assets/style/_index.scss';

import { Provider } from 'react-redux';
const composeEnhancers = compose(applyMiddleware(thunk, asynchronic));

const store = legacy_createStore(rootReducer, composeEnhancers);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </UserContextProvider>
  </React.StrictMode>,
);

