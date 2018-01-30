webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(11);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

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
    archivedOrders: store.archivedOrders,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getArchivedOrders: _actions.getArchivedOrders, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader }, dispatch);
};

var ArchivedOrders = function (_Component) {
  _inherits(ArchivedOrders, _Component);

  function ArchivedOrders(props) {
    _classCallCheck(this, ArchivedOrders);

    var _this = _possibleConstructorReturn(this, (ArchivedOrders.__proto__ || Object.getPrototypeOf(ArchivedOrders)).call(this));

    _this.renderArchivedOrderRows = function () {
      var archivedOrders = _this.props.archivedOrders;


      if (!(0, _isEmpty2.default)(archivedOrders)) {
        return _react2.default.createElement(
          'div',
          { className: 'archive-container' },
          archivedOrders.map(function (order) {
            return _this.renderArchivedOrderRow(order);
          })
        );
      } else if (_this.state.loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'no-orders' },
            'No orders found!'
          )
        );
      }
    };

    _this.renderArchivedOrderHeaders = function () {
      var role = _this.props.userRoles;

      var customerOrTailor = void 0,
          quantityOrSource = void 0;

      if (role.admin) {
        customerOrTailor = 'Tailor';
        quantityOrSource = 'Source';
      } else {
        customerOrTailor = 'Customer';
        quantityOrSource = 'Quantity';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'archive-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'archive-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              'Order'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              'FulFilled Date'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              customerOrTailor
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              quantityOrSource
            )
          )
        ),
        _react2.default.createElement('div', { className: 'archive-header-break-row' })
      );
    };

    _this.state = { loadingOrders: true };
    return _this;
  }

  _createClass(ArchivedOrders, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getArchivedOrders = _props.getArchivedOrders;


      setLoader();
      getArchivedOrders().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'renderArchivedOrderRow',
    value: function renderArchivedOrderRow(order) {
      var roles = this.props.userRoles;
      var id = order.id,
          tailor = order.tailor,
          retailer = order.retailer,
          customer = order.customer,
          alterations_count = order.alterations_count;


      var fulfilledDate = (0, _moment2.default)(order.fulfilled_date).format('MM-DD-YYYY');
      var customerOrTailor = void 0,
          quantityOrRetailer = void 0;
      if (roles.admin) {
        if (!tailor || !retailer) {
          return '';
        }
        customerOrTailor = tailor.name;
        quantityOrRetailer = retailer.name;
      } else {
        var first_name = customer.first_name,
            last_name = customer.last_name;

        var name = first_name + ' ' + last_name;
        customerOrTailor = name;
        quantityOrRetailer = alterations_count;
      }

      var route = '/orders/' + id;
      return _react2.default.createElement(
        'div',
        { className: 'archive-row', key: id },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'archive-link' },
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell', style: { color: 'green' } },
            fulfilledDate
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            customerOrTailor
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            quantityOrRetailer
          )
        ),
        _react2.default.createElement('div', { className: 'archive-break-row' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      var headerText = 'Archived Orders / ' + this.props.currentStore.name;
      var archivedOrderHeaders = this.renderArchivedOrderHeaders;
      var archivedOrderRows = this.renderArchivedOrderRows;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'archive' },
          archivedOrderHeaders(),
          archivedOrderRows()
        )
      );
    }
  }]);

  return ArchivedOrders;
}(_react.Component);

