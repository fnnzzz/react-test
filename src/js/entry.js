import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import rootRoute from './pages/routes';
import '../index.html';
import '../css/main.css';


render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('react_app')
);