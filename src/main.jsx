import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-mxk2ja4mv37jbjyq.us.auth0.com"
    clientId="TFw7sD675FvdzuhlsAFrTiXn9drRkAch"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);