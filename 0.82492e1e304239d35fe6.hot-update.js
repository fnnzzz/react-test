webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Item = __webpack_require__(246);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// const defaultItems = [
	//   {
	//     index: 1,
	//     title: 'Book',
	//     count: '0',
	//     price: '30 $',
	//     infoText: 'A book is a set of written, printed, illustrated, or blank sheets, made of ink, paper, parchment, or other materials, fastened together to hinge at one side. A single sheet within a book is a leaf, and each side of a leaf is a page. A set of text-filled or illustrated pages produced in electronic format is known as an electronic book, or e-book.',
	//   },
	
	//   {
	//     index: 2,
	//     title: 'Board Game',
	//     count: '3',
	//     price: '10 $',
	//     infoText: 'A board game is a tabletop game that involves counters or pieces moved or placed on a pre-marked surface or "board", according to a set of rules. Some games are based on pure strategy, but many contain an element of chance; and some are purely chance, with no element of skill.',
	//   },
	
	//   {
	//     index: 3,
	//     title: 'Keyboard',
	//     count: '5',
	//     price: '45 $',
	//     infoText: 'In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a mechanical lever or electronic switch. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input device for computers.',
	//   },
	
	//   {
	//     index: 4,
	//     title: 'Tea',
	//     count: '10', 
	//     price: '2 $',
	//     infoText: 'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; some teas, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour,[5] while others have vastly different profiles that include sweet, nutty, floral or grassy notes.',
	//   },
	
	//   {
	//     index: 5,
	//     title: 'LCD Monitor',
	//     count: '1',
	//     price: '300 $',
	//     infoText: 'A liquid-crystal display (LCD) is a flat-panel display or other electronic visual display that uses the light-modulating properties of liquid crystals. Liquid crystals do not emit light directly.[1]',
	//   }
	
	// ];
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZDcUIsSTs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1RkFDWixLQURZOztBQUdsQixTQUFLLEtBQUwsR0FBYTtBQUNaO0FBRFksSUFBYjtBQUhrQjtBQU1sQjs7OztrQ0FFYzs7QUFFZCxRQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ25FLFlBQVMsZ0RBQVUsS0FBTSxLQUFLLEtBQXJCLEVBQTZCLE1BQU8sSUFBcEMsR0FBVDtBQUNBLEtBRmlCLENBQWxCOztBQUlBLFdBQU8sU0FBUDtBQUNBOzs7NEJBRVE7O0FBRVIsV0FDQztBQUFBO0tBQUEsRUFBTyxXQUFNLCtCQUFiO0tBQ0M7QUFBQTtNQUFBLEVBQU8sSUFBRyxpQkFBVjtNQUNDO0FBQUE7T0FBQTtPQUNDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFERDtPQUVDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFGRDtPQUdDO0FBQUE7UUFBQTtRQUFBO0FBQUEsUUFIRDtPQUlDO0FBQUE7UUFBQTtRQUFBO0FBQUE7QUFKRDtBQURELE1BREQ7S0FVQztBQUFBO01BQUE7TUFDRyxLQUFLLFlBQUw7QUFESDtBQVZELEtBREQ7QUFnQkE7Ozs7R0FwQ2dDLGdCQUFNLFM7O21CQUFuQixJIiwiZmlsZSI6IjAuODI0OTJlMWUzMDQyMzlkMzVmZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtU2hvdyBmcm9tICcuL0l0ZW0nO1xyXG5cclxuLy8gY29uc3QgZGVmYXVsdEl0ZW1zID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGluZGV4OiAxLFxyXG4vLyAgICAgdGl0bGU6ICdCb29rJyxcclxuLy8gICAgIGNvdW50OiAnMCcsXHJcbi8vICAgICBwcmljZTogJzMwICQnLFxyXG4vLyAgICAgaW5mb1RleHQ6ICdBIGJvb2sgaXMgYSBzZXQgb2Ygd3JpdHRlbiwgcHJpbnRlZCwgaWxsdXN0cmF0ZWQsIG9yIGJsYW5rIHNoZWV0cywgbWFkZSBvZiBpbmssIHBhcGVyLCBwYXJjaG1lbnQsIG9yIG90aGVyIG1hdGVyaWFscywgZmFzdGVuZWQgdG9nZXRoZXIgdG8gaGluZ2UgYXQgb25lIHNpZGUuIEEgc2luZ2xlIHNoZWV0IHdpdGhpbiBhIGJvb2sgaXMgYSBsZWFmLCBhbmQgZWFjaCBzaWRlIG9mIGEgbGVhZiBpcyBhIHBhZ2UuIEEgc2V0IG9mIHRleHQtZmlsbGVkIG9yIGlsbHVzdHJhdGVkIHBhZ2VzIHByb2R1Y2VkIGluIGVsZWN0cm9uaWMgZm9ybWF0IGlzIGtub3duIGFzIGFuIGVsZWN0cm9uaWMgYm9vaywgb3IgZS1ib29rLicsXHJcbi8vICAgfSwgXHJcblxyXG4vLyAgIHtcclxuLy8gICAgIGluZGV4OiAyLFxyXG4vLyAgICAgdGl0bGU6ICdCb2FyZCBHYW1lJyxcclxuLy8gICAgIGNvdW50OiAnMycsXHJcbi8vICAgICBwcmljZTogJzEwICQnLFxyXG4vLyAgICAgaW5mb1RleHQ6ICdBIGJvYXJkIGdhbWUgaXMgYSB0YWJsZXRvcCBnYW1lIHRoYXQgaW52b2x2ZXMgY291bnRlcnMgb3IgcGllY2VzIG1vdmVkIG9yIHBsYWNlZCBvbiBhIHByZS1tYXJrZWQgc3VyZmFjZSBvciBcImJvYXJkXCIsIGFjY29yZGluZyB0byBhIHNldCBvZiBydWxlcy4gU29tZSBnYW1lcyBhcmUgYmFzZWQgb24gcHVyZSBzdHJhdGVneSwgYnV0IG1hbnkgY29udGFpbiBhbiBlbGVtZW50IG9mIGNoYW5jZTsgYW5kIHNvbWUgYXJlIHB1cmVseSBjaGFuY2UsIHdpdGggbm8gZWxlbWVudCBvZiBza2lsbC4nLFxyXG4vLyAgIH0sXHJcblxyXG4vLyAgIHtcclxuLy8gICAgIGluZGV4OiAzLFxyXG4vLyAgICAgdGl0bGU6ICdLZXlib2FyZCcsXHJcbi8vICAgICBjb3VudDogJzUnLFxyXG4vLyAgICAgcHJpY2U6ICc0NSAkJyxcclxuLy8gICAgIGluZm9UZXh0OiAnSW4gY29tcHV0aW5nLCBhIGNvbXB1dGVyIGtleWJvYXJkIGlzIGEgdHlwZXdyaXRlci1zdHlsZSBkZXZpY2Ugd2hpY2ggdXNlcyBhbiBhcnJhbmdlbWVudCBvZiBidXR0b25zIG9yIGtleXMgdG8gYWN0IGFzIGEgbWVjaGFuaWNhbCBsZXZlciBvciBlbGVjdHJvbmljIHN3aXRjaC4gRm9sbG93aW5nIHRoZSBkZWNsaW5lIG9mIHB1bmNoIGNhcmRzIGFuZCBwYXBlciB0YXBlLCBpbnRlcmFjdGlvbiB2aWEgdGVsZXByaW50ZXItc3R5bGUga2V5Ym9hcmRzIGJlY2FtZSB0aGUgbWFpbiBpbnB1dCBkZXZpY2UgZm9yIGNvbXB1dGVycy4nLFxyXG4vLyAgIH0sXHJcblxyXG4vLyAgIHtcclxuLy8gICAgIGluZGV4OiA0LFxyXG4vLyAgICAgdGl0bGU6ICdUZWEnLFxyXG4vLyAgICAgY291bnQ6ICcxMCcsICBcclxuLy8gICAgIHByaWNlOiAnMiAkJyxcclxuLy8gICAgIGluZm9UZXh0OiAnVGVhIGlzIGFuIGFyb21hdGljIGJldmVyYWdlIGNvbW1vbmx5IHByZXBhcmVkIGJ5IHBvdXJpbmcgaG90IG9yIGJvaWxpbmcgd2F0ZXIgb3ZlciBjdXJlZCBsZWF2ZXMgb2YgdGhlIENhbWVsbGlhIHNpbmVuc2lzLCBhbiBldmVyZ3JlZW4gc2hydWIgbmF0aXZlIHRvIEFzaWEuWzNdIEFmdGVyIHdhdGVyLCBpdCBpcyB0aGUgbW9zdCB3aWRlbHkgY29uc3VtZWQgZHJpbmsgaW4gdGhlIHdvcmxkLls0XSBUaGVyZSBhcmUgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgdGVhOyBzb21lIHRlYXMsIGxpa2UgRGFyamVlbGluZyBhbmQgQ2hpbmVzZSBncmVlbnMsIGhhdmUgYSBjb29saW5nLCBzbGlnaHRseSBiaXR0ZXIsIGFuZCBhc3RyaW5nZW50IGZsYXZvdXIsWzVdIHdoaWxlIG90aGVycyBoYXZlIHZhc3RseSBkaWZmZXJlbnQgcHJvZmlsZXMgdGhhdCBpbmNsdWRlIHN3ZWV0LCBudXR0eSwgZmxvcmFsIG9yIGdyYXNzeSBub3Rlcy4nLFxyXG4vLyAgIH0sXHJcblxyXG4vLyAgIHtcclxuLy8gICAgIGluZGV4OiA1LFxyXG4vLyAgICAgdGl0bGU6ICdMQ0QgTW9uaXRvcicsXHJcbi8vICAgICBjb3VudDogJzEnLFxyXG4vLyAgICAgcHJpY2U6ICczMDAgJCcsXHJcbi8vICAgICBpbmZvVGV4dDogJ0EgbGlxdWlkLWNyeXN0YWwgZGlzcGxheSAoTENEKSBpcyBhIGZsYXQtcGFuZWwgZGlzcGxheSBvciBvdGhlciBlbGVjdHJvbmljIHZpc3VhbCBkaXNwbGF5IHRoYXQgdXNlcyB0aGUgbGlnaHQtbW9kdWxhdGluZyBwcm9wZXJ0aWVzIG9mIGxpcXVpZCBjcnlzdGFscy4gTGlxdWlkIGNyeXN0YWxzIGRvIG5vdCBlbWl0IGxpZ2h0IGRpcmVjdGx5LlsxXScsXHJcbi8vICAgfVxyXG5cclxuLy8gXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0ZGVmYXVsdEl0ZW1zXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZGVmYXVsdEl0ZW1zKCkge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zTGlzdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG5cdFx0XHRcdDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRsZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Db3VudDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdCk7XHJcblx0fVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9