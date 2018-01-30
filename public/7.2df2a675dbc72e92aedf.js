webpackJsonp([7],{

/***/ 700:
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

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(11);

var _format = __webpack_require__(333);

var _actions = __webpack_require__(714);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _EditPassword = __webpack_require__(718);

var _EditPassword2 = _interopRequireDefault(_EditPassword);

var _SelectTailor = __webpack_require__(713);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

var _footer = __webpack_require__(338);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    store: store.editStore,
    tailors: store.tailorList,
    userRoles: store.userRoles,
    currentUser: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getEditStore: _actions.getEditStore,
    updateStore: _actions.updateStore,
    updateEditStore: _actions.updateEditStore,
    setGrowler: _actions.setGrowler,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var StoresEdit = function (_Component) {
  _inherits(StoresEdit, _Component);

  function StoresEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StoresEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StoresEdit.__proto__ || Object.getPrototypeOf(StoresEdit)).call.apply(_ref, [this].concat(args))), _this), _this.updateState = function (field, value) {
      _this.props.updateEditStore(field, value);
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var self = _this;
      var store = _this.props.store;

      _this.props.setLoader();
      _this.props.updateStore({ store: store }).then(function (res) {
        _this.props.removeLoader();

        if (res.data.body.errors) {
          var kind = 'warning';
          var message = res.data.body.errors[0];
          self.setState(self.props.store);
          self.props.setGrowler({ kind: kind, message: message });
        } else if (res.data.body) {
          var _kind = 'success';
          var _message = 'Store Updated Successfully!';
          _this.props.setGrowler({ kind: _kind, message: _message });
        }
      }).catch(function (err) {
        debugger;
        console.log(err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StoresEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getEditStore = _props.getEditStore,
          paramsId = _props.match.params.store_id,
          userStoreId = _props.currentUser.user.store_id,
          admin = _props.userRoles.admin;


      var storeId = admin ? paramsId : userStoreId;

      getEditStore(storeId).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderTailorSelect',
    value: function renderTailorSelect(tailorId, admin) {
      if (admin) {
        return _react2.default.createElement(_SelectTailor2.default, {
          onChange: this.updateState,
          fieldName: 'default_tailor_id',
          headerText: 'Set Default Tailor',
          tailorId: tailorId
        });
      }
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var _this2 = this;

      var _props$store = this.props.store,
          name = _props$store.name,
          phone = _props$store.phone,
          street = _props$store.street,
          unit = _props$store.unit,
          city = _props$store.city,
          state_province = _props$store.state_province,
          zip_code = _props$store.zip_code,
          default_tailor_id = _props$store.default_tailor_id;


      var displayPhone = (0, _format.formatPhone)(phone);

      var admin = this.props.userRoles.admin;


      var tailorId = default_tailor_id ? default_tailor_id : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.handleSubmit(e);
            } },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            fieldName: 'name',
            title: 'Name',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: displayPhone,
            fieldName: 'phone',
            title: 'Phone',
            onChange: this.updateState
          }),
          this.renderTailorSelect(tailorId, admin),
          _react2.default.createElement(_FormField2.default, {
            value: street,
            fieldName: 'street',
            title: 'Street',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: unit,
            fieldName: 'unit',
            title: 'Unit, Suite, Etc. (optional)',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: city,
            fieldName: 'city',
            title: 'City',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: state_province,
            fieldName: 'state_province',
            title: 'State',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: zip_code,
            fieldName: 'zip_code',
            title: 'Zip',
            onChange: this.updateState
          }),
          _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Update Store' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.props.store;


      if ((0, _isEmpty2.default)(store)) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'pos-rel' },
        _react2.default.createElement(_SectionHeader2.default, { text: 'Account / ' + store.name }),
        _react2.default.createElement(
          'div',
          { className: 'form-container edit-account' },
          this.renderForm(),
          _react2.default.createElement('br', null),
          _react2.default.createElement('hr', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_EditPassword2.default, { match: this.props.match })
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return StoresEdit;
}(_react.Component);

StoresEdit.propTypes = {
  store: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  getEditStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateEditStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps,
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps,
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresEdit);

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

/***/ 713:
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

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _FormSelect = __webpack_require__(710);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getTailorList: _actions.getTailorList }, dispatch);
};

var SelectTailor = function (_Component) {
  _inherits(SelectTailor, _Component);

  function SelectTailor() {
    _classCallCheck(this, SelectTailor);

    return _possibleConstructorReturn(this, (SelectTailor.__proto__ || Object.getPrototypeOf(SelectTailor)).apply(this, arguments));
  }

  _createClass(SelectTailor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getTailorList().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tailors = _props.tailors,
          onChange = _props.onChange,
          tailorId = _props.tailorId,
          handleSubmit = _props.handleSubmit,
          _props$fieldName = _props.fieldName,
          fieldName = _props$fieldName === undefined ? 'provider_id' : _props$fieldName,
          _props$title = _props.title,
          title = _props$title === undefined ? 'Tailor Shop:' : _props$title,
          _props$headerText = _props.headerText,
          headerText = _props$headerText === undefined ? 'Select Tailor' : _props$headerText;


      if ((0, _isEmpty2.default)(tailors)) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        { className: 'SelectTailor' },
        _react2.default.createElement(
          'h3',
          null,
          headerText
        ),
        _react2.default.createElement(_FormSelect2.default, {
          value: tailorId,
          options: tailors,
          fieldName: 'provider_id',
          title: title,
          onChange: onChange
        })
      );
    }
  }]);

  return SelectTailor;
}(_react.Component);

SelectTailor.propTypes = {
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  getTailorList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  provider_id: _propTypes2.default.string // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectTailor);

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEditStore = exports.getEditStore = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = exports.setGrowler = exports.getCurrentStore = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateStore = updateStore;

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(335);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(34);

var getCurrentStore = _require.getCurrentStore,
    setGrowler = _require.setGrowler,
    setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.getCurrentStore = getCurrentStore;
exports.setGrowler = setGrowler;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
var getEditStore = exports.getEditStore = function getEditStore(id) {
  var url = _constants.expressApi + '/stores/' + id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setEditStore(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

function updateStore(data) {
  var store = data.store,
      _data$store = data.store,
      id = _data$store.id,
      street = _data$store.street,
      street_two = _data$store.unit,
      city = _data$store.city,
      state_province = _data$store.state_province,
      zip_code = _data$store.zip_code,
      agrees_to_terms = _data$store.agrees_to_terms;


  var url = _constants.expressApi + '/stores/' + id;
  var storeObj = _extends({}, data.store);
  storeObj.address = { street: street, street_two: street_two, city: city, state_province: state_province, zip_code: zip_code };

  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.put(url, { store: storeObj }).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setEditStore(storeObj));
        }
        return res;
      }).catch(function (err) {
        debugger;
        return err;
      });
    });
  };
}

var setEditStore = function setEditStore(store) {
  return {
    type: _constants.SET_EDIT_STORE,
    store: store
  };
};

