var ItemInfo = React.createClass({
	render: function() {
		return (
			<div>
				<h1>You purchased a { this.props.title }</h1>	
				<br /><br />
				<h3>Info about { this.props.title }:</h3>
				<p>{ this.props.infoText }</p>
			</div>
		)
	}
})


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

		ReactDOM.render(
			<ItemInfo infoText={ this.props.item.infoText } title={this.props.item.title} />,  
			document.getElementById('info_about_item')
		);

		if(orderedItemCount < 0) {
			return 
		}		

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
				<td id="buy"><span>{ this.state.soldText }</span><span id="buy_icon" data-remodal-target="item_info" onClick={this.orderItem} style={iconCursorStyle} className="glyphicon glyphicon-shopping-cart"></span></td>
			</tr>
		)
  }

})


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





var defaultItems = [
  {
    index: 123,
    title: 'Book',
    count: '20',
    price: '30 $',
    infoText: 'A book is a set of written, printed, illustrated, or blank sheets, made of ink, paper, parchment, or other materials, fastened together to hinge at one side. A single sheet within a book is a leaf, and each side of a leaf is a page. A set of text-filled or illustrated pages produced in electronic format is known as an electronic book, or e-book.',
  }, 

  {
    index: 222,
    title: 'Board Game',
    count: '3',
    price: '10 $',
    infoText: 'A board game is a tabletop game that involves counters or pieces moved or placed on a pre-marked surface or "board", according to a set of rules. Some games are based on pure strategy, but many contain an element of chance; and some are purely chance, with no element of skill.',
  },

  {
    index: 333,
    title: 'Keyboard',
    count: '5',
    price: '45 $',
    infoText: 'In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a mechanical lever or electronic switch. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input device for computers.',
  },

  {
    index: 335,
    title: 'Tea',
    count: '10',
    price: '2 $',
    infoText: 'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; some teas, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour,[5] while others have vastly different profiles that include sweet, nutty, floral or grassy notes.',
  },

  {
    index: 444,
    title: 'LCD Monitor',
    count: '1',
    price: '300 $',
    infoText: 'A liquid-crystal display (LCD) is a flat-panel display or other electronic visual display that uses the light-modulating properties of liquid crystals. Liquid crystals do not emit light directly.[1]',
  }
  

];




ReactDOM.render(
	<ItemsList items={defaultItems} />,  
	document.getElementById('items_table')
);















// var FormControls = React.createClass({
  
//   addItem: function() {
//     console.log('add item');
//   },

//   render: function() {
//     return (
//       <div className="col-lg-12">
//         <button onClick={this.addItem} data-remodal-action="confirm" className="remodal-confirm">OK</button>
//         <button onClick={this.cancelAddItem} data-remodal-action="cancel" className="remodal-cancel">Cancel</button>
//       </div>
//     )
//   }
// })



// var AddItem = React.createClass({
//   getInitialState: function() {
//     return {counter: 0}
//   },
//   additem: function(e) {

//   },
//   render: function() {
//     return (
//       <div className="col-lg-12">
//         <button onClick={this.cancelAddItem} data-remodal-action="cancel" className="remodal-cancel">Cancel</button>
//         <button onClick={this.addItem} data-remodal-action="confirm" className="remodal-confirm">OK</button>
//       </div>
//     )
//   }
// })

// ReactDOM.render(
//   <AddItem />,
//   document.getElementById('controls_add_item')
// );