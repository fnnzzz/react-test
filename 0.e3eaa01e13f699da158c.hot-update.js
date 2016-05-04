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
	
	    // http://localhost/lyokha/react_test/
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
	
	    _this.serverRequest = $.get('http://localhost/lyokha/react_test/api.php?select=all', function (result) {
	      var lastGist = result[0];
	
	      console.log(result[0]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9JdGVtcy9JdGVtc0xpc3QuanM/MmUwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxlQUFlLENBQ25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxNQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBRG1CLEVBU25CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxZQUZUO0FBR0UsVUFBTyxHQUhUO0FBSUUsVUFBTyxNQUpUO0FBS0UsYUFBVTtBQUxaLEVBVG1CLEVBaUJuQjtBQUNFLFVBQU8sQ0FEVDtBQUVFLFVBQU8sVUFGVDtBQUdFLFVBQU8sR0FIVDtBQUlFLFVBQU8sTUFKVDtBQUtFLGFBQVU7QUFMWixFQWpCbUIsRUF5Qm5CO0FBQ0UsVUFBTyxDQURUO0FBRUUsVUFBTyxLQUZUO0FBR0UsVUFBTyxJQUhUO0FBSUUsVUFBTyxLQUpUO0FBS0UsYUFBVTtBQUxaLEVBekJtQixFQWlDbkI7QUFDRSxVQUFPLENBRFQ7QUFFRSxVQUFPLGFBRlQ7QUFHRSxVQUFPLEdBSFQ7QUFJRSxVQUFPLE9BSlQ7QUFLRSxhQUFVO0FBTFosRUFqQ21CLENBQXJCOztLQTJDcUIsSTs7O0FBQ3BCLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7OztBQUFBLHlGQUNaLEtBRFk7O0FBUWxCLFdBQUssYUFBTCxHQUFxQixFQUFFLEdBQUYsQ0FBTSx1REFBTixFQUErRCxVQUFVLE1BQVYsRUFBa0I7QUFDcEcsV0FBSSxXQUFXLE9BQU8sQ0FBUCxDQUFmOztBQUVBLGVBQVEsR0FBUixDQUFZLE9BQU8sQ0FBUCxDQUFaOzs7OztBQUtELE1BUm1GLENBUWxGLElBUmtGLE9BQS9ELENBQXJCOztBQVdBLFdBQUssS0FBTCxHQUFhO0FBQ1o7QUFEWSxNQUFiO0FBbkJrQjtBQXNCbEI7Ozs7b0NBRWM7O0FBRWQsV0FBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsR0FBeEIsQ0FBNEIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUNuRSxnQkFBUyxnREFBVSxLQUFNLEtBQUssS0FBckIsRUFBNkIsTUFBTyxJQUFwQyxHQUFUO0FBQ0EsUUFGaUIsQ0FBbEI7O0FBSUEsY0FBTyxTQUFQO0FBQ0E7Ozs4QkFFUTs7QUFFUixjQUNDO0FBQUE7U0FBQSxFQUFPLFdBQU0sK0JBQWI7U0FDQztBQUFBO1dBQUEsRUFBTyxJQUFHLGlCQUFWO1dBQ0M7QUFBQTthQUFBO2FBQ0M7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUREO2FBRUM7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUZEO2FBR0M7QUFBQTtlQUFBO2VBQUE7QUFBQSxjQUhEO2FBSUM7QUFBQTtlQUFBO2VBQUE7QUFBQTtBQUpEO0FBREQsVUFERDtTQVVDO0FBQUE7V0FBQTtXQUNHLEtBQUssWUFBTDtBQURIO0FBVkQsUUFERDtBQWdCQTs7OztHQXBEZ0MsZ0JBQU0sUzs7bUJBQW5CLEkiLCJmaWxlIjoiMC5lM2VhYTAxZTEzZjY5OWRhMTU4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1TaG93IGZyb20gJy4vSXRlbSc7XHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICB0aXRsZTogJ0Jvb2snLFxyXG4gICAgY291bnQ6ICcwJyxcclxuICAgIHByaWNlOiAnMzAgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0EgYm9vayBpcyBhIHNldCBvZiB3cml0dGVuLCBwcmludGVkLCBpbGx1c3RyYXRlZCwgb3IgYmxhbmsgc2hlZXRzLCBtYWRlIG9mIGluaywgcGFwZXIsIHBhcmNobWVudCwgb3Igb3RoZXIgbWF0ZXJpYWxzLCBmYXN0ZW5lZCB0b2dldGhlciB0byBoaW5nZSBhdCBvbmUgc2lkZS4gQSBzaW5nbGUgc2hlZXQgd2l0aGluIGEgYm9vayBpcyBhIGxlYWYsIGFuZCBlYWNoIHNpZGUgb2YgYSBsZWFmIGlzIGEgcGFnZS4gQSBzZXQgb2YgdGV4dC1maWxsZWQgb3IgaWxsdXN0cmF0ZWQgcGFnZXMgcHJvZHVjZWQgaW4gZWxlY3Ryb25pYyBmb3JtYXQgaXMga25vd24gYXMgYW4gZWxlY3Ryb25pYyBib29rLCBvciBlLWJvb2suJyxcclxuICB9LCBcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDIsXHJcbiAgICB0aXRsZTogJ0JvYXJkIEdhbWUnLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHByaWNlOiAnMTAgJCcsXHJcbiAgICBpbmZvVGV4dDogJ0EgYm9hcmQgZ2FtZSBpcyBhIHRhYmxldG9wIGdhbWUgdGhhdCBpbnZvbHZlcyBjb3VudGVycyBvciBwaWVjZXMgbW92ZWQgb3IgcGxhY2VkIG9uIGEgcHJlLW1hcmtlZCBzdXJmYWNlIG9yIFwiYm9hcmRcIiwgYWNjb3JkaW5nIHRvIGEgc2V0IG9mIHJ1bGVzLiBTb21lIGdhbWVzIGFyZSBiYXNlZCBvbiBwdXJlIHN0cmF0ZWd5LCBidXQgbWFueSBjb250YWluIGFuIGVsZW1lbnQgb2YgY2hhbmNlOyBhbmQgc29tZSBhcmUgcHVyZWx5IGNoYW5jZSwgd2l0aCBubyBlbGVtZW50IG9mIHNraWxsLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDMsXHJcbiAgICB0aXRsZTogJ0tleWJvYXJkJyxcclxuICAgIGNvdW50OiAnNScsXHJcbiAgICBwcmljZTogJzQ1ICQnLFxyXG4gICAgaW5mb1RleHQ6ICdJbiBjb21wdXRpbmcsIGEgY29tcHV0ZXIga2V5Ym9hcmQgaXMgYSB0eXBld3JpdGVyLXN0eWxlIGRldmljZSB3aGljaCB1c2VzIGFuIGFycmFuZ2VtZW50IG9mIGJ1dHRvbnMgb3Iga2V5cyB0byBhY3QgYXMgYSBtZWNoYW5pY2FsIGxldmVyIG9yIGVsZWN0cm9uaWMgc3dpdGNoLiBGb2xsb3dpbmcgdGhlIGRlY2xpbmUgb2YgcHVuY2ggY2FyZHMgYW5kIHBhcGVyIHRhcGUsIGludGVyYWN0aW9uIHZpYSB0ZWxlcHJpbnRlci1zdHlsZSBrZXlib2FyZHMgYmVjYW1lIHRoZSBtYWluIGlucHV0IGRldmljZSBmb3IgY29tcHV0ZXJzLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDQsXHJcbiAgICB0aXRsZTogJ1RlYScsXHJcbiAgICBjb3VudDogJzEwJywgIFxyXG4gICAgcHJpY2U6ICcyICQnLFxyXG4gICAgaW5mb1RleHQ6ICdUZWEgaXMgYW4gYXJvbWF0aWMgYmV2ZXJhZ2UgY29tbW9ubHkgcHJlcGFyZWQgYnkgcG91cmluZyBob3Qgb3IgYm9pbGluZyB3YXRlciBvdmVyIGN1cmVkIGxlYXZlcyBvZiB0aGUgQ2FtZWxsaWEgc2luZW5zaXMsIGFuIGV2ZXJncmVlbiBzaHJ1YiBuYXRpdmUgdG8gQXNpYS5bM10gQWZ0ZXIgd2F0ZXIsIGl0IGlzIHRoZSBtb3N0IHdpZGVseSBjb25zdW1lZCBkcmluayBpbiB0aGUgd29ybGQuWzRdIFRoZXJlIGFyZSBtYW55IGRpZmZlcmVudCB0eXBlcyBvZiB0ZWE7IHNvbWUgdGVhcywgbGlrZSBEYXJqZWVsaW5nIGFuZCBDaGluZXNlIGdyZWVucywgaGF2ZSBhIGNvb2xpbmcsIHNsaWdodGx5IGJpdHRlciwgYW5kIGFzdHJpbmdlbnQgZmxhdm91cixbNV0gd2hpbGUgb3RoZXJzIGhhdmUgdmFzdGx5IGRpZmZlcmVudCBwcm9maWxlcyB0aGF0IGluY2x1ZGUgc3dlZXQsIG51dHR5LCBmbG9yYWwgb3IgZ3Jhc3N5IG5vdGVzLicsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW5kZXg6IDUsXHJcbiAgICB0aXRsZTogJ0xDRCBNb25pdG9yJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICBwcmljZTogJzMwMCAkJyxcclxuICAgIGluZm9UZXh0OiAnQSBsaXF1aWQtY3J5c3RhbCBkaXNwbGF5IChMQ0QpIGlzIGEgZmxhdC1wYW5lbCBkaXNwbGF5IG9yIG90aGVyIGVsZWN0cm9uaWMgdmlzdWFsIGRpc3BsYXkgdGhhdCB1c2VzIHRoZSBsaWdodC1tb2R1bGF0aW5nIHByb3BlcnRpZXMgb2YgbGlxdWlkIGNyeXN0YWxzLiBMaXF1aWQgY3J5c3RhbHMgZG8gbm90IGVtaXQgbGlnaHQgZGlyZWN0bHkuWzFdJyxcclxuICB9XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblxyXG4vLyBodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L1xyXG5cclxuXHJcblxyXG4gIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2x5b2toYS9yZWFjdF90ZXN0L2FwaS5waHA/c2VsZWN0PWFsbCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHZhciBsYXN0R2lzdCA9IHJlc3VsdFswXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0pO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgIHVzZXJuYW1lOiBsYXN0R2lzdC5vd25lci5sb2dpbixcclxuICAgIC8vICAgbGFzdEdpc3RVcmw6IGxhc3RHaXN0Lmh0bWxfdXJsXHJcbiAgICAvLyB9KTtcclxuICB9LmJpbmQodGhpcykpO1xyXG5cclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRkZWZhdWx0SXRlbXNcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRkZWZhdWx0SXRlbXMoKSB7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXNMaXN0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0SXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiAoIDxJdGVtU2hvdyBrZXk9eyBpdGVtLmluZGV4IH0gaXRlbT17IGl0ZW0gfS8+ICk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaXRlbXNMaXN0O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlX2l0ZW1zXCI+XHJcblx0XHRcdFx0PHRoZWFkIGlkPVwiYWRkZWRfaXRlbV93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlRpdGxlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNvdW50PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlByaWNlPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0eyB0aGlzLmRlZmF1bHRJdGVtcygpIH1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1zL0l0ZW1zTGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=