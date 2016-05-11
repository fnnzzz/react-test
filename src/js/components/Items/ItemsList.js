import React from 'react';
import ItemShow from './Item';
import ItemsStore from '../../store';

export default class Item extends React.Component {
	constructor(props) {
		super(props);

        let defaultItems = ItemsStore.getAllItems();
		let orderedCount = ItemsStore.getOrderedCount();

        if(!localStorage.getItem("defaultItems")) {
            localStorage.setItem("defaultItems", JSON.stringify(defaultItems));
        }

        defaultItems = JSON.parse(localStorage.getItem("defaultItems"));


		this.state = {
            defaultItems,
			orderedCount,
		};
	}

	defaultItems() {

		const itemsList = this.state.defaultItems.map(function(item, index) {
			return ( <ItemShow key={ item.index } item={ item }/> );
		});

		return itemsList;
	}

	getCountOrdered() {
		this.setState({
			orderedCount: ItemsStore.getOrderedCount();
		});
	}

	componentWillMount() {
		ItemsStore.on("change", this.getCountOrdered);
	}

	componentWillUnmount() {
		ItemsStore.removeListener("change", this.getCountOrdered);
	}


	render() {

		return (
			<table class="table table-hover table_items">
				<thead id="added_item_wrap">
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Count</th>
						<th>Price</th>
					</tr>
				</thead>
			
				<tbody>
					{ this.defaultItems() }
				</tbody>
			</table>
		);
	}
}