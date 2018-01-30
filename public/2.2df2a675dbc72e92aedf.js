webpackJsonp([2],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _redux = __webpack_require__(24);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(34);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderCard = __webpack_require__(722);

var _OrderCard2 = _interopRequireDefault(_OrderCard);

var _OrderCardIcon = __webpack_require__(723);

var _OrderCardIcon2 = _interopRequireDefault(_OrderCardIcon);

var _images = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCurrentStore: _actions.getCurrentStore }, dispatch);
};

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      active_orders_count: 0,
      late_orders_count: 0
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          storeId = _props.currentUser.user.store_id,
          getCurrentStore = _props.getCurrentStore;


      (0, _actions.getOrderCount)(storeId).then(function (res) {
        _this2.setState(res.data.body);
      });

      getCurrentStore(storeId).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'retailerHome',
    value: function retailerHome(currentStore) {
      var _state = this.state,
          active_orders_count = _state.active_orders_count,
          late_orders_count = _state.late_orders_count;


      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'adminHome',
    value: function adminHome(currentStore) {
      var _state2 = this.state,
          active_orders_count = _state2.active_orders_count,
          late_orders_count = _state2.late_orders_count;

      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.exclamationImage, alt: 'orders' }),
          count: late_orders_count,
          type: 'Late',
          call: 'FULFILL >',
          styleClass: 'late-orders'
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'tailorHome',
    value: function tailorHome(currentStore) {
      var _state3 = this.state,
          active_orders_count = _state3.active_orders_count,
          late_orders_count = _state3.late_orders_count;

      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.exclamationImage, alt: 'orders' }),
          count: late_orders_count,
          type: 'Late',
          call: 'FULFILL >',
          styleClass: 'late-orders'
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'renderCards',
    value: function renderCards(roles, currentStore) {
      if (roles.tailor) {
        return this.tailorHome(currentStore);
      } else if (roles.admin) {
        return this.adminHome(currentStore);
      } else if (roles.retailer) {
        return this.retailerHome(currentStore);
      }
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      if (!(0, _isEmpty2.default)(this.props.currentStore)) {
        var _props2 = this.props,
            currentStore = _props2.currentStore,
            currentUser = _props2.currentUser,
            userRoles = _props2.userRoles;
        var id = currentStore.id,
            name = currentStore.name;

        var roles = userRoles;
        var storeEditPath = '/stores/' + id + '/edit';
        var storeOrShop = roles.retailer ? 'store' : 'shop';

        return _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(
            'h2',
            { className: 'greeting' },
            'Greetings, ',
            name
          ),
          _react2.default.createElement(
            'p',
            { className: 'greeting' },
            'Here\'s what\'s happening with your ',
            storeOrShop,
            ' right now.'
          ),
          this.renderCards(roles, currentStore)
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, {
          text: 'Home / ' + this.props.currentStore.name,
          showCart: !this.props.userRoles.tailor ? true : false,
          link: '/orders/new',
          rotate: ''
        }),
        this.renderStore()
      );
    }
  }]);

  return Home;
}(_react.Component);

Home.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentStore: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

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

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCard = function OrderCard(props) {
  var icon = props.icon,
      count = props.count,
      type = props.type,
      call = props.call,
      styleClass = props.styleClass;

  var className = styleClass + ' order-card';
  var countKind = void 0,
      link = void 0;

  if (styleClass === 'current-orders' || styleClass === 'late-orders') {
    countKind = 'Orders';
    link = '/orders';
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: link },
    _react2.default.createElement(
      'div',
      { className: className },
      icon,
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-count' },
        count
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-type' },
        type
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text' },
        countKind
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-call' },
        call
      )
    )
  );
};

exports.default = OrderCard;

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCardIcon = function OrderCardIcon(props) {
  var url = props.url,
      alt = props.alt;

  return _react2.default.createElement('img', { className: 'order-card-icon', src: url, alt: alt });
};

