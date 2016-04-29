// open modal-window with buy-status
// and information about product
var ItemInfo = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Successful purchase</h1>	
				<br /><br />
				<h3>Info about { this.props.title }:</h3>
				<p>{ this.props.infoText }</p>
			</div>
		)
	}
})