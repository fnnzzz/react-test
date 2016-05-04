webpackHotUpdate(0,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Item = __webpack_require__(172);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultItems = [{
	  index: 0,
	  title: '',
	  count: '0',
	  price: '',
	  infoText: ''
	}, {
	  index: 1,
	  title: '',
	  count: '0',
	  price: '',
	  infoText: ''
	}];
	
	var Item = function (_React$Component) {
	  _inherits(Item, _React$Component);
	
	  function Item(props) {
	    _classCallCheck(this, Item);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
	    _this.state = {
	      defaultItems: defaultItems
	    };
	    return _this;
	  }
	
	  // ajaxItems() {
	  //   this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	
	  //   this.setState({
	  //     defaultItems: result,
	  //   });
	
	  //   }.bind(this));
	  // }
	
	  _createClass(Item, [{
	    key: 'defaultItems',
	    value: function defaultItems() {
	      var itemsList = this.state.defaultItems.map(function (item, index) {
	        return _react2.default.createElement(_Item2.default, { key: item.index, item: item });
	      });
	
	      return itemsList;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'table',
	        { className: 'table table-hover table_items' },
	        _react2.default.createElement(
	          'thead',
	          { id: 'added_item_wrap' },
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              '#'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Title'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Count'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Price'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          this.defaultItems()
	        )
	      );
	    }
	  }]);
	
	  return Item;
	}(_react2.default.Component);
	
	exports.default = Item;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFjO0FBREgsTUFBYjtBQUhpQjtBQU1sQjs7Ozs7Ozs7Ozs7Ozs7b0NBYWM7QUFDYixXQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ2xFLGdCQUFTLGdEQUFVLEtBQU0sS0FBSyxLQUFyQixFQUE2QixNQUFPLElBQXBDLEdBQVQ7QUFDRCxRQUZpQixDQUFsQjs7QUFJQSxjQUFPLFNBQVA7QUFDRDs7OzhCQUVROztBQUVQLGNBQ0U7QUFBQTtTQUFBLEVBQU8sV0FBTSwrQkFBYjtTQUNFO0FBQUE7V0FBQSxFQUFPLElBQUcsaUJBQVY7V0FDRTtBQUFBO2FBQUE7YUFDRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBREY7YUFFRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBRkY7YUFHRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBSEY7YUFJRTtBQUFBO2VBQUE7ZUFBQTtBQUFBO0FBSkY7QUFERixVQURGO1NBVUU7QUFBQTtXQUFBO1dBQ0ksS0FBSyxZQUFMO0FBREo7QUFWRixRQURGO0FBZ0JEOzs7O0dBOUMrQixnQkFBTSxTOzttQkFBbkIsSSIsImZpbGUiOiIwLmQyZTIzNTk2NWY3YTkzODc0YWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbVNob3cgZnJvbSAnLi9JdGVtJztcclxuXHJcbmNvbnN0IGRlZmF1bHRJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbmRleDogMCxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvdW50OiAnMCcsXHJcbiAgICBwcmljZTogJycsXHJcbiAgICBpbmZvVGV4dDogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbmRleDogMSxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvdW50OiAnMCcsXHJcbiAgICBwcmljZTogJycsXHJcbiAgICBpbmZvVGV4dDogJycsXHJcbiAgfSwgIFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiBkZWZhdWx0SXRlbXMsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gYWpheEl0ZW1zKCkge1xyXG4gIC8vICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvYXBpLnBocD9zZWxlY3Q9YWxsJywgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICBkZWZhdWx0SXRlbXM6IHJlc3VsdCxcclxuICAvLyAgIH0pO1xyXG4gICAgXHJcbiAgLy8gICB9LmJpbmQodGhpcykpO1xyXG4gIC8vIH1cclxuXHJcbiAgZGVmYXVsdEl0ZW1zKCkge1xyXG4gICAgY29uc3QgaXRlbXNMaXN0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiAoIDxJdGVtU2hvdyBrZXk9eyBpdGVtLmluZGV4IH0gaXRlbT17IGl0ZW0gfS8+ICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXRlbXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlX2l0ZW1zXCI+XHJcbiAgICAgICAgPHRoZWFkIGlkPVwiYWRkZWRfaXRlbV93cmFwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgPHRoPkNvdW50PC90aD5cclxuICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgeyB0aGlzLmRlZmF1bHRJdGVtcygpIH1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1zL0l0ZW1zTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=