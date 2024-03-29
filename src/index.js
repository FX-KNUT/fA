import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App, { store } from './Components/App';
import './index.css';

// starting command = npm run akrom

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);