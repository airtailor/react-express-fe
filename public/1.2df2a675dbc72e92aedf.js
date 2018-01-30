webpackJsonp([1],{

/***/ 340:
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

var _reactRouterDom = __webpack_require__(11);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(34);

var _shippingFunctions = __webpack_require__(332);

var _RetailerOrderList = __webpack_require__(747);

var _RetailerOrderList2 = _interopRequireDefault(_RetailerOrderList);

var _TailorOrderList = __webpack_require__(752);

var _TailorOrderList2 = _interopRequireDefault(_TailorOrderList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getStoreOrders: _actions.getStoreOrders,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var StoresShow = function (_Component) {
  _inherits(StoresShow, _Component);

  function StoresShow(props) {
    _classCallCheck(this, StoresShow);

    var _this = _possibleConstructorReturn(this, (StoresShow.__proto__ || Object.getPrototypeOf(StoresShow)).call(this));

    _this.timer = function () {
      if ((0, _shippingFunctions.waitingForPostmatesUpdate)(_this.props.openOrders)) {
        _this.refreshStoreOrders();
      }
    };

    _this.refreshStoreOrders = function () {
      _this.props.setLoader();

      var _this$props = _this.props,
          getStoreOrders = _this$props.getStoreOrders,
          paramsId = _this$props.match.params.store_id,
          currentUserId = _this$props.currentUser.user.id,
          admin = _this$props.userRoles.admin;


      var storeId = paramsId && admin ? paramsId : currentUserId;
      _this.setState({ loadingOrders: true });
      getStoreOrders(storeId).then(function (res) {
        _this.setState({ loadingOrders: false });
        _this.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.handleBulkMailRes = function (res) {
      var errors = res.data.body.errors;

      if ((0, _isEmpty2.default)(errors)) {
        _this.setState({ selectedOrderShipments: res.data.body }, function () {
          var shipping_label = _this.state.selectedOrderShipments[0].shipping_label;


          var print = function print() {
            window.print();

            setTimeout(function () {
              _this.setState({
                selectedOrders: new Set(),
                selectedOrderShipments: []
              });
            }, 1000);
          };
          (0, _shippingFunctions.imageLoader)(shipping_label, print);
        });
      } else {
        Object.keys(errors).map(function (key) {
          _this.props.setGrowler({
            kind: 'warning',
            message: errors[key][0].message
          });
        });
      }
    };

    _this.handleMessengerRes = function (res) {
      var kind = 'success';
      var message = 'Messenger has been requested!';

      _this.props.setGrowler({ kind: kind, message: message });
      _this.setState({ selectedOrders: new Set() });
    };

    _this.alertCustomers = function () {
      var _this$props2 = _this.props,
          roles = _this$props2.userRoles,
          store_id = _this$props2.currentStore.id;

      var orders = _this.state.selectedOrders;
      _this.props.setLoader();
      (0, _actions.alertCustomersPickup)(orders, store_id).then(function (res) {
        if (res.body.status === 200) {
          var kind = 'success';
          var message = 'Your customers have been notified to pick up their orders.';
          _this.props.setGrowler({ kind: kind, message: message });
          _this.props.removeLoader();
          _this.refreshStoreOrders();
          _this.setState({ selectedOrders: new Set() });
        }
      });
    };

    _this.toggleOrderSelect = function (order) {
      if (!_this.state.selectedOrders.has(order)) {
        var newSelectedOrders = _this.state.selectedOrders;
        newSelectedOrders.add(order);
        _this.setState({ selectedOrders: newSelectedOrders });
      } else {
        var _newSelectedOrders = _this.state.selectedOrders;
        _newSelectedOrders.delete(order);
        _this.setState({ selectedOrders: _newSelectedOrders });
      }
    };

    _this.setOrderTabState = function (state) {
      _this.setState({ showOrderState: state, selectedOrders: new Set() });
    };

    _this.markCustomerReceived = function () {
      var orders = _this.state.selectedOrders;
      var _this$props3 = _this.props,
          store_id = _this$props3.currentStore.id,
          setLoader = _this$props3.setLoader,
          removeLoader = _this$props3.removeLoader,
          setGrowler = _this$props3.setGrowler;


      var orderIds = [].concat(_toConsumableArray(orders)).map(function (order) {
        return order.id;
      });

      setLoader();
      (0, _actions.customerReceived)(orderIds, store_id).then(function (res) {
        removeLoader();
        var kind = 'success';
        var message = 'Order has been marked as Completed! You can now view it in the Archive.';
        setGrowler({ kind: kind, message: message });
        _this.refreshStoreOrders();
        _this.setState({ selectedOrders: new Set() });
      }).catch(function (err) {
        return console.log('err');
      });
    };

    _this.sortOrdersByStatus = function (status) {
      var _this$props4 = _this.props,
          orders = _this$props4.openOrders,
          roles = _this$props4.userRoles;


      switch (status) {
        case 'new_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return !(0, _isEmpty2.default)(order.shipments) && order.tailor;
            });
          } else {
            return orders.filter(function (order) {
              var shipments = order.shipments;


              var noShipments = (0, _isEmpty2.default)(shipments);
              var lastShipment = shipments[shipments.length - 1];
              var notFulfilled = !order.fulfilled;

              var messengerNotDeliveredYet = shipments.length > 0 && lastShipment.delivery_type === 'messenger_shipment' && lastShipment.status != 'delivered';

              return notFulfilled && (noShipments || messengerNotDeliveredYet);
            });
          }
        case 'in_progress_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return order.arrived && !order.fulfilled;
            });
          } else {
            return orders.filter(function (order) {
              if ((0, _isEmpty2.default)(order.shipments)) {
                return false;
              }

              var tailor = order.tailor,
                  fulfilled = order.fulfilled,
                  shipments = order.shipments;
              var _shipments = shipments[shipments.length - 1],
                  status = _shipments.status,
                  delivery_type = _shipments.delivery_type;


              var mailShipmentExists = delivery_type === 'mail_shipment';
              var messengerShipmentDelivered = status === 'delivered';

              return (mailShipmentExists || messengerShipmentDelivered) && tailor && !fulfilled;
            });
          }
        case 'ready_orders':
          return orders.filter(function (order) {
            return order.fulfilled;
          });
        default:
          return orders;
      }
    };

    _this.state = {
      showOrderState: 'new_orders',
      selectedOrders: new Set(),
      selectedOrderShipments: [],
      loadingOrders: true
    };
    return _this;
  }

  _createClass(StoresShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshStoreOrders();
      if (this.props.userRoles.retailer || this.props.userRoles.admin) {
        this.newInterval = setInterval(this.timer, 10000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.newInterval);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      var _props = this.props,
          _props$userRoles = _props.userRoles,
          tailor = _props$userRoles.tailor,
          retailer = _props$userRoles.retailer,
          admin = _props$userRoles.admin,
          userRoles = _props.userRoles,
          openOrders = _props.openOrders;
      var _state = this.state,
          loadingOrders = _state.loadingOrders,
          selectedOrders = _state.selectedOrders,
          selectedOrderShipments = _state.selectedOrderShipments,
          showOrderState = _state.showOrderState;


      var headerText = 'Orders / ' + this.props.currentStore.name;

      if (retailer || admin) {
        return _react2.default.createElement(_RetailerOrderList2.default, {
          showOrderState: showOrderState,
          loadingOrders: loadingOrders,
          headerText: headerText,
          openOrders: openOrders,
          userRoles: userRoles,
          selectedOrders: selectedOrders,
          selectedOrderShipments: selectedOrderShipments,
          handleBulkMailRes: this.handleBulkMailRes,
          handleMessengerRes: this.handleMessengerRes,
          refreshStoreOrders: this.refreshStoreOrders,
          setOrderTabState: this.setOrderTabState,
          markCustomerReceived: this.markCustomerReceived,
          alertCustomers: this.alertCustomers,
          toggleOrderSelect: this.toggleOrderSelect,
          sortOrdersByStatus: this.sortOrdersByStatus
        });
      } else if (tailor) {
        return _react2.default.createElement(_TailorOrderList2.default, {
          headerText: headerText,
          openOrders: openOrders,
          loadingOrders: loadingOrders,
          userRoles: userRoles,
          sortOrdersByStatus: this.sortOrdersByStatus
        });
      }
    }
  }]);

  return StoresShow;
}(_react.Component);

StoresShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  getStoreOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresShow);

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

/***/ 743:
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

var OrderHeaders = function (_Component) {
  _inherits(OrderHeaders, _Component);

  function OrderHeaders() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderHeaders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderHeaders.__proto__ || Object.getPrototypeOf(OrderHeaders)).call.apply(_ref, [this].concat(args))), _this), _this.orderHeader = function (text, withSelect, isSelect) {
      if (isSelect) {
        return _react2.default.createElement(
          "h3",
          { className: "order-select-header-cell" },
          text
        );
      } else if (withSelect) {
        return _react2.default.createElement(
          "h3",
          { className: "order-data-header-cell" },
          text
        );
      } else {
        return _react2.default.createElement(
          "h3",
          { className: "order-header-cell-no-select" },
          text
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderHeaders, [{
    key: "render",
    value: function render() {
      var showOrderState = this.props.showOrderState;


      var dateText = void 0;
      if (showOrderState === 'new_orders') {
        dateText = 'Created';
      } else if (showOrderState === 'in_progress_orders') {
        dateText = 'Checked In';
      } else if (showOrderState === 'ready_orders') {
        dateText = 'Fulfilled';
      }

      return _react2.default.createElement(
        "div",
        { className: "order-headers-container" },
        _react2.default.createElement(
          "div",
          { className: "order-headers-row" },
          this.orderHeader('Select:', false, true),
          _react2.default.createElement(
            "div",
            { className: "order-data-headers-container" },
            this.orderHeader('Order', true, false),
            this.orderHeader(dateText, true, false),
            this.orderHeader('Customer', true, false),
            this.orderHeader('Status', true, false)
          )
        )
      );
    }
  }]);

  return OrderHeaders;
}(_react.Component);

exports.default = OrderHeaders;

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(11);

var _Checkbox = __webpack_require__(711);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _StatusCard = __webpack_require__(748);

var _StatusCard2 = _interopRequireDefault(_StatusCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderRow = function (_Component) {
  _inherits(OrderRow, _Component);

  function OrderRow() {
    _classCallCheck(this, OrderRow);

    return _possibleConstructorReturn(this, (OrderRow.__proto__ || Object.getPrototypeOf(OrderRow)).apply(this, arguments));
  }

  _createClass(OrderRow, [{
    key: 'formatStatusString',
    value: function formatStatusString(dueDate, late) {
      var todaysDate = (0, _moment2.default)(new Date());
      var momentDueDate = (0, _moment2.default)(dueDate);
      var diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
      var additionalString = late ? ' days late' : ' days to go';
      var status = (diff + additionalString).toUpperCase();
      return status;
    }
  }, {
    key: 'getOrderStatus',
    value: function getOrderStatus(order) {
      var shipments = order.shipments,
          arrived = order.arrived,
          late = order.late,
          due_date = order.due_date,
          fulfilled = order.fulfilled,
          customer_alerted = order.customer_alerted,
          ship_to_store = order.ship_to_store;
      var _props$userRoles = this.props.userRoles,
          retailer = _props$userRoles.retailer,
          admin = _props$userRoles.admin,
          tailor = _props$userRoles.tailor;


      var status = void 0,
          color = void 0;

      if ((0, _isEmpty2.default)(order.shipments)) {
        status = 'Needs Transit';
        color = 'red';
      } else if (!(0, _isEmpty2.default)(order.shipments) && !order.arrived) {
        var lastShipment = order.shipments[order.shipments.length - 1];
        var delivery_type = lastShipment.delivery_type;


        if (delivery_type === 'mail_shipment') {
          status = 'In Transit';
          color = 'gold';
        } else if (delivery_type === 'messenger_shipment') {
          var shipmentStatus = lastShipment.status;

          if (shipmentStatus === 'pending') {
            status = 'Contacting';
            color = 'red';
          } else if (shipmentStatus === 'pickup') {
            status = 'Picking Up';
            color = 'goldenrod';
          } else if (shipmentStatus === 'pickup_complete' || shipmentStatus === 'dropoff') {
            status = 'Dropping Off';
            color = 'gold';
          } else if (shipmentStatus === 'delivered') {
            status = 'Delivered';
            color = 'green';
          }
        }
      } else if (order.late && !order.fulfilled) {
        if (admin || tailor) {
          var dueTime = this.formatStatusString(order.due_date, true);
          status = dueTime;
        } else if (retailer) {
          status = 'Delayed';
        }
        color = 'red';
      } else if (order.fulfilled && !order.customer_alerted && order.ship_to_store) {
        status = 'In Transit';
        color = 'gold';
      } else if (order.fulfilled && order.customer_alerted && order.ship_to_store) {
        status = 'Notified';
        color = 'red';
      } else if (order.arrived && !order.fulfilled) {
        status = this.formatStatusString(order.due_date, false);
        var statusNum = status.split('')[0];

        if (statusNum > 3) {
          color = 'green';
        } else if (statusNum > 0) {
          color = 'gold';
        } else if (statusNum < 1) {
          color = 'red';
        }
      }
      return { status: status, color: color };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          roles = _props.userRoles,
          order = _props.order,
          showOrderState = _props.showOrderState,
          selectedOrders = _props.selectedOrders,
          toggleOrderSelect = _props.toggleOrderSelect;
      var id = order.id,
          customer = order.customer,
          alterations_count = order.alterations_count,
          created_at = order.created_at,
          arrival_date = order.arrival_date,
          fulfilled_date = order.fulfilled_date;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      var _getOrderStatus = this.getOrderStatus(order),
          color = _getOrderStatus.color,
          status = _getOrderStatus.status;

      var route = '/orders/' + id;
      var orderIsToggled = selectedOrders.has(order);
      var orderToggle = function orderToggle() {
        return toggleOrderSelect(order);
      };

      var displayDate = void 0;
      if (showOrderState === 'new_orders') {
        displayDate = created_at;
      } else if (showOrderState === 'in_progress_orders') {
        displayDate = arrival_date;
      } else if (showOrderState === 'ready_orders') {
        displayDate = fulfilled_date;
      }

      var momentDate = (0, _moment2.default)(displayDate);
      var isToday = momentDate.isSame(new Date(), 'day');
      var yesterday = (0, _moment2.default)(new Date()).add(-1, 'days');
      var wasYest = momentDate.isSame(yesterday, 'day');
      var dateTextFormat = isToday ? '[Today,] h:mma' : wasYest ? '[Yesterday,] h:mma' : 'MMM Do, h:mma';

      var dateText = momentDate.format(dateTextFormat);
      if (dateText === 'Invalid date' && !arrival_date) {
        dateText = 'Pending';
      }

      var orderSelect = _react2.default.createElement(_Checkbox2.default, {
        checked: orderIsToggled,
        type: 'checkbox',
        name: id,
        onChange: orderToggle
      });

      return _react2.default.createElement(
        'div',
        { className: 'order-row', key: id },
        _react2.default.createElement(
          'div',
          { className: 'order-select-cell' },
          orderSelect
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'order-row-link' },
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            dateText
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            first_name,
            ' ',
            last_name
          ),
          _react2.default.createElement(_StatusCard2.default, { color: color, text: status })
        ),
        _react2.default.createElement('div', { className: 'order-data-break-row' })
      );
    }
  }]);

  return OrderRow;
}(_react.Component);

