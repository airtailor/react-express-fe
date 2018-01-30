webpackJsonp([3],{

/***/ 694:
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

var _SelectGarment = __webpack_require__(731);

var _SelectGarment2 = _interopRequireDefault(_SelectGarment);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _SelectAlterations = __webpack_require__(730);

var _SelectAlterations2 = _interopRequireDefault(_SelectAlterations);

var _Cart = __webpack_require__(728);

var _Cart2 = _interopRequireDefault(_Cart);

var _Checkout = __webpack_require__(729);

var _Checkout2 = _interopRequireDefault(_Checkout);

var _orderDetails = __webpack_require__(736);

var _orderDetails2 = _interopRequireDefault(_orderDetails);

var _AgreeToTerms = __webpack_require__(756);

var _AgreeToTerms2 = _interopRequireDefault(_AgreeToTerms);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    cart: store.cart,
    garments: store.garments.garments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ addGarmentToCart: _actions.addGarmentToCart, setGarment: _actions.setGarment }, dispatch);
};

var OrdersNew = function (_Component) {
  _inherits(OrdersNew, _Component);

  function OrdersNew() {
    _classCallCheck(this, OrdersNew);

    var _this = _possibleConstructorReturn(this, (OrdersNew.__proto__ || Object.getPrototypeOf(OrdersNew)).call(this));

    _this.selectGarment = function (garment) {
      _this.setState({ selectedGarment: garment, stage: 2 });
    };

    _this.renderStageOne = function () {
      _this.setState({
        selectedGarment: null,
        selectedAlterations: [],
        stage: 1,
        selectedGarmentIndex: null
      }); //, notes: ''});
    };

    _this.renderSelectAlterations = function (index, garment, alterations) {
      var selectedGarment = _this.props.garments.filter(function (g) {
        return g.id === garment.id;
      })[0];

      _this.setState({
        selectedGarment: selectedGarment,
        selectedAlterations: alterations,
        selectedGarmentIndex: index,
        stage: 2
      });
    };

    _this.renderOrderDetails = function () {
      _this.setState({ stage: 3 });
    };

    _this.renderCheckout = function () {
      _this.setState({ stage: 4 });
    };

    _this.addAlteration = function (alteration) {
      var newSelectedAlterations = _this.state.selectedAlterations;
      var newList = void 0;
      if (!_this.alterationsIncludeNewSelection(newSelectedAlterations, alteration)) {
        // spread operator is needed here in order to create a copy of the array
        // that does not point to the array in redux.
        newList = [].concat(_toConsumableArray(newSelectedAlterations));
        newList.push(alteration);
      } else {
        newList = newSelectedAlterations.filter(function (alt) {
          return alt.id !== alteration.id;
        });
      }
      var alts = [].concat(_toConsumableArray(newList));
      _this.setState({ selectedAlterations: alts });
    };

    _this.addToCart = function () {
      var _this$state = _this.state,
          selectedGarment = _this$state.selectedGarment,
          selectedAlterations = _this$state.selectedAlterations;

      var garmentForCart = _this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      _this.props.addGarmentToCart(garmentForCart);
      _this.renderStageOne();
    };

    _this.updateGarment = function () {
      var _this$state2 = _this.state,
          selectedGarment = _this$state2.selectedGarment,
          selectedGarmentIndex = _this$state2.selectedGarmentIndex,
          selectedAlterations = _this$state2.selectedAlterations;

      var garmentForCart = _this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      _this.props.setGarment(garmentForCart, selectedGarmentIndex);
      _this.setState({
        stage: 1,
        selectedGarmentIndex: null,
        selectedGarment: null,
        selectedAlterations: []
      });
    };

    _this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: [],
      selectedGarmentIndex: null
    };
    return _this;
  }

  // going to try to just pull up the garment type of the item instad of injecting the item from props

  _createClass(OrdersNew, [{
    key: 'alterationsIncludeNewSelection',
    value: function alterationsIncludeNewSelection(newSelectedAlterations, alteration) {
      for (var i = 0; i < newSelectedAlterations.length; i++) {
        if (newSelectedAlterations[i].id === alteration.id) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'renderStage',
    value: function renderStage(stage) {
      switch (this.state.stage) {
        case 1:
          return _react2.default.createElement(_SelectGarment2.default, {
            handleSelect: this.selectGarment,
            garments: this.props.garments
          });
          break;
        case 2:
          return _react2.default.createElement(_SelectAlterations2.default, {
            addToCart: this.addToCart,
            handleSelect: this.addAlteration,
            renderOrderDetails: this.renderOrderDetails,
            selectedAlterations: this.state.selectedAlterations.map(function (alt) {
              return alt.id;
            }),
            renderStageOne: this.renderStageOne,
            garmentIndex: this.state.selectedGarmentIndex,
            updateGarment: this.updateGarment,
            garment: this.state.selectedGarment
          });
          break;
        case 3:
          return _react2.default.createElement(_orderDetails2.default, { renderStageOne: this.renderStageOne });
          break;
        case 4:
          return _react2.default.createElement(_Checkout2.default, {
            renderStageOne: this.renderStageOne,
            renderOrderDetails: this.renderOrderDetails
          });
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore.agrees_to_terms) {
        return _react2.default.createElement(_AgreeToTerms2.default, this.props);
      }

      var headerText = void 0;
      switch (this.state.stage) {
        case 1:
          headerText = 'Select New Garment';
          break;
        case 2:
          headerText = 'Select ' + this.state.selectedGarment.title + ' Alterations';
          break;
        case 3:
          headerText = 'Enter Customer Details';
          break;
        case 4:
          headerText = 'Review and Submit';
          break;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, {
          text: headerText,
          rotate: 'rotate',
          link: '/',
          showCart: true
        }),
        _react2.default.createElement(
          'div',
          { className: 'new-order-content' },
          _react2.default.createElement(
            'div',
            { className: 'stage-section' },
            this.renderStage(this.state.stage)
          ),
          _react2.default.createElement(_Cart2.default, {
            renderCheckout: this.renderCheckout,
            renderStageOne: this.renderStageOne,
            renderSelectAlterations: this.renderSelectAlterations,
            stage: this.state.stage,
            renderOrderDetails: this.renderOrderDetails
          })
        )
      );
    }
  }]);

  return OrdersNew;
}(_react.Component);

OrdersNew.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  garments: _propTypes2.default.array.isRequired, // mapStateToProps
  addGarmentToCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGarment: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersNew);

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

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  var _onChange = props.onChange,
      checked = props.checked,
      fieldName = props.fieldName,
      text = props.text,
      name = props.name,
      labelClass = props.labelClass;

  if (!fieldName) {
    return _react2.default.createElement(
      'div',
      { style: { display: 'inline' } },
      _react2.default.createElement('input', {
        type: 'checkbox',
        id: name + '-check',
        name: name,
        checked: checked,
        onChange: _onChange
      }),
      _react2.default.createElement(
        'label',
        {
          htmlFor: name + '-check',
          className: 'checkbox-label ' + labelClass
        },
        _react2.default.createElement('span', null),
        text
      )
    );
  }

  return _react2.default.createElement(
    'div',
    { style: { display: 'inline' } },
    _react2.default.createElement('input', {
      type: 'checkbox',
      id: name + '-check',
      name: name,
      checked: checked,
      onChange: function onChange() {
        return _onChange(fieldName, !checked);
      }
    }),
    _react2.default.createElement(
      'label',
      { htmlFor: name + '-check', className: 'checkbox-label' },
      _react2.default.createElement('span', null),
      text
    )
  );
};

exports.default = Checkbox;

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var _props$className = props.className,
      className = _props$className === undefined ? 'short-button' : _props$className,
      _props$clickArgs = props.clickArgs,
      clickArgs = _props$clickArgs === undefined ? undefined : _props$clickArgs,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === undefined ? function () {
    return console.log('');
  } : _props$onClick,
      disabled = props.disabled,
      text = props.text;

  return _react2.default.createElement('input', {
    type: 'submit',
    onClick: function onClick() {
      return _onClick(clickArgs);
    },
    disabled: disabled,
    className: className,
    value: text
  });
};

exports.default = Button;

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

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy(props) {
  return _react2.default.createElement(
    'div',
    {
      style: {
        fontFamily: 'arial',
        fontSize: '14px',
        padding: '20px',
        textAlign: 'justify'
      }
    },
    _react2.default.createElement(
      'p',
      {
        style: {
          fontWeight: 'bold',
          textAlign: 'center'
        }
      },
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We at Air Tailor (\u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D) know that our customers (\u201Cyou\u201D or \u201Cyour\u201D) care about how your personal information is used and shared, and we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclosure information, and your rights in relation to that information. Please read the following to learn more about our Privacy Policy. By using the Air Tailor text or web-based service, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways. You also acknowledge and agree that your use of any and all services, products, features, content or applications other than (or additional to) the Services offered by or for Air Tailor may be governed by separate terms of service.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'I. WHAT DOES THIS PRIVACY POLICY COVER?',
      _react2.default.createElement('br', null),
      'This Privacy Policy covers our treatment of Personal Information and Other Information we gather from you when you are accessing or using our Services. Personally identifiable information (\u201CPersonal Information\u201D) may include, but is not limited to, your name, username, home and/or work address, telephone number, e-mail address, company affiliation and associated interests. We collect some of this Personal Information by requesting it directly from you, and we may also obtain information about you from third-party sources, as described below.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Air Tailor also observes, derives, collects and infers other information (\u201COther Information\u201D) through your interaction with and use of the Services, which does not reveal your specific identity or does not directly relate to an individual. Other Information may include, but is not limited to, browser and device information (such as browser type and version, operating system and version, device ID and language, and Internet connection), data collected through automated electronic interactions, application usage data, demographic information, geographic or geo-location information (including without limitation, precise geo-location), IP address, and statistical and aggregated information. Other Information may constitute Personal Information when coupled with Personal Information that we hold and process about you. In such circumstances such Other Information shall be treated as Personal Information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This Privacy Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Our Services are not intended for users under 13 years of age. We do not knowingly collect or solicit Personal Information from anyone under the age of 13. If you are under 13, please do not attempt to access or use the Services or send any information about yourself to us, including your name, address, telephone number, or email address.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We gather various types of Personal Information and Other Information from our users, as explained more fully below. We may use this Personal Information and Other Information to personalize and improve our services, to allow our users to set up a user account and profile, to contact users, to fulfill your requests for certain products and services, to analyze how users utilize the Services, and as otherwise set forth in this Privacy Policy. We may share certain types of Personal Information with third parties, as described below.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'II. WHAT INFORMATION DOES AIR TAILOR COLLECT?',
      _react2.default.createElement('br', null),
      '1. Information You Provide to Us',
      _react2.default.createElement('br', null),
      'We collect information you provide directly to us, such as when you create or modify your account and profile, request or provide services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items and services requested, delivery and service notes, and other information you choose to provide. You can choose not to provide us with certain Personal Information, but then you may not be able to register with us or to take full advantage of our Services. We may also ask for additional information about items and services requested and delivery and service notes, and other information you may choose to provide. We may aggregate and/or anonymize your Personal Information so that you cannot be individually identified, and provide that information to our other customers, service providers, partners or other third parties, including, without limitation, to provide benchmarking data.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '2. Information We Collect Through Your Use of Our Services',
      _react2.default.createElement('br', null),
      'When you use our Services, we may collect the following information about you:'
    ),
    _react2.default.createElement(
      'ol',
      { type: 'a' },
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Transaction Information: We collect transaction details related to your use of our Services. This includes the type of Service requested, fees, the date and time the service was provided, and ratings feedback.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Financial Information: We do not currently collect financial information, such as your payment method (valid credit card number, type, expiration date or other financial information); that information is collected and stored by our third party payment processing company (the \u201CPayment Processor\u201D), and use and storage of that information is governed by the Payment Processor\u2019s applicable terms of service and privacy policy. Presently, we use Stripe as our Payment Processor, and their privacy policy is found',
        _react2.default.createElement(
          'a',
          { target: 'blank', href: 'http://stripe.com/us/privacy/' },
          ' ',
          'here'
        ),
        '.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Location Information: Where you consent to such use through the permission system on your mobile operating system, we may collect precise location data about your location. We use this location information, for example, to determine if the user is on site in a customer location. We may also approximate your current location using your IP address. Where you have allowed the App to access location services through your mobile operating system\u2019s permission system, we may also collect the location of your device when the App is running in the foreground or background.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Cookies and Similar Technologies: We and our service providers may use technologies like \u201Ccookies,\u201D pixels, and local storage (like on your browser or device, which is similar to a cookie but holds more information) and identifiers (including identifiers supplied by your browser or device or by app platform companies) on our website, in our emails, and within our apps to provide you with a range of products and services. You can control cookies through your browser settings and other tools. Please be aware that limiting the ability of websites to set cookies, however, may worsen your overall user experience, and in some cases the Services will not work properly without the use of cookies, local storage and similar technologies.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      '3. Information We Receive from Third Parties',
      _react2.default.createElement('br', null),
      'We receive and store information from third parties that interact in some way with the Services or that provide services to us in connection with the Services. In addition, you may choose to use third party services, websites or apps that share your Personal Information, activities and/or content with Air Tailor. Please read the privacy policy of any such service so that you understand its sharing practices.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'III. USE AND SHARING OF INFORMATION',
      _react2.default.createElement('br', null),
      'We neither rent nor sell your Personal Information in personally identifiable form to anyone. However, we do use and share with third parties your Personal Information and Other Information as described in Section II and in this Section:'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Service Providers.'
      ),
      ' We employ other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you, such as your profile information (including your address), the location of your device and other information. Unless we tell you differently, our service providers do not have any right to use the Personal Information we share with them beyond what is necessary to assist us.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Payment Processors.'
      ),
      ' As noted above, we use a third party Payment Processor, with which we share Personal Information in order to complete transactions on the Services. As noted above, we currently use Stripe as our Payment Processor, and their privacy policy is found here.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Facilitate Communications Between Air Tailor and you.'
      ),
      'We may use your information to send you communications we think will be of interest to you, including information about products, services, promotions, news, and events of Air Tailor and other companies, where permissible and according to local applicable laws.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Services Provision, Maintenance and Upgrades.'
      ),
      'We use your information to provide, maintain, improve and personalize our Services, including, to send receipts, provide products and services you request (and send related information), develop new features, provide customer support to you, develop safety features, authenticate users, send product updates and administrative messages, to perform internal operations, including, for example, to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Business Transfers.'
      ),
      ' We may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that would be transferred. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, Personal Information would be one of the assets transferred to or acquired by third parties.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Protection of Air Tailor and Others.'
      ),
      'We reserve the right to access, read, preserve, and disclose any information that we reasonably believe is necessary to comply with law or a court order; enforce or apply our conditions of use and other agreements; or protect the rights, property, or the safety of Air Tailor, our employees, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'With Your Consent.'
      ),
      ' Except as set forth above, you will be notified when your Personal Information may be shared with third parties in personally identifiable form, and will be offered an opportunity to prevent the sharing of this information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Internal Operations, Analytics and Testing.'
      ),
      ' ',
      'We use both Personal Information and Other Information to perform internal operations, including, for example, to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct analysis, testing, and research; and for monitoring and analyzing usage rates. In particular, we use Google Analytics to help us to collect and analyze certain information for the purposes discussed above. To opt-out of Google Analytics, click',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://tools.google.com/dlpage/gaoptout' },
        'here'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Aggregated and/or Anonymized Data.'
      ),
      'We may use any aggregated and/or anonymized data derived from or incorporating your Personal Information after you update or delete it for any purpose, but not in a manner that would identify you personally.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Advertisers.'
      ),
      'We may use third parties to administer a limited set of Air Tailor advertisements on third party electronic channels. No Personal Information is provided to the advertisers as part of this process, but aggregate profile information or Other Information, such as implied or inferred interests, may be used in the selection of advertising to make sure that it has relevance to the user. Some banner ads may contain embedded pixels that may write and read cookies or return session connection information that allows advertisers to better determine how many individual users have clicked on the ad banner. We may also use advertising technologies and participate in advertising technology networks that collect Other Information from Air Tailor and non-Air Tailor Services, as well as from other sources, to show you Air Tailor-related advertisements on Air Tailor\u2019s own and third-party websites and apps.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Other Information.'
      ),
      'We may use, transfer, and disclose Other Information we collect for any purpose, except where applicable law requires otherwise. If we are required to treat Other Information as Personal Information under applicable law, then we will only use it in the same way that we are permitted to use and disclose Personal Information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The grounds on which we process your Personal Information include where you have given your consent, where it is necessary to provide you the Service, or where it is necessary to fulfil our obligations to a third party in providing you with the Services.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'IV. WHAT RIGHTS AND CHOICES DO I HAVE?',
      _react2.default.createElement('br', null),
      'If you wish to cancel your account, please email us at hello@airtailor.com. Please note that some information may remain in our records after your deletion of such information from your account. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Air Tailor will comply with individual\u2019s requests regarding access, correction, and/or deletion of the personal data it stores in accordance with applicable law.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '1. Interest Based Advertising',
      _react2.default.createElement('br', null),
      'As discussed above, we may partner with third parties to provide Interest Based Advertising. For information about how to opt out of receiving interest-based advertisements, or to learn more about interest-based advertising in general and to access the opt-outs of other online advertising companies, visit the Network Advertising Initiative at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.networkadvertising.org/choices/' },
        'http://www.networkadvertising.org/choices/'
      ),
      ' ',
      'or the Digital Advertising Alliance (DAA) at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.aboutads.info/choices/' },
        'http://www.aboutads.info/choices/'
      ),
      ' ',
      'or, for interest-based advertising in apps, by using the DAA\u2019s \u201CAppChoices\u201D application available at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://http://www.aboutads.info/appchoices' },
        'http://http://www.aboutads.info/appchoices'
      ),
      '. By opting out, you may still receive ads from Air Tailor, but you still stop receiving ads from Air Tailor that have been targeted to you based on your visits and browsing activity across websites over time.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '2. Do Not Track Signals',
      _react2.default.createElement('br', null),
      'At this time we honor web browser Do Not Track (\u201CDNT\u201D) signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'V. MARKETING AND EMAIL COMMUNICATION',
      _react2.default.createElement('br', null),
      'By providing your email address to us, you expressly consent to receive emails from us, where permitted by law. We may use email to communicate with you, to send information that you have requested or to send information about other products or services developed or provided by us or our partners. If you do not want to receive commercial email or other mail from us, you may unsubscribe using the unsubscribe link at the bottom of an email you receive. Please note that if you do not want to receive legal notices from us, such as notices regarding this Privacy Policy, those legal notices will still govern your use of the Services, and you are responsible for reviewing such legal notices for changes. We may receive a confirmation when you open an email from Air Tailor if your computer supports this type of program. Air Tailor uses this confirmation to help us make emails more interesting and helpful and to improve our service.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VI. SECURITY',
      _react2.default.createElement('br', null),
      'Air Tailor uses commercially reasonable physical, electronic, and procedural safeguards to protect your Personal Information against loss or unauthorized access, use, modification, or deletion. However, no security program is foolproof, and thus we cannot guarantee the absolute security of your Personal Information or Other Information. We will retain your Personal Information for as long as reasonably necessary to accomplish the purposes in this Privacy Policy or as required by law.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VII. FAIR INFORMATION PRACTICES',
      _react2.default.createElement('br', null),
      'Should a data breach occur, we will notify you via email within 7 business days.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VIII. CHANGES TO THIS PRIVACY POLICY',
      _react2.default.createElement('br', null),
      'We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we use Personal Information, we will notify you by posting an announcement on our Website or sending you a message. You are bound by any changes to the Privacy Policy when you use the Services after such changes have been first posted.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'IX. CONTACT US',
      _react2.default.createElement('br', null),
      'If you have any questions or concerns regarding our Privacy Policy, please send us a message to hello@airtailor.com.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Updated January 10th, 2018'
    )
  );
};

exports.default = PrivacyPolicy;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsOfService = function TermsOfService(props) {
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'justify', margin: '20px 20px 0 20px' } },
    _react2.default.createElement(
      'p',
      { style: { textAlign: 'center', fontWeight: 'bold' } },
      'Terms of Service'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontFamily: 'sans-serif', fontWeight: 'bold' } },
      'The Air Tailor Platform provides easy-to-use software to our Retail Partners, referred to herein as the "Partners", allowing their store associates to order clothing alterations from the Air Tailor Tailors. This solution will help Partners offer their retail customers a heightened shopping experience, which promotes higher store sales and lowers the amount of returned merchandise.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Services'
        ),
        '. Air Tailor agrees to provide the following Technology Services (defined below) and Management Services (defined below) to Partners. Together, the Technology Services and Management Services are referred to herein as the "Services."'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Technology Services'
          ),
          '. Air Tailor will provide Partners with its alteration and tailor management software via a web client ("Air Tailor Platform") in order to permit Partners to place garment tailoring orders to third party tailors (collectively, "Tailors"); track tailoring orders and provide centralized, up-to-date shipment and status reporting; centralize customer service, account management, billing, reporting and payment functionalities for tailoring orders.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Management Services'
          ),
          '. Air Tailor will provide its Air Tailor Platform to facilitate all back-end ordering, fulfillment, shipping/delivery, payment and related services between Partners and Tailors (collectively, "Management Services"). For the avoidance of doubt, Air Tailor, shall not be responsible for any costs associated with goods, clothing or other products lost or damaged during shipment, including without limitation, goods, clothing or other products lost or damaged by shipping or messenger/delivery services. Should a tailored garment be found in good faith to be unsatisfactory by a Partner, Air Tailor shall use commercially reasonable efforts to replace or repair said garment at no additional charge.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Tailors'
          ),
          '. In the course of providing the Services contemplated herein, Air Tailor shall manage and facilitate all services that are performed by the Tailors including managing Tailoring orders, tracking and managing Tailor activity, and responding to any customer service concerns with respect to the performance of the applicable Tailors. Tailors shall have access to and utilize portions of the Air Tailor Platform in order to assist Air Tailor in managing these tasks. All Tailors utilized by the Air Tailor Portal must be previously vetted and approved to the system by Air Tailor staff prior to accessing the Air Tailor Platform or Services.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partner\u2019s Users'
          ),
          '. Partners may permit employees and sales associates at its store locations ("Users") to access and use the Services. Partners shall safeguard all access to the Services and all credentials provided by Air Tailor and shall ensure the confidentiality and security thereof. Partners shall be fully responsible for, and shall indemnify Air Tailor and its Indemnitees for, the acts and omissions of its Users.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Fees'
        ),
        '. All applicable costs shall be paid in full within thirty (30) days after the date of the corresponding invoice and are non-refundable once paid. Partners shall be responsible for all sales, use, or other taxes and other governmental charges on all alterations ordered as well as shipping/messenger costs from the store to the Tailor. Air Tailor will be responsible for all shipping and messenger/delivery costs back to the retail customer from the Tailor. Air Tailor may suspend the provision of the Services upon prior written notice to Customer if any payments become thirty (30) or more days past due.'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Ownership'
        ),
        '.'
      ),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Trademarks'
          ),
          '. Air Tailor grants Partners a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use Air Tailor\u2019s names, logos, designs, and other trademarks ("Marks") solely for the purposes of marketing, displaying and utilizing the Services, Air Tailor Alterations Portal and Air Tailor Platform. Partners agree to use the Air Tailor Marks consistent with the highest standards of quality so as to protect and maintain the Air Tailor Marks and Air Tailor\u2019s rights therein. To this end, Partners shall have the right to review and approve the manner of use of the Air Tailor Marks, and Partners agree to modify use of any Air Tailor Marks which do not meet the standards required by the Partner.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Air Tailor Ownership'
          ),
          '. Air Tailor shall retain all right, title and interest in and to the Services, the Air Tailor Alterations Portal, and the Air Tailor Platform including without limitation, all content, concepts, know-how, tools, scripts, methodologies, processes, code, or other intellectual property or trade secrets associated with the Air Tailor Alterations Portal, Air Tailor Platform, or other pre-existing or independently developed intellectual property created by Air Tailor and any enhancements, modifications, or improvements to the foregoing developed during or independent of the Services (collectively, "Air Tailor IP"). In connection with the Services herein, Air Tailor and Partners shall exchange data which shall include, without limitation, Tailoring order information (collectively, "Data"). Partner grants Air Tailor an irrevocable, perpetual, worldwide, transferable, non-exclusive, royalty-free license to use and modify Data in the course of its business. Further, Partners are not required to provide any suggestions, enhancement requests, recommendations or other feedback regarding the Services ("Feedback"), but if Partners do so, Partners grants Air Tailor a non-exclusive, royalty-free, worldwide, transferable, sub-licensable, irrevocable, perpetual license to use or incorporate into the Services any Feedback so provided.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Restrictions'
          ),
          '. Partners shall not (or permit any third party to) directly or indirectly (i) use any of the Air Tailor IP or Air Tailor Confidential Information to create any service, software, documentation or data that is competitive with, substantially similar or confusingly similar to any aspect of the Services; (ii) reverse engineer or use any other means to attempt to discover any source code in connection with the Services, Air Tailor IP or Air Tailor Confidential Information; (iii) encumber, pledge, resell, share, sublicense, transfer, rent, lease, time-share or use the Services, Air Tailor IP or Air Tailor Confidential Information for the benefit of any third party; (iv) modify, manufacture, adapt, create derivative works of or otherwise modify any aspect of the Services, Air Tailor IP or Air Tailor Confidential Information; (v) use the Services, Air Tailor IP and Air Tailor Confidential Information to support any activity that is infringing or illegal; (vi) transmit harmful, disabling or malicious code or devices or disable, override or access the Services, Air Tailor IP and Air Tailor Confidential Information, or access the same for purposes of monitoring their performance or functionality; or (vii) remove, alter or obscure any copyright or other proprietary notices on the Services, Air Tailor IP or Air Tailor Confidential Information. Notwithstanding anything to the contrary herein, Air Tailor may, in its sole discretion, immediately revoke access if a Partner breaches the restrictions in this Section or creates other security or legal concerns. Partner hereby agrees that Air Tailor will be entitled, in addition to any other remedies available to it at law or in equity, to injunctive relief to prevent the breach or threatened breach of Partner\u2019s obligations under this Section, without any requirement to demonstrate irreparable harm or post a bond.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partner Ownership'
          ),
          '. Partners shall retain all right, title, ownership and interest in and to (i) the Partner\u2019s websites; (ii) all materials or products that are the subject of any Tailoring Orders; and (ii) all content, trademarks, copyrights, patents, or other intellectual and/or proprietary property of the Partner contained therein (collectively, "Partner Content"). Partners grants Air Tailor a non-exclusive, limited, royalty-free, non-transferable license to use, host, distribute, reproduce, perform, display, modify and create derivative works of Partner Content to the extent necessary to perform Services for Partner.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Representations, Warranties, and Indemnity'
        ),
        '.'
      ),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partners'
          ),
          '. Partners represent and warrant that they shall provide all information, materials, access and cooperation necessary for Air Tailor to provide the Services and shall procure all connectivity, equipment and software as needed to access the Services or Air Tailor Platform; (ii) the Partner Content, and Air Tailor\u2019s use of Partner Content as contemplated herein, will not violate the intellectual property, privacy or publicity or other rights of any third party; (iii) Partners shall comply with all applicable federal, state, and local laws, rules and regulations; and (iv) Partners have the right to provide Data to Air Tailor for the purposes contemplated herein and that its collection, provision and use of the Data is compliant with all applicable laws and self-regulatory principles concerning privacy and data security and with Partner\u2019s privacy policies.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Air Tailor'
          ),
          '. Air Tailor represents and warrants that (i) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not to Air Tailor\u2019s knowledge at the time of delivery contain any Trojan horses, viruses, damaging computer programming, worms, or undocumented disabling devices; (ii) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not infringe on, misappropriate and/or violate the copyright, trademark, patent, right of privacy or publicity, or trade secret rights or any other intellectual property rights of any third Party, and (iii) in providing the Services, Air Tailor shall comply with all applicable laws, rules and regulations.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Disclaimers'
          ),
          '. Except as set forth herein in this agreement, Air Tailor does not warrant that the services will meet Partner\u2019s requirements or result in any outcome, or that their operation will be uninterrupted or error-free. Air Tailor hereby disclaims all other warranties, whether express or implied, oral or written, including without limitation, all implied warranties or title, merchantability, non-infringement or fitness for any particular purpose. Air Tailor shall not be responsible for any third party suppliers or for any third party platforms, software or intellectual property.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Indemnity'
          ),
          '. Each Party shall defend, indemnify and hold harmless the other Party and its affiliates, employees, representatives, successors and assigns from and against any and all losses, costs, damages, liabilities (including reasonable outside attorney\'s fees and expenses) in connection with any third Party claim, action, suits, regulatory investigations or subpoenas (collectively, "Claims") to the extent arising from such indemnifying Party\'s (i) breach of its representations, warranties or covenants under this Agreement; and/or (ii) gross negligence or willful misconduct of such Party, its employees or agents, provided that the indemnified Party gives the indemnifying Party (a) prompt written notice of any Claims, (b) sole control over the defense and/or settlement of any Claims, and (c) reasonable cooperation in connection with such defense and/or settlement.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Limitation on Liability'
          ),
          '. In no event shall either party be liable for any indirect, punitive, incidental, reliance, special, exemplary or consequential damages including, but not limited to, loss of business, revenues, profits and goodwill and Air Tailor\u2019s aggregate liability for any direct damages shall not exceed the fees paid during the term of this agreement.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Miscellaneous'
        ),
        '. The Agreement shall be governed by the laws of the State of New York, without regard to conflict of law principles. Any dispute arising out of or in connection with this agreement shall be brought in the federal or state courts of New York County, New York. In the event that either Party is prevented from performing, or is unable to perform (other than Partner\u2019s payment obligations), any of its obligations under this Agreement due to any force majeure (e.g., force of nature, fire, natural disaster, accident, riots, acts of government, acts of war or terrorism, failure of transportation or communications or of suppliers of goods or services, changes to any third Party platforms, transport failures, any usage restrictions imposed by any such third Party platforms, or any delays or outages arising in connection with such third Party platforms, the malicious acts of third Parties (e.g. cyber-attacks), or any other cause beyond the reasonable control of such Party), the affected Party shall give written notice thereof to the other Party and its performance shall be extended for the period of delay or inability to perform due to such occurrence.'
      )
    )
  );
};

