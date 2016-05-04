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
	
	    // http://localhost/lyokha/react_test/
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
	    _this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	      var lastGist = result[0];
	
	      console.log(result);
	      // this.setState({
	      //   username: lastGist.owner.login,
	      //   lastGistUrl: lastGist.html_url
	      // });
	    }.bind(_this));
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxNQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBU25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxZQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBVG1CLEVBaUJuQjtBQUNFLFVBQU8sQ0FEVDtBQUVFLFVBQU8sVUFGVDtBQUdFLFVBQU8sR0FIVDtBQUlFLFVBQU8sTUFKVDtBQUtFLGFBQVU7QUFMWixFQWpCbUIsRUF5Qm5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxLQUZUO0FBR0UsVUFBTyxJQUhUO0FBSUUsVUFBTyxLQUpUO0FBS0UsYUFBVTtBQUxaLEVBekJtQixFQWlDbkI7QUFDRSxVQUFPLENBRFQ7QUFFRSxVQUFPLGFBRlQ7QUFHRSxVQUFPLEdBSFQ7QUFJRSxVQUFPLE9BSlQ7QUFLRSxhQUFVO0FBTFosRUFqQ21CLENBQXJCOztLQTJDcUIsSTs7O0FBQ3BCLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7OztBQUFBLHlGQUNaLEtBRFk7O0FBUWxCLFdBQUssYUFBTCxHQUFxQixFQUFFLEdBQUYsQ0FBTSx1REFBTixFQUErRCxVQUFVLE1BQVYsRUFBa0I7QUFDcEcsV0FBSSxXQUFXLE9BQU8sQ0FBUCxDQUFmOztBQUVBLGVBQVEsR0FBUixDQUFZLE1BQVo7Ozs7O0FBS0QsTUFSbUYsQ0FRbEYsSUFSa0YsT0FBL0QsQ0FBckI7O0FBV0EsV0FBSyxLQUFMLEdBQWE7QUFDWjtBQURZLE1BQWI7QUFuQmtCO0FBc0JsQjs7OztvQ0FFYzs7QUFFZCxXQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ25FLGdCQUFTLGdEQUFVLEtBQU0sS0FBSyxLQUFyQixFQUE2QixNQUFPLElBQXBDLEdBQVQ7QUFDQSxRQUZpQixDQUFsQjs7QUFJQSxjQUFPLFNBQVA7QUFDQTs7OzhCQUVROztBQUVSLGNBQ0M7QUFBQTtTQUFBLEVBQU8sV0FBTSwrQkFBYjtTQUNDO0FBQUE7V0FBQSxFQUFPLElBQUcsaUJBQVY7V0FDQztBQUFBO2FBQUE7YUFDQztBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBREQ7YUFFQztBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBRkQ7YUFHQztBQUFBO2VBQUE7ZUFBQTtBQUFBLGNBSEQ7YUFJQztBQUFBO2VBQUE7ZUFBQTtBQUFBO0FBSkQ7QUFERCxVQUREO1NBVUM7QUFBQTtXQUFBO1dBQ0csS0FBSyxZQUFMO0FBREg7QUFWRCxRQUREO0FBZ0JBOzs7O0dBcERnQyxnQkFBTSxTOzttQkFBbkIsSSIsImZpbGUiOiIwLmZkYWVjMDcwNDYyMmE2NjU4NWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbVNob3cgZnJvbSAnLi9JdGVtJztcclxuXHJcbmNvbnN0IGRlZmF1bHRJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbmRleDogMSxcclxuICAgIHRpdGxlOiAnQm9vaycsXHJcbiAgICBjb3VudDogJzAnLFxyXG4gICAgcHJpY2U6ICczMCAkJyxcclxuICAgIGluZm9UZXh0OiAnQSBib29rIGlzIGEgc2V0IG9mIHdyaXR0ZW4sIHByaW50ZWQsIGlsbHVzdHJhdGVkLCBvciBibGFuayBzaGVldHMsIG1hZGUgb2YgaW5rLCBwYXBlciwgcGFyY2htZW50LCBvciBvdGhlciBtYXRlcmlhbHMsIGZhc3RlbmVkIHRvZ2V0aGVyIHRvIGhpbmdlIGF0IG9uZSBzaWRlLiBBIHNpbmdsZSBzaGVldCB3aXRoaW4gYSBib29rIGlzIGEgbGVhZiwgYW5kIGVhY2ggc2lkZSBvZiBhIGxlYWYgaXMgYSBwYWdlLiBBIHNldCBvZiB0ZXh0LWZpbGxlZCBvciBpbGx1c3RyYXRlZCBwYWdlcyBwcm9kdWNlZCBpbiBlbGVjdHJvbmljIGZvcm1hdCBpcyBrbm93biBhcyBhbiBlbGVjdHJvbmljIGJvb2ssIG9yIGUtYm9vay4nLFxyXG4gIH0sIFxyXG5cclxuICB7XHJcbiAgICBpbmRleDogMixcclxuICAgIHRpdGxlOiAnQm9hcmQgR2FtZScsXHJcbiAgICBjb3VudDogJzMnLFxyXG4gICAgcHJpY2U6ICcxMCAkJyxcclxuICAgIGluZm9UZXh0OiAnQSBib2FyZCBnYW1lIGlzIGEgdGFibGV0b3AgZ2FtZSB0aGF0IGludm9sdmVzIGNvdW50ZXJzIG9yIHBpZWNlcyBtb3ZlZCBvciBwbGFjZWQgb24gYSBwcmUtbWFya2VkIHN1cmZhY2Ugb3IgXCJib2FyZFwiLCBhY2NvcmRpbmcgdG8gYSBzZXQgb2YgcnVsZXMuIFNvbWUgZ2FtZXMgYXJlIGJhc2VkIG9uIHB1cmUgc3RyYXRlZ3ksIGJ1dCBtYW55IGNvbnRhaW4gYW4gZWxlbWVudCBvZiBjaGFuY2U7IGFuZCBzb21lIGFyZSBwdXJlbHkgY2hhbmNlLCB3aXRoIG5vIGVsZW1lbnQgb2Ygc2tpbGwuJyxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpbmRleDogMyxcclxuICAgIHRpdGxlOiAnS2V5Ym9hcmQnLFxyXG4gICAgY291bnQ6ICc1JyxcclxuICAgIHByaWNlOiAnNDUgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0luIGNvbXB1dGluZywgYSBjb21wdXRlciBrZXlib2FyZCBpcyBhIHR5cGV3cml0ZXItc3R5bGUgZGV2aWNlIHdoaWNoIHVzZXMgYW4gYXJyYW5nZW1lbnQgb2YgYnV0dG9ucyBvciBrZXlzIHRvIGFjdCBhcyBhIG1lY2hhbmljYWwgbGV2ZXIgb3IgZWxlY3Ryb25pYyBzd2l0Y2guIEZvbGxvd2luZyB0aGUgZGVjbGluZSBvZiBwdW5jaCBjYXJkcyBhbmQgcGFwZXIgdGFwZSwgaW50ZXJhY3Rpb24gdmlhIHRlbGVwcmludGVyLXN0eWxlIGtleWJvYXJkcyBiZWNhbWUgdGhlIG1haW4gaW5wdXQgZGV2aWNlIGZvciBjb21wdXRlcnMuJyxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpbmRleDogNCxcclxuICAgIHRpdGxlOiAnVGVhJyxcclxuICAgIGNvdW50OiAnMTAnLCAgXHJcbiAgICBwcmljZTogJzIgJCcsXHJcbiAgICBpbmZvVGV4dDogJ1RlYSBpcyBhbiBhcm9tYXRpYyBiZXZlcmFnZSBjb21tb25seSBwcmVwYXJlZCBieSBwb3VyaW5nIGhvdCBvciBib2lsaW5nIHdhdGVyIG92ZXIgY3VyZWQgbGVhdmVzIG9mIHRoZSBDYW1lbGxpYSBzaW5lbnNpcywgYW4gZXZlcmdyZWVuIHNocnViIG5hdGl2ZSB0byBBc2lhLlszXSBBZnRlciB3YXRlciwgaXQgaXMgdGhlIG1vc3Qgd2lkZWx5IGNvbnN1bWVkIGRyaW5rIGluIHRoZSB3b3JsZC5bNF0gVGhlcmUgYXJlIG1hbnkgZGlmZmVyZW50IHR5cGVzIG9mIHRlYTsgc29tZSB0ZWFzLCBsaWtlIERhcmplZWxpbmcgYW5kIENoaW5lc2UgZ3JlZW5zLCBoYXZlIGEgY29vbGluZywgc2xpZ2h0bHkgYml0dGVyLCBhbmQgYXN0cmluZ2VudCBmbGF2b3VyLFs1XSB3aGlsZSBvdGhlcnMgaGF2ZSB2YXN0bHkgZGlmZmVyZW50IHByb2ZpbGVzIHRoYXQgaW5jbHVkZSBzd2VldCwgbnV0dHksIGZsb3JhbCBvciBncmFzc3kgbm90ZXMuJyxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpbmRleDogNSxcclxuICAgIHRpdGxlOiAnTENEIE1vbml0b3InLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHByaWNlOiAnMzAwICQnLFxyXG4gICAgaW5mb1RleHQ6ICdBIGxpcXVpZC1jcnlzdGFsIGRpc3BsYXkgKExDRCkgaXMgYSBmbGF0LXBhbmVsIGRpc3BsYXkgb3Igb3RoZXIgZWxlY3Ryb25pYyB2aXN1YWwgZGlzcGxheSB0aGF0IHVzZXMgdGhlIGxpZ2h0LW1vZHVsYXRpbmcgcHJvcGVydGllcyBvZiBsaXF1aWQgY3J5c3RhbHMuIExpcXVpZCBjcnlzdGFscyBkbyBub3QgZW1pdCBsaWdodCBkaXJlY3RseS5bMV0nLFxyXG4gIH1cclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHJcbi8vIGh0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvXHJcblxyXG5cclxuXHJcbiAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvbHlva2hhL3JlYWN0X3Rlc3QvYXBpLnBocD9zZWxlY3Q9YWxsJywgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgdmFyIGxhc3RHaXN0ID0gcmVzdWx0WzBdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgdXNlcm5hbWU6IGxhc3RHaXN0Lm93bmVyLmxvZ2luLFxyXG4gICAgLy8gICBsYXN0R2lzdFVybDogbGFzdEdpc3QuaHRtbF91cmxcclxuICAgIC8vIH0pO1xyXG4gIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGRlZmF1bHRJdGVtc1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGRlZmF1bHRJdGVtcygpIHtcclxuXHJcblx0XHRjb25zdCBpdGVtc0xpc3QgPSB0aGlzLnN0YXRlLmRlZmF1bHRJdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuICggPEl0ZW1TaG93IGtleT17IGl0ZW0uaW5kZXggfSBpdGVtPXsgaXRlbSB9Lz4gKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBpdGVtc0xpc3Q7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGVfaXRlbXNcIj5cclxuXHRcdFx0XHQ8dGhlYWQgaWQ9XCJhZGRlZF9pdGVtX3dyYXBcIj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VGl0bGU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+Q291bnQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UHJpY2U8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7IHRoaXMuZGVmYXVsdEl0ZW1zKCkgfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQpO1xyXG5cdH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvSXRlbXMvSXRlbXNMaXN0LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==