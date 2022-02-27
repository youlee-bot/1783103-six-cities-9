import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import {useState, ChangeEvent} from 'react';

import {offers} from './mock/offers';

const settings = {
  foundResults: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} foundResults={settings.foundResults}/>
  </React.StrictMode>,
  document.getElementById('root'));
