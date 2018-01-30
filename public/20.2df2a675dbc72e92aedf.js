webpackJsonp([20],{

/***/ 693:
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

var _actions = __webpack_require__(34);

var _format = __webpack_require__(333);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    confirmedNewOrder: store.confirmedNewOrder,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    resetCart: _actions.resetCart,
    setConfirmedNewOrder: _actions.setConfirmedNewOrder,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrderConfirmation = function (_Component) {
  _inherits(OrderConfirmation, _Component);

  function OrderConfirmation() {
    _classCallCheck(this, OrderConfirmation);

    return _possibleConstructorReturn(this, (OrderConfirmation.__proto__ || Object.getPrototypeOf(OrderConfirmation)).apply(this, arguments));
  }

  _createClass(OrderConfirmation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var kind = 'success';
      var message = 'Order completed!';
      this.props.setGrowler({ kind: kind, message: message });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetCart();
      this.props.setConfirmedNewOrder({});
    }
  }, {
    key: 'renderCustomerInfo',
    value: function renderCustomerInfo(customer) {
      var first_name = customer.first_name,
          last_name = customer.last_name,
          phone = customer.phone,
          email = customer.email;

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
      var _this2 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.name,
            ' #',
            index + 1
          ),
          _this2.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'renderOrderInfo',
    value: function renderOrderInfo(confirmedNewOrder) {
      var items = confirmedNewOrder.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Order Info:'
        ),
        this.renderGarments(items)
      );
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(confirmedNewOrder) {
      var newOrderLink = '/orders/' + confirmedNewOrder.id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/orders' },
          _react2.default.createElement('input', {
            type: 'submit',
            className: 'submit-order-button',
            value: 'Manage Orders'
          })
        )
      );
    }
  }, {
    key: 'renderShipToCustomer',
    value: function renderShipToCustomer(customerInfo) {
      var first_name = customerInfo.first_name,
          last_name = customerInfo.last_name,
          street = customerInfo.street,
          unit = customerInfo.unit,
          city = customerInfo.city,
          state_province = customerInfo.state_province,
          zip_code = customerInfo.zip_code;

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
        unit ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '',
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
    value: function renderShipToStore(store) {
      var name = store.name,
          street = store.street,
          unit = store.unit,
          city = store.city,
          state_province = store.state_province,
          zip_code = store.zip_code;

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
        unit ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '',
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
      var _props = this.props,
          currentStore = _props.currentStore,
          ship_to_store = _props.confirmedNewOrder.ship_to_store,
          customer = _props.cartCustomer;


      if (ship_to_store) {
        return this.renderShipToStore(currentStore);
      } else if (!ship_to_store) {
        return this.renderShipToCustomer(customer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          confirmedNewOrder = _props2.confirmedNewOrder,
          cartCustomer = _props2.cartCustomer;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Order Completed' }),
        _react2.default.createElement(
          'div',
          { className: 'order-completed-container' },
          this.renderCustomerInfo(cartCustomer),
          _react2.default.createElement('br', null),
          this.renderOrderInfo(confirmedNewOrder),
          _react2.default.createElement('br', null),
          this.renderShippingInfo(),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            null,
            'Total: $',
            confirmedNewOrder.total.toFixed(2)
          ),
          _react2.default.createElement('br', null),
          this.renderButtons(confirmedNewOrder)
        )
      );
    }
  }]);

  return OrderConfirmation;
}(_react.Component);

