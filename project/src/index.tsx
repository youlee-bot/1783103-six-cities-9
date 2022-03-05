import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {offers} from './mock/offers';
import {reviews} from  './mock/reviews';

const settings = {
  foundResults: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} foundResults={settings.foundResults}/>
  </React.StrictMode>,
  document.getElementById('root'));
