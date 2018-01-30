webpackJsonp([21],{

/***/ 690:
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

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(11);

var _actions = __webpack_require__(34);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailorList: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getTailorList: _actions.getTailorList }, dispatch);
};

var TailorsIndex = function (_Component) {
  _inherits(TailorsIndex, _Component);

  function TailorsIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TailorsIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TailorsIndex.__proto__ || Object.getPrototypeOf(TailorsIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderTailorRow = function (tailor) {
      var id = tailor.id,
          name = tailor.name,
          assigned = tailor.active_orders_count,
          arrived = tailor.arrived_orders_count,
          late = tailor.late_orders_count;


      var truncatedTailorName = _this.truncatedTailorName(name);
      var route = '/stores/' + id + '/orders';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'tailor-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'tailor-link' },
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              truncatedTailorName
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              assigned
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              arrived
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell', style: { color: 'red' } },
              late
            )
          )
        ),
        _react2.default.createElement('hr', { className: 'tailor-break-row' })
      );
    }, _this.renderTailorRows = function () {
      var tailorList = _this.props.tailorList;

      if (!(0, _isEmpty2.default)(tailorList)) {
        return _react2.default.createElement(
          'div',
          { className: 'tailor-container' },
          tailorList.map(function (tailor) {
            return _this.renderTailorRow(tailor);
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Tailors...'
          )
        );
      }
    }, _this.renderTailorHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tailor-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'tailor-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Tailor'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Assigned'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'In Stock'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Late'
            )
          ),
          _react2.default.createElement('hr', { className: 'tailor-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TailorsIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getTailorList = _props.getTailorList;

      setLoader();
      getTailorList().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'truncatedTailorName',
    value: function truncatedTailorName(name) {
      var length = 14;
      return name.length > 14 ? name.substring(0, 11) + '...' : name;
    }
  }, {
    key: 'render',
    value: function render() {
      var tailorOrderHeaders = this.renderTailorHeaders;
      var tailorOrderRows = this.renderTailorRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Tailors' }),
        _react2.default.createElement(
          'div',
          { className: 'tailors' },
          tailorOrderHeaders(),
          tailorOrderRows()
        )
      );
    }
  }]);

  return TailorsIndex;
}(_react.Component);

