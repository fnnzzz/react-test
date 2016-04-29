var BannerInfo = React.createClass({

    render: function() {
		return ( 
			<div class="bs-component">
	              <div class="jumbotron">
	                <h1>{ this.props.title }</h1>
	                <p>{ this.props.descr }</p>
	                <p><a class="btn btn-primary btn-lg">Learn more</a></p>
	              </div>
	        </div>
     );

    }
})