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
	}];
	
	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);
	
		function Item(props) {
			_classCallCheck(this, Item);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
			_this.setState({
				defaultItems: defaultItems
			});
	
			_this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	
				this.setState({
					defaultItems: result
				});
			}.bind(_this));
	
			return _this;
		}
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTyxFQUZUO0FBR0UsU0FBTyxHQUhUO0FBSUUsU0FBTyxFQUpUO0FBS0UsWUFBVTtBQUxaLEVBRG1CLENBQXJCOztLQVdxQixJOzs7QUFDcEIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNaLEtBRFk7O0FBSWhCLFNBQUssUUFBTCxDQUFjO0FBQ1osa0JBQWM7QUFERixJQUFkOztBQUtBLFNBQUssYUFBTCxHQUFxQixFQUFFLEdBQUYsQ0FBTSx1REFBTixFQUErRCxVQUFVLE1BQVYsRUFBa0I7O0FBRXRHLFNBQUssUUFBTCxDQUFjO0FBQ1osbUJBQWM7QUFERixLQUFkO0FBR0MsSUFMbUYsQ0FLbEYsSUFMa0YsT0FBL0QsQ0FBckI7O0FBVGdCO0FBZ0JsQjs7OztrQ0FFYztBQUNkLFFBQU0sWUFBWSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEdBQXhCLENBQTRCLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0I7QUFDbkUsWUFBUyxnREFBVSxLQUFNLEtBQUssS0FBckIsRUFBNkIsTUFBTyxJQUFwQyxHQUFUO0FBQ0EsS0FGaUIsQ0FBbEI7O0FBSUEsV0FBTyxTQUFQO0FBQ0E7Ozs0QkFFUTs7QUFFUixXQUNDO0FBQUE7S0FBQSxFQUFPLFdBQU0sK0JBQWI7S0FDQztBQUFBO01BQUEsRUFBTyxJQUFHLGlCQUFWO01BQ0M7QUFBQTtPQUFBO09BQ0M7QUFBQTtRQUFBO1FBQUE7QUFBQSxRQUREO09BRUM7QUFBQTtRQUFBO1FBQUE7QUFBQSxRQUZEO09BR0M7QUFBQTtRQUFBO1FBQUE7QUFBQSxRQUhEO09BSUM7QUFBQTtRQUFBO1FBQUE7QUFBQTtBQUpEO0FBREQsTUFERDtLQVVDO0FBQUE7TUFBQTtNQUNHLEtBQUssWUFBTDtBQURIO0FBVkQsS0FERDtBQWdCQTs7OztHQTdDZ0MsZ0JBQU0sUzs7bUJBQW5CLEkiLCJmaWxlIjoiMC4zOTZjYjZiMmQ5N2VhYmI5ZWMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TaG93IGZyb20gJy4vSXRlbSc7XHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDAsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgaW5mb1RleHQ6ICcnLFxyXG4gIH0sIFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZWZhdWx0SXRlbXM6IGRlZmF1bHRJdGVtcyxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSAkLmdldCgnaHR0cDovL2xvY2FsaG9zdC9seW9raGEvcmVhY3RfdGVzdC9hcGkucGhwP3NlbGVjdD1hbGwnLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogcmVzdWx0LFxyXG4gICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuXHR9XHJcblxyXG5cdGRlZmF1bHRJdGVtcygpIHtcclxuXHRcdGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zTGlzdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG5cdFx0XHRcdDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRsZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Db3VudDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdCk7XHJcblx0fVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9