import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import rootRoute from './pages/routes';
import MainPage from './pages/Main';
import AboutPage from './pages/About';


render(
  <Router history={browserHistory}>
	<Route path="/" component={MainPage} />
  </Router>,
  document.getElementById('react_app')
);