exports.default = OrderRow;

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _OrderRow = __webpack_require__(744);

var _OrderRow2 = _interopRequireDefault(_OrderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderRows = function (_Component) {
  _inherits(OrderRows, _Component);

  function OrderRows() {
    _classCallCheck(this, OrderRows);

    return _possibleConstructorReturn(this, (OrderRows.__proto__ || Object.getPrototypeOf(OrderRows)).apply(this, arguments));
  }

  _createClass(OrderRows, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          openOrders = _props.openOrders,
          showOrderState = _props.showOrderState,
          userRoles = _props.userRoles,
          loadingOrders = _props.loadingOrders,
          selectedOrders = _props.selectedOrders,
          toggleOrderSelect = _props.toggleOrderSelect,
          sortOrdersByStatus = _props.sortOrdersByStatus;


      if (!(0, _isEmpty2.default)(openOrders)) {
        var sortedOrders = sortOrdersByStatus(showOrderState);
        if (!(0, _isEmpty2.default)(sortedOrders)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            sortedOrders.map(function (order) {
              return _react2.default.createElement(_OrderRow2.default, {
                key: order.id,
                order: order,
                userRoles: userRoles,
                selectedOrders: selectedOrders,
                toggleOrderSelect: toggleOrderSelect,
                showOrderState: showOrderState
              });
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'table-row' },
            _react2.default.createElement(
              'div',
              { className: 'no-orders' },
              'No orders found!'
            )
          );
        }
      } else if (loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      }
      return _react2.default.createElement('div', null);
    }
  }]);

  return OrderRows;
}(_react.Component);

exports.default = OrderRows;

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderTabs = function (_Component) {
  _inherits(OrderTabs, _Component);

  function OrderTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderTabs.__proto__ || Object.getPrototypeOf(OrderTabs)).call.apply(_ref, [this].concat(args))), _this), _this.countOrdersByStatus = function (status) {
      return _this.sortOrdersByStatus(status).length;
    }, _this.sortOrdersByStatus = function (status) {
      var _this$props = _this.props,
          orders = _this$props.openOrders,
          roles = _this$props.userRoles;


      switch (status) {
        case 'new_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return !(0, _isEmpty2.default)(order.shipments) && order.tailor;
            });
          } else {
            return orders.filter(function (order) {
              var shipments = order.shipments;


              var noShipments = (0, _isEmpty2.default)(shipments);
              var lastShipment = shipments[shipments.length - 1];
              var notFulfilled = !order.fulfilled;

              var messengerNotDeliveredYet = shipments.length > 0 && lastShipment.delivery_type === 'messenger_shipment' && lastShipment.status != 'delivered';

              return notFulfilled && (noShipments || messengerNotDeliveredYet);
            });
          }
        case 'in_progress_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return order.arrived && !order.fulfilled;
            });
          } else {
            return orders.filter(function (order) {
              if ((0, _isEmpty2.default)(order.shipments)) {
                return false;
              }

              var tailor = order.tailor,
                  fulfilled = order.fulfilled,
                  shipments = order.shipments;
              var _shipments = shipments[shipments.length - 1],
                  status = _shipments.status,
                  delivery_type = _shipments.delivery_type;


              var mailShipmentExists = delivery_type === 'mail_shipment';
              var messengerShipmentDelivered = status === 'delivered';

              return (mailShipmentExists || messengerShipmentDelivered) && tailor && !fulfilled;
            });
          }
        case 'ready_orders':
          return orders.filter(function (order) {
            return order.fulfilled;
          });
        default:
          return orders;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderTabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var allTabs = [{
        className: 'order-state-tab',
        status: 'new_orders',
        text: 'New Orders'
      }, {
        className: 'order-state-tab',
        status: 'in_progress_orders',
        text: 'In Process'
      }, {
        className: 'order-state-tab',
        status: 'ready_orders',
        text: 'In-Store Pickup'
      }];

      var tabs = allTabs.map(function (tab, i) {
        if (tab.status === _this2.props.showOrderState) {
          tab.className = tab.className.concat(' selected');
        }

        return _react2.default.createElement(
          'div',
          {
            key: i,
            className: tab.className,
            onClick: function onClick() {
              return _this2.props.setOrderTabState(tab.status);
            }
          },
          _react2.default.createElement(
            'h3',
            null,
            tab.text,
            ' (',
            _this2.countOrdersByStatus(tab.status),
            ')'
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'order-state-row' },
        tabs
      );
    }
  }]);

  return OrderTabs;
}(_react.Component);

exports.default = OrderTabs;

/***/ }),

/***/ 747:
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

var _OrderTabs = __webpack_require__(746);

var _OrderTabs2 = _interopRequireDefault(_OrderTabs);

var _OrderHeaders = __webpack_require__(743);

var _OrderHeaders2 = _interopRequireDefault(_OrderHeaders);

var _OrderRows = __webpack_require__(745);

var _OrderRows2 = _interopRequireDefault(_OrderRows);

var _SendOrder = __webpack_require__(754);

var _SendOrder2 = _interopRequireDefault(_SendOrder);

var _CustomerOptions = __webpack_require__(753);

var _CustomerOptions2 = _interopRequireDefault(_CustomerOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RetailerOrderList = function (_Component) {
  _inherits(RetailerOrderList, _Component);

  function RetailerOrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RetailerOrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RetailerOrderList.__proto__ || Object.getPrototypeOf(RetailerOrderList)).call.apply(_ref, [this].concat(args))), _this), _this.mgmtControls = function () {
      var _this$props = _this.props,
          showOrderState = _this$props.showOrderState,
          selectedOrders = _this$props.selectedOrders,
          selectedOrderShipments = _this$props.selectedOrderShipments,
          handleBulkMailRes = _this$props.handleBulkMailRes,
          handleMessengerRes = _this$props.handleMessengerRes,
          refreshStoreOrders = _this$props.refreshStoreOrders,
          markCustomerReceived = _this$props.markCustomerReceived,
          alertCustomers = _this$props.alertCustomers;


      if (showOrderState === 'new_orders') {
        return _react2.default.createElement(_SendOrder2.default, {
          selectedOrders: [].concat(_toConsumableArray(selectedOrders)),
          selectedOrderShipments: [].concat(_toConsumableArray(selectedOrderShipments)),
          handleBulkMailRes: handleBulkMailRes,
          handleMessengerRes: handleMessengerRes,
          refreshStoreOrders: refreshStoreOrders
        });
      } else if (showOrderState === 'ready_orders') {
        return _react2.default.createElement(_CustomerOptions2.default, {
          selectedOrders: [].concat(_toConsumableArray(selectedOrders)),
          alertCustomers: alertCustomers,
          markCustomerReceived: markCustomerReceived
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RetailerOrderList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerText = _props.headerText,
          showOrderState = _props.showOrderState,
          openOrders = _props.openOrders,
          userRoles = _props.userRoles,
          loadingOrders = _props.loadingOrders,
          selectedOrders = _props.selectedOrders,
          setOrderTabState = _props.setOrderTabState,
          toggleOrderSelect = _props.toggleOrderSelect,
          sortOrdersByStatus = _props.sortOrdersByStatus;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'orders' },
          _react2.default.createElement(
            'div',
            { className: 'order-state-container' },
            _react2.default.createElement(_OrderTabs2.default, {
              userRoles: userRoles,
              openOrders: openOrders,
              showOrderState: showOrderState,
              setOrderTabState: setOrderTabState
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_OrderHeaders2.default, { showOrderState: showOrderState })
          ),
          _react2.default.createElement('div', { className: 'order-header-break-row' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_OrderRows2.default, {
              showOrderState: showOrderState,
              openOrders: openOrders,
              userRoles: userRoles,
              loadingOrders: loadingOrders,
              selectedOrders: selectedOrders,
              toggleOrderSelect: toggleOrderSelect,
              sortOrdersByStatus: sortOrdersByStatus
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            this.mgmtControls()
          )
        )
      );
    }
  }]);

  return RetailerOrderList;
}(_react.Component);

exports.default = RetailerOrderList;

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusCard = function (_Component) {
  _inherits(StatusCard, _Component);

  function StatusCard() {
    _classCallCheck(this, StatusCard);

    return _possibleConstructorReturn(this, (StatusCard.__proto__ || Object.getPrototypeOf(StatusCard)).apply(this, arguments));
  }

  _createClass(StatusCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: color + ' status-card order-data-cell' },
        text
      );
    }
  }]);

  return StatusCard;
}(_react.Component);

StatusCard.propTypes = {
  color: _propTypes2.default.string.isRequired, // parentComponent
  text: _propTypes2.default.string.isRequired // parentComponent
};
exports.default = StatusCard;

/***/ }),

/***/ 749:
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

var OrderHeaders = function (_Component) {
  _inherits(OrderHeaders, _Component);

  function OrderHeaders() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderHeaders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderHeaders.__proto__ || Object.getPrototypeOf(OrderHeaders)).call.apply(_ref, [this].concat(args))), _this), _this.renderHeaderCell = function (text, withSelect, isSelect) {
      if (isSelect) {
        return _react2.default.createElement(
          "h3",
          { className: "order-select-header-cell" },
          text
        );
      } else if (withSelect) {
        return _react2.default.createElement(
          "h3",
          { className: "order-data-header-cell" },
          text
        );
      } else {
        return _react2.default.createElement(
          "h3",
          { className: "order-header-cell-no-select" },
          text
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderHeaders, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "order-headers-container" },
        _react2.default.createElement(
          "div",
          { className: "order-headers-row-no-select" },
          _react2.default.createElement(
            "div",
            { className: "order-headers-container-no-select" },
            this.renderHeaderCell('Id', false),
            this.renderHeaderCell('Status', false),
            this.renderHeaderCell('Customer', false),
            this.renderHeaderCell('Quantity', false)
          )
        )
      );
    }
  }]);

  return OrderHeaders;
}(_react.Component);

exports.default = OrderHeaders;

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(11);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderRow = function (_Component) {
  _inherits(OrderRow, _Component);

  function OrderRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderRow.__proto__ || Object.getPrototypeOf(OrderRow)).call.apply(_ref, [this].concat(args))), _this), _this.formatStatusString = function (dueDate, late) {
      var todaysDate = (0, _moment2.default)(new Date());
      var momentDueDate = (0, _moment2.default)(dueDate);
      var diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
      var additionalString = late ? ' days late' : ' days to go';
      var status = (diff + additionalString).toUpperCase();
      return status;
    }, _this.getOrderStatus = function (order) {
      var shipments = order.shipments,
          arrived = order.arrived,
          late = order.late,
          due_date = order.due_date,
          fulfilled = order.fulfilled,
          customer_alerted = order.customer_alerted,
          ship_to_store = order.ship_to_store;
      var _this$props$userRoles = _this.props.userRoles,
          retailer = _this$props$userRoles.retailer,
          admin = _this$props$userRoles.admin,
          tailor = _this$props$userRoles.tailor;


      var status = void 0,
          color = void 0;

      if ((0, _isEmpty2.default)(order.shipments)) {
        status = 'Needs Transit';
        color = 'red';
      } else if (!(0, _isEmpty2.default)(order.shipments) && !order.arrived) {
        var lastShipment = order.shipments[order.shipments.length - 1];
        var delivery_type = lastShipment.delivery_type;


        if (delivery_type === 'mail_shipment') {
          status = 'In Transit';
          color = 'gold';
        } else if (delivery_type === 'messenger_shipment') {
          var shipmentStatus = lastShipment.status;

          if (shipmentStatus === 'pending') {
            status = 'Contacting';
            color = 'red';
          } else if (shipmentStatus === 'pickup') {
            status = 'Picking Up';
            color = 'goldenrod';
          } else if (shipmentStatus === 'pickup_complete' || shipmentStatus === 'dropoff') {
            status = 'Dropping Off';
            color = 'gold';
          } else if (shipmentStatus === 'delivered') {
            status = 'Delivered';
            color = 'green';
          }
        }
      } else if (order.late && !order.fulfilled) {
        if (admin || tailor) {
          var dueTime = _this.formatStatusString(order.due_date, true);
          status = dueTime;
        } else if (retailer) {
          status = 'Delayed';
        }
        color = 'red';
      } else if (order.fulfilled && !order.customer_alerted && order.ship_to_store) {
        status = 'In Transit';
        color = 'gold';
      } else if (order.fulfilled && order.customer_alerted && order.ship_to_store) {
        status = 'Notified';
        color = 'red';
      } else if (order.arrived && !order.fulfilled) {
        status = _this.formatStatusString(order.due_date, false);
        var statusNum = status.split('')[0];

        if (statusNum > 3) {
          color = 'green';
        } else if (statusNum > 0) {
          color = 'gold';
        } else if (statusNum < 1) {
          color = 'red';
        }
      }
      return { status: status, color: color };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          order = _props.order,
          _props$order = _props.order,
          id = _props$order.id,
          alterations_count = _props$order.alterations_count,
          _props$order$customer = _props$order.customer,
          first_name = _props$order$customer.first_name,
          last_name = _props$order$customer.last_name;

      var _getOrderStatus = this.getOrderStatus(order),
          color = _getOrderStatus.color,
          status = _getOrderStatus.status;

      var route = '/orders/' + id;
      return _react2.default.createElement(
        'div',
        { className: 'order-row', key: id },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'order-row-link-no-select' },
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { style: { color: color }, className: 'order-cell-no-select' },
            status
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            first_name,
            ' ',
            last_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            alterations_count
          )
        ),
        _react2.default.createElement('div', { className: 'order-data-break-row' })
      );
    }
  }]);

  return OrderRow;
}(_react.Component);

