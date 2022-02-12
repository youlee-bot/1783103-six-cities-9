import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const settings = {
  foundResults: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App foundResults={settings.foundResults}/>
  </React.StrictMode>,
  document.getElementById('root'));
