import React, { PropTypes } from 'react';
import Nav from '../components/Nav';

export default class Application extends React.Component {

	propTypes() {
    	children: PropTypes.node
  	}
	render() {
		<div>
			<Nav />
			{props.children}
		</div>
	}
}