ArchivedOrders.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  archivedOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getArchivedOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArchivedOrders);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvQXJjaGl2ZWRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcz81MjU5Il0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJjdXJyZW50U3RvcmUiLCJhcmNoaXZlZE9yZGVycyIsInVzZXJSb2xlcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEFyY2hpdmVkT3JkZXJzIiwic2V0TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiZGlzcGF0Y2giLCJBcmNoaXZlZE9yZGVycyIsInByb3BzIiwicmVuZGVyQXJjaGl2ZWRPcmRlclJvd3MiLCJtYXAiLCJyZW5kZXJBcmNoaXZlZE9yZGVyUm93Iiwib3JkZXIiLCJzdGF0ZSIsImxvYWRpbmdPcmRlcnMiLCJyZW5kZXJBcmNoaXZlZE9yZGVySGVhZGVycyIsInJvbGUiLCJjdXN0b21lck9yVGFpbG9yIiwicXVhbnRpdHlPclNvdXJjZSIsImFkbWluIiwidGhlbiIsInJvbGVzIiwiaWQiLCJ0YWlsb3IiLCJyZXRhaWxlciIsImN1c3RvbWVyIiwiYWx0ZXJhdGlvbnNfY291bnQiLCJmdWxmaWxsZWREYXRlIiwiZnVsZmlsbGVkX2RhdGUiLCJmb3JtYXQiLCJxdWFudGl0eU9yUmV0YWlsZXIiLCJuYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJvdXRlIiwiY29sb3IiLCJoZWFkZXJUZXh0IiwiYXJjaGl2ZWRPcmRlckhlYWRlcnMiLCJhcmNoaXZlZE9yZGVyUm93cyIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldENhcnQiLCJTZWN0aW9uSGVhZGVyIiwi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QUFPO0FBQ0xDLGlCQUFhQyxNQUFNRCxXQURkO0FBRUxJLGVBQVdILE1BQU1HO0FBRlosR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsV0FBWTtBQUNyQyxTQUFPLCtCQUNMO0FBQ0VrRDtBQURGLEdBREssRUFJTDlDLFFBSkssQ0FBUDtBQU1ELENBUEQ7a0JBUWUseUJBQVFWLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2Q21ELGFBQTdDLEMiLCJmaWxlIjoiMC4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdldEFyY2hpdmVkT3JkZXJzLCBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9TZWN0aW9uSGVhZGVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICBjdXJyZW50U3RvcmU6IHN0b3JlLmN1cnJlbnRTdG9yZSxcbiAgICBhcmNoaXZlZE9yZGVyczogc3RvcmUuYXJjaGl2ZWRPcmRlcnMsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAgeyBnZXRBcmNoaXZlZE9yZGVycywgc2V0TG9hZGVyLCByZW1vdmVMb2FkZXIgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgQXJjaGl2ZWRPcmRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbG9hZGluZ09yZGVyczogdHJ1ZSB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50VXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50U3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgYXJjaGl2ZWRPcmRlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICB1c2VyUm9sZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgZ2V0QXJjaGl2ZWRPcmRlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHNldExvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgcmVtb3ZlTG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNldExvYWRlciwgcmVtb3ZlTG9hZGVyLCBnZXRBcmNoaXZlZE9yZGVycyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHNldExvYWRlcigpO1xuICAgIGdldEFyY2hpdmVkT3JkZXJzKCkudGhlbigoKSA9PiByZW1vdmVMb2FkZXIoKSk7XG4gIH1cblxuICByZW5kZXJBcmNoaXZlZE9yZGVyUm93KG9yZGVyKSB7XG4gICAgY29uc3QgeyB1c2VyUm9sZXM6IHJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaWQsIHRhaWxvciwgcmV0YWlsZXIsIGN1c3RvbWVyLCBhbHRlcmF0aW9uc19jb3VudCB9ID0gb3JkZXI7XG5cbiAgICBjb25zdCBmdWxmaWxsZWREYXRlID0gbW9tZW50KG9yZGVyLmZ1bGZpbGxlZF9kYXRlKS5mb3JtYXQoJ01NLURELVlZWVknKTtcbiAgICBsZXQgY3VzdG9tZXJPclRhaWxvciwgcXVhbnRpdHlPclJldGFpbGVyO1xuICAgIGlmIChyb2xlcy5hZG1pbikge1xuICAgICAgaWYgKCF0YWlsb3IgfHwgIXJldGFpbGVyKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGN1c3RvbWVyT3JUYWlsb3IgPSB0YWlsb3IubmFtZTtcbiAgICAgIHF1YW50aXR5T3JSZXRhaWxlciA9IHJldGFpbGVyLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIH0gPSBjdXN0b21lcjtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtmaXJzdF9uYW1lfSAke2xhc3RfbmFtZX1gO1xuICAgICAgY3VzdG9tZXJPclRhaWxvciA9IG5hbWU7XG4gICAgICBxdWFudGl0eU9yUmV0YWlsZXIgPSBhbHRlcmF0aW9uc19jb3VudDtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IGAvb3JkZXJzLyR7aWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmNoaXZlLXJvd1wiIGtleT17aWR9PlxuICAgICAgICA8TGluayB0bz17cm91dGV9IGNsYXNzTmFtZT1cImFyY2hpdmUtbGlua1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1vcmRlci1jZWxsXCI+I3tpZH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyY2hpdmUtb3JkZXItY2VsbFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PlxuICAgICAgICAgICAge2Z1bGZpbGxlZERhdGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmNoaXZlLW9yZGVyLWNlbGxcIj57Y3VzdG9tZXJPclRhaWxvcn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyY2hpdmUtb3JkZXItY2VsbFwiPntxdWFudGl0eU9yUmV0YWlsZXJ9PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmNoaXZlLWJyZWFrLXJvd1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQXJjaGl2ZWRPcmRlclJvd3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhcmNoaXZlZE9yZGVycyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaXNFbXB0eShhcmNoaXZlZE9yZGVycykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICB7YXJjaGl2ZWRPcmRlcnMubWFwKG9yZGVyID0+IHRoaXMucmVuZGVyQXJjaGl2ZWRPcmRlclJvdyhvcmRlcikpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmxvYWRpbmdPcmRlcnMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW9yZGVyc1wiPkxvYWRpbmcgT3JkZXJzLi4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW9yZGVyc1wiPk5vIG9yZGVycyBmb3VuZCE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJBcmNoaXZlZE9yZGVySGVhZGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXJSb2xlczogcm9sZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY3VzdG9tZXJPclRhaWxvciwgcXVhbnRpdHlPclNvdXJjZTtcblxuICAgIGlmIChyb2xlLmFkbWluKSB7XG4gICAgICBjdXN0b21lck9yVGFpbG9yID0gJ1RhaWxvcic7XG4gICAgICBxdWFudGl0eU9yU291cmNlID0gJ1NvdXJjZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWVyT3JUYWlsb3IgPSAnQ3VzdG9tZXInO1xuICAgICAgcXVhbnRpdHlPclNvdXJjZSA9ICdRdWFudGl0eSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1oZWFkZXJzLXJvd1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFyY2hpdmUtaGVhZGVyLWNlbGxcIj5PcmRlcjwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYXJjaGl2ZS1oZWFkZXItY2VsbFwiPkZ1bEZpbGxlZCBEYXRlPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcmNoaXZlLWhlYWRlci1jZWxsXCI+e2N1c3RvbWVyT3JUYWlsb3J9PC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcmNoaXZlLWhlYWRlci1jZWxsXCI+e3F1YW50aXR5T3JTb3VyY2V9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1oZWFkZXItYnJlYWstcm93XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudFN0b3JlKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gYEFyY2hpdmVkIE9yZGVycyAvICR7dGhpcy5wcm9wcy5jdXJyZW50U3RvcmUubmFtZX1gO1xuICAgIGNvbnN0IGFyY2hpdmVkT3JkZXJIZWFkZXJzID0gdGhpcy5yZW5kZXJBcmNoaXZlZE9yZGVySGVhZGVycztcbiAgICBjb25zdCBhcmNoaXZlZE9yZGVyUm93cyA9IHRoaXMucmVuZGVyQXJjaGl2ZWRPcmRlclJvd3M7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD17aGVhZGVyVGV4dH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmNoaXZlXCI+XG4gICAgICAgICAge2FyY2hpdmVkT3JkZXJIZWFkZXJzKCl9XG4gICAgICAgICAge2FyY2hpdmVkT3JkZXJSb3dzKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcmNoaXZlZE9yZGVycyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvQXJjaGl2ZWRPcmRlcnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==