exports.default = TermsOfService;

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectToStageOneIfNoAlterations = redirectToStageOneIfNoAlterations;
function redirectToStageOneIfNoAlterations(props) {
  var alterationsCount = props.cart.garments.reduce(function (prev, curr) {
    return prev += curr.alterations.length;
  }, 0);

  if (!alterationsCount > 0) {
    props.renderStageOne();
  }
}

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrowButton = function (_Component) {
  _inherits(ArrowButton, _Component);

  function ArrowButton() {
    _classCallCheck(this, ArrowButton);

    return _possibleConstructorReturn(this, (ArrowButton.__proto__ || Object.getPrototypeOf(ArrowButton)).apply(this, arguments));
  }

  _createClass(ArrowButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { className: 'arrow-button', onClick: this.props.onClick },
        '< ',
        ' ',
        this.props.text
      );
    }
  }]);

  return ArrowButton;
}(_react.Component);

exports.default = ArrowButton;

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _images = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClearButton = function (_Component) {
  _inherits(ClearButton, _Component);

  function ClearButton() {
    _classCallCheck(this, ClearButton);

    return _possibleConstructorReturn(this, (ClearButton.__proto__ || Object.getPrototypeOf(ClearButton)).apply(this, arguments));
  }

  _createClass(ClearButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { className: 'clear-button', onClick: this.props.onClick },
        _react2.default.createElement('img', { src: _images.clearImage, className: 'clear-image' }),
        _react2.default.createElement(
          'span',
          { className: 'clear-text' },
          'Clear'
        )
      );
    }
  }]);

  return ClearButton;
}(_react.Component);

exports.default = ClearButton;

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _images = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderNotesBasketButton = function (_Component) {
  _inherits(OrderNotesBasketButton, _Component);

  function OrderNotesBasketButton() {
    _classCallCheck(this, OrderNotesBasketButton);

    return _possibleConstructorReturn(this, (OrderNotesBasketButton.__proto__ || Object.getPrototypeOf(OrderNotesBasketButton)).apply(this, arguments));
  }

  _createClass(OrderNotesBasketButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { className: 'clear-button', onClick: this.props.onClick },
        _react2.default.createElement('img', { src: _images.notesImage, className: 'notes-image' }),
        _react2.default.createElement(
          'span',
          { className: 'notes-button-text' },
          'Add Order Notes'
        )
      );
    }
  }]);

  return OrderNotesBasketButton;
}(_react.Component);

exports.default = OrderNotesBasketButton;

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(11);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _validations = __webpack_require__(331);

var _Button = __webpack_require__(712);

var _Button2 = _interopRequireDefault(_Button);

var _ArrowButton = __webpack_require__(720);

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

var _OrderNotesBasketButton = __webpack_require__(724);

var _OrderNotesBasketButton2 = _interopRequireDefault(_OrderNotesBasketButton);

var _utils = __webpack_require__(737);

var _images = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    removeGarmentFromCart: _actions.removeGarmentFromCart,
    updateCartNotes: _actions.updateCartNotes,
    setCartCustomer: _actions.setCartCustomer,
    setGrowler: _actions.setGrowler,
    submitOrder: _actions.submitOrder,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this));

    _this.confirmRemoveFromCart = function (index) {
      if (confirm('Are you sure you want to delete this garment?')) {
        _this.props.removeGarmentFromCart(index);
      }
    };

    _this.checkForValidCustomer = function () {
      var _this$props = _this.props,
          cartCustomer = _this$props.cartCustomer,
          renderCheckout = _this$props.renderCheckout,
          setCartCustomer = _this$props.setCartCustomer,
          renderOrderDetails = _this$props.renderOrderDetails,
          setGrowler = _this$props.setGrowler;


      (0, _actions.createOrValidateCustomer)(cartCustomer).then(function (res) {
        if (res.data.body && res.data.body.errors) {
          var kind = 'warning';
          var message = res.data.body.errors[0];
          setGrowler({ kind: kind, message: message });
          renderOrderDetails();
        } else {
          setCartCustomer(res.data.body);
          renderCheckout();
        }
      });
    };

    _this.renderSubmitButtons = function () {
      return _react2.default.createElement(
        'div',
        { className: 'vert-cart-buttons-container' },
        _react2.default.createElement(_Button2.default, {
          onClick: function onClick() {
            return _this.submitOrder();
          },
          className: 'submit-order-button',
          text: 'SUBMIT ORDER'
        }),
        _react2.default.createElement(_ArrowButton2.default, {
          onClick: _this.props.renderOrderDetails,
          text: 'Edit customer details'
        })
      );
    };

    _this.state = {
      showNotes: false,
      orderCompleted: false
    };
    return _this;
  }

  _createClass(Cart, [{
    key: 'renderOrderCompleteRedirect',
    value: function renderOrderCompleteRedirect() {
      if (this.state.orderCompleted) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/orders/new/order-confirmation' });
      }
    }
  }, {
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      // this garment is being injected from the menu, not the Cart
      if (garment.alterations.length > 0) {
        return garment.alterations.map(function (alt, index) {
          return _react2.default.createElement(
            'p',
            { key: index, className: 'cart-alteration' },
            _react2.default.createElement(
              'span',
              null,
              alt.title
            ),
            ' ',
            _react2.default.createElement(
              'span',
              { style: { float: 'right', paddingRight: '25px' } },
              '$',
              alt.price.toFixed(2)
            )
          );
        });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'renderCartItems',
    value: function renderCartItems(props) {
      var _this2 = this;

      var garments = props.cart.garments;

      var garmentList = garments;
      var renderSelectAlterations = props.renderSelectAlterations;

      if (garmentList.length > 0) {
        return garmentList.map(function (garment, index) {
          return _react2.default.createElement(
            'div',
            { key: index, style: { marginLeft: '15px' } },
            _react2.default.createElement(
              'h3',
              { style: { paddingRight: '15px' } },
              _react2.default.createElement(
                'span',
                {
                  className: 'cart-item cart-item-title',
                  onClick: function onClick() {
                    renderSelectAlterations(index, garment, garment.alterations);
                  }
                },
                garment.title
              ),
              _react2.default.createElement(
                'span',
                _defineProperty({
                  className: 'cart-item',
                  onClick: function onClick() {
                    return _this2.confirmRemoveFromCart(index);
                  }
                }, 'className', 'remove-from-cart-button'),
                'DELETE'
              ),
              _react2.default.createElement(
                'span',
                {
                  style: {
                    paddingRight: '10px',
                    float: 'right',
                    fontSize: '8px',
                    lineHeight: 2.8
                  }
                },
                ' | '
              ),
              _react2.default.createElement(
                'span',
                {
                  onClick: function onClick() {
                    renderSelectAlterations(index, garment, garment.alterations);
                  },
                  className: 'cart-item edit-cart-item-button'
                },
                'EDIT'
              )
            ),
            _react2.default.createElement(
              'span',
              {
                className: 'cart-item',
                onClick: function onClick() {
                  renderSelectAlterations(index, garment, garment.alterations);
                }
              },
              _this2.renderGarmentAlterations(garment)
            )
          );
        });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'readyToCheckout',
    value: function readyToCheckout() {
      var _props = this.props,
          cartCustomer = _props.cartCustomer,
          shipToStore = _props.cart.shipToStore;
      var id = cartCustomer.id,
          first_name = cartCustomer.first_name,
          last_name = cartCustomer.last_name,
          phone = cartCustomer.phone,
          email = cartCustomer.email,
          street = cartCustomer.street,
          unit = cartCustomer.unit,
          city = cartCustomer.city,
          state_province = cartCustomer.state_province,
          zip_code = cartCustomer.zip_code,
          agrees_to_01_10_2018 = cartCustomer.agrees_to_01_10_2018;


      if (first_name && last_name && (0, _validations.ValidatePhone)(phone) && (0, _validations.ValidateEmail)(email) && agrees_to_01_10_2018 && (
      // Condition Below:
      // Tailor will ship to store, OR customer has provided address
      shipToStore || street && city && state_province && (0, _validations.ValidateZip)(zip_code))) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'submitOrder',
    value: function submitOrder() {
      var _this3 = this;

      var _props2 = this.props,
          setLoader = _props2.setLoader,
          submitOrder = _props2.submitOrder,
          setGrowler = _props2.setGrowler,
          renderOrderDetails = _props2.renderOrderDetails,
          removeLoader = _props2.removeLoader;


      setLoader();

      submitOrder(_extends({}, this.props)).then(function (res) {
        if (res.errors) {
          var kind = 'warning';
          var message = res.message;
          setGrowler({ message: message, kind: kind });
          renderOrderDetails();
        } else {
          _this3.setState({ orderCompleted: true });
        }
      }).catch(function (err) {
        debugger;
      }).then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton(props) {
      var _props3 = this.props,
          garments = _props3.cart.garments,
          renderOrderDetails = _props3.renderOrderDetails,
          renderStageOne = _props3.renderStageOne,
          stage = _props3.stage;


      var checkoutButton = _react2.default.createElement(_Button2.default, {
        onClick: this.checkForValidCustomer,
        text: 'CHECKOUT',
        className: 'big-button'
      });

      var adddMoreItems = _react2.default.createElement(_ArrowButton2.default, { onClick: renderStageOne, text: 'Add more items' });

      var editOrderDetails = _react2.default.createElement(_ArrowButton2.default, { onClick: renderOrderDetails, text: 'Edit Order Details' });

      if (garments.length > 0) {
        if (stage === 4) {
          return this.renderSubmitButtons();
        } else if (this.readyToCheckout() && stage !== 3) {
          return _react2.default.createElement(
            'div',
            { className: 'vert-cart-buttons-container' },
            checkoutButton,
            editOrderDetails
          );
        } else if (this.readyToCheckout(this.props) && stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'vert-cart-buttons-container' },
            checkoutButton,
            adddMoreItems
          );
        } else if (!this.readyToCheckout(props) && props.stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'vert-cart-buttons-container' },
            _react2.default.createElement(_Button2.default, {
              onClick: this.checkForValidCustomer,
              text: 'CHECKOUT',
              disabled: true,
              className: 'big-button'
            }),
            adddMoreItems
          );
        } else if (props.stage === 2 || props.stage === 1) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            _react2.default.createElement(_Button2.default, { onClick: renderOrderDetails, text: 'Add Order Details' })
          );
        }
      }
    }
  }, {
    key: 'renderOrderNotes',
    value: function renderOrderNotes(props) {
      var _this4 = this;

      var showNotes = this.state.showNotes;

      return _react2.default.createElement(
        'div',
        { style: { marginLeft: '15px' } },
        _react2.default.createElement(_OrderNotesBasketButton2.default, {
          onClick: function onClick() {
            return _this4.setState({ showNotes: !showNotes });
          }
        }),
        showNotes ? _react2.default.createElement('textarea', {
          className: 'order-details-notes-textarea',
          value: this.props.cart.notes,
          onChange: function onChange(e) {
            return _this4.props.updateCartNotes(e.target.value);
          },
          cols: 36,
          rows: 10,
          placeholder: 'Is this a special order or customer? Enter any important notes about the overall order here to help us serve you best!'
        }) : null
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          cart = _props4.cart,
          stage = _props4.stage;

      if (cart.garments.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'cart-container' },
          _react2.default.createElement(
            'h2',
            { className: 'cart-title' },
            _react2.default.createElement('img', { src: _images.basketImage, className: 'cart-icon' }),
            ' BASKET'
          ),
          _react2.default.createElement('hr', { className: 'cart-line' }),
          _react2.default.createElement(
            'div',
            { className: 'cart-items' },
            this.renderCartItems(this.props)
          ),
          _react2.default.createElement('hr', { className: 'cart-line' }),
          _react2.default.createElement(
            'div',
            { style: { marginLeft: '15px' } },
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'span',
                { className: 'form-label' },
                'Total: '
              ),
              _react2.default.createElement(
                'span',
                {
                  style: {
                    float: 'right',
                    paddingRight: '15px',
                    fontFamily: 'Raleway',
                    fontWeight: 400
                  }
                },
                '$',
                (0, _utils.getTotal)(cart.garments)
              )
            )
          ),
          _react2.default.createElement('hr', { className: 'cart-line' }),
          this.renderOrderNotes(this.props),
          this.renderNextButton(this.props),
          this.renderOrderCompleteRedirect()
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return Cart;
}(_react.Component);

Cart.propTypes = {
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  removeGarmentFromCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCartNotes: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  renderStageOne: _propTypes2.default.func.isRequired, // Parent Component
  stage: _propTypes2.default.number.isRequired // Parent Component
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(11);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _format = __webpack_require__(333);

var _ordersHelper = __webpack_require__(719);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore
  };
};

var Checkout = function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).apply(this, arguments));
  }

  _createClass(Checkout, [{
    key: 'renderCustomerInfo',
    value: function renderCustomerInfo() {
      var _props = this.props,
          _props$cartCustomer = _props.cartCustomer,
          first_name = _props$cartCustomer.first_name,
          last_name = _props$cartCustomer.last_name,
          phone = _props$cartCustomer.phone,
          email = _props$cartCustomer.email,
          shipToStore = _props.cart.shipToStore;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Customer Info:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          (0, _format.formatPhone)(phone)
        ),
        _react2.default.createElement(
          'p',
          null,
          email
        )
      );
    }
  }, {
    key: 'renderShipToCustomer',
    value: function renderShipToCustomer() {
      var _props$cartCustomer2 = this.props.cartCustomer,
          first_name = _props$cartCustomer2.first_name,
          last_name = _props$cartCustomer2.last_name,
          street = _props$cartCustomer2.street,
          unit = _props$cartCustomer2.unit,
          city = _props$cartCustomer2.city,
          state_province = _props$cartCustomer2.state_province,
          zip_code = _props$cartCustomer2.zip_code;


      var address_two = void 0;
      if (unit) {
        address_two = unit.length > 0 ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '';
      } else {
        address_two = '';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Customer:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        address_two,
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShipToStore',
    value: function renderShipToStore() {
      var _props$currentStore = this.props.currentStore,
          name = _props$currentStore.name,
          street = _props$currentStore.street,
          street_two = _props$currentStore.street_two,
          city = _props$currentStore.city,
          state_province = _props$currentStore.state_province,
          zip_code = _props$currentStore.zip_code;

      var address_two = void 0;

      if (street_two) {
        address_two = street_two.length > 0 ? _react2.default.createElement(
          'p',
          null,
          street_two
        ) : '';
      } else {
        address_two = '';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Store:'
        ),
        _react2.default.createElement(
          'p',
          null,
          name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        address_two,
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShippingInfo',
    value: function renderShippingInfo() {
      var shipToStore = this.props.cart.shipToStore;

      if (shipToStore) {
        return this.renderShipToStore();
      } else if (!shipToStore) {
        return this.renderShipToCustomer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var garments = this.props.cart.garments;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'checkout-container' },
          (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
          this.renderCustomerInfo(),
          _react2.default.createElement('br', null),
          this.renderShippingInfo()
        )
      );
    }
  }]);

  return Checkout;
}(_react.Component);

Checkout.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  renderOrderDetails: _propTypes2.default.func.isRequired, // Parent Component
  renderStageOne: _propTypes2.default.func.isRequired // Parent Component
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Checkout);

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _HowToPinModal = __webpack_require__(733);

var _HowToPinModal2 = _interopRequireDefault(_HowToPinModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderAlterations = function renderAlterations(props) {
  var garment = props.garment,
      alterations = props.alterations;

  var altsForGarment = alterations.filter(function (alt) {
    return alt.garmentId === garment.id;
  });
  return altsForGarment.map(function (alt, index) {
    // array of selected alteration ids - props.selectedAlterations

    // array of those alterations vvv
    var arr = props.selectedAlterations.map(function (alt) {
      return props.alterations.filter(function (a) {
        return a.id === alt;
      })[0];
    });

    var altTypes = arr.map(function (alt) {
      return alt.type;
    });

    var style = props.selectedAlterations.includes(alt.id) ? 'unclickable alteration-card' : 'alteration-card';

    var disabled = altTypes.includes(alt.type) && !props.selectedAlterations.includes(alt.id) ? 'disabled-alt' : '';

    var selected = props.selectedAlterations.includes(alt.id) ? 'selected-alt' : '';

    var handleClick = void 0;

    if (!disabled) {
      handleClick = function handleClick() {
        return props.handleSelect(alt);
      };
    }

    return _react2.default.createElement(
      'div',
      { key: index, className: '' + disabled },
      _react2.default.createElement(
        'div',
        { className: style + ' ' + selected, onClick: handleClick },
        _react2.default.createElement(
          'h3',
          null,
          alt.title
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'price-how-to-pin-container' },
        _react2.default.createElement(
          'h3',
          { className: 'alt-price-info' },
          '$',
          alt.price.toFixed(2)
        ),
        _react2.default.createElement(_HowToPinModal2.default, {
          image: alt.howToPin,
          title: alt.title,
          instructions: alt.instructions
        })
      )
    );
  });
};

var renderAddToCart = function renderAddToCart(props) {
  var disabled = props.selectedAlterations.length > 0 ? false : true;
  if (typeof props.garmentIndex === 'number') {
    return _react2.default.createElement('input', {
      disabled: disabled,
      type: 'submit',
      className: 'short-button',
      value: 'Update Garment',
      onClick: props.updateGarment
    });
  } else {
    return _react2.default.createElement('input', {
      disabled: disabled,
      type: 'submit',
      className: 'short-button',
      value: 'Add To Basket',
      onClick: props.addToCart
    });
  }
};

var SelectAlterations = function SelectAlterations(props) {
  return _react2.default.createElement(
    'div',
    { className: 'alteration-select' },
    _react2.default.createElement('br', null),
    renderAlterations(props),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'cart-buttons full-width' },
      _react2.default.createElement('input', {
        type: 'submit',
        className: 'short-button',
        value: 'Back',
        onClick: props.renderStageOne
      }),
      renderAddToCart(props)
    )
  );
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    alterations: store.alterations.alterations,
    cart: store.cart
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SelectAlterations);

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderGarments = function RenderGarments(props) {
  var garments = props.garments;

  return garments.map(function (garment, index) {
    return _react2.default.createElement(
      "div",
      {
        key: index,
        className: "garment-card",
        onClick: function onClick() {
          return props.handleSelect(garment);
        }
      },
      _react2.default.createElement(
        "h2",
        null,
        garment.title.toUpperCase()
      ),
      _react2.default.createElement("img", { className: "garment-image", src: garment.image })
    );
  });
};

var SelectGarment = function SelectGarment(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "select-garment" },
      RenderGarments(props)
    )
  );
};

exports.default = SelectGarment;

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(115);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactRouterDom = __webpack_require__(11);

var _PrivacyPolicy = __webpack_require__(715);

var _PrivacyPolicy2 = _interopRequireDefault(_PrivacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AcceptPrivacyPolicyModal = function (_Component) {
  _inherits(AcceptPrivacyPolicyModal, _Component);

  function AcceptPrivacyPolicyModal() {
    _classCallCheck(this, AcceptPrivacyPolicyModal);

    var _this = _possibleConstructorReturn(this, (AcceptPrivacyPolicyModal.__proto__ || Object.getPrototypeOf(AcceptPrivacyPolicyModal)).call(this));

    _this.openModal = function () {
      _this.setState({ modalIsOpen: true });
    };

    _this.closeModal = function () {
      _this.setState({ modalIsOpen: false });
    };

    _this.state = {
      modalIsOpen: false
    };
    return _this;
  }

  _createClass(AcceptPrivacyPolicyModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'how-to-pin-modal-container' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            style: {
              paddingLeft: '40px',
              lineHeight: '40px',
              textDecoration: 'underline',
              fontSize: '13px',
              fontFamily: 'Alegreya'
            },
            to: '#',
            onClick: this.openModal
          },
          'See Privacy Policy Here'
        ),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: this.state.modalIsOpen,
            style: { backgroundColor: 'blue' },
            onRequestClose: this.closeModal,
            contentLabel: 'Example Modal'
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              value: 'CLOSE',
              type: 'submit',
              className: 'short-button',
              onClick: this.closeModal
            }),
            _react2.default.createElement(_PrivacyPolicy2.default, null)
          )
        )
      );
    }
  }]);

  return AcceptPrivacyPolicyModal;
}(_react.Component);

AcceptPrivacyPolicyModal.propTypes = {};
exports.default = AcceptPrivacyPolicyModal;

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(115);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _images = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowToPinModal = function (_Component) {
  _inherits(HowToPinModal, _Component);

  function HowToPinModal() {
    _classCallCheck(this, HowToPinModal);

    var _this = _possibleConstructorReturn(this, (HowToPinModal.__proto__ || Object.getPrototypeOf(HowToPinModal)).call(this));

    _this.openModal = function () {
      _this.setState({ modalIsOpen: true });
    };

    _this.closeModal = function () {
      _this.setState({ modalIsOpen: false });
    };

    _this.state = {
      modalIsOpen: false
    };
    return _this;
  }

  _createClass(HowToPinModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'how-to-pin-modal-container' },
        _react2.default.createElement('img', {
          className: 'modal-eye',
          alt: 'how-to-pin',
          src: _images.infoImage,
          onClick: this.openModal
        }),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: this.state.modalIsOpen,
            style: { backgroundColor: 'blue' },
            onRequestClose: this.closeModal,
            contentLabel: 'Example Modal'
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              value: 'CLOSE',
              type: 'submit',
              className: 'short-button',
              onClick: this.closeModal
            }),
            _react2.default.createElement(
              'h1',
              { className: 'how-to-pin' },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'how-to-pin' },
              this.props.instructions
            ),
            _react2.default.createElement('img', {
              className: 'how-to-pin-image',
              alt: 'how-to-pin-image',
              src: this.props.image
            })
          )
        )
      );
    }
  }]);

  return HowToPinModal;
}(_react.Component);

HowToPinModal.propTypes = {};
exports.default = HowToPinModal;

/***/ }),

/***/ 734:
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

var _actions = __webpack_require__(34);

var _format = __webpack_require__(333);

var _FindCustomerByPhone = __webpack_require__(735);

var _FindCustomerByPhone2 = _interopRequireDefault(_FindCustomerByPhone);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _Checkbox = __webpack_require__(711);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ClearButton = __webpack_require__(721);

var _ClearButton2 = _interopRequireDefault(_ClearButton);

var _AcceptPrivacyPolicyModal = __webpack_require__(732);

var _AcceptPrivacyPolicyModal2 = _interopRequireDefault(_AcceptPrivacyPolicyModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cartCustomer: store.cartCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    updateCartCustomer: _actions.updateCartCustomer,
    resetCartCustomer: _actions.resetCartCustomer
  }, dispatch);
};

var CustomerInfo = function (_Component) {
  _inherits(CustomerInfo, _Component);

  function CustomerInfo() {
    _classCallCheck(this, CustomerInfo);

    var _this = _possibleConstructorReturn(this, (CustomerInfo.__proto__ || Object.getPrototypeOf(CustomerInfo)).call(this));

    _this.resetCartCustomerAndUpdateCustomerExists = function () {
      _this.props.resetCartCustomer();
      _this.updateCustomerExists(null);
    };

    _this.privacyPolicy = function (agrees) {
      return _react2.default.createElement(_Checkbox2.default, {
        fieldName: 'agrees_to_01_10_2018',
        text: 'Customer Agrees to Privacy Policy',
        checked: agrees,
        onChange: _this.props.updateCartCustomer
      });
    };

    _this.updateCustomerExists = function (value) {
      _this.setState({ customerExists: value });
    };

    _this.state = {
      customerExists: null
    };
    return _this;
  }

  _createClass(CustomerInfo, [{
    key: 'firstName',
    value: function firstName(first_name) {
      return _react2.default.createElement(_FormField2.default, {
        value: first_name,
        fieldName: 'first_name',
        title: 'First Name',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'lastName',
    value: function lastName(last_name) {
      return _react2.default.createElement(_FormField2.default, {
        value: last_name,
        fieldName: 'last_name',
        title: 'Last Name',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'phone',
    value: function phone(_phone) {
      var displayPhone = (0, _format.formatPhone)(_phone);
      return _react2.default.createElement(_FormField2.default, {
        value: displayPhone,
        fieldName: 'phone',
        title: 'Mobile Phone',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'email',
    value: function email(_email) {
      return _react2.default.createElement(_FormField2.default, {
        value: _email,
        fieldName: 'email',
        title: 'Email',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$cartCustomer = _props.cartCustomer,
          first_name = _props$cartCustomer.first_name,
          last_name = _props$cartCustomer.last_name,
          phone = _props$cartCustomer.phone,
          email = _props$cartCustomer.email,
          id = _props$cartCustomer.id,
          agrees_to_01_10_2018 = _props$cartCustomer.agrees_to_01_10_2018,
          updateCartCustomer = _props.updateCartCustomer;
      var customerExists = this.state.customerExists;


      if (customerExists === null && !id) {
        return _react2.default.createElement(_FindCustomerByPhone2.default, { updateCustomerExists: this.updateCustomerExists });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          customerExists || id ? '' : _react2.default.createElement(
            'h4',
            null,
            'Create Customer:'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.phone(phone),
            this.email(email)
          ),
          _react2.default.createElement(
            'div',
            null,
            this.firstName(first_name),
            this.lastName(last_name),
            _react2.default.createElement(_ClearButton2.default, {
              onClick: function onClick() {
                return _this2.resetCartCustomerAndUpdateCustomerExists();
              }
            }),
            _react2.default.createElement('hr', { className: 'cart-line' }),
            this.privacyPolicy(agrees_to_01_10_2018),
            _react2.default.createElement(
              'div',
              { style: { marginTop: '-10px', marginBottom: '-10px' } },
              _react2.default.createElement(_AcceptPrivacyPolicyModal2.default, null)
            ),
            _react2.default.createElement('hr', { className: 'cart-line' })
          )
        );
      }
    }
  }]);

  return CustomerInfo;
}(_react.Component);

CustomerInfo.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  updateCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  resetCartCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerInfo);

/***/ }),

/***/ 735:
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

var _actions = __webpack_require__(34);

var _validations = __webpack_require__(331);

var _format = __webpack_require__(333);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler,
    setCartCustomer: _actions.setCartCustomer,
    updateCartCustomer: _actions.updateCartCustomer
  }, dispatch);
};

var FindCustomerByPhone = function (_Component) {
  _inherits(FindCustomerByPhone, _Component);

  function FindCustomerByPhone() {
    _classCallCheck(this, FindCustomerByPhone);

    var _this = _possibleConstructorReturn(this, (FindCustomerByPhone.__proto__ || Object.getPrototypeOf(FindCustomerByPhone)).call(this));

    _this.updatePhone = function (field, phone) {
      _this.setState(_defineProperty({}, field, phone));
    };

    _this.state = {
      phone: '',
      customer: null
    };
    return _this;
  }

  _createClass(FindCustomerByPhone, [{
    key: 'renderSubmitButton',
    value: function renderSubmitButton(phone) {
      var _this2 = this;

      if ((0, _validations.ValidatePhone)(phone)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'submit',
            value: 'Submit',
            className: 'short-button',
            onClick: function onClick() {
              return _this2.searchForCustomerByPhone(phone);
            }
          })
        );
      }
    }
  }, {
    key: 'searchForCustomerByPhone',
    value: function searchForCustomerByPhone(phone) {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          setGrowler = _props.setGrowler,
          updateCustomerExists = _props.updateCustomerExists,
          setCartCustomer = _props.setCartCustomer,
          updateCartCustomer = _props.updateCartCustomer;


      setLoader();
      (0, _actions.findOrCreateCustomer)({ phone: phone }).then(function (res) {
        removeLoader();

        var _res$data = res.data,
            _res$data$body = _res$data.body,
            status = _res$data$body.status,
            id = _res$data$body.id,
            customer = _res$data.body;


        if (status && status === 404) {
          updateCartCustomer('phone', phone);
          updateCustomerExists(false);
        } else if (id) {
          var kind = 'success';
          var message = 'Found Customer';
          setGrowler({ kind: kind, message: message });
          setCartCustomer(customer);
          updateCustomerExists(true);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          phone = _state.phone,
          customer = _state.customer;

      var displayPhone = (0, _format.formatPhone)(phone);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_FormField2.default
        // phone.replace regex taken from https://stackoverflow.com/a/37066380/4859818 - JCM
        // phone.replace(/^(\d{3})(\d{3})(\d)+$/, '($1) $2-$3')
        , { value: displayPhone,
          fieldName: 'phone',
          title: 'Search for Customer by Mobile Phone',
          className: 'order-details-input',
          onChange: this.updatePhone
        }),
        this.renderSubmitButton(this.state.phone)
      );
    }
  }]);

  return FindCustomerByPhone;
}(_react.Component);

FindCustomerByPhone.propTypes = {
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCustomerExists: _propTypes2.default.func.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(FindCustomerByPhone);

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _zippopotam = __webpack_require__(762);

var _zippopotam2 = _interopRequireDefault(_zippopotam);

var _validations = __webpack_require__(331);

var _ordersHelper = __webpack_require__(719);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _Checkbox = __webpack_require__(711);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CustomerInfo = __webpack_require__(734);

var _CustomerInfo2 = _interopRequireDefault(_CustomerInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    updateCartCustomer: _actions.updateCartCustomer,
    updateCartShipTo: _actions.updateCartShipTo
  }, dispatch);
};

var OrderDetails = exports.OrderDetails = function (_Component) {
  _inherits(OrderDetails, _Component);

  function OrderDetails() {
    _classCallCheck(this, OrderDetails);

    return _possibleConstructorReturn(this, (OrderDetails.__proto__ || Object.getPrototypeOf(OrderDetails)).apply(this, arguments));
  }

  _createClass(OrderDetails, [{
    key: 'renderCustomerAddress',
    value: function renderCustomerAddress(shipToStore, customer) {
      var updateCartCustomer = this.props.updateCartCustomer;

      if (shipToStore) {
        // do nothing
      } else {
        var zippo = (0, _validations.ValidateZip)(customer.zip_code) ? _zippopotam2.default.get(customer.zip_code) : '';

        if (zippo.then && !customer.city && !customer.state_province) {
          zippo.then(function (res) {
            var formatted_address = res.results[0].formatted_address;
            var city = formatted_address.split(', ')[0];
            var state_province = formatted_address.split(', ')[1].match(/[a-zA-Z]+/g)[0];
            updateCartCustomer('city', city);
            updateCartCustomer('state_province', state_province);
          });
        }

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_FormField2.default, {
            value: customer.street,
            fieldName: 'street',
            title: 'Address 1',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.unit,
            fieldName: 'unit',
            title: 'Address 2',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.city,
            fieldName: 'city',
            title: 'City',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.state_province,
            fieldName: 'state_province',
            title: 'State',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code:',
            className: 'order-details-input',
            onChange: updateCartCustomer
          })
        );
      }
    }
  }, {
    key: 'renderShipTo',
    value: function renderShipTo(cart, customer) {
      var _this2 = this;

      var shipToStore = cart.shipToStore;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Checkbox2.default, {
            checked: shipToStore,
            text: 'Ship To Store',
            name: 'ship-to-store',
            onChange: function onChange() {
              return _this2.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_Checkbox2.default, {
            checked: !shipToStore,
            text: 'Ship To Customer',
            name: 'ship-to-customer',
            onChange: function onChange() {
              return _this2.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        this.renderCustomerAddress(shipToStore, customer)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cart = _props.cart,
          cartCustomer = _props.cartCustomer;

      return _react2.default.createElement(
        'div',
        { className: 'order-details' },
        (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
        _react2.default.createElement(_CustomerInfo2.default, null),
        _react2.default.createElement(
          'label',
          { className: 'form-label' },
          'Delivery Upon Completion'
        ),
        this.renderShipTo(cart, cartCustomer)
      );
    }
  }]);

  return OrderDetails;
}(_react.Component);

OrderDetails.propTypes = {
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  updateCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCartShipTo: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderDetails);

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotal = undefined;

var _lodash = __webpack_require__(53);

var getTotal = exports.getTotal = function getTotal(garments) {
  var alterations = garments.reduce(function (prev, curr) {
    prev.push(curr.alterations);
    prev = (0, _lodash.flatten)(prev);
    return prev;
  }, []);
  var price = alterations.reduce(function (prev, curr) {
    return prev += curr.price;
  }, 0);
  return price.toFixed(2);
};

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TermsOfService = __webpack_require__(716);

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _actions = __webpack_require__(714);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    store: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCurrentStore: _actions.getCurrentStore,
    updateStore: _actions.updateStore,
    setGrowler: _actions.setGrowler,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var AgreeToTerms = function (_Component) {
  _inherits(AgreeToTerms, _Component);

  function AgreeToTerms() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AgreeToTerms);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AgreeToTerms.__proto__ || Object.getPrototypeOf(AgreeToTerms)).call.apply(_ref, [this].concat(args))), _this), _this.submitAgreeToTerms = function () {
      var store = _this.props.currentStore;
      var agreedStore = _extends({}, store, { agrees_to_terms: true });

      _this.props.setLoader();
      _this.props.updateStore({ store: agreedStore }).then(function (res) {
        _this.props.getCurrentStore(store.id).then(function (res) {
          _this.props.removeLoader();
          var kind = "success";
          var message = "Thanks! You've agreed to the terms!";
          _this.props.setGrowler({ kind: kind, message: message });
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AgreeToTerms, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { width: "90%", margin: "50px auto", height: "800px", textAlign: "center" } },
        _react2.default.createElement(
          'div',
          { style: { overflow: "scroll", height: "90%" } },
          _react2.default.createElement(_TermsOfService2.default, null)
        ),
        _react2.default.createElement('input', {
          type: 'submit',
          className: 'short-button',
          value: 'Agree To Terms',
          onClick: this.submitAgreeToTerms })
      );
    }
  }]);

  return AgreeToTerms;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(AgreeToTerms));

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  baseUrl: 'http://www.zippopotam.us/',
  country: 'us'
};

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(761);

