webpackJsonp([4],{

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(34);

var _redux = __webpack_require__(24);

var _newOrderLists = __webpack_require__(763);

var _NewOrderDetail = __webpack_require__(726);

var _NewOrderDetail2 = _interopRequireDefault(_NewOrderDetail);

var _NewOrderCustomerDetail = __webpack_require__(725);

var _NewOrderCustomerDetail2 = _interopRequireDefault(_NewOrderCustomerDetail);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getNewOrders: _actions.getNewOrders, getCurrentOrder: _actions.getCurrentOrder, setCurrentOrder: _actions.setCurrentOrder, getCurrentCustomer: _actions.getCurrentCustomer }, dispatch);
};

var NewOrders = function (_Component) {
  _inherits(NewOrders, _Component);

  function NewOrders() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewOrders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewOrders.__proto__ || Object.getPrototypeOf(NewOrders)).call.apply(_ref, [this].concat(args))), _this), _this.selectOrderDetail = function (order) {
      _this.props.getCurrentOrder(order.provider_id, order.id).then(function (res) {
        _this.props.getCurrentCustomer(res.customer_id);
      }).catch(function (err) {
        return console.log('err', err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewOrders, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setCurrentOrder({});
      this.props.getNewOrders().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderNewOrders',
    value: function renderNewOrders(orders) {
      return _react2.default.createElement(_newOrderLists.RenderNewOrderList, {
        orders: orders,
        className: 'new-orders',
        selectOrder: this.selectOrderDetail
      });
    }
  }, {
    key: 'renderOrderDetails',
    value: function renderOrderDetails() {
      var _props = this.props,
          customerId = _props.currentCustomer.id,
          orderCustId = _props.currentOrder.customer_id;


      if (customerId === orderCustId) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'new-order detail-container' },
            _react2.default.createElement(_NewOrderDetail2.default, {
              order: this.props.currentOrder,
              selectOrder: this.selectOrderDetail,
              getNewOrders: this.props.getNewOrders
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'new-order customer-container' },
            _react2.default.createElement(_NewOrderCustomerDetail2.default, null)
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'new-order-page' },
        _react2.default.createElement(_SectionHeader2.default, { text: 'Home / ' + this.props.currentStore.name }),
        _react2.default.createElement(
          'div',
          { className: 'new-order-container' },
          _react2.default.createElement(
            'div',
            { className: 'new-order list-container' },
            this.renderNewOrders(this.props.newOrders)
          ),
          _react2.default.createElement(
            'div',
            { className: 'detail-and-customer' },
            this.renderOrderDetails()
          )
        )
      );
    }
  }]);

  return NewOrders;
}(_react.Component);

NewOrders.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  newOrders: _propTypes2.default.object.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getNewOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrders);

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

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(11);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({}, dispatch);
};

var NewOrderCustomerDetail = function (_Component) {
  _inherits(NewOrderCustomerDetail, _Component);

  function NewOrderCustomerDetail() {
    _classCallCheck(this, NewOrderCustomerDetail);

    return _possibleConstructorReturn(this, (NewOrderCustomerDetail.__proto__ || Object.getPrototypeOf(NewOrderCustomerDetail)).apply(this, arguments));
  }

  _createClass(NewOrderCustomerDetail, [{
    key: "render",
    value: function render() {
      var customer = this.props.currentCustomer;

      if (!(0, _isEmpty2.default)(customer)) {
        var id = customer.id,
            first_name = customer.first_name,
            last_name = customer.last_name,
            email = customer.email,
            phone = customer.phone,
            city = customer.city,
            state_province = customer.state_province,
            zip_code = customer.zip_code;


        var customerEditLink = "/customers/" + id + "/edit";

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h3",
            null,
            "Customer Details:"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Name: ",
            first_name,
            " ",
            last_name
          ),
          _react2.default.createElement(
            "p",
            null,
            "Email: ",
            email
          ),
          _react2.default.createElement(
            "p",
            null,
            "Phone: ",
            phone
          ),
          _react2.default.createElement(
            "p",
            null,
            "Address: ",
            city,
            ", ",
            state_province,
            " ",
            zip_code
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: customerEditLink },
            _react2.default.createElement(
              "button",
              { className: "button short-button" },
              " Edit Customer"
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          null,
          "Select a Customer"
        );
      }
    }
  }]);

  return NewOrderCustomerDetail;
}(_react.Component);

NewOrderCustomerDetail.propTypes = {
  currentCustomer: _propTypes2.default.object.isRequired // mapStateToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderCustomerDetail);

/***/ }),

/***/ 726:
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

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _shippingFunctions = __webpack_require__(332);

var _WelcomeKitPrint = __webpack_require__(740);

var _WelcomeKitPrint2 = _interopRequireDefault(_WelcomeKitPrint);

var _SelectTailor = __webpack_require__(713);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updateOrder: _actions.updateOrder, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, setGrowler: _actions.setGrowler }, dispatch);
};

