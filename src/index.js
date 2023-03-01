import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store'
import { Provider } from 'react-redux'
import Assessment from './components/Assessment';

const root = ReactDOM.createRoot(document.getElementById('main-content'));
root.render(
  <Provider store={store}>
    <Assessment />
  </Provider>
);
