webpackJsonp([19],{

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(11);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    searchResults: store.searchResults
  };
};

var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: 'formatDueDate',
    value: function formatDueDate(dueDate, late) {
      var todaysDate = (0, _moment2.default)(new Date());
      var momentDueDate = (0, _moment2.default)(dueDate);
      var diff = momentDueDate.diff(todaysDate, 'days');
      var additionalString = late ? ' days late' : ' days to go';
      var status = (diff + additionalString).toUpperCase();
      return status;
    }
  }, {
    key: 'getOrderStatus',
    value: function getOrderStatus(order) {
      if (!order.due_date) {
        return { status: 'In Transit', color: 'green' };
      } else if (order.late) {
        var dueTime = this.formatDueDate(order.due_date, true);
        return { status: dueTime, color: 'red' };
      } else if (order.fulfilled) {
        return { status: 'Fulfilled', color: 'green' };
      } else {
        var _dueTime = this.formatDueDate(order.due_date, false);
        return { status: _dueTime, color: 'orange' };
      }
    }
  }, {
    key: 'renderOrderRows',
    value: function renderOrderRows() {
      var _this2 = this;

      var searchResults = this.props.searchResults;

      if (searchResults) {
        return searchResults.map(function (order, i) {
          var orderStatus = _this2.getOrderStatus(order);
          var id = order.id,
              customer = order.customer,
              alterations_count = order.alterations_count;
          var first_name = customer.first_name,
              last_name = customer.last_name;
          var color = orderStatus.color,
              status = orderStatus.status;

          var route = '/orders/' + id;
          return _react2.default.createElement(
            'div',
            { key: id },
            _react2.default.createElement(
              'div',
              { className: 'order-row' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: route, className: 'order-row-link' },
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  '#',
                  id
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell', style: { color: color } },
                  status
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  first_name,
                  ' ',
                  last_name
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  alterations_count
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'order-row-break-row' })
          );
        });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      var headerText = 'Orders / ' + this.props.currentStore.name;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'orders' },
          _react2.default.createElement(
            'div',
            { className: 'order-headers-container' },
            _react2.default.createElement(
              'div',
              { className: 'order-headers-row' },
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Order'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Status'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Customer'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Quantity'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'order-header-break-row' }),
          _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            this.renderOrderRows()
          )
        )
      );
    }
  }]);

  return SearchResults;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchResults);

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(11);

var _actions = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartRibbon = function CartRibbon(props) {
  var rotate = props.rotate,
      userRoles = props.userRoles,
      _props$includeLink = props.includeLink,
      includeLink = _props$includeLink === undefined ? true : _props$includeLink;

  var link = props.link;
  var onClick = void 0;

  if (!rotate || rotate.length === 0) {
    link = '/orders/new';
    onClick = function onClick() {
      return console.log('');
    };
  } else {
    onClick = function onClick() {
      return props.resetCart();
    };
  }

  if (props.userRoles.admin || props.userRoles.retailer) {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'cart-ribbon', to: link },
      _react2.default.createElement(
        'h1',
        { className: 'cart-ribbon-sign ' + rotate, onClick: onClick },
        '+'
      ),
      _react2.default.createElement('div', { className: 'cart-ribbon-triangle' })
    );
  }
};

