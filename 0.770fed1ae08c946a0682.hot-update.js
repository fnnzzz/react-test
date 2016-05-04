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
	
	        this.setState({
	          defaultItems: result
	        });
	      }.bind(this));
	    }
	  }, {
	    key: 'defaultItems',
	    value: function defaultItems() {
	      console.log(this.state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxFQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxFQUpUO0FBS0UsYUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFjO0FBREgsTUFBYjs7QUFJQSxhQUFRLEdBQVIsQ0FBWSxNQUFLLEtBQUwsQ0FBVyxZQUF2QjtBQVBpQjtBQVFsQjs7Ozt5Q0FHbUI7QUFDbEIsWUFBSyxhQUFMLEdBQXFCLEVBQUUsR0FBRixDQUFNLHVEQUFOLEVBQStELFVBQVUsTUFBVixFQUFrQjs7QUFFdEcsY0FBSyxRQUFMLENBQWM7QUFDWix5QkFBYztBQURGLFVBQWQ7QUFJQyxRQU5tRixDQU1sRixJQU5rRixDQU03RSxJQU42RSxDQUEvRCxDQUFyQjtBQU9EOzs7b0NBRWM7QUFDYixlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0EsV0FBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsR0FBeEIsQ0FBNEIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNsRSxnQkFBUyxnREFBVSxLQUFNLEtBQUssS0FBckIsRUFBNkIsTUFBTyxJQUFwQyxHQUFUO0FBQ0QsUUFGaUIsQ0FBbEI7O0FBSUEsY0FBTyxTQUFQO0FBQ0Q7Ozs4QkFFUTs7QUFFUCxjQUNFO0FBQUE7U0FBQSxFQUFPLFdBQU0sK0JBQWI7U0FDRTtBQUFBO1dBQUEsRUFBTyxJQUFHLGlCQUFWO1dBQ0U7QUFBQTthQUFBO2FBQ0U7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQURGO2FBRUU7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUZGO2FBR0U7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUhGO2FBSUU7QUFBQTtlQUFBO2VBQUE7QUFBQTtBQUpGO0FBREYsVUFERjtTQVVFO0FBQUE7V0FBQTtXQUNJLEtBQUssWUFBTDtBQURKO0FBVkYsUUFERjtBQWdCRDs7OztHQWpEK0IsZ0JBQU0sUzs7bUJBQW5CLEkiLCJmaWxlIjoiMC43NzBmZWQxYWUwOGM5NDZhMDY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TaG93IGZyb20gJy4vSXRlbSc7XHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDAsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgaW5mb1RleHQ6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgaW5mb1RleHQ6ICcnLFxyXG4gIH0sICBcclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogZGVmYXVsdEl0ZW1zLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zKTtcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L2FwaS5waHA/c2VsZWN0PWFsbCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGRlZmF1bHRJdGVtcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3QgaXRlbXNMaXN0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiAoIDxJdGVtU2hvdyBrZXk9eyBpdGVtLmluZGV4IH0gaXRlbT17IGl0ZW0gfS8+ICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXRlbXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlX2l0ZW1zXCI+XHJcbiAgICAgICAgPHRoZWFkIGlkPVwiYWRkZWRfaXRlbV93cmFwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgPHRoPkNvdW50PC90aD5cclxuICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgeyB0aGlzLmRlZmF1bHRJdGVtcygpIH1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1zL0l0ZW1zTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=