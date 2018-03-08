// Deps ==========================================
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './containers/App';
 
// 
let store = createStore(todoApp)
 
// 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Enabling HMR(Hot module replacement) ==========
module.hot.accept();
