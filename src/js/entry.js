import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import rootRoute from './pages/routes';
import '../index.html';

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('react_app')
);