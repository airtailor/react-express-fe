webpackHotUpdate(0,{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(53);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      email: '',
      password: '',
      user: '',
      headers: '',
      store: '',
      errors: {}
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'updateEmail',
    value: function updateEmail(email) {
      this.setState({ email: email });
    }
  }, {
    key: 'updatePassword',
    value: function updatePassword(password) {
      this.setState({ password: password });
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user) {
      var email = user.email,
          id = user.id,
          uid = user.uid,
          store_id = user.store_id;

      this.setState({ user: { email: email, id: id, uid: uid, store_id: store_id } });
    }
  }, {
    key: 'updateHeaders',
    value: function updateHeaders(headers) {
      var accessToken = headers['access-token'];
      var client = headers.client;
      this.setState({ headers: { accessToken: accessToken, client: client } });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var _state = this.state,
          email = _state.email,
          password = _state.password;

      _axios2.default.post('/api/login', {
        email: email,
        password: password
      }).then(function (res) {
        _this2.updateUser(res.data.body);
        _this2.updateHeaders(res.data.headers);
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'getUsersStore',
    value: function getUsersStore() {
      var _state$headers = this.state.headers,
          accessToken = _state$headers.accessToken,
          client = _state$headers.client;
      var _state$user = this.state.user,
          uid = _state$user.uid,
          store_id = _state$user.store_id;

      debugger;
      _axios2.default.get('/api/store/' + store_id, {
        accessToken: accessToken,
        client: client,
        uid: uid
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      if (!this.store) {
        return _react2.default.createElement('div', null);
      } else {
        var name = this.state.store.name;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            name
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.state.user || !this.state.headers) {
        return _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this3.handleSubmit(e);
            } },
          _react2.default.createElement(
            'label',
            null,
            'Email:',
            _react2.default.createElement('input', {
              value: this.state.email,
              onChange: function onChange(e) {
                return _this3.updateEmail(e.target.value);
              } })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Password:',
            _react2.default.createElement('input', {
              value: this.state.password,
              onChange: function onChange(e) {
                return _this3.updatePassword(e.target.value);
              },
              type: 'password' })
          ),
          _react2.default.createElement('input', { disabled: false, type: 'submit', value: 'Submit' })
        );
      } else if (this.state.user && this.state.headers) {
        console.log("user:", this.state.user);
        var _state$user2 = this.state.user,
            email = _state$user2.email,
            id = _state$user2.id,
            store_id = _state$user2.store_id,
            uid = _state$user2.uid;
        var _state$headers2 = this.state.headers,
            accessToken = _state$headers2.accessToken,
            client = _state$headers2.client;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            ' User Info '
          ),
          _react2.default.createElement(
            'h3',
            null,
            ' Welcome, ',
            email,
            '! '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' User id: ',
            id,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' store id: ',
            store_id,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' uid: ',
            uid,
            ' '
          ),
          _react2.default.createElement(
            'h1',
            null,
            ' Header Info '
          ),
          _react2.default.createElement(
            'h3',
            null,
            ' Access Token: ',
            accessToken,
            '! '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' Clent: ',
            client,
            ' '
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this3.getUsersStore();
              } },
            'Store Info'
          ),
          this.renderStore()
        );
      }
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ })

})