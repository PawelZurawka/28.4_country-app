import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';
import DevTools from './DevTools';
import Navigation from './presentational/navigation.component';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Navigation}></Route>
      <DevTools />
    </Router>
  </Provider>,
  document.getElementById('root')
);
