// map for show multiple different 
// items from json-object
var ItemsList = React.createClass({

    render: function() {
        
		var itemsList = this.props.items.map(function(item, index) {
		
			return (
				<ItemShow key={ item.index } item={ item }/>
			);
		
		})

		return ( 
			<table className="table table-hover table_items">
				<thead id="added_item_wrap">
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Count</th>
						<th>Price</th>
					</tr>
				</thead>
			
				<tbody id="insert_products">
					{itemsList}
				</tbody>
			</table>
     );

    }
})