var NewOrderDetail = function (_Component) {
  _inherits(NewOrderDetail, _Component);

  function NewOrderDetail(props) {
    _classCallCheck(this, NewOrderDetail);

    var _this = _possibleConstructorReturn(this, (NewOrderDetail.__proto__ || Object.getPrototypeOf(NewOrderDetail)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.handleSubmit = function () {
      _this.props.setLoader();
      var obj = _this.state;
      obj.id = _this.props.order.id;
      _this.props.updateOrder({ order: obj }).then(function (res) {
        _this.refreshNewOrdersList({ order: {} });
        var message = 'Tailor Assigned';
        var kind = 'success';
        _this.props.setGrowler({ kind: kind, message: message });
        _this.props.removeLoader();
      }).catch(function (err) {
        return console.log('errr', err);
      });
    };

    _this.updateOrderNotes = function (notes, order) {
      order.requester_notes = notes;
      _this.props.updateOrder({ order: order }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.postShipment = function (orders, action, type) {
      _this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this.setState({ loadingLabel: false });
        _this.props.removeLoader();
        _this.props.selectOrder(orders[0]);
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.makeShippingLabel = function (action) {
      return _this.postShipment([_this.props.order], action, 'mail_shipment');
    };

    _this.fulfillOrder = function () {
      var _this$props$order = _this.props.order,
          orderId = _this$props$order.id,
          storeId = _this$props$order.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      _this.props.setLoader();
      _this.setState({ loadingLabel: true });

      _this.props.updateOrder(data).then(function (res) {
        var _this$props = _this.props,
            order = _this$props.order,
            roles = _this$props.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has('mail_shipment')) {
          _this.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.state = {
      loadingLabel: false,
      notes: '',
      provider_id: ''
    };
    return _this;
  }

  _createClass(NewOrderDetail, [{
    key: 'refreshNewOrdersList',
    value: function refreshNewOrdersList(props) {
      var _props = this.props,
          setLoader = _props.setLoader,
          getNewOrders = _props.getNewOrders,
          removeLoader = _props.removeLoader;

      setLoader();
      getNewOrders().then(function () {
        return removeLoader();
      }).catch(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshNewOrdersList(this.props);
    }
  }, {
    key: 'resetState',
    value: function resetState(props) {
      this.setState(props.order);
    }
  }, {
    key: 'updateOrderFromProps',
    value: function updateOrderFromProps() {
      var order = this.props.order;
      this.setState({ order: order });
    }
  }, {
    key: 'renderFulfillButton',
    value: function renderFulfillButton() {
      return this.renderButton('Fulfill This Order', { disabled: false }, this.fulfillOrder);
    }
  }, {
    key: 'renderButton',
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return console.log('');
      };

      var className = params.className || 'pink-button';
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return callback(clickArgs);
            },
            disabled: disabled,
            className: className
          },
          text
        )
      );
    }
  }, {
    key: 'renderPrintLabel',
    value: function renderPrintLabel() {
      var _this2 = this;

      var _props2 = this.props,
          order = _props2.order,
          roles = _props2.userRoles;

      var disabled = this.state.loadingLabel;
      var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);

      var onClick = void 0,
          printPrompt = void 0,
          clickArgs = void 0,
          shipmentDiv = void 0;
      switch ((0, _shippingFunctions.labelState)(roles, order, disabled)) {
        case 'needs_label':
          printPrompt = 'Create Label';
          onClick = this.makeShippingLabel;
          clickArgs = shipmentAction;
          break;
        case 'in_progress':
          printPrompt = 'Creating Label';
        case 'label_created':
          printPrompt = 'Print Label';
          onClick = function onClick() {
            _this2.refreshNewOrdersList();
            window.print();
          };
          // NOTE: we need to make sure that orderComplete gets the correct shipment.
          shipmentDiv = _react2.default.createElement(_WelcomeKitPrint2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        'div',
        null,
        this.renderButton(printPrompt, { disabled: disabled, clickArgs: clickArgs }, onClick),
        shipmentDiv
      );
    }
  }, {
    key: 'welcomeKit',
    value: function welcomeKit(order) {
      if (!order.fulfilled) {
        return this.renderFulfillButton();
      } else {
        return this.renderPrintLabel();
      }
    }
  }, {
    key: 'updateNotes',
    value: function updateNotes(notes) {
      this.setState({ notes: notes });
    }
  }, {
    key: 'submitNotes',
    value: function submitNotes(event) {
      var _this3 = this;

      event.preventDefault();

      var data = {
        order: {
          requester_notes: this.state.notes,
          id: this.props.order.id,
          store_id: this.props.order.store_id
        }
      };

      var kind = 'success';
      var message = 'Notes Updated Successfully';
      this.props.updateOrder(data).then(function (res) {
        return _this3.props.setGrowler({ kind: kind, message: message });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderNotes',
    value: function renderNotes() {
      var _this4 = this;

      return _react2.default.createElement(
        'form',
        { className: 'notes-form', onSubmit: function onSubmit(e) {
            return _this4.submitNotes(e);
          } },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Order Notes:'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('textarea', {
            cols: 43,
            rows: 10,
            defaultValue: this.props.order['requester_notes'],
            onChange: function onChange(e) {
              return _this4.updateNotes(e.target.value);
            }
          })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Submit' }),
        _react2.default.createElement('hr', null)
      );
    }
  }, {
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      return garment.alterations.map(function (alt, index) {
        return _react2.default.createElement(
          'p',
          { key: index, className: 'cart-alteration' },
          alt.name
        );
      });
    }
  }, {
    key: 'renderGarments',
    value: function renderGarments(garments) {
      var _this5 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.name
          ),
          _this5.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          order = _props3.order,
          currentCustomer = _props3.currentCustomer;
      var id = order.id,
          weight = order.weight,
          created_at = order.created_at,
          total = order.total,
          provider_notes = order.provider_notes,
          items = order.items;
      var provider_id = this.state.provider_id;


      var orderDate = (0, _moment2.default)(created_at).format('MM-DD-YYYY');

      var selectTailor = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Alterations:'
        ),
        this.renderGarments(order.items),
        _react2.default.createElement(_SelectTailor2.default, { onChange: this.updateState, tailorId: provider_id }),
        _react2.default.createElement(
          'button',
          { className: 'button short-button', onClick: this.handleSubmit },
          'Change Tailor'
        )
      );

      var display = order.type === 'TailorOrder' ? selectTailor : this.welcomeKit(order);

      return _react2.default.createElement(
        'div',
        { className: 'order-details' },
        _react2.default.createElement(
          'h3',
          null,
          'Order Details:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order ID: ',
          id
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Weight: ',
          weight
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Date: ',
          orderDate
        ),
        _react2.default.createElement(
          'p',
          null,
          'Total Charges: $',
          total
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Notes:'
        ),
        this.renderNotes(),
        display
      );
    }
  }]);

  return NewOrderDetail;
}(_react.Component);

