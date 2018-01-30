webpackJsonp([14],{

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportsIndex = function (_Component) {
  _inherits(ReportsIndex, _Component);

  function ReportsIndex() {
    _classCallCheck(this, ReportsIndex);

    return _possibleConstructorReturn(this, (ReportsIndex.__proto__ || Object.getPrototypeOf(ReportsIndex)).apply(this, arguments));
  }

  _createClass(ReportsIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reports-container' },
        _react2.default.createElement(
          'h1',
          null,
          'Order Reports Index'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/reports/orders' },
          'Order Reports'
        )
      );
    }
  }]);

  return ReportsIndex;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(ReportsIndex);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9yZXBvcnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcz85OTIzKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzPzI4ZjMqKioqKiJdLCJuYW1lcyI6WyJSZXBvcnRzSW5kZXgiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwicHJvcHMiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldFNlY3Rpb25IZWFkZXJUZXh0IiwicGF0aCIsIm1hdGNoIiwiV2l0aFNlY3Rpb25IZWFkZXIiLCJXcmFwcGVkQ29tcG9uZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxJQUFHLHVCQUFUO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7Ozs7O2tCQUdZLGlDQUFrQkEsWUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7OztBQUNBOztBQUNBOztB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SDtBQUFBO0FBQUEsK0JBYVc7QUFDUCxlQUNFO0FBQUE7QUFBQTtBQUNFLG1FQUFlLE1BQU0sS0FBS1csS0FBTCxDQUFXWCxJQUFoQyxHQURGO0FBRUUsd0NBQUMsZ0JBQUQsRUFBc0IsS0FBS1osS0FBM0I7QUFGRixTQURGO0FBTUQ7QUFwQkg7O0FBQUE7QUFBQTtBQXNCRDs7a0JBRWNxQixpQiIsImZpbGUiOiIxNC4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgV2l0aFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vSE9DL1dpdGhTZWN0aW9uSGVhZGVyJztcblxuY2xhc3MgUmVwb3J0c0luZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5PcmRlciBSZXBvcnRzIEluZGV4PC9oMT5cbiAgICAgICAgPExpbmsgdG89XCIvYWRtaW4vcmVwb3J0cy9vcmRlcnNcIj5PcmRlciBSZXBvcnRzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoU2VjdGlvbkhlYWRlcihSZXBvcnRzSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvcmVwb3J0cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcmVzZXRDYXJ0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcnRSaWJib24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcm90YXRlLCB1c2VyUm9sZXMsIGluY2x1ZGVMaW5rID0gdHJ1ZSB9ID0gcHJvcHM7XG4gIGxldCBsaW5rID0gcHJvcHMubGluaztcbiAgbGV0IG9uQ2xpY2s7XG5cbiAgaWYgKCFyb3RhdGUgfHwgcm90YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIGxpbmsgPSAnL29yZGVycy9uZXcnO1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnJyk7XG4gIH0gZWxzZSB7XG4gICAgb25DbGljayA9ICgpID0+IHByb3BzLnJlc2V0Q2FydCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLnVzZXJSb2xlcy5hZG1pbiB8fCBwcm9wcy51c2VyUm9sZXMucmV0YWlsZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY2FydC1yaWJib25cIiB0bz17bGlua30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BjYXJ0LXJpYmJvbi1zaWduICR7cm90YXRlfWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvbi10cmlhbmdsZVwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICA8aDI+e3Byb3BzLnRleHR9PC9oMj5cbiAgICAgIHtDYXJ0UmliYm9uKHByb3BzKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgcmVzZXRDYXJ0LFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWN0aW9uSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanMiLCJleHBvcnQgY29uc3QgZ2V0U2VjdGlvbkhlYWRlclRleHQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbWF0Y2g6IHsgcGF0aCB9IH0gPSBwcm9wcztcbiAgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cycpIHtcbiAgICByZXR1cm4gJ0FpciBUYWlsb3IgLyBSZXBvcnRzJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL2FkbWluL3JlcG9ydHMvb3JkZXJzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIE9yZGVyIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvc3RvcmVzL25ldycpIHtcbiAgICByZXR1cm4gJ1N0b3JlcyAvIE5ldyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy91c2Vycy86dXNlcl9pZC9lZGl0Jykge1xuICAgIHJldHVybiAnRWRpdCBVc2VyJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL29yZGVycy9uZXcnKSB7XG4gICAgcmV0dXJuICdBZ3JlZSBUbyBUZXJtcyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zaXRlL3Rlcm1zX29mX3NlcnZpY2UnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQge2dldFNlY3Rpb25IZWFkZXJUZXh0fSBmcm9tICcuL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFdpdGhTZWN0aW9uSGVhZGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhTZWN0aW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZ2V0U2VjdGlvbkhlYWRlclRleHQodGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9IC8+XG4gICAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==