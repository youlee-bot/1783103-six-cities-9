import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffersAction} from '../src/store/api-actions';


import App from './components/app/app';
import {reviews} from  './mock/reviews';

store.dispatch(fetchOffersAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
