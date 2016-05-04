import React, { PropTypes } from 'react';
import Nav from '../components/Nav';

const App = (props) => (
  <main>
    <Nav />
    {props.children}
  </main>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;