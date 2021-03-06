import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('mount')
);

if (module.hot) {
  module.hot.accept('containers/App'.default, () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('mount')
    );
  });
}
