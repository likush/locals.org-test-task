import React from 'react';
import {Provider} from 'react-redux';
import store from './src/stores/store';
import App from './src/components/App';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