exports.default = OrderCardIcon;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL09yZGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9PcmRlckNhcmRJY29uLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJ1c2VyUm9sZXMiLCJjdXJyZW50U3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXRDdXJyZW50U3RvcmUiLCJkaXNwYXRjaCIsIkhvbWUiLCJzdGF0ZSIsImFjdGl2ZV9vcmRlcnNfY291bnQiLCJsYXRlX29yZGVyc19jb3VudCIsInByb3BzIiwic3RvcmVJZCIsInVzZXIiLCJzdG9yZV9pZCIsInRoZW4iLCJzZXRTdGF0ZSIsInJlcyIsImRhdGEiLCJib2R5IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicm9sZXMiLCJ0YWlsb3IiLCJ0YWlsb3JIb21lIiwiYWRtaW4iLCJhZG1pbkhvbWUiLCJyZXRhaWxlciIsInJldGFpbGVySG9tZSIsImlkIiwibmFtZSIsInN0b3JlRWRpdFBhdGgiLCJzdG9yZU9yU2hvcCIsInJlbmRlckNhcmRzIiwicmVuZGVyU3RvcmUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwicmVzZXRDYXJ0IiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJPcmRlckNhcmQiLCJpY29uIiwiY291bnQiLCJ0eXBlIiwiY2FsbCIsInN0eWxlQ2xhc3MiLCJjbGFzc05hbWUiLCJjb3VudEtpbmQiLCJPcmRlckNhcmRJY29uIiwidXJsIiwiYWx0Il0sIm1h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LENBQ0owQyxJQURJO0FBQUEsTUFDRUMsSUFERixHQUN1QjNDLEtBRHZCLENBQ0UyQyxJQURGO0FBQUEsTUFDUUMsVUFEUixHQUN1QjVDLEtBRHZCLENBQ1E0QyxVQURSOztBQUV6QixNQUFNQyxZQUFlRCxVQUFmLGdCQUFOO0FBQ0EsTUFBSUUsa0JBQUo7QUFBQSxNQUFlYixhQUFmOztBQUVBLE1BQUlXLGVBQWUsZ0JBQWYsSUFBbUNBLGVBQWUsYUFBdEQsRUFBcUU7QUFDbkVFLGdCQUFZLFFBQVo7QUFDQWIsV0FBTyxTQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBTSxJQUFJQSxJQUFWO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV1ksU0FBaEI7QUFDR0wsVUFESDtBQUVFO0FBQUE7QUFBQSxVQUFHLFdBQVUsa0NBQWI7QUFBaURDO0FBQWpELE9BRkY7QUFHRTtBQUFBO0FBQUEsVUFBRyxXQUFVLGlDQUFiO0FBQWdEQztBQUFoRCxPQUhGO0FBSUU7QUFBQTtBQUFBLFVBQUcsV0FBVSxpQkFBYjtBQUFnQ0k7QUFBaEMsT0FKRjtBQUtFO0FBQUE7QUFBQSxVQUFHLFdBQVUsaUNBQWI7QUFBZ0RIO0FBQWhEO0FBTEY7QUFERixHQURGO0FBV0QsQ0FyQkQ7O2tCQXVCZUosUzs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7Ozs7OztBQUVBLElBQU1RLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQy9DLEtBQUQsRUFBVztBQUFBLE1BQ3hCZ0QsR0FEd0IsR0FDWmhELEtBRFksQ0FDeEJnRCxHQUR3QjtBQUFBLE1BQ25CQyxHQURtQixHQUNaakQsS0FEWSxDQUNuQmlELEdBRG1COztBQUUvQixTQUNFLHVDQUFLLFdBQVUsaUJBQWYsRUFBaUMsS0FBS0QsR0FBdEMsRUFBMkMsS0FBS0MsR0FBaEQsR0FERjtBQUdELENBTEQ7O2tCQU9lRixhIiwiZmlsZSI6IjIuMmRmMmE2NzVkYmM3MmU5MmFlZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRTdG9yZSwgZ2V0T3JkZXJDb3VudCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0IE9yZGVyQ2FyZCBmcm9tICcuL09yZGVyQ2FyZCc7XG5pbXBvcnQgT3JkZXJDYXJkSWNvbiBmcm9tICcuL09yZGVyQ2FyZEljb24nO1xuaW1wb3J0IHsgb3JkZXJzSW1hZ2UsIGV4Y2xhbWF0aW9uSW1hZ2UgfSBmcm9tICcuLi9pbWFnZXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICAgIGN1cnJlbnRTdG9yZTogc3RvcmUuY3VycmVudFN0b3JlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgZ2V0Q3VycmVudFN0b3JlIH0sIGRpc3BhdGNoKTtcbn07XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVfb3JkZXJzX2NvdW50OiAwLFxuICAgICAgbGF0ZV9vcmRlcnNfY291bnQ6IDAsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudFVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgdXNlclJvbGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRDdXJyZW50U3RvcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRVc2VyOiB7IHVzZXI6IHsgc3RvcmVfaWQ6IHN0b3JlSWQgfSB9LFxuICAgICAgZ2V0Q3VycmVudFN0b3JlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZ2V0T3JkZXJDb3VudChzdG9yZUlkKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHJlcy5kYXRhLmJvZHkpO1xuICAgIH0pO1xuXG4gICAgZ2V0Q3VycmVudFN0b3JlKHN0b3JlSWQpLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0YWlsZXJIb21lKGN1cnJlbnRTdG9yZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlX29yZGVyc19jb3VudCwgbGF0ZV9vcmRlcnNfY291bnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS1ib3hlc1wiPlxuICAgICAgICA8T3JkZXJDYXJkXG4gICAgICAgICAgaWNvbj17PE9yZGVyQ2FyZEljb24gdXJsPXtvcmRlcnNJbWFnZX0gYWx0PVwib3JkZXJzXCIgLz59XG4gICAgICAgICAgY291bnQ9e2FjdGl2ZV9vcmRlcnNfY291bnR9XG4gICAgICAgICAgdHlwZT1cIkN1cnJlbnRcIlxuICAgICAgICAgIGNhbGw9XCJWSUVXID5cIlxuICAgICAgICAgIHN0eWxlQ2xhc3M9XCJjdXJyZW50LW9yZGVyc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgYWRtaW5Ib21lKGN1cnJlbnRTdG9yZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlX29yZGVyc19jb3VudCwgbGF0ZV9vcmRlcnNfY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcmUtYm94ZXNcIj5cbiAgICAgICAgPE9yZGVyQ2FyZFxuICAgICAgICAgIGljb249ezxPcmRlckNhcmRJY29uIHVybD17ZXhjbGFtYXRpb25JbWFnZX0gYWx0PVwib3JkZXJzXCIgLz59XG4gICAgICAgICAgY291bnQ9e2xhdGVfb3JkZXJzX2NvdW50fVxuICAgICAgICAgIHR5cGU9XCJMYXRlXCJcbiAgICAgICAgICBjYWxsPVwiRlVMRklMTCA+XCJcbiAgICAgICAgICBzdHlsZUNsYXNzPVwibGF0ZS1vcmRlcnNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxPcmRlckNhcmRcbiAgICAgICAgICBpY29uPXs8T3JkZXJDYXJkSWNvbiB1cmw9e29yZGVyc0ltYWdlfSBhbHQ9XCJvcmRlcnNcIiAvPn1cbiAgICAgICAgICBjb3VudD17YWN0aXZlX29yZGVyc19jb3VudH1cbiAgICAgICAgICB0eXBlPVwiQ3VycmVudFwiXG4gICAgICAgICAgY2FsbD1cIlZJRVcgPlwiXG4gICAgICAgICAgc3R5bGVDbGFzcz1cImN1cnJlbnQtb3JkZXJzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICB0YWlsb3JIb21lKGN1cnJlbnRTdG9yZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlX29yZGVyc19jb3VudCwgbGF0ZV9vcmRlcnNfY291bnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcmUtYm94ZXNcIj5cbiAgICAgICAgPE9yZGVyQ2FyZFxuICAgICAgICAgIGljb249ezxPcmRlckNhcmRJY29uIHVybD17ZXhjbGFtYXRpb25JbWFnZX0gYWx0PVwib3JkZXJzXCIgLz59XG4gICAgICAgICAgY291bnQ9e2xhdGVfb3JkZXJzX2NvdW50fVxuICAgICAgICAgIHR5cGU9XCJMYXRlXCJcbiAgICAgICAgICBjYWxsPVwiRlVMRklMTCA+XCJcbiAgICAgICAgICBzdHlsZUNsYXNzPVwibGF0ZS1vcmRlcnNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxPcmRlckNhcmRcbiAgICAgICAgICBpY29uPXs8T3JkZXJDYXJkSWNvbiB1cmw9e29yZGVyc0ltYWdlfSBhbHQ9XCJvcmRlcnNcIiAvPn1cbiAgICAgICAgICBjb3VudD17YWN0aXZlX29yZGVyc19jb3VudH1cbiAgICAgICAgICB0eXBlPVwiQ3VycmVudFwiXG4gICAgICAgICAgY2FsbD1cIlZJRVcgPlwiXG4gICAgICAgICAgc3R5bGVDbGFzcz1cImN1cnJlbnQtb3JkZXJzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDYXJkcyhyb2xlcywgY3VycmVudFN0b3JlKSB7XG4gICAgaWYgKHJvbGVzLnRhaWxvcikge1xuICAgICAgcmV0dXJuIHRoaXMudGFpbG9ySG9tZShjdXJyZW50U3RvcmUpO1xuICAgIH0gZWxzZSBpZiAocm9sZXMuYWRtaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkbWluSG9tZShjdXJyZW50U3RvcmUpO1xuICAgIH0gZWxzZSBpZiAocm9sZXMucmV0YWlsZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJldGFpbGVySG9tZShjdXJyZW50U3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclN0b3JlKCkge1xuICAgIGlmICghaXNFbXB0eSh0aGlzLnByb3BzLmN1cnJlbnRTdG9yZSkpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFN0b3JlLCBjdXJyZW50VXNlciwgdXNlclJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gY3VycmVudFN0b3JlO1xuICAgICAgY29uc3Qgcm9sZXMgPSB1c2VyUm9sZXM7XG4gICAgICBjb25zdCBzdG9yZUVkaXRQYXRoID0gYC9zdG9yZXMvJHtpZH0vZWRpdGA7XG4gICAgICBjb25zdCBzdG9yZU9yU2hvcCA9IHJvbGVzLnJldGFpbGVyID8gJ3N0b3JlJyA6ICdzaG9wJztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdyZWV0aW5nXCI+R3JlZXRpbmdzLCB7bmFtZX08L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZWV0aW5nXCI+XG4gICAgICAgICAgICBIZXJlJ3Mgd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIge3N0b3JlT3JTaG9wfSByaWdodCBub3cuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKHJvbGVzLCBjdXJyZW50U3RvcmUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICB0ZXh0PXtgSG9tZSAvICR7dGhpcy5wcm9wcy5jdXJyZW50U3RvcmUubmFtZX1gfVxuICAgICAgICAgIHNob3dDYXJ0PXshdGhpcy5wcm9wcy51c2VyUm9sZXMudGFpbG9yID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgIGxpbms9eycvb3JkZXJzL25ldyd9XG4gICAgICAgICAgcm90YXRlPXsnJ31cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucmVuZGVyU3RvcmUoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE9yZGVyQ2FyZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBpY29uLCBjb3VudCwgdHlwZSwgY2FsbCwgc3R5bGVDbGFzcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGAke3N0eWxlQ2xhc3N9IG9yZGVyLWNhcmRgO1xuICBsZXQgY291bnRLaW5kLCBsaW5rO1xuXG4gIGlmIChzdHlsZUNsYXNzID09PSAnY3VycmVudC1vcmRlcnMnIHx8IHN0eWxlQ2xhc3MgPT09ICdsYXRlLW9yZGVycycpIHtcbiAgICBjb3VudEtpbmQgPSAnT3JkZXJzJztcbiAgICBsaW5rID0gJy9vcmRlcnMnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17bGlua30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2ljb259XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9yZGVyLWNhcmQtdGV4dCBvcmRlci1jYXJkLWNvdW50XCI+e2NvdW50fTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3JkZXItY2FyZC10ZXh0IG9yZGVyLWNhcmQtdHlwZVwiPnt0eXBlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3JkZXItY2FyZC10ZXh0XCI+e2NvdW50S2luZH08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9yZGVyLWNhcmQtdGV4dCBvcmRlci1jYXJkLWNhbGxcIj57Y2FsbH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlckNhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9PcmRlckNhcmQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPcmRlckNhcmRJY29uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1cmwsIGFsdH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8aW1nIGNsYXNzTmFtZT0nb3JkZXItY2FyZC1pY29uJyBzcmM9e3VybH0gYWx0PXthbHR9IC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ2FyZEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9PcmRlckNhcmRJY29uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==