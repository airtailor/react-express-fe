webpackJsonp([5],{

/***/ 704:
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

var _actions = __webpack_require__(34);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _validations = __webpack_require__(331);

var _EditPassword = __webpack_require__(718);

var _EditPassword2 = _interopRequireDefault(_EditPassword);

var _SelectRole = __webpack_require__(717);

var _SelectRole2 = _interopRequireDefault(_SelectRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePassword: _actions.updatePassword, setGrowler: _actions.setGrowler }, dispatch);
};

var UsersEdit = function (_Component) {
  _inherits(UsersEdit, _Component);

  function UsersEdit() {
    _classCallCheck(this, UsersEdit);

    var _this = _possibleConstructorReturn(this, (UsersEdit.__proto__ || Object.getPrototypeOf(UsersEdit)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value), function () {
        _this.validatePasswords(_this.state.password, _this.state.passwordConfirmation);
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation;

      if (password === passwordConfirmation) {
        var id = _this.props.user.user.id;
        _this.props.updatePassword({
          id: id,
          password: password,
          password_confirmation: passwordConfirmation
        }).then(function (res) {
          var kind = 'success';
          var message = 'Password Updated';
          _this.props.setGrowler({ kind: kind, message: message });
          _this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true
          });
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true
    };
    return _this;
  }

  _createClass(UsersEdit, [{
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          this.setState({ submitDisabled: false });
          return;
        }
      }
      this.setState({ submitDisabled: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          password = _state.password,
          passwordConfirmation = _state.passwordConfirmation,
          submitDisabled = _state.submitDisabled;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Edit User '
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Full Functionality Available Soon '
        )
      );
    }
  }]);

  return UsersEdit;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(UsersEdit));

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

/***/ 718:
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

var _actions = __webpack_require__(34);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _validations = __webpack_require__(331);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePassword: _actions.updatePassword, setGrowler: _actions.setGrowler }, dispatch);
};

