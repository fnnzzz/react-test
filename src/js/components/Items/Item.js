import React from 'react';
import { render } from 'react-dom';
import ItemInfo from '../Remodal';


export default class ItemShow extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: this.props.item.count,
			disableClass: '',
			soldText: '',
		}
	}

	orderItem() {

		console.log(this.state.count);
		const orderedItemCount = this.state.count-1;


		if(orderedItemCount < 0) {
			return 
		}		

		render(
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
		
	}

	render() {

		const iconCursorStyle = {cursor: 'pointer'};

		return (
			<tr class={this.state.disableClass}>
				<td>{this.props.item.index}</td>
				<td>{this.props.item.title}</td>
				<td>{this.state.count}</td>
				<td>{this.props.item.price}</td>
				<td>
					<span>{ this.state.soldText }</span>
					<span 
						id="buy_icon" 
						data-remodal-target="item_info" 
						onClick={this.orderItem.bind(this)} 
						style={iconCursorStyle} 
						class="glyphicon glyphicon-shopping-cart">
					</span>
				</td>
			</tr>
		);
	}
}

