webpackJsonp([9],{

/***/ 703:
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

var _redux = __webpack_require__(24);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _validations = __webpack_require__(331);

var _SelectRole = __webpack_require__(717);

var _SelectRole2 = _interopRequireDefault(_SelectRole);

var _SelectStore = __webpack_require__(757);

var _SelectStore2 = _interopRequireDefault(_SelectStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setGrowler: _actions.setGrowler }, dispatch);
};

var UsersNew = function (_Component) {
  _inherits(UsersNew, _Component);

  function UsersNew() {
    _classCallCheck(this, UsersNew);

    var _this = _possibleConstructorReturn(this, (UsersNew.__proto__ || Object.getPrototypeOf(UsersNew)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation,
          email = _this$state.email,
          role = _this$state.role,
          storeId = _this$state.storeId;


      var emailIsValid = _this.validateEmail(email);
      var passwordIsValid = _this.validatePasswords(password, passwordConfirmation);
      if (emailIsValid && passwordIsValid) {
        (0, _actions.createUser)({
          name: name,
          store_id: storeId,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          role: role
        }).then(function (res) {
          // error logging
          if (res.data === 422) {
            var kind = 'warning';
            var message = "User was not created. Make sure they don't already exist in the database.";
            _this.props.setGrowler({ kind: kind, message: message });
          } else {
            var _kind = 'success';
            var _message = 'User Created!';
            _this.props.setGrowler({ kind: _kind, message: _message });
            _this.setState(_this.initialStateObject());
          }
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = _this.initialStateObject();
    return _this;
  }

  _createClass(UsersNew, [{
    key: 'initialStateObject',
    value: function initialStateObject() {
      return {
        name: '',
        email: '',
        role: '',
        storeId: '',
        password: '',
        passwordConfirmation: ''
      };
    }
  }, {
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          return true;
        } else {
          var kind = 'warning';
          var message = 'Please enter a valid password! It should be longer than 6 characters';
          this.props.setGrowler({ kind: kind, message: message });
          return false;
        }
      } else {
        var _kind2 = 'warning';
        var _message2 = 'Your password confirmation did not match your chosen password.';
        this.props.setGrowler({ kind: _kind2, message: _message2 });
        return false;
      }
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(email) {
      if ((0, _validations.ValidateEmail)(email)) {
        return true;
      } else {
        var kind = 'warning';
        var message = 'Please enter a valid email!';
        this.props.setGrowler({ kind: kind, message: message });
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          role = _state.role,
          password = _state.password,
          storeId = _state.storeId,
          passwordConfirmation = _state.passwordConfirmation;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { includeLink: false }),
        _react2.default.createElement(
          'h3',
          null,
          'Create User'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            type: 'name',
            fieldName: 'name',
            title: 'Name:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: email,
            type: 'email',
            fieldName: 'email',
            title: 'Email:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_SelectRole2.default, { role: role, onChange: this.updateState }),
          _react2.default.createElement(_SelectStore2.default, { storeId: storeId, onChange: this.updateState }),
          _react2.default.createElement(_FormField2.default, {
            value: password,
            type: 'password',
            fieldName: 'password',
            title: 'Password:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: passwordConfirmation,
            fieldName: 'passwordConfirmation',
            title: 'Password Confirmation:',
            type: 'password',
            onChange: this.updateState
          }),
          _react2.default.createElement('input', {
            type: 'submit',
            disabled: false,
            value: 'Create User',
            className: 'short-button'
          })
        )
      );
    }
  }]);

  return UsersNew;
}(_react.Component);

UsersNew.propTypes = {
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersNew);

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

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormField = function FormField(props) {
  var title = props.title,
      value = props.value,
      fieldName = props.fieldName,
      _onChange = props.onChange,
      className = props.className,
      type = props.type;

  var inputType = type ? type : 'text';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      { className: 'form-label' },
      title
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('input', {
      type: inputType,
      className: 'form-input ' + className,
      size: '50',
      value: value,
      onChange: function onChange(e) {
        return _onChange(fieldName, e.target.value);
      }
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = FormField;

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPleaseSelect = function addPleaseSelect(options) {
  return [{ id: '', name: 'Please Select' }].concat(options);
};

var FormSelect = function FormSelect(props) {
  var selectOptions = addPleaseSelect(props.options);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      props.title
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'select',
      {
        value: props.value,
        onChange: function onChange(e) {
          return props.onChange(props.fieldName, e.target.value);
        }
      },
      renderOptions(selectOptions)
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

var renderOptions = function renderOptions(options) {
  return options.map(function (option, index) {
    return _react2.default.createElement(
      'option',
      { key: index, value: option.id },
      option.name
    );
  });
};

exports.default = FormSelect;

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _FormSelect = __webpack_require__(710);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRole = function (_Component) {
  _inherits(SelectRole, _Component);

  function SelectRole() {
    _classCallCheck(this, SelectRole);

    return _possibleConstructorReturn(this, (SelectRole.__proto__ || Object.getPrototypeOf(SelectRole)).apply(this, arguments));
  }

  _createClass(SelectRole, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          role = _props.role;


      if (role && role == 'admin') {
        return _react2.default.createElement('div', null);
      }

      var validRoles = [{ id: 'tailor', name: 'Tailor' }, { id: 'retailer', name: 'Retailer' }];

      return _react2.default.createElement(
        'div',
        { className: 'SelectRole' },
        _react2.default.createElement(
          'h3',
          null,
          'Roles'
        ),
        _react2.default.createElement(_FormSelect2.default, {
          value: role,
          options: validRoles,
          fieldName: 'role',
          title: 'Select Role:',
          onChange: onChange
        })
      );
    }
  }]);

  return SelectRole;
}(_react.Component);

SelectRole.propTypes = {
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  role: _propTypes2.default.string.isRequired // parentComponent
};
exports.default = SelectRole;

/***/ }),

/***/ 757:
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

var _actions = __webpack_require__(34);

var _FormSelect = __webpack_require__(710);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    stores: store.storeList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getStoreList: _actions.getStoreList }, dispatch);
};

