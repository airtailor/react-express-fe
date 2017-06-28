webpackHotUpdate(0,{

/***/ 216:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (23:62)\n\n\u001b[0m \u001b[90m 21 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 22 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m\u001b[33mEmail\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m onChange\u001b[33m=\u001b[39m{(e) \u001b[33m=>\u001b[39m { \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mupdateEmail(e\u001b[33m.\u001b[39mtarget) } \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 24 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m\u001b[33mPassword\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 25 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m onChange\u001b[33m=\u001b[39m{(e) \u001b[33m=>\u001b[39m { \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mupdatePassword(e\u001b[33m.\u001b[39mtarget) } \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 26 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(81);

var _react2 = _interopRequireDefault(_react);

var _SubTitle = __webpack_require__(213);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

__webpack_require__(214);

var _axios = __webpack_require__(190);

var _axios2 = _interopRequireDefault(_axios);

var _Login = __webpack_require__(216);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      user: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/users/1').then(function (data) {
        _this2.updateUser(data.data);
      });
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user) {
      this.setState({
        user: user
      });
    }
  }, {
    key: 'renderUser',
    value: function renderUser() {
      if (!this.state.user) {
        return _react2.default.createElement(
          'p',
          null,
          'Loading...'
        );
      }
      return _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Name: ',
          this.state.user.name
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          ' !!!!!Hi i am the app component! I am in root? '
        ),
        _react2.default.createElement(_SubTitle2.default, null),
        _react2.default.createElement(_Login2.default, null),
        this.renderUser()
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ })

})