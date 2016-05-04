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
	  index: 1,
	  title: 'Book',
	  count: '0',
	  price: '30 $',
	  infoText: 'A book is a set of written, printed, illustrated, or blank sheets, made of ink, paper, parchment, or other materials, fastened together to hinge at one side. A single sheet within a book is a leaf, and each side of a leaf is a page. A set of text-filled or illustrated pages produced in electronic format is known as an electronic book, or e-book.'
	}, {
	  index: 2,
	  title: 'Board Game',
	  count: '3',
	  price: '10 $',
	  infoText: 'A board game is a tabletop game that involves counters or pieces moved or placed on a pre-marked surface or "board", according to a set of rules. Some games are based on pure strategy, but many contain an element of chance; and some are purely chance, with no element of skill.'
	}, {
	  index: 3,
	  title: 'Keyboard',
	  count: '5',
	  price: '45 $',
	  infoText: 'In computing, a computer keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a mechanical lever or electronic switch. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input device for computers.'
	}, {
	  index: 4,
	  title: 'Tea',
	  count: '10',
	  price: '2 $',
	  infoText: 'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; some teas, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour,[5] while others have vastly different profiles that include sweet, nutty, floral or grassy notes.'
	}, {
	  index: 5,
	  title: 'LCD Monitor',
	  count: '1',
	  price: '300 $',
	  infoText: 'A liquid-crystal display (LCD) is a flat-panel display or other electronic visual display that uses the light-modulating properties of liquid crystals. Liquid crystals do not emit light directly.[1]'
	}];
	
	var Item = function (_React$Component) {
	  _inherits(Item, _React$Component);
	
	  function Item(props) {
	    _classCallCheck(this, Item);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxNQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBU25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxZQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBVG1CLEVBaUJuQjtBQUNFLFVBQU8sQ0FEVDtBQUVFLFVBQU8sVUFGVDtBQUdFLFVBQU8sR0FIVDtBQUlFLFVBQU8sTUFKVDtBQUtFLGFBQVU7QUFMWixFQWpCbUIsRUF5Qm5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxLQUZUO0FBR0UsVUFBTyxJQUhUO0FBSUUsVUFBTyxLQUpUO0FBS0UsYUFBVTtBQUxaLEVBekJtQixFQWlDbkI7QUFDRSxVQUFPLENBRFQ7QUFFRSxVQUFPLGFBRlQ7QUFHRSxVQUFPLEdBSFQ7QUFJRSxVQUFPLE9BSlQ7QUFLRSxhQUFVO0FBTFosRUFqQ21CLENBQXJCOztLQTJDcUIsSTs7O0FBQ3BCLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWixLQURZOztBQUdoQixXQUFLLGFBQUwsR0FBcUIsRUFBRSxHQUFGLENBQU0sdURBQU4sRUFBK0QsVUFBVSxNQUFWLEVBQWtCOztBQUd0RyxZQUFLLFFBQUwsQ0FBYztBQUNaLHVCQUFjO0FBREYsUUFBZDtBQUdDLE1BTm1GLENBTWxGLElBTmtGLE9BQS9ELENBQXJCOztBQUhnQjtBQVdsQjs7OztvQ0FFYztBQUNkLFdBQU0sWUFBWSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEdBQXhCLENBQTRCLFVBQVMsSUFBVCxFQUFlLEtBQWYsRUFBc0I7QUFDbkUsZ0JBQVMsZ0RBQVUsS0FBTSxLQUFLLEtBQXJCLEVBQTZCLE1BQU8sSUFBcEMsR0FBVDtBQUNBLFFBRmlCLENBQWxCOztBQUlBLGNBQU8sU0FBUDtBQUNBOzs7OEJBRVE7O0FBRVIsY0FDQztBQUFBO1NBQUEsRUFBTyxXQUFNLCtCQUFiO1NBQ0M7QUFBQTtXQUFBLEVBQU8sSUFBRyxpQkFBVjtXQUNDO0FBQUE7YUFBQTthQUNDO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FERDthQUVDO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FGRDthQUdDO0FBQUE7ZUFBQTtlQUFBO0FBQUEsY0FIRDthQUlDO0FBQUE7ZUFBQTtlQUFBO0FBQUE7QUFKRDtBQURELFVBREQ7U0FVQztBQUFBO1dBQUE7V0FDRyxLQUFLLFlBQUw7QUFESDtBQVZELFFBREQ7QUFnQkE7Ozs7R0F4Q2dDLGdCQUFNLFM7O21CQUFuQixJIiwiZmlsZSI6IjAuYjIwOTA2NDg5YWY4YmQzZDBjYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtU2hvdyBmcm9tICcuL0l0ZW0nO1xyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGluZGV4OiAxLFxyXG4gICAgdGl0bGU6ICdCb29rJyxcclxuICAgIGNvdW50OiAnMCcsXHJcbiAgICBwcmljZTogJzMwICQnLFxyXG4gICAgaW5mb1RleHQ6ICdBIGJvb2sgaXMgYSBzZXQgb2Ygd3JpdHRlbiwgcHJpbnRlZCwgaWxsdXN0cmF0ZWQsIG9yIGJsYW5rIHNoZWV0cywgbWFkZSBvZiBpbmssIHBhcGVyLCBwYXJjaG1lbnQsIG9yIG90aGVyIG1hdGVyaWFscywgZmFzdGVuZWQgdG9nZXRoZXIgdG8gaGluZ2UgYXQgb25lIHNpZGUuIEEgc2luZ2xlIHNoZWV0IHdpdGhpbiBhIGJvb2sgaXMgYSBsZWFmLCBhbmQgZWFjaCBzaWRlIG9mIGEgbGVhZiBpcyBhIHBhZ2UuIEEgc2V0IG9mIHRleHQtZmlsbGVkIG9yIGlsbHVzdHJhdGVkIHBhZ2VzIHByb2R1Y2VkIGluIGVsZWN0cm9uaWMgZm9ybWF0IGlzIGtub3duIGFzIGFuIGVsZWN0cm9uaWMgYm9vaywgb3IgZS1ib29rLicsXHJcbiAgfSwgXHJcblxyXG4gIHtcclxuICAgIGluZGV4OiAyLFxyXG4gICAgdGl0bGU6ICdCb2FyZCBHYW1lJyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICBwcmljZTogJzEwICQnLFxyXG4gICAgaW5mb1RleHQ6ICdBIGJvYXJkIGdhbWUgaXMgYSB0YWJsZXRvcCBnYW1lIHRoYXQgaW52b2x2ZXMgY291bnRlcnMgb3IgcGllY2VzIG1vdmVkIG9yIHBsYWNlZCBvbiBhIHByZS1tYXJrZWQgc3VyZmFjZSBvciBcImJvYXJkXCIsIGFjY29yZGluZyB0byBhIHNldCBvZiBydWxlcy4gU29tZSBnYW1lcyBhcmUgYmFzZWQgb24gcHVyZSBzdHJhdGVneSwgYnV0IG1hbnkgY29udGFpbiBhbiBlbGVtZW50IG9mIGNoYW5jZTsgYW5kIHNvbWUgYXJlIHB1cmVseSBjaGFuY2UsIHdpdGggbm8gZWxlbWVudCBvZiBza2lsbC4nLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGluZGV4OiAzLFxyXG4gICAgdGl0bGU6ICdLZXlib2FyZCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgcHJpY2U6ICc0NSAkJyxcclxuICAgIGluZm9UZXh0OiAnSW4gY29tcHV0aW5nLCBhIGNvbXB1dGVyIGtleWJvYXJkIGlzIGEgdHlwZXdyaXRlci1zdHlsZSBkZXZpY2Ugd2hpY2ggdXNlcyBhbiBhcnJhbmdlbWVudCBvZiBidXR0b25zIG9yIGtleXMgdG8gYWN0IGFzIGEgbWVjaGFuaWNhbCBsZXZlciBvciBlbGVjdHJvbmljIHN3aXRjaC4gRm9sbG93aW5nIHRoZSBkZWNsaW5lIG9mIHB1bmNoIGNhcmRzIGFuZCBwYXBlciB0YXBlLCBpbnRlcmFjdGlvbiB2aWEgdGVsZXByaW50ZXItc3R5bGUga2V5Ym9hcmRzIGJlY2FtZSB0aGUgbWFpbiBpbnB1dCBkZXZpY2UgZm9yIGNvbXB1dGVycy4nLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGluZGV4OiA0LFxyXG4gICAgdGl0bGU6ICdUZWEnLFxyXG4gICAgY291bnQ6ICcxMCcsICBcclxuICAgIHByaWNlOiAnMiAkJyxcclxuICAgIGluZm9UZXh0OiAnVGVhIGlzIGFuIGFyb21hdGljIGJldmVyYWdlIGNvbW1vbmx5IHByZXBhcmVkIGJ5IHBvdXJpbmcgaG90IG9yIGJvaWxpbmcgd2F0ZXIgb3ZlciBjdXJlZCBsZWF2ZXMgb2YgdGhlIENhbWVsbGlhIHNpbmVuc2lzLCBhbiBldmVyZ3JlZW4gc2hydWIgbmF0aXZlIHRvIEFzaWEuWzNdIEFmdGVyIHdhdGVyLCBpdCBpcyB0aGUgbW9zdCB3aWRlbHkgY29uc3VtZWQgZHJpbmsgaW4gdGhlIHdvcmxkLls0XSBUaGVyZSBhcmUgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgdGVhOyBzb21lIHRlYXMsIGxpa2UgRGFyamVlbGluZyBhbmQgQ2hpbmVzZSBncmVlbnMsIGhhdmUgYSBjb29saW5nLCBzbGlnaHRseSBiaXR0ZXIsIGFuZCBhc3RyaW5nZW50IGZsYXZvdXIsWzVdIHdoaWxlIG90aGVycyBoYXZlIHZhc3RseSBkaWZmZXJlbnQgcHJvZmlsZXMgdGhhdCBpbmNsdWRlIHN3ZWV0LCBudXR0eSwgZmxvcmFsIG9yIGdyYXNzeSBub3Rlcy4nLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGluZGV4OiA1LFxyXG4gICAgdGl0bGU6ICdMQ0QgTW9uaXRvcicsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgcHJpY2U6ICczMDAgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0EgbGlxdWlkLWNyeXN0YWwgZGlzcGxheSAoTENEKSBpcyBhIGZsYXQtcGFuZWwgZGlzcGxheSBvciBvdGhlciBlbGVjdHJvbmljIHZpc3VhbCBkaXNwbGF5IHRoYXQgdXNlcyB0aGUgbGlnaHQtbW9kdWxhdGluZyBwcm9wZXJ0aWVzIG9mIGxpcXVpZCBjcnlzdGFscy4gTGlxdWlkIGNyeXN0YWxzIGRvIG5vdCBlbWl0IGxpZ2h0IGRpcmVjdGx5LlsxXScsXHJcbiAgfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvYXBpLnBocD9zZWxlY3Q9YWxsJywgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVmYXVsdEl0ZW1zOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZGVmYXVsdEl0ZW1zKCkge1xyXG5cdFx0Y29uc3QgaXRlbXNMaXN0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiAoIDxJdGVtU2hvdyBrZXk9eyBpdGVtLmluZGV4IH0gaXRlbT17IGl0ZW0gfS8+ICk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaXRlbXNMaXN0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlX2l0ZW1zXCI+XHJcblx0XHRcdFx0PHRoZWFkIGlkPVwiYWRkZWRfaXRlbV93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlRpdGxlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNvdW50PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlByaWNlPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0eyB0aGlzLmRlZmF1bHRJdGVtcygpIH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1zL0l0ZW1zTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=