var SectionHeader = function SectionHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'section-header' },
    _react2.default.createElement(
      'h2',
      null,
      props.text
    ),
    CartRibbon(props)
  );
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    resetCart: _actions.resetCart
  }, dispatch);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SectionHeader);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoUmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqKioqKioqKioqKioiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFVzZXIiLCJzdG9yZSIsImN1cnJlbnRTdG9yZSIsInNlYXJjaFJlc3VsdHMiLCJTZWFyY2hSZXN1bHRzIiwiZHVlRGF0ZSIsImxhdGUiLCJ0b2RheXNEYXRlIiwiRGF0ZSIsIm1vbWVudER1ZURhdGUiLCJkaWZmIiwiYWRkaXRpb25hbFN0cmluZyIsInN0YXR1cyIsInRvVXBwZXJDYXNlIiwib3JkZXIiLCJkdWVfZGF0ZSIsImNvbG9yIiwiZHVlVGltZSIsImZvcm1hdER1ZURhdGUiLCJmdWxmaWxsZWQiLCJwcm9wcyIsIm1hcCIsImkiLCJvcmRlclN0YXR1cyIsImdldE9yZGVyU3RhdHVzIiwiaWQiLCJjdXN0b21lciIsImFsdGVyYXRpb25zX2NvdW50IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJvdXRlIiwiaGVhZGVyVGV4dCIsIm5hbWUiLCJyZW5kZXJPcmRlclJvd3MiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldENhcnQiLCJhZG1pbiIsInJldGFpbGVyIiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xDLGlCQUFhQyxNQUFNRCxXQURkO0FBRUxFLGtC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IjE5LjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vU2VjdGlvbkhlYWRlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgY3VycmVudFN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgc2VhcmNoUmVzdWx0czogc3RvcmUuc2VhcmNoUmVzdWx0cyxcbiAgfTtcbn07XG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBmb3JtYXREdWVEYXRlKGR1ZURhdGUsIGxhdGUpIHtcbiAgICBjb25zdCB0b2RheXNEYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IG1vbWVudER1ZURhdGUgPSBtb21lbnQoZHVlRGF0ZSk7XG4gICAgY29uc3QgZGlmZiA9IG1vbWVudER1ZURhdGUuZGlmZih0b2RheXNEYXRlLCAnZGF5cycpO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxTdHJpbmcgPSBsYXRlID8gJyBkYXlzIGxhdGUnIDogJyBkYXlzIHRvIGdvJztcbiAgICBjb25zdCBzdGF0dXMgPSAoZGlmZiArIGFkZGl0aW9uYWxTdHJpbmcpLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIGdldE9yZGVyU3RhdHVzKG9yZGVyKSB7XG4gICAgaWYgKCFvcmRlci5kdWVfZGF0ZSkge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnSW4gVHJhbnNpdCcsIGNvbG9yOiAnZ3JlZW4nIH07XG4gICAgfSBlbHNlIGlmIChvcmRlci5sYXRlKSB7XG4gICAgICBsZXQgZHVlVGltZSA9IHRoaXMuZm9ybWF0RHVlRGF0ZShvcmRlci5kdWVfZGF0ZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IGR1ZVRpbWUsIGNvbG9yOiAncmVkJyB9O1xuICAgIH0gZWxzZSBpZiAob3JkZXIuZnVsZmlsbGVkKSB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICdGdWxmaWxsZWQnLCBjb2xvcjogJ2dyZWVuJyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkdWVUaW1lID0gdGhpcy5mb3JtYXREdWVEYXRlKG9yZGVyLmR1ZV9kYXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IGR1ZVRpbWUsIGNvbG9yOiAnb3JhbmdlJyB9O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9yZGVyUm93cygpIHtcbiAgICBjb25zdCB7IHNlYXJjaFJlc3VsdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzLm1hcCgob3JkZXIsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgb3JkZXJTdGF0dXMgPSB0aGlzLmdldE9yZGVyU3RhdHVzKG9yZGVyKTtcbiAgICAgICAgY29uc3QgeyBpZCwgY3VzdG9tZXIsIGFsdGVyYXRpb25zX2NvdW50IH0gPSBvcmRlcjtcbiAgICAgICAgY29uc3QgeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUgfSA9IGN1c3RvbWVyO1xuICAgICAgICBjb25zdCB7IGNvbG9yLCBzdGF0dXMgfSA9IG9yZGVyU3RhdHVzO1xuICAgICAgICBjb25zdCByb3V0ZSA9IGAvb3JkZXJzLyR7aWR9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1yb3dcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89e3JvdXRlfSBjbGFzc05hbWU9XCJvcmRlci1yb3ctbGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1jZWxsXCI+I3tpZH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtY2VsbFwiIHN0eWxlPXt7IGNvbG9yIH19PlxuICAgICAgICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAge2ZpcnN0X25hbWV9IHtsYXN0X25hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWNlbGxcIj57YWx0ZXJhdGlvbnNfY291bnR9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm9yZGVyLXJvdy1icmVhay1yb3dcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jdXJyZW50U3RvcmUpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBgT3JkZXJzIC8gJHt0aGlzLnByb3BzLmN1cnJlbnRTdG9yZS5uYW1lfWA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e2hlYWRlclRleHR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1oZWFkZXJzLXJvd1wiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1oZWFkZXItY2VsbFwiPk9yZGVyPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtaGVhZGVyLWNlbGxcIj5TdGF0dXM8L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1oZWFkZXItY2VsbFwiPkN1c3RvbWVyPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtaGVhZGVyLWNlbGxcIj5RdWFudGl0eTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWhlYWRlci1icmVhay1yb3dcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1jb250YWluZXJcIj57dGhpcy5yZW5kZXJPcmRlclJvd3MoKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hSZXN1bHRzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=