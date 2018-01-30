webpackJsonp([8],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(24);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _OrderReportRows = __webpack_require__(741);

var _OrderReportRows2 = _interopRequireDefault(_OrderReportRows);

var _actions = __webpack_require__(742);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    report: store.currentReport
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCurrentReport: _actions.getCurrentReport, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader }, dispatch);
};

var OrdersReport = function (_Component) {
  _inherits(OrdersReport, _Component);

  function OrdersReport() {
    _classCallCheck(this, OrdersReport);

    return _possibleConstructorReturn(this, (OrdersReport.__proto__ || Object.getPrototypeOf(OrdersReport)).apply(this, arguments));
  }

  _createClass(OrdersReport, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCurrentReport();
    }
  }, {
    key: 'renderReportHeaders',
    value: function renderReportHeaders() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'report-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'report-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Order'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Total'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Fulfilled'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Tailor'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'retailer'
            )
          )
        ),
        _react2.default.createElement('div', { className: 'report-header-break-row' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$report = this.props.report,
          start_date = _props$report.start_date,
          end_date = _props$report.end_date,
          orders = _props$report.orders;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'reports-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Current Orders Report'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Start Date: ',
            start_date
          ),
          _react2.default.createElement(
            'p',
            null,
            'End Date: ',
            end_date
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/reports' },
            'All Reports'
          )
        ),
        this.renderReportHeaders(),
        _react2.default.createElement(_OrderReportRows2.default, { orders: orders })
      );
    }
  }]);

  return OrdersReport;
}(_react.Component);

OrdersReport.propTypes = {
  report: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentReport: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(OrdersReport));

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

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSectionHeaderText = exports.getSectionHeaderText = function getSectionHeaderText(props) {
  var path = props.match.path;

  if (path === '/admin/reports') {
    return 'Air Tailor / Reports';
  } else if (path === '/admin/reports/orders') {
    return 'Air Tailor / Order Reports';
  } else if (path === '/stores/new') {
    return 'Stores / New';
  } else if (path === '/users/:user_id/edit') {
    return 'Edit User';
  } else if (path === '/orders/new') {
    return 'Agree To Terms';
  } else if (path === '/site/terms_of_service') {
    return '';
  }
};

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _helper = __webpack_require__(708);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WithSectionHeader(WrappedComponent) {
  return function (_Component) {
    _inherits(WithSectionHeader, _Component);

    function WithSectionHeader() {
      _classCallCheck(this, WithSectionHeader);

      var _this = _possibleConstructorReturn(this, (WithSectionHeader.__proto__ || Object.getPrototypeOf(WithSectionHeader)).call(this));

      _this.state = {
        text: ''
      };
      return _this;
    }

    _createClass(WithSectionHeader, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var text = (0, _helper.getSectionHeaderText)(this.props);
        this.setState({ text: text });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: this.state.text }),
          _react2.default.createElement(WrappedComponent, this.props)
        );
      }
    }]);

    return WithSectionHeader;
  }(_react.Component);
}

