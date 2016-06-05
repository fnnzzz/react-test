import React from 'react';
import { render } from 'react-dom';
import ItemInfo from '../Remodal';


export default class ItemShow extends React.Component {

	constructor(props) {
		super(props);


		if(this.props.item.count == 0) {
			this.state = {
				count: 0,
				disableClass: 'disabled',
				soldText: 'SOLD OUT',
			}
		}

		else {
			this.state = {
				count: this.props.item.count,
				disableClass: '',
				soldText: '',
			}
		}
	}

	orderItem() {

		const items = JSON.parse(localStorage.defaultItems);

		for (var i = 0; i < items.length; i++) {
		   if(this.props.item.title === items[i].title){
		       items[i].count -= 1; 
		       break; 
		   }
		}

		localStorage.setItem("defaultItems", JSON.stringify(items)); 


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
				soldText: 'SOLD OUT',
			})
		}

		this.setState({
			count: orderedItemCount,
		})				
		
	}

	render() {

		const iconCursorStyle = {cursor: 'pointer'};

		const authStatus = localStorage['loggedIn'];

		return (
			<tr class={this.state.disableClass}>
				<td>{this.props.item.index}</td>
				<td>{this.props.item.title}</td>
				<td>{this.state.count}</td>
				<td>{this.props.item.price}</td>
				<td>
					<span>{ this.state.soldText }</span>

					{ authStatus ?
						<span 
							id="buy_icon" 
							data-remodal-target="item_info" 
							onClick={this.orderItem.bind(this)} 
							style={iconCursorStyle} 
							class="glyphicon glyphicon-shopping-cart">
						</span>
					:  
						<span 
							data-remodal-target="registration_need"
							style={iconCursorStyle} 
							class="glyphicon glyphicon-exclamation-sign">
						</span>
					}
				</td>
			</tr>
		);
	}
}

