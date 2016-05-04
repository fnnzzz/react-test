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
	
	        console.log(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFjO0FBREgsTUFBYjs7QUFJQSxhQUFRLEdBQVIsQ0FBWSxNQUFLLEtBQUwsQ0FBVyxZQUF2QjtBQVBpQjtBQVFsQjs7Ozt5Q0FHbUI7QUFDbEIsWUFBSyxhQUFMLEdBQXFCLEVBQUUsR0FBRixDQUFNLHVEQUFOLEVBQStELFVBQVUsTUFBVixFQUFrQjs7QUFFdEcsaUJBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxjQUFLLFFBQUwsQ0FBYztBQUNaLHlCQUFjO0FBREYsVUFBZDtBQUlDLFFBUG1GLENBT2xGLElBUGtGLENBTzdFLElBUDZFLENBQS9ELENBQXJCO0FBUUQ7OztvQ0FFYztBQUNiLGVBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLFlBQXZCO0FBQ0EsV0FBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsR0FBeEIsQ0FBNEIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNsRSxnQkFBUyxnREFBVSxLQUFNLEtBQUssS0FBckIsRUFBNkIsTUFBTyxJQUFwQyxHQUFUO0FBQ0QsUUFGaUIsQ0FBbEI7O0FBSUEsY0FBTyxTQUFQO0FBQ0Q7Ozs4QkFFUTs7QUFFUCxjQUNFO0FBQUE7U0FBQSxFQUFPLFdBQU0sK0JBQWI7U0FDRTtBQUFBO1dBQUEsRUFBTyxJQUFHLGlCQUFWO1dBQ0U7QUFBQTthQUFBO2FBQ0U7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQURGO2FBRUU7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUZGO2FBR0U7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUhGO2FBSUU7QUFBQTtlQUFBO2VBQUE7QUFBQTtBQUpGO0FBREYsVUFERjtTQVVFO0FBQUE7V0FBQTtXQUNJLEtBQUssWUFBTDtBQURKO0FBVkYsUUFERjtBQWdCRDs7OztHQWxEK0IsZ0JBQU0sUzs7bUJBQW5CLEkiLCJmaWxlIjoiMC5lYTI3MWQxMjM2OTBhYzdlZjk0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TaG93IGZyb20gJy4vSXRlbSc7XHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDAsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgaW5mb1RleHQ6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgaW5mb1RleHQ6ICcnLFxyXG4gIH0sICBcclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogZGVmYXVsdEl0ZW1zLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zKTtcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L2FwaS5waHA/c2VsZWN0PWFsbCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogcmVzdWx0LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0SXRlbXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlZmF1bHRJdGVtcyk7XHJcbiAgICBjb25zdCBpdGVtc0xpc3QgPSB0aGlzLnN0YXRlLmRlZmF1bHRJdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuICggPEl0ZW1TaG93IGtleT17IGl0ZW0uaW5kZXggfSBpdGVtPXsgaXRlbSB9Lz4gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpdGVtc0xpc3Q7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGVfaXRlbXNcIj5cclxuICAgICAgICA8dGhlYWQgaWQ9XCJhZGRlZF9pdGVtX3dyYXBcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+Q291bnQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICBcclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7IHRoaXMuZGVmYXVsdEl0ZW1zKCkgfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG4gIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvSXRlbXMvSXRlbXNMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==