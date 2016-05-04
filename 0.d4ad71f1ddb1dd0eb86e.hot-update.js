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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTyxFQUZUO0FBR0UsU0FBTyxHQUhUO0FBSUUsU0FBTyxFQUpUO0FBS0UsWUFBVTtBQUxaLEVBRG1CLEVBUW5CO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTyxFQUZUO0FBR0UsU0FBTyxHQUhUO0FBSUUsU0FBTyxFQUpUO0FBS0UsWUFBVTtBQUxaLEVBUm1CLENBQXJCOztLQWtCcUIsSTs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1RkFDWixLQURZOztBQUloQixTQUFLLFFBQUwsQ0FBYztBQUNaLGtCQUFjO0FBREYsSUFBZDs7QUFLQSxTQUFLLGFBQUwsR0FBcUIsRUFBRSxHQUFGLENBQU0sdURBQU4sRUFBK0QsVUFBVSxNQUFWLEVBQWtCOztBQUV0RyxTQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFjO0FBREYsS0FBZDtBQUdDLElBTG1GLENBS2xGLElBTGtGLE9BQS9ELENBQXJCOztBQVRnQjtBQWdCbEI7Ozs7a0NBRWM7QUFDZCxRQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ25FLFlBQVMsZ0RBQVUsS0FBTSxLQUFLLEtBQXJCLEVBQTZCLE1BQU8sSUFBcEMsR0FBVDtBQUNBLEtBRmlCLENBQWxCOztBQUlBLFdBQU8sU0FBUDtBQUNBOzs7NEJBRVE7O0FBRVIsV0FDQztBQUFBO0tBQUEsRUFBTyxXQUFNLCtCQUFiO0tBQ0M7QUFBQTtNQUFBLEVBQU8sSUFBRyxpQkFBVjtNQUNDO0FBQUE7T0FBQTtPQUNDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFERDtPQUVDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFGRDtPQUdDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFIRDtPQUlDO0FBQUE7UUFBQTtRQUFBO0FBQUE7QUFKRDtBQURELE1BREQ7S0FVQztBQUFBO01BQUE7TUFDRyxLQUFLLFlBQUw7QUFESDtBQVZELEtBREQ7QUFnQkE7Ozs7R0E3Q2dDLGdCQUFNLFM7O21CQUFuQixJIiwiZmlsZSI6IjAuZDRhZDcxZjFkZGIxZGQwZWI4NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtU2hvdyBmcm9tICcuL0l0ZW0nO1xyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnJyxcclxuICAgIGluZm9UZXh0OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAxLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnJyxcclxuICAgIGluZm9UZXh0OiAnJyxcclxuICB9LCAgXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogZGVmYXVsdEl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L2FwaS5waHA/c2VsZWN0PWFsbCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZGVmYXVsdEl0ZW1zKCkge1xyXG5cdFx0Y29uc3QgaXRlbXNMaXN0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiAoIDxJdGVtU2hvdyBrZXk9eyBpdGVtLmluZGV4IH0gaXRlbT17IGl0ZW0gfS8+ICk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaXRlbXNMaXN0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlX2l0ZW1zXCI+XHJcblx0XHRcdFx0PHRoZWFkIGlkPVwiYWRkZWRfaXRlbV93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlRpdGxlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNvdW50PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlByaWNlPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0eyB0aGlzLmRlZmF1bHRJdGVtcygpIH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1zL0l0ZW1zTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=