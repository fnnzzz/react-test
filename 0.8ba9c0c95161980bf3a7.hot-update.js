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
	
	      console.log(result);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxNQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBU25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxZQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBVG1CLEVBaUJuQjtBQUNFLFVBQU8sQ0FEVDtBQUVFLFVBQU8sVUFGVDtBQUdFLFVBQU8sR0FIVDtBQUlFLFVBQU8sTUFKVDtBQUtFLGFBQVU7QUFMWixFQWpCbUIsRUF5Qm5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxLQUZUO0FBR0UsVUFBTyxJQUhUO0FBSUUsVUFBTyxLQUpUO0FBS0UsYUFBVTtBQUxaLEVBekJtQixFQWlDbkI7QUFDRSxVQUFPLENBRFQ7QUFFRSxVQUFPLGFBRlQ7QUFHRSxVQUFPLEdBSFQ7QUFJRSxVQUFPLE9BSlQ7QUFLRSxhQUFVO0FBTFosRUFqQ21CLENBQXJCOztLQTJDcUIsSTs7O0FBQ3BCLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWixLQURZOztBQUdoQixXQUFLLGFBQUwsR0FBcUIsRUFBRSxHQUFGLENBQU0sdURBQU4sRUFBK0QsVUFBVSxNQUFWLEVBQWtCOztBQUV0RyxlQUFRLEdBQVIsQ0FBWSxNQUFaOztBQUVBLFlBQUssUUFBTCxDQUFjO0FBQ1osdUJBQWM7QUFERixRQUFkO0FBR0MsTUFQbUYsQ0FPbEYsSUFQa0YsT0FBL0QsQ0FBckI7O0FBSGdCO0FBWWxCOzs7O29DQUVjO0FBQ2QsV0FBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsR0FBeEIsQ0FBNEIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNuRSxnQkFBUyxnREFBVSxLQUFNLEtBQUssS0FBckIsRUFBNkIsTUFBTyxJQUFwQyxHQUFUO0FBQ0EsUUFGaUIsQ0FBbEI7O0FBSUEsY0FBTyxTQUFQO0FBQ0E7Ozs4QkFFUTs7QUFFUixjQUNDO0FBQUE7U0FBQSxFQUFPLFdBQU0sK0JBQWI7U0FDQztBQUFBO1dBQUEsRUFBTyxJQUFHLGlCQUFWO1dBQ0M7QUFBQTthQUFBO2FBQ0M7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUREO2FBRUM7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUZEO2FBR0M7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUhEO2FBSUM7QUFBQTtlQUFBO2VBQUE7QUFBQTtBQUpEO0FBREQsVUFERDtTQVVDO0FBQUE7V0FBQTtXQUNHLEtBQUssWUFBTDtBQURIO0FBVkQsUUFERDtBQWdCQTs7OztHQXpDZ0MsZ0JBQU0sUzs7bUJBQW5CLEkiLCJmaWxlIjoiMC44YmE5YzBjOTUxNjE5ODBiZjNhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TaG93IGZyb20gJy4vSXRlbSc7XHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICB0aXRsZTogJ0Jvb2snLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnMzAgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0EgYm9vayBpcyBhIHNldCBvZiB3cml0dGVuLCBwcmludGVkLCBpbGx1c3RyYXRlZCwgb3IgYmxhbmsgc2hlZXRzLCBtYWRlIG9mIGluaywgcGFwZXIsIHBhcmNobWVudCwgb3Igb3RoZXIgbWF0ZXJpYWxzLCBmYXN0ZW5lZCB0b2dldGhlciB0byBoaW5nZSBhdCBvbmUgc2lkZS4gQSBzaW5nbGUgc2hlZXQgd2l0aGluIGEgYm9vayBpcyBhIGxlYWYsIGFuZCBlYWNoIHNpZGUgb2YgYSBsZWFmIGlzIGEgcGFnZS4gQSBzZXQgb2YgdGV4dC1maWxsZWQgb3IgaWxsdXN0cmF0ZWQgcGFnZXMgcHJvZHVjZWQgaW4gZWxlY3Ryb25pYyBmb3JtYXQgaXMga25vd24gYXMgYW4gZWxlY3Ryb25pYyBib29rLCBvciBlLWJvb2suJyxcclxuICB9LCBcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDIsXHJcbiAgICB0aXRsZTogJ0JvYXJkIEdhbWUnLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHByaWNlOiAnMTAgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0EgYm9hcmQgZ2FtZSBpcyBhIHRhYmxldG9wIGdhbWUgdGhhdCBpbnZvbHZlcyBjb3VudGVycyBvciBwaWVjZXMgbW92ZWQgb3IgcGxhY2VkIG9uIGEgcHJlLW1hcmtlZCBzdXJmYWNlIG9yIFwiYm9hcmRcIiwgYWNjb3JkaW5nIHRvIGEgc2V0IG9mIHJ1bGVzLiBTb21lIGdhbWVzIGFyZSBiYXNlZCBvbiBwdXJlIHN0cmF0ZWd5LCBidXQgbWFueSBjb250YWluIGFuIGVsZW1lbnQgb2YgY2hhbmNlOyBhbmQgc29tZSBhcmUgcHVyZWx5IGNoYW5jZSwgd2l0aCBubyBlbGVtZW50IG9mIHNraWxsLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDMsXHJcbiAgICB0aXRsZTogJ0tleWJvYXJkJyxcclxuICAgIGNvdW50OiAnNScsXHJcbiAgICBwcmljZTogJzQ1ICQnLFxyXG4gICAgaW5mb1RleHQ6ICdJbiBjb21wdXRpbmcsIGEgY29tcHV0ZXIga2V5Ym9hcmQgaXMgYSB0eXBld3JpdGVyLXN0eWxlIGRldmljZSB3aGljaCB1c2VzIGFuIGFycmFuZ2VtZW50IG9mIGJ1dHRvbnMgb3Iga2V5cyB0byBhY3QgYXMgYSBtZWNoYW5pY2FsIGxldmVyIG9yIGVsZWN0cm9uaWMgc3dpdGNoLiBGb2xsb3dpbmcgdGhlIGRlY2xpbmUgb2YgcHVuY2ggY2FyZHMgYW5kIHBhcGVyIHRhcGUsIGludGVyYWN0aW9uIHZpYSB0ZWxlcHJpbnRlci1zdHlsZSBrZXlib2FyZHMgYmVjYW1lIHRoZSBtYWluIGlucHV0IGRldmljZSBmb3IgY29tcHV0ZXJzLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDQsXHJcbiAgICB0aXRsZTogJ1RlYScsXHJcbiAgICBjb3VudDogJzEwJywgIFxyXG4gICAgcHJpY2U6ICcyICQnLFxyXG4gICAgaW5mb1RleHQ6ICdUZWEgaXMgYW4gYXJvbWF0aWMgYmV2ZXJhZ2UgY29tbW9ubHkgcHJlcGFyZWQgYnkgcG91cmluZyBob3Qgb3IgYm9pbGluZyB3YXRlciBvdmVyIGN1cmVkIGxlYXZlcyBvZiB0aGUgQ2FtZWxsaWEgc2luZW5zaXMsIGFuIGV2ZXJncmVlbiBzaHJ1YiBuYXRpdmUgdG8gQXNpYS5bM10gQWZ0ZXIgd2F0ZXIsIGl0IGlzIHRoZSBtb3N0IHdpZGVseSBjb25zdW1lZCBkcmluayBpbiB0aGUgd29ybGQuWzRdIFRoZXJlIGFyZSBtYW55IGRpZmZlcmVudCB0eXBlcyBvZiB0ZWE7IHNvbWUgdGVhcywgbGlrZSBEYXJqZWVsaW5nIGFuZCBDaGluZXNlIGdyZWVucywgaGF2ZSBhIGNvb2xpbmcsIHNsaWdodGx5IGJpdHRlciwgYW5kIGFzdHJpbmdlbnQgZmxhdm91cixbNV0gd2hpbGUgb3RoZXJzIGhhdmUgdmFzdGx5IGRpZmZlcmVudCBwcm9maWxlcyB0aGF0IGluY2x1ZGUgc3dlZXQsIG51dHR5LCBmbG9yYWwgb3IgZ3Jhc3N5IG5vdGVzLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDUsXHJcbiAgICB0aXRsZTogJ0xDRCBNb25pdG9yJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICBwcmljZTogJzMwMCAkJyxcclxuICAgIGluZm9UZXh0OiAnQSBsaXF1aWQtY3J5c3RhbCBkaXNwbGF5IChMQ0QpIGlzIGEgZmxhdC1wYW5lbCBkaXNwbGF5IG9yIG90aGVyIGVsZWN0cm9uaWMgdmlzdWFsIGRpc3BsYXkgdGhhdCB1c2VzIHRoZSBsaWdodC1tb2R1bGF0aW5nIHByb3BlcnRpZXMgb2YgbGlxdWlkIGNyeXN0YWxzLiBMaXF1aWQgY3J5c3RhbHMgZG8gbm90IGVtaXQgbGlnaHQgZGlyZWN0bHkuWzFdJyxcclxuICB9XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSAkLmdldCgnaHR0cDovL2xvY2FsaG9zdC9seW9raGEvcmVhY3RfdGVzdC9hcGkucGhwP3NlbGVjdD1hbGwnLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRlZmF1bHRJdGVtczogcmVzdWx0LFxyXG4gICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuXHR9XHJcblxyXG5cdGRlZmF1bHRJdGVtcygpIHtcclxuXHRcdGNvbnN0IGl0ZW1zTGlzdCA9IHRoaXMuc3RhdGUuZGVmYXVsdEl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gKCA8SXRlbVNob3cga2V5PXsgaXRlbS5pbmRleCB9IGl0ZW09eyBpdGVtIH0vPiApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zTGlzdDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZV9pdGVtc1wiPlxyXG5cdFx0XHRcdDx0aGVhZCBpZD1cImFkZGVkX2l0ZW1fd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRsZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Db3VudDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHsgdGhpcy5kZWZhdWx0SXRlbXMoKSB9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdCk7XHJcblx0fVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9