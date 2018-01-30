webpackJsonp([10],{

/***/ 699:
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

var _constants = __webpack_require__(7);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormSelect = __webpack_require__(710);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    companies: store.companyList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCompanies: _actions.getCompanies,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var StoresNew = function (_Component) {
  _inherits(StoresNew, _Component);

  function StoresNew() {
    _classCallCheck(this, StoresNew);

    var _this = _possibleConstructorReturn(this, (StoresNew.__proto__ || Object.getPrototypeOf(StoresNew)).call(this));

    _this.updateStoreState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.updateAddressState = function (field, value) {
      var address = _this.state.address;

      address[field] = value;
      _this.setState({ address: address });
    };

    _this.emptyParamsPresent = function () {
      var store = _this.state;
      var address = store.address;

      var missingStoreParams = !_this.hasAllParams(store);
      var missingAddressParams = !_this.hasAllParams(address);
      return missingStoreParams && missingAddressParams;
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          setLoader = _this$props.setLoader,
          removeLoader = _this$props.removeLoader,
          setGrowler = _this$props.setGrowler;

      var missingParams = _this.emptyParamsPresent();

      if (!missingParams) {
        var store = _this.state;
        setLoader();
        (0, _actions.createStore)({ store: store }).then(function (res) {
          removeLoader();

          var errors = res.data.body.errors;
          if ((0, _isEmpty2.default)(errors)) {
            _this.setState(_this.initialStateObject());

            setGrowler({
              kind: 'success',
              message: 'New Store Created!'
            });
          } else {
            if (errors['invalid_address']) {
              setGrowler({
                kind: 'warning',
                message: 'Invalid Address! Check your inputs.'
              });
            }
          }
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        var errorString = 'Please enter all fields before submitting.';
        setGrowler({ kind: 'warning', message: errorString });
      }
    };

    _this.state = _this.initialStateObject();
    return _this;
  }

  _createClass(StoresNew, [{
    key: 'initialStateObject',
    value: function initialStateObject() {
      return {
        company_id: '',
        name: '',
        primary_contact_id: '',
        phone: '',
        type: '',
        address: {
          street: '',
          street_two: '',
          city: '',
          state_province: '',
          zip_code: ''
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.setLoader();
      this.props.getCompanies().then(function () {
        return _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'hasAllParams',
    value: function hasAllParams(obj) {
      return (0, _isEmpty2.default)(Object.keys(obj).filter(function (k) {
        return k == '';
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var companies = this.props.companies;
      var _state = this.state,
          company_id = _state.company_id,
          type = _state.type,
          name = _state.name,
          phone = _state.phone,
          _state$address = _state.address,
          street = _state$address.street,
          street_two = _state$address.street_two,
          city = _state$address.city,
          state_province = _state$address.state_province,
          zip_code = _state$address.zip_code;


      var updateStoreState = this.updateStoreState;
      var updateAddressState = this.updateAddressState;
      var submit = function submit(e) {
        return _this3.handleSubmit(e);
      };

      if ((0, _isEmpty2.default)(companies)) {
        return _react2.default.createElement('div', null);
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { onSubmit: submit },
            _react2.default.createElement(_FormField2.default, {
              value: name,
              fieldName: 'name',
              title: 'Name: ',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: phone,
              fieldName: 'phone',
              title: 'Phone: ',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street,
              fieldName: 'street',
              title: 'Street:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street_two,
              fieldName: 'street_two',
              title: 'Unit:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: city,
              fieldName: 'city',
              title: 'City:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: state_province,
              fieldName: 'state_province',
              title: 'State:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: zip_code,
              fieldName: 'zip_code',
              title: 'Zip:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormSelect2.default, {
              value: company_id,
              options: companies,
              fieldName: 'company_id',
              title: 'Company:',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormSelect2.default, {
              value: type,
              options: _constants.storeTypes,
              fieldName: 'type',
              title: 'Store Type:',
              onChange: updateStoreState
            }),
            _react2.default.createElement('input', {
              type: 'submit',
              className: 'short-button',
              value: 'Create New Store'
            })
          )
        );
      }
    }
  }]);

  return StoresNew;
}(_react.Component);

StoresNew.propTypes = {
  companies: _propTypes2.default.array.isRequired, // mapStateToProps
  getCompanies: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(StoresNew));

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzTmV3LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzPzk5MWQqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcz85OTIzKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzPzI4ZjMqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzPzYzOGYqKioiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiY29tcGFuaWVzIiwic3RvcmUiLCJjb21wYW55TGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldENvbXBhbmllcyIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsInNldEdyb3dsZXIiLCJkaXNwYXRjaCIsIlN0b3Jlc05ldyIsInVwZGF0ZVN0b3JlU3RhdGUiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJ1cGRhdGVBZGRyZXNzU3RhdGUiLCJhZGRyZXNzIiwic3RhdGUiLCJlbXB0eVBhcmFtc1ByZXNlbnQiLCJtaXNzaW5nU3RvcmVQYXJhbXMiLCJoYXNBbGxQYXJhbXMiLCJtaXNzaW5nQWRkcmVzc1BhcmFtcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwibWlzc2luZ1BhcmFtcyIsInRoZW4iLCJlcnJvcnMiLCJyZXMiLCJkYXRhIiwiYm9keSIsImluaXRpYWxTdGF0ZU9iamVjdCIsImtpbmQiLCJtZXNzYWdlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3JTdHJpbmciLCJjb21wYW55X2lkIiwibmFtZSIsInByaW1hcnlfY29udGFjdF9pZCIsInBob25lIiwidHlwZSIsInN0cmVldCIsInN0cmVldF90d28iLCJjaXR5Iiwic3RhdGVfcHJvdmluY2UiLCJ6aXBfY29kZSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrIiwic3VibWl0IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwicmVzZXRDYXJ0IiwiYWRtaW4iLCJyZXRhaWxlciIsIlNlY3Rpb25IZWFkZXIiLCJ0ZXh0IiwiY3VycmVudFVzZXIiLCJGb3JtRmllbGQiLCJ0aXRsZSIsImZpZWxkTmFtZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwidGFyZ2V0IiwiZ2V0U2VjdGlvbkhlYWRlclRleHQiLCJwYXRoIiwibWF0Y2giLCJXaXRoU2VjdGlvbkhlYWRlciIsIldyYXBwZWRDb21wb25lbnQiLCJhZGRQbGVhc2VTZWxlY3QiLCJpZCIsImNvbmNhdCIsIm9wdGlvbnMiLCJGb3JtU2VsZWN0Iiwic2VsZWN0T3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUVBOztBQU9BOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsZUFBV0MsTUFBTUM7QUFEWixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQ0w7QUFDRUMsdUNBREY7QUFFRUMsaUNBRkY7QUFHRUMsdUNBSEY7QUFJRUM7QUFKRixHQURL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ZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQge1xuICBnZXRDb21wYW5pZXMsXG4gIGNyZWF0ZVN0b3JlLFxuICBzZXRMb2FkZXIsXG4gIHJlbW92ZUxvYWRlcixcbiAgc2V0R3Jvd2xlcixcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzdG9yZVR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuLi9Gb3JtRmllbGQnO1xuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vRm9ybVNlbGVjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFdpdGhTZWN0aW9uSGVhZGVyIGZyb20gJy4uL0hPQy9XaXRoU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb21wYW5pZXM6IHN0b3JlLmNvbXBhbnlMaXN0LFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIGdldENvbXBhbmllcyxcbiAgICAgIHNldExvYWRlcixcbiAgICAgIHJlbW92ZUxvYWRlcixcbiAgICAgIHNldEdyb3dsZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgU3RvcmVzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGVPYmplY3QoKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcGFuaWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgZ2V0Q29tcGFuaWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgaW5pdGlhbFN0YXRlT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wYW55X2lkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcHJpbWFyeV9jb250YWN0X2lkOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6ICcnLFxuICAgICAgICBzdHJlZXRfdHdvOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgICAgIHN0YXRlX3Byb3ZpbmNlOiAnJyxcbiAgICAgICAgemlwX2NvZGU6ICcnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRMb2FkZXIoKTtcbiAgICB0aGlzLnByb3BzXG4gICAgICAuZ2V0Q29tcGFuaWVzKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucHJvcHMucmVtb3ZlTG9hZGVyKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgdXBkYXRlU3RvcmVTdGF0ZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgdXBkYXRlQWRkcmVzc1N0YXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBhZGRyZXNzW2ZpZWxkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzIH0pO1xuICB9O1xuXG4gIGhhc0FsbFBhcmFtcyhvYmopIHtcbiAgICByZXR1cm4gaXNFbXB0eShPYmplY3Qua2V5cyhvYmopLmZpbHRlcihrID0+IGsgPT0gJycpKTtcbiAgfVxuXG4gIGVtcHR5UGFyYW1zUHJlc2VudCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBzdG9yZTtcbiAgICBjb25zdCBtaXNzaW5nU3RvcmVQYXJhbXMgPSAhdGhpcy5oYXNBbGxQYXJhbXMoc3RvcmUpO1xuICAgIGNvbnN0IG1pc3NpbmdBZGRyZXNzUGFyYW1zID0gIXRoaXMuaGFzQWxsUGFyYW1zKGFkZHJlc3MpO1xuICAgIHJldHVybiBtaXNzaW5nU3RvcmVQYXJhbXMgJiYgbWlzc2luZ0FkZHJlc3NQYXJhbXM7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgc2V0TG9hZGVyLCByZW1vdmVMb2FkZXIsIHNldEdyb3dsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IHRoaXMuZW1wdHlQYXJhbXNQcmVzZW50KCk7XG5cbiAgICBpZiAoIW1pc3NpbmdQYXJhbXMpIHtcbiAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHNldExvYWRlcigpO1xuICAgICAgY3JlYXRlU3RvcmUoeyBzdG9yZSB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHJlbW92ZUxvYWRlcigpO1xuXG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gcmVzLmRhdGEuYm9keS5lcnJvcnM7XG4gICAgICAgICAgaWYgKGlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZU9iamVjdCgpKTtcblxuICAgICAgICAgICAgc2V0R3Jvd2xlcih7XG4gICAgICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ05ldyBTdG9yZSBDcmVhdGVkIScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVycm9yc1snaW52YWxpZF9hZGRyZXNzJ10pIHtcbiAgICAgICAgICAgICAgc2V0R3Jvd2xlcih7XG4gICAgICAgICAgICAgICAga2luZDogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIEFkZHJlc3MhIENoZWNrIHlvdXIgaW5wdXRzLicsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JTdHJpbmcgPSAnUGxlYXNlIGVudGVyIGFsbCBmaWVsZHMgYmVmb3JlIHN1Ym1pdHRpbmcuJztcbiAgICAgIHNldEdyb3dsZXIoeyBraW5kOiAnd2FybmluZycsIG1lc3NhZ2U6IGVycm9yU3RyaW5nIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wYW5pZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgY29tcGFueV9pZCxcbiAgICAgIHR5cGUsXG4gICAgICBuYW1lLFxuICAgICAgcGhvbmUsXG4gICAgICBhZGRyZXNzOiB7IHN0cmVldCwgc3RyZWV0X3R3bywgY2l0eSwgc3RhdGVfcHJvdmluY2UsIHppcF9jb2RlIH0sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB1cGRhdGVTdG9yZVN0YXRlID0gdGhpcy51cGRhdGVTdG9yZVN0YXRlO1xuICAgIGNvbnN0IHVwZGF0ZUFkZHJlc3NTdGF0ZSA9IHRoaXMudXBkYXRlQWRkcmVzc1N0YXRlO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGUgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSk7XG5cbiAgICBpZiAoaXNFbXB0eShjb21wYW5pZXMpKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17J25hbWUnfVxuICAgICAgICAgICAgICB0aXRsZT17J05hbWU6ICd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTdG9yZVN0YXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17J3Bob25lJ31cbiAgICAgICAgICAgICAgdGl0bGU9eydQaG9uZTogJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVN0b3JlU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdHJlZXR9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17J3N0cmVldCd9XG4gICAgICAgICAgICAgIHRpdGxlPXsnU3RyZWV0Oid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBZGRyZXNzU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdHJlZXRfdHdvfVxuICAgICAgICAgICAgICBmaWVsZE5hbWU9eydzdHJlZXRfdHdvJ31cbiAgICAgICAgICAgICAgdGl0bGU9eydVbml0Oid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBZGRyZXNzU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxuICAgICAgICAgICAgICBmaWVsZE5hbWU9eydjaXR5J31cbiAgICAgICAgICAgICAgdGl0bGU9eydDaXR5Oid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBZGRyZXNzU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZV9wcm92aW5jZX1cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsnc3RhdGVfcHJvdmluY2UnfVxuICAgICAgICAgICAgICB0aXRsZT17J1N0YXRlOid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBZGRyZXNzU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt6aXBfY29kZX1cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsnemlwX2NvZGUnfVxuICAgICAgICAgICAgICB0aXRsZT17J1ppcDonfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQWRkcmVzc1N0YXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZvcm1TZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfaWR9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvbXBhbmllc31cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsnY29tcGFueV9pZCd9XG4gICAgICAgICAgICAgIHRpdGxlPXsnQ29tcGFueTonfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU3RvcmVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxGb3JtU2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdG9yZVR5cGVzfVxuICAgICAgICAgICAgICBmaWVsZE5hbWU9eyd0eXBlJ31cbiAgICAgICAgICAgICAgdGl0bGU9eydTdG9yZSBUeXBlOid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTdG9yZVN0YXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIkNyZWF0ZSBOZXcgU3RvcmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoXG4gIFdpdGhTZWN0aW9uSGVhZGVyKFN0b3Jlc05ldylcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzTmV3LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvcm1GaWVsZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgdmFsdWUsIGZpZWxkTmFtZSwgb25DaGFuZ2UsIGNsYXNzTmFtZSwgdHlwZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGlucHV0VHlwZSA9IHR5cGUgPyB0eXBlIDogJ3RleHQnO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17aW5wdXRUeXBlfVxuICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHNpemU9XCI1MFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcyIsImV4cG9ydCBjb25zdCBnZXRTZWN0aW9uSGVhZGVyVGV4dCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtYXRjaDogeyBwYXRoIH0gfSA9IHByb3BzO1xuICBpZiAocGF0aCA9PT0gJy9hZG1pbi9yZXBvcnRzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cy9vcmRlcnMnKSB7XG4gICAgcmV0dXJuICdBaXIgVGFpbG9yIC8gT3JkZXIgUmVwb3J0cyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zdG9yZXMvbmV3Jykge1xuICAgIHJldHVybiAnU3RvcmVzIC8gTmV3JztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3VzZXJzLzp1c2VyX2lkL2VkaXQnKSB7XG4gICAgcmV0dXJuICdFZGl0IFVzZXInO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvb3JkZXJzL25ldycpIHtcbiAgICByZXR1cm4gJ0FncmVlIFRvIFRlcm1zJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3NpdGUvdGVybXNfb2Zfc2VydmljZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaGVscGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7Z2V0U2VjdGlvbkhlYWRlclRleHR9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gV2l0aFNlY3Rpb25IZWFkZXIoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gY2xhc3MgV2l0aFNlY3Rpb25IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBnZXRTZWN0aW9uSGVhZGVyVGV4dCh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e3RoaXMuc3RhdGUudGV4dH0gLz5cbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aFNlY3Rpb25IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhZGRQbGVhc2VTZWxlY3QgPSBvcHRpb25zID0+IHtcbiAgcmV0dXJuIFt7IGlkOiAnJywgbmFtZTogJ1BsZWFzZSBTZWxlY3QnIH1dLmNvbmNhdChvcHRpb25zKTtcbn07XG5cbmNvbnN0IEZvcm1TZWxlY3QgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBhZGRQbGVhc2VTZWxlY3QocHJvcHMub3B0aW9ucyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD57cHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHByb3BzLm9uQ2hhbmdlKHByb3BzLmZpZWxkTmFtZSwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyT3B0aW9ucyhzZWxlY3RPcHRpb25zKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlck9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgcmV0dXJuIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbi5pZH0+XG4gICAgICAgIHtvcHRpb24ubmFtZX1cbiAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVNlbGVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1TZWxlY3QuanMiXSwic291cmNlUm9vdCI6IiJ9