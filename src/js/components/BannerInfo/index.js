import React from 'react';


export default class BannerInfo extends React.Component {

    render() {
		return ( 
			<div class="bs-component">
				<div class="jumbotron">
					<h1>{ this.props.title }</h1>
					<p>{ this.props.descr }</p>
				</div>
			</div>	
     	);
	}

}