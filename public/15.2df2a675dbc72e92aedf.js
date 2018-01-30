webpackJsonp([15],{

/***/ 688:
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

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Dashboard'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Lists'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/reports' },
            'Reports'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users/list' },
            'User List'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/tailors' },
            'Tailor List'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/retailers' },
            'Retailer List'
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Make a New Thing'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/companies/new' },
            'New Company'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/stores/new' },
            'New Store'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users/new' },
            'New User'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(Dashboard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaGVscGVyLmpzPzk5MjMqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzPzI4ZjMqKioqKioiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiQ2FydFJpYmJvbiIsInJvdGF0ZSIsInByb3BzIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldENhcnQiLCJhZG1pbiIsInJldGFpbGVyIiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjdXJyZW50VXNlciIsInN0b3JlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJnZXRTZWN0aW9uSGVhZGVyVGV4dCIsInBhdGgiLCJtYXRjaCIsIldpdGhTZWN0aW9uSGVhZGVyIiwiV3JhcHBlZENvbXBvbmVudCIsInN0YXRlIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxJQUFHLGdCQUFUO0FBQUE7QUFBQTtBQURGLFNBSEY7QUFNRSxpREFORjtBQUFBO0FBTVMsaURBTlQ7QUFPRTtBQUFBO0FB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Q25Db0IsS0FEbUMsQ0FDMUJELElBRDBCOztBQUUzQyxNQUFJQSxTQUFTLGdCQUFiLEVBQStCO0FBQzdCLFdBQU8sc0JBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsU0FBUyx1QkFBYixFQUFzQztBQUMzQyxXQUFPLDRCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFNBQVMsYUFBYixFQUE0QjtBQUNqQyxXQUFPLGNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyxzQkFBYixFQUFxQztBQUMxQyxXQUFPLFdBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyxhQUFiLEVBQTRCO0FBQ2pDLFdBQU8sZ0JBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyx3QkFBYixFQUF1QztBQUM1QyxXQUFPLEVBQVA7QUFDRDtBQUNGLENBZk0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNFLGlCQUFULENBQTJCQyxnQkFBM0IsRUFBNkM7QUFDM0M7QUFBQTs7QUFDRSxpQ0FBYztBQUFBOztBQUFBOztBQUVaLFlBQUtDLEtBQUwsR0FBYTtBQUNYWCxjQUFNO0FBREssT0FBYjtBQUZZO0FBS2I7O0FBTkg7QUFBQTtBQUFBLDBDQVFzQjtBQUNsQixZQUFNQSxPQUFPLGtDQUFxQixLQUFLWixLQUExQixDQUFiO0FBQ0EsYUFBS3dCLFFBQUwsQ0FBYyxFQUFDWixVQUFELEVBQWQ7QUFDRDtBQVhIO0FBQUE7QUFBQSwrQkFhVztBQUNQLGVBQ0U7QUFBQTtBQUFBO0FBQ0UsbUVBQWUsTUFBTSxLQUFLVyxLQUFMLENBQVdYLElBQWhDLEdBREY7QUFFRSx3Q0FBQyxnQkFBRCxFQUFzQixLQUFLWixLQUEzQjtBQUZGLFNBREY7QUFNRDtBQXBCSDs7QUFBQTtBQUFBO0FBc0JEOztrQkFFY3FCLGlCIiwiZmlsZSI6IjE1LjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBXaXRoU2VjdGlvbkhlYWRlciBmcm9tICcuLi9IT0MvV2l0aFNlY3Rpb25IZWFkZXInO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5EYXNoYm9hcmQ8L2gzPlxuICAgICAgICA8aDQ+TGlzdHM8L2g0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluL3JlcG9ydHNcIj5SZXBvcnRzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXJzL2xpc3RcIj5Vc2VyIExpc3Q8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRtaW4vdGFpbG9yc1wiPlRhaWxvciBMaXN0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluL3JldGFpbGVyc1wiPlJldGFpbGVyIExpc3Q8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDQ+TWFrZSBhIE5ldyBUaGluZzwvaDQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRtaW4vY29tcGFuaWVzL25ld1wiPk5ldyBDb21wYW55PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3N0b3Jlcy9uZXdcIj5OZXcgU3RvcmU8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgdG89XCIvdXNlcnMvbmV3XCI+TmV3IFVzZXI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyKERhc2hib2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcmVzZXRDYXJ0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcnRSaWJib24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcm90YXRlLCB1c2VyUm9sZXMsIGluY2x1ZGVMaW5rID0gdHJ1ZSB9ID0gcHJvcHM7XG4gIGxldCBsaW5rID0gcHJvcHMubGluaztcbiAgbGV0IG9uQ2xpY2s7XG5cbiAgaWYgKCFyb3RhdGUgfHwgcm90YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIGxpbmsgPSAnL29yZGVycy9uZXcnO1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnJyk7XG4gIH0gZWxzZSB7XG4gICAgb25DbGljayA9ICgpID0+IHByb3BzLnJlc2V0Q2FydCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLnVzZXJSb2xlcy5hZG1pbiB8fCBwcm9wcy51c2VyUm9sZXMucmV0YWlsZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY2FydC1yaWJib25cIiB0bz17bGlua30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BjYXJ0LXJpYmJvbi1zaWduICR7cm90YXRlfWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvbi10cmlhbmdsZVwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICA8aDI+e3Byb3BzLnRleHR9PC9oMj5cbiAgICAgIHtDYXJ0UmliYm9uKHByb3BzKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgcmVzZXRDYXJ0LFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWN0aW9uSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanMiLCJleHBvcnQgY29uc3QgZ2V0U2VjdGlvbkhlYWRlclRleHQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbWF0Y2g6IHsgcGF0aCB9IH0gPSBwcm9wcztcbiAgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cycpIHtcbiAgICByZXR1cm4gJ0FpciBUYWlsb3IgLyBSZXBvcnRzJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL2FkbWluL3JlcG9ydHMvb3JkZXJzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIE9yZGVyIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvc3RvcmVzL25ldycpIHtcbiAgICByZXR1cm4gJ1N0b3JlcyAvIE5ldyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy91c2Vycy86dXNlcl9pZC9lZGl0Jykge1xuICAgIHJldHVybiAnRWRpdCBVc2VyJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL29yZGVycy9uZXcnKSB7XG4gICAgcmV0dXJuICdBZ3JlZSBUbyBUZXJtcyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zaXRlL3Rlcm1zX29mX3NlcnZpY2UnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQge2dldFNlY3Rpb25IZWFkZXJUZXh0fSBmcm9tICcuL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFdpdGhTZWN0aW9uSGVhZGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhTZWN0aW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZ2V0U2VjdGlvbkhlYWRlclRleHQodGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9IC8+XG4gICAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==