var SelectStore = function (_Component) {
  _inherits(SelectStore, _Component);

  function SelectStore() {
    _classCallCheck(this, SelectStore);

    return _possibleConstructorReturn(this, (SelectStore.__proto__ || Object.getPrototypeOf(SelectStore)).apply(this, arguments));
  }

  _createClass(SelectStore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getStoreList = this.props.getStoreList;

      getStoreList().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          stores = _props.stores,
          onChange = _props.onChange,
          storeId = _props.storeId;

      if (stores) {
        return _react2.default.createElement(
          'div',
          { className: 'SelectStore' },
          _react2.default.createElement(
            'h3',
            null,
            'Select Store'
          ),
          _react2.default.createElement(_FormSelect2.default, {
            value: storeId,
            options: stores,
            fieldName: 'storeId',
            title: 'Store:',
            onChange: onChange
          })
        );
      }
    }
  }]);

  return SelectStore;
}(_react.Component);

SelectStore.propTypes = {
  stores: _propTypes2.default.array.isRequired, // mapStateToProps
  getStoreList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  storeId: _propTypes2.default.string // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectStore);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9Vc2Vyc05ldy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzPzk5MWQqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzPzYzOGYqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9TZWxlY3RSb2xlLmpzP2NlNjAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdXNlcnMvU2VsZWN0U3RvcmUuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic2V0R3Jvd2xlciIsImRpc3BhdGNoIiwiVXNlcnNOZXciLCJ1cGRhdGVTdGF0ZSIsImtleSIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJlbWFpbCIsInJvbGUiLCJzdG9yZUlkIiwiZW1haWxJc1ZhbGlkIiwidmFsaWRhdGVFbWFpbCIsInBhc3N3b3JkSXNWYWxpZCIsInZhbGlkYXRlUGFzc3dvcmRzIiwibmFtZSIsInN0b3JlX2lkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJraW5kIiwibWVzc2FnZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlT2JqZWN0IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJGb3JtRmllbGQiLCJ0aXRsZSIsImZpZWxkTmFtZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwidHlwZSIsImlucHV0VHlwZSIsInRhcmdldCIsImFkZFBsZWFzZVNlbGVjdCIsImlkIiwiY29uY2F0Iiwib3B0aW9ucyIsIkZvcm1TZWxlY3QiLCJzZWxlY3RPcHRpb25zIiwicmVuZGVyT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiU2VsZWN0Um9sZSIsInZhbGlkUm9sZXMiLCJzdHJpbmciLCJzdG9yZXMiLCJzdG9yZUxpc3QiLCJnZXRTdG9yZUxpc3QiLCJTZWxlY3RTdG9yZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQW1CLEVBQUVDLCtCQUFGLEVBQW5CLEVBQW1DQyxRQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7SUFJTUMsUTs7O0FBQ0osc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQW9CZEMsV0FwQmMsR0FvQkEsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzVCLFlBQUtDLFFBQUwscUJBQWlCRixHQUFqQixFQUF1QkMsS0FBdkI7QUFDRCxLQXRCYTs7QUFBQSxVQXdCZEUsWUF4QmMsR0F3QkMsYUFBSztBQUNsQkMsUUFBRUMsY0FBRjtBQURrQix3QkFFK0MsTUFBS0MsS0FGcEQ7QUFBQSxVQUVWQyxRQUZVLGVBRVZBLFFBRlU7QUFBQSxVQUVBQyxvQkFGQSxlQUVB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VUFDbUJBLE9BRG5COztBQUVQLFVBQUl5RCxNQUFKLEVBQVk7QUFDVixlQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQ0UsbUJBQU96RCxPQURUO0FBRUUscUJBQVN5RCxNQUZYO0FBR0UsdUJBQVcsU0FIYjtBQUlFLG1CQUFPLFFBSlQ7QUFLRSxzQkFBVWxCO0FBTFo7QUFGRixTQURGO0FBWUQ7QUFDRjs7Ozs7O0FBN0JHcUIsVyxDQUNHekMsUyxHQUFZO0FBQ2pCc0MsVUFBUSxvQkFBVUksS0FBVixDQUFnQnhDLFVBRFAsRUFDbUI7QUFDcENzQyxnQkFBYyxvQkFBVXZDLElBQVYsQ0FBZUMsVUFGWixFQUV3QjtBQUN6Q2tCLFlBQVUsb0JBQVVuQixJQUFWLENBQWVDLFVBSFIsRUFHb0I7QUFDckNyQixXQUFTLG9CQUFVd0QsTUFKRixDQUlVO0FBSlYsQztrQkErQk4seUJBQVF6RSxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkM0RSxXQUE3QyxDIiwiZmlsZSI6IjkuMmRmMmE2NzVkYmM3MmU5MmFlZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVVzZXIsIHNldEdyb3dsZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi8uLi9Gb3JtRmllbGQnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7IFZhbGlkYXRlUGFzc3dvcmQsIFZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XG5cbmltcG9ydCBTZWxlY3RSb2xlIGZyb20gJy4vU2VsZWN0Um9sZSc7XG5pbXBvcnQgU2VsZWN0U3RvcmUgZnJvbSAnLi9TZWxlY3RTdG9yZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgc2V0R3Jvd2xlciB9LCBkaXNwYXRjaCk7XG59O1xuXG5jbGFzcyBVc2Vyc05ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlT2JqZWN0KCk7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNldEdyb3dsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICB9O1xuXG4gIGluaXRpYWxTdGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICByb2xlOiAnJyxcbiAgICAgIHN0b3JlSWQ6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnLFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVTdGF0ZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24sIGVtYWlsLCByb2xlLCBzdG9yZUlkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZW1haWxJc1ZhbGlkID0gdGhpcy52YWxpZGF0ZUVtYWlsKGVtYWlsKTtcbiAgICBjb25zdCBwYXNzd29yZElzVmFsaWQgPSB0aGlzLnZhbGlkYXRlUGFzc3dvcmRzKFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvblxuICAgICk7XG4gICAgaWYgKGVtYWlsSXNWYWxpZCAmJiBwYXNzd29yZElzVmFsaWQpIHtcbiAgICAgIGNyZWF0ZVVzZXIoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdG9yZV9pZDogc3RvcmVJZCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHBhc3N3b3JkQ29uZmlybWF0aW9uLFxuICAgICAgICByb2xlLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAvLyBlcnJvciBsb2dnaW5nXG4gICAgICAgICAgaWYgKHJlcy5kYXRhID09PSA0MjIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSAnd2FybmluZyc7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAgICAgXCJVc2VyIHdhcyBub3QgY3JlYXRlZC4gTWFrZSBzdXJlIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgZGF0YWJhc2UuXCI7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBraW5kID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdVc2VyIENyZWF0ZWQhJztcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlT2JqZWN0KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhbGlkYXRlUGFzc3dvcmRzKHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm1hdGlvbikge1xuICAgIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICAgIGlmIChWYWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtpbmQgPSAnd2FybmluZyc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZCEgSXQgc2hvdWxkIGJlIGxvbmdlciB0aGFuIDYgY2hhcmFjdGVycyc7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2luZCA9ICd3YXJuaW5nJztcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAnWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gZGlkIG5vdCBtYXRjaCB5b3VyIGNob3NlbiBwYXNzd29yZC4nO1xuICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgaWYgKFZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2luZCA9ICd3YXJuaW5nJztcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwhJztcbiAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHJvbGUsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHN0b3JlSWQsXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgaW5jbHVkZUxpbms9e2ZhbHNlfSAvPlxuICAgICAgICA8aDM+Q3JlYXRlIFVzZXI8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICAgICAgZmllbGROYW1lPXsnbmFtZSd9XG4gICAgICAgICAgICB0aXRsZT17J05hbWU6J31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGZpZWxkTmFtZT17J2VtYWlsJ31cbiAgICAgICAgICAgIHRpdGxlPXsnRW1haWw6J31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdFJvbGUgcm9sZT17cm9sZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9IC8+XG4gICAgICAgICAgPFNlbGVjdFN0b3JlIHN0b3JlSWQ9e3N0b3JlSWR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSAvPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBmaWVsZE5hbWU9eydwYXNzd29yZCd9XG4gICAgICAgICAgICB0aXRsZT17J1Bhc3N3b3JkOid9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm1hdGlvbn1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3Bhc3N3b3JkQ29uZmlybWF0aW9uJ31cbiAgICAgICAgICAgIHRpdGxlPXsnUGFzc3dvcmQgQ29uZmlybWF0aW9uOid9XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgdmFsdWU9XCJDcmVhdGUgVXNlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcnNOZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvdXNlcnMvVXNlcnNOZXcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9ybUZpZWxkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB2YWx1ZSwgZmllbGROYW1lLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCB0eXBlIH0gPSBwcm9wcztcbiAgY29uc3QgaW5wdXRUeXBlID0gdHlwZSA/IHR5cGUgOiAndGV4dCc7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e3RpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17YGZvcm0taW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgc2l6ZT1cIjUwXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShmaWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYWRkUGxlYXNlU2VsZWN0ID0gb3B0aW9ucyA9PiB7XG4gIHJldHVybiBbeyBpZDogJycsIG5hbWU6ICdQbGVhc2UgU2VsZWN0JyB9XS5jb25jYXQob3B0aW9ucyk7XG59O1xuXG5jb25zdCBGb3JtU2VsZWN0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gYWRkUGxlYXNlU2VsZWN0KHByb3BzLm9wdGlvbnMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+e3Byb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBwcm9wcy5vbkNoYW5nZShwcm9wcy5maWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlck9wdGlvbnMoc2VsZWN0T3B0aW9ucyl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJPcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb24uaWR9PlxuICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZWxlY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uL0Zvcm1TZWxlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgU2VsZWN0Um9sZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICAgIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8gcGFyZW50Q29tcG9uZW50XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJvbGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocm9sZSAmJiByb2xlID09ICdhZG1pbicpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkUm9sZXMgPSBbXG4gICAgICB7IGlkOiAndGFpbG9yJywgbmFtZTogJ1RhaWxvcicgfSxcbiAgICAgIHsgaWQ6ICdyZXRhaWxlcicsIG5hbWU6ICdSZXRhaWxlcicgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VsZWN0Um9sZVwiPlxuICAgICAgICA8aDM+Um9sZXM8L2gzPlxuICAgICAgICA8Rm9ybVNlbGVjdFxuICAgICAgICAgIHZhbHVlPXtyb2xlfVxuICAgICAgICAgIG9wdGlvbnM9e3ZhbGlkUm9sZXN9XG4gICAgICAgICAgZmllbGROYW1lPXsncm9sZSd9XG4gICAgICAgICAgdGl0bGU9eydTZWxlY3QgUm9sZTonfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Um9sZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3VzZXJzL1NlbGVjdFJvbGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGdldFN0b3JlTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vRm9ybVNlbGVjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RvcmVzOiBzdG9yZS5zdG9yZUxpc3QsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBnZXRTdG9yZUxpc3QgfSwgZGlzcGF0Y2gpO1xufTtcblxuY2xhc3MgU2VsZWN0U3RvcmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0b3JlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdldFN0b3JlTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICAgIHN0b3JlSWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHBhcmVudENvbXBvbmVudFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0U3RvcmVMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldFN0b3JlTGlzdCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3Jlcywgb25DaGFuZ2UsIHN0b3JlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHN0b3Jlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWxlY3RTdG9yZVwiPlxuICAgICAgICAgIDxoMz5TZWxlY3QgU3RvcmU8L2gzPlxuICAgICAgICAgIDxGb3JtU2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17c3RvcmVJZH1cbiAgICAgICAgICAgIG9wdGlvbnM9e3N0b3Jlc31cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3N0b3JlSWQnfVxuICAgICAgICAgICAgdGl0bGU9eydTdG9yZTonfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VsZWN0U3RvcmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvdXNlcnMvU2VsZWN0U3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9