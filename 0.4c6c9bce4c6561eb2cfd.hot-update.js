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
	
	    console.log(_this.state.defaultItems);
	    return _this;
	  }
	
	  _createClass(Item, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	
	        Object.keys(result).map(function (k) {
	          return obj[k];
	        });
	
	        this.setState({
	          defaultItems: result
	        });
	      }.bind(this));
	    }
	  }, {
	    key: 'defaultItems',
	    value: function defaultItems() {
	      console.log(this.state.defaultItems);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFjO0FBREgsTUFBYjs7QUFJQSxhQUFRLEdBQVIsQ0FBWSxNQUFLLEtBQUwsQ0FBVyxZQUF2QjtBQVBpQjtBQVFsQjs7Ozt5Q0FHbUI7QUFDbEIsWUFBSyxhQUFMLEdBQXFCLEVBQUUsR0FBRixDQUFNLHVEQUFOLEVBQStELFVBQVUsTUFBVixFQUFrQjs7QUFFdEcsZ0JBQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsR0FBcEIsQ0FBd0IsVUFBUyxDQUFULEVBQVk7QUFBRSxrQkFBTyxJQUFJLENBQUosQ0FBUDtBQUFlLFVBQXJEOztBQUVBLGNBQUssUUFBTCxDQUFjO0FBQ1oseUJBQWM7QUFERixVQUFkO0FBSUMsUUFSbUYsQ0FRbEYsSUFSa0YsQ0FRN0UsSUFSNkUsQ0FBL0QsQ0FBckI7QUFTRDs7O29DQUVjO0FBQ2IsZUFBUSxHQUFSLENBQVksS0FBSyxLQUFMLENBQVcsWUFBdkI7QUFDQSxXQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ2xFLGdCQUFTLGdEQUFVLEtBQU0sS0FBSyxLQUFyQixFQUE2QixNQUFPLElBQXBDLEdBQVQ7QUFDRCxRQUZpQixDQUFsQjs7QUFJQSxjQUFPLFNBQVA7QUFDRDs7OzhCQUVROztBQUVQLGNBQ0U7QUFBQTtTQUFBLEVBQU8sV0FBTSwrQkFBYjtTQUNFO0FBQUE7V0FBQSxFQUFPLElBQUcsaUJBQVY7V0FDRTtBQUFBO2FBQUE7YUFDRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBREY7YUFFRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBRkY7YUFHRTtBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBSEY7YUFJRTtBQUFBO2VBQUE7ZUFBQTtBQUFBO0FBSkY7QUFERixVQURGO1NBVUU7QUFBQTtXQUFBO1dBQ0ksS0FBSyxZQUFMO0FBREo7QUFWRixRQURGO0FBZ0JEOzs7O0dBbkQrQixnQkFBTSxTOzttQkFBbkIsSSIsImZpbGUiOiIwLjRjNmM5YmNlNGM2NTYxZWIyY2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbVNob3cgZnJvbSAnLi9JdGVtJztcclxuXHJcbmNvbnN0IGRlZmF1bHRJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbmRleDogMCxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvdW50OiAnMCcsXHJcbiAgICBwcmljZTogJycsXHJcbiAgICBpbmZvVGV4dDogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbmRleDogMSxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvdW50OiAnMCcsXHJcbiAgICBwcmljZTogJycsXHJcbiAgICBpbmZvVGV4dDogJycsXHJcbiAgfSwgIFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiBkZWZhdWx0SXRlbXMsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvYXBpLnBocD9zZWxlY3Q9YWxsJywgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkubWFwKGZ1bmN0aW9uKGspIHsgcmV0dXJuIG9ialtrXSB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGRlZmF1bHRJdGVtcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1zTGlzdDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG4gICAgICAgIDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Db3VudDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9