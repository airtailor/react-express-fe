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
      orders: '',
      errors: {}
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'initialState',
    value: function initialState() {
      return {
        email: '',
        password: '',
        user: '',
        headers: '',
        store: '',
        orders: '',
        errors: {}
      };
    }
  }, {
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
          store_id = user.store_id,
          roles = user.roles;

      this.setState({ user: { email: email, id: id, uid: uid, store_id: store_id, roles: roles } });
    }
  }, {
    key: 'updateHeaders',
    value: function updateHeaders(headers) {
      var accessToken = headers['access-token'];
      var client = headers.client;
      this.setState({ headers: { accessToken: accessToken, client: client } });
    }
  }, {
    key: 'updateStore',
    value: function updateStore(store) {
      var id = store.id,
          company_id = store.company_id,
          phone = store.phone,
          street1 = store.street1,
          street2 = store.street2,
          city = store.city,
          zip = store.zip,
          name = store.name;

      this.setState({
        store: { id: id, company_id: company_id, phone: phone, street1: street1, street2: street2, city: city, zip: zip, name: name }
      });
    }
  }, {
    key: 'updateOrders',
    value: function updateOrders(store) {
      if (this.state.user.roles[0].name == "tailor") {
        var new_orders = store.new_orders,
            late_orders = store.late_orders,
            current_orders = store.current_orders;

        this.setState({
          orders: { new_orders: new_orders, late_orders: late_orders, current_orders: current_orders }
        });
      }
    }
  }, {
    key: 'signIn',
    value: function signIn(event) {
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
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'removeCurrentUser',
    value: function removeCurrentUser() {
      var initialState = this.initialState();
      this.setState(initialState);
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      var _this3 = this;

      var _state$headers = this.state.headers,
          accessToken = _state$headers.accessToken,
          client = _state$headers.client;
      var uid = this.state.user.uid;

      var body = { accessToken: accessToken, client: client, uid: uid };
      _axios2.default.post('/api/sign_out', body).then(function (res) {
        _this3.removeCurrentUser();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'getUsersStore',
    value: function getUsersStore() {
      var _this4 = this;

      var _state$headers2 = this.state.headers,
          accessToken = _state$headers2.accessToken,
          client = _state$headers2.client;
      var _state$user = this.state.user,
          uid = _state$user.uid,
          store_id = _state$user.store_id;

      var body = { accessToken: accessToken, client: client, uid: uid };

      _axios2.default.post('/api/store/' + store_id, body).then(function (res) {
        _this4.updateStore(res.data.body);
        _this4.updateOrders(res.data.body);
      }).catch(function (err) {
        console.log("error", err);
      });
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      if (!this.state.store) {
        return _react2.default.createElement('div', null);
      } else {
        var _state$store = this.state.store,
            _name = _state$store.name,
            _street = _state$store.street1,
            _street2 = _state$store.street2,
            _city = _state$store.city,
            _state2 = _state$store.state,
            _company_id = _state$store.company_id;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _name
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _street,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _street2,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _city,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            _state2,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' company id: ',
            _company_id,
            ' '
          )
        );
      }
    }
  }, {
    key: 'renderOrders',
    value: function renderOrders() {
      if (!this.state.orders) {
        return _react2.default.createElement('div', null);
      } else {
        debugger;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            name
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            street1,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            street2,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            city,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' ',
            state,
            ' '
          ),
          _react2.default.createElement(
            'p',
            null,
            ' company id: ',
            company_id,
            ' '
          )
        );
      }
    }
  }, {
    key: 'renderRoles',
    value: function renderRoles() {
      var roles = this.state.user.roles;

      if (roles.length > 0) {
        return roles.map(function (role, i) {
          var name = role.name;

          return _react2.default.createElement(
            'span',
            { key: i },
            name.charAt(0).toUpperCase() + name.slice(1)
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (!this.state.user || !this.state.headers) {
        return _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this5.signIn(e);
            } },
          _react2.default.createElement(
            'label',
            null,
            'Email:',
            _react2.default.createElement('input', {
              autoFocus: true,
              value: this.state.email,
              onChange: function onChange(e) {
                return _this5.updateEmail(e.target.value);
              } })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Password:',
            _react2.default.createElement('input', {
              value: this.state.password,
              onChange: function onChange(e) {
                return _this5.updatePassword(e.target.value);
              },
              type: 'password' })
          ),
          _react2.default.createElement('input', { disabled: false, type: 'submit', value: 'Submit' })
        );
      } else if (this.state.user && this.state.headers) {
        var email = this.state.user.email;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            ' ',
            this.renderRoles(),
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
            'button',
            { onClick: function onClick() {
                return _this5.signOut();
              } },
            'Sign Out'
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this5.getUsersStore();
              } },
            'Store Info'
          ),
          this.renderStore(),
          this.renderOrders()
        );
      }
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ })

})