OrderConfirmation.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  confirmedNewOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  resetCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setConfirmedNewOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderConfirmation);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvbmV3L09yZGVyQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioqKioqKioqKioiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiY29uZmlybWVkTmV3T3JkZXIiLCJzdG9yZSIsImNhcnRDdXN0b21lciIsImN1cnJlbnRTdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInJlc2V0Q2FydCIsInNldENvbmZpcm1lZE5ld09yZGVyIiwic2V0R3Jvd2xlciIsImRpc3BhdGNoIiwiT3JkZXJDb25maXJtYXRpb24iLCJraW5kIiwibWVzc2FnZSIsInByb3BzIiwiY3VzdG9tZXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmUiLCJlbWFpbCIsImdhcm1lbnQiLCJhbHRlcmF0aW9ucyIsIm1hcCIsImFsdCIsImluZGV4IiwibmFtZSIsImdhcm1lbnRzIiwicmVuZGVyR2FybWVudEFsdGVyYXRpb25zIiwiaXRlbXMiLCJyZW5kZXJHYXJtZW50cyIsIm5ld09yZGVyTGluayIsImlkIiwiY3VzdG9tZXJJbmZvIiwic3RyZWV0IiwidW5pdCIsImNpdHkiLCJzdGF0ZV9wcm92aW5jZSIsInppcF9jb2RlIiwic2hpcF90b19zdG9yZSIsInJlbmRlclNoaXBUb1N0b3JlIiwicmVuZGVyU2hpcFRvQ3VzdG9tZXIiLCJyZW5kZXJDdXN0b21lckluZm8iLCJyZW5kZXJPcmRlckluZm8iLCJyZW5kZXJTaGlwcGluZ0luZm8iLCJ0b3RhbCIsInRvRml4ZWQiLCJyZW5kZXJCdXR0b25zIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhZG1pbiIsInJldGFpbGVyIiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJjdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xDLHVCQUFtQkMsTUFBTUQsaUJBRHBCO0FBRUxFLGtCQUFjRCxNQUFNQyxZQUZmO0FBR0xDLGtCQUFjRixNQUFNRTtBQUhmLEdBQVA7QUFLRCxDQU5EOztBQVFBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFDTDtBQUNFQyxpQ0FERjtBQUVFQyx1REFGRjtBQUdFQztBQUhGLEdBREssRUFNTEMsUUFOSyxDQUFQO0FBUUQsQ0FURDs7SUFXTUMsaUI7Ozs7Ozs7Ozs7O3dDQVVnQjtBQUNsQixVQUFNQyxPQUFPLFNBQWI7QUFDQSxVQUFNQyxVQUFVLGtCQUFoQjtBQUNBLFdBQUtDLEtBQUwsQ0FBV0wsVUFBWCxDQUFzQixFQUFFRyxVQUFGLEVBQVFDLGdCQUFSLEVBQXRCO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0MsS0FBTCxDQUFXUCxTQUFYO0FBQ0EsV0FBS08sS0FBTCxDQUFXTixvQkFBWCxDQUFnQyxFQUFoQztBQUNEOzs7dUNBRWtCTyxRLEVBQVU7QUFBQSxVQUNuQkMsVUFEbUIsR0FDcUJELFFBRHJCLENBQ25CQyxVQURtQjtBQUFBLFVBQ1BDLFNBRE8sR0FDcUJGLFFBRHJCLENBQ1BFLFNBRE87QUFBQSxVQUNJQyxLQURKLEdBQ3FCSCxRQURyQixDQUNJRyxLQURKO0FBQUEsVUFDV0MsS0FEWCxHQUNxQkosUUFEckIsQ0FDV0ksS0FEWDs7QUFFM0IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDR0gsb0JBREg7QUFBQTtB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LFNBQU4sQ0FBZ0JRLFFBQTdDLEVBQXVEO0FBQ3JELFdBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxhQUFoQixFQUE4QixJQUFJTixJQUFsQztBQUNFO0FBQUE7QUFBQSxVQUFJLGlDQUErQkgsTUFBbkMsRUFBNkMsU0FBU0ksT0FBdEQ7QUFBQTtBQUFBLE9BREY7QUFJRSw2Q0FBSyxXQUFVLHNCQUFmO0FBSkYsS0FERjtBQVFEO0FBQ0YsQ0F0QkQ7O0FBd0JBLElBQU1NLGdCQUFnQixTQUFoQkEsYUFBZ0IsUUFBUztBQUM3QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBS2hELFlBQU1pRDtBQUFYLEtBREY7QUFFR1osZUFBV3JDLEtBQVg7QUFGSCxHQURGO0FBTUQsQ0FQRDs7QUFTQSxJQUFNYixrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsU0FBTztBQUNMK0QsaUJBQWE3RCxNQUFNNkQsV0FEZDtBQUVMWCxlQUFXbEQsTUFBTWtEO0FBRlosR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTS9DLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFDTDtBQUNFQztBQURGLEdBREssRUFJTEcsUUFKSyxDQUFQO0FBTUQsQ0FQRDtrQkFRZSx5QkFBUVQsZUFBUixFQUF5Qkssa0JBQXpCLEVBQTZDd0QsYUFBN0MsQyIsImZpbGUiOiIyMC4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgc2V0Q29uZmlybWVkTmV3T3JkZXIsIHJlc2V0Q2FydCwgc2V0R3Jvd2xlciB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZm9ybWF0UGhvbmUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtYXQnO1xuXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbmZpcm1lZE5ld09yZGVyOiBzdG9yZS5jb25maXJtZWROZXdPcmRlcixcbiAgICBjYXJ0Q3VzdG9tZXI6IHN0b3JlLmNhcnRDdXN0b21lcixcbiAgICBjdXJyZW50U3RvcmU6IHN0b3JlLmN1cnJlbnRTdG9yZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgICBzZXRDb25maXJtZWROZXdPcmRlcixcbiAgICAgIHNldEdyb3dsZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgT3JkZXJDb25maXJtYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNhcnRDdXN0b21lcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBjdXJyZW50U3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY29uZmlybWVkTmV3T3JkZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgcmVzZXRDYXJ0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRDb25maXJtZWROZXdPcmRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qga2luZCA9ICdzdWNjZXNzJztcbiAgICBjb25zdCBtZXNzYWdlID0gJ09yZGVyIGNvbXBsZXRlZCEnO1xuICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQsIG1lc3NhZ2UgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlc2V0Q2FydCgpO1xuICAgIHRoaXMucHJvcHMuc2V0Q29uZmlybWVkTmV3T3JkZXIoe30pO1xuICB9XG5cbiAgcmVuZGVyQ3VzdG9tZXJJbmZvKGN1c3RvbWVyKSB7XG4gICAgY29uc3QgeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBob25lLCBlbWFpbCB9ID0gY3VzdG9tZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5DdXN0b21lciBJbmZvOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtmaXJzdF9uYW1lfSB7bGFzdF9uYW1lfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPntmb3JtYXRQaG9uZShwaG9uZSl9PC9wPlxuICAgICAgICA8cD57ZW1haWx9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckdhcm1lbnRBbHRlcmF0aW9ucyhnYXJtZW50KSB7XG4gICAgcmV0dXJuIGdhcm1lbnQuYWx0ZXJhdGlvbnMubWFwKChhbHQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJ0LWFsdGVyYXRpb25cIj5cbiAgICAgICAgICB7YWx0Lm5hbWV9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJHYXJtZW50cyhnYXJtZW50cykge1xuICAgIHJldHVybiBnYXJtZW50cy5tYXAoKGdhcm1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIHtnYXJtZW50Lm5hbWV9ICN7aW5kZXggKyAxfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAge3RoaXMucmVuZGVyR2FybWVudEFsdGVyYXRpb25zKGdhcm1lbnQpfVxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJPcmRlckluZm8oY29uZmlybWVkTmV3T3JkZXIpIHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSBjb25maXJtZWROZXdPcmRlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPk9yZGVyIEluZm86PC9oMj5cbiAgICAgICAge3RoaXMucmVuZGVyR2FybWVudHMoaXRlbXMpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckJ1dHRvbnMoY29uZmlybWVkTmV3T3JkZXIpIHtcbiAgICBjb25zdCBuZXdPcmRlckxpbmsgPSBgL29yZGVycy8ke2NvbmZpcm1lZE5ld09yZGVyLmlkfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgdG89XCIvb3JkZXJzXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1vcmRlci1idXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJNYW5hZ2UgT3JkZXJzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2hpcFRvQ3VzdG9tZXIoY3VzdG9tZXJJbmZvKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZSxcbiAgICAgIHN0cmVldCxcbiAgICAgIHVuaXQsXG4gICAgICBjaXR5LFxuICAgICAgc3RhdGVfcHJvdmluY2UsXG4gICAgICB6aXBfY29kZSxcbiAgICB9ID0gY3VzdG9tZXJJbmZvO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2hpcCBUbyBDdXN0b21lcjo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7Zmlyc3RfbmFtZX0ge2xhc3RfbmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD57c3RyZWV0fTwvcD5cbiAgICAgICAge3VuaXQgPyA8cD57dW5pdH08L3A+IDogJyd9XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtjaXR5fSwge3N0YXRlX3Byb3ZpbmNlfSB7emlwX2NvZGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTaGlwVG9TdG9yZShzdG9yZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgc3RyZWV0LCB1bml0LCBjaXR5LCBzdGF0ZV9wcm92aW5jZSwgemlwX2NvZGUgfSA9IHN0b3JlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2hpcCBUbyBTdG9yZTo8L2gyPlxuICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgIDxwPntzdHJlZXR9PC9wPlxuICAgICAgICB7dW5pdCA/IDxwPnt1bml0fTwvcD4gOiAnJ31cbiAgICAgICAgPHA+XG4gICAgICAgICAge2NpdHl9LCB7c3RhdGVfcHJvdmluY2V9IHt6aXBfY29kZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNoaXBwaW5nSW5mbygpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U3RvcmUsXG4gICAgICBjb25maXJtZWROZXdPcmRlcjogeyBzaGlwX3RvX3N0b3JlIH0sXG4gICAgICBjYXJ0Q3VzdG9tZXI6IGN1c3RvbWVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHNoaXBfdG9fc3RvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNoaXBUb1N0b3JlKGN1cnJlbnRTdG9yZSk7XG4gICAgfSBlbHNlIGlmICghc2hpcF90b19zdG9yZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2hpcFRvQ3VzdG9tZXIoY3VzdG9tZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpcm1lZE5ld09yZGVyLCBjYXJ0Q3VzdG9tZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD1cIk9yZGVyIENvbXBsZXRlZFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItY29tcGxldGVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckN1c3RvbWVySW5mbyhjYXJ0Q3VzdG9tZXIpfVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHt0aGlzLnJlbmRlck9yZGVySW5mbyhjb25maXJtZWROZXdPcmRlcil9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2hpcHBpbmdJbmZvKCl9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGgyPlRvdGFsOiAke2NvbmZpcm1lZE5ld09yZGVyLnRvdGFsLnRvRml4ZWQoMil9PC9oMj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b25zKGNvbmZpcm1lZE5ld09yZGVyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9yZGVyQ29uZmlybWF0aW9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9uZXcvT3JkZXJDb25maXJtYXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==