var _config2 = _interopRequireDefault(_config);

var _nodeFetch = __webpack_require__(266);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  config: _config2.default,
  get: function get(zipCode) {
    //return fetch(`${this.config.baseUrl}${this.config.country}/${zipCode}`);
    return (0, _nodeFetch2.default)('https://maps.googleapis.com/maps/api/geocode/json?&address=' + zipCode).then(function (res) {
      return res.json();
    });
    //return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${zipCode}`);
  }
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L09yZGVyc05ldy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0NoZWNrYm94LmpzPzg3NjQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzPzFlY2UiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL2VkaXQvZHVja3MvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9Qcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3Rlcm1zL1Rlcm1zT2ZTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlcnNIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQXJyb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ2xlYXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvT3JkZXJOb3Rlc0Jhc2tldEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L1NlbGVjdEFsdGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9uZXcvU2VsZWN0R2FybWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L21vZGFscy9BY2NlcHRQcml2YWN5UG9saWN5TW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9tb2RhbHMvSG93VG9QaW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L29yZGVyRGV0YWlscy9DdXN0b21lckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9vcmRlckRldGFpbHMvRmluZEN1c3RvbWVyQnlQaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L29yZGVyRGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3Rlcm1zL0FncmVlVG9UZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvbGliL3ppcHBvcG90YW0vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9saWIvemlwcG9wb3RhbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJjdXJyZW50VXNlciIsInN0b3JlIiwiY3VycmVudFN0b3JlIiwiY2FydCIsImdhcm1lbnRzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWRkR2FybWVudFRvQ2FydCIsInNldEdhcm1lbnQiLCJkaXNwYXRjaCIsIk9yZGVyc05ldyIsInNlbGVjdEdhcm1lbnQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkR2FybWVudCIsImdhcm1lbnQiLCJzdGFnZSIsInJlbmRlclN0YWdlT25lIiwic2VsZWN0ZWRBbHRlcmF0aW9ucyIsInNlbGVjdGVkR2FybWVudEluZGV4IiwicmVuZGVyU2VsZWN0QWx0ZXJhdGlvbnMiLCJpbmRleCIsImFsdGVyYXRpb25zIiwicHJvcHMiLCJmaWx0ZXIiLCJnIiwiaWQiLCJyZW5kZXJPcmRlckRldGFpbHMiLCJyZW5kZXJDaGVja291dCIsImFkZEFsdGVyYXRpb24iLCJuZXdTZWxlY3RlZEFsdGVyYXRpb25zIiwic3RhdGUiLCJuZXdMaXN0IiwiYWx0ZXJhdGlvbnNJbmNsdWRlTmV3U2VsZWN0aW9uIiwiYWx0ZXJhdGlvbiIsInB1c2giLCJhbHQiLCJhbHRzIiwiYWRkVG9DYXJ0IiwiZ2FybWVudEZvckNhcnQiLCJ1cGRhdGVHYXJtZW50IiwiaSIsImxlbmd0aCIsIm1hcCIsImFncmVlc190b190ZXJtcyIsImhlYWRlclRleHQiLCJ0aXRsZSIsInJlbmRlclN0YWdlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsIkZvcm1GaWVsZCIsInZhbHVlIiwiZmllbGROYW1lIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaW5wdXRUeXBlIiwiZSIsInRhcmdldCIsImdldFNlY3Rpb25IZWFkZXJUZXh0IiwicGF0aCIsIm1hdGNoIiwiV2l0aFNlY3Rpb25IZWFkZXIiLCJXcmFwcGVkQ29tcG9uZW50IiwiQ2hlY2tib3giLCJjaGVja2VkIiwibmFtZSIsImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiQnV0dG9uIiwiY2xpY2tBcmdzIiwidW5kZWZpbmVkIiwiZGlzYWJsZWQiLCJ1cGRhdGVTdG9yZSIsInJlcXVpcmUiLCJnZXRDdXJyZW50U3RvcmUiLCJzZXRHcm93bGVyIiwic2V0TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwidmFsaWRhdGVUb2tlbiIsInNldFRva2VucyIsImdldEVkaXRTdG9yZSIsInVybCIsInRoZW4iLCJnZXQiLCJzZXRFZGl0U3RvcmUiLCJyZXMiLCJkYXRhIiwiYm9keSIsImNhdGNoIiwic3RyZWV0Iiwic3RyZWV0X3R3byIsInVuaXQiLCJjaXR5Iiwic3RhdGVfcHJvdmluY2UiLCJ6aXBfY29kZSIsInN0b3JlT2JqIiwiYWRkcmVzcyIsInB1dCIsImVycm9ycyIsImVyciIsInVwZGF0ZUVkaXRTdG9yZSIsImZpZWxkIiwiUHJpdmFjeVBvbGljeSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIlRlcm1zT2ZTZXJ2aWNlIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJ3ZWlnaHQiLCJyZWRpcmVjdFRvU3RhZ2VPbmVJZk5vQWx0ZXJhdGlvbnMiLCJhbHRlcmF0aW9uc0NvdW50IiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJBcnJvd0J1dHRvbiIsIkNsZWFyQnV0dG9uIiwiT3JkZXJOb3Rlc0Jhc2tldEJ1dHRvbiIsImNhcnRDdXN0b21lciIsInJlbW92ZUdhcm1lbnRGcm9tQ2FydCIsInVwZGF0ZUNhcnROb3RlcyIsInNldENhcnRDdXN0b21lciIsInN1Ym1pdE9yZGVyIiwiQ2FydCIsImNvbmZpcm1SZW1vdmVGcm9tQ2FydCIsImNvbmZpcm0iLCJjaGVja0ZvclZhbGlkQ3VzdG9tZXIiLCJraW5kIiwibWVzc2FnZSIsInJlbmRlclN1Ym1pdEJ1dHRvbnMiLCJzaG93Tm90ZXMiLCJvcmRlckNvbXBsZXRlZCIsImZsb2F0IiwicGFkZGluZ1JpZ2h0IiwicHJpY2UiLCJ0b0ZpeGVkIiwiZ2FybWVudExpc3QiLCJtYXJnaW5MZWZ0IiwicmVuZGVyR2FybWVudEFsdGVyYXRpb25zIiwic2hpcFRvU3RvcmUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmUiLCJlbWFpbCIsImFncmVlc190b18wMV8xMF8yMDE4IiwiY2hlY2tvdXRCdXR0b24iLCJhZGRkTW9yZUl0ZW1zIiwiZWRpdE9yZGVyRGV0YWlscyIsInJlYWR5VG9DaGVja291dCIsIm5vdGVzIiwicmVuZGVyQ2FydEl0ZW1zIiwicmVuZGVyT3JkZXJOb3RlcyIsInJlbmRlck5leHRCdXR0b24iLCJyZW5kZXJPcmRlckNvbXBsZXRlUmVkaXJlY3QiLCJudW1iZXIiLCJDaGVja291dCIsImFkZHJlc3NfdHdvIiwicmVuZGVyU2hpcFRvU3RvcmUiLCJyZW5kZXJTaGlwVG9DdXN0b21lciIsInJlbmRlckN1c3RvbWVySW5mbyIsInJlbmRlclNoaXBwaW5nSW5mbyIsInJlbmRlckFsdGVyYXRpb25zIiwiYWx0c0Zvckdhcm1lbnQiLCJnYXJtZW50SWQiLCJhcnIiLCJhIiwiYWx0VHlwZXMiLCJzdHlsZSIsImluY2x1ZGVzIiwic2VsZWN0ZWQiLCJoYW5kbGVDbGljayIsImhhbmRsZVNlbGVjdCIsImhvd1RvUGluIiwiaW5zdHJ1Y3Rpb25zIiwicmVuZGVyQWRkVG9DYXJ0IiwiZ2FybWVudEluZGV4IiwiU2VsZWN0QWx0ZXJhdGlvbnMiLCJSZW5kZXJHYXJtZW50cyIsInRvVXBwZXJDYXNlIiwiaW1hZ2UiLCJTZWxlY3RHYXJtZW50IiwiQWNjZXB0UHJpdmFjeVBvbGljeU1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWxJc09wZW4iLCJjbG9zZU1vZGFsIiwicGFkZGluZ0xlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIb3dUb1Bpbk1vZGFsIiwidXBkYXRlQ2FydEN1c3RvbWVyIiwicmVzZXRDYXJ0Q3VzdG9tZXIiLCJDdXN0b21lckluZm8iLCJyZXNldENhcnRDdXN0b21lckFuZFVwZGF0ZUN1c3RvbWVyRXhpc3RzIiwidXBkYXRlQ3VzdG9tZXJFeGlzdHMiLCJwcml2YWN5UG9saWN5IiwiYWdyZWVzIiwiY3VzdG9tZXJFeGlzdHMiLCJkaXNwbGF5UGhvbmUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkZpbmRDdXN0b21lckJ5UGhvbmUiLCJ1cGRhdGVQaG9uZSIsImN1c3RvbWVyIiwic2VhcmNoRm9yQ3VzdG9tZXJCeVBob25lIiwic3RhdHVzIiwicmVuZGVyU3VibWl0QnV0dG9uIiwidXBkYXRlQ2FydFNoaXBUbyIsIk9yZGVyRGV0YWlscyIsInppcHBvIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJyZXN1bHRzIiwic3BsaXQiLCJyZW5kZXJDdXN0b21lckFkZHJlc3MiLCJyZW5kZXJTaGlwVG8iLCJnZXRUb3RhbCIsIkFncmVlVG9UZXJtcyIsInN1Ym1pdEFncmVlVG9UZXJtcyIsImFncmVlZFN0b3JlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImJhc2VVcmwiLCJjb3VudHJ5IiwiY29uZmlnIiwiemlwQ29kZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xDLGlCQUFhQyxNQUFNRCxXQURkO0FBRUxFLGtCQUFjRCxNQUFNQyxZQUZmO0FBR0xDLFVBQU1GLE1BQU1FLElBSFA7QUFJTEMsY0FBVUgsTUFBTUcsUUFBTixDQUFlQTtBQUpwQixHQUFQO0FBTUQsQ0FQRDs7QUFTQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQW1CLEVBQUVDLDJDQUFGLEVBQW9CQywrQkFBcEIsRUFBbkIsRUFBcURDLFFBQXJELENBQVA7QUFDRCxDQUZEOztJQUlNQyxTOzs7QUFVSix1QkFBYztBQUFBOztBQUFBOztBQUFBLFVBVWRDLGFBVmMsR0FVRSxtQkFBVztBQUN6QixZQUFLQyxRQUFM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R1kseUJBQVE1TyxlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkMsaUNBQWtCcU8sWUFBbEIsQ0FBN0MsQzs7Ozs7Ozs7Ozs7OztrQkNwRUE7QUFDYk0sV0FBUywyQkFESTtBQUViQyxXQUFTO0FBRkksQzs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQywwQkFEYTtBQUViaEosT0FBSyxhQUFTaUosT0FBVCxFQUFpQjtBQUNwQjtBQUNBLFdBQU8seUZBQW9FQSxPQUFwRSxFQUErRWxKLElBQS9FLENBQW9GO0FBQUEsYUFBT0csSUFBSWdKLElBQUosRUFBUDtBQUFBLEtBQXBGLENBQVA7QUFDQTtBQUNEO0FBTlksQyIsImZpbGUiOiIzLjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBhZGRHYXJtZW50VG9DYXJ0LCBzZXRHYXJtZW50IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgU2VsZWN0R2FybWVudCBmcm9tICcuL1NlbGVjdEdhcm1lbnQnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgU2VsZWN0QWx0ZXJhdGlvbnMgZnJvbSAnLi9TZWxlY3RBbHRlcmF0aW9ucyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vQ2hlY2tvdXQnO1xuaW1wb3J0IE9yZGVyRGV0YWlscyBmcm9tICcuL29yZGVyRGV0YWlscyc7XG5pbXBvcnQgQWdyZWVUb1Rlcm1zIGZyb20gJy4uLy4uL3Rlcm1zL0FncmVlVG9UZXJtcy5qcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIGN1cnJlbnRTdG9yZTogc3RvcmUuY3VycmVudFN0b3JlLFxuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgZ2FybWVudHM6IHN0b3JlLmdhcm1lbnRzLmdhcm1lbnRzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgYWRkR2FybWVudFRvQ2FydCwgc2V0R2FybWVudCB9LCBkaXNwYXRjaCk7XG59O1xuXG5jbGFzcyBPcmRlcnNOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjYXJ0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdhcm1lbnRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgYWRkR2FybWVudFRvQ2FydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R2FybWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhZ2U6IDEsXG4gICAgICBzZWxlY3RlZEdhcm1lbnQ6IG51bGwsXG4gICAgICBzZWxlY3RlZEFsdGVyYXRpb25zOiBbXSxcbiAgICAgIHNlbGVjdGVkR2FybWVudEluZGV4OiBudWxsLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RHYXJtZW50ID0gZ2FybWVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR2FybWVudDogZ2FybWVudCwgc3RhZ2U6IDIgfSk7XG4gIH07XG5cbiAgcmVuZGVyU3RhZ2VPbmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEdhcm1lbnQ6IG51bGwsXG4gICAgICBzZWxlY3RlZEFsdGVyYXRpb25zOiBbXSxcbiAgICAgIHN0YWdlOiAxLFxuICAgICAgc2VsZWN0ZWRHYXJtZW50SW5kZXg6IG51bGwsXG4gICAgfSk7IC8vLCBub3RlczogJyd9KTtcbiAgfTtcblxuICAvLyBnb2luZyB0byB0cnkgdG8ganVzdCBwdWxsIHVwIHRoZSBnYXJtZW50IHR5cGUgb2YgdGhlIGl0ZW0gaW5zdGFkIG9mIGluamVjdGluZyB0aGUgaXRlbSBmcm9tIHByb3BzXG5cbiAgcmVuZGVyU2VsZWN0QWx0ZXJhdGlvbnMgPSAoaW5kZXgsIGdhcm1lbnQsIGFsdGVyYXRpb25zKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRHYXJtZW50ID0gdGhpcy5wcm9wcy5nYXJtZW50cy5maWx0ZXIoXG4gICAgICBnID0+IGcuaWQgPT09IGdhcm1lbnQuaWRcbiAgICApWzBdO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEdhcm1lbnQsXG4gICAgICBzZWxlY3RlZEFsdGVyYXRpb25zOiBhbHRlcmF0aW9ucyxcbiAgICAgIHNlbGVjdGVkR2FybWVudEluZGV4OiBpbmRleCxcbiAgICAgIHN0YWdlOiAyLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlck9yZGVyRGV0YWlscyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhZ2U6IDMgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ2hlY2tvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YWdlOiA0IH0pO1xuICB9O1xuXG4gIGFsdGVyYXRpb25zSW5jbHVkZU5ld1NlbGVjdGlvbihuZXdTZWxlY3RlZEFsdGVyYXRpb25zLCBhbHRlcmF0aW9uKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdTZWxlY3RlZEFsdGVyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobmV3U2VsZWN0ZWRBbHRlcmF0aW9uc1tpXS5pZCA9PT0gYWx0ZXJhdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWRkQWx0ZXJhdGlvbiA9IGFsdGVyYXRpb24gPT4ge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkQWx0ZXJhdGlvbnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQWx0ZXJhdGlvbnM7XG4gICAgbGV0IG5ld0xpc3Q7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuYWx0ZXJhdGlvbnNJbmNsdWRlTmV3U2VsZWN0aW9uKG5ld1NlbGVjdGVkQWx0ZXJhdGlvbnMsIGFsdGVyYXRpb24pXG4gICAgKSB7XG4gICAgICAvLyBzcHJlYWQgb3BlcmF0b3IgaXMgbmVlZGVkIGhlcmUgaW4gb3JkZXIgdG8gY3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXlcbiAgICAgIC8vIHRoYXQgZG9lcyBub3QgcG9pbnQgdG8gdGhlIGFycmF5IGluIHJlZHV4LlxuICAgICAgbmV3TGlzdCA9IFsuLi5uZXdTZWxlY3RlZEFsdGVyYXRpb25zXTtcbiAgICAgIG5ld0xpc3QucHVzaChhbHRlcmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGlzdCA9IG5ld1NlbGVjdGVkQWx0ZXJhdGlvbnMuZmlsdGVyKGFsdCA9PiBhbHQuaWQgIT09IGFsdGVyYXRpb24uaWQpO1xuICAgIH1cbiAgICBjb25zdCBhbHRzID0gWy4uLm5ld0xpc3RdO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEFsdGVyYXRpb25zOiBhbHRzIH0pO1xuICB9O1xuXG4gIGFkZFRvQ2FydCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR2FybWVudCwgc2VsZWN0ZWRBbHRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBnYXJtZW50Rm9yQ2FydCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHYXJtZW50O1xuICAgIGdhcm1lbnRGb3JDYXJ0LmFsdGVyYXRpb25zID0gc2VsZWN0ZWRBbHRlcmF0aW9ucztcbiAgICB0aGlzLnByb3BzLmFkZEdhcm1lbnRUb0NhcnQoZ2FybWVudEZvckNhcnQpO1xuICAgIHRoaXMucmVuZGVyU3RhZ2VPbmUoKTtcbiAgfTtcblxuICB1cGRhdGVHYXJtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkR2FybWVudCxcbiAgICAgIHNlbGVjdGVkR2FybWVudEluZGV4LFxuICAgICAgc2VsZWN0ZWRBbHRlcmF0aW9ucyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBnYXJtZW50Rm9yQ2FydCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRHYXJtZW50O1xuICAgIGdhcm1lbnRGb3JDYXJ0LmFsdGVyYXRpb25zID0gc2VsZWN0ZWRBbHRlcmF0aW9ucztcbiAgICB0aGlzLnByb3BzLnNldEdhcm1lbnQoZ2FybWVudEZvckNhcnQsIHNlbGVjdGVkR2FybWVudEluZGV4KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YWdlOiAxLFxuICAgICAgc2VsZWN0ZWRHYXJtZW50SW5kZXg6IG51bGwsXG4gICAgICBzZWxlY3RlZEdhcm1lbnQ6IG51bGwsXG4gICAgICBzZWxlY3RlZEFsdGVyYXRpb25zOiBbXSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJTdGFnZShzdGFnZSkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdGFnZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTZWxlY3RHYXJtZW50XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Q9e3RoaXMuc2VsZWN0R2FybWVudH1cbiAgICAgICAgICAgIGdhcm1lbnRzPXt0aGlzLnByb3BzLmdhcm1lbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTZWxlY3RBbHRlcmF0aW9uc1xuICAgICAgICAgICAgYWRkVG9DYXJ0PXt0aGlzLmFkZFRvQ2FydH1cbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdD17dGhpcy5hZGRBbHRlcmF0aW9ufVxuICAgICAgICAgICAgcmVuZGVyT3JkZXJEZXRhaWxzPXt0aGlzLnJlbmRlck9yZGVyRGV0YWlsc31cbiAgICAgICAgICAgIHNlbGVjdGVkQWx0ZXJhdGlvbnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRBbHRlcmF0aW9ucy5tYXAoXG4gICAgICAgICAgICAgIGFsdCA9PiBhbHQuaWRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICByZW5kZXJTdGFnZU9uZT17dGhpcy5yZW5kZXJTdGFnZU9uZX1cbiAgICAgICAgICAgIGdhcm1lbnRJbmRleD17dGhpcy5zdGF0ZS5zZWxlY3RlZEdhcm1lbnRJbmRleH1cbiAgICAgICAgICAgIHVwZGF0ZUdhcm1lbnQ9e3RoaXMudXBkYXRlR2FybWVudH1cbiAgICAgICAgICAgIGdhcm1lbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRHYXJtZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gPE9yZGVyRGV0YWlscyByZW5kZXJTdGFnZU9uZT17dGhpcy5yZW5kZXJTdGFnZU9uZX0gLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDaGVja291dFxuICAgICAgICAgICAgcmVuZGVyU3RhZ2VPbmU9e3RoaXMucmVuZGVyU3RhZ2VPbmV9XG4gICAgICAgICAgICByZW5kZXJPcmRlckRldGFpbHM9e3RoaXMucmVuZGVyT3JkZXJEZXRhaWxzfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudFN0b3JlLmFncmVlc190b190ZXJtcykge1xuICAgICAgcmV0dXJuIDxBZ3JlZVRvVGVybXMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cblxuICAgIGxldCBoZWFkZXJUZXh0O1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdGFnZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXJUZXh0ID0gJ1NlbGVjdCBOZXcgR2FybWVudCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoZWFkZXJUZXh0ID0gYFNlbGVjdCAke3RoaXMuc3RhdGUuc2VsZWN0ZWRHYXJtZW50LnRpdGxlfSBBbHRlcmF0aW9uc2A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoZWFkZXJUZXh0ID0gJ0VudGVyIEN1c3RvbWVyIERldGFpbHMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaGVhZGVyVGV4dCA9ICdSZXZpZXcgYW5kIFN1Ym1pdCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICB0ZXh0PXtoZWFkZXJUZXh0fVxuICAgICAgICAgIHJvdGF0ZT17J3JvdGF0ZSd9XG4gICAgICAgICAgbGluaz17Jy8nfVxuICAgICAgICAgIHNob3dDYXJ0PXt0cnVlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW9yZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWdlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YWdlKHRoaXMuc3RhdGUuc3RhZ2UpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJ0XG4gICAgICAgICAgICByZW5kZXJDaGVja291dD17dGhpcy5yZW5kZXJDaGVja291dH1cbiAgICAgICAgICAgIHJlbmRlclN0YWdlT25lPXt0aGlzLnJlbmRlclN0YWdlT25lfVxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0QWx0ZXJhdGlvbnM9e3RoaXMucmVuZGVyU2VsZWN0QWx0ZXJhdGlvbnN9XG4gICAgICAgICAgICBzdGFnZT17dGhpcy5zdGF0ZS5zdGFnZX1cbiAgICAgICAgICAgIHJlbmRlck9yZGVyRGV0YWlscz17dGhpcy5yZW5kZXJPcmRlckRldGFpbHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9yZGVyc05ldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L09yZGVyc05ldy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcmVzZXRDYXJ0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcnRSaWJib24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcm90YXRlLCB1c2VyUm9sZXMsIGluY2x1ZGVMaW5rID0gdHJ1ZSB9ID0gcHJvcHM7XG4gIGxldCBsaW5rID0gcHJvcHMubGluaztcbiAgbGV0IG9uQ2xpY2s7XG5cbiAgaWYgKCFyb3RhdGUgfHwgcm90YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIGxpbmsgPSAnL29yZGVycy9uZXcnO1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnJyk7XG4gIH0gZWxzZSB7XG4gICAgb25DbGljayA9ICgpID0+IHByb3BzLnJlc2V0Q2FydCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLnVzZXJSb2xlcy5hZG1pbiB8fCBwcm9wcy51c2VyUm9sZXMucmV0YWlsZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY2FydC1yaWJib25cIiB0bz17bGlua30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BjYXJ0LXJpYmJvbi1zaWduICR7cm90YXRlfWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvbi10cmlhbmdsZVwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICA8aDI+e3Byb3BzLnRleHR9PC9oMj5cbiAgICAgIHtDYXJ0UmliYm9uKHByb3BzKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgcmVzZXRDYXJ0LFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWN0aW9uSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGb3JtRmllbGQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHZhbHVlLCBmaWVsZE5hbWUsIG9uQ2hhbmdlLCBjbGFzc05hbWUsIHR5cGUgfSA9IHByb3BzO1xuICBjb25zdCBpbnB1dFR5cGUgPSB0eXBlID8gdHlwZSA6ICd0ZXh0JztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57dGl0bGV9PC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1pbnB1dCAke2NsYXNzTmFtZX1gfVxuICAgICAgICBzaXplPVwiNTBcIlxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGZpZWxkTmFtZSwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtRmllbGQuanMiLCJleHBvcnQgY29uc3QgZ2V0U2VjdGlvbkhlYWRlclRleHQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbWF0Y2g6IHsgcGF0aCB9IH0gPSBwcm9wcztcbiAgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cycpIHtcbiAgICByZXR1cm4gJ0FpciBUYWlsb3IgLyBSZXBvcnRzJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL2FkbWluL3JlcG9ydHMvb3JkZXJzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIE9yZGVyIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvc3RvcmVzL25ldycpIHtcbiAgICByZXR1cm4gJ1N0b3JlcyAvIE5ldyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy91c2Vycy86dXNlcl9pZC9lZGl0Jykge1xuICAgIHJldHVybiAnRWRpdCBVc2VyJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL29yZGVycy9uZXcnKSB7XG4gICAgcmV0dXJuICdBZ3JlZSBUbyBUZXJtcyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zaXRlL3Rlcm1zX29mX3NlcnZpY2UnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQge2dldFNlY3Rpb25IZWFkZXJUZXh0fSBmcm9tICcuL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFdpdGhTZWN0aW9uSGVhZGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhTZWN0aW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZ2V0U2VjdGlvbkhlYWRlclRleHQodGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXt0aGlzLnN0YXRlLnRleHR9IC8+XG4gICAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hlY2tib3ggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQsIGZpZWxkTmFtZSwgdGV4dCwgbmFtZSwgbGFiZWxDbGFzcyB9ID0gcHJvcHM7XG4gIGlmICghZmllbGROYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZScgfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgaWQ9e2Ake25hbWV9LWNoZWNrYH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9e2Ake25hbWV9LWNoZWNrYH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BjaGVja2JveC1sYWJlbCAke2xhYmVsQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnIH19PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGlkPXtgJHtuYW1lfS1jaGVja2B9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZShmaWVsZE5hbWUsICFjaGVja2VkKX1cbiAgICAgIC8+XG5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtgJHtuYW1lfS1jaGVja2B9IGNsYXNzTmFtZT1cImNoZWNrYm94LWxhYmVsXCI+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvQ2hlY2tib3guanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUgPSAnc2hvcnQtYnV0dG9uJyxcbiAgICBjbGlja0FyZ3MgPSB1bmRlZmluZWQsXG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKSxcbiAgICBkaXNhYmxlZCxcbiAgICB0ZXh0LFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhjbGlja0FyZ3MpfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB2YWx1ZT17dGV4dH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFNFVF9FRElUX1NUT1JFLCBVUERBVEVfRURJVF9TVE9SRSwgZXhwcmVzc0FwaSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0Q3VycmVudFN0b3JlLFxuICBzZXRHcm93bGVyLFxuICBzZXRMb2FkZXIsXG4gIHJlbW92ZUxvYWRlcixcbiAgdmFsaWRhdGVUb2tlbixcbiAgc2V0VG9rZW5zLFxufSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2FjdGlvbnMnKTtcblxuZXhwb3J0IGNvbnN0IGdldEVkaXRTdG9yZSA9IGlkID0+IHtcbiAgY29uc3QgdXJsID0gYCR7ZXhwcmVzc0FwaX0vc3RvcmVzLyR7aWR9YDtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGVUb2tlbigpXG4gICAgICAudGhlbihzZXRUb2tlbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBBeGlvcy5nZXQodXJsKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRFZGl0U3RvcmUocmVzLmRhdGEuYm9keSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZShkYXRhKSB7XG4gIGNvbnN0IHtcbiAgICBzdG9yZSxcbiAgICBzdG9yZToge1xuICAgICAgaWQsXG4gICAgICBzdHJlZXQsXG4gICAgICB1bml0OiBzdHJlZXRfdHdvLFxuICAgICAgY2l0eSxcbiAgICAgIHN0YXRlX3Byb3ZpbmNlLFxuICAgICAgemlwX2NvZGUsXG4gICAgICBhZ3JlZXNfdG9fdGVybXMsXG4gICAgfSxcbiAgfSA9IGRhdGE7XG5cbiAgY29uc3QgdXJsID0gYCR7ZXhwcmVzc0FwaX0vc3RvcmVzLyR7aWR9YDtcbiAgY29uc3Qgc3RvcmVPYmogPSB7IC4uLmRhdGEuc3RvcmUgfTtcbiAgc3RvcmVPYmouYWRkcmVzcyA9IHsgc3RyZWV0LCBzdHJlZXRfdHdvLCBjaXR5LCBzdGF0ZV9wcm92aW5jZSwgemlwX2NvZGUgfTtcblxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVRva2VuKGRpc3BhdGNoKVxuICAgICAgLnRoZW4oc2V0VG9rZW5zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gQXhpb3MucHV0KHVybCwgeyBzdG9yZTogc3RvcmVPYmogfSlcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMuZGF0YS5ib2R5LmVycm9ycykge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRFZGl0U3RvcmUoc3RvcmVPYmopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xufVxuXG5jb25zdCBzZXRFZGl0U3RvcmUgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0VESVRfU1RPUkUsXG4gICAgc3RvcmUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRWRpdFN0b3JlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICBpZiAoZmllbGQgPT09ICdwcm92aWRlcl9pZCcpIHtcbiAgICBmaWVsZCA9ICdkZWZhdWx0X3RhaWxvcl9pZCc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9FRElUX1NUT1JFLFxuICAgIHN0b3JlOiB7IFtmaWVsZF06IHZhbHVlIH0sXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL2VkaXQvZHVja3MvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3kgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSBhdCBBaXIgVGFpbG9yICjigJx3ZSzigJ0g4oCcdXPigJ0gb3Ig4oCcb3Vy4oCdKSBrbm93IHRoYXQgb3VyIGN1c3RvbWVycyAo4oCceW914oCdIG9yXG4gICAgICAgIOKAnHlvdXLigJ0pIGNhcmUgYWJvdXQgaG93IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgdXNlZCBhbmQgc2hhcmVkLCBhbmRcbiAgICAgICAgd2UgdGFrZSB5b3VyIHByaXZhY3kgc2VyaW91c2x5LiBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBob3cgd2VcbiAgICAgICAgY29sbGVjdCwgdXNlLCBhbmQgZGlzY2xvc3VyZSBpbmZvcm1hdGlvbiwgYW5kIHlvdXIgcmlnaHRzIGluIHJlbGF0aW9uIHRvXG4gICAgICAgIHRoYXQgaW5mb3JtYXRpb24uIFBsZWFzZSByZWFkIHRoZSBmb2xsb3dpbmcgdG8gbGVhcm4gbW9yZSBhYm91dCBvdXJcbiAgICAgICAgUHJpdmFjeSBQb2xpY3kuIEJ5IHVzaW5nIHRoZSBBaXIgVGFpbG9yIHRleHQgb3Igd2ViLWJhc2VkIHNlcnZpY2UsIHlvdVxuICAgICAgICBhY2tub3dsZWRnZSB0aGF0IHlvdSBhY2NlcHQgdGhlIHByYWN0aWNlcyBhbmQgcG9saWNpZXMgb3V0bGluZWQgaW4gdGhpc1xuICAgICAgICBQcml2YWN5IFBvbGljeSwgYW5kIHlvdSBoZXJlYnkgY29uc2VudCB0aGF0IHdlIHdpbGwgY29sbGVjdCwgdXNlLCBhbmRcbiAgICAgICAgc2hhcmUgeW91ciBpbmZvcm1hdGlvbiBpbiB0aGUgZm9sbG93aW5nIHdheXMuIFlvdSBhbHNvIGFja25vd2xlZGdlIGFuZFxuICAgICAgICBhZ3JlZSB0aGF0IHlvdXIgdXNlIG9mIGFueSBhbmQgYWxsIHNlcnZpY2VzLCBwcm9kdWN0cywgZmVhdHVyZXMsIGNvbnRlbnRcbiAgICAgICAgb3IgYXBwbGljYXRpb25zIG90aGVyIHRoYW4gKG9yIGFkZGl0aW9uYWwgdG8pIHRoZSBTZXJ2aWNlcyBvZmZlcmVkIGJ5IG9yXG4gICAgICAgIGZvciBBaXIgVGFpbG9yIG1heSBiZSBnb3Zlcm5lZCBieSBzZXBhcmF0ZSB0ZXJtcyBvZiBzZXJ2aWNlLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgSS4gV0hBVCBET0VTIFRISVMgUFJJVkFDWSBQT0xJQ1kgQ09WRVI/XG4gICAgICAgIDxiciAvPlxuICAgICAgICBUaGlzIFByaXZhY3kgUG9saWN5IGNvdmVycyBvdXIgdHJlYXRtZW50IG9mIFBlcnNvbmFsIEluZm9ybWF0aW9uIGFuZFxuICAgICAgICBPdGhlciBJbmZvcm1hdGlvbiB3ZSBnYXRoZXIgZnJvbSB5b3Ugd2hlbiB5b3UgYXJlIGFjY2Vzc2luZyBvciB1c2luZyBvdXJcbiAgICAgICAgU2VydmljZXMuIFBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uICjigJxQZXJzb25hbCBJbmZvcm1hdGlvbuKAnSlcbiAgICAgICAgbWF5IGluY2x1ZGUsIGJ1dCBpcyBub3QgbGltaXRlZCB0bywgeW91ciBuYW1lLCB1c2VybmFtZSwgaG9tZSBhbmQvb3JcbiAgICAgICAgd29yayBhZGRyZXNzLCB0ZWxlcGhvbmUgbnVtYmVyLCBlLW1haWwgYWRkcmVzcywgY29tcGFueSBhZmZpbGlhdGlvbiBhbmRcbiAgICAgICAgYXNzb2NpYXRlZCBpbnRlcmVzdHMuIFdlIGNvbGxlY3Qgc29tZSBvZiB0aGlzIFBlcnNvbmFsIEluZm9ybWF0aW9uIGJ5XG4gICAgICAgIHJlcXVlc3RpbmcgaXQgZGlyZWN0bHkgZnJvbSB5b3UsIGFuZCB3ZSBtYXkgYWxzbyBvYnRhaW4gaW5mb3JtYXRpb25cbiAgICAgICAgYWJvdXQgeW91IGZyb20gdGhpcmQtcGFydHkgc291cmNlcywgYXMgZGVzY3JpYmVkIGJlbG93LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgQWlyIFRhaWxvciBhbHNvIG9ic2VydmVzLCBkZXJpdmVzLCBjb2xsZWN0cyBhbmQgaW5mZXJzIG90aGVyIGluZm9ybWF0aW9uXG4gICAgICAgICjigJxPdGhlciBJbmZvcm1hdGlvbuKAnSkgdGhyb3VnaCB5b3VyIGludGVyYWN0aW9uIHdpdGggYW5kIHVzZSBvZiB0aGVcbiAgICAgICAgU2VydmljZXMsIHdoaWNoIGRvZXMgbm90IHJldmVhbCB5b3VyIHNwZWNpZmljIGlkZW50aXR5IG9yIGRvZXMgbm90XG4gICAgICAgIGRpcmVjdGx5IHJlbGF0ZSB0byBhbiBpbmRpdmlkdWFsLiBPdGhlciBJbmZvcm1hdGlvbiBtYXkgaW5jbHVkZSwgYnV0IGlzXG4gICAgICAgIG5vdCBsaW1pdGVkIHRvLCBicm93c2VyIGFuZCBkZXZpY2UgaW5mb3JtYXRpb24gKHN1Y2ggYXMgYnJvd3NlciB0eXBlIGFuZFxuICAgICAgICB2ZXJzaW9uLCBvcGVyYXRpbmcgc3lzdGVtIGFuZCB2ZXJzaW9uLCBkZXZpY2UgSUQgYW5kIGxhbmd1YWdlLCBhbmRcbiAgICAgICAgSW50ZXJuZXQgY29ubmVjdGlvbiksIGRhdGEgY29sbGVjdGVkIHRocm91Z2ggYXV0b21hdGVkIGVsZWN0cm9uaWNcbiAgICAgICAgaW50ZXJhY3Rpb25zLCBhcHBsaWNhdGlvbiB1c2FnZSBkYXRhLCBkZW1vZ3JhcGhpYyBpbmZvcm1hdGlvbixcbiAgICAgICAgZ2VvZ3JhcGhpYyBvciBnZW8tbG9jYXRpb24gaW5mb3JtYXRpb24gKGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sXG4gICAgICAgIHByZWNpc2UgZ2VvLWxvY2F0aW9uKSwgSVAgYWRkcmVzcywgYW5kIHN0YXRpc3RpY2FsIGFuZCBhZ2dyZWdhdGVkXG4gICAgICAgIGluZm9ybWF0aW9uLiBPdGhlciBJbmZvcm1hdGlvbiBtYXkgY29uc3RpdHV0ZSBQZXJzb25hbCBJbmZvcm1hdGlvbiB3aGVuXG4gICAgICAgIGNvdXBsZWQgd2l0aCBQZXJzb25hbCBJbmZvcm1hdGlvbiB0aGF0IHdlIGhvbGQgYW5kIHByb2Nlc3MgYWJvdXQgeW91LiBJblxuICAgICAgICBzdWNoIGNpcmN1bXN0YW5jZXMgc3VjaCBPdGhlciBJbmZvcm1hdGlvbiBzaGFsbCBiZSB0cmVhdGVkIGFzIFBlcnNvbmFsXG4gICAgICAgIEluZm9ybWF0aW9uLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBQcml2YWN5IFBvbGljeSBkb2VzIG5vdCBhcHBseSB0byB0aGUgcHJhY3RpY2VzIG9mIGNvbXBhbmllcyB0aGF0IHdlXG4gICAgICAgIGRvIG5vdCBvd24gb3IgY29udHJvbCwgb3IgdG8gaW5kaXZpZHVhbHMgdGhhdCB3ZSBkbyBub3QgZW1wbG95IG9yXG4gICAgICAgIG1hbmFnZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIE91ciBTZXJ2aWNlcyBhcmUgbm90IGludGVuZGVkIGZvciB1c2VycyB1bmRlciAxMyB5ZWFycyBvZiBhZ2UuIFdlIGRvIG5vdFxuICAgICAgICBrbm93aW5nbHkgY29sbGVjdCBvciBzb2xpY2l0IFBlcnNvbmFsIEluZm9ybWF0aW9uIGZyb20gYW55b25lIHVuZGVyIHRoZVxuICAgICAgICBhZ2Ugb2YgMTMuIElmIHlvdSBhcmUgdW5kZXIgMTMsIHBsZWFzZSBkbyBub3QgYXR0ZW1wdCB0byBhY2Nlc3Mgb3IgdXNlXG4gICAgICAgIHRoZSBTZXJ2aWNlcyBvciBzZW5kIGFueSBpbmZvcm1hdGlvbiBhYm91dCB5b3Vyc2VsZiB0byB1cywgaW5jbHVkaW5nXG4gICAgICAgIHlvdXIgbmFtZSwgYWRkcmVzcywgdGVsZXBob25lIG51bWJlciwgb3IgZW1haWwgYWRkcmVzcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFdlIGdhdGhlciB2YXJpb3VzIHR5cGVzIG9mIFBlcnNvbmFsIEluZm9ybWF0aW9uIGFuZCBPdGhlciBJbmZvcm1hdGlvblxuICAgICAgICBmcm9tIG91ciB1c2VycywgYXMgZXhwbGFpbmVkIG1vcmUgZnVsbHkgYmVsb3cuIFdlIG1heSB1c2UgdGhpcyBQZXJzb25hbFxuICAgICAgICBJbmZvcm1hdGlvbiBhbmQgT3RoZXIgSW5mb3JtYXRpb24gdG8gcGVyc29uYWxpemUgYW5kIGltcHJvdmUgb3VyXG4gICAgICAgIHNlcnZpY2VzLCB0byBhbGxvdyBvdXIgdXNlcnMgdG8gc2V0IHVwIGEgdXNlciBhY2NvdW50IGFuZCBwcm9maWxlLCB0b1xuICAgICAgICBjb250YWN0IHVzZXJzLCB0byBmdWxmaWxsIHlvdXIgcmVxdWVzdHMgZm9yIGNlcnRhaW4gcHJvZHVjdHMgYW5kXG4gICAgICAgIHNlcnZpY2VzLCB0byBhbmFseXplIGhvdyB1c2VycyB1dGlsaXplIHRoZSBTZXJ2aWNlcywgYW5kIGFzIG90aGVyd2lzZVxuICAgICAgICBzZXQgZm9ydGggaW4gdGhpcyBQcml2YWN5IFBvbGljeS4gV2UgbWF5IHNoYXJlIGNlcnRhaW4gdHlwZXMgb2YgUGVyc29uYWxcbiAgICAgICAgSW5mb3JtYXRpb24gd2l0aCB0aGlyZCBwYXJ0aWVzLCBhcyBkZXNjcmliZWQgYmVsb3cuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBJSS4gV0hBVCBJTkZPUk1BVElPTiBET0VTIEFJUiBUQUlMT1IgQ09MTEVDVD9cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDEuIEluZm9ybWF0aW9uIFlvdSBQcm92aWRlIHRvIFVzXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXZSBjb2xsZWN0IGluZm9ybWF0aW9uIHlvdSBwcm92aWRlIGRpcmVjdGx5IHRvIHVzLCBzdWNoIGFzIHdoZW4geW91XG4gICAgICAgIGNyZWF0ZSBvciBtb2RpZnkgeW91ciBhY2NvdW50IGFuZCBwcm9maWxlLCByZXF1ZXN0IG9yIHByb3ZpZGUgc2VydmljZXMsXG4gICAgICAgIGNvbnRhY3QgY3VzdG9tZXIgc3VwcG9ydCwgb3Igb3RoZXJ3aXNlIGNvbW11bmljYXRlIHdpdGggdXMuIFRoaXNcbiAgICAgICAgaW5mb3JtYXRpb24gbWF5IGluY2x1ZGU6IG5hbWUsIGVtYWlsLCBwaG9uZSBudW1iZXIsIHBvc3RhbCBhZGRyZXNzLFxuICAgICAgICBwcm9maWxlIHBpY3R1cmUsIHBheW1lbnQgbWV0aG9kLCBpdGVtcyBhbmQgc2VydmljZXMgcmVxdWVzdGVkLCBkZWxpdmVyeVxuICAgICAgICBhbmQgc2VydmljZSBub3RlcywgYW5kIG90aGVyIGluZm9ybWF0aW9uIHlvdSBjaG9vc2UgdG8gcHJvdmlkZS4gWW91IGNhblxuICAgICAgICBjaG9vc2Ugbm90IHRvIHByb3ZpZGUgdXMgd2l0aCBjZXJ0YWluIFBlcnNvbmFsIEluZm9ybWF0aW9uLCBidXQgdGhlbiB5b3VcbiAgICAgICAgbWF5IG5vdCBiZSBhYmxlIHRvIHJlZ2lzdGVyIHdpdGggdXMgb3IgdG8gdGFrZSBmdWxsIGFkdmFudGFnZSBvZiBvdXJcbiAgICAgICAgU2VydmljZXMuIFdlIG1heSBhbHNvIGFzayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBpdGVtcyBhbmRcbiAgICAgICAgc2VydmljZXMgcmVxdWVzdGVkIGFuZCBkZWxpdmVyeSBhbmQgc2VydmljZSBub3RlcywgYW5kIG90aGVyIGluZm9ybWF0aW9uXG4gICAgICAgIHlvdSBtYXkgY2hvb3NlIHRvIHByb3ZpZGUuIFdlIG1heSBhZ2dyZWdhdGUgYW5kL29yIGFub255bWl6ZSB5b3VyXG4gICAgICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uIHNvIHRoYXQgeW91IGNhbm5vdCBiZSBpbmRpdmlkdWFsbHkgaWRlbnRpZmllZCwgYW5kXG4gICAgICAgIHByb3ZpZGUgdGhhdCBpbmZvcm1hdGlvbiB0byBvdXIgb3RoZXIgY3VzdG9tZXJzLCBzZXJ2aWNlIHByb3ZpZGVycyxcbiAgICAgICAgcGFydG5lcnMgb3Igb3RoZXIgdGhpcmQgcGFydGllcywgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIHRvXG4gICAgICAgIHByb3ZpZGUgYmVuY2htYXJraW5nIGRhdGEuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICAyLiBJbmZvcm1hdGlvbiBXZSBDb2xsZWN0IFRocm91Z2ggWW91ciBVc2Ugb2YgT3VyIFNlcnZpY2VzXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXaGVuIHlvdSB1c2Ugb3VyIFNlcnZpY2VzLCB3ZSBtYXkgY29sbGVjdCB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uXG4gICAgICAgIGFib3V0IHlvdTpcbiAgICAgIDwvcD5cbiAgICAgIDxvbCB0eXBlPVwiYVwiPlxuICAgICAgICA8bGlcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgVHJhbnNhY3Rpb24gSW5mb3JtYXRpb246IFdlIGNvbGxlY3QgdHJhbnNhY3Rpb24gZGV0YWlscyByZWxhdGVkIHRvXG4gICAgICAgICAgeW91ciB1c2Ugb2Ygb3VyIFNlcnZpY2VzLiBUaGlzIGluY2x1ZGVzIHRoZSB0eXBlIG9mIFNlcnZpY2UgcmVxdWVzdGVkLFxuICAgICAgICAgIGZlZXMsIHRoZSBkYXRlIGFuZCB0aW1lIHRoZSBzZXJ2aWNlIHdhcyBwcm92aWRlZCwgYW5kIHJhdGluZ3NcbiAgICAgICAgICBmZWVkYmFjay5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdhcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEZpbmFuY2lhbCBJbmZvcm1hdGlvbjogV2UgZG8gbm90IGN1cnJlbnRseSBjb2xsZWN0IGZpbmFuY2lhbFxuICAgICAgICAgIGluZm9ybWF0aW9uLCBzdWNoIGFzIHlvdXIgcGF5bWVudCBtZXRob2QgKHZhbGlkIGNyZWRpdCBjYXJkIG51bWJlcixcbiAgICAgICAgICB0eXBlLCBleHBpcmF0aW9uIGRhdGUgb3Igb3RoZXIgZmluYW5jaWFsIGluZm9ybWF0aW9uKTsgdGhhdFxuICAgICAgICAgIGluZm9ybWF0aW9uIGlzIGNvbGxlY3RlZCBhbmQgc3RvcmVkIGJ5IG91ciB0aGlyZCBwYXJ0eSBwYXltZW50XG4gICAgICAgICAgcHJvY2Vzc2luZyBjb21wYW55ICh0aGUg4oCcUGF5bWVudCBQcm9jZXNzb3LigJ0pLCBhbmQgdXNlIGFuZCBzdG9yYWdlIG9mXG4gICAgICAgICAgdGhhdCBpbmZvcm1hdGlvbiBpcyBnb3Zlcm5lZCBieSB0aGUgUGF5bWVudCBQcm9jZXNzb3LigJlzIGFwcGxpY2FibGVcbiAgICAgICAgICB0ZXJtcyBvZiBzZXJ2aWNlIGFuZCBwcml2YWN5IHBvbGljeS4gUHJlc2VudGx5LCB3ZSB1c2UgU3RyaXBlIGFzIG91clxuICAgICAgICAgIFBheW1lbnQgUHJvY2Vzc29yLCBhbmQgdGhlaXIgcHJpdmFjeSBwb2xpY3kgaXMgZm91bmRcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9XCJodHRwOi8vc3RyaXBlLmNvbS91cy9wcml2YWN5L1wiPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIGhlcmVcbiAgICAgICAgICA8L2E+LlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTG9jYXRpb24gSW5mb3JtYXRpb246IFdoZXJlIHlvdSBjb25zZW50IHRvIHN1Y2ggdXNlIHRocm91Z2ggdGhlXG4gICAgICAgICAgcGVybWlzc2lvbiBzeXN0ZW0gb24geW91ciBtb2JpbGUgb3BlcmF0aW5nIHN5c3RlbSwgd2UgbWF5IGNvbGxlY3RcbiAgICAgICAgICBwcmVjaXNlIGxvY2F0aW9uIGRhdGEgYWJvdXQgeW91ciBsb2NhdGlvbi4gV2UgdXNlIHRoaXMgbG9jYXRpb25cbiAgICAgICAgICBpbmZvcm1hdGlvbiwgZm9yIGV4YW1wbGUsIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBpcyBvbiBzaXRlIGluIGFcbiAgICAgICAgICBjdXN0b21lciBsb2NhdGlvbi4gV2UgbWF5IGFsc28gYXBwcm94aW1hdGUgeW91ciBjdXJyZW50IGxvY2F0aW9uIHVzaW5nXG4gICAgICAgICAgeW91ciBJUCBhZGRyZXNzLiBXaGVyZSB5b3UgaGF2ZSBhbGxvd2VkIHRoZSBBcHAgdG8gYWNjZXNzIGxvY2F0aW9uXG4gICAgICAgICAgc2VydmljZXMgdGhyb3VnaCB5b3VyIG1vYmlsZSBvcGVyYXRpbmcgc3lzdGVt4oCZcyBwZXJtaXNzaW9uIHN5c3RlbSwgd2VcbiAgICAgICAgICBtYXkgYWxzbyBjb2xsZWN0IHRoZSBsb2NhdGlvbiBvZiB5b3VyIGRldmljZSB3aGVuIHRoZSBBcHAgaXMgcnVubmluZ1xuICAgICAgICAgIGluIHRoZSBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmQuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnYXJpYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDb29raWVzIGFuZCBTaW1pbGFyIFRlY2hub2xvZ2llczogV2UgYW5kIG91ciBzZXJ2aWNlIHByb3ZpZGVycyBtYXkgdXNlXG4gICAgICAgICAgdGVjaG5vbG9naWVzIGxpa2Ug4oCcY29va2llcyzigJ0gcGl4ZWxzLCBhbmQgbG9jYWwgc3RvcmFnZSAobGlrZSBvbiB5b3VyXG4gICAgICAgICAgYnJvd3NlciBvciBkZXZpY2UsIHdoaWNoIGlzIHNpbWlsYXIgdG8gYSBjb29raWUgYnV0IGhvbGRzIG1vcmVcbiAgICAgICAgICBpbmZvcm1hdGlvbikgYW5kIGlkZW50aWZpZXJzIChpbmNsdWRpbmcgaWRlbnRpZmllcnMgc3VwcGxpZWQgYnkgeW91clxuICAgICAgICAgIGJyb3dzZXIgb3IgZGV2aWNlIG9yIGJ5IGFwcCBwbGF0Zm9ybSBjb21wYW5pZXMpIG9uIG91ciB3ZWJzaXRlLCBpbiBvdXJcbiAgICAgICAgICBlbWFpbHMsIGFuZCB3aXRoaW4gb3VyIGFwcHMgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhIHJhbmdlIG9mIHByb2R1Y3RzXG4gICAgICAgICAgYW5kIHNlcnZpY2VzLiBZb3UgY2FuIGNvbnRyb2wgY29va2llcyB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5nc1xuICAgICAgICAgIGFuZCBvdGhlciB0b29scy4gUGxlYXNlIGJlIGF3YXJlIHRoYXQgbGltaXRpbmcgdGhlIGFiaWxpdHkgb2Ygd2Vic2l0ZXNcbiAgICAgICAgICB0byBzZXQgY29va2llcywgaG93ZXZlciwgbWF5IHdvcnNlbiB5b3VyIG92ZXJhbGwgdXNlciBleHBlcmllbmNlLCBhbmRcbiAgICAgICAgICBpbiBzb21lIGNhc2VzIHRoZSBTZXJ2aWNlcyB3aWxsIG5vdCB3b3JrIHByb3Blcmx5IHdpdGhvdXQgdGhlIHVzZSBvZlxuICAgICAgICAgIGNvb2tpZXMsIGxvY2FsIHN0b3JhZ2UgYW5kIHNpbWlsYXIgdGVjaG5vbG9naWVzLlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cblxuICAgICAgPHA+XG4gICAgICAgIDMuIEluZm9ybWF0aW9uIFdlIFJlY2VpdmUgZnJvbSBUaGlyZCBQYXJ0aWVzXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXZSByZWNlaXZlIGFuZCBzdG9yZSBpbmZvcm1hdGlvbiBmcm9tIHRoaXJkIHBhcnRpZXMgdGhhdCBpbnRlcmFjdCBpblxuICAgICAgICBzb21lIHdheSB3aXRoIHRoZSBTZXJ2aWNlcyBvciB0aGF0IHByb3ZpZGUgc2VydmljZXMgdG8gdXMgaW4gY29ubmVjdGlvblxuICAgICAgICB3aXRoIHRoZSBTZXJ2aWNlcy4gSW4gYWRkaXRpb24sIHlvdSBtYXkgY2hvb3NlIHRvIHVzZSB0aGlyZCBwYXJ0eVxuICAgICAgICBzZXJ2aWNlcywgd2Vic2l0ZXMgb3IgYXBwcyB0aGF0IHNoYXJlIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24sXG4gICAgICAgIGFjdGl2aXRpZXMgYW5kL29yIGNvbnRlbnQgd2l0aCBBaXIgVGFpbG9yLiBQbGVhc2UgcmVhZCB0aGUgcHJpdmFjeVxuICAgICAgICBwb2xpY3kgb2YgYW55IHN1Y2ggc2VydmljZSBzbyB0aGF0IHlvdSB1bmRlcnN0YW5kIGl0cyBzaGFyaW5nIHByYWN0aWNlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIElJSS4gVVNFIEFORCBTSEFSSU5HIE9GIElORk9STUFUSU9OXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXZSBuZWl0aGVyIHJlbnQgbm9yIHNlbGwgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiBpbiBwZXJzb25hbGx5XG4gICAgICAgIGlkZW50aWZpYWJsZSBmb3JtIHRvIGFueW9uZS4gSG93ZXZlciwgd2UgZG8gdXNlIGFuZCBzaGFyZSB3aXRoIHRoaXJkXG4gICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiBhbmQgT3RoZXIgSW5mb3JtYXRpb24gYXMgZGVzY3JpYmVkIGluXG4gICAgICAgIFNlY3Rpb24gSUkgYW5kIGluIHRoaXMgU2VjdGlvbjpcbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5TZXJ2aWNlIFByb3ZpZGVycy48L3NwYW4+IFdlIGVtcGxveVxuICAgICAgICBvdGhlciBjb21wYW5pZXMgYW5kIHBlb3BsZSB0byBwZXJmb3JtIHRhc2tzIG9uIG91ciBiZWhhbGYgYW5kIG5lZWQgdG9cbiAgICAgICAgc2hhcmUgeW91ciBpbmZvcm1hdGlvbiB3aXRoIHRoZW0gdG8gcHJvdmlkZSBwcm9kdWN0cyBvciBzZXJ2aWNlcyB0byB5b3UsXG4gICAgICAgIHN1Y2ggYXMgeW91ciBwcm9maWxlIGluZm9ybWF0aW9uIChpbmNsdWRpbmcgeW91ciBhZGRyZXNzKSwgdGhlIGxvY2F0aW9uXG4gICAgICAgIG9mIHlvdXIgZGV2aWNlIGFuZCBvdGhlciBpbmZvcm1hdGlvbi4gVW5sZXNzIHdlIHRlbGwgeW91IGRpZmZlcmVudGx5LFxuICAgICAgICBvdXIgc2VydmljZSBwcm92aWRlcnMgZG8gbm90IGhhdmUgYW55IHJpZ2h0IHRvIHVzZSB0aGUgUGVyc29uYWxcbiAgICAgICAgSW5mb3JtYXRpb24gd2Ugc2hhcmUgd2l0aCB0aGVtIGJleW9uZCB3aGF0IGlzIG5lY2Vzc2FyeSB0byBhc3Npc3QgdXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UGF5bWVudCBQcm9jZXNzb3JzLjwvc3Bhbj4gQXMgbm90ZWRcbiAgICAgICAgYWJvdmUsIHdlIHVzZSBhIHRoaXJkIHBhcnR5IFBheW1lbnQgUHJvY2Vzc29yLCB3aXRoIHdoaWNoIHdlIHNoYXJlXG4gICAgICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRyYW5zYWN0aW9ucyBvbiB0aGUgU2VydmljZXMuXG4gICAgICAgIEFzIG5vdGVkIGFib3ZlLCB3ZSBjdXJyZW50bHkgdXNlIFN0cmlwZSBhcyBvdXIgUGF5bWVudCBQcm9jZXNzb3IsIGFuZFxuICAgICAgICB0aGVpciBwcml2YWN5IHBvbGljeSBpcyBmb3VuZCBoZXJlLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgIEZhY2lsaXRhdGUgQ29tbXVuaWNhdGlvbnMgQmV0d2VlbiBBaXIgVGFpbG9yIGFuZCB5b3UuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgV2UgbWF5IHVzZSB5b3VyIGluZm9ybWF0aW9uIHRvIHNlbmQgeW91IGNvbW11bmljYXRpb25zIHdlIHRoaW5rIHdpbGwgYmVcbiAgICAgICAgb2YgaW50ZXJlc3QgdG8geW91LCBpbmNsdWRpbmcgaW5mb3JtYXRpb24gYWJvdXQgcHJvZHVjdHMsIHNlcnZpY2VzLFxuICAgICAgICBwcm9tb3Rpb25zLCBuZXdzLCBhbmQgZXZlbnRzIG9mIEFpciBUYWlsb3IgYW5kIG90aGVyIGNvbXBhbmllcywgd2hlcmVcbiAgICAgICAgcGVybWlzc2libGUgYW5kIGFjY29yZGluZyB0byBsb2NhbCBhcHBsaWNhYmxlIGxhd3MuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgU2VydmljZXMgUHJvdmlzaW9uLCBNYWludGVuYW5jZSBhbmQgVXBncmFkZXMuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgV2UgdXNlIHlvdXIgaW5mb3JtYXRpb24gdG8gcHJvdmlkZSwgbWFpbnRhaW4sIGltcHJvdmUgYW5kIHBlcnNvbmFsaXplXG4gICAgICAgIG91ciBTZXJ2aWNlcywgaW5jbHVkaW5nLCB0byBzZW5kIHJlY2VpcHRzLCBwcm92aWRlIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1xuICAgICAgICB5b3UgcmVxdWVzdCAoYW5kIHNlbmQgcmVsYXRlZCBpbmZvcm1hdGlvbiksIGRldmVsb3AgbmV3IGZlYXR1cmVzLFxuICAgICAgICBwcm92aWRlIGN1c3RvbWVyIHN1cHBvcnQgdG8geW91LCBkZXZlbG9wIHNhZmV0eSBmZWF0dXJlcywgYXV0aGVudGljYXRlXG4gICAgICAgIHVzZXJzLCBzZW5kIHByb2R1Y3QgdXBkYXRlcyBhbmQgYWRtaW5pc3RyYXRpdmUgbWVzc2FnZXMsIHRvIHBlcmZvcm1cbiAgICAgICAgaW50ZXJuYWwgb3BlcmF0aW9ucywgaW5jbHVkaW5nLCBmb3IgZXhhbXBsZSwgdG8gcHJldmVudCBmcmF1ZCBhbmQgYWJ1c2VcbiAgICAgICAgb2Ygb3VyIFNlcnZpY2VzOyB0byB0cm91Ymxlc2hvb3Qgc29mdHdhcmUgYnVncyBhbmQgb3BlcmF0aW9uYWwgcHJvYmxlbXM7XG4gICAgICAgIHRvIGNvbmR1Y3QgZGF0YSBhbmFseXNpcywgdGVzdGluZywgYW5kIHJlc2VhcmNoOyBhbmQgdG8gbW9uaXRvciBhbmRcbiAgICAgICAgYW5hbHl6ZSB1c2FnZSBhbmQgYWN0aXZpdHkgdHJlbmRzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJ1c2luZXNzIFRyYW5zZmVycy48L3NwYW4+IFdlIG1heVxuICAgICAgICBjaG9vc2UgdG8gYnV5IG9yIHNlbGwgYXNzZXRzLiBJbiB0aGVzZSB0eXBlcyBvZiB0cmFuc2FjdGlvbnMsIGN1c3RvbWVyXG4gICAgICAgIGluZm9ybWF0aW9uIGlzIHR5cGljYWxseSBvbmUgb2YgdGhlIGJ1c2luZXNzIGFzc2V0cyB0aGF0IHdvdWxkIGJlXG4gICAgICAgIHRyYW5zZmVycmVkLiBBbHNvLCBpZiB3ZSAob3Igb3VyIGFzc2V0cykgYXJlIGFjcXVpcmVkLCBvciBpZiB3ZSBnbyBvdXRcbiAgICAgICAgb2YgYnVzaW5lc3MsIGVudGVyIGJhbmtydXB0Y3ksIG9yIGdvIHRocm91Z2ggc29tZSBvdGhlciBjaGFuZ2Ugb2ZcbiAgICAgICAgY29udHJvbCwgUGVyc29uYWwgSW5mb3JtYXRpb24gd291bGQgYmUgb25lIG9mIHRoZSBhc3NldHMgdHJhbnNmZXJyZWQgdG9cbiAgICAgICAgb3IgYWNxdWlyZWQgYnkgdGhpcmQgcGFydGllcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICBQcm90ZWN0aW9uIG9mIEFpciBUYWlsb3IgYW5kIE90aGVycy5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICBXZSByZXNlcnZlIHRoZSByaWdodCB0byBhY2Nlc3MsIHJlYWQsIHByZXNlcnZlLCBhbmQgZGlzY2xvc2UgYW55XG4gICAgICAgIGluZm9ybWF0aW9uIHRoYXQgd2UgcmVhc29uYWJseSBiZWxpZXZlIGlzIG5lY2Vzc2FyeSB0byBjb21wbHkgd2l0aCBsYXdcbiAgICAgICAgb3IgYSBjb3VydCBvcmRlcjsgZW5mb3JjZSBvciBhcHBseSBvdXIgY29uZGl0aW9ucyBvZiB1c2UgYW5kIG90aGVyXG4gICAgICAgIGFncmVlbWVudHM7IG9yIHByb3RlY3QgdGhlIHJpZ2h0cywgcHJvcGVydHksIG9yIHRoZSBzYWZldHkgb2YgQWlyXG4gICAgICAgIFRhaWxvciwgb3VyIGVtcGxveWVlcywgb3VyIHVzZXJzLCBvciBvdGhlcnMuIFRoaXMgaW5jbHVkZXMgZXhjaGFuZ2luZ1xuICAgICAgICBpbmZvcm1hdGlvbiB3aXRoIG90aGVyIGNvbXBhbmllcyBhbmQgb3JnYW5pemF0aW9ucyBmb3IgZnJhdWQgcHJvdGVjdGlvblxuICAgICAgICBhbmQgY3JlZGl0IHJpc2sgcmVkdWN0aW9uLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PldpdGggWW91ciBDb25zZW50Ljwvc3Bhbj4gRXhjZXB0IGFzXG4gICAgICAgIHNldCBmb3J0aCBhYm92ZSwgeW91IHdpbGwgYmUgbm90aWZpZWQgd2hlbiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIG1heVxuICAgICAgICBiZSBzaGFyZWQgd2l0aCB0aGlyZCBwYXJ0aWVzIGluIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGZvcm0sIGFuZCB3aWxsXG4gICAgICAgIGJlIG9mZmVyZWQgYW4gb3Bwb3J0dW5pdHkgdG8gcHJldmVudCB0aGUgc2hhcmluZyBvZiB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgIEludGVybmFsIE9wZXJhdGlvbnMsIEFuYWx5dGljcyBhbmQgVGVzdGluZy5cbiAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgIFdlIHVzZSBib3RoIFBlcnNvbmFsIEluZm9ybWF0aW9uIGFuZCBPdGhlciBJbmZvcm1hdGlvbiB0byBwZXJmb3JtXG4gICAgICAgIGludGVybmFsIG9wZXJhdGlvbnMsIGluY2x1ZGluZywgZm9yIGV4YW1wbGUsIHRvIHByZXZlbnQgZnJhdWQgYW5kIGFidXNlXG4gICAgICAgIG9mIG91ciBTZXJ2aWNlczsgdG8gdHJvdWJsZXNob290IHNvZnR3YXJlIGJ1Z3MgYW5kIG9wZXJhdGlvbmFsIHByb2JsZW1zO1xuICAgICAgICB0byBjb25kdWN0IGFuYWx5c2lzLCB0ZXN0aW5nLCBhbmQgcmVzZWFyY2g7IGFuZCBmb3IgbW9uaXRvcmluZyBhbmRcbiAgICAgICAgYW5hbHl6aW5nIHVzYWdlIHJhdGVzLiBJbiBwYXJ0aWN1bGFyLCB3ZSB1c2UgR29vZ2xlIEFuYWx5dGljcyB0byBoZWxwIHVzXG4gICAgICAgIHRvIGNvbGxlY3QgYW5kIGFuYWx5emUgY2VydGFpbiBpbmZvcm1hdGlvbiBmb3IgdGhlIHB1cnBvc2VzIGRpc2N1c3NlZFxuICAgICAgICBhYm92ZS4gVG8gb3B0LW91dCBvZiBHb29nbGUgQW5hbHl0aWNzLCBjbGlja3snICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Rvb2xzLmdvb2dsZS5jb20vZGxwYWdlL2dhb3B0b3V0XCI+aGVyZTwvYT4uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgQWdncmVnYXRlZCBhbmQvb3IgQW5vbnltaXplZCBEYXRhLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIFdlIG1heSB1c2UgYW55IGFnZ3JlZ2F0ZWQgYW5kL29yIGFub255bWl6ZWQgZGF0YSBkZXJpdmVkIGZyb20gb3JcbiAgICAgICAgaW5jb3Jwb3JhdGluZyB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIGFmdGVyIHlvdSB1cGRhdGUgb3IgZGVsZXRlIGl0XG4gICAgICAgIGZvciBhbnkgcHVycG9zZSwgYnV0IG5vdCBpbiBhIG1hbm5lciB0aGF0IHdvdWxkIGlkZW50aWZ5IHlvdSBwZXJzb25hbGx5LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkFkdmVydGlzZXJzLjwvc3Bhbj5cbiAgICAgICAgV2UgbWF5IHVzZSB0aGlyZCBwYXJ0aWVzIHRvIGFkbWluaXN0ZXIgYSBsaW1pdGVkIHNldCBvZiBBaXIgVGFpbG9yXG4gICAgICAgIGFkdmVydGlzZW1lbnRzIG9uIHRoaXJkIHBhcnR5IGVsZWN0cm9uaWMgY2hhbm5lbHMuIE5vIFBlcnNvbmFsXG4gICAgICAgIEluZm9ybWF0aW9uIGlzIHByb3ZpZGVkIHRvIHRoZSBhZHZlcnRpc2VycyBhcyBwYXJ0IG9mIHRoaXMgcHJvY2VzcywgYnV0XG4gICAgICAgIGFnZ3JlZ2F0ZSBwcm9maWxlIGluZm9ybWF0aW9uIG9yIE90aGVyIEluZm9ybWF0aW9uLCBzdWNoIGFzIGltcGxpZWQgb3JcbiAgICAgICAgaW5mZXJyZWQgaW50ZXJlc3RzLCBtYXkgYmUgdXNlZCBpbiB0aGUgc2VsZWN0aW9uIG9mIGFkdmVydGlzaW5nIHRvIG1ha2VcbiAgICAgICAgc3VyZSB0aGF0IGl0IGhhcyByZWxldmFuY2UgdG8gdGhlIHVzZXIuIFNvbWUgYmFubmVyIGFkcyBtYXkgY29udGFpblxuICAgICAgICBlbWJlZGRlZCBwaXhlbHMgdGhhdCBtYXkgd3JpdGUgYW5kIHJlYWQgY29va2llcyBvciByZXR1cm4gc2Vzc2lvblxuICAgICAgICBjb25uZWN0aW9uIGluZm9ybWF0aW9uIHRoYXQgYWxsb3dzIGFkdmVydGlzZXJzIHRvIGJldHRlciBkZXRlcm1pbmUgaG93XG4gICAgICAgIG1hbnkgaW5kaXZpZHVhbCB1c2VycyBoYXZlIGNsaWNrZWQgb24gdGhlIGFkIGJhbm5lci4gV2UgbWF5IGFsc28gdXNlXG4gICAgICAgIGFkdmVydGlzaW5nIHRlY2hub2xvZ2llcyBhbmQgcGFydGljaXBhdGUgaW4gYWR2ZXJ0aXNpbmcgdGVjaG5vbG9neVxuICAgICAgICBuZXR3b3JrcyB0aGF0IGNvbGxlY3QgT3RoZXIgSW5mb3JtYXRpb24gZnJvbSBBaXIgVGFpbG9yIGFuZCBub24tQWlyXG4gICAgICAgIFRhaWxvciBTZXJ2aWNlcywgYXMgd2VsbCBhcyBmcm9tIG90aGVyIHNvdXJjZXMsIHRvIHNob3cgeW91IEFpclxuICAgICAgICBUYWlsb3ItcmVsYXRlZCBhZHZlcnRpc2VtZW50cyBvbiBBaXIgVGFpbG9y4oCZcyBvd24gYW5kIHRoaXJkLXBhcnR5XG4gICAgICAgIHdlYnNpdGVzIGFuZCBhcHBzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pk90aGVyIEluZm9ybWF0aW9uLjwvc3Bhbj5cbiAgICAgICAgV2UgbWF5IHVzZSwgdHJhbnNmZXIsIGFuZCBkaXNjbG9zZSBPdGhlciBJbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IGZvciBhbnlcbiAgICAgICAgcHVycG9zZSwgZXhjZXB0IHdoZXJlIGFwcGxpY2FibGUgbGF3IHJlcXVpcmVzIG90aGVyd2lzZS4gSWYgd2UgYXJlXG4gICAgICAgIHJlcXVpcmVkIHRvIHRyZWF0IE90aGVyIEluZm9ybWF0aW9uIGFzIFBlcnNvbmFsIEluZm9ybWF0aW9uIHVuZGVyXG4gICAgICAgIGFwcGxpY2FibGUgbGF3LCB0aGVuIHdlIHdpbGwgb25seSB1c2UgaXQgaW4gdGhlIHNhbWUgd2F5IHRoYXQgd2UgYXJlXG4gICAgICAgIHBlcm1pdHRlZCB0byB1c2UgYW5kIGRpc2Nsb3NlIFBlcnNvbmFsIEluZm9ybWF0aW9uLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIGdyb3VuZHMgb24gd2hpY2ggd2UgcHJvY2VzcyB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIGluY2x1ZGUgd2hlcmVcbiAgICAgICAgeW91IGhhdmUgZ2l2ZW4geW91ciBjb25zZW50LCB3aGVyZSBpdCBpcyBuZWNlc3NhcnkgdG8gcHJvdmlkZSB5b3UgdGhlXG4gICAgICAgIFNlcnZpY2UsIG9yIHdoZXJlIGl0IGlzIG5lY2Vzc2FyeSB0byBmdWxmaWwgb3VyIG9ibGlnYXRpb25zIHRvIGEgdGhpcmRcbiAgICAgICAgcGFydHkgaW4gcHJvdmlkaW5nIHlvdSB3aXRoIHRoZSBTZXJ2aWNlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIElWLiBXSEFUIFJJR0hUUyBBTkQgQ0hPSUNFUyBETyBJIEhBVkU/XG4gICAgICAgIDxiciAvPlxuICAgICAgICBJZiB5b3Ugd2lzaCB0byBjYW5jZWwgeW91ciBhY2NvdW50LCBwbGVhc2UgZW1haWwgdXMgYXRcbiAgICAgICAgaGVsbG9AYWlydGFpbG9yLmNvbS4gUGxlYXNlIG5vdGUgdGhhdCBzb21lIGluZm9ybWF0aW9uIG1heSByZW1haW4gaW4gb3VyXG4gICAgICAgIHJlY29yZHMgYWZ0ZXIgeW91ciBkZWxldGlvbiBvZiBzdWNoIGluZm9ybWF0aW9uIGZyb20geW91ciBhY2NvdW50LiBXZVxuICAgICAgICBtYXkgdXNlIGFueSBhZ2dyZWdhdGVkIGRhdGEgZGVyaXZlZCBmcm9tIG9yIGluY29ycG9yYXRpbmcgeW91ciBQZXJzb25hbFxuICAgICAgICBJbmZvcm1hdGlvbiBhZnRlciB5b3UgdXBkYXRlIG9yIGRlbGV0ZSBpdCwgYnV0IG5vdCBpbiBhIG1hbm5lciB0aGF0XG4gICAgICAgIHdvdWxkIGlkZW50aWZ5IHlvdSBwZXJzb25hbGx5LiBBaXIgVGFpbG9yIHdpbGwgY29tcGx5IHdpdGggaW5kaXZpZHVhbOKAmXNcbiAgICAgICAgcmVxdWVzdHMgcmVnYXJkaW5nIGFjY2VzcywgY29ycmVjdGlvbiwgYW5kL29yIGRlbGV0aW9uIG9mIHRoZSBwZXJzb25hbFxuICAgICAgICBkYXRhIGl0IHN0b3JlcyBpbiBhY2NvcmRhbmNlIHdpdGggYXBwbGljYWJsZSBsYXcuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICAxLiBJbnRlcmVzdCBCYXNlZCBBZHZlcnRpc2luZ1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgQXMgZGlzY3Vzc2VkIGFib3ZlLCB3ZSBtYXkgcGFydG5lciB3aXRoIHRoaXJkIHBhcnRpZXMgdG8gcHJvdmlkZVxuICAgICAgICBJbnRlcmVzdCBCYXNlZCBBZHZlcnRpc2luZy4gRm9yIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBvcHQgb3V0IG9mXG4gICAgICAgIHJlY2VpdmluZyBpbnRlcmVzdC1iYXNlZCBhZHZlcnRpc2VtZW50cywgb3IgdG8gbGVhcm4gbW9yZSBhYm91dFxuICAgICAgICBpbnRlcmVzdC1iYXNlZCBhZHZlcnRpc2luZyBpbiBnZW5lcmFsIGFuZCB0byBhY2Nlc3MgdGhlIG9wdC1vdXRzIG9mXG4gICAgICAgIG90aGVyIG9ubGluZSBhZHZlcnRpc2luZyBjb21wYW5pZXMsIHZpc2l0IHRoZSBOZXR3b3JrIEFkdmVydGlzaW5nXG4gICAgICAgIEluaXRpYXRpdmUgYXR7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5uZXR3b3JrYWR2ZXJ0aXNpbmcub3JnL2Nob2ljZXMvXCI+XG4gICAgICAgICAgaHR0cDovL3d3dy5uZXR3b3JrYWR2ZXJ0aXNpbmcub3JnL2Nob2ljZXMvXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBvciB0aGUgRGlnaXRhbCBBZHZlcnRpc2luZyBBbGxpYW5jZSAoREFBKSBhdHsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFib3V0YWRzLmluZm8vY2hvaWNlcy9cIj5cbiAgICAgICAgICBodHRwOi8vd3d3LmFib3V0YWRzLmluZm8vY2hvaWNlcy9cbiAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIG9yLCBmb3IgaW50ZXJlc3QtYmFzZWQgYWR2ZXJ0aXNpbmcgaW4gYXBwcywgYnkgdXNpbmcgdGhlIERBQeKAmXNcbiAgICAgICAg4oCcQXBwQ2hvaWNlc+KAnSBhcHBsaWNhdGlvbiBhdmFpbGFibGUgYXR7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL2h0dHA6Ly93d3cuYWJvdXRhZHMuaW5mby9hcHBjaG9pY2VzXCI+XG4gICAgICAgICAgaHR0cDovL2h0dHA6Ly93d3cuYWJvdXRhZHMuaW5mby9hcHBjaG9pY2VzXG4gICAgICAgIDwvYT4uIEJ5IG9wdGluZyBvdXQsIHlvdSBtYXkgc3RpbGwgcmVjZWl2ZSBhZHMgZnJvbSBBaXIgVGFpbG9yLCBidXQgeW91XG4gICAgICAgIHN0aWxsIHN0b3AgcmVjZWl2aW5nIGFkcyBmcm9tIEFpciBUYWlsb3IgdGhhdCBoYXZlIGJlZW4gdGFyZ2V0ZWQgdG8geW91XG4gICAgICAgIGJhc2VkIG9uIHlvdXIgdmlzaXRzIGFuZCBicm93c2luZyBhY3Rpdml0eSBhY3Jvc3Mgd2Vic2l0ZXMgb3ZlciB0aW1lLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgMi4gRG8gTm90IFRyYWNrIFNpZ25hbHNcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEF0IHRoaXMgdGltZSB3ZSBob25vciB3ZWIgYnJvd3NlciBEbyBOb3QgVHJhY2sgKOKAnEROVOKAnSkgc2lnbmFscyBhbmQgRG9cbiAgICAgICAgTm90IFRyYWNrLCBwbGFudCBjb29raWVzLCBvciB1c2UgYWR2ZXJ0aXNpbmcgd2hlbiBhIERvIE5vdCBUcmFjayAoRE5UKVxuICAgICAgICBicm93c2VyIG1lY2hhbmlzbSBpcyBpbiBwbGFjZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFYuIE1BUktFVElORyBBTkQgRU1BSUwgQ09NTVVOSUNBVElPTlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgQnkgcHJvdmlkaW5nIHlvdXIgZW1haWwgYWRkcmVzcyB0byB1cywgeW91IGV4cHJlc3NseSBjb25zZW50IHRvIHJlY2VpdmVcbiAgICAgICAgZW1haWxzIGZyb20gdXMsIHdoZXJlIHBlcm1pdHRlZCBieSBsYXcuIFdlIG1heSB1c2UgZW1haWwgdG8gY29tbXVuaWNhdGVcbiAgICAgICAgd2l0aCB5b3UsIHRvIHNlbmQgaW5mb3JtYXRpb24gdGhhdCB5b3UgaGF2ZSByZXF1ZXN0ZWQgb3IgdG8gc2VuZFxuICAgICAgICBpbmZvcm1hdGlvbiBhYm91dCBvdGhlciBwcm9kdWN0cyBvciBzZXJ2aWNlcyBkZXZlbG9wZWQgb3IgcHJvdmlkZWQgYnkgdXNcbiAgICAgICAgb3Igb3VyIHBhcnRuZXJzLiBJZiB5b3UgZG8gbm90IHdhbnQgdG8gcmVjZWl2ZSBjb21tZXJjaWFsIGVtYWlsIG9yIG90aGVyXG4gICAgICAgIG1haWwgZnJvbSB1cywgeW91IG1heSB1bnN1YnNjcmliZSB1c2luZyB0aGUgdW5zdWJzY3JpYmUgbGluayBhdCB0aGVcbiAgICAgICAgYm90dG9tIG9mIGFuIGVtYWlsIHlvdSByZWNlaXZlLiBQbGVhc2Ugbm90ZSB0aGF0IGlmIHlvdSBkbyBub3Qgd2FudCB0b1xuICAgICAgICByZWNlaXZlIGxlZ2FsIG5vdGljZXMgZnJvbSB1cywgc3VjaCBhcyBub3RpY2VzIHJlZ2FyZGluZyB0aGlzIFByaXZhY3lcbiAgICAgICAgUG9saWN5LCB0aG9zZSBsZWdhbCBub3RpY2VzIHdpbGwgc3RpbGwgZ292ZXJuIHlvdXIgdXNlIG9mIHRoZSBTZXJ2aWNlcyxcbiAgICAgICAgYW5kIHlvdSBhcmUgcmVzcG9uc2libGUgZm9yIHJldmlld2luZyBzdWNoIGxlZ2FsIG5vdGljZXMgZm9yIGNoYW5nZXMuIFdlXG4gICAgICAgIG1heSByZWNlaXZlIGEgY29uZmlybWF0aW9uIHdoZW4geW91IG9wZW4gYW4gZW1haWwgZnJvbSBBaXIgVGFpbG9yIGlmXG4gICAgICAgIHlvdXIgY29tcHV0ZXIgc3VwcG9ydHMgdGhpcyB0eXBlIG9mIHByb2dyYW0uIEFpciBUYWlsb3IgdXNlcyB0aGlzXG4gICAgICAgIGNvbmZpcm1hdGlvbiB0byBoZWxwIHVzIG1ha2UgZW1haWxzIG1vcmUgaW50ZXJlc3RpbmcgYW5kIGhlbHBmdWwgYW5kIHRvXG4gICAgICAgIGltcHJvdmUgb3VyIHNlcnZpY2UuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBWSS4gU0VDVVJJVFlcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEFpciBUYWlsb3IgdXNlcyBjb21tZXJjaWFsbHkgcmVhc29uYWJsZSBwaHlzaWNhbCwgZWxlY3Ryb25pYywgYW5kXG4gICAgICAgIHByb2NlZHVyYWwgc2FmZWd1YXJkcyB0byBwcm90ZWN0IHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gYWdhaW5zdCBsb3NzXG4gICAgICAgIG9yIHVuYXV0aG9yaXplZCBhY2Nlc3MsIHVzZSwgbW9kaWZpY2F0aW9uLCBvciBkZWxldGlvbi4gSG93ZXZlciwgbm9cbiAgICAgICAgc2VjdXJpdHkgcHJvZ3JhbSBpcyBmb29scHJvb2YsIGFuZCB0aHVzIHdlIGNhbm5vdCBndWFyYW50ZWUgdGhlIGFic29sdXRlXG4gICAgICAgIHNlY3VyaXR5IG9mIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gb3IgT3RoZXIgSW5mb3JtYXRpb24uIFdlIHdpbGxcbiAgICAgICAgcmV0YWluIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gZm9yIGFzIGxvbmcgYXMgcmVhc29uYWJseSBuZWNlc3NhcnkgdG9cbiAgICAgICAgYWNjb21wbGlzaCB0aGUgcHVycG9zZXMgaW4gdGhpcyBQcml2YWN5IFBvbGljeSBvciBhcyByZXF1aXJlZCBieSBsYXcuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBWSUkuIEZBSVIgSU5GT1JNQVRJT04gUFJBQ1RJQ0VTXG4gICAgICAgIDxiciAvPlxuICAgICAgICBTaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1ciwgd2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gN1xuICAgICAgICBidXNpbmVzcyBkYXlzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgV2UgYWxzbyBhZ3JlZSB0byB0aGUgSW5kaXZpZHVhbCBSZWRyZXNzIFByaW5jaXBsZSB3aGljaCByZXF1aXJlcyB0aGF0XG4gICAgICAgIGluZGl2aWR1YWxzIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0XG4gICAgICAgIGRhdGEgY29sbGVjdG9ycyBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpc1xuICAgICAgICBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHkgdGhhdCBpbmRpdmlkdWFscyBoYXZlIGVuZm9yY2VhYmxlIHJpZ2h0c1xuICAgICAgICBhZ2FpbnN0IGRhdGEgdXNlcnMsIGJ1dCBhbHNvIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3JcbiAgICAgICAgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZSBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5XG4gICAgICAgIGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFZJSUkuIENIQU5HRVMgVE8gVEhJUyBQUklWQUNZIFBPTElDWVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2UgbWF5IGFtZW5kIHRoaXMgUHJpdmFjeSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUuIFVzZSBvZiBpbmZvcm1hdGlvblxuICAgICAgICB3ZSBjb2xsZWN0IG5vdyBpcyBzdWJqZWN0IHRvIHRoZSBQcml2YWN5IFBvbGljeSBpbiBlZmZlY3QgYXQgdGhlIHRpbWVcbiAgICAgICAgc3VjaCBpbmZvcm1hdGlvbiBpcyB1c2VkLiBJZiB3ZSBtYWtlIGNoYW5nZXMgaW4gdGhlIHdheSB3ZSB1c2UgUGVyc29uYWxcbiAgICAgICAgSW5mb3JtYXRpb24sIHdlIHdpbGwgbm90aWZ5IHlvdSBieSBwb3N0aW5nIGFuIGFubm91bmNlbWVudCBvbiBvdXJcbiAgICAgICAgV2Vic2l0ZSBvciBzZW5kaW5nIHlvdSBhIG1lc3NhZ2UuIFlvdSBhcmUgYm91bmQgYnkgYW55IGNoYW5nZXMgdG8gdGhlXG4gICAgICAgIFByaXZhY3kgUG9saWN5IHdoZW4geW91IHVzZSB0aGUgU2VydmljZXMgYWZ0ZXIgc3VjaCBjaGFuZ2VzIGhhdmUgYmVlblxuICAgICAgICBmaXJzdCBwb3N0ZWQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBJWC4gQ09OVEFDVCBVU1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucyByZWdhcmRpbmcgb3VyIFByaXZhY3kgUG9saWN5LFxuICAgICAgICBwbGVhc2Ugc2VuZCB1cyBhIG1lc3NhZ2UgdG8gaGVsbG9AYWlydGFpbG9yLmNvbS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+VXBkYXRlZCBKYW51YXJ5IDEwdGgsIDIwMTg8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvdGVybXMvUHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRlcm1zT2ZTZXJ2aWNlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnanVzdGlmeScsIG1hcmdpbjogJzIwcHggMjBweCAwIDIwcHgnIH19PlxuICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlXG4gICAgICA8L3A+XG4gICAgICA8cCBzdHlsZT17eyBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgVGhlIEFpciBUYWlsb3IgUGxhdGZvcm0gcHJvdmlkZXMgZWFzeS10by11c2Ugc29mdHdhcmUgdG8gb3VyIFJldGFpbFxuICAgICAgICBQYXJ0bmVycywgcmVmZXJyZWQgdG8gaGVyZWluIGFzIHRoZSBcIlBhcnRuZXJzXCIsIGFsbG93aW5nIHRoZWlyIHN0b3JlXG4gICAgICAgIGFzc29jaWF0ZXMgdG8gb3JkZXIgY2xvdGhpbmcgYWx0ZXJhdGlvbnMgZnJvbSB0aGUgQWlyIFRhaWxvciBUYWlsb3JzLlxuICAgICAgICBUaGlzIHNvbHV0aW9uIHdpbGwgaGVscCBQYXJ0bmVycyBvZmZlciB0aGVpciByZXRhaWwgY3VzdG9tZXJzIGFcbiAgICAgICAgaGVpZ2h0ZW5lZCBzaG9wcGluZyBleHBlcmllbmNlLCB3aGljaCBwcm9tb3RlcyBoaWdoZXIgc3RvcmUgc2FsZXMgYW5kXG4gICAgICAgIGxvd2VycyB0aGUgYW1vdW50IG9mIHJldHVybmVkIG1lcmNoYW5kaXNlLlxuICAgICAgPC9wPlxuXG4gICAgICA8b2w+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+U2VydmljZXM8L3NwYW4+XG4gICAgICAgICAgLiBBaXIgVGFpbG9yIGFncmVlcyB0byBwcm92aWRlIHRoZSBmb2xsb3dpbmcgVGVjaG5vbG9neSBTZXJ2aWNlc1xuICAgICAgICAgIChkZWZpbmVkIGJlbG93KSBhbmQgTWFuYWdlbWVudCBTZXJ2aWNlcyAoZGVmaW5lZCBiZWxvdykgdG8gUGFydG5lcnMuXG4gICAgICAgICAgVG9nZXRoZXIsIHRoZSBUZWNobm9sb2d5IFNlcnZpY2VzIGFuZCBNYW5hZ2VtZW50IFNlcnZpY2VzIGFyZSByZWZlcnJlZFxuICAgICAgICAgIHRvIGhlcmVpbiBhcyB0aGUgXCJTZXJ2aWNlcy5cIlxuICAgICAgICA8L2xpPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8b2wgdHlwZT1cImFcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICBUZWNobm9sb2d5IFNlcnZpY2VzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAuIEFpciBUYWlsb3Igd2lsbCBwcm92aWRlIFBhcnRuZXJzIHdpdGggaXRzIGFsdGVyYXRpb24gYW5kIHRhaWxvclxuICAgICAgICAgICAgbWFuYWdlbWVudCBzb2Z0d2FyZSB2aWEgYSB3ZWIgY2xpZW50IChcIkFpciBUYWlsb3IgUGxhdGZvcm1cIikgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHBlcm1pdCBQYXJ0bmVycyB0byBwbGFjZSBnYXJtZW50IHRhaWxvcmluZyBvcmRlcnMgdG8gdGhpcmRcbiAgICAgICAgICAgIHBhcnR5IHRhaWxvcnMgKGNvbGxlY3RpdmVseSwgXCJUYWlsb3JzXCIpOyB0cmFjayB0YWlsb3Jpbmcgb3JkZXJzIGFuZFxuICAgICAgICAgICAgcHJvdmlkZSBjZW50cmFsaXplZCwgdXAtdG8tZGF0ZSBzaGlwbWVudCBhbmQgc3RhdHVzIHJlcG9ydGluZztcbiAgICAgICAgICAgIGNlbnRyYWxpemUgY3VzdG9tZXIgc2VydmljZSwgYWNjb3VudCBtYW5hZ2VtZW50LCBiaWxsaW5nLCByZXBvcnRpbmdcbiAgICAgICAgICAgIGFuZCBwYXltZW50IGZ1bmN0aW9uYWxpdGllcyBmb3IgdGFpbG9yaW5nIG9yZGVycy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAgTWFuYWdlbWVudCBTZXJ2aWNlc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgLiBBaXIgVGFpbG9yIHdpbGwgcHJvdmlkZSBpdHMgQWlyIFRhaWxvciBQbGF0Zm9ybSB0byBmYWNpbGl0YXRlIGFsbFxuICAgICAgICAgICAgYmFjay1lbmQgb3JkZXJpbmcsIGZ1bGZpbGxtZW50LCBzaGlwcGluZy9kZWxpdmVyeSwgcGF5bWVudCBhbmRcbiAgICAgICAgICAgIHJlbGF0ZWQgc2VydmljZXMgYmV0d2VlbiBQYXJ0bmVycyBhbmQgVGFpbG9ycyAoY29sbGVjdGl2ZWx5LFxuICAgICAgICAgICAgXCJNYW5hZ2VtZW50IFNlcnZpY2VzXCIpLiBGb3IgdGhlIGF2b2lkYW5jZSBvZiBkb3VidCwgQWlyIFRhaWxvcixcbiAgICAgICAgICAgIHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBmb3IgYW55IGNvc3RzIGFzc29jaWF0ZWQgd2l0aCBnb29kcyxcbiAgICAgICAgICAgIGNsb3RoaW5nIG9yIG90aGVyIHByb2R1Y3RzIGxvc3Qgb3IgZGFtYWdlZCBkdXJpbmcgc2hpcG1lbnQsXG4gICAgICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBnb29kcywgY2xvdGhpbmcgb3Igb3RoZXIgcHJvZHVjdHMgbG9zdFxuICAgICAgICAgICAgb3IgZGFtYWdlZCBieSBzaGlwcGluZyBvciBtZXNzZW5nZXIvZGVsaXZlcnkgc2VydmljZXMuIFNob3VsZCBhXG4gICAgICAgICAgICB0YWlsb3JlZCBnYXJtZW50IGJlIGZvdW5kIGluIGdvb2QgZmFpdGggdG8gYmUgdW5zYXRpc2ZhY3RvcnkgYnkgYVxuICAgICAgICAgICAgUGFydG5lciwgQWlyIFRhaWxvciBzaGFsbCB1c2UgY29tbWVyY2lhbGx5IHJlYXNvbmFibGUgZWZmb3J0cyB0b1xuICAgICAgICAgICAgcmVwbGFjZSBvciByZXBhaXIgc2FpZCBnYXJtZW50IGF0IG5vIGFkZGl0aW9uYWwgY2hhcmdlLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlRhaWxvcnM8L3NwYW4+XG4gICAgICAgICAgICAuIEluIHRoZSBjb3Vyc2Ugb2YgcHJvdmlkaW5nIHRoZSBTZXJ2aWNlcyBjb250ZW1wbGF0ZWQgaGVyZWluLCBBaXJcbiAgICAgICAgICAgIFRhaWxvciBzaGFsbCBtYW5hZ2UgYW5kIGZhY2lsaXRhdGUgYWxsIHNlcnZpY2VzIHRoYXQgYXJlIHBlcmZvcm1lZFxuICAgICAgICAgICAgYnkgdGhlIFRhaWxvcnMgaW5jbHVkaW5nIG1hbmFnaW5nIFRhaWxvcmluZyBvcmRlcnMsIHRyYWNraW5nIGFuZFxuICAgICAgICAgICAgbWFuYWdpbmcgVGFpbG9yIGFjdGl2aXR5LCBhbmQgcmVzcG9uZGluZyB0byBhbnkgY3VzdG9tZXIgc2VydmljZVxuICAgICAgICAgICAgY29uY2VybnMgd2l0aCByZXNwZWN0IHRvIHRoZSBwZXJmb3JtYW5jZSBvZiB0aGUgYXBwbGljYWJsZSBUYWlsb3JzLlxuICAgICAgICAgICAgVGFpbG9ycyBzaGFsbCBoYXZlIGFjY2VzcyB0byBhbmQgdXRpbGl6ZSBwb3J0aW9ucyBvZiB0aGUgQWlyIFRhaWxvclxuICAgICAgICAgICAgUGxhdGZvcm0gaW4gb3JkZXIgdG8gYXNzaXN0IEFpciBUYWlsb3IgaW4gbWFuYWdpbmcgdGhlc2UgdGFza3MuIEFsbFxuICAgICAgICAgICAgVGFpbG9ycyB1dGlsaXplZCBieSB0aGUgQWlyIFRhaWxvciBQb3J0YWwgbXVzdCBiZSBwcmV2aW91c2x5IHZldHRlZFxuICAgICAgICAgICAgYW5kIGFwcHJvdmVkIHRvIHRoZSBzeXN0ZW0gYnkgQWlyIFRhaWxvciBzdGFmZiBwcmlvciB0byBhY2Nlc3NpbmdcbiAgICAgICAgICAgIHRoZSBBaXIgVGFpbG9yIFBsYXRmb3JtIG9yIFNlcnZpY2VzLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlBhcnRuZXLigJlzIFVzZXJzPC9zcGFuPlxuICAgICAgICAgICAgLiBQYXJ0bmVycyBtYXkgcGVybWl0IGVtcGxveWVlcyBhbmQgc2FsZXMgYXNzb2NpYXRlcyBhdCBpdHMgc3RvcmVcbiAgICAgICAgICAgIGxvY2F0aW9ucyAoXCJVc2Vyc1wiKSB0byBhY2Nlc3MgYW5kIHVzZSB0aGUgU2VydmljZXMuIFBhcnRuZXJzIHNoYWxsXG4gICAgICAgICAgICBzYWZlZ3VhcmQgYWxsIGFjY2VzcyB0byB0aGUgU2VydmljZXMgYW5kIGFsbCBjcmVkZW50aWFscyBwcm92aWRlZCBieVxuICAgICAgICAgICAgQWlyIFRhaWxvciBhbmQgc2hhbGwgZW5zdXJlIHRoZSBjb25maWRlbnRpYWxpdHkgYW5kIHNlY3VyaXR5XG4gICAgICAgICAgICB0aGVyZW9mLiBQYXJ0bmVycyBzaGFsbCBiZSBmdWxseSByZXNwb25zaWJsZSBmb3IsIGFuZCBzaGFsbFxuICAgICAgICAgICAgaW5kZW1uaWZ5IEFpciBUYWlsb3IgYW5kIGl0cyBJbmRlbW5pdGVlcyBmb3IsIHRoZSBhY3RzIGFuZCBvbWlzc2lvbnNcbiAgICAgICAgICAgIG9mIGl0cyBVc2Vycy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkZlZXM8L3NwYW4+LiBBbGxcbiAgICAgICAgICBhcHBsaWNhYmxlIGNvc3RzIHNoYWxsIGJlIHBhaWQgaW4gZnVsbCB3aXRoaW4gdGhpcnR5ICgzMCkgZGF5cyBhZnRlclxuICAgICAgICAgIHRoZSBkYXRlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGludm9pY2UgYW5kIGFyZSBub24tcmVmdW5kYWJsZSBvbmNlXG4gICAgICAgICAgcGFpZC4gUGFydG5lcnMgc2hhbGwgYmUgcmVzcG9uc2libGUgZm9yIGFsbCBzYWxlcywgdXNlLCBvciBvdGhlciB0YXhlc1xuICAgICAgICAgIGFuZCBvdGhlciBnb3Zlcm5tZW50YWwgY2hhcmdlcyBvbiBhbGwgYWx0ZXJhdGlvbnMgb3JkZXJlZCBhcyB3ZWxsIGFzXG4gICAgICAgICAgc2hpcHBpbmcvbWVzc2VuZ2VyIGNvc3RzIGZyb20gdGhlIHN0b3JlIHRvIHRoZSBUYWlsb3IuIEFpciBUYWlsb3Igd2lsbFxuICAgICAgICAgIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgc2hpcHBpbmcgYW5kIG1lc3Nlbmdlci9kZWxpdmVyeSBjb3N0cyBiYWNrIHRvXG4gICAgICAgICAgdGhlIHJldGFpbCBjdXN0b21lciBmcm9tIHRoZSBUYWlsb3IuIEFpciBUYWlsb3IgbWF5IHN1c3BlbmQgdGhlXG4gICAgICAgICAgcHJvdmlzaW9uIG9mIHRoZSBTZXJ2aWNlcyB1cG9uIHByaW9yIHdyaXR0ZW4gbm90aWNlIHRvIEN1c3RvbWVyIGlmIGFueVxuICAgICAgICAgIHBheW1lbnRzIGJlY29tZSB0aGlydHkgKDMwKSBvciBtb3JlIGRheXMgcGFzdCBkdWUuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGlcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+T3duZXJzaGlwPC9zcGFuPi5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG9sIHR5cGU9XCJhXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5UcmFkZW1hcmtzPC9zcGFuPi4gQWlyXG4gICAgICAgICAgICBUYWlsb3IgZ3JhbnRzIFBhcnRuZXJzIGEgbGltaXRlZCwgcmV2b2NhYmxlLCBub24tZXhjbHVzaXZlLFxuICAgICAgICAgICAgbm9uLXRyYW5zZmVyYWJsZSwgbm9uLXN1YmxpY2Vuc2FibGUgbGljZW5zZSB0byBhY2Nlc3MgYW5kIHVzZSBBaXJcbiAgICAgICAgICAgIFRhaWxvcuKAmXMgbmFtZXMsIGxvZ29zLCBkZXNpZ25zLCBhbmQgb3RoZXIgdHJhZGVtYXJrcyAoXCJNYXJrc1wiKVxuICAgICAgICAgICAgc29sZWx5IGZvciB0aGUgcHVycG9zZXMgb2YgbWFya2V0aW5nLCBkaXNwbGF5aW5nIGFuZCB1dGlsaXppbmcgdGhlXG4gICAgICAgICAgICBTZXJ2aWNlcywgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwgYW5kIEFpciBUYWlsb3IgUGxhdGZvcm0uXG4gICAgICAgICAgICBQYXJ0bmVycyBhZ3JlZSB0byB1c2UgdGhlIEFpciBUYWlsb3IgTWFya3MgY29uc2lzdGVudCB3aXRoIHRoZVxuICAgICAgICAgICAgaGlnaGVzdCBzdGFuZGFyZHMgb2YgcXVhbGl0eSBzbyBhcyB0byBwcm90ZWN0IGFuZCBtYWludGFpbiB0aGUgQWlyXG4gICAgICAgICAgICBUYWlsb3IgTWFya3MgYW5kIEFpciBUYWlsb3LigJlzIHJpZ2h0cyB0aGVyZWluLiBUbyB0aGlzIGVuZCwgUGFydG5lcnNcbiAgICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHJpZ2h0IHRvIHJldmlldyBhbmQgYXBwcm92ZSB0aGUgbWFubmVyIG9mIHVzZSBvZiB0aGVcbiAgICAgICAgICAgIEFpciBUYWlsb3IgTWFya3MsIGFuZCBQYXJ0bmVycyBhZ3JlZSB0byBtb2RpZnkgdXNlIG9mIGFueSBBaXIgVGFpbG9yXG4gICAgICAgICAgICBNYXJrcyB3aGljaCBkbyBub3QgbWVldCB0aGUgc3RhbmRhcmRzIHJlcXVpcmVkIGJ5IHRoZSBQYXJ0bmVyLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAgQWlyIFRhaWxvciBPd25lcnNoaXBcbiAgICAgICAgICAgIDwvc3Bhbj4uIEFpciBUYWlsb3Igc2hhbGwgcmV0YWluIGFsbCByaWdodCwgdGl0bGUgYW5kIGludGVyZXN0IGluXG4gICAgICAgICAgICBhbmQgdG8gdGhlIFNlcnZpY2VzLCB0aGUgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwsIGFuZCB0aGUgQWlyXG4gICAgICAgICAgICBUYWlsb3IgUGxhdGZvcm0gaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgYWxsIGNvbnRlbnQsIGNvbmNlcHRzLFxuICAgICAgICAgICAga25vdy1ob3csIHRvb2xzLCBzY3JpcHRzLCBtZXRob2RvbG9naWVzLCBwcm9jZXNzZXMsIGNvZGUsIG9yIG90aGVyXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3IgdHJhZGUgc2VjcmV0cyBhc3NvY2lhdGVkIHdpdGggdGhlIEFpclxuICAgICAgICAgICAgVGFpbG9yIEFsdGVyYXRpb25zIFBvcnRhbCwgQWlyIFRhaWxvciBQbGF0Zm9ybSwgb3Igb3RoZXJcbiAgICAgICAgICAgIHByZS1leGlzdGluZyBvciBpbmRlcGVuZGVudGx5IGRldmVsb3BlZCBpbnRlbGxlY3R1YWwgcHJvcGVydHlcbiAgICAgICAgICAgIGNyZWF0ZWQgYnkgQWlyIFRhaWxvciBhbmQgYW55IGVuaGFuY2VtZW50cywgbW9kaWZpY2F0aW9ucywgb3JcbiAgICAgICAgICAgIGltcHJvdmVtZW50cyB0byB0aGUgZm9yZWdvaW5nIGRldmVsb3BlZCBkdXJpbmcgb3IgaW5kZXBlbmRlbnQgb2YgdGhlXG4gICAgICAgICAgICBTZXJ2aWNlcyAoY29sbGVjdGl2ZWx5LCBcIkFpciBUYWlsb3IgSVBcIikuIEluIGNvbm5lY3Rpb24gd2l0aCB0aGVcbiAgICAgICAgICAgIFNlcnZpY2VzIGhlcmVpbiwgQWlyIFRhaWxvciBhbmQgUGFydG5lcnMgc2hhbGwgZXhjaGFuZ2UgZGF0YSB3aGljaFxuICAgICAgICAgICAgc2hhbGwgaW5jbHVkZSwgd2l0aG91dCBsaW1pdGF0aW9uLCBUYWlsb3Jpbmcgb3JkZXIgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIChjb2xsZWN0aXZlbHksIFwiRGF0YVwiKS4gUGFydG5lciBncmFudHMgQWlyIFRhaWxvciBhbiBpcnJldm9jYWJsZSxcbiAgICAgICAgICAgIHBlcnBldHVhbCwgd29ybGR3aWRlLCB0cmFuc2ZlcmFibGUsIG5vbi1leGNsdXNpdmUsIHJveWFsdHktZnJlZVxuICAgICAgICAgICAgbGljZW5zZSB0byB1c2UgYW5kIG1vZGlmeSBEYXRhIGluIHRoZSBjb3Vyc2Ugb2YgaXRzIGJ1c2luZXNzLlxuICAgICAgICAgICAgRnVydGhlciwgUGFydG5lcnMgYXJlIG5vdCByZXF1aXJlZCB0byBwcm92aWRlIGFueSBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGVuaGFuY2VtZW50IHJlcXVlc3RzLCByZWNvbW1lbmRhdGlvbnMgb3Igb3RoZXIgZmVlZGJhY2sgcmVnYXJkaW5nXG4gICAgICAgICAgICB0aGUgU2VydmljZXMgKFwiRmVlZGJhY2tcIiksIGJ1dCBpZiBQYXJ0bmVycyBkbyBzbywgUGFydG5lcnMgZ3JhbnRzXG4gICAgICAgICAgICBBaXIgVGFpbG9yIGEgbm9uLWV4Y2x1c2l2ZSwgcm95YWx0eS1mcmVlLCB3b3JsZHdpZGUsIHRyYW5zZmVyYWJsZSxcbiAgICAgICAgICAgIHN1Yi1saWNlbnNhYmxlLCBpcnJldm9jYWJsZSwgcGVycGV0dWFsIGxpY2Vuc2UgdG8gdXNlIG9yIGluY29ycG9yYXRlXG4gICAgICAgICAgICBpbnRvIHRoZSBTZXJ2aWNlcyBhbnkgRmVlZGJhY2sgc28gcHJvdmlkZWQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlJlc3RyaWN0aW9uczwvc3Bhbj4uXG4gICAgICAgICAgICBQYXJ0bmVycyBzaGFsbCBub3QgKG9yIHBlcm1pdCBhbnkgdGhpcmQgcGFydHkgdG8pIGRpcmVjdGx5IG9yXG4gICAgICAgICAgICBpbmRpcmVjdGx5IChpKSB1c2UgYW55IG9mIHRoZSBBaXIgVGFpbG9yIElQIG9yIEFpciBUYWlsb3JcbiAgICAgICAgICAgIENvbmZpZGVudGlhbCBJbmZvcm1hdGlvbiB0byBjcmVhdGUgYW55IHNlcnZpY2UsIHNvZnR3YXJlLFxuICAgICAgICAgICAgZG9jdW1lbnRhdGlvbiBvciBkYXRhIHRoYXQgaXMgY29tcGV0aXRpdmUgd2l0aCwgc3Vic3RhbnRpYWxseVxuICAgICAgICAgICAgc2ltaWxhciBvciBjb25mdXNpbmdseSBzaW1pbGFyIHRvIGFueSBhc3BlY3Qgb2YgdGhlIFNlcnZpY2VzOyAoaWkpXG4gICAgICAgICAgICByZXZlcnNlIGVuZ2luZWVyIG9yIHVzZSBhbnkgb3RoZXIgbWVhbnMgdG8gYXR0ZW1wdCB0byBkaXNjb3ZlciBhbnlcbiAgICAgICAgICAgIHNvdXJjZSBjb2RlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uOyAoaWlpKSBlbmN1bWJlciwgcGxlZGdlLCByZXNlbGwsXG4gICAgICAgICAgICBzaGFyZSwgc3VibGljZW5zZSwgdHJhbnNmZXIsIHJlbnQsIGxlYXNlLCB0aW1lLXNoYXJlIG9yIHVzZSB0aGVcbiAgICAgICAgICAgIFNlcnZpY2VzLCBBaXIgVGFpbG9yIElQIG9yIEFpciBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIGZvclxuICAgICAgICAgICAgdGhlIGJlbmVmaXQgb2YgYW55IHRoaXJkIHBhcnR5OyAoaXYpIG1vZGlmeSwgbWFudWZhY3R1cmUsIGFkYXB0LFxuICAgICAgICAgICAgY3JlYXRlIGRlcml2YXRpdmUgd29ya3Mgb2Ygb3Igb3RoZXJ3aXNlIG1vZGlmeSBhbnkgYXNwZWN0IG9mIHRoZVxuICAgICAgICAgICAgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyIFRhaWxvciBDb25maWRlbnRpYWwgSW5mb3JtYXRpb247ICh2KVxuICAgICAgICAgICAgdXNlIHRoZSBTZXJ2aWNlcywgQWlyIFRhaWxvciBJUCBhbmQgQWlyIFRhaWxvciBDb25maWRlbnRpYWxcbiAgICAgICAgICAgIEluZm9ybWF0aW9uIHRvIHN1cHBvcnQgYW55IGFjdGl2aXR5IHRoYXQgaXMgaW5mcmluZ2luZyBvciBpbGxlZ2FsO1xuICAgICAgICAgICAgKHZpKSB0cmFuc21pdCBoYXJtZnVsLCBkaXNhYmxpbmcgb3IgbWFsaWNpb3VzIGNvZGUgb3IgZGV2aWNlcyBvclxuICAgICAgICAgICAgZGlzYWJsZSwgb3ZlcnJpZGUgb3IgYWNjZXNzIHRoZSBTZXJ2aWNlcywgQWlyIFRhaWxvciBJUCBhbmQgQWlyXG4gICAgICAgICAgICBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uLCBvciBhY2Nlc3MgdGhlIHNhbWUgZm9yIHB1cnBvc2VzIG9mXG4gICAgICAgICAgICBtb25pdG9yaW5nIHRoZWlyIHBlcmZvcm1hbmNlIG9yIGZ1bmN0aW9uYWxpdHk7IG9yICh2aWkpIHJlbW92ZSxcbiAgICAgICAgICAgIGFsdGVyIG9yIG9ic2N1cmUgYW55IGNvcHlyaWdodCBvciBvdGhlciBwcm9wcmlldGFyeSBub3RpY2VzIG9uIHRoZVxuICAgICAgICAgICAgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyIFRhaWxvciBDb25maWRlbnRpYWwgSW5mb3JtYXRpb24uXG4gICAgICAgICAgICBOb3R3aXRoc3RhbmRpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnRyYXJ5IGhlcmVpbiwgQWlyIFRhaWxvciBtYXksIGluXG4gICAgICAgICAgICBpdHMgc29sZSBkaXNjcmV0aW9uLCBpbW1lZGlhdGVseSByZXZva2UgYWNjZXNzIGlmIGEgUGFydG5lciBicmVhY2hlc1xuICAgICAgICAgICAgdGhlIHJlc3RyaWN0aW9ucyBpbiB0aGlzIFNlY3Rpb24gb3IgY3JlYXRlcyBvdGhlciBzZWN1cml0eSBvciBsZWdhbFxuICAgICAgICAgICAgY29uY2VybnMuIFBhcnRuZXIgaGVyZWJ5IGFncmVlcyB0aGF0IEFpciBUYWlsb3Igd2lsbCBiZSBlbnRpdGxlZCwgaW5cbiAgICAgICAgICAgIGFkZGl0aW9uIHRvIGFueSBvdGhlciByZW1lZGllcyBhdmFpbGFibGUgdG8gaXQgYXQgbGF3IG9yIGluIGVxdWl0eSxcbiAgICAgICAgICAgIHRvIGluanVuY3RpdmUgcmVsaWVmIHRvIHByZXZlbnQgdGhlIGJyZWFjaCBvciB0aHJlYXRlbmVkIGJyZWFjaCBvZlxuICAgICAgICAgICAgUGFydG5lcuKAmXMgb2JsaWdhdGlvbnMgdW5kZXIgdGhpcyBTZWN0aW9uLCB3aXRob3V0IGFueSByZXF1aXJlbWVudCB0b1xuICAgICAgICAgICAgZGVtb25zdHJhdGUgaXJyZXBhcmFibGUgaGFybSBvciBwb3N0IGEgYm9uZC5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XG4gICAgICAgICAgICAgIFBhcnRuZXIgT3duZXJzaGlwXG4gICAgICAgICAgICA8L3NwYW4+LiBQYXJ0bmVycyBzaGFsbCByZXRhaW4gYWxsIHJpZ2h0LCB0aXRsZSwgb3duZXJzaGlwIGFuZFxuICAgICAgICAgICAgaW50ZXJlc3QgaW4gYW5kIHRvIChpKSB0aGUgUGFydG5lcuKAmXMgd2Vic2l0ZXM7IChpaSkgYWxsIG1hdGVyaWFscyBvclxuICAgICAgICAgICAgcHJvZHVjdHMgdGhhdCBhcmUgdGhlIHN1YmplY3Qgb2YgYW55IFRhaWxvcmluZyBPcmRlcnM7IGFuZCAoaWkpIGFsbFxuICAgICAgICAgICAgY29udGVudCwgdHJhZGVtYXJrcywgY29weXJpZ2h0cywgcGF0ZW50cywgb3Igb3RoZXIgaW50ZWxsZWN0dWFsXG4gICAgICAgICAgICBhbmQvb3IgcHJvcHJpZXRhcnkgcHJvcGVydHkgb2YgdGhlIFBhcnRuZXIgY29udGFpbmVkIHRoZXJlaW5cbiAgICAgICAgICAgIChjb2xsZWN0aXZlbHksIFwiUGFydG5lciBDb250ZW50XCIpLiBQYXJ0bmVycyBncmFudHMgQWlyIFRhaWxvciBhXG4gICAgICAgICAgICBub24tZXhjbHVzaXZlLCBsaW1pdGVkLCByb3lhbHR5LWZyZWUsIG5vbi10cmFuc2ZlcmFibGUgbGljZW5zZSB0b1xuICAgICAgICAgICAgdXNlLCBob3N0LCBkaXN0cmlidXRlLCByZXByb2R1Y2UsIHBlcmZvcm0sIGRpc3BsYXksIG1vZGlmeSBhbmRcbiAgICAgICAgICAgIGNyZWF0ZSBkZXJpdmF0aXZlIHdvcmtzIG9mIFBhcnRuZXIgQ29udGVudCB0byB0aGUgZXh0ZW50IG5lY2Vzc2FyeVxuICAgICAgICAgICAgdG8gcGVyZm9ybSBTZXJ2aWNlcyBmb3IgUGFydG5lci5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgUmVwcmVzZW50YXRpb25zLCBXYXJyYW50aWVzLCBhbmQgSW5kZW1uaXR5XG4gICAgICAgICAgPC9zcGFuPi5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG9sIHR5cGU9XCJhXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5QYXJ0bmVyczwvc3Bhbj4uXG4gICAgICAgICAgICBQYXJ0bmVycyByZXByZXNlbnQgYW5kIHdhcnJhbnQgdGhhdCB0aGV5IHNoYWxsIHByb3ZpZGUgYWxsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiwgbWF0ZXJpYWxzLCBhY2Nlc3MgYW5kIGNvb3BlcmF0aW9uIG5lY2Vzc2FyeSBmb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgdG8gcHJvdmlkZSB0aGUgU2VydmljZXMgYW5kIHNoYWxsIHByb2N1cmUgYWxsIGNvbm5lY3Rpdml0eSxcbiAgICAgICAgICAgIGVxdWlwbWVudCBhbmQgc29mdHdhcmUgYXMgbmVlZGVkIHRvIGFjY2VzcyB0aGUgU2VydmljZXMgb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgUGxhdGZvcm07IChpaSkgdGhlIFBhcnRuZXIgQ29udGVudCwgYW5kIEFpciBUYWlsb3LigJlzIHVzZSBvZlxuICAgICAgICAgICAgUGFydG5lciBDb250ZW50IGFzIGNvbnRlbXBsYXRlZCBoZXJlaW4sIHdpbGwgbm90IHZpb2xhdGUgdGhlXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHksIHByaXZhY3kgb3IgcHVibGljaXR5IG9yIG90aGVyIHJpZ2h0cyBvZiBhbnlcbiAgICAgICAgICAgIHRoaXJkIHBhcnR5OyAoaWlpKSBQYXJ0bmVycyBzaGFsbCBjb21wbHkgd2l0aCBhbGwgYXBwbGljYWJsZVxuICAgICAgICAgICAgZmVkZXJhbCwgc3RhdGUsIGFuZCBsb2NhbCBsYXdzLCBydWxlcyBhbmQgcmVndWxhdGlvbnM7IGFuZCAoaXYpXG4gICAgICAgICAgICBQYXJ0bmVycyBoYXZlIHRoZSByaWdodCB0byBwcm92aWRlIERhdGEgdG8gQWlyIFRhaWxvciBmb3IgdGhlXG4gICAgICAgICAgICBwdXJwb3NlcyBjb250ZW1wbGF0ZWQgaGVyZWluIGFuZCB0aGF0IGl0cyBjb2xsZWN0aW9uLCBwcm92aXNpb24gYW5kXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIERhdGEgaXMgY29tcGxpYW50IHdpdGggYWxsIGFwcGxpY2FibGUgbGF3cyBhbmRcbiAgICAgICAgICAgIHNlbGYtcmVndWxhdG9yeSBwcmluY2lwbGVzIGNvbmNlcm5pbmcgcHJpdmFjeSBhbmQgZGF0YSBzZWN1cml0eSBhbmRcbiAgICAgICAgICAgIHdpdGggUGFydG5lcuKAmXMgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+QWlyIFRhaWxvcjwvc3Bhbj4uIEFpclxuICAgICAgICAgICAgVGFpbG9yIHJlcHJlc2VudHMgYW5kIHdhcnJhbnRzIHRoYXQgKGkpIHRoZSBBaXIgVGFpbG9yIElQLCBpbmNsdWRpbmdcbiAgICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0byB0aGUgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwgYW5kIEFpciBUYWlsb3JcbiAgICAgICAgICAgIFBsYXRmb3JtLCBzaGFsbCBub3QgdG8gQWlyIFRhaWxvcuKAmXMga25vd2xlZGdlIGF0IHRoZSB0aW1lIG9mXG4gICAgICAgICAgICBkZWxpdmVyeSBjb250YWluIGFueSBUcm9qYW4gaG9yc2VzLCB2aXJ1c2VzLCBkYW1hZ2luZyBjb21wdXRlclxuICAgICAgICAgICAgcHJvZ3JhbW1pbmcsIHdvcm1zLCBvciB1bmRvY3VtZW50ZWQgZGlzYWJsaW5nIGRldmljZXM7IChpaSkgdGhlIEFpclxuICAgICAgICAgICAgVGFpbG9yIElQLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHRoZSBBaXIgVGFpbG9yIEFsdGVyYXRpb25zXG4gICAgICAgICAgICBQb3J0YWwgYW5kIEFpciBUYWlsb3IgUGxhdGZvcm0sIHNoYWxsIG5vdCBpbmZyaW5nZSBvbixcbiAgICAgICAgICAgIG1pc2FwcHJvcHJpYXRlIGFuZC9vciB2aW9sYXRlIHRoZSBjb3B5cmlnaHQsIHRyYWRlbWFyaywgcGF0ZW50LFxuICAgICAgICAgICAgcmlnaHQgb2YgcHJpdmFjeSBvciBwdWJsaWNpdHksIG9yIHRyYWRlIHNlY3JldCByaWdodHMgb3IgYW55IG90aGVyXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzIG9mIGFueSB0aGlyZCBQYXJ0eSwgYW5kIChpaWkpIGluXG4gICAgICAgICAgICBwcm92aWRpbmcgdGhlIFNlcnZpY2VzLCBBaXIgVGFpbG9yIHNoYWxsIGNvbXBseSB3aXRoIGFsbCBhcHBsaWNhYmxlXG4gICAgICAgICAgICBsYXdzLCBydWxlcyBhbmQgcmVndWxhdGlvbnMuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkRpc2NsYWltZXJzPC9zcGFuPi5cbiAgICAgICAgICAgIEV4Y2VwdCBhcyBzZXQgZm9ydGggaGVyZWluIGluIHRoaXMgYWdyZWVtZW50LCBBaXIgVGFpbG9yIGRvZXMgbm90XG4gICAgICAgICAgICB3YXJyYW50IHRoYXQgdGhlIHNlcnZpY2VzIHdpbGwgbWVldCBQYXJ0bmVy4oCZcyByZXF1aXJlbWVudHMgb3IgcmVzdWx0XG4gICAgICAgICAgICBpbiBhbnkgb3V0Y29tZSwgb3IgdGhhdCB0aGVpciBvcGVyYXRpb24gd2lsbCBiZSB1bmludGVycnVwdGVkIG9yXG4gICAgICAgICAgICBlcnJvci1mcmVlLiBBaXIgVGFpbG9yIGhlcmVieSBkaXNjbGFpbXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsXG4gICAgICAgICAgICB3aGV0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZCwgb3JhbCBvciB3cml0dGVuLCBpbmNsdWRpbmcgd2l0aG91dFxuICAgICAgICAgICAgbGltaXRhdGlvbiwgYWxsIGltcGxpZWQgd2FycmFudGllcyBvciB0aXRsZSwgbWVyY2hhbnRhYmlsaXR5LFxuICAgICAgICAgICAgbm9uLWluZnJpbmdlbWVudCBvciBmaXRuZXNzIGZvciBhbnkgcGFydGljdWxhciBwdXJwb3NlLiBBaXIgVGFpbG9yXG4gICAgICAgICAgICBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSB0aGlyZCBwYXJ0eSBzdXBwbGllcnMgb3IgZm9yIGFueVxuICAgICAgICAgICAgdGhpcmQgcGFydHkgcGxhdGZvcm1zLCBzb2Z0d2FyZSBvciBpbnRlbGxlY3R1YWwgcHJvcGVydHkuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkluZGVtbml0eTwvc3Bhbj4uIEVhY2hcbiAgICAgICAgICAgIFBhcnR5IHNoYWxsIGRlZmVuZCwgaW5kZW1uaWZ5IGFuZCBob2xkIGhhcm1sZXNzIHRoZSBvdGhlciBQYXJ0eSBhbmRcbiAgICAgICAgICAgIGl0cyBhZmZpbGlhdGVzLCBlbXBsb3llZXMsIHJlcHJlc2VudGF0aXZlcywgc3VjY2Vzc29ycyBhbmQgYXNzaWduc1xuICAgICAgICAgICAgZnJvbSBhbmQgYWdhaW5zdCBhbnkgYW5kIGFsbCBsb3NzZXMsIGNvc3RzLCBkYW1hZ2VzLCBsaWFiaWxpdGllc1xuICAgICAgICAgICAgKGluY2x1ZGluZyByZWFzb25hYmxlIG91dHNpZGUgYXR0b3JuZXkncyBmZWVzIGFuZCBleHBlbnNlcykgaW5cbiAgICAgICAgICAgIGNvbm5lY3Rpb24gd2l0aCBhbnkgdGhpcmQgUGFydHkgY2xhaW0sIGFjdGlvbiwgc3VpdHMsIHJlZ3VsYXRvcnlcbiAgICAgICAgICAgIGludmVzdGlnYXRpb25zIG9yIHN1YnBvZW5hcyAoY29sbGVjdGl2ZWx5LCBcIkNsYWltc1wiKSB0byB0aGUgZXh0ZW50XG4gICAgICAgICAgICBhcmlzaW5nIGZyb20gc3VjaCBpbmRlbW5pZnlpbmcgUGFydHkncyAoaSkgYnJlYWNoIG9mIGl0c1xuICAgICAgICAgICAgcmVwcmVzZW50YXRpb25zLCB3YXJyYW50aWVzIG9yIGNvdmVuYW50cyB1bmRlciB0aGlzIEFncmVlbWVudDtcbiAgICAgICAgICAgIGFuZC9vciAoaWkpIGdyb3NzIG5lZ2xpZ2VuY2Ugb3Igd2lsbGZ1bCBtaXNjb25kdWN0IG9mIHN1Y2ggUGFydHksXG4gICAgICAgICAgICBpdHMgZW1wbG95ZWVzIG9yIGFnZW50cywgcHJvdmlkZWQgdGhhdCB0aGUgaW5kZW1uaWZpZWQgUGFydHkgZ2l2ZXNcbiAgICAgICAgICAgIHRoZSBpbmRlbW5pZnlpbmcgUGFydHkgKGEpIHByb21wdCB3cml0dGVuIG5vdGljZSBvZiBhbnkgQ2xhaW1zLCAoYilcbiAgICAgICAgICAgIHNvbGUgY29udHJvbCBvdmVyIHRoZSBkZWZlbnNlIGFuZC9vciBzZXR0bGVtZW50IG9mIGFueSBDbGFpbXMsIGFuZFxuICAgICAgICAgICAgKGMpIHJlYXNvbmFibGUgY29vcGVyYXRpb24gaW4gY29ubmVjdGlvbiB3aXRoIHN1Y2ggZGVmZW5zZSBhbmQvb3JcbiAgICAgICAgICAgIHNldHRsZW1lbnQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICBMaW1pdGF0aW9uIG9uIExpYWJpbGl0eVxuICAgICAgICAgICAgPC9zcGFuPi4gSW4gbm8gZXZlbnQgc2hhbGwgZWl0aGVyIHBhcnR5IGJlIGxpYWJsZSBmb3IgYW55IGluZGlyZWN0LFxuICAgICAgICAgICAgcHVuaXRpdmUsIGluY2lkZW50YWwsIHJlbGlhbmNlLCBzcGVjaWFsLCBleGVtcGxhcnkgb3IgY29uc2VxdWVudGlhbFxuICAgICAgICAgICAgZGFtYWdlcyBpbmNsdWRpbmcsIGJ1dCBub3QgbGltaXRlZCB0bywgbG9zcyBvZiBidXNpbmVzcywgcmV2ZW51ZXMsXG4gICAgICAgICAgICBwcm9maXRzIGFuZCBnb29kd2lsbCBhbmQgQWlyIFRhaWxvcuKAmXMgYWdncmVnYXRlIGxpYWJpbGl0eSBmb3IgYW55XG4gICAgICAgICAgICBkaXJlY3QgZGFtYWdlcyBzaGFsbCBub3QgZXhjZWVkIHRoZSBmZWVzIHBhaWQgZHVyaW5nIHRoZSB0ZXJtIG9mXG4gICAgICAgICAgICB0aGlzIGFncmVlbWVudC5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19Pk1pc2NlbGxhbmVvdXM8L3NwYW4+LlxuICAgICAgICAgIFRoZSBBZ3JlZW1lbnQgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3Mgb2YgdGhlIFN0YXRlIG9mIE5ldyBZb3JrLFxuICAgICAgICAgIHdpdGhvdXQgcmVnYXJkIHRvIGNvbmZsaWN0IG9mIGxhdyBwcmluY2lwbGVzLiBBbnkgZGlzcHV0ZSBhcmlzaW5nIG91dFxuICAgICAgICAgIG9mIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGlzIGFncmVlbWVudCBzaGFsbCBiZSBicm91Z2h0IGluIHRoZVxuICAgICAgICAgIGZlZGVyYWwgb3Igc3RhdGUgY291cnRzIG9mIE5ldyBZb3JrIENvdW50eSwgTmV3IFlvcmsuIEluIHRoZSBldmVudFxuICAgICAgICAgIHRoYXQgZWl0aGVyIFBhcnR5IGlzIHByZXZlbnRlZCBmcm9tIHBlcmZvcm1pbmcsIG9yIGlzIHVuYWJsZSB0b1xuICAgICAgICAgIHBlcmZvcm0gKG90aGVyIHRoYW4gUGFydG5lcuKAmXMgcGF5bWVudCBvYmxpZ2F0aW9ucyksIGFueSBvZiBpdHNcbiAgICAgICAgICBvYmxpZ2F0aW9ucyB1bmRlciB0aGlzIEFncmVlbWVudCBkdWUgdG8gYW55IGZvcmNlIG1hamV1cmUgKGUuZy4sIGZvcmNlXG4gICAgICAgICAgb2YgbmF0dXJlLCBmaXJlLCBuYXR1cmFsIGRpc2FzdGVyLCBhY2NpZGVudCwgcmlvdHMsIGFjdHMgb2ZcbiAgICAgICAgICBnb3Zlcm5tZW50LCBhY3RzIG9mIHdhciBvciB0ZXJyb3Jpc20sIGZhaWx1cmUgb2YgdHJhbnNwb3J0YXRpb24gb3JcbiAgICAgICAgICBjb21tdW5pY2F0aW9ucyBvciBvZiBzdXBwbGllcnMgb2YgZ29vZHMgb3Igc2VydmljZXMsIGNoYW5nZXMgdG8gYW55XG4gICAgICAgICAgdGhpcmQgUGFydHkgcGxhdGZvcm1zLCB0cmFuc3BvcnQgZmFpbHVyZXMsIGFueSB1c2FnZSByZXN0cmljdGlvbnNcbiAgICAgICAgICBpbXBvc2VkIGJ5IGFueSBzdWNoIHRoaXJkIFBhcnR5IHBsYXRmb3Jtcywgb3IgYW55IGRlbGF5cyBvciBvdXRhZ2VzXG4gICAgICAgICAgYXJpc2luZyBpbiBjb25uZWN0aW9uIHdpdGggc3VjaCB0aGlyZCBQYXJ0eSBwbGF0Zm9ybXMsIHRoZSBtYWxpY2lvdXNcbiAgICAgICAgICBhY3RzIG9mIHRoaXJkIFBhcnRpZXMgKGUuZy4gY3liZXItYXR0YWNrcyksIG9yIGFueSBvdGhlciBjYXVzZSBiZXlvbmRcbiAgICAgICAgICB0aGUgcmVhc29uYWJsZSBjb250cm9sIG9mIHN1Y2ggUGFydHkpLCB0aGUgYWZmZWN0ZWQgUGFydHkgc2hhbGwgZ2l2ZVxuICAgICAgICAgIHdyaXR0ZW4gbm90aWNlIHRoZXJlb2YgdG8gdGhlIG90aGVyIFBhcnR5IGFuZCBpdHMgcGVyZm9ybWFuY2Ugc2hhbGwgYmVcbiAgICAgICAgICBleHRlbmRlZCBmb3IgdGhlIHBlcmlvZCBvZiBkZWxheSBvciBpbmFiaWxpdHkgdG8gcGVyZm9ybSBkdWUgdG8gc3VjaFxuICAgICAgICAgIG9jY3VycmVuY2UuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNPZlNlcnZpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9UZXJtc09mU2VydmljZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvU3RhZ2VPbmVJZk5vQWx0ZXJhdGlvbnMocHJvcHMpIHtcbiAgY29uc3QgYWx0ZXJhdGlvbnNDb3VudCA9IHByb3BzLmNhcnQuZ2FybWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgcmV0dXJuIChwcmV2ICs9IGN1cnIuYWx0ZXJhdGlvbnMubGVuZ3RoKTtcbiAgfSwgMCk7XG5cbiAgaWYgKCFhbHRlcmF0aW9uc0NvdW50ID4gMCkge1xuICAgIHByb3BzLnJlbmRlclN0YWdlT25lKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlcnNIZWxwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBBcnJvd0J1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPVwiYXJyb3ctYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgeyc8ICd9IHt0aGlzLnByb3BzLnRleHR9XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0J1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Fycm93QnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsZWFySW1hZ2UgfSBmcm9tICcuLi9pbWFnZXMvJztcblxuY2xhc3MgQ2xlYXJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNsZWFyLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgIDxpbWcgc3JjPXtjbGVhckltYWdlfSBjbGFzc05hbWU9XCJjbGVhci1pbWFnZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsZWFyLXRleHRcIj5DbGVhcjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsZWFyQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvQ2xlYXJCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90ZXNJbWFnZSB9IGZyb20gJy4uL2ltYWdlcy8nO1xuXG5jbGFzcyBPcmRlck5vdGVzQmFza2V0QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJjbGVhci1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICA8aW1nIHNyYz17bm90ZXNJbWFnZX0gY2xhc3NOYW1lPVwibm90ZXMtaW1hZ2VcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3Rlcy1idXR0b24tdGV4dFwiPkFkZCBPcmRlciBOb3Rlczwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyTm90ZXNCYXNrZXRCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9PcmRlck5vdGVzQmFza2V0QnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgcmVtb3ZlR2FybWVudEZyb21DYXJ0LFxuICB1cGRhdGVDYXJ0Tm90ZXMsXG4gIGNyZWF0ZU9yVmFsaWRhdGVDdXN0b21lcixcbiAgc2V0Q2FydEN1c3RvbWVyLFxuICBzZXRHcm93bGVyLFxuICBzdWJtaXRPcmRlcixcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBWYWxpZGF0ZUVtYWlsLFxuICBWYWxpZGF0ZVBob25lLFxuICBWYWxpZGF0ZVppcCxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9CdXR0b24nO1xuaW1wb3J0IEFycm93QnV0dG9uIGZyb20gJy4uLy4uL0Fycm93QnV0dG9uJztcbmltcG9ydCBPcmRlck5vdGVzQmFza2V0QnV0dG9uIGZyb20gJy4uLy4uL09yZGVyTm90ZXNCYXNrZXRCdXR0b24nO1xuaW1wb3J0IHsgZ2V0VG90YWwgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYmFza2V0SW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9pbWFnZXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydDogc3RvcmUuY2FydCxcbiAgICBjYXJ0Q3VzdG9tZXI6IHN0b3JlLmNhcnRDdXN0b21lcixcbiAgICBjdXJyZW50U3RvcmU6IHN0b3JlLmN1cnJlbnRTdG9yZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZW1vdmVHYXJtZW50RnJvbUNhcnQsXG4gICAgICB1cGRhdGVDYXJ0Tm90ZXMsXG4gICAgICBzZXRDYXJ0Q3VzdG9tZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgICAgc3VibWl0T3JkZXIsXG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2FydDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50U3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY2FydEN1c3RvbWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHJlbW92ZUdhcm1lbnRGcm9tQ2FydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgdXBkYXRlQ2FydE5vdGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRHcm93bGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRDYXJ0Q3VzdG9tZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbmRlclN0YWdlT25lOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBQYXJlbnQgQ29tcG9uZW50XG4gICAgc3RhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCwgLy8gUGFyZW50IENvbXBvbmVudFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dOb3RlczogZmFsc2UsXG4gICAgICBvcmRlckNvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlck9yZGVyQ29tcGxldGVSZWRpcmVjdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcmRlckNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9vcmRlcnMvbmV3L29yZGVyLWNvbmZpcm1hdGlvblwiIC8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckdhcm1lbnRBbHRlcmF0aW9ucyhnYXJtZW50KSB7XG4gICAgLy8gdGhpcyBnYXJtZW50IGlzIGJlaW5nIGluamVjdGVkIGZyb20gdGhlIG1lbnUsIG5vdCB0aGUgQ2FydFxuICAgIGlmIChnYXJtZW50LmFsdGVyYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBnYXJtZW50LmFsdGVyYXRpb25zLm1hcCgoYWx0LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcnQtYWx0ZXJhdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4+e2FsdC50aXRsZX08L3NwYW4+eycgJ31cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nUmlnaHQ6ICcyNXB4JyB9fT5cbiAgICAgICAgICAgICAgJHthbHQucHJpY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuICB9XG5cbiAgY29uZmlybVJlbW92ZUZyb21DYXJ0ID0gaW5kZXggPT4ge1xuICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZ2FybWVudD8nKSkge1xuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVHYXJtZW50RnJvbUNhcnQoaW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJDYXJ0SXRlbXMocHJvcHMpIHtcbiAgICBjb25zdCB7IGdhcm1lbnRzIH0gPSBwcm9wcy5jYXJ0O1xuICAgIGNvbnN0IGdhcm1lbnRMaXN0ID0gZ2FybWVudHM7XG4gICAgY29uc3QgeyByZW5kZXJTZWxlY3RBbHRlcmF0aW9ucyB9ID0gcHJvcHM7XG4gICAgaWYgKGdhcm1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBnYXJtZW50TGlzdC5tYXAoKGdhcm1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTVweCcgfX0+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydC1pdGVtIGNhcnQtaXRlbS10aXRsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVuZGVyU2VsZWN0QWx0ZXJhdGlvbnMoaW5kZXgsIGdhcm1lbnQsIGdhcm1lbnQuYWx0ZXJhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Z2FybWVudC50aXRsZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jb25maXJtUmVtb3ZlRnJvbUNhcnQoaW5kZXgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERFTEVURVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzhweCcsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyLjgsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnIHwgJ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlbmRlclNlbGVjdEFsdGVyYXRpb25zKGluZGV4LCBnYXJtZW50LCBnYXJtZW50LmFsdGVyYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtaXRlbSBlZGl0LWNhcnQtaXRlbS1idXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRURJVFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydC1pdGVtXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclNlbGVjdEFsdGVyYXRpb25zKGluZGV4LCBnYXJtZW50LCBnYXJtZW50LmFsdGVyYXRpb25zKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyR2FybWVudEFsdGVyYXRpb25zKGdhcm1lbnQpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5VG9DaGVja291dCgpIHtcbiAgICBjb25zdCB7IGNhcnRDdXN0b21lciwgY2FydDogeyBzaGlwVG9TdG9yZSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZSxcbiAgICAgIHBob25lLFxuICAgICAgZW1haWwsXG4gICAgICBzdHJlZXQsXG4gICAgICB1bml0LFxuICAgICAgY2l0eSxcbiAgICAgIHN0YXRlX3Byb3ZpbmNlLFxuICAgICAgemlwX2NvZGUsXG4gICAgICBhZ3JlZXNfdG9fMDFfMTBfMjAxOCxcbiAgICB9ID0gY2FydEN1c3RvbWVyO1xuXG4gICAgaWYgKFxuICAgICAgZmlyc3RfbmFtZSAmJlxuICAgICAgbGFzdF9uYW1lICYmXG4gICAgICBWYWxpZGF0ZVBob25lKHBob25lKSAmJlxuICAgICAgVmFsaWRhdGVFbWFpbChlbWFpbCkgJiZcbiAgICAgIGFncmVlc190b18wMV8xMF8yMDE4ICYmXG4gICAgICAvLyBDb25kaXRpb24gQmVsb3c6XG4gICAgICAvLyBUYWlsb3Igd2lsbCBzaGlwIHRvIHN0b3JlLCBPUiBjdXN0b21lciBoYXMgcHJvdmlkZWQgYWRkcmVzc1xuICAgICAgKHNoaXBUb1N0b3JlIHx8XG4gICAgICAgIChzdHJlZXQgJiYgY2l0eSAmJiBzdGF0ZV9wcm92aW5jZSAmJiBWYWxpZGF0ZVppcCh6aXBfY29kZSkpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZvclZhbGlkQ3VzdG9tZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2FydEN1c3RvbWVyLFxuICAgICAgcmVuZGVyQ2hlY2tvdXQsXG4gICAgICBzZXRDYXJ0Q3VzdG9tZXIsXG4gICAgICByZW5kZXJPcmRlckRldGFpbHMsXG4gICAgICBzZXRHcm93bGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY3JlYXRlT3JWYWxpZGF0ZUN1c3RvbWVyKGNhcnRDdXN0b21lcikudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmJvZHkgJiYgcmVzLmRhdGEuYm9keS5lcnJvcnMpIHtcbiAgICAgICAgY29uc3Qga2luZCA9ICd3YXJuaW5nJztcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcy5kYXRhLmJvZHkuZXJyb3JzWzBdO1xuICAgICAgICBzZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgcmVuZGVyT3JkZXJEZXRhaWxzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDYXJ0Q3VzdG9tZXIocmVzLmRhdGEuYm9keSk7XG4gICAgICAgIHJlbmRlckNoZWNrb3V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc3VibWl0T3JkZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2V0TG9hZGVyLFxuICAgICAgc3VibWl0T3JkZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgICAgcmVuZGVyT3JkZXJEZXRhaWxzLFxuICAgICAgcmVtb3ZlTG9hZGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgc2V0TG9hZGVyKCk7XG5cbiAgICBzdWJtaXRPcmRlcih7IC4uLnRoaXMucHJvcHMgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyb3JzKSB7XG4gICAgICAgICAgY29uc3Qga2luZCA9ICd3YXJuaW5nJztcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzLm1lc3NhZ2U7XG4gICAgICAgICAgc2V0R3Jvd2xlcih7IG1lc3NhZ2UsIGtpbmQgfSk7XG4gICAgICAgICAgcmVuZGVyT3JkZXJEZXRhaWxzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyQ29tcGxldGVkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHJlbW92ZUxvYWRlcigpKTtcbiAgfVxuXG4gIHJlbmRlclN1Ym1pdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydC1jYXJ0LWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdE9yZGVyKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LW9yZGVyLWJ1dHRvblwiXG4gICAgICAgICAgdGV4dD1cIlNVQk1JVCBPUkRFUlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEFycm93QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5yZW5kZXJPcmRlckRldGFpbHN9XG4gICAgICAgICAgdGV4dD1cIkVkaXQgY3VzdG9tZXIgZGV0YWlsc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlck5leHRCdXR0b24ocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXJ0OiB7IGdhcm1lbnRzIH0sXG4gICAgICByZW5kZXJPcmRlckRldGFpbHMsXG4gICAgICByZW5kZXJTdGFnZU9uZSxcbiAgICAgIHN0YWdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2hlY2tvdXRCdXR0b24gPSAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hlY2tGb3JWYWxpZEN1c3RvbWVyfVxuICAgICAgICB0ZXh0PVwiQ0hFQ0tPVVRcIlxuICAgICAgICBjbGFzc05hbWU9XCJiaWctYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGFkZGRNb3JlSXRlbXMgPSAoXG4gICAgICA8QXJyb3dCdXR0b24gb25DbGljaz17cmVuZGVyU3RhZ2VPbmV9IHRleHQ9XCJBZGQgbW9yZSBpdGVtc1wiIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGVkaXRPcmRlckRldGFpbHMgPSAoXG4gICAgICA8QXJyb3dCdXR0b24gb25DbGljaz17cmVuZGVyT3JkZXJEZXRhaWxzfSB0ZXh0PVwiRWRpdCBPcmRlciBEZXRhaWxzXCIgLz5cbiAgICApO1xuXG4gICAgaWYgKGdhcm1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzdGFnZSA9PT0gNCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJTdWJtaXRCdXR0b25zKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVhZHlUb0NoZWNrb3V0KCkgJiYgc3RhZ2UgIT09IDMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnQtY2FydC1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2NoZWNrb3V0QnV0dG9ufVxuICAgICAgICAgICAge2VkaXRPcmRlckRldGFpbHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVhZHlUb0NoZWNrb3V0KHRoaXMucHJvcHMpICYmIHN0YWdlID09PSAzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0LWNhcnQtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtjaGVja291dEJ1dHRvbn1cbiAgICAgICAgICAgIHthZGRkTW9yZUl0ZW1zfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5yZWFkeVRvQ2hlY2tvdXQocHJvcHMpICYmIHByb3BzLnN0YWdlID09PSAzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0LWNhcnQtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGVja0ZvclZhbGlkQ3VzdG9tZXJ9XG4gICAgICAgICAgICAgIHRleHQ9XCJDSEVDS09VVFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaWctYnV0dG9uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7YWRkZE1vcmVJdGVtc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc3RhZ2UgPT09IDIgfHwgcHJvcHMuc3RhZ2UgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17cmVuZGVyT3JkZXJEZXRhaWxzfSB0ZXh0PVwiQWRkIE9yZGVyIERldGFpbHNcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9yZGVyTm90ZXMocHJvcHMpIHtcbiAgICBjb25zdCB7IHNob3dOb3RlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+XG4gICAgICAgIDxPcmRlck5vdGVzQmFza2V0QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dOb3RlczogIXNob3dOb3RlcyB9KX1cbiAgICAgICAgLz5cblxuICAgICAgICB7c2hvd05vdGVzID8gKFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlscy1ub3Rlcy10ZXh0YXJlYVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYXJ0Lm5vdGVzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy51cGRhdGVDYXJ0Tm90ZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY29scz17MzZ9XG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSXMgdGhpcyBhIHNwZWNpYWwgb3JkZXIgb3IgY3VzdG9tZXI/IEVudGVyIGFueSBpbXBvcnRhbnQgbm90ZXMgYWJvdXQgdGhlIG92ZXJhbGwgb3JkZXIgaGVyZSB0byBoZWxwIHVzIHNlcnZlIHlvdSBiZXN0IVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2FydCwgc3RhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNhcnQuZ2FybWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJ0LXRpdGxlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YmFza2V0SW1hZ2V9IGNsYXNzTmFtZT1cImNhcnQtaWNvblwiIC8+IEJBU0tFVFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImNhcnQtbGluZVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1zXCI+e3RoaXMucmVuZGVyQ2FydEl0ZW1zKHRoaXMucHJvcHMpfTwvZGl2PlxuXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImNhcnQtbGluZVwiIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcgfX0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Ub3RhbDogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke2dldFRvdGFsKGNhcnQuZ2FybWVudHMpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJjYXJ0LWxpbmVcIiAvPlxuXG4gICAgICAgICAge3RoaXMucmVuZGVyT3JkZXJOb3Rlcyh0aGlzLnByb3BzKX1cblxuICAgICAgICAgIHt0aGlzLnJlbmRlck5leHRCdXR0b24odGhpcy5wcm9wcyl9XG5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcmRlckNvbXBsZXRlUmVkaXJlY3QoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L0NhcnQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGZvcm1hdFBob25lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZm9ybWF0JztcbmltcG9ydCB7IHJlZGlyZWN0VG9TdGFnZU9uZUlmTm9BbHRlcmF0aW9ucyB9IGZyb20gJy4uL29yZGVyc0hlbHBlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICAgIGNhcnRDdXN0b21lcjogc3RvcmUuY2FydEN1c3RvbWVyLFxuICAgIGN1cnJlbnRTdG9yZTogc3RvcmUuY3VycmVudFN0b3JlLFxuICB9O1xufTtcblxuY2xhc3MgQ2hlY2tvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNhcnRDdXN0b21lcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50U3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY2FydDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICByZW5kZXJPcmRlckRldGFpbHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIFBhcmVudCBDb21wb25lbnRcbiAgICByZW5kZXJTdGFnZU9uZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gUGFyZW50IENvbXBvbmVudFxuICB9O1xuXG4gIHJlbmRlckN1c3RvbWVySW5mbygpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXJ0Q3VzdG9tZXI6IHsgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG9uZSwgZW1haWwgfSxcbiAgICAgIGNhcnQ6IHsgc2hpcFRvU3RvcmUgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q3VzdG9tZXIgSW5mbzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7Zmlyc3RfbmFtZX0ge2xhc3RfbmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD57Zm9ybWF0UGhvbmUocGhvbmUpfTwvcD5cbiAgICAgICAgPHA+e2VtYWlsfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTaGlwVG9DdXN0b21lcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lLFxuICAgICAgc3RyZWV0LFxuICAgICAgdW5pdCxcbiAgICAgIGNpdHksXG4gICAgICBzdGF0ZV9wcm92aW5jZSxcbiAgICAgIHppcF9jb2RlLFxuICAgIH0gPSB0aGlzLnByb3BzLmNhcnRDdXN0b21lcjtcblxuICAgIGxldCBhZGRyZXNzX3R3bztcbiAgICBpZiAodW5pdCkge1xuICAgICAgYWRkcmVzc190d28gPSB1bml0Lmxlbmd0aCA+IDAgPyA8cD57dW5pdH08L3A+IDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZHJlc3NfdHdvID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5TaGlwIFRvIEN1c3RvbWVyOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtmaXJzdF9uYW1lfSB7bGFzdF9uYW1lfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPntzdHJlZXR9PC9wPlxuICAgICAgICB7YWRkcmVzc190d299XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtjaXR5fSwge3N0YXRlX3Byb3ZpbmNlfSB7emlwX2NvZGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTaGlwVG9TdG9yZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgc3RyZWV0LFxuICAgICAgc3RyZWV0X3R3byxcbiAgICAgIGNpdHksXG4gICAgICBzdGF0ZV9wcm92aW5jZSxcbiAgICAgIHppcF9jb2RlLFxuICAgIH0gPSB0aGlzLnByb3BzLmN1cnJlbnRTdG9yZTtcbiAgICBsZXQgYWRkcmVzc190d287XG5cbiAgICBpZiAoc3RyZWV0X3R3bykge1xuICAgICAgYWRkcmVzc190d28gPSBzdHJlZXRfdHdvLmxlbmd0aCA+IDAgPyA8cD57c3RyZWV0X3R3b308L3A+IDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZHJlc3NfdHdvID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5TaGlwIFRvIFN0b3JlOjwvaDI+XG4gICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgICAgPHA+e3N0cmVldH08L3A+XG4gICAgICAgIHthZGRyZXNzX3R3b31cbiAgICAgICAgPHA+XG4gICAgICAgICAge2NpdHl9LCB7c3RhdGVfcHJvdmluY2V9IHt6aXBfY29kZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNoaXBwaW5nSW5mbygpIHtcbiAgICBjb25zdCB7IGNhcnQ6IHsgc2hpcFRvU3RvcmUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2hpcFRvU3RvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNoaXBUb1N0b3JlKCk7XG4gICAgfSBlbHNlIGlmICghc2hpcFRvU3RvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNoaXBUb0N1c3RvbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2FydDogeyBnYXJtZW50cyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtyZWRpcmVjdFRvU3RhZ2VPbmVJZk5vQWx0ZXJhdGlvbnModGhpcy5wcm9wcyl9XG4gICAgICAgICAge3RoaXMucmVuZGVyQ3VzdG9tZXJJbmZvKCl9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2hpcHBpbmdJbmZvKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9DaGVja291dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhvd1RvUGluTW9kYWwgZnJvbSAnLi9tb2RhbHMvSG93VG9QaW5Nb2RhbCc7XG5cbmNvbnN0IHJlbmRlckFsdGVyYXRpb25zID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGdhcm1lbnQsIGFsdGVyYXRpb25zIH0gPSBwcm9wcztcbiAgY29uc3QgYWx0c0Zvckdhcm1lbnQgPSBhbHRlcmF0aW9ucy5maWx0ZXIoXG4gICAgYWx0ID0+IGFsdC5nYXJtZW50SWQgPT09IGdhcm1lbnQuaWRcbiAgKTtcbiAgcmV0dXJuIGFsdHNGb3JHYXJtZW50Lm1hcCgoYWx0LCBpbmRleCkgPT4ge1xuICAgIC8vIGFycmF5IG9mIHNlbGVjdGVkIGFsdGVyYXRpb24gaWRzIC0gcHJvcHMuc2VsZWN0ZWRBbHRlcmF0aW9uc1xuXG4gICAgLy8gYXJyYXkgb2YgdGhvc2UgYWx0ZXJhdGlvbnMgdnZ2XG4gICAgY29uc3QgYXJyID0gcHJvcHMuc2VsZWN0ZWRBbHRlcmF0aW9ucy5tYXAoYWx0ID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5hbHRlcmF0aW9ucy5maWx0ZXIoYSA9PiBhLmlkID09PSBhbHQpWzBdO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWx0VHlwZXMgPSBhcnIubWFwKGFsdCA9PiBhbHQudHlwZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IHByb3BzLnNlbGVjdGVkQWx0ZXJhdGlvbnMuaW5jbHVkZXMoYWx0LmlkKVxuICAgICAgPyAndW5jbGlja2FibGUgYWx0ZXJhdGlvbi1jYXJkJ1xuICAgICAgOiAnYWx0ZXJhdGlvbi1jYXJkJztcblxuICAgIGNvbnN0IGRpc2FibGVkID1cbiAgICAgIGFsdFR5cGVzLmluY2x1ZGVzKGFsdC50eXBlKSAmJiAhcHJvcHMuc2VsZWN0ZWRBbHRlcmF0aW9ucy5pbmNsdWRlcyhhbHQuaWQpXG4gICAgICAgID8gJ2Rpc2FibGVkLWFsdCdcbiAgICAgICAgOiAnJztcblxuICAgIGNvbnN0IHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWRBbHRlcmF0aW9ucy5pbmNsdWRlcyhhbHQuaWQpXG4gICAgICA/ICdzZWxlY3RlZC1hbHQnXG4gICAgICA6ICcnO1xuXG4gICAgbGV0IGhhbmRsZUNsaWNrO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiBwcm9wcy5oYW5kbGVTZWxlY3QoYWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2Ake2Rpc2FibGVkfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGV9ICR7c2VsZWN0ZWR9YH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxoMz57YWx0LnRpdGxlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWhvdy10by1waW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFsdC1wcmljZS1pbmZvXCI+JHthbHQucHJpY2UudG9GaXhlZCgyKX08L2gzPlxuICAgICAgICAgIDxIb3dUb1Bpbk1vZGFsXG4gICAgICAgICAgICBpbWFnZT17YWx0Lmhvd1RvUGlufVxuICAgICAgICAgICAgdGl0bGU9e2FsdC50aXRsZX1cbiAgICAgICAgICAgIGluc3RydWN0aW9ucz17YWx0Lmluc3RydWN0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQWRkVG9DYXJ0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IHByb3BzLnNlbGVjdGVkQWx0ZXJhdGlvbnMubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgaWYgKHR5cGVvZiBwcm9wcy5nYXJtZW50SW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIlxuICAgICAgICB2YWx1ZT1cIlVwZGF0ZSBHYXJtZW50XCJcbiAgICAgICAgb25DbGljaz17cHJvcHMudXBkYXRlR2FybWVudH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWJ1dHRvblwiXG4gICAgICAgIHZhbHVlPVwiQWRkIFRvIEJhc2tldFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFkZFRvQ2FydH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgU2VsZWN0QWx0ZXJhdGlvbnMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbHRlcmF0aW9uLXNlbGVjdFwiPlxuICAgICAgPGJyIC8+XG4gICAgICB7cmVuZGVyQWx0ZXJhdGlvbnMocHJvcHMpfVxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1idXR0b25zIGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT1cIkJhY2tcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnJlbmRlclN0YWdlT25lfVxuICAgICAgICAvPlxuICAgICAgICB7cmVuZGVyQWRkVG9DYXJ0KHByb3BzKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGFsdGVyYXRpb25zOiBzdG9yZS5hbHRlcmF0aW9ucy5hbHRlcmF0aW9ucyxcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlbGVjdEFsdGVyYXRpb25zKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9uZXcvU2VsZWN0QWx0ZXJhdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZW5kZXJHYXJtZW50cyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBnYXJtZW50cyB9ID0gcHJvcHM7XG4gIHJldHVybiBnYXJtZW50cy5tYXAoKGdhcm1lbnQsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZ2FybWVudC1jYXJkXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlU2VsZWN0KGdhcm1lbnQpfVxuICAgICAgPlxuICAgICAgICA8aDI+e2dhcm1lbnQudGl0bGUudG9VcHBlckNhc2UoKX08L2gyPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdhcm1lbnQtaW1hZ2VcIiBzcmM9e2dhcm1lbnQuaW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IFNlbGVjdEdhcm1lbnQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWdhcm1lbnRcIj57UmVuZGVyR2FybWVudHMocHJvcHMpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0R2FybWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9uZXcvU2VsZWN0R2FybWVudC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByaXZhY3lQb2xpY3kgZnJvbSAnLi4vLi4vLi4vdGVybXMvUHJpdmFjeVBvbGljeSc7XG5cbmNsYXNzIEFjY2VwdFByaXZhY3lQb2xpY3lNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbElzT3BlbjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxJc09wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxJc09wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctdG8tcGluLW1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzQwcHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBbGVncmV5YScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0bz1cIiNcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfVxuICAgICAgICA+XG4gICAgICAgICAgU2VlIFByaXZhY3kgUG9saWN5IEhlcmVcbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbElzT3Blbn1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyB9fVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPVwiQ0xPU0VcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFByaXZhY3lQb2xpY3kgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjZXB0UHJpdmFjeVBvbGljeU1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9tb2RhbHMvQWNjZXB0UHJpdmFjeVBvbGljeU1vZGFsLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyBpbmZvSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbWFnZXMnO1xuXG5jbGFzcyBIb3dUb1Bpbk1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vZGFsSXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbElzT3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbElzT3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy10by1waW4tbW9kYWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1leWVcIlxuICAgICAgICAgIGFsdD1cImhvdy10by1waW5cIlxuICAgICAgICAgIHNyYz17aW5mb0ltYWdlfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbElzT3Blbn1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyB9fVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPVwiQ0xPU0VcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvdy10by1waW5cIj57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG93LXRvLXBpblwiPnt0aGlzLnByb3BzLmluc3RydWN0aW9uc308L3A+XG5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG93LXRvLXBpbi1pbWFnZVwiXG4gICAgICAgICAgICAgIGFsdD1cImhvdy10by1waW4taW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3dUb1Bpbk1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9tb2RhbHMvSG93VG9QaW5Nb2RhbC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgdXBkYXRlQ2FydEN1c3RvbWVyLCByZXNldENhcnRDdXN0b21lciB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZm9ybWF0UGhvbmUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mb3JtYXQnO1xuaW1wb3J0IEZpbmRDdXN0b21lckJ5UGhvbmUgZnJvbSAnLi9GaW5kQ3VzdG9tZXJCeVBob25lJztcblxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuLi8uLi8uLi9Gb3JtRmllbGQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uLy4uLy4uL0NoZWNrYm94JztcbmltcG9ydCBDbGVhckJ1dHRvbiBmcm9tICcuLi8uLi8uLi9DbGVhckJ1dHRvbic7XG5pbXBvcnQgQWNjZXB0UHJpdmFjeVBvbGljeU1vZGFsIGZyb20gJy4uL21vZGFscy9BY2NlcHRQcml2YWN5UG9saWN5TW9kYWwnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydEN1c3RvbWVyOiBzdG9yZS5jYXJ0Q3VzdG9tZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgdXBkYXRlQ2FydEN1c3RvbWVyLFxuICAgICAgcmVzZXRDYXJ0Q3VzdG9tZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgQ3VzdG9tZXJJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VzdG9tZXJFeGlzdHM6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2FydEN1c3RvbWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHVwZGF0ZUNhcnRDdXN0b21lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgcmVzZXRDYXJ0Q3VzdG9tZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICB9O1xuXG4gIGZpcnN0TmFtZShmaXJzdF9uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgdmFsdWU9e2ZpcnN0X25hbWV9XG4gICAgICAgIGZpZWxkTmFtZT17J2ZpcnN0X25hbWUnfVxuICAgICAgICB0aXRsZT17J0ZpcnN0IE5hbWUnfVxuICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzLWlucHV0XCJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudXBkYXRlQ2FydEN1c3RvbWVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgbGFzdE5hbWUobGFzdF9uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgdmFsdWU9e2xhc3RfbmFtZX1cbiAgICAgICAgZmllbGROYW1lPXsnbGFzdF9uYW1lJ31cbiAgICAgICAgdGl0bGU9eydMYXN0IE5hbWUnfVxuICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzLWlucHV0XCJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudXBkYXRlQ2FydEN1c3RvbWVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcGhvbmUocGhvbmUpIHtcbiAgICBjb25zdCBkaXNwbGF5UGhvbmUgPSBmb3JtYXRQaG9uZShwaG9uZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgdmFsdWU9e2Rpc3BsYXlQaG9uZX1cbiAgICAgICAgZmllbGROYW1lPXsncGhvbmUnfVxuICAgICAgICB0aXRsZT17J01vYmlsZSBQaG9uZSd9XG4gICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHMtaW5wdXRcIlxuICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy51cGRhdGVDYXJ0Q3VzdG9tZXJ9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBlbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgZmllbGROYW1lPXsnZW1haWwnfVxuICAgICAgICB0aXRsZT17J0VtYWlsJ31cbiAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlscy1pbnB1dFwiXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnVwZGF0ZUNhcnRDdXN0b21lcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0Q2FydEN1c3RvbWVyQW5kVXBkYXRlQ3VzdG9tZXJFeGlzdHMgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yZXNldENhcnRDdXN0b21lcigpO1xuICAgIHRoaXMudXBkYXRlQ3VzdG9tZXJFeGlzdHMobnVsbCk7XG4gIH07XG5cbiAgcHJpdmFjeVBvbGljeSA9IGFncmVlcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGVja2JveFxuICAgICAgICBmaWVsZE5hbWU9eydhZ3JlZXNfdG9fMDFfMTBfMjAxOCd9XG4gICAgICAgIHRleHQ9eydDdXN0b21lciBBZ3JlZXMgdG8gUHJpdmFjeSBQb2xpY3knfVxuICAgICAgICBjaGVja2VkPXthZ3JlZXN9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnVwZGF0ZUNhcnRDdXN0b21lcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICB1cGRhdGVDdXN0b21lckV4aXN0cyA9IHZhbHVlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tZXJFeGlzdHM6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXJ0Q3VzdG9tZXI6IHtcbiAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBwaG9uZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGlkLFxuICAgICAgICBhZ3JlZXNfdG9fMDFfMTBfMjAxOCxcbiAgICAgIH0sXG4gICAgICB1cGRhdGVDYXJ0Q3VzdG9tZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGN1c3RvbWVyRXhpc3RzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGN1c3RvbWVyRXhpc3RzID09PSBudWxsICYmICFpZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZpbmRDdXN0b21lckJ5UGhvbmUgdXBkYXRlQ3VzdG9tZXJFeGlzdHM9e3RoaXMudXBkYXRlQ3VzdG9tZXJFeGlzdHN9IC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtjdXN0b21lckV4aXN0cyB8fCBpZCA/ICcnIDogPGg0PkNyZWF0ZSBDdXN0b21lcjo8L2g0Pn1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucGhvbmUocGhvbmUpfVxuICAgICAgICAgICAge3RoaXMuZW1haWwoZW1haWwpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5maXJzdE5hbWUoZmlyc3RfbmFtZSl9XG4gICAgICAgICAgICB7dGhpcy5sYXN0TmFtZShsYXN0X25hbWUpfVxuICAgICAgICAgICAgPENsZWFyQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVzZXRDYXJ0Q3VzdG9tZXJBbmRVcGRhdGVDdXN0b21lckV4aXN0cygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJjYXJ0LWxpbmVcIiAvPlxuXG4gICAgICAgICAgICB7dGhpcy5wcml2YWN5UG9saWN5KGFncmVlc190b18wMV8xMF8yMDE4KX1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTEwcHgnLCBtYXJnaW5Cb3R0b206ICctMTBweCcgfX0+XG4gICAgICAgICAgICAgIDxBY2NlcHRQcml2YWN5UG9saWN5TW9kYWwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY2FydC1saW5lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDdXN0b21lckluZm8pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9vcmRlckRldGFpbHMvQ3VzdG9tZXJJbmZvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBmaW5kT3JDcmVhdGVDdXN0b21lcixcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG4gIHNldEdyb3dsZXIsXG4gIHNldENhcnRDdXN0b21lcixcbiAgdXBkYXRlQ2FydEN1c3RvbWVyLFxufSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IFZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRQaG9uZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2Zvcm1hdCc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vLi4vLi4vRm9ybUZpZWxkJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHNldExvYWRlcixcbiAgICAgIHJlbW92ZUxvYWRlcixcbiAgICAgIHNldEdyb3dsZXIsXG4gICAgICBzZXRDYXJ0Q3VzdG9tZXIsXG4gICAgICB1cGRhdGVDYXJ0Q3VzdG9tZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgRmluZEN1c3RvbWVyQnlQaG9uZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIGN1c3RvbWVyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNldExvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgcmVtb3ZlTG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRHcm93bGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRDYXJ0Q3VzdG9tZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZUN1c3RvbWVyRXhpc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgfTtcblxuICB1cGRhdGVQaG9uZSA9IChmaWVsZCwgcGhvbmUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtmaWVsZF06IHBob25lLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlclN1Ym1pdEJ1dHRvbihwaG9uZSkge1xuICAgIGlmIChWYWxpZGF0ZVBob25lKHBob25lKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VhcmNoRm9yQ3VzdG9tZXJCeVBob25lKHBob25lKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoRm9yQ3VzdG9tZXJCeVBob25lKHBob25lKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2V0TG9hZGVyLFxuICAgICAgcmVtb3ZlTG9hZGVyLFxuICAgICAgc2V0R3Jvd2xlcixcbiAgICAgIHVwZGF0ZUN1c3RvbWVyRXhpc3RzLFxuICAgICAgc2V0Q2FydEN1c3RvbWVyLFxuICAgICAgdXBkYXRlQ2FydEN1c3RvbWVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgc2V0TG9hZGVyKCk7XG4gICAgZmluZE9yQ3JlYXRlQ3VzdG9tZXIoeyBwaG9uZSB9KS50aGVuKHJlcyA9PiB7XG4gICAgICByZW1vdmVMb2FkZXIoKTtcblxuICAgICAgY29uc3QgeyBib2R5OiB7IHN0YXR1cywgaWQgfSwgYm9keTogY3VzdG9tZXIgfSA9IHJlcy5kYXRhO1xuXG4gICAgICBpZiAoc3RhdHVzICYmIHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHVwZGF0ZUNhcnRDdXN0b21lcigncGhvbmUnLCBwaG9uZSk7XG4gICAgICAgIHVwZGF0ZUN1c3RvbWVyRXhpc3RzKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgY29uc3Qga2luZCA9ICdzdWNjZXNzJztcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdGb3VuZCBDdXN0b21lcic7XG4gICAgICAgIHNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgICAgICBzZXRDYXJ0Q3VzdG9tZXIoY3VzdG9tZXIpO1xuICAgICAgICB1cGRhdGVDdXN0b21lckV4aXN0cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBob25lLCBjdXN0b21lciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkaXNwbGF5UGhvbmUgPSBmb3JtYXRQaG9uZShwaG9uZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAvLyBwaG9uZS5yZXBsYWNlIHJlZ2V4IHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3MDY2MzgwLzQ4NTk4MTggLSBKQ01cbiAgICAgICAgICAvLyBwaG9uZS5yZXBsYWNlKC9eKFxcZHszfSkoXFxkezN9KShcXGQpKyQvLCAnKCQxKSAkMi0kMycpXG4gICAgICAgICAgdmFsdWU9e2Rpc3BsYXlQaG9uZX1cbiAgICAgICAgICBmaWVsZE5hbWU9eydwaG9uZSd9XG4gICAgICAgICAgdGl0bGU9eydTZWFyY2ggZm9yIEN1c3RvbWVyIGJ5IE1vYmlsZSBQaG9uZSd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlscy1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlUGhvbmV9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbih0aGlzLnN0YXRlLnBob25lKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZpbmRDdXN0b21lckJ5UGhvbmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9vcmRlckRldGFpbHMvRmluZEN1c3RvbWVyQnlQaG9uZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgdXBkYXRlQ2FydEN1c3RvbWVyLCB1cGRhdGVDYXJ0U2hpcFRvIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgWmlwcG9wb3RhbSBmcm9tICcuLi8uLi8uLi8uLi9saWIvemlwcG9wb3RhbSc7XG5pbXBvcnQgeyBWYWxpZGF0ZVppcCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IHJlZGlyZWN0VG9TdGFnZU9uZUlmTm9BbHRlcmF0aW9ucyB9IGZyb20gJy4uLy4uL29yZGVyc0hlbHBlcic7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vLi4vLi4vRm9ybUZpZWxkJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi8uLi8uLi9DaGVja2JveCc7XG5pbXBvcnQgQ3VzdG9tZXJJbmZvIGZyb20gJy4vQ3VzdG9tZXJJbmZvJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgY2FydEN1c3RvbWVyOiBzdG9yZS5jYXJ0Q3VzdG9tZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgdXBkYXRlQ2FydEN1c3RvbWVyLFxuICAgICAgdXBkYXRlQ2FydFNoaXBUbyxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjYXJ0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGNhcnRDdXN0b21lcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICB1cGRhdGVDYXJ0Q3VzdG9tZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZUNhcnRTaGlwVG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICB9O1xuXG4gIHJlbmRlckN1c3RvbWVyQWRkcmVzcyhzaGlwVG9TdG9yZSwgY3VzdG9tZXIpIHtcbiAgICBjb25zdCB7IHVwZGF0ZUNhcnRDdXN0b21lciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2hpcFRvU3RvcmUpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgemlwcG8gPSBWYWxpZGF0ZVppcChjdXN0b21lci56aXBfY29kZSlcbiAgICAgICAgPyBaaXBwb3BvdGFtLmdldChjdXN0b21lci56aXBfY29kZSlcbiAgICAgICAgOiAnJztcblxuICAgICAgaWYgKHppcHBvLnRoZW4gJiYgKCFjdXN0b21lci5jaXR5ICYmICFjdXN0b21lci5zdGF0ZV9wcm92aW5jZSkpIHtcbiAgICAgICAgemlwcG8udGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZF9hZGRyZXNzID0gcmVzLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgY29uc3QgY2l0eSA9IGZvcm1hdHRlZF9hZGRyZXNzLnNwbGl0KCcsICcpWzBdO1xuICAgICAgICAgIGNvbnN0IHN0YXRlX3Byb3ZpbmNlID0gZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgICAgIC5zcGxpdCgnLCAnKVsxXVxuICAgICAgICAgICAgLm1hdGNoKC9bYS16QS1aXSsvZylbMF07XG4gICAgICAgICAgdXBkYXRlQ2FydEN1c3RvbWVyKCdjaXR5JywgY2l0eSk7XG4gICAgICAgICAgdXBkYXRlQ2FydEN1c3RvbWVyKCdzdGF0ZV9wcm92aW5jZScsIHN0YXRlX3Byb3ZpbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyLnN0cmVldH1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3N0cmVldCd9XG4gICAgICAgICAgICB0aXRsZT17J0FkZHJlc3MgMSd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDYXJ0Q3VzdG9tZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lci51bml0fVxuICAgICAgICAgICAgZmllbGROYW1lPXsndW5pdCd9XG4gICAgICAgICAgICB0aXRsZT17J0FkZHJlc3MgMid9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDYXJ0Q3VzdG9tZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lci5jaXR5fVxuICAgICAgICAgICAgZmllbGROYW1lPXsnY2l0eSd9XG4gICAgICAgICAgICB0aXRsZT17J0NpdHknfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlscy1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ2FydEN1c3RvbWVyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXIuc3RhdGVfcHJvdmluY2V9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eydzdGF0ZV9wcm92aW5jZSd9XG4gICAgICAgICAgICB0aXRsZT17J1N0YXRlJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHMtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUNhcnRDdXN0b21lcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyLnppcF9jb2RlfVxuICAgICAgICAgICAgZmllbGROYW1lPXsnemlwX2NvZGUnfVxuICAgICAgICAgICAgdGl0bGU9eydaaXAgQ29kZTonfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlscy1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ2FydEN1c3RvbWVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTaGlwVG8oY2FydCwgY3VzdG9tZXIpIHtcbiAgICBjb25zdCB7IHNoaXBUb1N0b3JlIH0gPSBjYXJ0O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NoaXBUb1N0b3JlfVxuICAgICAgICAgICAgdGV4dD1cIlNoaXAgVG8gU3RvcmVcIlxuICAgICAgICAgICAgbmFtZT1cInNoaXAtdG8tc3RvcmVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMudXBkYXRlQ2FydFNoaXBUbyghc2hpcFRvU3RvcmUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZD17IXNoaXBUb1N0b3JlfVxuICAgICAgICAgICAgdGV4dD1cIlNoaXAgVG8gQ3VzdG9tZXJcIlxuICAgICAgICAgICAgbmFtZT1cInNoaXAtdG8tY3VzdG9tZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMudXBkYXRlQ2FydFNoaXBUbyghc2hpcFRvU3RvcmUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJDdXN0b21lckFkZHJlc3Moc2hpcFRvU3RvcmUsIGN1c3RvbWVyKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjYXJ0LCBjYXJ0Q3VzdG9tZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxuICAgICAgICB7cmVkaXJlY3RUb1N0YWdlT25lSWZOb0FsdGVyYXRpb25zKHRoaXMucHJvcHMpfVxuXG4gICAgICAgIDxDdXN0b21lckluZm8gLz5cblxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRlbGl2ZXJ5IFVwb24gQ29tcGxldGlvbjwvbGFiZWw+XG4gICAgICAgIHt0aGlzLnJlbmRlclNoaXBUbyhjYXJ0LCBjYXJ0Q3VzdG9tZXIpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmRlckRldGFpbHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy9vcmRlckRldGFpbHMvaW5kZXguanMiLCJpbXBvcnQge2ZsYXR0ZW59IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBnZXRUb3RhbCA9IGdhcm1lbnRzID0+IHtcbiAgY29uc3QgYWx0ZXJhdGlvbnMgPSBnYXJtZW50cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICBwcmV2LnB1c2goY3Vyci5hbHRlcmF0aW9ucyk7XG4gICAgcHJldiA9IGZsYXR0ZW4ocHJldik7XG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKTtcbiAgY29uc3QgcHJpY2UgPSBhbHRlcmF0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChwcmV2ICs9IGN1cnIucHJpY2UpLCAwKTtcbiAgcmV0dXJuIHByaWNlLnRvRml4ZWQoMik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL25ldy91dGlscy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXJtc09mU2VydmljZSBmcm9tICcuL1Rlcm1zT2ZTZXJ2aWNlJztcbmltcG9ydCBXaXRoU2VjdGlvbkhlYWRlciBmcm9tICcuLi9IT0MvV2l0aFNlY3Rpb25IZWFkZXInO1xuaW1wb3J0IHsgXG4gIHVwZGF0ZVN0b3JlLCBcbiAgZ2V0Q3VycmVudFN0b3JlLCBcbiAgc2V0R3Jvd2xlciwgIFxuICBzZXRMb2FkZXIsXG4gIHJlbW92ZUxvYWRlcixcbn0gZnJvbSAnLi4vc3RvcmVzL2VkaXQvZHVja3MvYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdG9yZTogc3RvcmUuY3VycmVudFN0b3JlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIGdldEN1cnJlbnRTdG9yZSxcbiAgICAgIHVwZGF0ZVN0b3JlLFxuICAgICAgc2V0R3Jvd2xlcixcbiAgICAgIHNldExvYWRlcixcbiAgICAgIHJlbW92ZUxvYWRlcixcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuXG5jbGFzcyBBZ3JlZVRvVGVybXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdWJtaXRBZ3JlZVRvVGVybXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLnByb3BzLmN1cnJlbnRTdG9yZTtcbiAgICBjb25zdCBhZ3JlZWRTdG9yZSA9IHsuLi5zdG9yZSwgYWdyZWVzX3RvX3Rlcm1zOiB0cnVlfTtcblxuICAgIHRoaXMucHJvcHMuc2V0TG9hZGVyKCk7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVTdG9yZSh7c3RvcmU6IGFncmVlZFN0b3JlfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFN0b3JlKHN0b3JlLmlkKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxvYWRlcigpO1xuICAgICAgICAgICAgY29uc3Qga2luZCA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhhbmtzISBZb3UndmUgYWdyZWVkIHRvIHRoZSB0ZXJtcyFcIjtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7a2luZCwgbWVzc2FnZX0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiNTBweCBhdXRvXCIsIGhlaWdodDogXCI4MDBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e292ZXJmbG93OiBcInNjcm9sbFwiLCBoZWlnaHQ6IFwiOTAlXCJ9fT5cbiAgICAgICAgICA8VGVybXNPZlNlcnZpY2UgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIlxuICAgICAgICAgIHZhbHVlPVwiQWdyZWUgVG8gVGVybXNcIiBcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN1Ym1pdEFncmVlVG9UZXJtc30gLz5cbiAgICAgIDwvZGl2PlxuICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShXaXRoU2VjdGlvbkhlYWRlcihBZ3JlZVRvVGVybXMpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvdGVybXMvQWdyZWVUb1Rlcm1zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBiYXNlVXJsOiAnaHR0cDovL3d3dy56aXBwb3BvdGFtLnVzLycsXG4gIGNvdW50cnk6ICd1cydcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9saWIvemlwcG9wb3RhbS9jb25maWcuanMiLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnLCBcbiAgZ2V0OiBmdW5jdGlvbih6aXBDb2RlKXtcbiAgICAvL3JldHVybiBmZXRjaChgJHt0aGlzLmNvbmZpZy5iYXNlVXJsfSR7dGhpcy5jb25maWcuY291bnRyeX0vJHt6aXBDb2RlfWApO1xuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj8mYWRkcmVzcz0ke3ppcENvZGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgLy9yZXR1cm4gQXhpb3MuZ2V0KGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uPyZhZGRyZXNzPSR7emlwQ29kZX1gKTtcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9saWIvemlwcG9wb3RhbS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=