NewOrderDetail.propTypes = {
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  order: _propTypes2.default.object.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderDetail);

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WelcomeKitPrint = function (_Component) {
  _inherits(WelcomeKitPrint, _Component);

  function WelcomeKitPrint() {
    _classCallCheck(this, WelcomeKitPrint);

    return _possibleConstructorReturn(this, (WelcomeKitPrint.__proto__ || Object.getPrototypeOf(WelcomeKitPrint)).apply(this, arguments));
  }

  _createClass(WelcomeKitPrint, [{
    key: 'render',
    value: function render() {
      var currentOrder = this.props.currentOrder;


      if (currentOrder) {
        var shipping_label = currentOrder.shipments[0].shipping_label;

        return _react2.default.createElement(
          'div',
          { className: 'print' },
          _react2.default.createElement(
            'div',
            { className: 'packing-slip-info' },
            _react2.default.createElement('img', {
              className: 'packing-slip-label',
              src: shipping_label,
              alt: 'shipping label'
            })
          )
        );
      }
    }
  }]);

  return WelcomeKitPrint;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WelcomeKitPrint);

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderNewOrderList = undefined;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderOrders = function renderOrders(orders, className, selectOrder) {
  if (orders.length > 0) {
    return orders.map(function (order, index) {
      var id = order.id,
          customer = order.customer,
          total = order.total;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      return _react2.default.createElement(
        'li',
        {
          className: className + '-li',
          key: index,
          onClick: function onClick() {
            return selectOrder(order);
          }
        },
        '#',
        order.id,
        ' - ',
        first_name,
        ' ',
        last_name,
        ' - $',
        total
      );
    });
  } else {
    return _react2.default.createElement(
      'p',
      null,
      'No New Orders'
    );
  }
};

