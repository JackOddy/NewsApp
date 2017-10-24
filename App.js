import React from 'react';
import { Provider } from 'react-redux';

import store from './src/Store';
import Viewport from './src/Viewport';

export default () => (
    <Provider store={store}>
      <Viewport/>
    </Provider>
);