exports.default = OrderRow;

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _OrderRow = __webpack_require__(750);

var _OrderRow2 = _interopRequireDefault(_OrderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderRows = function (_Component) {
  _inherits(OrderRows, _Component);

  function OrderRows() {
    _classCallCheck(this, OrderRows);

    return _possibleConstructorReturn(this, (OrderRows.__proto__ || Object.getPrototypeOf(OrderRows)).apply(this, arguments));
  }

  _createClass(OrderRows, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          openOrders = _props.openOrders,
          sortOrdersByStatus = _props.sortOrdersByStatus,
          loadingOrders = _props.loadingOrders,
          userRoles = _props.userRoles;


      if (!(0, _isEmpty2.default)(openOrders)) {
        var ordersWithShipments = sortOrdersByStatus('new_orders');
        if (!(0, _isEmpty2.default)(ordersWithShipments)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            ordersWithShipments.map(function (order, i) {
              return _react2.default.createElement(_OrderRow2.default, { order: order, userRoles: userRoles, key: i });
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'table-row' },
            _react2.default.createElement(
              'div',
              { className: 'no-orders' },
              'No orders found!'
            )
          );
        }
      } else if (loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      } else {
        return _react2.default.createElement('div', { className: 'table-row' });
      }
      return _react2.default.createElement('div', null);
    }
  }]);

  return OrderRows;
}(_react.Component);

exports.default = OrderRows;

/***/ }),

/***/ 752:
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

var _OrderHeaders = __webpack_require__(749);

var _OrderHeaders2 = _interopRequireDefault(_OrderHeaders);

var _OrderRows = __webpack_require__(751);

var _OrderRows2 = _interopRequireDefault(_OrderRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TailorOrderList = function (_Component) {
  _inherits(TailorOrderList, _Component);

  function TailorOrderList() {
    _classCallCheck(this, TailorOrderList);

    return _possibleConstructorReturn(this, (TailorOrderList.__proto__ || Object.getPrototypeOf(TailorOrderList)).apply(this, arguments));
  }

  _createClass(TailorOrderList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerText = _props.headerText,
          openOrders = _props.openOrders,
          loadingOrders = _props.loadingOrders,
          sortOrdersByStatus = _props.sortOrdersByStatus,
          userRoles = _props.userRoles;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'orders' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_OrderHeaders2.default, null)
          ),
          _react2.default.createElement('div', { className: 'order-header-break-row' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_OrderRows2.default, {
              openOrders: openOrders,
              loadingOrders: loadingOrders,
              sortOrdersByStatus: sortOrdersByStatus,
              userRoles: userRoles
            })
          )
        )
      );
    }
  }]);

  return TailorOrderList;
}(_react.Component);

exports.default = TailorOrderList;

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(712);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerOptions = function (_Component) {
  _inherits(CustomerOptions, _Component);

  function CustomerOptions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomerOptions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomerOptions.__proto__ || Object.getPrototypeOf(CustomerOptions)).call.apply(_ref, [this].concat(args))), _this), _this.customerNotifiedSet = function () {
      var selectedOrders = _this.props.selectedOrders;

      return new Set(selectedOrders.map(function (order) {
        return order.customer_alerted;
      }));
    }, _this.customerNotifiedDisabled = function () {
      var set = _this.customerNotifiedSet();
      return set.size < 1 || set.has(true);
    }, _this.customerPickupDisabled = function () {
      var set = _this.customerNotifiedSet();
      return set.size < 1 || set.has(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomerOptions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'flex-container',
          style: { justifyContent: 'space-around' }
        },
        _react2.default.createElement(_Button2.default, {
          className: 'send-order-button',
          onClick: this.props.alertCustomers,
          disabled: this.customerNotifiedDisabled(),
          text: 'NOTIFY CUSTOMER'
        }),
        _react2.default.createElement(_Button2.default, {
          className: 'send-order-button',
          onClick: this.props.markCustomerReceived,
          disabled: this.customerPickupDisabled(),
          text: 'CUSTOMER RECEIVED'
        })
      );
    }
  }]);

  return CustomerOptions;
}(_react.Component);

exports.default = CustomerOptions;

/***/ }),

/***/ 754:
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

var _Button = __webpack_require__(712);

var _Button2 = _interopRequireDefault(_Button);

var _ShippingOptions = __webpack_require__(755);

var _ShippingOptions2 = _interopRequireDefault(_ShippingOptions);

var _OrderComplete = __webpack_require__(334);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

var _shippingFunctions = __webpack_require__(332);

var _actions = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var SendOrder = function (_Component) {
  _inherits(SendOrder, _Component);

  function SendOrder(props) {
    _classCallCheck(this, SendOrder);

    var _this = _possibleConstructorReturn(this, (SendOrder.__proto__ || Object.getPrototypeOf(SendOrder)).call(this, props));

    _this.hideShow = function () {
      var bool = !_this.state.showOptions;
      _this.setState({ showOptions: bool });
    };

    _this.handleSubmit = function (selection) {
      var selectedOrders = _this.props.selectedOrders;
      var _this$props = _this.props,
          setLoader = _this$props.setLoader,
          removeLoader = _this$props.removeLoader,
          userRoles = _this$props.userRoles;

      var order_ids = [].concat(_toConsumableArray(selectedOrders)).map(function (order) {
        return order.id;
      });

      setLoader();
      var shipment_action = (0, _shippingFunctions.shipmentActions)([].concat(_toConsumableArray(selectedOrders))[0], userRoles);

      (0, _actions.createShipment)({
        shipment: { delivery_type: selection, order_ids: order_ids, shipment_action: shipment_action }
      }).then(function (res) {
        removeLoader();
        selection === 'mail_shipment' ? _this.props.handleBulkMailRes(res) : _this.props.handleMessengerRes(res);
      });
    };

    _this.noSelectedOrders = function (selectedOrders) {
      return selectedOrders.length === 0;
    };

    _this.state = {
      showOptions: false
    };
    return _this;
  }

  _createClass(SendOrder, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var noSelectedOrders = this.noSelectedOrders(nextProps.selectedOrders);
      var showOptionsVisible = this.state.showOptions;

      if (noSelectedOrders && showOptionsVisible) {
        this.hideShow();
        this.props.refreshStoreOrders();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var showOptions = this.state.showOptions;
      var _props = this.props,
          selectedOrders = _props.selectedOrders,
          selectedOrderShipments = _props.selectedOrderShipments;

      var disabled = this.noSelectedOrders(selectedOrders);

      if (showOptions) {
        return _react2.default.createElement(
          'div',
          { className: 'shipping-option-container' },
          _react2.default.createElement(_ShippingOptions2.default, {
            handleSubmit: this.handleSubmit,
            hideShow: this.hideShow
          }),
          _react2.default.createElement(_OrderComplete2.default, { shipmentSet: selectedOrderShipments })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'shipping-option-container' },
          _react2.default.createElement(_Button2.default, {
            className: 'send-order-button',
            onClick: this.hideShow,
            disabled: disabled,
            text: 'SEND ORDER'
          })
        );
      }
    }
  }]);

  return SendOrder;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SendOrder);

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _Checkbox = __webpack_require__(711);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Button = __webpack_require__(712);

var _Button2 = _interopRequireDefault(_Button);

var _shippingFunctions = __webpack_require__(332);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShippingOptions = function (_Component) {
  _inherits(ShippingOptions, _Component);

  function ShippingOptions() {
    _classCallCheck(this, ShippingOptions);

    var _this = _possibleConstructorReturn(this, (ShippingOptions.__proto__ || Object.getPrototypeOf(ShippingOptions)).call(this));

    _this.renderMessengerOption = function () {
      var now = (0, _moment2.default)();

      if ((0, _shippingFunctions.messengerAvailable)(now)) {
        return _react2.default.createElement(
          'div',
          { className: 'shipping-option' },
          _react2.default.createElement('hr', { style: { float: 'right', width: '85%', marginTop: '20px' } }),
          _react2.default.createElement(_Checkbox2.default, {
            name: 'messenger_shipment',
            checked: _this.state.selected === 'messenger_shipment',
            onChange: function onChange(e) {
              return _this.updateSelected(e.target.name);
            },
            text: 'Call Postmates Messenger (est. $13)',
            labelClass: 'shipping-option-label'
          })
        );
      }
    };

    _this.state = {
      selected: null
    };
    return _this;
  }

  _createClass(ShippingOptions, [{
    key: 'updateSelected',
    value: function updateSelected(name) {
      var selected = this.state.selected;

      var newValue = name === selected ? null : name;
      this.setState({ selected: newValue });
    }
  }, {
    key: 'clearSelection',
    value: function clearSelection() {
      this.setState({ selected: null });
      this.props.hideShow();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selected = this.state.selected;

      var selectButtonDisabled = selected ? false : true;

      return _react2.default.createElement(
        'div',
        {
          style: {
            width: '380px',
            border: '3px solid #000033',
            borderRadius: '8px',
            padding: '30px',
            marginTop: '50px'
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'shipping-option' },
          _react2.default.createElement(_Checkbox2.default, {
            name: 'mail_shipment',
            checked: selected === 'mail_shipment',
            onChange: function onChange(e) {
              return _this2.updateSelected(e.target.name);
            },
            text: 'Print USPS Shipping Label (est. $6)',
            labelClass: 'shipping-option-label'
          })
        ),
        this.renderMessengerOption(),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          {
            className: 'flex-container',
            style: { justifyContent: 'space-between' }
          },
          _react2.default.createElement(_Button2.default, {
            className: 'send-order-button',
            onClick: this.props.hideShow,
            disabled: false,
            text: 'CANCEL'
          }),
          _react2.default.createElement(_Button2.default, {
            className: 'send-order-button',
            onClick: function onClick() {
              return _this2.props.handleSubmit(selected);
            },
            disabled: selectButtonDisabled,
            text: 'SELECT'
          })
        )
      );
    }
  }]);

  return ShippingOptions;
}(_react.Component);