var RenderNewOrderList = exports.RenderNewOrderList = function RenderNewOrderList(props) {
  var orders = props.orders,
      className = props.className,
      selectOrder = props.selectOrder;

  return _react2.default.createElement(
    'div',
    { className: className + '-div' },
    _react2.default.createElement(
      'h3',
      null,
      'Manage New Orders'
    ),
    _react2.default.createElement(
      'ul',
      { className: className + '-ul' },
      renderOrders(orders.unassigned, className, selectOrder)
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Manage New Kits'
    ),
    _react2.default.createElement(
      'ul',
      { className: className + '-ul' },
      renderOrders(orders.welcome_kits, className, selectOrder)
    )
  );
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9OZXdPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcz81MjU5KioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlckZvcm1zL1NlbGVjdFRhaWxvci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9OZXdPcmRlckN1c3RvbWVyRGV0YWlsLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2FkbWluL05ld09yZGVyRGV0YWlsLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3ByaW50cy9XZWxjb21lS2l0UHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL25ld09yZGVyTGlzdHMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFVzZXIiLCJzdG9yZSIsImN1cnJlbnRTdG9yZSIsIm5ld09yZGVycyIsImN1cnJlbnRPcmRlciIsInVzZXJSb2xlcyIsImN1cnJlbnRDdXN0b21lciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldE5ld09yZGVycyIsImdldEN1cnJlbnRPcmRlciIsInNldEN1cnJlbnRPcmRlciIsImdldEN1cnJlbnRDdXN0b21lciIsImRpc3BhdGNoIiwiTmV3T3JkZXJzIiwic2VsZWN0T3JkZXJEZXRhaWwiLCJwcm9wcyIsIm9yZGVyIiwicHJvdmlkZXJfaWQiLCJpZCIsInRoZW4iLCJyZXMiLCJjdXN0b21lcl9pZCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsIm9yZGVycyIsImN1c3RvbWVySWQiLCJvcmRlckN1c3RJZCIsIm5hbWUiLCJyZW5kZXJOZXdPcmRlcnMiLCJyZW5kZXJPcmRlckRldGFpbHMiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwicmVzZXRDYXJ0IiwiYWRtaW4iLCJyZXRhaWxlciIsIlNlY3Rpb25IZWFkZXIiLCJ0ZXh0IiwiYWRkUGxlYXNlU2VsZWN0IiwiY29uY2F0Iiwib3B0aW9ucyIsIkZvcm1TZWxlY3QiLCJzZWxlY3RPcHRpb25zIiwidGl0bGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZmllbGROYW1lIiwiZSIsInRhcmdldCIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInRhaWxvcnMiLCJ0YWlsb3JMaXN0IiwiZ2V0VGFpbG9yTGlzdCIsIlNlbGVjdFRhaWxvciIsInRhaWxvcklkIiwiaGFuZGxlU3VibWl0IiwiaGVhZGVyVGV4dCIsImFycmF5Iiwic3RyaW5nIiwiTmV3T3JkZXJDdXN0b21lckRldGFpbCIsImN1c3RvbWVyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJjaXR5Iiwic3RhdGVfcHJvdmluY2UiLCJ6aXBfY29kZSIsImN1c3RvbWVyRWRpdExpbmsiLCJ1cGRhdGVPcmRlciIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsInNldEdyb3dsZXIiLCJOZXdPcmRlckRldGFpbCIsInVwZGF0ZVN0YXRlIiwiZmllbGQiLCJzZXRTdGF0ZSIsIm9iaiIsInN0YXRlIiwicmVmcmVzaE5ld09yZGVyc0xpc3QiLCJtZXNzYWdlIiwia2luZCIsInVwZGF0ZU9yZGVyTm90ZXMiLCJub3RlcyIsInJlcXVlc3Rlcl9ub3RlcyIsInBvc3RTaGlwbWVudCIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nTGFiZWwiLCJzZWxlY3RPcmRlciIsIm1ha2VTaGlwcGluZ0xhYmVsIiwiZnVsZmlsbE9yZGVyIiwib3JkZXJJZCIsInN0b3JlSWQiLCJzdG9yZV9pZCIsImRhdGEiLCJmdWxmaWxsZWQiLCJyb2xlcyIsInNoaXBtZW50QWN0aW9uIiwic2hpcG1lbnRUeXBlIiwiaGFzIiwicmVuZGVyQnV0dG9uIiwiZGlzYWJsZWQiLCJwYXJhbXMiLCJjYWxsYmFjayIsImNsYXNzTmFtZSIsImNsaWNrQXJncyIsInVuZGVmaW5lZCIsInByaW50UHJvbXB0Iiwic2hpcG1lbnREaXYiLCJ3aW5kb3ciLCJwcmludCIsInJlbmRlckZ1bGZpbGxCdXR0b24iLCJyZW5kZXJQcmludExhYmVsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdE5vdGVzIiwidXBkYXRlTm90ZXMiLCJnYXJtZW50IiwiYWx0ZXJhdGlvbnMiLCJhbHQiLCJnYXJtZW50cyIsInJlbmRlckdhcm1lbnRBbHRlcmF0aW9ucyIsIndlaWdodCIsImNyZWF0ZWRfYXQiLCJ0b3RhbCIsInByb3ZpZGVyX25vdGVzIiwiaXRlbXMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJzZWxlY3RUYWlsb3IiLCJyZW5kZXJHYXJtZW50cyIsImRpc3BsYXkiLCJ3ZWxjb21lS2l0IiwicmVuZGVyTm90ZXMiLCJXZWxjb21lS2l0UHJpbnQiLCJzaGlwcGluZ19sYWJlbCIsInNoaXBtZW50cyIsInJlbmRlck9yZGVycyIsIlJlbmRlck5ld09yZGVyTGlzdCIsInVuYXNzaWduZWQiLCJ3ZWxjb21lX2tpdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsaUJBQWFDLE1BQU1ELFdBRGQ7QUFFTEUsa0JBQWNELE1BQU1DLFlBRmY7QUFHTEMsZUFBV0YsTUFBTUUsU0FIWjtBQUlMQyxrQkFBY0gsTUFBTUcsWUFKZjtBQUtMQyxlQUFXSixNQUFNSSxTQUxaO0FBTUxDLHFCQUFpQkwsTUFBTUs7QUFObEIsR0FBUDtBQVFE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Q0UscUJBQWMyQyxTQUFkLFFBREY7QUFFRSxlQUFLeEQsS0FGUDtBQUdFLG1CQUFTO0FBQUEsbUJBQU13QyxZQUFZckYsS0FBWixDQUFOO0FBQUE7QUFIWDtBQUFBO0FBS0lBLGNBQU1FLEVBTFY7QUFBQTtBQUtpQnVELGtCQUxqQjtBQUFBO0FBSzhCQyxpQkFMOUI7QUFBQTtBQUs2QytEO0FBTDdDLE9BREY7QUFTRCxLQVpNLENBQVA7QUFhRCxHQWRELE1BY087QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNEO0FBQ0YsQ0FsQkQ7O0FBb0JPLElBQU1jLGtEQUFxQixTQUFyQkEsa0JBQXFCLFFBQVM7QUFBQSxNQUNsQzdILE1BRGtDLEdBQ0FYLEtBREEsQ0FDbENXLE1BRGtDO0FBQUEsTUFDMUIyRixTQUQwQixHQUNBdEcsS0FEQSxDQUMxQnNHLFNBRDBCO0FBQUEsTUFDZmhCLFdBRGUsR0FDQXRGLEtBREEsQ0FDZnNGLFdBRGU7O0FBRXpDLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBY2dCLFNBQWQsU0FBTDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFJLFdBQWNBLFNBQWQsUUFBSjtBQUNHaUMsbUJBQWE1SCxPQUFPOEgsVUFBcEIsRUFBZ0NuQyxTQUFoQyxFQUEyQ2hCLFdBQTNDO0FBREgsS0FGRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQSxRQUFJLFdBQWNnQixTQUFkLFFBQUo7QUFDR2lDLG1CQUFhNUgsT0FBTytILFlBQXBCLEVBQWtDcEMsU0FBbEMsRUFBNkNoQixXQUE3QztBQURIO0FBUEYsR0FERjtBQWFELENBZk0sQyIsImZpbGUiOiI0LjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFxuICBnZXROZXdPcmRlcnMsIFxuICBnZXRDdXJyZW50T3JkZXIsIFxuICBzZXRDdXJyZW50T3JkZXIsIFxuICBnZXRDdXJyZW50Q3VzdG9tZXIgXG59IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZW5kZXJOZXdPcmRlckxpc3QgfSBmcm9tICcuLi8uLi91dGlscy9uZXdPcmRlckxpc3RzJztcbmltcG9ydCBOZXdPcmRlckRldGFpbCBmcm9tICcuL05ld09yZGVyRGV0YWlsJztcbmltcG9ydCBOZXdPcmRlckN1c3RvbWVyRGV0YWlsIGZyb20gJy4vTmV3T3JkZXJDdXN0b21lckRldGFpbCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgY3VycmVudFN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgbmV3T3JkZXJzOiBzdG9yZS5uZXdPcmRlcnMsXG4gICAgY3VycmVudE9yZGVyOiBzdG9yZS5jdXJyZW50T3JkZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gICAgY3VycmVudEN1c3RvbWVyOiBzdG9yZS5jdXJyZW50Q3VzdG9tZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAgeyBnZXROZXdPcmRlcnMsIGdldEN1cnJlbnRPcmRlciwgc2V0Q3VycmVudE9yZGVyLCBnZXRDdXJyZW50Q3VzdG9tZXIgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgTmV3T3JkZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50VXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50Q3VzdG9tZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY3VycmVudFN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIG5ld09yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50T3JkZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgdXNlclJvbGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdldE5ld09yZGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgZ2V0Q3VycmVudE9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRDdXJyZW50T3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIGdldEN1cnJlbnRDdXN0b21lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgc2VsZWN0T3JkZXJEZXRhaWwgPSBvcmRlciA9PiB7XG4gICAgdGhpcy5wcm9wc1xuICAgICAgLmdldEN1cnJlbnRPcmRlcihvcmRlci5wcm92aWRlcl9pZCwgb3JkZXIuaWQpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRDdXN0b21lcihyZXMuY3VzdG9tZXJfaWQpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRDdXJyZW50T3JkZXIoe30pO1xuICAgIHRoaXMucHJvcHMuZ2V0TmV3T3JkZXJzKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcmVuZGVyTmV3T3JkZXJzKG9yZGVycykge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVuZGVyTmV3T3JkZXJMaXN0XG4gICAgICAgIG9yZGVycz17b3JkZXJzfVxuICAgICAgICBjbGFzc05hbWU9eyduZXctb3JkZXJzJ31cbiAgICAgICAgc2VsZWN0T3JkZXI9e3RoaXMuc2VsZWN0T3JkZXJEZXRhaWx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJPcmRlckRldGFpbHMoKXtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50Q3VzdG9tZXI6IHtcbiAgICAgICAgaWQ6IGN1c3RvbWVySWRcbiAgICAgIH0sIFxuICAgICAgY3VycmVudE9yZGVyOiB7XG4gICAgICAgIGN1c3RvbWVyX2lkOiBvcmRlckN1c3RJZFxuICAgICAgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGN1c3RvbWVySWQgPT09IG9yZGVyQ3VzdElkKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctb3JkZXIgZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPE5ld09yZGVyRGV0YWlsXG4gICAgICAgICAgICAgIG9yZGVyPXt0aGlzLnByb3BzLmN1cnJlbnRPcmRlcn1cbiAgICAgICAgICAgICAgc2VsZWN0T3JkZXI9e3RoaXMuc2VsZWN0T3JkZXJEZXRhaWx9XG4gICAgICAgICAgICAgIGdldE5ld09yZGVycz17dGhpcy5wcm9wcy5nZXROZXdPcmRlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW9yZGVyIGN1c3RvbWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPE5ld09yZGVyQ3VzdG9tZXJEZXRhaWwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctb3JkZXItcGFnZVwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXtgSG9tZSAvICR7dGhpcy5wcm9wcy5jdXJyZW50U3RvcmUubmFtZX1gfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1vcmRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1vcmRlciBsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmV3T3JkZXJzKHRoaXMucHJvcHMubmV3T3JkZXJzKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1hbmQtY3VzdG9tZXJcIj5cbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJPcmRlckRldGFpbHMoKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOZXdPcmRlcnMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYWRtaW4vTmV3T3JkZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFkZFBsZWFzZVNlbGVjdCA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gW3sgaWQ6ICcnLCBuYW1lOiAnUGxlYXNlIFNlbGVjdCcgfV0uY29uY2F0KG9wdGlvbnMpO1xufTtcblxuY29uc3QgRm9ybVNlbGVjdCA9IHByb3BzID0+IHtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IGFkZFBsZWFzZVNlbGVjdChwcm9wcy5vcHRpb25zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMub25DaGFuZ2UocHJvcHMuZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJPcHRpb25zKHNlbGVjdE9wdGlvbnMpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLmlkfT5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VsZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybVNlbGVjdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2V0VGFpbG9yTGlzdCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Gb3JtU2VsZWN0JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhaWxvcnM6IHN0b3JlLnRhaWxvckxpc3QsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBnZXRUYWlsb3JMaXN0IH0sIGRpc3BhdGNoKTtcbn07XG5cbmNsYXNzIFNlbGVjdFRhaWxvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGFpbG9yczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdldFRhaWxvckxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgICBwcm92aWRlcl9pZDogUHJvcFR5cGVzLnN0cmluZywgLy8gcGFyZW50Q29tcG9uZW50XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRUYWlsb3JMaXN0KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhaWxvcnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHRhaWxvcklkLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgZmllbGROYW1lID0gJ3Byb3ZpZGVyX2lkJyxcbiAgICAgIHRpdGxlID0gJ1RhaWxvciBTaG9wOicsXG4gICAgICBoZWFkZXJUZXh0ID0gJ1NlbGVjdCBUYWlsb3InLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzRW1wdHkodGFpbG9ycykpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J1NlbGVjdFRhaWxvcid9PlxuICAgICAgICA8aDM+e2hlYWRlclRleHR9PC9oMz5cbiAgICAgICAgPEZvcm1TZWxlY3RcbiAgICAgICAgICB2YWx1ZT17dGFpbG9ySWR9XG4gICAgICAgICAgb3B0aW9ucz17dGFpbG9yc31cbiAgICAgICAgICBmaWVsZE5hbWU9eydwcm92aWRlcl9pZCd9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VsZWN0VGFpbG9yKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlckZvcm1zL1NlbGVjdFRhaWxvci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRDdXN0b21lcjogc3RvcmUuY3VycmVudEN1c3RvbWVyLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHsgfSwgZGlzcGF0Y2hcbiAgKTtcbn07XG5cbmNsYXNzIE5ld09yZGVyQ3VzdG9tZXJEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRDdXN0b21lcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50Q3VzdG9tZXI6IGN1c3RvbWVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghaXNFbXB0eShjdXN0b21lcikpIHtcblxuICAgICAgY29uc3Qge1xuICAgICAgICBpZCxcbiAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGhvbmUsXG4gICAgICAgIGNpdHksXG4gICAgICAgIHN0YXRlX3Byb3ZpbmNlICxcbiAgICAgICAgemlwX2NvZGUsXG4gICAgICB9ID0gY3VzdG9tZXI7XG5cbiAgICAgIGNvbnN0IGN1c3RvbWVyRWRpdExpbmsgPSBgL2N1c3RvbWVycy8ke2lkfS9lZGl0YDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+Q3VzdG9tZXIgRGV0YWlsczo8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTmFtZToge2ZpcnN0X25hbWV9IHtsYXN0X25hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPkVtYWlsOiB7ZW1haWx9PC9wPlxuICAgICAgICAgIDxwPlBob25lOiB7cGhvbmV9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQWRkcmVzczoge2NpdHl9LCB7c3RhdGVfcHJvdmluY2V9IHt6aXBfY29kZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgdG89e2N1c3RvbWVyRWRpdExpbmt9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gc2hvcnQtYnV0dG9uXCI+IEVkaXQgQ3VzdG9tZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+U2VsZWN0IGEgQ3VzdG9tZXI8L2Rpdj47XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOZXdPcmRlckN1c3RvbWVyRGV0YWlsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FkbWluL05ld09yZGVyQ3VzdG9tZXJEZXRhaWwuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICB1cGRhdGVPcmRlcixcbiAgY3JlYXRlU2hpcG1lbnQsXG4gIHNldExvYWRlcixcbiAgcmVtb3ZlTG9hZGVyLFxuICBzZXRHcm93bGVyLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgc2hpcG1lbnRUeXBlcyxcbiAgc2hpcG1lbnRBY3Rpb25zLFxuICBsYWJlbFN0YXRlLFxuICBtYWtlU2hpcHBpbmdMYWJlbCxcbiAgZmlyZVNoaXBtZW50Q3JlYXRlLFxufSBmcm9tICcuLi9zaGlwcGluZy9zaGlwcGluZ0Z1bmN0aW9ucyc7XG5cbmltcG9ydCBXZWxjb21lS2l0UHJpbnQgZnJvbSAnLi4vcHJpbnRzL1dlbGNvbWVLaXRQcmludC5qcyc7XG5pbXBvcnQgU2VsZWN0VGFpbG9yIGZyb20gJy4uL29yZGVycy9vcmRlckZvcm1zL1NlbGVjdFRhaWxvcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWlsb3JzOiBzdG9yZS50YWlsb3JMaXN0LFxuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgICBjdXJyZW50Q3VzdG9tZXI6IHN0b3JlLmN1cnJlbnRDdXN0b21lcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7IHVwZGF0ZU9yZGVyLCBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgc2V0R3Jvd2xlciwgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgTmV3T3JkZXJEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRhaWxvcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50VXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50Q3VzdG9tZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgdXNlclJvbGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHVwZGF0ZU9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gcGFyZW50Q29tcG9uZW50XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nTGFiZWw6IGZhbHNlLFxuICAgICAgbm90ZXM6ICcnLFxuICAgICAgcHJvdmlkZXJfaWQ6ICcnLFxuICAgIH07XG4gIH1cblxuICByZWZyZXNoTmV3T3JkZXJzTGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgc2V0TG9hZGVyLCBnZXROZXdPcmRlcnMsIHJlbW92ZUxvYWRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRMb2FkZXIoKTtcbiAgICBnZXROZXdPcmRlcnMoKVxuICAgICAgLnRoZW4oKCkgPT4gcmVtb3ZlTG9hZGVyKCkpXG4gICAgICAuY2F0Y2goKCkgPT4gcmVtb3ZlTG9hZGVyKCkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWZyZXNoTmV3T3JkZXJzTGlzdCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUocHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByb3BzLm9yZGVyKTtcbiAgfVxuXG4gIHVwZGF0ZU9yZGVyRnJvbVByb3BzKCkge1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5wcm9wcy5vcmRlcjtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXIgfSk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0TG9hZGVyKCk7XG4gICAgbGV0IG9iaiA9IHRoaXMuc3RhdGU7XG4gICAgb2JqLmlkID0gdGhpcy5wcm9wcy5vcmRlci5pZDtcbiAgICB0aGlzLnByb3BzXG4gICAgICAudXBkYXRlT3JkZXIoeyBvcmRlcjogb2JqIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hOZXdPcmRlcnNMaXN0KHsgb3JkZXI6IHt9IH0pO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1RhaWxvciBBc3NpZ25lZCc7XG4gICAgICAgIGNvbnN0IGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlTG9hZGVyKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJycicsIGVycikpO1xuICB9O1xuXG4gIHVwZGF0ZU9yZGVyTm90ZXMgPSAobm90ZXMsIG9yZGVyKSA9PiB7XG4gICAgb3JkZXIucmVxdWVzdGVyX25vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVPcmRlcih7IG9yZGVyIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gIH07XG5cbiAgcG9zdFNoaXBtZW50ID0gKG9yZGVycywgYWN0aW9uLCB0eXBlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRMb2FkZXIoKTtcbiAgICBmaXJlU2hpcG1lbnRDcmVhdGUob3JkZXJzLCBhY3Rpb24sIHR5cGUpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0xhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcmRlcihvcmRlcnNbMF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycikpO1xuICB9O1xuXG4gIG1ha2VTaGlwcGluZ0xhYmVsID0gYWN0aW9uID0+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0U2hpcG1lbnQoW3RoaXMucHJvcHMub3JkZXJdLCBhY3Rpb24sICdtYWlsX3NoaXBtZW50Jyk7XG4gIH07XG5cbiAgcmVuZGVyRnVsZmlsbEJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oXG4gICAgICAnRnVsZmlsbCBUaGlzIE9yZGVyJyxcbiAgICAgIHsgZGlzYWJsZWQ6IGZhbHNlIH0sXG4gICAgICB0aGlzLmZ1bGZpbGxPcmRlclxuICAgICk7XG4gIH1cblxuICByZW5kZXJCdXR0b24odGV4dCwgcGFyYW1zLCBjYWxsYmFjayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHBhcmFtcy5jbGFzc05hbWUgfHwgJ3BpbmstYnV0dG9uJztcbiAgICBjb25zdCBjbGlja0FyZ3MgPSBwYXJhbXMuY2xpY2tBcmdzIHx8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHBhcmFtcy5kaXNhYmxlZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbGxiYWNrKGNsaWNrQXJncyl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclByaW50TGFiZWwoKSB7XG4gICAgY29uc3QgeyBvcmRlciwgdXNlclJvbGVzOiByb2xlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuc3RhdGUubG9hZGluZ0xhYmVsO1xuICAgIGNvbnN0IHNoaXBtZW50QWN0aW9uID0gc2hpcG1lbnRBY3Rpb25zKG9yZGVyLCByb2xlcyk7XG5cbiAgICBsZXQgb25DbGljaywgcHJpbnRQcm9tcHQsIGNsaWNrQXJncywgc2hpcG1lbnREaXY7XG4gICAgc3dpdGNoIChsYWJlbFN0YXRlKHJvbGVzLCBvcmRlciwgZGlzYWJsZWQpKSB7XG4gICAgICBjYXNlICduZWVkc19sYWJlbCc6XG4gICAgICAgIHByaW50UHJvbXB0ID0gJ0NyZWF0ZSBMYWJlbCc7XG4gICAgICAgIG9uQ2xpY2sgPSB0aGlzLm1ha2VTaGlwcGluZ0xhYmVsO1xuICAgICAgICBjbGlja0FyZ3MgPSBzaGlwbWVudEFjdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbl9wcm9ncmVzcyc6XG4gICAgICAgIHByaW50UHJvbXB0ID0gJ0NyZWF0aW5nIExhYmVsJztcbiAgICAgIGNhc2UgJ2xhYmVsX2NyZWF0ZWQnOlxuICAgICAgICBwcmludFByb21wdCA9ICdQcmludCBMYWJlbCc7XG4gICAgICAgIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoTmV3T3JkZXJzTGlzdCgpO1xuICAgICAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBOT1RFOiB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IG9yZGVyQ29tcGxldGUgZ2V0cyB0aGUgY29ycmVjdCBzaGlwbWVudC5cbiAgICAgICAgc2hpcG1lbnREaXYgPSA8V2VsY29tZUtpdFByaW50IC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oXG4gICAgICAgICAgcHJpbnRQcm9tcHQsXG4gICAgICAgICAgeyBkaXNhYmxlZDogZGlzYWJsZWQsIGNsaWNrQXJnczogY2xpY2tBcmdzIH0sXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICApfVxuICAgICAgICB7c2hpcG1lbnREaXZ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVsZmlsbE9yZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb3JkZXI6IHsgaWQ6IG9yZGVySWQsIHN0b3JlX2lkOiBzdG9yZUlkIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0YSA9IHsgb3JkZXI6IHsgaWQ6IG9yZGVySWQsIHN0b3JlX2lkOiBzdG9yZUlkLCBmdWxmaWxsZWQ6IHRydWUgfSB9O1xuXG4gICAgdGhpcy5wcm9wcy5zZXRMb2FkZXIoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0xhYmVsOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5wcm9wc1xuICAgICAgLnVwZGF0ZU9yZGVyKGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCB7IG9yZGVyLCB1c2VyUm9sZXM6IHJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzaGlwbWVudEFjdGlvbiA9IHNoaXBtZW50QWN0aW9ucyhvcmRlciwgcm9sZXMpO1xuICAgICAgICBjb25zdCBzaGlwbWVudFR5cGUgPSBzaGlwbWVudFR5cGVzKHJvbGVzKTtcblxuICAgICAgICBpZiAoc2hpcG1lbnRUeXBlLmhhcygnbWFpbF9zaGlwbWVudCcpKSB7XG4gICAgICAgICAgdGhpcy5tYWtlU2hpcHBpbmdMYWJlbChzaGlwbWVudEFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHdlbGNvbWVLaXQob3JkZXIpIHtcbiAgICBpZiAoIW9yZGVyLmZ1bGZpbGxlZCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRnVsZmlsbEJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcmludExhYmVsKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTm90ZXMobm90ZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbm90ZXMgfSk7XG4gIH1cblxuICBzdWJtaXROb3RlcyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgb3JkZXI6IHtcbiAgICAgICAgcmVxdWVzdGVyX25vdGVzOiB0aGlzLnN0YXRlLm5vdGVzLFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5vcmRlci5pZCxcbiAgICAgICAgc3RvcmVfaWQ6IHRoaXMucHJvcHMub3JkZXIuc3RvcmVfaWQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBraW5kID0gJ3N1Y2Nlc3MnO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm90ZXMgVXBkYXRlZCBTdWNjZXNzZnVsbHknO1xuICAgIHRoaXMucHJvcHNcbiAgICAgIC51cGRhdGVPcmRlcihkYXRhKVxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcmVuZGVyTm90ZXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5vdGVzLWZvcm1cIiBvblN1Ym1pdD17ZSA9PiB0aGlzLnN1Ym1pdE5vdGVzKGUpfT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMz5PcmRlciBOb3Rlczo8L2gzPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY29scz17NDN9XG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5vcmRlclsncmVxdWVzdGVyX25vdGVzJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZU5vdGVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNob3J0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJHYXJtZW50QWx0ZXJhdGlvbnMoZ2FybWVudCkge1xuICAgIHJldHVybiBnYXJtZW50LmFsdGVyYXRpb25zLm1hcCgoYWx0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FydC1hbHRlcmF0aW9uXCI+XG4gICAgICAgICAge2FsdC5uYW1lfVxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyR2FybWVudHMoZ2FybWVudHMpIHtcbiAgICByZXR1cm4gZ2FybWVudHMubWFwKChnYXJtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8aDM+e2dhcm1lbnQubmFtZX08L2gzPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckdhcm1lbnRBbHRlcmF0aW9ucyhnYXJtZW50KX1cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3JkZXIsIGN1cnJlbnRDdXN0b21lciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlkLCB3ZWlnaHQsIGNyZWF0ZWRfYXQsIHRvdGFsLCBwcm92aWRlcl9ub3RlcywgaXRlbXMgfSA9IG9yZGVyO1xuICAgIGNvbnN0IHsgcHJvdmlkZXJfaWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBvcmRlckRhdGUgPSBtb21lbnQoY3JlYXRlZF9hdCkuZm9ybWF0KCdNTS1ERC1ZWVlZJyk7XG5cbiAgICBjb25zdCBzZWxlY3RUYWlsb3IgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5BbHRlcmF0aW9uczo8L3A+XG5cbiAgICAgICAge3RoaXMucmVuZGVyR2FybWVudHMob3JkZXIuaXRlbXMpfVxuICAgICAgICA8U2VsZWN0VGFpbG9yIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSB0YWlsb3JJZD17cHJvdmlkZXJfaWR9IC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHNob3J0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICBDaGFuZ2UgVGFpbG9yXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IGRpc3BsYXkgPVxuICAgICAgb3JkZXIudHlwZSA9PT0gJ1RhaWxvck9yZGVyJyA/IHNlbGVjdFRhaWxvciA6IHRoaXMud2VsY29tZUtpdChvcmRlcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzXCI+XG4gICAgICAgIDxoMz5PcmRlciBEZXRhaWxzOjwvaDM+XG4gICAgICAgIDxwPk9yZGVyIElEOiB7aWR9PC9wPlxuICAgICAgICA8cD5PcmRlciBXZWlnaHQ6IHt3ZWlnaHR9PC9wPlxuICAgICAgICA8cD5PcmRlciBEYXRlOiB7b3JkZXJEYXRlfTwvcD5cbiAgICAgICAgPHA+VG90YWwgQ2hhcmdlczogJHt0b3RhbH08L3A+XG4gICAgICAgIDxwPk9yZGVyIE5vdGVzOjwvcD5cbiAgICAgICAge3RoaXMucmVuZGVyTm90ZXMoKX1cbiAgICAgICAge2Rpc3BsYXl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5ld09yZGVyRGV0YWlsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FkbWluL05ld09yZGVyRGV0YWlsLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgV2VsY29tZUtpdFByaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjdXJyZW50T3JkZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChjdXJyZW50T3JkZXIpIHtcbiAgICAgIGNvbnN0IHtzaGlwcGluZ19sYWJlbH0gPSBjdXJyZW50T3JkZXIuc2hpcG1lbnRzWzBdO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmludFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2luZy1zbGlwLWluZm9cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFja2luZy1zbGlwLWxhYmVsXCJcbiAgICAgICAgICAgICAgc3JjPXtzaGlwcGluZ19sYWJlbH1cbiAgICAgICAgICAgICAgYWx0PVwic2hpcHBpbmcgbGFiZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgY3VycmVudE9yZGVyOiBzdG9yZS5jdXJyZW50T3JkZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoV2VsY29tZUtpdFByaW50KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3ByaW50cy9XZWxjb21lS2l0UHJpbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCByZW5kZXJPcmRlcnMgPSAob3JkZXJzLCBjbGFzc05hbWUsIHNlbGVjdE9yZGVyKSA9PiB7XG4gIGlmIChvcmRlcnMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBvcmRlcnMubWFwKChvcmRlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHtpZCwgY3VzdG9tZXIsIHRvdGFsfSA9IG9yZGVyO1xuICAgICAgY29uc3Qge2ZpcnN0X25hbWUsIGxhc3RfbmFtZX0gPSBjdXN0b21lcjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfS1saWB9XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RPcmRlcihvcmRlcil9XG4gICAgICAgID5cbiAgICAgICAgICAje29yZGVyLmlkfSAtIHtmaXJzdF9uYW1lfSB7bGFzdF9uYW1lfSAtICR7dG90YWx9XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8cD5ObyBOZXcgT3JkZXJzPC9wPjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFJlbmRlck5ld09yZGVyTGlzdCA9IHByb3BzID0+IHtcbiAgY29uc3Qge29yZGVycywgY2xhc3NOYW1lLCBzZWxlY3RPcmRlcn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfS1kaXZgfT5cbiAgICAgIDxoMz5NYW5hZ2UgTmV3IE9yZGVyczwvaDM+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9LXVsYH0+XG4gICAgICAgIHtyZW5kZXJPcmRlcnMob3JkZXJzLnVuYXNzaWduZWQsIGNsYXNzTmFtZSwgc2VsZWN0T3JkZXIpfVxuICAgICAgPC91bD5cblxuICAgICAgPGgzPk1hbmFnZSBOZXcgS2l0czwvaDM+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9LXVsYH0+XG4gICAgICAgIHtyZW5kZXJPcmRlcnMob3JkZXJzLndlbGNvbWVfa2l0cywgY2xhc3NOYW1lLCBzZWxlY3RPcmRlcil9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9uZXdPcmRlckxpc3RzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==