var updateEditStore = exports.updateEditStore = function updateEditStore(field, value) {
  if (field === 'provider_id') {
    field = 'default_tailor_id';
  }

  return {
    type: _constants.UPDATE_EDIT_STORE,
    store: _defineProperty({}, field, value)
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvZWRpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcz85OTFkKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzPzYzOGYqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlckZvcm1zL1NlbGVjdFRhaWxvci5qcz9hNDFiIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9lZGl0L2R1Y2tzL2FjdGlvbnMuanM/N2NkNSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9lZGl0L0VkaXRQYXNzd29yZC5qcz80MDNlIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiZWRpdFN0b3JlIiwidGFpbG9ycyIsInRhaWxvckxpc3QiLCJ1c2VyUm9sZXMiLCJjdXJyZW50VXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEVkaXRTdG9yZSIsInVwZGF0ZVN0b3JlIiwidXBkYXRlRWRpdFN0b3JlIiwic2V0R3Jvd2xlciIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsImRpc3BhdGNoIiwiU3RvcmVzRWRpdCIsInVwZGF0ZVN0YXRlIiwiZmllbGQiLCJ2YWx1ZSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYm9keSIsImVycm9ycyIsImtpbmQiLCJtZXNzYWdlIiwic2V0U3RhdGUiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwYXJhbXNJZCIsIm1hdGNoIiwicGFyYW1zIiwic3RvcmVfaWQiLCJ1c2VyU3RvcmVJZCIsInVzZXIiLCJhZG1pbiIsInN0b3JlSWQiLCJ0YWlsb3JJZCIsIm5hbWUiLCJwaG9uZSIsInN0cmVldCIsInVuaXQiLCJjaXR5Iiwic3RhdGVfcHJvdmluY2UiLCJ6aXBfY29kZSIsImRlZmF1bHRfdGFpbG9yX2lkIiwiZGlzcGxheVBob25lIiwicmVuZGVyVGFpbG9yU2VsZWN0IiwicmVuZGVyRm9ybSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQ2FydFJpYmJvbiIsInJvdGF0ZSIsImluY2x1ZGVMaW5rIiwibGluayIsIm9uQ2xpY2siLCJsZW5ndGgiLCJyZXNldENhcnQiLCJyZXRhaWxlciIsIlNlY3Rpb25IZWFkZXIiLCJ0ZXh0IiwiRm9ybUZpZWxkIiwidGl0bGUiLCJmaWVsZE5hbWUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInR5cGUiLCJpbnB1dFR5cGUiLCJ0YXJnZXQiLCJhZGRQbGVhc2VTZWxlY3QiLCJpZCIsImNvbmNhdCIsIm9wdGlvbnMiLCJGb3JtU2VsZWN0Iiwic2VsZWN0T3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImdldFRhaWxvckxpc3QiLCJTZWxlY3RUYWlsb3IiLCJoZWFkZXJUZXh0IiwiYXJyYXkiLCJwcm92aWRlcl9pZCIsInN0cmluZyIsInJlcXVpcmUiLCJnZXRDdXJyZW50U3RvcmUiLCJ2YWxpZGF0ZVRva2VuIiwic2V0VG9rZW5zIiwidXJsIiwiZ2V0Iiwic2V0RWRpdFN0b3JlIiwic3RyZWV0X3R3byIsImFncmVlc190b190ZXJtcyIsInN0b3JlT2JqIiwiYWRkcmVzcyIsInB1dCIsInVwZGF0ZVBhc3N3b3JkIiwiRWRpdFBhc3N3b3JkIiwia2V5IiwidmFsaWRhdGVQYXNzd29yZHMiLCJzdGF0ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJzdWJtaXREaXNhYmxlZCIsInBhcmFtc1N0b3JlSWQiLCJ1c2VySWQiLCJwYXJhbXNVc2VySWQiLCJ1c2VyX2lkIiwic3RvcmVJZE1hdGNoIiwidXNlcklkTWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBWUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsV0FBT0EsTUFBTUMsU0FEUjtBQUVMQyxhQUFTRixNQUFNRyxVQUZWO0FBR0xDLGVBQVdKLE1BQU1JLFNBSFo7QUFJTEMsaUJBQWFMLE1BQU1LO0FBSmQsR0FBUDtBQU1ELENBUEQ7O0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsV0FBWTtBQUNyQyxTQUFPLCtCQUNMO0FBQ0VDLHVDQURGO0FBRUVDLHFDQUZGO0FBR0VDLDZDQUhGO0FBSUVDLG1DQUpGO0FBS0VDLGlDQUxGO0FBTUVDO0FBTkYsR0FESyxFQVNMQyxRQVRLLENBQVA7QUFXRCxDQVpEOztJQWNNQyxVOzs7Ozs7Ozs7Ozs7Ozs4TEEwQkpDLFcsR0FBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDOUIsWUFBS0MsS0FBTCxDQUFXVCxlQUFYLENBQTJCTyxLQUEzQixFQUFrQ0MsS0FBbEM7QUFDRCxLLFFBRURFLFksR0FBZSxhQUFLO0FBQ2xCQyxRQUFFQyxjQUFGO0FBQ0EsVUFBSUMsWUFBSjtBQUZrQixVQUdWdEIsS0FIVSxHQUdBLE1BQUtrQixLQUhMLENBR1ZsQixLQUhVOztBQUlsQixZQUFLa0IsS0FBTCxDQUFXUCxTQUFYO0FBQ0EsWUFBS08sS0FBTCxDQUNHVixXQURILENBQ2UsRUFBRVIsWUFBRixFQURmLEVBRUd1QixJQUZILENBRVEsZUFBTztBQUNYLGNBQUtMLEtBQUwsQ0FBV04sWUFBWDs7QUFFQSxZQUFJWSxJQUFJQyxJQUFKLENBQVNDLElBQVQsQ0FBY0MsTUFBbEIsRUFBMEI7QUFDeEIsY0FBTUMsT0FBTyxTQUFiO0FBQ0EsY0FBTUMsVUFBVUwsSUFBSUMsSUFBSixDQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUIsQ0FBckIsQ0FBaEI7QUFDQUwsZUFBS1EsUUFBTCxDQUFjUixLQUFLSixLQUFMLENBQVdsQixLQUF6QjtBQUNBc0IsZUFBS0osS0FBTCxDQUFXUixVQUFYLENBQXNCLEVBQUVrQixVQUFGLEVBQVFDLGdCQUFSLEVBQXRCO0FBQ0QsU0FMRCxNQUtPLElBQUlMLElBQUlDLElBQUosQ0FBU0MsSUFBYixFQUFtQjtBQUN4QixjQUFNRSxRQUFPLFNBQWI7QUFDQSxjQUFNQyxXQUFVLDZCQUFoQjtBQUNBLGdCQUFLWCxLQUFMLENBQVdSLFVBQVgsQ0FBc0IsRUFBRWtCLFdBQUYsRUFBUUMsaUJBQVIsRUFBdEI7QUFDRDtBQUNGLE9BZkgsRUFnQkdFLEtBaEJILENBZ0JTLGVBQU87QUFDWjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsT0FuQkg7QUFvQkQsSzs7Ozs7d0NBMUNtQjtBQUFBLG1CQU1kLEtBQUtoQixLQU5TO0FBQUEsVUFFaEJYLFlBRmdCLFVBRWhCQSxZQUZnQjtBQUFBLFVBR2E0QixRQUhiLFVBR2hCQyxLQUhnQixDQUdQQyxNQUhPLENBR0dDLFFBSEg7QUFBQSxVQUlpQkMsV0FKakIsVUFJaEJsQyxXQUpnQixDQUlEbUMsSUFKQyxDQUlPRixRQUpQO0FBQUEsVUFLSEcsS0FMRyxVQUtoQnJDLFNBTGdCLENBS0hxQyxLQUxHOzs7QUFRbEIsVUFBTUMsVUFBVUQsUUFBUU4sUUFBUixHQUFtQkksV0FBbkM7O0FBRUFoQyxtQkFBYW1DLE9BQWIsRUFBc0JYLEtBQXRCLENBQTRCO0FBQUEsZUFBT0MsUUFBUUMsR0FBUixDQUFZQyxHQUFaLENBQVA7QUFBQSxPQUE1QjtBQUNEOzs7dUNBaUNrQlMsUSxFQUFVRixLLEVBQU87QUFDbEMsVUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFDRTtBQUNFLG9CQUFVLEtBQUsxQixXQURqQjtBQUVFLHFCQUFVLG1CQUZaO0FBR0Usc0JBQVcsb0JBSGI7QUFJRSxvQkFBVTRCO0FBSlosVUFERjtBQVFEO0FBQ0Y7OztpQ0FFWTtBQUFBOztBQUFBLHlCQVVQLEtBQUt6QixLQUFMLENBQVdsQixLQVZKO0FBQUEsVUFFVDRDLElBRlMsZ0JBRVRBLElBRlM7QUFBQSxVQUdUQyxLQUhTLGdCQUdUQSxLQUhTO0FBQUEsVUFJVEMsTUFKUyxnQkFJVEEsTUFKUztBQUFBLFVBS1RDLElBTFMsZ0JBS1RBLElBTFM7QUFBQSxVQU1UQyxJQU5TLGdCQU1UQSxJQU5TO0FBQUEsVUFPVEMsY0FQUyxnQkFPVEEsY0FQUztBQUFBLFVBUVRDLFFBUlMsZ0JBUVRBLFFBUlM7QUFBQSxVQVNUQyxpQkFUUyxnQkFTVEEsaUJBVFM7OztBQVlYLFVBQU1DLGVBQWUseUJBQVlQLEtBQVosQ0FBckI7O0FBWlcsVUFjSEosS0FkRyxHQWNPLEtBQUt2QixLQUFMLENBQVdkLFNBZGxCLENBY0hxQyxLQWRHOzs7QUFnQlgsVUFBTUUsV0FBV1Esb0JBQW9CQSxpQkFBcEIsR0FBd0MsRUFBekQ7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVO0FBQUEscUJBQUssT0FBS2hDLFlBQUwsQ0FBa0JDLENBQWxCLENBQUw7QUFBQSxhQUFoQjtBQUNFO0FBQ0UsbUJBQU93QixJQURUO0FBRUUsdUJBQVcsTUFGYjtBQUdFLG1CQUFPLE1BSFQ7QUFJRSxzQkFBVSxLQUFLN0I7QUFKakIsWUFERjtBQVFFO0FBQ0UsbUJBQU9xQyxZQURUO0FBRUUsdUJBQVcsT0FGYjtBQUdFLG1CQUFPLE9BSFQ7QUFJRSxzQkFBVSxLQUFLckM7QUFKakIsWUFSRjtBQWVHLGVBQUtzQyxrQkFBTCxDQUF3QlYsUUFBeEIsRUFBa0NGLEtBQWxDLENBZkg7QUFpQkU7QUFDRSxtQkFBT0ssTUFEVDtBQUVFLHVCQUFXLFFBRmI7QUFHRSxtQkFBTyxRQUhUO0FBSUUsc0JBQVUsS0FBSy9CO0FBSmpCLFlBakJGO0FBd0JFO0FBQ0UsbUJBQU9nQyxJQURUO0FBRUUsdUJBQVcsTUFGYjtBQUdFLG1CQUFPLDhCQUhUO0FBSUUsc0JBQVUsS0FBS2hDO0FBSmpCLFlBeEJGO0FBK0JFO0FBQ0UsbUJBQU9pQyxJQURUO0FBRUUsdUJBQVcsTUFGYjtBQUdFLG1CQUFPLE1BSFQ7QUFJRSxzQkFBVSxLQUFLakM7QUFKakIsWUEvQkY7QUFzQ0U7QUFDRSxtQkFBT2tDLGNBRFQ7QUFFRSx1QkFBVyxnQkFGYjtBQUdFLG1CQUFPLE9BSFQ7QUFJRSxzQkFBVSxLQUFLbEM7QUFKakIsWUF0Q0Y7QUE2Q0U7QUFDRSxtQkFBT21DLFFBRFQ7QUFFRSx1QkFBVyxVQUZiO0FBR0UsbUJBQU8sS0FIVDtBQUlFLHNCQUFVLEtBQUtuQztBQUpqQixZQTdDRjtBQW1ERSxtREFBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssUUFBckMsRUFBOEMsT0FBTSxjQUFwRDtBQW5ERjtBQURGLE9BREY7QUF5REQ7Ozs2QkFFUTtBQUFBLFVBQ0NmLEtBREQsR0FDVyxLQUFLa0IsS0FEaEIsQ0FDQ2xCLEtBREQ7OztBQUdQLFVBQUksdUJBQVFBLEtBQVIsQ0FBSixFQUFvQjtBQUNsQixlQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0UsaUVBQWUscUJBQW1CQSxNQUFNNEMsSUFBeEMsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsNkJBQWY7QUFDRyxlQUFLVSxVQUFMLEVBREg7QUFFRSxtREFGRjtBQUdFLG1EQUhGO0FBSUUsbURBSkY7QUFLRSxrRUFBYyxPQUFPLEtBQUtwQyxLQUFMLENBQVdrQixLQUFoQztBQUxGLFNBRkY7QUFTRTtBQVRGLE9BREY7QUFhRDs7Ozs7O0FBdktHdEIsVSxDQUNHeUMsUyxHQUFZO0FBQ2pCdkQsU0FBTyxvQkFBVXdELE1BQVYsQ0FBaUJDLFVBRFAsRUFDbUI7QUFDcENyRCxhQUFXLG9CQUFVb0QsTUFBVixDQUFpQkMsVUFGWCxFQUV1QjtBQUN4Q3BELGVBQWEsb0JBQVVtRCxNQUFWLENBQWlCQyxVQUhiLEVBR3lCO0FBQzFDbEQsZ0JBQWMsb0JBQVVtRCxJQUFWLENBQWVELFVBSlosRUFJd0I7QUFDekNqRCxlQUFhLG9CQUFVa0QsSUFBVixDQUFlRCxVQUxYLEVBS3VCO0FBQ3hDaEQsbUJBQWlCLG9CQUFVaUQsSUFBVixDQUFlRCxVQU5mLEVBTTJCO0FBQzVDL0MsY0FBWSxvQkFBVWdELElBQVYsQ0FBZUQsVUFQVixFQU9zQjtBQUN2QzlDLGFBQVcsb0JBQVUrQyxJQUFWLENBQWVELFVBUlQsRUFRcUI7QUFDdEM3QyxnQkFBYyxvQkFBVThDLElBQVYsQ0FBZUQsVUFUWixDQVN3QjtBQVR4QixDO2tCQXlLTix5QkFBUTFELGVBQVIsRUFBeUJPLGtCQUF6QixFQUE2Q1EsVUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7QUM3TmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU02QyxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUFBLE1BQ2xCQyxNQURrQixHQUN3QjFDLEtBRHhCLENBQ2xCMEMsTUFEa0I7QUFBQSxNQUNWeEQsU0FEVSxHQUN3QmMsS0FEeEIsQ0FDVmQsU0FEVTtBQUFBLDJCQUN3QmMsS0FEeEIsQ0FDQzJDLFdBREQ7QUFBQSxNQUNDQSxXQURELHNDQUNlLElBRGY7O0FBRTFCLE1BQUlDLE9BQU81QyxNQUFNNEMsSUFBakI7QUFDQSxNQUFJQyxnQkFBSjs7QUFFQSxNQUFJLENBQUNILE1BQUQsSUFBV0EsT0FBT0ksTUFBUCxLQUFrQixDQUFqQyxFQUFvQztBQUNsQ0YsV0FBTyxhQUFQO0FBQ0FDLGNBQVU7QUFBQSxhQUFNL0IsUUFBUUMsR0FBUixDQUFZLEVBQVosQ0FBTjtBQUFBLEtBQVY7QUFDRCxHQUhELE1BR087QUFDTDhCLGNBQVU7QUFBQSxhQUFNN0MsTUFBTStDLFNBQU4sRUFBTjtBQUFBLEtBQVY7QUFDRDs7QUFFRCxNQUFJL0MsTUFBTWQsU0FBTixDQUFnQnFDLEtBQWhCLElBQXlCdkIsTUFBTWQsU0FBTixDQUFnQjhELFFBQTdDLEVBQXVEO0FBQ3JELFdBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxhQUFoQixFQUE4QixJQUFJSixJQUFsQztBQUNFO0FBQUE7QUFBQSxVQUFJLGlDQUErQkYsTUFBbkMsRUFBNkMsU0FBU0csT0FBdEQ7QUFBQTtBQUFBLE9BREY7QUFJRSw2Q0FBSyxXQUFVLHNCQUFmO0FBSkYsS0FERjtBQVFEO0FBQ0YsQ0F0QkQ7O0FBd0JBLElBQU1JLGdCQUFnQixTQUFoQkEsYUFBZ0IsUUFBUztBQUM3QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBS2pELFlBQU1rRDtBQUFYLEtBREY7QUFFR1QsZUFBV3pDLEtBQVg7QUFGSCxHQURGO0FBTUQsQ0FQRDs7QUFTQSxJQUFNbkIsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTE0saUJBQWFMLE1BQU1LLFdBRGQ7QUFFTEQsZUFBV0osTUFBTUk7QUFGWixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNRSxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQ0w7QUFDRTJEO0FBREYsR0FESyxFQUlMcEQsUUFKSyxDQUFQO0FBTUQsQ0FQRDtrQkFRZSx5QkFBUWQsZUFBUixFQUF5Qk8sa0JBQXpCLEVBQTZDNkQsYUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7QUN0RGY7Ozs7OztBQUVBLElBQU1FLFlBQVksU0FBWkEsU0FBWSxRQUFTO0FBQUEsTUFDakJDLEtBRGlCLEdBQ3NDcEQsS0FEdEMsQ0FDakJvRCxLQURpQjtBQUFBLE1BQ1ZyRCxLQURVLEdBQ3NDQyxLQUR0QyxDQUNWRCxLQURVO0FBQUEsTUFDSHNELFNBREcsR0FDc0NyRCxLQUR0QyxDQUNIcUQsU0FERztBQUFBLE1BQ1FDLFNBRFIsR0FDc0N0RCxLQUR0QyxDQUNRc0QsUUFEUjtBQUFBLE1BQ2tCQyxTQURsQixHQUNzQ3ZELEtBRHRDLENBQ2tCdUQsU0FEbEI7QUFBQSxNQUM2QkMsSUFEN0IsR0FDc0N4RCxLQUR0QyxDQUM2QndELElBRDdCOztBQUV6QixNQUFNQyxZQUFZRCxPQUFPQSxJQUFQLEdBQWMsTUFBaEM7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFPLFdBQVUsWUFBakI7QUFBK0JKO0FBQS9CLEtBREY7QUFFRSw2Q0FGRjtBQUdFO0FBQ0UsWUFBTUssU0FEUjtBQUVFLGlDQUF5QkYsU0FGM0I7QUFHRSxZQUFLLElBSFA7QUFJRSxhQUFPeEQsS0FKVDtBQUtFLGdCQUFVO0FBQUEsZUFBS3VELFVBQVNELFNBQVQsRUFBb0JuRCxFQUFFd0QsTUFBRixDQUFTM0QsS0FBN0IsQ0FBTDtBQUFBO0FBTFosTUFIRjtBQVVFLDZDQVZGO0FBV0U7QUFYRixHQURGO0FBZUQsQ0FsQkQ7O2tCQW9CZW9ELFM7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7QUFFQSxJQUFNUSxrQkFBa0IsU0FBbEJBLGVBQWtCLFVBQVc7QUFDakMsU0FBTyxDQUFDLEVBQUVDLElBQUksRUFBTixFQUFVbEMsTUFBTSxlQUFoQixFQUFELEVBQW9DbUMsTUFBcEMsQ0FBMkNDLE9BQTNDLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxRQUFTO0FBQzFCLE1BQU1DLGdCQUFnQkwsZ0JBQWdCM0QsTUFBTThELE9BQXRCLENBQXRCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBUTlELFlBQU1vRDtBQUFkLEtBREY7QUFFRSw2Q0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGVBQU9wRCxNQUFNRCxLQURmO0FBRUUsa0JBQVU7QUFBQSxpQkFBS0MsTUFBTXNELFFBQU4sQ0FBZXRELE1BQU1xRCxTQUFyQixFQUFnQ25ELEVBQUV3RCxNQUFGLENBQVMzRCxLQUF6QyxDQUFMO0FBQUE7QUFGWjtBQUlHa0Usb0JBQWNELGFBQWQ7QUFKSCxLQUhGO0FBU0UsNkNBVEY7QUFVRTtBQVZGLEdBREY7QUFjRCxDQWhCRDs7QUFrQkEsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixVQUFXO0FBQy9CLFNBQU9ILFFBQVFJLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDcEMsV0FDRTtBQUFBO0FBQUEsUUFBUSxLQUFLQSxLQUFiLEVBQW9CLE9BQU9ELE9BQU9QLEVBQWxDO0FBQ0dPLGFBQU96QztBQURWLEtBREY7QUFLRCxHQU5NLENBQVA7QUFPRCxDQVJEOztrQkFVZXFDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2Y7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1sRixrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsU0FBTztBQUNMRyxhQUFTRixNQUFNRztBQURWLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1HLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFBbUIsRUFBRWlGLHFDQUFGLEVBQW5CLEVBQXNDMUUsUUFBdEMsQ0FBUDtBQUNELENBRkQ7O0lBSU0yRSxZOzs7Ozs7Ozs7Ozt3Q0FRZ0I7QUFDbEIsV0FBS3RFLEtBQUwsQ0FBV3FFLGFBQVgsR0FBMkJ4RCxLQUEzQixDQUFpQztBQUFBLGVBQU9DLFFBQVFDLEdBQVIsQ0FBWUMsR0FBWixDQUFQO0FBQUEsT0FBakM7QUFDRDs7OzZCQUVRO0FBQUEsbUJBU0gsS0FBS2hCLEtBVEY7QUFBQSxVQUVMaEIsT0FGSyxVQUVMQSxPQUZLO0FBQUEsVUFHTHNFLFFBSEssVUFHTEEsUUFISztBQUFBLFVBSUw3QixRQUpLLFVBSUxBLFFBSks7QUFBQSxVQUtMeEIsWUFMSyxVQUtMQSxZQUxLO0FBQUEsb0NBTUxvRCxTQU5LO0FBQUEsVUFNTEEsU0FOSyxvQ0FNTyxhQU5QO0FBQUEsZ0NBT0xELEtBUEs7QUFBQSxVQU9MQSxLQVBLLGdDQU9HLGNBUEg7QUFBQSxxQ0FRTG1CLFVBUks7QUFBQSxVQVFMQSxVQVJLLHFDQVFRLGVBUlI7OztBQVdQLFVBQUksdUJBQVF2RixPQUFSLENBQUosRUFBc0I7QUFDcEIsZUFBTywwQ0FBUDtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxjQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFLdUY7QUFBTCxTQURGO0FBRUU7QUFDRSxpQkFBTzlDLFFBRFQ7QUFFRSxtQkFBU3pDLE9BRlg7QUFHRSxxQkFBVyxhQUhiO0FBSUUsaUJBQU9vRSxLQUpUO0FBS0Usb0JBQVVFO0FBTFo7QUFGRixPQURGO0FBWUQ7Ozs7OztBQXZDR2dCLFksQ0FDR2pDLFMsR0FBWTtBQUNqQnJELFdBQVMsb0JBQVV3RixLQUFWLENBQWdCakMsVUFEUixFQUNvQjtBQUNyQzhCLGlCQUFlLG9CQUFVN0IsSUFBVixDQUFlRCxVQUZiLEVBRXlCO0FBQzFDZSxZQUFVLG9CQUFVZCxJQUFWLENBQWVELFVBSFIsRUFHb0I7QUFDckNrQyxlQUFhLG9CQUFVQyxNQUpOLENBSWM7QUFKZCxDO2tCQXlDTix5QkFBUTdGLGVBQVIsRUFBeUJPLGtCQUF6QixFQUE2Q2tGLFlBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDaENDaEYsVyxHQUFBQSxXOztBQTlCaEI7Ozs7QUFDQTs7Ozs7O2VBU0ksbUJBQUFxRixDQUFRLEVBQVIsQzs7SUFORkMsZSxZQUFBQSxlO0lBQ0FwRixVLFlBQUFBLFU7SUFDQUMsUyxZQUFBQSxTO0lBQ0FDLFksWUFBQUEsWTtJQUNBbUYsYSxZQUFBQSxhO0lBQ0FDLFMsWUFBQUEsUzs7Ozs7OztBQUdLLElBQU16RixzQ0FBZSxTQUFmQSxZQUFlLEtBQU07QUFDaEMsTUFBTTBGLDJDQUE4Qm5CLEVBQXBDO0FBQ0EsU0FBTyxvQkFBWTtBQUNqQixXQUFPaUIsZ0JBQ0p4RSxJQURJLENBQ0N5RSxTQURELEVBRUp6RSxJQUZJLENBRUMsWUFBTTtBQUNWLGFBQU8sZ0JBQU0yRSxHQUFOLENBQVVELEdBQVYsRUFDSjFFLElBREksQ0FDQyxlQUFPO0FBQ1hWLGlCQUFTc0YsYUFBYTNFLElBQUlDLElBQUosQ0FBU0MsSUFBdEIsQ0FBVDtBQUNBLGVBQU9GLEdBQVA7QUFDRCxPQUpJLEVBS0pPLEtBTEksQ0FLRSxlQUFPO0FBQ1o7QUFDRCxPQVBJLENBQVA7QUFRRCxLQVhJLENBQVA7QUFZRCxHQWJEO0FBY0QsQ0FoQk07O0FBa0JBLFNBQVN2QixXQUFULENBQXFCaUIsSUFBckIsRUFBMkI7QUFBQSxNQUU5QnpCLEtBRjhCLEdBWTVCeUIsSUFaNEIsQ0FFOUJ6QixLQUY4QjtBQUFBLG9CQVk1QnlCLElBWjRCLENBRzlCekIsS0FIOEI7QUFBQSxNQUk1QjhFLEVBSjRCLGVBSTVCQSxFQUo0QjtBQUFBLE1BSzVCaEMsTUFMNEIsZUFLNUJBLE1BTDRCO0FBQUEsTUFNdEJzRCxVQU5zQixlQU01QnJELElBTjRCO0FBQUEsTUFPNUJDLElBUDRCLGVBTzVCQSxJQVA0QjtBQUFBLE1BUTVCQyxjQVI0QixlQVE1QkEsY0FSNEI7QUFBQSxNQVM1QkMsUUFUNEIsZUFTNUJBLFFBVDRCO0FBQUEsTUFVNUJtRCxlQVY0QixlQVU1QkEsZUFWNEI7OztBQWNoQyxNQUFNSiwyQ0FBOEJuQixFQUFwQztBQUNBLE1BQU13Qix3QkFBZ0I3RSxLQUFLekIsS0FBckIsQ0FBTjtBQUNBc0csV0FBU0MsT0FBVCxHQUFtQixFQUFFekQsY0FBRixFQUFVc0Qsc0JBQVYsRUFBc0JwRCxVQUF0QixFQUE0QkMsOEJBQTVCLEVBQTRDQyxrQkFBNUMsRUFBbkI7O0FBRUEsU0FBTyxvQkFBWTtBQUNqQixXQUFPNkMsY0FBY2xGLFFBQWQsRUFDSlUsSUFESSxDQUNDeUUsU0FERCxFQUVKekUsSUFGSSxDQUVDLFlBQU07QUFDVixhQUFPLGdCQUFNaUYsR0FBTixDQUFVUCxHQUFWLEVBQWUsRUFBRWpHLE9BQU9zRyxRQUFULEVBQWYsRUFDSi9FLElBREksQ0FDQyxlQUFPO0FBQ1gsWUFBSSxDQUFDQyxJQUFJQyxJQUFKLENBQVNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJkLG1CQUFTc0YsYUFBYUcsUUFBYixDQUFUO0FBQ0Q7QUFDRCxlQUFPOUUsR0FBUDtBQUNELE9BTkksRUFPSk8sS0FQSSxDQU9FLGVBQU87QUFDWjtBQUNBLGVBQU9HLEdBQVA7QUFDRCxPQVZJLENBQVA7QUFXRCxLQWRJLENBQVA7QUFlRCxHQWhCRDtBQWlCRDs7QUFFRCxJQUFNaUUsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFDNUIsU0FBTztBQUNMekIsbUNBREs7QUFFTDFFO0FBRkssR0FBUDtBQUlELENBTEQ7O0FBT08sSUFBTVMsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDTyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0MsTUFBSUQsVUFBVSxhQUFkLEVBQTZCO0FBQzNCQSxZQUFRLG1CQUFSO0FBQ0Q7O0FBRUQsU0FBTztBQUNMMEQsc0NBREs7QUFFTDFFLCtCQUFVZ0IsS0FBVixFQUFrQkMsS0FBbEI7QUFGSyxHQUFQO0FBSUQsQ0FUTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVQOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTWxCLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0x5QyxVQUFNeEMsTUFBTUs7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQW1CLEVBQUVtRyx1Q0FBRixFQUFrQi9GLCtCQUFsQixFQUFuQixFQUFtREcsUUFBbkQsQ0FBUDtBQUNELENBRkQ7O0lBSU02RixZOzs7QUFDSiwwQkFBYztBQUFBOztBQUFBOztBQUFBLFVBU2QzRixXQVRjLEdBU0EsVUFBQzRGLEdBQUQsRUFBTTFGLEtBQU4sRUFBZ0I7QUFDNUIsWUFBS2EsUUFBTCxxQkFBaUI2RSxHQUFqQixFQUF1QjFGLEtBQXZCLEdBQWdDLFlBQU07QUFDcEMsY0FBSzJGLGlCQUFMLENBQ0UsTUFBS0MsS0FBTCxDQUFXQyxRQURiLEVBRUUsTUFBS0QsS0FBTCxDQUFXRSxvQkFGYjtBQUlELE9BTEQ7QUFNRCxLQWhCYTs7QUFBQSxVQWtCZDVGLFlBbEJjLEdBa0JDLGFBQUs7QUFDbEJDLFFBQUVDLGNBQUY7QUFEa0Isd0JBRXlCLE1BQUt3RixLQUY5QjtBQUFBLFVBRVZDLFFBRlUsZUFFVkEsUUFGVTtBQUFBLFVBRUFDLG9CQUZBLGVBRUFBLG9CQUZBOztBQUdsQixVQUFJRCxhQUFhQyxvQkFBakIsRUFBdUM7QUFDckMsWUFBTWpDLEtBQUssTUFBSzVELEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JBLElBQWhCLENBQXFCc0MsRUFBaEM7QUFDQSxjQUFLNUQsS0FBTCxDQUNHdUYsY0FESCxDQUNrQjtBQUNkM0IsZ0JBRGM7QUFFZGdDLDRCQUZjO0FBR2RFLGlDQUF1QkQ7QUFIVCxTQURsQixFQU1HeEYsSUFOSCxDQU1RLGVBQU87QUFDWCxjQUFNSyxPQUFPLFNBQWI7QUFDQSxjQUFNQyxVQUFVLGtCQUFoQjtBQUNBLGdCQUFLWCxLQUFMLENBQVdSLFVBQVgsQ0FBc0IsRUFBRWtCLFVBQUYsRUFBUUMsZ0JBQVIsRUFBdEI7QUFDQSxnQkFBS0MsUUFBTCxDQUFjO0FBQ1pnRixzQkFBVSxFQURFO0FBRVpDLGtDQUFzQixFQUZWO0FBR1pFLDRCQUFnQjtBQUhKLFdBQWQ7QUFLRCxTQWZILEVBZ0JHbEYsS0FoQkgsQ0FnQlM7QUFBQSxpQkFBT0MsUUFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJDLEdBQW5CLENBQVA7QUFBQSxTQWhCVDtBQWlCRDtBQUNGLEtBekNhOztBQUVaLFVBQUsyRSxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyw0QkFBc0IsRUFGWDtBQUdYRSxzQkFBZ0I7QUFITCxLQUFiO0FBRlk7QUFPYjs7OztzQ0FvQ2lCSCxRLEVBQVVDLG9CLEVBQXNCO0FBQ2hELFVBQUlELGFBQWFDLG9CQUFqQixFQUF1QztBQUNyQyxZQUFJLG1DQUFpQkQsUUFBakIsQ0FBSixFQUFnQztBQUM5QixlQUFLaEYsUUFBTCxDQUFjLEVBQUVtRixnQkFBZ0IsS0FBbEIsRUFBZDtBQUNBO0FBQ0Q7QUFDRjtBQUNELFdBQUtuRixRQUFMLENBQWMsRUFBRW1GLGdCQUFnQixJQUFsQixFQUFkO0FBQ0Q7OzttQ0FFYztBQUFBLG1CQUlULEtBQUsvRixLQUpJO0FBQUEsVUFFZXFCLFdBRmYsVUFFWEMsSUFGVyxDQUVIQSxJQUZHLENBRUtGLFFBRkw7QUFBQSxVQUdrQjRFLGFBSGxCLFVBR1g5RSxLQUhXLENBR0ZDLE1BSEUsQ0FHUUMsUUFIUjs7O0FBTWIsYUFBT0MsZUFBZTJFLGFBQXRCO0FBQ0Q7OztrQ0FFYTtBQUFBLG9CQUlSLEtBQUtoRyxLQUpHO0FBQUEsVUFFVWlHLE1BRlYsV0FFVjNFLElBRlUsQ0FFRkEsSUFGRSxDQUVNc0MsRUFGTjtBQUFBLFVBR2tCc0MsWUFIbEIsV0FHVmhGLEtBSFUsQ0FHREMsTUFIQyxDQUdTZ0YsT0FIVDs7O0FBTVosYUFBT0YsVUFBVUMsWUFBakI7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSSxLQUFLRSxZQUFMLE1BQXVCLEtBQUtDLFdBQUwsRUFBM0IsRUFBK0M7QUFBQSxxQkFDYyxLQUFLVixLQURuQjtBQUFBLFlBQ3JDQyxRQURxQyxVQUNyQ0EsUUFEcUM7QUFBQSxZQUMzQkMsb0JBRDJCLFVBQzNCQSxvQkFEMkI7QUFBQSxZQUNMRSxjQURLLFVBQ0xBLGNBREs7O0FBRTdDLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLOUYsWUFBckI7QUFDRTtBQUNFLHFCQUFPMkYsUUFEVDtBQUVFLG9CQUFLLFVBRlA7QUFHRSx5QkFBVSxVQUhaO0FBSUUscUJBQU0sY0FKUjtBQUtFLHdCQUFVLEtBQUsvRjtBQUxqQixjQURGO0FBU0U7QUFDRSxxQkFBT2dHLG9CQURUO0FBRUUseUJBQVUsc0JBRlo7QUFHRSxxQkFBTSx1QkFIUjtBQUlFLG9CQUFLLFVBSlA7QUFLRSx3QkFBVSxLQUFLaEc7QUFMakIsY0FURjtBQWlCRTtBQUNFLHdCQUFVa0csY0FEWjtBQUVFLG9CQUFLLFFBRlA7QUFHRSxxQkFBTSxpQkFIUjtBQUlFLHlCQUFVO0FBSlo7QUFqQkY7QUFERixTQURGO0FBNEJELE9BOUJELE1BOEJPO0FBQ0wsZUFBTywwQ0FBUDtBQUNEO0FBQ0Y7Ozs7OztrQkFHWSx5QkFBUWxILGVBQVIsRUFBeUJPLGtCQUF6QixFQUE2Q29HLFlBQTdDLEMiLCJmaWxlIjoiNy4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgZm9ybWF0UGhvbmUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtYXQnO1xuXG5pbXBvcnQge1xuICBnZXRFZGl0U3RvcmUsXG4gIC8vIHVwZGF0ZUVkaXRTdG9yZSBpcyBhbiBhY3Rpb24gdGhhdCB3aWxsIHVwZGF0ZSB0aGUgZWRpdFN0b3JlRm9ybVJlZHVjZXJcbiAgdXBkYXRlRWRpdFN0b3JlLFxuICAvLyB1cGRhdGVTdG9yZSBpcyBhbiBhY3Rpb24gdGhhdCB3aWxsIHNlbmQgYSByZXF1ZXN0IHRvIHVwZGF0ZSB0aGUgc3RvcmVcbiAgLy8gaW4gdGhlIFJhaWxzIEFQSVxuICB1cGRhdGVTdG9yZSxcbiAgc2V0R3Jvd2xlcixcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG59IGZyb20gJy4vZHVja3MvYWN0aW9ucyc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi8uLi8uLi9Gb3JtRmllbGQnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi8uLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBFZGl0UGFzc3dvcmQgZnJvbSAnLi4vLi4vdXNlcnMvZWRpdC9FZGl0UGFzc3dvcmQnO1xuaW1wb3J0IFNlbGVjdFRhaWxvciBmcm9tICcuLi8uLi9vcmRlcnMvb3JkZXJGb3Jtcy9TZWxlY3RUYWlsb3InO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci8nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RvcmU6IHN0b3JlLmVkaXRTdG9yZSxcbiAgICB0YWlsb3JzOiBzdG9yZS50YWlsb3JMaXN0LFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICBnZXRFZGl0U3RvcmUsXG4gICAgICB1cGRhdGVTdG9yZSxcbiAgICAgIHVwZGF0ZUVkaXRTdG9yZSxcbiAgICAgIHNldEdyb3dsZXIsXG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgU3RvcmVzRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgdXNlclJvbGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdldEVkaXRTdG9yZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgdXBkYXRlU3RvcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZUVkaXRTdG9yZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0TG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgcmVtb3ZlTG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHMsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0RWRpdFN0b3JlLFxuICAgICAgbWF0Y2g6IHsgcGFyYW1zOiB7IHN0b3JlX2lkOiBwYXJhbXNJZCB9IH0sXG4gICAgICBjdXJyZW50VXNlcjogeyB1c2VyOiB7IHN0b3JlX2lkOiB1c2VyU3RvcmVJZCB9IH0sXG4gICAgICB1c2VyUm9sZXM6IHsgYWRtaW4gfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHN0b3JlSWQgPSBhZG1pbiA/IHBhcmFtc0lkIDogdXNlclN0b3JlSWQ7XG5cbiAgICBnZXRFZGl0U3RvcmUoc3RvcmVJZCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVFZGl0U3RvcmUoZmllbGQsIHZhbHVlKTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcm9wcy5zZXRMb2FkZXIoKTtcbiAgICB0aGlzLnByb3BzXG4gICAgICAudXBkYXRlU3RvcmUoeyBzdG9yZSB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKTtcblxuICAgICAgICBpZiAocmVzLmRhdGEuYm9keS5lcnJvcnMpIHtcbiAgICAgICAgICBjb25zdCBraW5kID0gJ3dhcm5pbmcnO1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXMuZGF0YS5ib2R5LmVycm9yc1swXTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHNlbGYucHJvcHMuc3RvcmUpO1xuICAgICAgICAgIHNlbGYucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuYm9keSkge1xuICAgICAgICAgIGNvbnN0IGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdTdG9yZSBVcGRhdGVkIFN1Y2Nlc3NmdWxseSEnO1xuICAgICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXJUYWlsb3JTZWxlY3QodGFpbG9ySWQsIGFkbWluKSB7XG4gICAgaWYgKGFkbWluKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0VGFpbG9yXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgZmllbGROYW1lPVwiZGVmYXVsdF90YWlsb3JfaWRcIlxuICAgICAgICAgIGhlYWRlclRleHQ9XCJTZXQgRGVmYXVsdCBUYWlsb3JcIlxuICAgICAgICAgIHRhaWxvcklkPXt0YWlsb3JJZH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgcGhvbmUsXG4gICAgICBzdHJlZXQsXG4gICAgICB1bml0LFxuICAgICAgY2l0eSxcbiAgICAgIHN0YXRlX3Byb3ZpbmNlLFxuICAgICAgemlwX2NvZGUsXG4gICAgICBkZWZhdWx0X3RhaWxvcl9pZCxcbiAgICB9ID0gdGhpcy5wcm9wcy5zdG9yZTtcblxuICAgIGNvbnN0IGRpc3BsYXlQaG9uZSA9IGZvcm1hdFBob25lKHBob25lKTtcblxuICAgIGNvbnN0IHsgYWRtaW4gfSA9IHRoaXMucHJvcHMudXNlclJvbGVzO1xuXG4gICAgY29uc3QgdGFpbG9ySWQgPSBkZWZhdWx0X3RhaWxvcl9pZCA/IGRlZmF1bHRfdGFpbG9yX2lkIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgZmllbGROYW1lPXsnbmFtZSd9XG4gICAgICAgICAgICB0aXRsZT17J05hbWUnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5UGhvbmV9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eydwaG9uZSd9XG4gICAgICAgICAgICB0aXRsZT17J1Bob25lJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUYWlsb3JTZWxlY3QodGFpbG9ySWQsIGFkbWluKX1cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtzdHJlZXR9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eydzdHJlZXQnfVxuICAgICAgICAgICAgdGl0bGU9eydTdHJlZXQnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXt1bml0fVxuICAgICAgICAgICAgZmllbGROYW1lPXsndW5pdCd9XG4gICAgICAgICAgICB0aXRsZT17J1VuaXQsIFN1aXRlLCBFdGMuIChvcHRpb25hbCknfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxuICAgICAgICAgICAgZmllbGROYW1lPXsnY2l0eSd9XG4gICAgICAgICAgICB0aXRsZT17J0NpdHknfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZV9wcm92aW5jZX1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3N0YXRlX3Byb3ZpbmNlJ31cbiAgICAgICAgICAgIHRpdGxlPXsnU3RhdGUnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXt6aXBfY29kZX1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3ppcF9jb2RlJ31cbiAgICAgICAgICAgIHRpdGxlPXsnWmlwJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNob3J0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwZGF0ZSBTdG9yZVwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0VtcHR5KHN0b3JlKSkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtcmVsXCI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e2BBY2NvdW50IC8gJHtzdG9yZS5uYW1lfWB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgZWRpdC1hY2NvdW50XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9ybSgpfVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFZGl0UGFzc3dvcmQgbWF0Y2g9e3RoaXMucHJvcHMubWF0Y2h9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFN0b3Jlc0VkaXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL2VkaXQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9ybUZpZWxkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB2YWx1ZSwgZmllbGROYW1lLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCB0eXBlIH0gPSBwcm9wcztcbiAgY29uc3QgaW5wdXRUeXBlID0gdHlwZSA/IHR5cGUgOiAndGV4dCc7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e3RpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17YGZvcm0taW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgc2l6ZT1cIjUwXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShmaWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYWRkUGxlYXNlU2VsZWN0ID0gb3B0aW9ucyA9PiB7XG4gIHJldHVybiBbeyBpZDogJycsIG5hbWU6ICdQbGVhc2UgU2VsZWN0JyB9XS5jb25jYXQob3B0aW9ucyk7XG59O1xuXG5jb25zdCBGb3JtU2VsZWN0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gYWRkUGxlYXNlU2VsZWN0KHByb3BzLm9wdGlvbnMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+e3Byb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBwcm9wcy5vbkNoYW5nZShwcm9wcy5maWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlck9wdGlvbnMoc2VsZWN0T3B0aW9ucyl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJPcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb24uaWR9PlxuICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TZWxlY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRUYWlsb3JMaXN0IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0Zvcm1TZWxlY3QnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFpbG9yczogc3RvcmUudGFpbG9yTGlzdCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGdldFRhaWxvckxpc3QgfSwgZGlzcGF0Y2gpO1xufTtcblxuY2xhc3MgU2VsZWN0VGFpbG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0YWlsb3JzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgZ2V0VGFpbG9yTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICAgIHByb3ZpZGVyX2lkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFRhaWxvckxpc3QoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFpbG9ycyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdGFpbG9ySWQsXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBmaWVsZE5hbWUgPSAncHJvdmlkZXJfaWQnLFxuICAgICAgdGl0bGUgPSAnVGFpbG9yIFNob3A6JyxcbiAgICAgIGhlYWRlclRleHQgPSAnU2VsZWN0IFRhaWxvcicsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNFbXB0eSh0YWlsb3JzKSkge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnU2VsZWN0VGFpbG9yJ30+XG4gICAgICAgIDxoMz57aGVhZGVyVGV4dH08L2gzPlxuICAgICAgICA8Rm9ybVNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0YWlsb3JJZH1cbiAgICAgICAgICBvcHRpb25zPXt0YWlsb3JzfVxuICAgICAgICAgIGZpZWxkTmFtZT17J3Byb3ZpZGVyX2lkJ31cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWxlY3RUYWlsb3IpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL29yZGVyRm9ybXMvU2VsZWN0VGFpbG9yLmpzIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFNFVF9FRElUX1NUT1JFLCBVUERBVEVfRURJVF9TVE9SRSwgZXhwcmVzc0FwaSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0Q3VycmVudFN0b3JlLFxuICBzZXRHcm93bGVyLFxuICBzZXRMb2FkZXIsXG4gIHJlbW92ZUxvYWRlcixcbiAgdmFsaWRhdGVUb2tlbixcbiAgc2V0VG9rZW5zLFxufSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2FjdGlvbnMnKTtcblxuZXhwb3J0IGNvbnN0IGdldEVkaXRTdG9yZSA9IGlkID0+IHtcbiAgY29uc3QgdXJsID0gYCR7ZXhwcmVzc0FwaX0vc3RvcmVzLyR7aWR9YDtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGVUb2tlbigpXG4gICAgICAudGhlbihzZXRUb2tlbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBBeGlvcy5nZXQodXJsKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRFZGl0U3RvcmUocmVzLmRhdGEuYm9keSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZShkYXRhKSB7XG4gIGNvbnN0IHtcbiAgICBzdG9yZSxcbiAgICBzdG9yZToge1xuICAgICAgaWQsXG4gICAgICBzdHJlZXQsXG4gICAgICB1bml0OiBzdHJlZXRfdHdvLFxuICAgICAgY2l0eSxcbiAgICAgIHN0YXRlX3Byb3ZpbmNlLFxuICAgICAgemlwX2NvZGUsXG4gICAgICBhZ3JlZXNfdG9fdGVybXMsXG4gICAgfSxcbiAgfSA9IGRhdGE7XG5cbiAgY29uc3QgdXJsID0gYCR7ZXhwcmVzc0FwaX0vc3RvcmVzLyR7aWR9YDtcbiAgY29uc3Qgc3RvcmVPYmogPSB7IC4uLmRhdGEuc3RvcmUgfTtcbiAgc3RvcmVPYmouYWRkcmVzcyA9IHsgc3RyZWV0LCBzdHJlZXRfdHdvLCBjaXR5LCBzdGF0ZV9wcm92aW5jZSwgemlwX2NvZGUgfTtcblxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVRva2VuKGRpc3BhdGNoKVxuICAgICAgLnRoZW4oc2V0VG9rZW5zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gQXhpb3MucHV0KHVybCwgeyBzdG9yZTogc3RvcmVPYmogfSlcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMuZGF0YS5ib2R5LmVycm9ycykge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRFZGl0U3RvcmUoc3RvcmVPYmopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xufVxuXG5jb25zdCBzZXRFZGl0U3RvcmUgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0VESVRfU1RPUkUsXG4gICAgc3RvcmUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRWRpdFN0b3JlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICBpZiAoZmllbGQgPT09ICdwcm92aWRlcl9pZCcpIHtcbiAgICBmaWVsZCA9ICdkZWZhdWx0X3RhaWxvcl9pZCc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9FRElUX1NUT1JFLFxuICAgIHN0b3JlOiB7IFtmaWVsZF06IHZhbHVlIH0sXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL2VkaXQvZHVja3MvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlUGFzc3dvcmQsIHNldEdyb3dsZXIgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zJztcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vLi4vRm9ybUZpZWxkJztcbmltcG9ydCB7IFZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IHVwZGF0ZVBhc3N3b3JkLCBzZXRHcm93bGVyIH0sIGRpc3BhdGNoKTtcbn07XG5cbmNsYXNzIEVkaXRQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnJyxcbiAgICAgIHN1Ym1pdERpc2FibGVkOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVTdGF0ZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlUGFzc3dvcmRzKFxuICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybWF0aW9uXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm1hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAocGFzc3dvcmQgPT09IHBhc3N3b3JkQ29uZmlybWF0aW9uKSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMudXNlci51c2VyLmlkO1xuICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAudXBkYXRlUGFzc3dvcmQoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogcGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc3Qga2luZCA9ICdzdWNjZXNzJztcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1Bhc3N3b3JkIFVwZGF0ZWQnO1xuICAgICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICBzdWJtaXREaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhbGlkYXRlUGFzc3dvcmRzKHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm1hdGlvbikge1xuICAgIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICAgIGlmIChWYWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RGlzYWJsZWQ6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0b3JlSWRNYXRjaCgpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyOiB7IHVzZXI6IHsgc3RvcmVfaWQ6IHVzZXJTdG9yZUlkIH0gfSxcbiAgICAgIG1hdGNoOiB7IHBhcmFtczogeyBzdG9yZV9pZDogcGFyYW1zU3RvcmVJZCB9IH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gdXNlclN0b3JlSWQgPT0gcGFyYW1zU3RvcmVJZDtcbiAgfVxuXG4gIHVzZXJJZE1hdGNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXI6IHsgdXNlcjogeyBpZDogdXNlcklkIH0gfSxcbiAgICAgIG1hdGNoOiB7IHBhcmFtczogeyB1c2VyX2lkOiBwYXJhbXNVc2VySWQgfSB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHVzZXJJZCA9PSBwYXJhbXNVc2VySWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0b3JlSWRNYXRjaCgpIHx8IHRoaXMudXNlcklkTWF0Y2goKSkge1xuICAgICAgY29uc3QgeyBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24sIHN1Ym1pdERpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ29uZmlybWF0aW9ufVxuICAgICAgICAgICAgICBmaWVsZE5hbWU9XCJwYXNzd29yZENvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUGFzc3dvcmQgQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJVcGRhdGUgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRQYXNzd29yZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9lZGl0L0VkaXRQYXNzd29yZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=