exports.default = ShippingOptions;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9SZXRhaWxlck9yZGVyTGlzdC9PcmRlckhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvUmV0YWlsZXJPcmRlckxpc3QvT3JkZXJSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvUmV0YWlsZXJPcmRlckxpc3QvT3JkZXJSb3dzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1JldGFpbGVyT3JkZXJMaXN0L09yZGVyVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9SZXRhaWxlck9yZGVyTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9TdGF0dXNDYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1RhaWxvck9yZGVyTGlzdC9PcmRlckhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvVGFpbG9yT3JkZXJMaXN0L09yZGVyUm93LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1RhaWxvck9yZGVyTGlzdC9PcmRlclJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvVGFpbG9yT3JkZXJMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L3JldGFpbGVyT3JkZXJNZ210Q29udHJvbHMvQ3VzdG9tZXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L3JldGFpbGVyT3JkZXJNZ210Q29udHJvbHMvU2VuZE9yZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L3JldGFpbGVyT3JkZXJNZ210Q29udHJvbHMvU2hpcHBpbmdPcHRpb25zLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJjdXJyZW50U3RvcmUiLCJvcGVuT3JkZXJzIiwic3RvcmVPcmRlcnMiLCJ1c2VyUm9sZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXRTdG9yZU9yZGVycyIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsInNldEdyb3dsZXIiLCJkaXNwYXRjaCIsIlN0b3Jlc1Nob3ciLCJwcm9wcyIsInRpbWVyIiwicmVmcmVzaFN0b3JlT3JkZXJzIiwicGFyYW1zSWQiLCJtYXRjaCIsInBhcmFtcyIsInN0b3JlX2lkIiwiY3VycmVudFVzZXJJZCIsInVzZXIiLCJpZCIsImFkbWluIiwic3RvcmVJZCIsInNldFN0YXRlIiwibG9hZGluZ09yZGVycyIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJoYW5kbGVCdWxrTWFpbFJlcyIsImVycm9ycyIsInJlcyIsImRhdGEiLCJib2R5Iiwic2VsZWN0ZWRPcmRlclNoaXBtZW50cyIsInNoaXBwaW5nX2xhYmVsIiwic3RhdGUiLCJwcmludCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZWxlY3RlZE9yZGVycyIsIlNldCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJraW5kIiwibWVzc2FnZSIsImtleSIsImhhbmRsZU1lc3NlbmdlclJlcyIsImFsZXJ0Q3VzdG9tZXJzIiwicm9sZXMiLCJvcmRlcnMiLCJzdGF0dXMiLCJ0b2dnbGVPcmRlclNlbGVjdCIsImhhcyIsIm9yZGVyIiwibmV3U2VsZWN0ZWRPcmRlcnMiLCJhZGQiLCJkZWxldGUiLCJzZXRPcmRlclRhYlN0YXRlIiwic2hvd09yZGVyU3RhdGUiLCJtYXJrQ3VzdG9tZXJSZWNlaXZlZCIsIm9yZGVySWRzIiwic29ydE9yZGVyc0J5U3RhdHVzIiwidGFpbG9yIiwiZmlsdGVyIiwic2hpcG1lbnRzIiwibm9TaGlwbWVudHMiLCJsYXN0U2hpcG1lbnQiLCJsZW5ndGgiLCJub3RGdWxmaWxsZWQiLCJmdWxmaWxsZWQiLCJtZXNzZW5nZXJOb3REZWxpdmVyZWRZZXQiLCJkZWxpdmVyeV90eXBlIiwiYXJyaXZlZCIsIm1haWxTaGlwbWVudEV4aXN0cyIsIm1lc3NlbmdlclNoaXBtZW50RGVsaXZlcmVkIiwicmV0YWlsZXIiLCJuZXdJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhlYWRlclRleHQiLCJuYW1lIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwicmVzZXRDYXJ0IiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImZpZWxkTmFtZSIsImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiY2xpY2tBcmdzIiwidW5kZWZpbmVkIiwiZGlzYWJsZWQiLCJPcmRlckhlYWRlcnMiLCJvcmRlckhlYWRlciIsIndpdGhTZWxlY3QiLCJpc1NlbGVjdCIsImRhdGVUZXh0IiwiT3JkZXJSb3ciLCJkdWVEYXRlIiwibGF0ZSIsInRvZGF5c0RhdGUiLCJEYXRlIiwibW9tZW50RHVlRGF0ZSIsImRpZmYiLCJNYXRoIiwiYWJzIiwiYWRkaXRpb25hbFN0cmluZyIsInRvVXBwZXJDYXNlIiwiZHVlX2RhdGUiLCJjdXN0b21lcl9hbGVydGVkIiwic2hpcF90b19zdG9yZSIsImNvbG9yIiwic2hpcG1lbnRTdGF0dXMiLCJkdWVUaW1lIiwiZm9ybWF0U3RhdHVzU3RyaW5nIiwic3RhdHVzTnVtIiwic3BsaXQiLCJjdXN0b21lciIsImFsdGVyYXRpb25zX2NvdW50IiwiY3JlYXRlZF9hdCIsImFycml2YWxfZGF0ZSIsImZ1bGZpbGxlZF9kYXRlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdldE9yZGVyU3RhdHVzIiwicm91dGUiLCJvcmRlcklzVG9nZ2xlZCIsIm9yZGVyVG9nZ2xlIiwiZGlzcGxheURhdGUiLCJtb21lbnREYXRlIiwiaXNUb2RheSIsImlzU2FtZSIsInllc3RlcmRheSIsIndhc1llc3QiLCJkYXRlVGV4dEZvcm1hdCIsImZvcm1hdCIsIm9yZGVyU2VsZWN0IiwiT3JkZXJSb3dzIiwic29ydGVkT3JkZXJzIiwiT3JkZXJUYWJzIiwiY291bnRPcmRlcnNCeVN0YXR1cyIsImFsbFRhYnMiLCJ0YWJzIiwidGFiIiwiaSIsImNvbmNhdCIsIlJldGFpbGVyT3JkZXJMaXN0IiwibWdtdENvbnRyb2xzIiwiU3RhdHVzQ2FyZCIsInN0cmluZyIsInJlbmRlckhlYWRlckNlbGwiLCJvcmRlcnNXaXRoU2hpcG1lbnRzIiwiVGFpbG9yT3JkZXJMaXN0IiwiQ3VzdG9tZXJPcHRpb25zIiwiY3VzdG9tZXJOb3RpZmllZFNldCIsImN1c3RvbWVyTm90aWZpZWREaXNhYmxlZCIsInNldCIsInNpemUiLCJjdXN0b21lclBpY2t1cERpc2FibGVkIiwianVzdGlmeUNvbnRlbnQiLCJTZW5kT3JkZXIiLCJoaWRlU2hvdyIsImJvb2wiLCJzaG93T3B0aW9ucyIsImhhbmRsZVN1Ym1pdCIsIm9yZGVyX2lkcyIsInNoaXBtZW50X2FjdGlvbiIsInNoaXBtZW50Iiwic2VsZWN0aW9uIiwibm9TZWxlY3RlZE9yZGVycyIsIm5leHRQcm9wcyIsInNob3dPcHRpb25zVmlzaWJsZSIsIlNoaXBwaW5nT3B0aW9ucyIsInJlbmRlck1lc3Nlbmdlck9wdGlvbiIsIm5vdyIsImZsb2F0Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJzZWxlY3RlZCIsInVwZGF0ZVNlbGVjdGVkIiwiZSIsInRhcmdldCIsIm5ld1ZhbHVlIiwic2VsZWN0QnV0dG9uRGlzYWJsZWQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQVNBOztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsaUJBQWFDLE1BQU1ELFdBRGQ7QUFFTEUsa0JBQWNELE1BQU1DLFlBRmY7QUFHTEMsZ0JBQVlGLE1BQU1HLFdBSGI7QUFJTEMsZUFBV0osTUFBTUk7QUFKWixHQUFQO0FBTUQsQ0FQRDs7QUFTQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixXQUFZO0FBQ3JDLFNBQU8sK0JBQ0w7QUFDRUMsMkNBREY7QUFFRUMsaUNBRkY7QUFHRUMsdUNBSEY7QUFJRUM7QUFKRixHQURLLEVBT0xDLFFBUEssQ0FBUDtBQVNELENBVkQ7O0lBWU1DLFU7OztBQVlKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUEsVUFxQm5CQyxLQXJCbUIsR0FxQlgsWUFBTTtBQUNaLFVBQUksa0RBQTBCLE1BQUtELEtBQUwsQ0FBV1YsVUFBckMsQ0FBSixFQUFzRDtBQUNwRCxjQUFLWSxrQkFBTDtBQUNEO0FBQ0YsS0F6QmtCOztBQUFBLFVBMkJuQkEsa0JBM0JtQixHQTJCRSxZQUFNO0FBQ3pCLFlB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LGVBRFA7QUFFRSxxQkFBU0MsYUFBYSxlQUZ4QjtBQUdFLHNCQUFVO0FBQUEscUJBQUssT0FBS0MsY0FBTCxDQUFvQkMsRUFBRUMsTUFBRixDQUFTbEgsSUFBN0IsQ0FBTDtBQUFBLGFBSFo7QUFJRSxrQkFBSyxxQ0FKUDtBQUtFLHdCQUFZO0FBTGQ7QUFERixTQVRGO0FBbUJHLGFBQUswRyxxQkFBTCxFQW5CSDtBQW9CRSxpREFwQkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0UsdUJBQVUsZ0JBRFo7QUFFRSxtQkFBTyxFQUFFZCxnQkFBZ0IsZUFBbEI7QUFGVDtBQUlFO0FBQ0UsdUJBQVUsbUJBRFo7QUFFRSxxQkFBUyxLQUFLcEssS0FBTCxDQUFXc0ssUUFGdEI7QUFHRSxzQkFBVSxLQUhaO0FBSUUsa0JBQUs7QUFKUCxZQUpGO0FBV0U7QUFDRSx1QkFBVSxtQkFEWjtBQUVFLHFCQUFTO0FBQUEscUJBQU0sT0FBS3RLLEtBQUwsQ0FBV3lLLFlBQVgsQ0FBd0JjLFFBQXhCLENBQU47QUFBQSxhQUZYO0FBR0Usc0JBQVVLLG9CQUhaO0FBSUUsa0JBQUs7QUFKUDtBQVhGO0FBdEJGLE9BREY7QUEyQ0Q7Ozs7OztrQkFHWVgsZSIsImZpbGUiOiIxLjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHtcbiAgZ2V0U3RvcmVPcmRlcnMsXG4gIHNldExvYWRlcixcbiAgcmVtb3ZlTG9hZGVyLFxuICBhbGVydEN1c3RvbWVyc1BpY2t1cCxcbiAgY3VzdG9tZXJSZWNlaXZlZCxcbiAgc2V0R3Jvd2xlcixcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCB7XG4gIGltYWdlTG9hZGVyLFxuICB3YWl0aW5nRm9yUG9zdG1hdGVzVXBkYXRlLFxufSBmcm9tICcuLi8uLi9zaGlwcGluZy9zaGlwcGluZ0Z1bmN0aW9ucyc7XG5cbmltcG9ydCBSZXRhaWxlck9yZGVyTGlzdCBmcm9tICcuL1JldGFpbGVyT3JkZXJMaXN0Lyc7XG5pbXBvcnQgVGFpbG9yT3JkZXJMaXN0IGZyb20gJy4vVGFpbG9yT3JkZXJMaXN0Lyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgY3VycmVudFN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgb3Blbk9yZGVyczogc3RvcmUuc3RvcmVPcmRlcnMsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgZ2V0U3RvcmVPcmRlcnMsXG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5cbmNsYXNzIFN0b3Jlc1Nob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICB1c2VyUm9sZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgb3Blbk9yZGVyczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGdldFN0b3JlT3JkZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3JkZXJTdGF0ZTogJ25ld19vcmRlcnMnLFxuICAgICAgc2VsZWN0ZWRPcmRlcnM6IG5ldyBTZXQoKSxcbiAgICAgIHNlbGVjdGVkT3JkZXJTaGlwbWVudHM6IFtdLFxuICAgICAgbG9hZGluZ09yZGVyczogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWZyZXNoU3RvcmVPcmRlcnMoKTtcbiAgICBpZiAodGhpcy5wcm9wcy51c2VyUm9sZXMucmV0YWlsZXIgfHwgdGhpcy5wcm9wcy51c2VyUm9sZXMuYWRtaW4pIHtcbiAgICAgIHRoaXMubmV3SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnRpbWVyLCAxMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLm5ld0ludGVydmFsKTtcbiAgfVxuXG4gIHRpbWVyID0gKCkgPT4ge1xuICAgIGlmICh3YWl0aW5nRm9yUG9zdG1hdGVzVXBkYXRlKHRoaXMucHJvcHMub3Blbk9yZGVycykpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN0b3JlT3JkZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlZnJlc2hTdG9yZU9yZGVycyA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldExvYWRlcigpO1xuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0U3RvcmVPcmRlcnMsXG4gICAgICBtYXRjaDogeyBwYXJhbXM6IHsgc3RvcmVfaWQ6IHBhcmFtc0lkIH0gfSxcbiAgICAgIGN1cnJlbnRVc2VyOiB7IHVzZXI6IHsgaWQ6IGN1cnJlbnRVc2VySWQgfSB9LFxuICAgICAgdXNlclJvbGVzOiB7IGFkbWluIH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBzdG9yZUlkID0gcGFyYW1zSWQgJiYgYWRtaW4gPyBwYXJhbXNJZCA6IGN1cnJlbnRVc2VySWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdPcmRlcnM6IHRydWUgfSk7XG4gICAgZ2V0U3RvcmVPcmRlcnMoc3RvcmVJZClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nT3JkZXJzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIGhhbmRsZUJ1bGtNYWlsUmVzID0gcmVzID0+IHtcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gcmVzLmRhdGEuYm9keTtcbiAgICBpZiAoaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcmRlclNoaXBtZW50czogcmVzLmRhdGEuYm9keSB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2hpcHBpbmdfbGFiZWwgfSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcmRlclNoaXBtZW50c1swXTtcblxuICAgICAgICBjb25zdCBwcmludCA9ICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3JkZXJzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3JkZXJTaGlwbWVudHM6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlTG9hZGVyKHNoaXBwaW5nX2xhYmVsLCBwcmludCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHtcbiAgICAgICAgICBraW5kOiAnd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3JzW2tleV1bMF0ubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTWVzc2VuZ2VyUmVzID0gcmVzID0+IHtcbiAgICBjb25zdCBraW5kID0gJ3N1Y2Nlc3MnO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWVzc2VuZ2VyIGhhcyBiZWVuIHJlcXVlc3RlZCEnO1xuXG4gICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcmRlcnM6IG5ldyBTZXQoKSB9KTtcbiAgfTtcblxuICBhbGVydEN1c3RvbWVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXJSb2xlczogcm9sZXMsIGN1cnJlbnRTdG9yZTogeyBpZDogc3RvcmVfaWQgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcmRlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkT3JkZXJzO1xuICAgIHRoaXMucHJvcHMuc2V0TG9hZGVyKCk7XG4gICAgYWxlcnRDdXN0b21lcnNQaWNrdXAob3JkZXJzLCBzdG9yZV9pZCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5ib2R5LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgICdZb3VyIGN1c3RvbWVycyBoYXZlIGJlZW4gbm90aWZpZWQgdG8gcGljayB1cCB0aGVpciBvcmRlcnMuJztcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3RvcmVPcmRlcnMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3JkZXJzOiBuZXcgU2V0KCkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdG9nZ2xlT3JkZXJTZWxlY3QgPSBvcmRlciA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkT3JkZXJzLmhhcyhvcmRlcikpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkT3JkZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZE9yZGVycztcbiAgICAgIG5ld1NlbGVjdGVkT3JkZXJzLmFkZChvcmRlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcmRlcnM6IG5ld1NlbGVjdGVkT3JkZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZE9yZGVycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcmRlcnM7XG4gICAgICBuZXdTZWxlY3RlZE9yZGVycy5kZWxldGUob3JkZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3JkZXJzOiBuZXdTZWxlY3RlZE9yZGVycyB9KTtcbiAgICB9XG4gIH07XG5cbiAgc2V0T3JkZXJUYWJTdGF0ZSA9IHN0YXRlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09yZGVyU3RhdGU6IHN0YXRlLCBzZWxlY3RlZE9yZGVyczogbmV3IFNldCgpIH0pO1xuICB9O1xuXG4gIG1hcmtDdXN0b21lclJlY2VpdmVkID0gKCkgPT4ge1xuICAgIGNvbnN0IG9yZGVycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcmRlcnM7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFN0b3JlOiB7IGlkOiBzdG9yZV9pZCB9LFxuICAgICAgc2V0TG9hZGVyLFxuICAgICAgcmVtb3ZlTG9hZGVyLFxuICAgICAgc2V0R3Jvd2xlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG9yZGVySWRzID0gWy4uLm9yZGVyc10ubWFwKG9yZGVyID0+IG9yZGVyLmlkKTtcblxuICAgIHNldExvYWRlcigpO1xuICAgIGN1c3RvbWVyUmVjZWl2ZWQob3JkZXJJZHMsIHN0b3JlX2lkKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVtb3ZlTG9hZGVyKCk7XG4gICAgICAgIGNvbnN0IGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgICdPcmRlciBoYXMgYmVlbiBtYXJrZWQgYXMgQ29tcGxldGVkISBZb3UgY2FuIG5vdyB2aWV3IGl0IGluIHRoZSBBcmNoaXZlLic7XG4gICAgICAgIHNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgICAgICB0aGlzLnJlZnJlc2hTdG9yZU9yZGVycygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcmRlcnM6IG5ldyBTZXQoKSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInKSk7XG4gIH07XG5cbiAgc29ydE9yZGVyc0J5U3RhdHVzID0gc3RhdHVzID0+IHtcbiAgICBjb25zdCB7IG9wZW5PcmRlcnM6IG9yZGVycywgdXNlclJvbGVzOiByb2xlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlICduZXdfb3JkZXJzJzpcbiAgICAgICAgaWYgKHJvbGVzLnRhaWxvcikge1xuICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKFxuICAgICAgICAgICAgb3JkZXIgPT4gIWlzRW1wdHkob3JkZXIuc2hpcG1lbnRzKSAmJiBvcmRlci50YWlsb3JcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hpcG1lbnRzIH0gPSBvcmRlcjtcblxuICAgICAgICAgICAgY29uc3Qgbm9TaGlwbWVudHMgPSBpc0VtcHR5KHNoaXBtZW50cyk7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2hpcG1lbnQgPSBzaGlwbWVudHNbc2hpcG1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3Qgbm90RnVsZmlsbGVkID0gIW9yZGVyLmZ1bGZpbGxlZDtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2VuZ2VyTm90RGVsaXZlcmVkWWV0ID1cbiAgICAgICAgICAgICAgc2hpcG1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgbGFzdFNoaXBtZW50LmRlbGl2ZXJ5X3R5cGUgPT09ICdtZXNzZW5nZXJfc2hpcG1lbnQnICYmXG4gICAgICAgICAgICAgIGxhc3RTaGlwbWVudC5zdGF0dXMgIT0gJ2RlbGl2ZXJlZCc7XG5cbiAgICAgICAgICAgIHJldHVybiBub3RGdWxmaWxsZWQgJiYgKG5vU2hpcG1lbnRzIHx8IG1lc3Nlbmdlck5vdERlbGl2ZXJlZFlldCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2luX3Byb2dyZXNzX29yZGVycyc6XG4gICAgICAgIGlmIChyb2xlcy50YWlsb3IpIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXJzLmZpbHRlcihvcmRlciA9PiBvcmRlci5hcnJpdmVkICYmICFvcmRlci5mdWxmaWxsZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IHtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KG9yZGVyLnNoaXBtZW50cykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IHRhaWxvciwgZnVsZmlsbGVkLCBzaGlwbWVudHMgfSA9IG9yZGVyO1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRlbGl2ZXJ5X3R5cGUgfSA9IHNoaXBtZW50c1tzaGlwbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGNvbnN0IG1haWxTaGlwbWVudEV4aXN0cyA9IGRlbGl2ZXJ5X3R5cGUgPT09ICdtYWlsX3NoaXBtZW50JztcbiAgICAgICAgICAgIGNvbnN0IG1lc3NlbmdlclNoaXBtZW50RGVsaXZlcmVkID0gc3RhdHVzID09PSAnZGVsaXZlcmVkJztcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgKG1haWxTaGlwbWVudEV4aXN0cyB8fCBtZXNzZW5nZXJTaGlwbWVudERlbGl2ZXJlZCkgJiZcbiAgICAgICAgICAgICAgdGFpbG9yICYmXG4gICAgICAgICAgICAgICFmdWxmaWxsZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3JlYWR5X29yZGVycyc6XG4gICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmZ1bGZpbGxlZCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gb3JkZXJzO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmN1cnJlbnRTdG9yZSkge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICB1c2VyUm9sZXM6IHsgdGFpbG9yLCByZXRhaWxlciwgYWRtaW4gfSxcbiAgICAgIHVzZXJSb2xlcyxcbiAgICAgIG9wZW5PcmRlcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICBsb2FkaW5nT3JkZXJzLFxuICAgICAgc2VsZWN0ZWRPcmRlcnMsXG4gICAgICBzZWxlY3RlZE9yZGVyU2hpcG1lbnRzLFxuICAgICAgc2hvd09yZGVyU3RhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gYE9yZGVycyAvICR7dGhpcy5wcm9wcy5jdXJyZW50U3RvcmUubmFtZX1gO1xuXG4gICAgaWYgKHJldGFpbGVyIHx8IGFkbWluKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmV0YWlsZXJPcmRlckxpc3RcbiAgICAgICAgICBzaG93T3JkZXJTdGF0ZT17c2hvd09yZGVyU3RhdGV9XG4gICAgICAgICAgbG9hZGluZ09yZGVycz17bG9hZGluZ09yZGVyc31cbiAgICAgICAgICBoZWFkZXJUZXh0PXtoZWFkZXJUZXh0fVxuICAgICAgICAgIG9wZW5PcmRlcnM9e29wZW5PcmRlcnN9XG4gICAgICAgICAgdXNlclJvbGVzPXt1c2VyUm9sZXN9XG4gICAgICAgICAgc2VsZWN0ZWRPcmRlcnM9e3NlbGVjdGVkT3JkZXJzfVxuICAgICAgICAgIHNlbGVjdGVkT3JkZXJTaGlwbWVudHM9e3NlbGVjdGVkT3JkZXJTaGlwbWVudHN9XG4gICAgICAgICAgaGFuZGxlQnVsa01haWxSZXM9e3RoaXMuaGFuZGxlQnVsa01haWxSZXN9XG4gICAgICAgICAgaGFuZGxlTWVzc2VuZ2VyUmVzPXt0aGlzLmhhbmRsZU1lc3NlbmdlclJlc31cbiAgICAgICAgICByZWZyZXNoU3RvcmVPcmRlcnM9e3RoaXMucmVmcmVzaFN0b3JlT3JkZXJzfVxuICAgICAgICAgIHNldE9yZGVyVGFiU3RhdGU9e3RoaXMuc2V0T3JkZXJUYWJTdGF0ZX1cbiAgICAgICAgICBtYXJrQ3VzdG9tZXJSZWNlaXZlZD17dGhpcy5tYXJrQ3VzdG9tZXJSZWNlaXZlZH1cbiAgICAgICAgICBhbGVydEN1c3RvbWVycz17dGhpcy5hbGVydEN1c3RvbWVyc31cbiAgICAgICAgICB0b2dnbGVPcmRlclNlbGVjdD17dGhpcy50b2dnbGVPcmRlclNlbGVjdH1cbiAgICAgICAgICBzb3J0T3JkZXJzQnlTdGF0dXM9e3RoaXMuc29ydE9yZGVyc0J5U3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRhaWxvcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhaWxvck9yZGVyTGlzdFxuICAgICAgICAgIGhlYWRlclRleHQ9e2hlYWRlclRleHR9XG4gICAgICAgICAgb3Blbk9yZGVycz17b3Blbk9yZGVyc31cbiAgICAgICAgICBsb2FkaW5nT3JkZXJzPXtsb2FkaW5nT3JkZXJzfVxuICAgICAgICAgIHVzZXJSb2xlcz17dXNlclJvbGVzfVxuICAgICAgICAgIHNvcnRPcmRlcnNCeVN0YXR1cz17dGhpcy5zb3J0T3JkZXJzQnlTdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTdG9yZXNTaG93KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoZWNrYm94ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkLCBmaWVsZE5hbWUsIHRleHQsIG5hbWUsIGxhYmVsQ2xhc3MgfSA9IHByb3BzO1xuICBpZiAoIWZpZWxkTmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPXtgJHtuYW1lfS1jaGVja2B9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtgJHtuYW1lfS1jaGVja2B9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2hlY2tib3gtbGFiZWwgJHtsYWJlbENsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBpZD17YCR7bmFtZX0tY2hlY2tgfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoZmllbGROYW1lLCAhY2hlY2tlZCl9XG4gICAgICAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj17YCR7bmFtZX0tY2hlY2tgfSBjbGFzc05hbWU9XCJjaGVja2JveC1sYWJlbFwiPlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0NoZWNrYm94LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lID0gJ3Nob3J0LWJ1dHRvbicsXG4gICAgY2xpY2tBcmdzID0gdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnJyksXG4gICAgZGlzYWJsZWQsXG4gICAgdGV4dCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soY2xpY2tBcmdzKX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdmFsdWU9e3RleHR9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0J1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE9yZGVySGVhZGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9yZGVySGVhZGVyID0gKHRleHQsIHdpdGhTZWxlY3QsIGlzU2VsZWN0KSA9PiB7XG4gICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICByZXR1cm4gPGgzIGNsYXNzTmFtZT1cIm9yZGVyLXNlbGVjdC1oZWFkZXItY2VsbFwiPnt0ZXh0fTwvaDM+O1xuICAgIH0gZWxzZSBpZiAod2l0aFNlbGVjdCkge1xuICAgICAgcmV0dXJuIDxoMyBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWhlYWRlci1jZWxsXCI+e3RleHR9PC9oMz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8aDMgY2xhc3NOYW1lPVwib3JkZXItaGVhZGVyLWNlbGwtbm8tc2VsZWN0XCI+e3RleHR9PC9oMz47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dPcmRlclN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGRhdGVUZXh0O1xuICAgIGlmIChzaG93T3JkZXJTdGF0ZSA9PT0gJ25ld19vcmRlcnMnKSB7XG4gICAgICBkYXRlVGV4dCA9ICdDcmVhdGVkJztcbiAgICB9IGVsc2UgaWYgKHNob3dPcmRlclN0YXRlID09PSAnaW5fcHJvZ3Jlc3Nfb3JkZXJzJykge1xuICAgICAgZGF0ZVRleHQgPSAnQ2hlY2tlZCBJbic7XG4gICAgfSBlbHNlIGlmIChzaG93T3JkZXJTdGF0ZSA9PT0gJ3JlYWR5X29yZGVycycpIHtcbiAgICAgIGRhdGVUZXh0ID0gJ0Z1bGZpbGxlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaGVhZGVycy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1oZWFkZXJzLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLm9yZGVySGVhZGVyKCdTZWxlY3Q6JywgZmFsc2UsIHRydWUpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMub3JkZXJIZWFkZXIoJ09yZGVyJywgdHJ1ZSwgZmFsc2UpfVxuICAgICAgICAgICAge3RoaXMub3JkZXJIZWFkZXIoZGF0ZVRleHQsIHRydWUsIGZhbHNlKX1cbiAgICAgICAgICAgIHt0aGlzLm9yZGVySGVhZGVyKCdDdXN0b21lcicsIHRydWUsIGZhbHNlKX1cbiAgICAgICAgICAgIHt0aGlzLm9yZGVySGVhZGVyKCdTdGF0dXMnLCB0cnVlLCBmYWxzZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckhlYWRlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9SZXRhaWxlck9yZGVyTGlzdC9PcmRlckhlYWRlcnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vLi4vLi4vQ2hlY2tib3gnO1xuaW1wb3J0IFN0YXR1c0NhcmQgZnJvbSAnLi4vU3RhdHVzQ2FyZCc7XG5cbmNsYXNzIE9yZGVyUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZm9ybWF0U3RhdHVzU3RyaW5nKGR1ZURhdGUsIGxhdGUpIHtcbiAgICBjb25zdCB0b2RheXNEYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IG1vbWVudER1ZURhdGUgPSBtb21lbnQoZHVlRGF0ZSk7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKG1vbWVudER1ZURhdGUuZGlmZih0b2RheXNEYXRlLCAnZGF5cycpKTtcbiAgICBjb25zdCBhZGRpdGlvbmFsU3RyaW5nID0gbGF0ZSA/ICcgZGF5cyBsYXRlJyA6ICcgZGF5cyB0byBnbyc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGRpZmYgKyBhZGRpdGlvbmFsU3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxuICBnZXRPcmRlclN0YXR1cyhvcmRlcikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNoaXBtZW50cyxcbiAgICAgIGFycml2ZWQsXG4gICAgICBsYXRlLFxuICAgICAgZHVlX2RhdGUsXG4gICAgICBmdWxmaWxsZWQsXG4gICAgICBjdXN0b21lcl9hbGVydGVkLFxuICAgICAgc2hpcF90b19zdG9yZSxcbiAgICB9ID0gb3JkZXI7XG5cbiAgICBjb25zdCB7IHJldGFpbGVyLCBhZG1pbiwgdGFpbG9yIH0gPSB0aGlzLnByb3BzLnVzZXJSb2xlcztcblxuICAgIGxldCBzdGF0dXMsIGNvbG9yO1xuXG4gICAgaWYgKGlzRW1wdHkob3JkZXIuc2hpcG1lbnRzKSkge1xuICAgICAgc3RhdHVzID0gJ05lZWRzIFRyYW5zaXQnO1xuICAgICAgY29sb3IgPSAncmVkJztcbiAgICB9IGVsc2UgaWYgKCFpc0VtcHR5KG9yZGVyLnNoaXBtZW50cykgJiYgIW9yZGVyLmFycml2ZWQpIHtcbiAgICAgIGNvbnN0IGxhc3RTaGlwbWVudCA9IG9yZGVyLnNoaXBtZW50c1tvcmRlci5zaGlwbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCB7IGRlbGl2ZXJ5X3R5cGUgfSA9IGxhc3RTaGlwbWVudDtcblxuICAgICAgaWYgKGRlbGl2ZXJ5X3R5cGUgPT09ICdtYWlsX3NoaXBtZW50Jykge1xuICAgICAgICBzdGF0dXMgPSAnSW4gVHJhbnNpdCc7XG4gICAgICAgIGNvbG9yID0gJ2dvbGQnO1xuICAgICAgfSBlbHNlIGlmIChkZWxpdmVyeV90eXBlID09PSAnbWVzc2VuZ2VyX3NoaXBtZW50Jykge1xuICAgICAgICBjb25zdCBzaGlwbWVudFN0YXR1cyA9IGxhc3RTaGlwbWVudC5zdGF0dXM7XG5cbiAgICAgICAgaWYgKHNoaXBtZW50U3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnQ29udGFjdGluZyc7XG4gICAgICAgICAgY29sb3IgPSAncmVkJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwbWVudFN0YXR1cyA9PT0gJ3BpY2t1cCcpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnUGlja2luZyBVcCc7XG4gICAgICAgICAgY29sb3IgPSAnZ29sZGVucm9kJztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzaGlwbWVudFN0YXR1cyA9PT0gJ3BpY2t1cF9jb21wbGV0ZScgfHxcbiAgICAgICAgICBzaGlwbWVudFN0YXR1cyA9PT0gJ2Ryb3BvZmYnXG4gICAgICAgICkge1xuICAgICAgICAgIHN0YXR1cyA9ICdEcm9wcGluZyBPZmYnO1xuICAgICAgICAgIGNvbG9yID0gJ2dvbGQnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBtZW50U3RhdHVzID09PSAnZGVsaXZlcmVkJykge1xuICAgICAgICAgIHN0YXR1cyA9ICdEZWxpdmVyZWQnO1xuICAgICAgICAgIGNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIubGF0ZSAmJiAhb3JkZXIuZnVsZmlsbGVkKSB7XG4gICAgICBpZiAoYWRtaW4gfHwgdGFpbG9yKSB7XG4gICAgICAgIGNvbnN0IGR1ZVRpbWUgPSB0aGlzLmZvcm1hdFN0YXR1c1N0cmluZyhvcmRlci5kdWVfZGF0ZSwgdHJ1ZSk7XG4gICAgICAgIHN0YXR1cyA9IGR1ZVRpbWU7XG4gICAgICB9IGVsc2UgaWYgKHJldGFpbGVyKSB7XG4gICAgICAgIHN0YXR1cyA9ICdEZWxheWVkJztcbiAgICAgIH1cbiAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG9yZGVyLmZ1bGZpbGxlZCAmJlxuICAgICAgIW9yZGVyLmN1c3RvbWVyX2FsZXJ0ZWQgJiZcbiAgICAgIG9yZGVyLnNoaXBfdG9fc3RvcmVcbiAgICApIHtcbiAgICAgIHN0YXR1cyA9ICdJbiBUcmFuc2l0JztcbiAgICAgIGNvbG9yID0gJ2dvbGQnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBvcmRlci5mdWxmaWxsZWQgJiZcbiAgICAgIG9yZGVyLmN1c3RvbWVyX2FsZXJ0ZWQgJiZcbiAgICAgIG9yZGVyLnNoaXBfdG9fc3RvcmVcbiAgICApIHtcbiAgICAgIHN0YXR1cyA9ICdOb3RpZmllZCc7XG4gICAgICBjb2xvciA9ICdyZWQnO1xuICAgIH0gZWxzZSBpZiAob3JkZXIuYXJyaXZlZCAmJiAhb3JkZXIuZnVsZmlsbGVkKSB7XG4gICAgICBzdGF0dXMgPSB0aGlzLmZvcm1hdFN0YXR1c1N0cmluZyhvcmRlci5kdWVfZGF0ZSwgZmFsc2UpO1xuICAgICAgY29uc3Qgc3RhdHVzTnVtID0gc3RhdHVzLnNwbGl0KCcnKVswXTtcblxuICAgICAgaWYgKHN0YXR1c051bSA+IDMpIHtcbiAgICAgICAgY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXNOdW0gPiAwKSB7XG4gICAgICAgIGNvbG9yID0gJ2dvbGQnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXNOdW0gPCAxKSB7XG4gICAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHN0YXR1cywgY29sb3IgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyUm9sZXM6IHJvbGVzLFxuICAgICAgb3JkZXIsXG4gICAgICBzaG93T3JkZXJTdGF0ZSxcbiAgICAgIHNlbGVjdGVkT3JkZXJzLFxuICAgICAgdG9nZ2xlT3JkZXJTZWxlY3QsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGN1c3RvbWVyLFxuICAgICAgYWx0ZXJhdGlvbnNfY291bnQsXG4gICAgICBjcmVhdGVkX2F0LFxuICAgICAgYXJyaXZhbF9kYXRlLFxuICAgICAgZnVsZmlsbGVkX2RhdGUsXG4gICAgfSA9IG9yZGVyO1xuXG4gICAgY29uc3QgeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUgfSA9IGN1c3RvbWVyO1xuICAgIGNvbnN0IHsgY29sb3IsIHN0YXR1cyB9ID0gdGhpcy5nZXRPcmRlclN0YXR1cyhvcmRlcik7XG4gICAgY29uc3Qgcm91dGUgPSBgL29yZGVycy8ke2lkfWA7XG4gICAgY29uc3Qgb3JkZXJJc1RvZ2dsZWQgPSBzZWxlY3RlZE9yZGVycy5oYXMob3JkZXIpO1xuICAgIGNvbnN0IG9yZGVyVG9nZ2xlID0gKCkgPT4gdG9nZ2xlT3JkZXJTZWxlY3Qob3JkZXIpO1xuXG4gICAgbGV0IGRpc3BsYXlEYXRlO1xuICAgIGlmIChzaG93T3JkZXJTdGF0ZSA9PT0gJ25ld19vcmRlcnMnKSB7XG4gICAgICBkaXNwbGF5RGF0ZSA9IGNyZWF0ZWRfYXQ7XG4gICAgfSBlbHNlIGlmIChzaG93T3JkZXJTdGF0ZSA9PT0gJ2luX3Byb2dyZXNzX29yZGVycycpIHtcbiAgICAgIGRpc3BsYXlEYXRlID0gYXJyaXZhbF9kYXRlO1xuICAgIH0gZWxzZSBpZiAoc2hvd09yZGVyU3RhdGUgPT09ICdyZWFkeV9vcmRlcnMnKSB7XG4gICAgICBkaXNwbGF5RGF0ZSA9IGZ1bGZpbGxlZF9kYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQoZGlzcGxheURhdGUpO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBtb21lbnREYXRlLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5Jyk7XG4gICAgY29uc3QgeWVzdGVyZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpLmFkZCgtMSwgJ2RheXMnKTtcbiAgICBjb25zdCB3YXNZZXN0ID0gbW9tZW50RGF0ZS5pc1NhbWUoeWVzdGVyZGF5LCAnZGF5Jyk7XG4gICAgY29uc3QgZGF0ZVRleHRGb3JtYXQgPSBpc1RvZGF5XG4gICAgICA/ICdbVG9kYXksXSBoOm1tYSdcbiAgICAgIDogd2FzWWVzdCA/ICdbWWVzdGVyZGF5LF0gaDptbWEnIDogJ01NTSBEbywgaDptbWEnO1xuXG4gICAgbGV0IGRhdGVUZXh0ID0gbW9tZW50RGF0ZS5mb3JtYXQoZGF0ZVRleHRGb3JtYXQpO1xuICAgIGlmIChkYXRlVGV4dCA9PT0gJ0ludmFsaWQgZGF0ZScgJiYgIWFycml2YWxfZGF0ZSkge1xuICAgICAgZGF0ZVRleHQgPSAnUGVuZGluZyc7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJTZWxlY3QgPSAoXG4gICAgICA8Q2hlY2tib3hcbiAgICAgICAgY2hlY2tlZD17b3JkZXJJc1RvZ2dsZWR9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIG5hbWU9e2lkfVxuICAgICAgICBvbkNoYW5nZT17b3JkZXJUb2dnbGV9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1yb3dcIiBrZXk9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1zZWxlY3QtY2VsbFwiPntvcmRlclNlbGVjdH08L2Rpdj5cbiAgICAgICAgPExpbmsgdG89e3JvdXRlfSBjbGFzc05hbWU9XCJvcmRlci1yb3ctbGlua1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGF0YS1jZWxsXCI+I3tpZH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtY2VsbFwiPntkYXRlVGV4dH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtY2VsbFwiPlxuICAgICAgICAgICAge2ZpcnN0X25hbWV9IHtsYXN0X25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YXR1c0NhcmQgY29sb3I9e2NvbG9yfSB0ZXh0PXtzdGF0dXN9IC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWJyZWFrLXJvd1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvUmV0YWlsZXJPcmRlckxpc3QvT3JkZXJSb3cuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgT3JkZXJSb3cgZnJvbSAnLi9PcmRlclJvdyc7XG5cbmNsYXNzIE9yZGVyUm93cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcGVuT3JkZXJzLFxuICAgICAgc2hvd09yZGVyU3RhdGUsXG4gICAgICB1c2VyUm9sZXMsXG4gICAgICBsb2FkaW5nT3JkZXJzLFxuICAgICAgc2VsZWN0ZWRPcmRlcnMsXG4gICAgICB0b2dnbGVPcmRlclNlbGVjdCxcbiAgICAgIHNvcnRPcmRlcnNCeVN0YXR1cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaXNFbXB0eShvcGVuT3JkZXJzKSkge1xuICAgICAgY29uc3Qgc29ydGVkT3JkZXJzID0gc29ydE9yZGVyc0J5U3RhdHVzKHNob3dPcmRlclN0YXRlKTtcbiAgICAgIGlmICghaXNFbXB0eShzb3J0ZWRPcmRlcnMpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3NvcnRlZE9yZGVycy5tYXAob3JkZXIgPT4gKFxuICAgICAgICAgICAgICA8T3JkZXJSb3dcbiAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICB1c2VyUm9sZXM9e3VzZXJSb2xlc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9yZGVycz17c2VsZWN0ZWRPcmRlcnN9XG4gICAgICAgICAgICAgICAgdG9nZ2xlT3JkZXJTZWxlY3Q9e3RvZ2dsZU9yZGVyU2VsZWN0fVxuICAgICAgICAgICAgICAgIHNob3dPcmRlclN0YXRlPXtzaG93T3JkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1vcmRlcnNcIj5ObyBvcmRlcnMgZm91bmQhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2FkaW5nT3JkZXJzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vcmRlcnNcIj5Mb2FkaW5nIE9yZGVycy4uLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyUm93cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1JldGFpbGVyT3JkZXJMaXN0L09yZGVyUm93cy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmNsYXNzIE9yZGVyVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvdW50T3JkZXJzQnlTdGF0dXMgPSBzdGF0dXMgPT4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRPcmRlcnNCeVN0YXR1cyhzdGF0dXMpLmxlbmd0aDtcbiAgfTtcblxuICBzb3J0T3JkZXJzQnlTdGF0dXMgPSBzdGF0dXMgPT4ge1xuICAgIGNvbnN0IHsgb3Blbk9yZGVyczogb3JkZXJzLCB1c2VyUm9sZXM6IHJvbGVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ25ld19vcmRlcnMnOlxuICAgICAgICBpZiAocm9sZXMudGFpbG9yKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIoXG4gICAgICAgICAgICBvcmRlciA9PiAhaXNFbXB0eShvcmRlci5zaGlwbWVudHMpICYmIG9yZGVyLnRhaWxvclxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIob3JkZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzaGlwbWVudHMgfSA9IG9yZGVyO1xuXG4gICAgICAgICAgICBjb25zdCBub1NoaXBtZW50cyA9IGlzRW1wdHkoc2hpcG1lbnRzKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTaGlwbWVudCA9IHNoaXBtZW50c1tzaGlwbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBub3RGdWxmaWxsZWQgPSAhb3JkZXIuZnVsZmlsbGVkO1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzZW5nZXJOb3REZWxpdmVyZWRZZXQgPVxuICAgICAgICAgICAgICBzaGlwbWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBsYXN0U2hpcG1lbnQuZGVsaXZlcnlfdHlwZSA9PT0gJ21lc3Nlbmdlcl9zaGlwbWVudCcgJiZcbiAgICAgICAgICAgICAgbGFzdFNoaXBtZW50LnN0YXR1cyAhPSAnZGVsaXZlcmVkJztcblxuICAgICAgICAgICAgcmV0dXJuIG5vdEZ1bGZpbGxlZCAmJiAobm9TaGlwbWVudHMgfHwgbWVzc2VuZ2VyTm90RGVsaXZlcmVkWWV0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnaW5fcHJvZ3Jlc3Nfb3JkZXJzJzpcbiAgICAgICAgaWYgKHJvbGVzLnRhaWxvcikge1xuICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmFycml2ZWQgJiYgIW9yZGVyLmZ1bGZpbGxlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIob3JkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkob3JkZXIuc2hpcG1lbnRzKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgdGFpbG9yLCBmdWxmaWxsZWQsIHNoaXBtZW50cyB9ID0gb3JkZXI7XG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGVsaXZlcnlfdHlwZSB9ID0gc2hpcG1lbnRzW3NoaXBtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbFNoaXBtZW50RXhpc3RzID0gZGVsaXZlcnlfdHlwZSA9PT0gJ21haWxfc2hpcG1lbnQnO1xuICAgICAgICAgICAgY29uc3QgbWVzc2VuZ2VyU2hpcG1lbnREZWxpdmVyZWQgPSBzdGF0dXMgPT09ICdkZWxpdmVyZWQnO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAobWFpbFNoaXBtZW50RXhpc3RzIHx8IG1lc3NlbmdlclNoaXBtZW50RGVsaXZlcmVkKSAmJlxuICAgICAgICAgICAgICB0YWlsb3IgJiZcbiAgICAgICAgICAgICAgIWZ1bGZpbGxlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncmVhZHlfb3JkZXJzJzpcbiAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuZnVsZmlsbGVkKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvcmRlcnM7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhbGxUYWJzID0gW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdvcmRlci1zdGF0ZS10YWInLFxuICAgICAgICBzdGF0dXM6ICduZXdfb3JkZXJzJyxcbiAgICAgICAgdGV4dDogJ05ldyBPcmRlcnMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnb3JkZXItc3RhdGUtdGFiJyxcbiAgICAgICAgc3RhdHVzOiAnaW5fcHJvZ3Jlc3Nfb3JkZXJzJyxcbiAgICAgICAgdGV4dDogJ0luIFByb2Nlc3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnb3JkZXItc3RhdGUtdGFiJyxcbiAgICAgICAgc3RhdHVzOiAncmVhZHlfb3JkZXJzJyxcbiAgICAgICAgdGV4dDogJ0luLVN0b3JlIFBpY2t1cCcsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB0YWJzID0gYWxsVGFicy5tYXAoKHRhYiwgaSkgPT4ge1xuICAgICAgaWYgKHRhYi5zdGF0dXMgPT09IHRoaXMucHJvcHMuc2hvd09yZGVyU3RhdGUpIHtcbiAgICAgICAgdGFiLmNsYXNzTmFtZSA9IHRhYi5jbGFzc05hbWUuY29uY2F0KCcgc2VsZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBjbGFzc05hbWU9e3RhYi5jbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRPcmRlclRhYlN0YXRlKHRhYi5zdGF0dXMpfVxuICAgICAgICA+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAge3RhYi50ZXh0fSAoe3RoaXMuY291bnRPcmRlcnNCeVN0YXR1cyh0YWIuc3RhdHVzKX0pXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItc3RhdGUtcm93XCI+e3RhYnN9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyVGFicztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1JldGFpbGVyT3JkZXJMaXN0L09yZGVyVGFicy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uLy4uLy4uL1NlY3Rpb25IZWFkZXInO1xuXG5pbXBvcnQgT3JkZXJUYWJzIGZyb20gJy4vT3JkZXJUYWJzJztcbmltcG9ydCBPcmRlckhlYWRlcnMgZnJvbSAnLi9PcmRlckhlYWRlcnMnO1xuaW1wb3J0IE9yZGVyUm93cyBmcm9tICcuL09yZGVyUm93cyc7XG5cbmltcG9ydCBTZW5kT3JkZXIgZnJvbSAnLi4vcmV0YWlsZXJPcmRlck1nbXRDb250cm9scy9TZW5kT3JkZXInO1xuaW1wb3J0IEN1c3RvbWVyT3B0aW9ucyBmcm9tICcuLi9yZXRhaWxlck9yZGVyTWdtdENvbnRyb2xzL0N1c3RvbWVyT3B0aW9ucyc7XG5cbmNsYXNzIFJldGFpbGVyT3JkZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbWdtdENvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPcmRlclN0YXRlLFxuICAgICAgc2VsZWN0ZWRPcmRlcnMsXG4gICAgICBzZWxlY3RlZE9yZGVyU2hpcG1lbnRzLFxuICAgICAgaGFuZGxlQnVsa01haWxSZXMsXG4gICAgICBoYW5kbGVNZXNzZW5nZXJSZXMsXG4gICAgICByZWZyZXNoU3RvcmVPcmRlcnMsXG4gICAgICBtYXJrQ3VzdG9tZXJSZWNlaXZlZCxcbiAgICAgIGFsZXJ0Q3VzdG9tZXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHNob3dPcmRlclN0YXRlID09PSAnbmV3X29yZGVycycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTZW5kT3JkZXJcbiAgICAgICAgICBzZWxlY3RlZE9yZGVycz17Wy4uLnNlbGVjdGVkT3JkZXJzXX1cbiAgICAgICAgICBzZWxlY3RlZE9yZGVyU2hpcG1lbnRzPXtbLi4uc2VsZWN0ZWRPcmRlclNoaXBtZW50c119XG4gICAgICAgICAgaGFuZGxlQnVsa01haWxSZXM9e2hhbmRsZUJ1bGtNYWlsUmVzfVxuICAgICAgICAgIGhhbmRsZU1lc3NlbmdlclJlcz17aGFuZGxlTWVzc2VuZ2VyUmVzfVxuICAgICAgICAgIHJlZnJlc2hTdG9yZU9yZGVycz17cmVmcmVzaFN0b3JlT3JkZXJzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHNob3dPcmRlclN0YXRlID09PSAncmVhZHlfb3JkZXJzJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEN1c3RvbWVyT3B0aW9uc1xuICAgICAgICAgIHNlbGVjdGVkT3JkZXJzPXtbLi4uc2VsZWN0ZWRPcmRlcnNdfVxuICAgICAgICAgIGFsZXJ0Q3VzdG9tZXJzPXthbGVydEN1c3RvbWVyc31cbiAgICAgICAgICBtYXJrQ3VzdG9tZXJSZWNlaXZlZD17bWFya0N1c3RvbWVyUmVjZWl2ZWR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVhZGVyVGV4dCxcbiAgICAgIHNob3dPcmRlclN0YXRlLFxuICAgICAgb3Blbk9yZGVycyxcbiAgICAgIHVzZXJSb2xlcyxcbiAgICAgIGxvYWRpbmdPcmRlcnMsXG4gICAgICBzZWxlY3RlZE9yZGVycyxcbiAgICAgIHNldE9yZGVyVGFiU3RhdGUsXG4gICAgICB0b2dnbGVPcmRlclNlbGVjdCxcbiAgICAgIHNvcnRPcmRlcnNCeVN0YXR1cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXtoZWFkZXJUZXh0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItc3RhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8T3JkZXJUYWJzXG4gICAgICAgICAgICAgIHVzZXJSb2xlcz17dXNlclJvbGVzfVxuICAgICAgICAgICAgICBvcGVuT3JkZXJzPXtvcGVuT3JkZXJzfVxuICAgICAgICAgICAgICBzaG93T3JkZXJTdGF0ZT17c2hvd09yZGVyU3RhdGV9XG4gICAgICAgICAgICAgIHNldE9yZGVyVGFiU3RhdGU9e3NldE9yZGVyVGFiU3RhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8T3JkZXJIZWFkZXJzIHNob3dPcmRlclN0YXRlPXtzaG93T3JkZXJTdGF0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWhlYWRlci1icmVhay1yb3dcIiAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8T3JkZXJSb3dzXG4gICAgICAgICAgICAgIHNob3dPcmRlclN0YXRlPXtzaG93T3JkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgb3Blbk9yZGVycz17b3Blbk9yZGVyc31cbiAgICAgICAgICAgICAgdXNlclJvbGVzPXt1c2VyUm9sZXN9XG4gICAgICAgICAgICAgIGxvYWRpbmdPcmRlcnM9e2xvYWRpbmdPcmRlcnN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3JkZXJzPXtzZWxlY3RlZE9yZGVyc31cbiAgICAgICAgICAgICAgdG9nZ2xlT3JkZXJTZWxlY3Q9e3RvZ2dsZU9yZGVyU2VsZWN0fVxuICAgICAgICAgICAgICBzb3J0T3JkZXJzQnlTdGF0dXM9e3NvcnRPcmRlcnNCeVN0YXR1c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57dGhpcy5tZ210Q29udHJvbHMoKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldGFpbGVyT3JkZXJMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RvcmVzL1N0b3Jlc1Nob3cvUmV0YWlsZXJPcmRlckxpc3QvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgU3RhdHVzQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8gcGFyZW50Q29tcG9uZW50XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciwgdGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NvbG9yfSBzdGF0dXMtY2FyZCBvcmRlci1kYXRhLWNlbGxgfT57dGV4dH08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQ2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1N0YXR1c0NhcmQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBPcmRlckhlYWRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJIZWFkZXJDZWxsID0gKHRleHQsIHdpdGhTZWxlY3QsIGlzU2VsZWN0KSA9PiB7XG4gICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICByZXR1cm4gPGgzIGNsYXNzTmFtZT1cIm9yZGVyLXNlbGVjdC1oZWFkZXItY2VsbFwiPnt0ZXh0fTwvaDM+O1xuICAgIH0gZWxzZSBpZiAod2l0aFNlbGVjdCkge1xuICAgICAgcmV0dXJuIDxoMyBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWhlYWRlci1jZWxsXCI+e3RleHR9PC9oMz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8aDMgY2xhc3NOYW1lPVwib3JkZXItaGVhZGVyLWNlbGwtbm8tc2VsZWN0XCI+e3RleHR9PC9oMz47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWhlYWRlcnMtcm93LW5vLXNlbGVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaGVhZGVycy1jb250YWluZXItbm8tc2VsZWN0XCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXJDZWxsKCdJZCcsIGZhbHNlKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckhlYWRlckNlbGwoJ1N0YXR1cycsIGZhbHNlKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckhlYWRlckNlbGwoJ0N1c3RvbWVyJywgZmFsc2UpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZGVyQ2VsbCgnUXVhbnRpdHknLCBmYWxzZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckhlYWRlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9UYWlsb3JPcmRlckxpc3QvT3JkZXJIZWFkZXJzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY2xhc3MgT3JkZXJSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBmb3JtYXRTdGF0dXNTdHJpbmcgPSAoZHVlRGF0ZSwgbGF0ZSkgPT4ge1xuICAgIGNvbnN0IHRvZGF5c0RhdGUgPSBtb21lbnQobmV3IERhdGUoKSk7XG4gICAgY29uc3QgbW9tZW50RHVlRGF0ZSA9IG1vbWVudChkdWVEYXRlKTtcbiAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMobW9tZW50RHVlRGF0ZS5kaWZmKHRvZGF5c0RhdGUsICdkYXlzJykpO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxTdHJpbmcgPSBsYXRlID8gJyBkYXlzIGxhdGUnIDogJyBkYXlzIHRvIGdvJztcbiAgICBjb25zdCBzdGF0dXMgPSAoZGlmZiArIGFkZGl0aW9uYWxTdHJpbmcpLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICBnZXRPcmRlclN0YXR1cyA9IG9yZGVyID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzaGlwbWVudHMsXG4gICAgICBhcnJpdmVkLFxuICAgICAgbGF0ZSxcbiAgICAgIGR1ZV9kYXRlLFxuICAgICAgZnVsZmlsbGVkLFxuICAgICAgY3VzdG9tZXJfYWxlcnRlZCxcbiAgICAgIHNoaXBfdG9fc3RvcmUsXG4gICAgfSA9IG9yZGVyO1xuXG4gICAgY29uc3QgeyByZXRhaWxlciwgYWRtaW4sIHRhaWxvciB9ID0gdGhpcy5wcm9wcy51c2VyUm9sZXM7XG5cbiAgICBsZXQgc3RhdHVzLCBjb2xvcjtcblxuICAgIGlmIChpc0VtcHR5KG9yZGVyLnNoaXBtZW50cykpIHtcbiAgICAgIHN0YXR1cyA9ICdOZWVkcyBUcmFuc2l0JztcbiAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgfSBlbHNlIGlmICghaXNFbXB0eShvcmRlci5zaGlwbWVudHMpICYmICFvcmRlci5hcnJpdmVkKSB7XG4gICAgICBjb25zdCBsYXN0U2hpcG1lbnQgPSBvcmRlci5zaGlwbWVudHNbb3JkZXIuc2hpcG1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgeyBkZWxpdmVyeV90eXBlIH0gPSBsYXN0U2hpcG1lbnQ7XG5cbiAgICAgIGlmIChkZWxpdmVyeV90eXBlID09PSAnbWFpbF9zaGlwbWVudCcpIHtcbiAgICAgICAgc3RhdHVzID0gJ0luIFRyYW5zaXQnO1xuICAgICAgICBjb2xvciA9ICdnb2xkJztcbiAgICAgIH0gZWxzZSBpZiAoZGVsaXZlcnlfdHlwZSA9PT0gJ21lc3Nlbmdlcl9zaGlwbWVudCcpIHtcbiAgICAgICAgY29uc3Qgc2hpcG1lbnRTdGF0dXMgPSBsYXN0U2hpcG1lbnQuc3RhdHVzO1xuXG4gICAgICAgIGlmIChzaGlwbWVudFN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ0NvbnRhY3RpbmcnO1xuICAgICAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcG1lbnRTdGF0dXMgPT09ICdwaWNrdXAnKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ1BpY2tpbmcgVXAnO1xuICAgICAgICAgIGNvbG9yID0gJ2dvbGRlbnJvZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2hpcG1lbnRTdGF0dXMgPT09ICdwaWNrdXBfY29tcGxldGUnIHx8XG4gICAgICAgICAgc2hpcG1lbnRTdGF0dXMgPT09ICdkcm9wb2ZmJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0dXMgPSAnRHJvcHBpbmcgT2ZmJztcbiAgICAgICAgICBjb2xvciA9ICdnb2xkJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwbWVudFN0YXR1cyA9PT0gJ2RlbGl2ZXJlZCcpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnRGVsaXZlcmVkJztcbiAgICAgICAgICBjb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyLmxhdGUgJiYgIW9yZGVyLmZ1bGZpbGxlZCkge1xuICAgICAgaWYgKGFkbWluIHx8IHRhaWxvcikge1xuICAgICAgICBjb25zdCBkdWVUaW1lID0gdGhpcy5mb3JtYXRTdGF0dXNTdHJpbmcob3JkZXIuZHVlX2RhdGUsIHRydWUpO1xuICAgICAgICBzdGF0dXMgPSBkdWVUaW1lO1xuICAgICAgfSBlbHNlIGlmIChyZXRhaWxlcikge1xuICAgICAgICBzdGF0dXMgPSAnRGVsYXllZCc7XG4gICAgICB9XG4gICAgICBjb2xvciA9ICdyZWQnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBvcmRlci5mdWxmaWxsZWQgJiZcbiAgICAgICFvcmRlci5jdXN0b21lcl9hbGVydGVkICYmXG4gICAgICBvcmRlci5zaGlwX3RvX3N0b3JlXG4gICAgKSB7XG4gICAgICBzdGF0dXMgPSAnSW4gVHJhbnNpdCc7XG4gICAgICBjb2xvciA9ICdnb2xkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgb3JkZXIuZnVsZmlsbGVkICYmXG4gICAgICBvcmRlci5jdXN0b21lcl9hbGVydGVkICYmXG4gICAgICBvcmRlci5zaGlwX3RvX3N0b3JlXG4gICAgKSB7XG4gICAgICBzdGF0dXMgPSAnTm90aWZpZWQnO1xuICAgICAgY29sb3IgPSAncmVkJztcbiAgICB9IGVsc2UgaWYgKG9yZGVyLmFycml2ZWQgJiYgIW9yZGVyLmZ1bGZpbGxlZCkge1xuICAgICAgc3RhdHVzID0gdGhpcy5mb3JtYXRTdGF0dXNTdHJpbmcob3JkZXIuZHVlX2RhdGUsIGZhbHNlKTtcbiAgICAgIGNvbnN0IHN0YXR1c051bSA9IHN0YXR1cy5zcGxpdCgnJylbMF07XG5cbiAgICAgIGlmIChzdGF0dXNOdW0gPiAzKSB7XG4gICAgICAgIGNvbG9yID0gJ2dyZWVuJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzTnVtID4gMCkge1xuICAgICAgICBjb2xvciA9ICdnb2xkJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzTnVtIDwgMSkge1xuICAgICAgICBjb2xvciA9ICdyZWQnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzdGF0dXMsIGNvbG9yIH07XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9yZGVyLFxuICAgICAgb3JkZXI6IHsgaWQsIGFsdGVyYXRpb25zX2NvdW50LCBjdXN0b21lcjogeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUgfSB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBjb2xvciwgc3RhdHVzIH0gPSB0aGlzLmdldE9yZGVyU3RhdHVzKG9yZGVyKTtcblxuICAgIGNvbnN0IHJvdXRlID0gYC9vcmRlcnMvJHtpZH1gO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXJvd1wiIGtleT17aWR9PlxuICAgICAgICA8TGluayB0bz17cm91dGV9IGNsYXNzTmFtZT1cIm9yZGVyLXJvdy1saW5rLW5vLXNlbGVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItY2VsbC1uby1zZWxlY3RcIj4je2lkfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3IgfX0gY2xhc3NOYW1lPVwib3JkZXItY2VsbC1uby1zZWxlY3RcIj5cbiAgICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1jZWxsLW5vLXNlbGVjdFwiPlxuICAgICAgICAgICAge2ZpcnN0X25hbWV9IHtsYXN0X25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1jZWxsLW5vLXNlbGVjdFwiPnthbHRlcmF0aW9uc19jb3VudH08L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRhdGEtYnJlYWstcm93XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9UYWlsb3JPcmRlckxpc3QvT3JkZXJSb3cuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgT3JkZXJSb3cgZnJvbSAnLi9PcmRlclJvdyc7XG5cbmNsYXNzIE9yZGVyUm93cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcGVuT3JkZXJzLFxuICAgICAgc29ydE9yZGVyc0J5U3RhdHVzLFxuICAgICAgbG9hZGluZ09yZGVycyxcbiAgICAgIHVzZXJSb2xlcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaXNFbXB0eShvcGVuT3JkZXJzKSkge1xuICAgICAgY29uc3Qgb3JkZXJzV2l0aFNoaXBtZW50cyA9IHNvcnRPcmRlcnNCeVN0YXR1cygnbmV3X29yZGVycycpO1xuICAgICAgaWYgKCFpc0VtcHR5KG9yZGVyc1dpdGhTaGlwbWVudHMpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge29yZGVyc1dpdGhTaGlwbWVudHMubWFwKChvcmRlciwgaSkgPT4gKFxuICAgICAgICAgICAgICA8T3JkZXJSb3cgb3JkZXI9e29yZGVyfSB1c2VyUm9sZXM9e3VzZXJSb2xlc30ga2V5PXtpfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW9yZGVyc1wiPk5vIG9yZGVycyBmb3VuZCE8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYWRpbmdPcmRlcnMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW9yZGVyc1wiPkxvYWRpbmcgT3JkZXJzLi4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcm93XCIgLz47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyUm93cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L1RhaWxvck9yZGVyTGlzdC9PcmRlclJvd3MuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBPcmRlckhlYWRlcnMgZnJvbSAnLi9PcmRlckhlYWRlcnMnO1xuaW1wb3J0IE9yZGVyUm93cyBmcm9tICcuL09yZGVyUm93cyc7XG5cbmNsYXNzIFRhaWxvck9yZGVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWFkZXJUZXh0LFxuICAgICAgb3Blbk9yZGVycyxcbiAgICAgIGxvYWRpbmdPcmRlcnMsXG4gICAgICBzb3J0T3JkZXJzQnlTdGF0dXMsXG4gICAgICB1c2VyUm9sZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e2hlYWRlclRleHR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJzXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxPcmRlckhlYWRlcnMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWhlYWRlci1icmVhay1yb3dcIiAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8T3JkZXJSb3dzXG4gICAgICAgICAgICAgIG9wZW5PcmRlcnM9e29wZW5PcmRlcnN9XG4gICAgICAgICAgICAgIGxvYWRpbmdPcmRlcnM9e2xvYWRpbmdPcmRlcnN9XG4gICAgICAgICAgICAgIHNvcnRPcmRlcnNCeVN0YXR1cz17c29ydE9yZGVyc0J5U3RhdHVzfVxuICAgICAgICAgICAgICB1c2VyUm9sZXM9e3VzZXJSb2xlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWlsb3JPcmRlckxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9UYWlsb3JPcmRlckxpc3QvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL0J1dHRvbic7XG5cbmNsYXNzIEN1c3RvbWVyT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGN1c3RvbWVyTm90aWZpZWRTZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZE9yZGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gbmV3IFNldChzZWxlY3RlZE9yZGVycy5tYXAob3JkZXIgPT4gb3JkZXIuY3VzdG9tZXJfYWxlcnRlZCkpO1xuICB9O1xuXG4gIGN1c3RvbWVyTm90aWZpZWREaXNhYmxlZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXQgPSB0aGlzLmN1c3RvbWVyTm90aWZpZWRTZXQoKTtcbiAgICByZXR1cm4gc2V0LnNpemUgPCAxIHx8IHNldC5oYXModHJ1ZSk7XG4gIH07XG5cbiAgY3VzdG9tZXJQaWNrdXBEaXNhYmxlZCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXQgPSB0aGlzLmN1c3RvbWVyTm90aWZpZWRTZXQoKTtcbiAgICByZXR1cm4gc2V0LnNpemUgPCAxIHx8IHNldC5oYXMoZmFsc2UpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiXG4gICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VuZC1vcmRlci1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWxlcnRDdXN0b21lcnN9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuY3VzdG9tZXJOb3RpZmllZERpc2FibGVkKCl9XG4gICAgICAgICAgdGV4dD1cIk5PVElGWSBDVVNUT01FUlwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlbmQtb3JkZXItYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1hcmtDdXN0b21lclJlY2VpdmVkfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmN1c3RvbWVyUGlja3VwRGlzYWJsZWQoKX1cbiAgICAgICAgICB0ZXh0PVwiQ1VTVE9NRVIgUkVDRUlWRURcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lck9wdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9yZXRhaWxlck9yZGVyTWdtdENvbnRyb2xzL0N1c3RvbWVyT3B0aW9ucy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL0J1dHRvbic7XG5pbXBvcnQgU2hpcHBpbmdPcHRpb25zIGZyb20gJy4vU2hpcHBpbmdPcHRpb25zJztcbmltcG9ydCBPcmRlckNvbXBsZXRlIGZyb20gJy4uLy4uLy4uL3ByaW50cy9PcmRlckNvbXBsZXRlJztcblxuaW1wb3J0IHsgc2hpcG1lbnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2hpcHBpbmcvc2hpcHBpbmdGdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcG1lbnQsIHNldExvYWRlciwgcmVtb3ZlTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgU2VuZE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGlkZVNob3cgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9vbCA9ICF0aGlzLnN0YXRlLnNob3dPcHRpb25zO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3B0aW9uczogYm9vbCB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBzZWxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRPcmRlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgdXNlclJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9yZGVyX2lkcyA9IFsuLi5zZWxlY3RlZE9yZGVyc10ubWFwKG9yZGVyID0+IG9yZGVyLmlkKTtcblxuICAgIHNldExvYWRlcigpO1xuICAgIGNvbnN0IHNoaXBtZW50X2FjdGlvbiA9IHNoaXBtZW50QWN0aW9ucyhbLi4uc2VsZWN0ZWRPcmRlcnNdWzBdLCB1c2VyUm9sZXMpO1xuXG4gICAgY3JlYXRlU2hpcG1lbnQoe1xuICAgICAgc2hpcG1lbnQ6IHsgZGVsaXZlcnlfdHlwZTogc2VsZWN0aW9uLCBvcmRlcl9pZHMsIHNoaXBtZW50X2FjdGlvbiB9LFxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIHJlbW92ZUxvYWRlcigpO1xuICAgICAgc2VsZWN0aW9uID09PSAnbWFpbF9zaGlwbWVudCdcbiAgICAgICAgPyB0aGlzLnByb3BzLmhhbmRsZUJ1bGtNYWlsUmVzKHJlcylcbiAgICAgICAgOiB0aGlzLnByb3BzLmhhbmRsZU1lc3NlbmdlclJlcyhyZXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIG5vU2VsZWN0ZWRPcmRlcnMgPSBzZWxlY3RlZE9yZGVycyA9PiB7XG4gICAgcmV0dXJuIHNlbGVjdGVkT3JkZXJzLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG5vU2VsZWN0ZWRPcmRlcnMgPSB0aGlzLm5vU2VsZWN0ZWRPcmRlcnMobmV4dFByb3BzLnNlbGVjdGVkT3JkZXJzKTtcbiAgICBjb25zdCBzaG93T3B0aW9uc1Zpc2libGUgPSB0aGlzLnN0YXRlLnNob3dPcHRpb25zO1xuXG4gICAgaWYgKG5vU2VsZWN0ZWRPcmRlcnMgJiYgc2hvd09wdGlvbnNWaXNpYmxlKSB7XG4gICAgICB0aGlzLmhpZGVTaG93KCk7XG4gICAgICB0aGlzLnByb3BzLnJlZnJlc2hTdG9yZU9yZGVycygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dPcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRPcmRlcnMsIHNlbGVjdGVkT3JkZXJTaGlwbWVudHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLm5vU2VsZWN0ZWRPcmRlcnMoc2VsZWN0ZWRPcmRlcnMpO1xuXG4gICAgaWYgKHNob3dPcHRpb25zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLW9wdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8U2hpcHBpbmdPcHRpb25zXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgaGlkZVNob3c9e3RoaXMuaGlkZVNob3d9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8T3JkZXJDb21wbGV0ZSBzaGlwbWVudFNldD17c2VsZWN0ZWRPcmRlclNoaXBtZW50c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLW9wdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZW5kLW9yZGVyLWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVTaG93fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdGV4dD1cIlNFTkQgT1JERVJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VuZE9yZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0b3Jlcy9TdG9yZXNTaG93L3JldGFpbGVyT3JkZXJNZ210Q29udHJvbHMvU2VuZE9yZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uLy4uLy4uL0NoZWNrYm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vQnV0dG9uJztcblxuaW1wb3J0IHsgbWVzc2VuZ2VyQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vc2hpcHBpbmcvc2hpcHBpbmdGdW5jdGlvbnMnO1xuXG5jbGFzcyBTaGlwcGluZ09wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWQobmFtZSkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBuYW1lID09PSBzZWxlY3RlZCA/IG51bGwgOiBuYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbmV3VmFsdWUgfSk7XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG51bGwgfSk7XG4gICAgdGhpcy5wcm9wcy5oaWRlU2hvdygpO1xuICB9XG5cbiAgcmVuZGVyTWVzc2VuZ2VyT3B0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuXG4gICAgaWYgKG1lc3NlbmdlckF2YWlsYWJsZShub3cpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLW9wdGlvblwiPlxuICAgICAgICAgIDxociBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc4NSUnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fSAvPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgbmFtZT1cIm1lc3Nlbmdlcl9zaGlwbWVudFwiXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnbWVzc2VuZ2VyX3NoaXBtZW50J31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlU2VsZWN0ZWQoZS50YXJnZXQubmFtZSl9XG4gICAgICAgICAgICB0ZXh0PVwiQ2FsbCBQb3N0bWF0ZXMgTWVzc2VuZ2VyIChlc3QuICQxMylcIlxuICAgICAgICAgICAgbGFiZWxDbGFzcz17J3NoaXBwaW5nLW9wdGlvbi1sYWJlbCd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RCdXR0b25EaXNhYmxlZCA9IHNlbGVjdGVkID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzM4MHB4JyxcbiAgICAgICAgICBib3JkZXI6ICczcHggc29saWQgIzAwMDAzMycsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMzBweCcsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnNTBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctb3B0aW9uXCI+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBuYW1lPVwibWFpbF9zaGlwbWVudFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PT0gJ21haWxfc2hpcG1lbnQnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVTZWxlY3RlZChlLnRhcmdldC5uYW1lKX1cbiAgICAgICAgICAgIHRleHQ9XCJQcmludCBVU1BTIFNoaXBwaW5nIExhYmVsIChlc3QuICQ2KVwiXG4gICAgICAgICAgICBsYWJlbENsYXNzPXsnc2hpcHBpbmctb3B0aW9uLWxhYmVsJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dGhpcy5yZW5kZXJNZXNzZW5nZXJPcHRpb24oKX1cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCJcbiAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZW5kLW9yZGVyLWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVTaG93fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgdGV4dD1cIkNBTkNFTFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbmQtb3JkZXItYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHNlbGVjdGVkKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgIHRleHQ9XCJTRUxFQ1RcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwcGluZ09wdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdG9yZXMvU3RvcmVzU2hvdy9yZXRhaWxlck9yZGVyTWdtdENvbnRyb2xzL1NoaXBwaW5nT3B0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=