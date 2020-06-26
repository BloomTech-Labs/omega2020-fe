import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './auth_config.json';
import history from './utils/history';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <BrowserRouter
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
