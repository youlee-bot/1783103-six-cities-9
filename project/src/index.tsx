import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';

import App from './components/app/app';

import {offers} from './mock/offers';
import {reviews} from  './mock/reviews';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
