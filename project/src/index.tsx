import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorMessage from './components/error-message/errorMessage';

import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