exports.default = WithSectionHeader;

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderReportRows = function (_Component) {
  _inherits(OrderReportRows, _Component);

  function OrderReportRows() {
    _classCallCheck(this, OrderReportRows);

    return _possibleConstructorReturn(this, (OrderReportRows.__proto__ || Object.getPrototypeOf(OrderReportRows)).apply(this, arguments));
  }

  _createClass(OrderReportRows, [{
    key: 'renderReportRows',
    value: function renderReportRows() {
      var orders = this.props.orders;

      return orders.map(function (order, index) {
        var id = order.id,
            fulfilled_date = order.fulfilled_date,
            retailerName = order.retailer.name,
            tailorName = order.tailor.name,
            total = order.total;


        var formattedDate = (0, _moment2.default)(fulfilled_date).format('MM-DD-YYYY');

        var route = '/orders/' + id;

        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'div',
            { className: 'report-row-container' },
            _react2.default.createElement(
              'div',
              { className: 'report-row' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: route, className: 'report-row-link' },
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  '#',
                  id
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  '$',
                  total.toFixed(2)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  formattedDate
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  tailorName
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  retailerName
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'orders' },
        _react2.default.createElement(
          'div',
          { className: 'reports-container' },
          this.renderReportRows()
        )
      );
    }
  }]);

  return OrderReportRows;
}(_react.Component);

OrderReportRows.propTypes = {
  orders: _propTypes2.default.array.isRequired // parentComponent
};
exports.default = OrderReportRows;

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentReport = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(339);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(34);

var setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
var getCurrentReport = exports.getCurrentReport = function getCurrentReport() {
  var url = '/api/reports/currentReport';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCurrentReport(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

var setCurrentReport = function setCurrentReport(report) {
  return {
    type: _constants.SET_CURRENT_REPORT,
    report: report
  };
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9yZXBvcnRzL29yZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaGVscGVyLmpzPzk5MjMqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9pbmRleC5qcz8yOGYzKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9yZXBvcnRzL29yZGVycy9PcmRlclJlcG9ydFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlcnMvZHVja3MvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJyZXBvcnQiLCJzdG9yZSIsImN1cnJlbnRSZXBvcnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXRDdXJyZW50UmVwb3J0Iiwic2V0TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiZGlzcGF0Y2giLCJPcmRlcnNSZXBvcnQiLCJwcm9wcyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIm9yZGVycyIsInJlbmRlclJlcG9ydEhlYWRlcnMiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsImN1cnJlbnRVc2VyIiwiZ2V0U2VjdGlvbkhlYWRlclRleHQiLCJwYXRoIiwibWF0Y2giLCJXaXRoU2VjdGlvbkhlYWRlciIsIldyYXBwZWRDb21wb25lbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiT3JkZXJSZXBvcnRSb3dzIiwibWFwIiwib3JkZXIiLCJpbmRleCIsImlkIiwiZnVsZmlsbGVkX2RhdGUiLCJyZXRhaWxlck5hbWUiLCJuYW1lIiwidGFpbG9yTmFtZSIsInRhaWxvciIsInRvdGFsIiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdCIsInJvdXRlIiwidG9GaXhlZCIsInJlbmRlclJlcG9ydFJvd3MiLCJhcnJheSIsInJlcXVpcmUiLCJ2YWxpZGF0ZVRva2VuIiwic2V0VG9rZW5zIiwidXJsIiwidGhlbiIsImdldCIsInNldEN1cnJlbnRSZXBvcnQiLCJyZXMiLCJkYXRhIiwiYm9keSIsImNhdGNoIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsWUFBUUMsTUFBTUM7QUFEVCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQ0wsRUFBRUMsMkNBQUYsRUFBb0JDLDZCQUFwQixFQUErQkMsbUNBQS9CLEVBREssRUFFTEMsUUFGSyxDQUFQO0FBSUQsQ0FMRDs7SUFPTUMsWTs7Ozs7Ozs7Ozs7d0NBUWdCO0FBQ2xCLFdBQUtDLEtBQUwsQ0FBV0wsZ0JBQVg7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsb0JBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxvQkFBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLG9C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QlAsSUFBTUosbUJBQW1CLFNBQW5CQSxnQkFBbUIsU0FBVTtBQUNqQyxTQUFPO0FBQ0xLLHVDQURLO0FBRUxwRTtBQUZLLEdBQVA7QUFJRCxDQUxELEMiLCJmaWxlIjoiOC4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBXaXRoU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9IT0MvV2l0aFNlY3Rpb25IZWFkZXInO1xuaW1wb3J0IE9yZGVyUmVwb3J0Um93cyBmcm9tICcuL09yZGVyUmVwb3J0Um93cyc7XG5pbXBvcnQgeyBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgZ2V0Q3VycmVudFJlcG9ydCB9IGZyb20gJy4vZHVja3MvYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZXBvcnQ6IHN0b3JlLmN1cnJlbnRSZXBvcnQsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAgeyBnZXRDdXJyZW50UmVwb3J0LCBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuXG5jbGFzcyBPcmRlcnNSZXBvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJlcG9ydDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRDdXJyZW50UmVwb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50UmVwb3J0KCk7XG4gIH1cblxuICByZW5kZXJSZXBvcnRIZWFkZXJzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0LWhlYWRlcnMtcm93XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3J0LWhlYWRlci1jZWxsXCI+T3JkZXI8L2gzPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9ydC1oZWFkZXItY2VsbFwiPlRvdGFsPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcnQtaGVhZGVyLWNlbGxcIj5GdWxmaWxsZWQ8L2gzPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9ydC1oZWFkZXItY2VsbFwiPlRhaWxvcjwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3J0LWhlYWRlci1jZWxsXCI+cmV0YWlsZXI8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcnQtaGVhZGVyLWJyZWFrLXJvd1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIG9yZGVycyB9ID0gdGhpcy5wcm9wcy5yZXBvcnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0cy1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+Q3VycmVudCBPcmRlcnMgUmVwb3J0PC9oMT5cbiAgICAgICAgICA8cD5TdGFydCBEYXRlOiB7c3RhcnRfZGF0ZX08L3A+XG4gICAgICAgICAgPHA+RW5kIERhdGU6IHtlbmRfZGF0ZX08L3A+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRtaW4vcmVwb3J0c1wiPkFsbCBSZXBvcnRzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyUmVwb3J0SGVhZGVycygpfVxuICAgICAgICA8T3JkZXJSZXBvcnRSb3dzIG9yZGVycz17b3JkZXJzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShcbiAgV2l0aFNlY3Rpb25IZWFkZXIoT3JkZXJzUmVwb3J0KVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXJzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImV4cG9ydCBjb25zdCBnZXRTZWN0aW9uSGVhZGVyVGV4dCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtYXRjaDogeyBwYXRoIH0gfSA9IHByb3BzO1xuICBpZiAocGF0aCA9PT0gJy9hZG1pbi9yZXBvcnRzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cy9vcmRlcnMnKSB7XG4gICAgcmV0dXJuICdBaXIgVGFpbG9yIC8gT3JkZXIgUmVwb3J0cyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zdG9yZXMvbmV3Jykge1xuICAgIHJldHVybiAnU3RvcmVzIC8gTmV3JztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3VzZXJzLzp1c2VyX2lkL2VkaXQnKSB7XG4gICAgcmV0dXJuICdFZGl0IFVzZXInO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvb3JkZXJzL25ldycpIHtcbiAgICByZXR1cm4gJ0FncmVlIFRvIFRlcm1zJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3NpdGUvdGVybXNfb2Zfc2VydmljZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaGVscGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7Z2V0U2VjdGlvbkhlYWRlclRleHR9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gV2l0aFNlY3Rpb25IZWFkZXIoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gY2xhc3MgV2l0aFNlY3Rpb25IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBnZXRTZWN0aW9uSGVhZGVyVGV4dCh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e3RoaXMuc3RhdGUudGV4dH0gLz5cbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aFNlY3Rpb25IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY2xhc3MgT3JkZXJSZXBvcnRSb3dzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgfTtcblxuICByZW5kZXJSZXBvcnRSb3dzKCkge1xuICAgIGNvbnN0IHsgb3JkZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBvcmRlcnMubWFwKChvcmRlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGZ1bGZpbGxlZF9kYXRlLFxuICAgICAgICByZXRhaWxlcjogeyBuYW1lOiByZXRhaWxlck5hbWUgfSxcbiAgICAgICAgdGFpbG9yOiB7IG5hbWU6IHRhaWxvck5hbWUgfSxcbiAgICAgICAgdG90YWwsXG4gICAgICB9ID0gb3JkZXI7XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBtb21lbnQoZnVsZmlsbGVkX2RhdGUpLmZvcm1hdCgnTU0tREQtWVlZWScpO1xuXG4gICAgICBjb25zdCByb3V0ZSA9IGAvb3JkZXJzLyR7aWR9YDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1yb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1yb3dcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89e3JvdXRlfSBjbGFzc05hbWU9XCJyZXBvcnQtcm93LWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1jZWxsXCI+I3tpZH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1jZWxsXCI+JHt0b3RhbC50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0LWNlbGxcIj57Zm9ybWF0dGVkRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1jZWxsXCI+e3RhaWxvck5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcnQtY2VsbFwiPntyZXRhaWxlck5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0cy1jb250YWluZXJcIj57dGhpcy5yZW5kZXJSZXBvcnRSb3dzKCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyUmVwb3J0Um93cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXJzL09yZGVyUmVwb3J0Um93cy5qcyIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTRVRfQ1VSUkVOVF9SRVBPUlQsIGV4cHJlc3NBcGkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNldExvYWRlcixcbiAgcmVtb3ZlTG9hZGVyLFxuICB2YWxpZGF0ZVRva2VuLFxuICBzZXRUb2tlbnMsXG59ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vYWN0aW9ucycpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFJlcG9ydCA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gYC9hcGkvcmVwb3J0cy9jdXJyZW50UmVwb3J0YDtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGVUb2tlbigpXG4gICAgICAudGhlbihzZXRUb2tlbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBBeGlvcy5nZXQodXJsKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UmVwb3J0KHJlcy5kYXRhLmJvZHkpKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCBzZXRDdXJyZW50UmVwb3J0ID0gcmVwb3J0ID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfQ1VSUkVOVF9SRVBPUlQsXG4gICAgcmVwb3J0LFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXJzL2R1Y2tzL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9