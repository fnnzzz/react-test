import React from 'react';

export default class ItemInfo extends React.Component {

	render() {
		return (
			<div>
				<h1>Successful purchase</h1>	
				<br /><br />
				<h3>Info about { this.props.title }:</h3>
				<p>{ this.props.infoText }</p>
			</div>
		)
	}

}