TailorsIndex.propTypes = {
  tailorList: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getTailorList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TailorsIndex);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi90YWlsb3JzL1RhaWxvckluZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioqKioqKioqKioqIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInRhaWxvckxpc3QiLCJzdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsImdldFRhaWxvckxpc3QiLCJkaXNwYXRjaCIsIlRhaWxvcnNJbmRleCIsInJlbmRlclRhaWxvclJvdyIsImlkIiwidGFpbG9yIiwibmFtZSIsImFzc2lnbmVkIiwiYWN0aXZlX29yZGVyc19jb3VudCIsImFycml2ZWQiLCJhcnJpdmVkX29yZGVyc19jb3VudCIsImxhdGUiLCJsYXRlX29yZGVyc19jb3VudCIsInRydW5jYXRlZFRhaWxvck5hbWUiLCJyb3V0ZSIsImNvbG9yIiwicmVuZGVyVGFpbG9yUm93cyIsInByb3BzIiwibWFwIiwicmVuZGVyVGFpbG9ySGVhZGVycyIsInRoZW4iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0YWlsb3JPcmRlckhlYWRlcnMiLCJ0YWlsb3JPcmRlclJvd3MiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQ2FydFJpYmJvbiIsInJvdGF0ZSIsInVzZXJSb2xlcyIsImluY2x1ZGVMaW5rIiwibGluayIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwicmVzZXRDYXJ0IiwiYWRtaW4iLCJyZXRhaWxlciIsIlNlY3Rpb25IZWFkZXIiLCJ0ZXh0IiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNB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QWpDLEVBQW9DO0FBQ2xDWSxXQUFPLGFBQVA7QUFDQUMsY0FBVTtBQUFBLGFBQU1DLFFBQVFDLEdBQVIsQ0FBWSxFQUFaLENBQU47QUFBQSxLQUFWO0FBQ0QsR0FIRCxNQUdPO0FBQ0xGLGNBQVU7QUFBQSxhQUFNakIsTUFBTW9CLFNBQU4sRUFBTjtBQUFBLEtBQVY7QUFDRDs7QUFFRCxNQUFJcEIsTUFBTWMsU0FBTixDQUFnQk8sS0FBaEIsSUFBeUJyQixNQUFNYyxTQUFOLENBQWdCUSxRQUE3QyxFQUF1RDtBQUNyRCxXQUNFO0FBQUE7QUFBQSxRQUFNLFdBQVUsYUFBaEIsRUFBOEIsSUFBSU4sSUFBbEM7QUFDRTtBQUFBO0FBQUEsVUFBSSxpQ0FBK0JILE1BQW5DLEVBQTZDLFNBQVNJLE9BQXREO0FBQUE7QUFBQSxPQURGO0FBSUUsNkNBQUssV0FBVSxzQkFBZjtBQUpGLEtBREY7QUFRRDtBQUNGLENBdEJEOztBQXdCQSxJQUFNTSxnQkFBZ0IsU0FBaEJBLGFBQWdCLFFBQVM7QUFDN0IsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUt2QixZQUFNd0I7QUFBWCxLQURGO0FBRUdaLGVBQVdaLEtBQVg7QUFGSCxHQURGO0FBTUQsQ0FQRDs7QUFTQSxJQUFNdkIsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTGdELGlCQUFhOUMsTUFBTThDLFdBRGQ7QUFFTFgsZUFBV25DLE1BQU1tQztBQUZaLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1sQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQ0w7QUFDRXdDO0FBREYsR0FESyxFQUlMcEMsUUFKSyxDQUFQO0FBTUQsQ0FQRDtrQkFRZSx5QkFBUVAsZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDMkMsYUFBN0MsQyIsImZpbGUiOiIyMS4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGdldFRhaWxvckxpc3QsIHNldExvYWRlciwgcmVtb3ZlTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWlsb3JMaXN0OiBzdG9yZS50YWlsb3JMaXN0XG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAgeyBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgZ2V0VGFpbG9yTGlzdCB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuXG5jbGFzcyBUYWlsb3JzSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRhaWxvckxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgZ2V0VGFpbG9yTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNldExvYWRlciwgcmVtb3ZlTG9hZGVyLCBnZXRUYWlsb3JMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldExvYWRlcigpO1xuICAgIGdldFRhaWxvckxpc3QoKS50aGVuKCgpID0+IHJlbW92ZUxvYWRlcigpKTtcbiAgfVxuXG4gIHRydW5jYXRlZFRhaWxvck5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxlbmd0aCA9IDE0O1xuICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDE0ID8gYCR7bmFtZS5zdWJzdHJpbmcoMCwgMTEpfS4uLmAgOiBuYW1lO1xuICB9XG5cbiAgcmVuZGVyVGFpbG9yUm93ID0gdGFpbG9yID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBhY3RpdmVfb3JkZXJzX2NvdW50OiBhc3NpZ25lZCxcbiAgICAgIGFycml2ZWRfb3JkZXJzX2NvdW50OiBhcnJpdmVkLFxuICAgICAgbGF0ZV9vcmRlcnNfY291bnQ6IGxhdGVcbiAgICB9ID0gdGFpbG9yO1xuXG4gICAgY29uc3QgdHJ1bmNhdGVkVGFpbG9yTmFtZSA9IHRoaXMudHJ1bmNhdGVkVGFpbG9yTmFtZShuYW1lKTtcbiAgICBjb25zdCByb3V0ZSA9IGAvc3RvcmVzLyR7aWR9L29yZGVyc2A7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItZGF0YS1yb3dcIj5cbiAgICAgICAgICA8TGluayB0bz17cm91dGV9IGNsYXNzTmFtZT1cInRhaWxvci1saW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhaWxvci1kYXRhLWNlbGxcIj57dHJ1bmNhdGVkVGFpbG9yTmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFpbG9yLWRhdGEtY2VsbFwiPnthc3NpZ25lZH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFpbG9yLWRhdGEtY2VsbFwiPnthcnJpdmVkfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItZGF0YS1jZWxsXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICB7bGF0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ0YWlsb3ItYnJlYWstcm93XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyVGFpbG9yUm93cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRhaWxvckxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFpc0VtcHR5KHRhaWxvckxpc3QpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhaWxvci1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGFpbG9yTGlzdC5tYXAodGFpbG9yID0+IHRoaXMucmVuZGVyVGFpbG9yUm93KHRhaWxvcikpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW9yZGVyc1wiPkxvYWRpbmcgVGFpbG9ycy4uLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlclRhaWxvckhlYWRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFpbG9yLWhlYWRlcnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVycy1yb3dcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVyLWNlbGxcIj5UYWlsb3I8L2gzPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRhaWxvci1oZWFkZXItY2VsbFwiPkFzc2lnbmVkPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVyLWNlbGxcIj5JbiBTdG9jazwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFpbG9yLWhlYWRlci1jZWxsXCI+TGF0ZTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRhaWxvci1oZWFkZXItYnJlYWstcm93XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWlsb3JPcmRlckhlYWRlcnMgPSB0aGlzLnJlbmRlclRhaWxvckhlYWRlcnM7XG4gICAgY29uc3QgdGFpbG9yT3JkZXJSb3dzID0gdGhpcy5yZW5kZXJUYWlsb3JSb3dzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXsnTWFuYWdlIFRhaWxvcnMnfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhaWxvcnNcIj5cbiAgICAgICAgICB7dGFpbG9yT3JkZXJIZWFkZXJzKCl9XG4gICAgICAgICAge3RhaWxvck9yZGVyUm93cygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGFpbG9yc0luZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FkbWluL3RhaWxvcnMvVGFpbG9ySW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==