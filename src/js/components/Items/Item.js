// show one product (<tr>) and counter
// of available this product
var ItemShow = React.createClass({
	
	getInitialState() {
		return {
			count: this.props.item.count,
			disableClass: '',
			soldText: '',
		};
	},

	orderItem() {		

		var orderedItemCount = this.state.count-1;


		if(orderedItemCount < 0) {
			return 
		}		

		ReactDOM.render(
			<ItemInfo infoText={ this.props.item.infoText } title={this.props.item.title} />,  
			document.getElementById('info_about_item')
		);

		if(orderedItemCount == 0) {
			this.setState({
				disableClass: 'disabled',
				remodalAction: '',
				soldText: 'SOLD OUT',
			})		
		}

		this.setState({
			count: orderedItemCount,
		})				
		
	},

	render: function() {

		var iconCursorStyle = {cursor: 'pointer'};

		return (
			<tr id="itemClass" className={this.state.disableClass}>
				<td>{this.props.item.index}</td>
				<td>{this.props.item.title}</td>
				<td>{this.state.count}</td>
				<td>{this.props.item.price}</td>
				<td id="buy">
					<span>{ this.state.soldText }</span>
					<span id="buy_icon" data-remodal-target="item_info" onClick={this.orderItem} style={iconCursorStyle} className="glyphicon glyphicon-shopping-cart"></span>
				</td>
			</tr>
		)
  }

})