var EditPassword = function (_Component) {
  _inherits(EditPassword, _Component);

  function EditPassword() {
    _classCallCheck(this, EditPassword);

    var _this = _possibleConstructorReturn(this, (EditPassword.__proto__ || Object.getPrototypeOf(EditPassword)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value), function () {
        _this.validatePasswords(_this.state.password, _this.state.passwordConfirmation);
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation;

      if (password === passwordConfirmation) {
        var id = _this.props.user.user.id;
        _this.props.updatePassword({
          id: id,
          password: password,
          password_confirmation: passwordConfirmation
        }).then(function (res) {
          var kind = 'success';
          var message = 'Password Updated';
          _this.props.setGrowler({ kind: kind, message: message });
          _this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true
          });
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true
    };
    return _this;
  }

  _createClass(EditPassword, [{
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          this.setState({ submitDisabled: false });
          return;
        }
      }
      this.setState({ submitDisabled: true });
    }
  }, {
    key: 'storeIdMatch',
    value: function storeIdMatch() {
      var _props = this.props,
          userStoreId = _props.user.user.store_id,
          paramsStoreId = _props.match.params.store_id;


      return userStoreId == paramsStoreId;
    }
  }, {
    key: 'userIdMatch',
    value: function userIdMatch() {
      var _props2 = this.props,
          userId = _props2.user.user.id,
          paramsUserId = _props2.match.params.user_id;


      return userId == paramsUserId;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.storeIdMatch() || this.userIdMatch()) {
        var _state = this.state,
            password = _state.password,
            passwordConfirmation = _state.passwordConfirmation,
            submitDisabled = _state.submitDisabled;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(_FormField2.default, {
              value: password,
              type: 'password',
              fieldName: 'password',
              title: 'New Password',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: passwordConfirmation,
              fieldName: 'passwordConfirmation',
              title: 'Password Confirmation',
              type: 'password',
              onChange: this.updateState
            }),
            _react2.default.createElement('input', {
              disabled: submitDisabled,
              type: 'submit',
              value: 'Update Password',
              className: 'short-button'
            })
          )
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return EditPassword;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditPassword);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9lZGl0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcz85OTFkIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9oZWxwZXIuanM/OTkyMyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaW5kZXguanM/MjhmMyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzPzYzOGYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdXNlcnMvU2VsZWN0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9lZGl0L0VkaXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwic3RvcmUiLCJjdXJyZW50VXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInVwZGF0ZVBhc3N3b3JkIiwic2V0R3Jvd2xlciIsImRpc3BhdGNoIiwiVXNlcnNFZGl0IiwidXBkYXRlU3RhdGUiLCJrZXkiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsaWRhdGVQYXNzd29yZHMiLCJzdGF0ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsInByb3BzIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidGhlbiIsImtpbmQiLCJtZXNzYWdlIiwic3VibWl0RGlzYWJsZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsIkZvcm1GaWVsZCIsInRpdGxlIiwiZmllbGROYW1lIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaW5wdXRUeXBlIiwidGFyZ2V0IiwiZ2V0U2VjdGlvbkhlYWRlclRleHQiLCJwYXRoIiwibWF0Y2giLCJXaXRoU2VjdGlvbkhlYWRlciIsIldyYXBwZWRDb21wb25lbnQiLCJhZGRQbGVhc2VTZWxlY3QiLCJuYW1lIiwiY29uY2F0Iiwib3B0aW9ucyIsIkZvcm1TZWxlY3QiLCJzZWxlY3RPcHRpb25zIiwicmVuZGVyT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiU2VsZWN0Um9sZSIsInJvbGUiLCJ2YWxpZFJvbGVzIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJFZGl0UGFzc3dvcmQiLCJ1c2VyU3RvcmVJZCIsInN0b3JlX2lkIiwicGFyYW1zU3RvcmVJZCIsInBhcmFtcyIsInVzZXJJZCIsInBhcmFtc1VzZXJJZCIsInVzZXJfaWQiLCJzdG9yZUlkTWF0Y2giLCJ1c2VySWRNYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xDLFVBQU1DLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsV0FBWTtBQUNyQyxTQUFPLCtCQUFtQixFQUFFQyx1Q0FBRixFQUFrQkMsK0JBQWxCLEVBQW5CLEVBQW1EQyxRQUFuRCxDQUFQO0FBQ0QsQ0FGRDs7SUFJTUMsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQVNkQyxXQVRjLEdBU0EsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzVCLFlBQUtDLFFBQUwscUJBQWlCRixHQUFqQixFQUF1QkMsS0FBdkIsR0FBZ0MsWUFBTTtBQUNwQyxjQUFLRSxpQkFBTCxDQUNFLE1BQUtDLEtBQUwsQ0FBV0MsUUFEYixFQUVFLE1BQUtELEtBQUwsQ0FBV0Usb0JBRmI7QUFJRCxPQUxEO0FBTUQsS0FoQmE7O0FBQUEsVUFrQmRDLFlBbEJjLEdBa0JDLGFBQUs7QUFDbEJDLFFBQUVDLGNBQUY7QUFEa0Isd0JBRXlCLE1BQUtMLEtBRjlCO0FBQUEsVUFFVkMsUUFGVSxlQUVWQSxRQUZVO0FBQUEsVUFFQUMsb0JBRkEsZUFFQUEsb0JBRkE7O0FBR2xCLFVBQUlELGFBQWFDLG9CQUFqQixFQUF1QztBQUNyQyxZQUFNSSxLQUFLLE1BQUtDLEtBQUwsQ0FBV3BCLElBQVgsQ0FBZ0JBLElBQWhCLENBQXFCbUIsRUFBaEM7QUFDQSxjQUFLQyxLQUFMLENBQ0doQixjQURILENBQ2tCO0FBQ2RlLGdCQURjO0FBRWRMLDRCQUZjO0FBR2RPLGlDQUF1Qk47QUFIVCxTQURsQixFQU1HTyxJQU5ILENBTVEsZUFBTztBQUNYLGNBQU1DLE9BQU8sU0FBYjtBQUNBLGNBQU1DLFVBQVUsa0JBQWhCO0FBQ0EsZ0JBQUtKLEtBQUwsQ0FBV2YsVUFBWCxDQUFzQixFQUFFa0IsVUFBRixFQUFRQyxnQkFBUixFQUF0QjtBQUNBLGdCQUFLYixRQUFMLENBQWM7QUFDWkcsc0JBQVUsRUFERTtBQUVaQyxrQ0FBc0IsRUFGVjtBQUdaVSw0QkFBZ0I7QUFISixXQUFkO0FBS0QsU0FmSCxFQWdCR0MsS0FoQkgsQ0FnQlM7QUFBQSxpQkFBT0MsUUFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJDLEdBQW5CLENBQVA7QUFBQSxTQWhCVDtBQWlCRDtBQUNGLEtBekNhOztBQUVaLFVBQUtoQixLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyw0QkFBc0IsRUFGWDtBQUdYVSxzQkFBZ0I7QUFITCxLQUFiO0FBRlk7QUFPYjs7OztzQ0FvQ2lCWCxRLEVBQVVDLG9CLEVBQXNCO0FBQ2hELFVBQUlELGFBQWFDLG9CQUFqQixFQUF1QztBQUNyQyxZQUFJLG1DQUFpQkQsUUFBakIsQ0FBSixFQUFnQztBQUM5QixlQUFLSCxRQUFMLENBQWMsRUFBRWMsZ0JBQWdCLEtBQWxCLEVBQWQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxXQUFLZCxRQUFMLENBQWMsRUFBRWMsZ0JBQWdCLElBQWxCLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ29ELEtBQUtaLEtBRHpEO0FBQUEsVUFDQ0MsUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDV0Msb0JBRFgsVUFDV0Esb0JBRFg7QUFBQSxVQUNpQ1UsY0FEakMsVUFDaUNBLGNBRGpDOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFVRDs7Ozs7O2tCQUdZLHlCQUFRMUIsZUFBUixFQUF5Qkksa0JBQXpCLEVBQ2IsaUNBQWtCSSxTQUFsQixDQURhLEM7Ozs7Ozs7Ozs7Ozs7O0FDMUZmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNdUIsYUFBYSxTQUFiQSxVQUFhLFFBQVM7QUFBQSxNQUNsQkMsTUFEa0IsR0FDd0JYLEtBRHhCLENBQ2xCVyxNQURrQjtBQUFBLE1BQ1ZDLFNBRFUsR0FDd0JaLEtBRHhCLENBQ1ZZLFNBRFU7QUFBQSwyQkFDd0JaLEtBRHhCLENBQ0NhLFdBREQ7QUFBQSxNQUNDQSxXQURELHNDQUNlLElBRGY7O0FBRTFCLE1BQUlDLE9BQU9kLE1BQU1jLElBQWpCO0FBQ0EsTUFBSUMsZ0JBQUo7O0FBRUEsTUFBSSxDQUFDSixNQUFELElBQVdBLE9BQU9LLE1BQVAsS0FBa0IsQ0FBakMsRUFBb0M7QUFDbENGLFdBQU8sYUFBUDtBQUNBQyxjQUFVO0FBQUEsYUFBTVIsUUFBUUMsR0FBUixDQUFZLEVBQVosQ0FBTjtBQUFBLEtBQVY7QUFDRCxHQUhELE1BR087QUFDTE8sY0FBVTtBQUFBLGFBQU1mLE1BQU1pQixTQUFOLEVBQU47QUFBQSxLQUFWO0FBQ0Q7O0FBRUQsTUFBSWpCLE1BQU1ZLFNBQU4sQ0FBZ0JNLEtBQWhCLElBQXlCbEIsTUFBTVksU0FBTixDQUFnQk8sUUFBN0MsRUFBdUQ7QUFDckQsV0FDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGFBQWhCLEVBQThCLElBQUlMLElBQWxDO0FBQ0U7QUFBQTtBQUFBLFVBQUksaUNBQStCSCxNQUFuQyxFQUE2QyxTQUFTSSxPQUF0RDtBQUFBO0FBQUEsT0FERjtBQUlFLDZDQUFLLFdBQVUsc0JBQWY7QUFKRixLQURGO0FBUUQ7QUFDRixDQXRCRDs7QUF3QkEsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixRQUFTO0FBQzdCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLcEIsWUFBTXFCO0FBQVgsS0FERjtBQUVHWCxlQUFXVixLQUFYO0FBRkgsR0FERjtBQU1ELENBUEQ7O0FBU0EsSUFBTXJCLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xHLGlCQUFhRCxNQUFNQyxXQURkO0FBRUw4QixlQUFXL0IsTUFBTStCO0FBRlosR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTTdCLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFDTDtBQUNFa0M7QUFERixHQURLLEVBSUwvQixRQUpLLENBQVA7QUFNRCxDQVBEO2tCQVFlLHlCQUFRUCxlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkNxQyxhQUE3QyxDOzs7Ozs7Ozs7Ozs7OztBQ3REZjs7Ozs7O0FBRUEsSUFBTUUsWUFBWSxTQUFaQSxTQUFZLFFBQVM7QUFBQSxNQUNqQkMsS0FEaUIsR0FDc0N2QixLQUR0QyxDQUNqQnVCLEtBRGlCO0FBQUEsTUFDVmpDLEtBRFUsR0FDc0NVLEtBRHRDLENBQ1ZWLEtBRFU7QUFBQSxNQUNIa0MsU0FERyxHQUNzQ3hCLEtBRHRDLENBQ0h3QixTQURHO0FBQUEsTUFDUUMsU0FEUixHQUNzQ3pCLEtBRHRDLENBQ1F5QixRQURSO0FBQUEsTUFDa0JDLFNBRGxCLEdBQ3NDMUIsS0FEdEMsQ0FDa0IwQixTQURsQjtBQUFBLE1BQzZCQyxJQUQ3QixHQUNzQzNCLEtBRHRDLENBQzZCMkIsSUFEN0I7O0FBRXpCLE1BQU1DLFlBQVlELE9BQU9BLElBQVAsR0FBYyxNQUFoQztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU8sV0FBVSxZQUFqQjtBQUErQko7QUFBL0IsS0FERjtBQUVFLDZDQUZGO0FBR0U7QUFDRSxZQUFNSyxTQURSO0FBRUUsaUNBQXlCRixTQUYzQjtBQUdFLFlBQUssSUFIUDtBQUlFLGFBQU9wQyxLQUpUO0FBS0UsZ0JBQVU7QUFBQSxlQUFLbUMsVUFBU0QsU0FBVCxFQUFvQjNCLEVBQUVnQyxNQUFGLENBQVN2QyxLQUE3QixDQUFMO0FBQUE7QUFMWixNQUhGO0FBVUUsNkNBVkY7QUFXRTtBQVhGLEdBREY7QUFlRCxDQWxCRDs7a0JBb0JlZ0MsUzs7Ozs7Ozs7Ozs7OztBQ3RCUixJQUFNUSxzREFBdUIsU0FBdkJBLG9CQUF1QixRQUFTO0FBQUEsTUFDMUJDLElBRDBCLEdBQ2YvQixLQURlLENBQ25DZ0MsS0FEbUMsQ0FDMUJELElBRDBCOztBQUUzQyxNQUFJQSxTQUFTLGdCQUFiLEVBQStCO0FBQzdCLFdBQU8sc0JBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsU0FBUyx1QkFBYixFQUFzQztBQUMzQyxXQUFPLDRCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFNBQVMsYUFBYixFQUE0QjtBQUNqQyxXQUFPLGNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyxzQkFBYixFQUFxQztBQUMxQyxXQUFPLFdBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyxhQUFiLEVBQTRCO0FBQ2pDLFdBQU8sZ0JBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsU0FBUyx3QkFBYixFQUF1QztBQUM1QyxXQUFPLEVBQVA7QUFDRDtBQUNGLENBZk0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNFLGlCQUFULENBQTJCQyxnQkFBM0IsRUFBNkM7QUFDM0M7QUFBQTs7QUFDRSxpQ0FBYztBQUFBOztBQUFBOztBQUVaLFlBQUt6QyxLQUFMLEdBQWE7QUFDWDRCLGNBQU07QUFESyxPQUFiO0FBRlk7QUFLYjs7QUFOSDtBQUFBO0FBQUEsMENBUXNCO0FBQ2xCLFlBQU1BLE9BQU8sa0NBQXFCLEtBQUtyQixLQUExQixDQUFiO0FBQ0EsYUFBS1QsUUFBTCxDQUFjLEVBQUM4QixVQUFELEVBQWQ7QUFDRDtBQVhIO0FBQUE7QUFBQSwrQkFhVztBQUNQLGVBQ0U7QUFBQTtBQUFBO0FBQ0UsbUVBQWUsTUFBTSxLQUFLNUIsS0FBTCxDQUFXNEIsSUFBaEMsR0FERjtBQUVFLHdDQUFDLGdCQUFELEVBQXNCLEtBQUtyQixLQUEzQjtBQUZGLFNBREY7QUFNRDtBQXBCSDs7QUFBQTtBQUFBO0FBc0JEOztrQkFFY2lDLGlCOzs7Ozs7Ozs7Ozs7OztBQzdCZjs7Ozs7O0FBRUEsSUFBTUUsa0JBQWtCLFNBQWxCQSxlQUFrQixVQUFXO0FBQ2pDLFNBQU8sQ0FBQyxFQUFFcEMsSUFBSSxFQUFOLEVBQVVxQyxNQUFNLGVBQWhCLEVBQUQsRUFBb0NDLE1BQXBDLENBQTJDQyxPQUEzQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUMxQixNQUFNQyxnQkFBZ0JMLGdCQUFnQm5DLE1BQU1zQyxPQUF0QixDQUF0QjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVF0QyxZQUFNdUI7QUFBZCxLQURGO0FBRUUsNkNBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSxlQUFPdkIsTUFBTVYsS0FEZjtBQUVFLGtCQUFVO0FBQUEsaUJBQUtVLE1BQU15QixRQUFOLENBQWV6QixNQUFNd0IsU0FBckIsRUFBZ0MzQixFQUFFZ0MsTUFBRixDQUFTdkMsS0FBekMsQ0FBTDtBQUFBO0FBRlo7QUFJR21ELG9CQUFjRCxhQUFkO0FBSkgsS0FIRjtBQVNFLDZDQVRGO0FBVUU7QUFWRixHQURGO0FBY0QsQ0FoQkQ7O0FBa0JBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsVUFBVztBQUMvQixTQUFPSCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ3BDLFdBQ0U7QUFBQTtBQUFBLFFBQVEsS0FBS0EsS0FBYixFQUFvQixPQUFPRCxPQUFPNUMsRUFBbEM7QUFDRzRDLGFBQU9QO0FBRFYsS0FERjtBQUtELEdBTk0sQ0FBUDtBQU9ELENBUkQ7O2tCQVVlRyxVOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1NLFU7Ozs7Ozs7Ozs7OzZCQU1LO0FBQUEsbUJBQ29CLEtBQUs3QyxLQUR6QjtBQUFBLFVBQ0N5QixRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXcUIsSUFEWCxVQUNXQSxJQURYOzs7QUFHUCxVQUFJQSxRQUFRQSxRQUFRLE9BQXBCLEVBQTZCO0FBQzNCLGVBQU8sMENBQVA7QUFDRDs7QUFFRCxVQUFNQyxhQUFhLENBQ2pCLEVBQUVoRCxJQUFJLFFBQU4sRUFBZ0JxQyxNQUFNLFFBQXRCLEVBRGlCLEVBRWpCLEVBQUVyQyxJQUFJLFVBQU4sRUFBa0JxQyxNQUFNLFVBQXhCLEVBRmlCLENBQW5COztBQUtBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFDRSxpQkFBT1UsSUFEVDtBQUVFLG1CQUFTQyxVQUZYO0FBR0UscUJBQVcsTUFIYjtBQUlFLGlCQUFPLGNBSlQ7QUFLRSxvQkFBVXRCO0FBTFo7QUFGRixPQURGO0FBWUQ7Ozs7OztBQTlCR29CLFUsQ0FDR0csUyxHQUFZO0FBQ2pCdkIsWUFBVSxvQkFBVXdCLElBQVYsQ0FBZUMsVUFEUixFQUNvQjtBQUNyQ0osUUFBTSxvQkFBVUssTUFBVixDQUFpQkQsVUFGTixDQUVrQjtBQUZsQixDO2tCQWdDTkwsVTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1sRSxrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsU0FBTztBQUNMQyxVQUFNQyxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFBbUIsRUFBRUMsdUNBQUYsRUFBa0JDLCtCQUFsQixFQUFuQixFQUFtREMsUUFBbkQsQ0FBUDtBQUNELENBRkQ7O0lBSU1rRSxZOzs7QUFDSiwwQkFBYztBQUFBOztBQUFBOztBQUFBLFVBU2RoRSxXQVRjLEdBU0EsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzVCLFlBQUtDLFFBQUwscUJBQWlCRixHQUFqQixFQUF1QkMsS0FBdkIsR0FBZ0MsWUFBTTtBQUNwQyxjQUFLRSxpQkFBTCxDQUNFLE1BQUtDLEtBQUwsQ0FBV0MsUUFEYixFQUVFLE1BQUtELEtBQUwsQ0FBV0Usb0JBRmI7QUFJRCxPQUxEO0FBTUQsS0FoQmE7O0FBQUEsVUFrQmRDLFlBbEJjLEdBa0JDLGFBQUs7QUFDbEJDLFFBQUVDLGNBQUY7QUFEa0Isd0JBRXlCLE1BQUtMLEtBRjlCO0FBQUEsVUFFVkMsUUFGVSxlQUVWQSxRQUZVO0FBQUEsVUFFQUMsb0JBRkEsZUFFQUEsb0JBRkE7O0FBR2xCLFVBQUlELGFBQWFDLG9CQUFqQixFQUF1QztBQUNyQyxZQUFNSSxLQUFLLE1BQUtDLEtBQUwsQ0FBV3BCLElBQVgsQ0FBZ0JBLElBQWhCLENBQXFCbUIsRUFBaEM7QUFDQSxjQUFLQyxLQUFMLENBQ0doQixjQURILENBQ2tCO0FBQ2RlLGdCQURjO0FBRWRMLDRCQUZjO0FBR2RPLGlDQUF1Qk47QUFIVCxTQURsQixFQU1HTyxJQU5ILENBTVEsZUFBTztBQUNYLGNBQU1DLE9BQU8sU0FBYjtBQUNBLGNBQU1DLFVBQVUsa0JBQWhCO0FBQ0EsZ0JBQUtKLEtBQUwsQ0FBV2YsVUFBWCxDQUFzQixFQUFFa0IsVUFBRixFQUFRQyxnQkFBUixFQUF0QjtBQUNBLGdCQUFLYixRQUFMLENBQWM7QUFDWkcsc0JBQVUsRUFERTtBQUVaQyxrQ0FBc0IsRUFGVjtBQUdaVSw0QkFBZ0I7QUFISixXQUFkO0FBS0QsU0FmSCxFQWdCR0MsS0FoQkgsQ0FnQlM7QUFBQSxpQkFBT0MsUUFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJDLEdBQW5CLENBQVA7QUFBQSxTQWhCVDtBQWlCRDtBQUNGLEtBekNhOztBQUVaLFVBQUtoQixLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyw0QkFBc0IsRUFGWDtBQUdYVSxzQkFBZ0I7QUFITCxLQUFiO0FBRlk7QUFPYjs7OztzQ0FvQ2lCWCxRLEVBQVVDLG9CLEVBQXNCO0FBQ2hELFVBQUlELGFBQWFDLG9CQUFqQixFQUF1QztBQUNyQyxZQUFJLG1DQUFpQkQsUUFBakIsQ0FBSixFQUFnQztBQUM5QixlQUFLSCxRQUFMLENBQWMsRUFBRWMsZ0JBQWdCLEtBQWxCLEVBQWQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxXQUFLZCxRQUFMLENBQWMsRUFBRWMsZ0JBQWdCLElBQWxCLEVBQWQ7QUFDRDs7O21DQUVjO0FBQUEsbUJBSVQsS0FBS0wsS0FKSTtBQUFBLFVBRWVxRCxXQUZmLFVBRVh6RSxJQUZXLENBRUhBLElBRkcsQ0FFSzBFLFFBRkw7QUFBQSxVQUdrQkMsYUFIbEIsVUFHWHZCLEtBSFcsQ0FHRndCLE1BSEUsQ0FHUUYsUUFIUjs7O0FBTWIsYUFBT0QsZUFBZUUsYUFBdEI7QUFDRDs7O2tDQUVhO0FBQUEsb0JBSVIsS0FBS3ZELEtBSkc7QUFBQSxVQUVVeUQsTUFGVixXQUVWN0UsSUFGVSxDQUVGQSxJQUZFLENBRU1tQixFQUZOO0FBQUEsVUFHa0IyRCxZQUhsQixXQUdWMUIsS0FIVSxDQUdEd0IsTUFIQyxDQUdTRyxPQUhUOzs7QUFNWixhQUFPRixVQUFVQyxZQUFqQjtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJLEtBQUtFLFlBQUwsTUFBdUIsS0FBS0MsV0FBTCxFQUEzQixFQUErQztBQUFBLHFCQUNjLEtBQUtwRSxLQURuQjtBQUFBLFlBQ3JDQyxRQURxQyxVQUNyQ0EsUUFEcUM7QUFBQSxZQUMzQkMsb0JBRDJCLFVBQzNCQSxvQkFEMkI7QUFBQSxZQUNMVSxjQURLLFVBQ0xBLGNBREs7O0FBRTdDLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLVCxZQUFyQjtBQUNFO0FBQ0UscUJBQU9GLFFBRFQ7QUFFRSxvQkFBSyxVQUZQO0FBR0UseUJBQVUsVUFIWjtBQUlFLHFCQUFNLGNBSlI7QUFLRSx3QkFBVSxLQUFLTjtBQUxqQixjQURGO0FBU0U7QUFDRSxxQkFBT08sb0JBRFQ7QUFFRSx5QkFBVSxzQkFGWjtBQUdFLHFCQUFNLHVCQUhSO0FBSUUsb0JBQUssVUFKUDtBQUtFLHdCQUFVLEtBQUtQO0FBTGpCLGNBVEY7QUFpQkU7QUFDRSx3QkFBVWlCLGNBRFo7QUFFRSxvQkFBSyxRQUZQO0FBR0UscUJBQU0saUJBSFI7QUFJRSx5QkFBVTtBQUpaO0FBakJGO0FBREYsU0FERjtBQTRCRCxPQTlCRCxNQThCTztBQUNMLGVBQU8sMENBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBR1kseUJBQVExQixlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkNxRSxZQUE3QyxDIiwiZmlsZSI6IjUuMmRmMmE2NzVkYmM3MmU5MmFlZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHVwZGF0ZVBhc3N3b3JkLCBzZXRHcm93bGVyIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4uLy4uL0Zvcm1GaWVsZCc7XG5pbXBvcnQgV2l0aFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vSE9DL1dpdGhTZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7IFZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgRWRpdFBhc3N3b3JkIGZyb20gJy4vRWRpdFBhc3N3b3JkJztcbmltcG9ydCBTZWxlY3RSb2xlIGZyb20gJy4uL1NlbGVjdFJvbGUnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyB1cGRhdGVQYXNzd29yZCwgc2V0R3Jvd2xlciB9LCBkaXNwYXRjaCk7XG59O1xuXG5jbGFzcyBVc2Vyc0VkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJycsXG4gICAgICBzdWJtaXREaXNhYmxlZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZVBhc3N3b3JkcyhcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZENvbmZpcm1hdGlvblxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHBhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm1hdGlvbikge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLnVzZXIudXNlci5pZDtcbiAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgLnVwZGF0ZVBhc3N3b3JkKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHBhc3N3b3JkQ29uZmlybWF0aW9uLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdQYXNzd29yZCBVcGRhdGVkJztcbiAgICAgICAgICB0aGlzLnByb3BzLnNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgc3VibWl0RGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycikpO1xuICAgIH1cbiAgfTtcblxuICB2YWxpZGF0ZVBhc3N3b3JkcyhwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICBpZiAocGFzc3dvcmQgPT09IHBhc3N3b3JkQ29uZmlybWF0aW9uKSB7XG4gICAgICBpZiAoVmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdERpc2FibGVkOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RGlzYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24sIHN1Ym1pdERpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+IEVkaXQgVXNlciA8L2gyPlxuICAgICAgICA8cD4gRnVsbCBGdW5jdGlvbmFsaXR5IEF2YWlsYWJsZSBTb29uIDwvcD5cbiAgICAgICAgey8qXG4gICAgICAgICAgPFNlbGVjdFJvbGUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgPEVkaXRQYXNzd29yZCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShcbiAgV2l0aFNlY3Rpb25IZWFkZXIoVXNlcnNFZGl0KVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3VzZXJzL2VkaXQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9ybUZpZWxkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB2YWx1ZSwgZmllbGROYW1lLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCB0eXBlIH0gPSBwcm9wcztcbiAgY29uc3QgaW5wdXRUeXBlID0gdHlwZSA/IHR5cGUgOiAndGV4dCc7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e3RpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17YGZvcm0taW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgc2l6ZT1cIjUwXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShmaWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzIiwiZXhwb3J0IGNvbnN0IGdldFNlY3Rpb25IZWFkZXJUZXh0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG1hdGNoOiB7IHBhdGggfSB9ID0gcHJvcHM7XG4gIGlmIChwYXRoID09PSAnL2FkbWluL3JlcG9ydHMnKSB7XG4gICAgcmV0dXJuICdBaXIgVGFpbG9yIC8gUmVwb3J0cyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9hZG1pbi9yZXBvcnRzL29yZGVycycpIHtcbiAgICByZXR1cm4gJ0FpciBUYWlsb3IgLyBPcmRlciBSZXBvcnRzJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3N0b3Jlcy9uZXcnKSB7XG4gICAgcmV0dXJuICdTdG9yZXMgLyBOZXcnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvdXNlcnMvOnVzZXJfaWQvZWRpdCcpIHtcbiAgICByZXR1cm4gJ0VkaXQgVXNlcic7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9vcmRlcnMvbmV3Jykge1xuICAgIHJldHVybiAnQWdyZWUgVG8gVGVybXMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvc2l0ZS90ZXJtc19vZl9zZXJ2aWNlJykge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9oZWxwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uLy4uL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0IHtnZXRTZWN0aW9uSGVhZGVyVGV4dH0gZnJvbSAnLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBXaXRoU2VjdGlvbkhlYWRlcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBjbGFzcyBXaXRoU2VjdGlvbkhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgdGV4dCA9IGdldFNlY3Rpb25IZWFkZXJUZXh0KHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGV4dH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fSAvPlxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoU2VjdGlvbkhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFkZFBsZWFzZVNlbGVjdCA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gW3sgaWQ6ICcnLCBuYW1lOiAnUGxlYXNlIFNlbGVjdCcgfV0uY29uY2F0KG9wdGlvbnMpO1xufTtcblxuY29uc3QgRm9ybVNlbGVjdCA9IHByb3BzID0+IHtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IGFkZFBsZWFzZVNlbGVjdChwcm9wcy5vcHRpb25zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMub25DaGFuZ2UocHJvcHMuZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJPcHRpb25zKHNlbGVjdE9wdGlvbnMpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLmlkfT5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VsZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybVNlbGVjdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi9Gb3JtU2VsZWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFNlbGVjdFJvbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCByb2xlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHJvbGUgJiYgcm9sZSA9PSAnYWRtaW4nKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZFJvbGVzID0gW1xuICAgICAgeyBpZDogJ3RhaWxvcicsIG5hbWU6ICdUYWlsb3InIH0sXG4gICAgICB7IGlkOiAncmV0YWlsZXInLCBuYW1lOiAnUmV0YWlsZXInIH0sXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlbGVjdFJvbGVcIj5cbiAgICAgICAgPGgzPlJvbGVzPC9oMz5cbiAgICAgICAgPEZvcm1TZWxlY3RcbiAgICAgICAgICB2YWx1ZT17cm9sZX1cbiAgICAgICAgICBvcHRpb25zPXt2YWxpZFJvbGVzfVxuICAgICAgICAgIGZpZWxkTmFtZT17J3JvbGUnfVxuICAgICAgICAgIHRpdGxlPXsnU2VsZWN0IFJvbGU6J31cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFJvbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9TZWxlY3RSb2xlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVQYXNzd29yZCwgc2V0R3Jvd2xlciB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuLi8uLi9Gb3JtRmllbGQnO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3ZhbGlkYXRpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXBkYXRlUGFzc3dvcmQsIHNldEdyb3dsZXIgfSwgZGlzcGF0Y2gpO1xufTtcblxuY2xhc3MgRWRpdFBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnLFxuICAgICAgc3VibWl0RGlzYWJsZWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHZhbHVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZHMoXG4gICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmRDb25maXJtYXRpb25cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybWF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy51c2VyLnVzZXIuaWQ7XG4gICAgICB0aGlzLnByb3BzXG4gICAgICAgIC51cGRhdGVQYXNzd29yZCh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBwYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb25zdCBraW5kID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnUGFzc3dvcmQgVXBkYXRlZCc7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgIHN1Ym1pdERpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFsaWRhdGVQYXNzd29yZHMocGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybWF0aW9uKSB7XG4gICAgaWYgKHBhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm1hdGlvbikge1xuICAgICAgaWYgKFZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlZDogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdERpc2FibGVkOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RvcmVJZE1hdGNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXI6IHsgdXNlcjogeyBzdG9yZV9pZDogdXNlclN0b3JlSWQgfSB9LFxuICAgICAgbWF0Y2g6IHsgcGFyYW1zOiB7IHN0b3JlX2lkOiBwYXJhbXNTdG9yZUlkIH0gfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiB1c2VyU3RvcmVJZCA9PSBwYXJhbXNTdG9yZUlkO1xuICB9XG5cbiAgdXNlcklkTWF0Y2goKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcjogeyB1c2VyOiB7IGlkOiB1c2VySWQgfSB9LFxuICAgICAgbWF0Y2g6IHsgcGFyYW1zOiB7IHVzZXJfaWQ6IHBhcmFtc1VzZXJJZCB9IH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gdXNlcklkID09IHBhcmFtc1VzZXJJZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVJZE1hdGNoKCkgfHwgdGhpcy51c2VySWRNYXRjaCgpKSB7XG4gICAgICBjb25zdCB7IHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm1hdGlvbiwgc3VibWl0RGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgZmllbGROYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDb25maXJtYXRpb259XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJQYXNzd29yZCBDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIlVwZGF0ZSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWJ1dHRvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdFBhc3N3b3JkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3VzZXJzL2VkaXQvRWRpdFBhc3N3b3JkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==