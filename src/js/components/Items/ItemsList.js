import React from 'react';
import ItemShow from './Item';

const defaultItems = [
  {
    index: 0,
    title: '',
    count: '0',
    price: '',
    infoText: '',
  },
  {
    index: 1,
    title: '',
    count: '0',
    price: '',
    infoText: '',
  },  

];

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultItems: defaultItems,
    }

    console.log(this.state.defaultItems);
  }


  componentDidMount() {
    this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {

    console.log(result);
    this.setState({
      defaultItems: result,
    });
    
    }.bind(this));
  }

  defaultItems() {
    const itemsList = this.state.defaultItems.map(function(item, index) {
      return ( <ItemShow key={ item.index } item={ item }/> );
    });

    return itemsList;
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