import React from 'react';
import { Provider } from 'react-redux';

import store from './src/Store';
import App from './src/Routes';

export default () => (
    <Provider store={store}>
      <App />
    </Provider>
);

