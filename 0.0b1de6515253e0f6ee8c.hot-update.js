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
	
	  _createClass(Item, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFjO0FBREgsTUFBYjtBQUhpQjtBQU1sQjs7Ozt5Q0FHbUI7QUFDbEIsWUFBSyxhQUFMLEdBQXFCLEVBQUUsR0FBRixDQUFNLHVEQUFOLEVBQStELFVBQVUsTUFBVixFQUFrQjs7QUFFdEcsY0FBSyxRQUFMLENBQWM7QUFDWix5QkFBYztBQURGLFVBQWQ7QUFJQyxRQU5tRixDQU1sRixJQU5rRixDQU03RSxJQU42RSxDQUEvRCxDQUFyQjtBQU9EOzs7b0NBRWM7QUFDYixlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxZQUF2QjtBQUNBLFdBQU0sWUFBWSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEdBQXhCLENBQTRCLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0I7QUFDbEUsZ0JBQVMsZ0RBQVUsS0FBTSxLQUFLLEtBQXJCLEVBQTZCLE1BQU8sSUFBcEMsR0FBVDtBQUNELFFBRmlCLENBQWxCOztBQUlBLGNBQU8sU0FBUDtBQUNEOzs7OEJBRVE7O0FBRVAsY0FDRTtBQUFBO1NBQUEsRUFBTyxXQUFNLCtCQUFiO1NBQ0U7QUFBQTtXQUFBLEVBQU8sSUFBRyxpQkFBVjtXQUNFO0FBQUE7YUFBQTthQUNFO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FERjthQUVFO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FGRjthQUdFO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FIRjthQUlFO0FBQUE7ZUFBQTtlQUFBO0FBQUE7QUFKRjtBQURGLFVBREY7U0FVRTtBQUFBO1dBQUE7V0FDSSxLQUFLLFlBQUw7QUFESjtBQVZGLFFBREY7QUFnQkQ7Ozs7R0EvQytCLGdCQUFNLFM7O21CQUFuQixJIiwiZmlsZSI6IjAuMGIxZGU2NTE1MjUzZTBmNmVlOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtU2hvdyBmcm9tICcuL0l0ZW0nO1xyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnJyxcclxuICAgIGluZm9UZXh0OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAxLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnJyxcclxuICAgIGluZm9UZXh0OiAnJyxcclxuICB9LCAgXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZWZhdWx0SXRlbXM6IGRlZmF1bHRJdGVtcyxcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L2FwaS5waHA/c2VsZWN0PWFsbCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGRlZmF1bHRJdGVtcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1zTGlzdDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG4gICAgICAgIDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Db3VudDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9