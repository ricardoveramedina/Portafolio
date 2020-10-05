import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: add link to LinkedIn
// TODO: add link to email
// TODO: add link to jobs
// TODO: add projects
// TODO: add footer "number", "email", "location"
// TODO: add hamburguer menu

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
