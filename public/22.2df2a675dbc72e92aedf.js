webpackJsonp([22],{

/***/ 691:
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

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(34);

var _validations = __webpack_require__(331);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentOrder: store.currentOrder,
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setGrowler: _actions.setGrowler, getCurrentOrder: _actions.getCurrentOrder, getCurrentCustomer: _actions.getCurrentCustomer, updateCurrentCustomer: _actions.updateCurrentCustomer }, dispatch);
};

var CustomerEdit = function (_Component) {
  _inherits(CustomerEdit, _Component);

  function CustomerEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomerEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomerEdit.__proto__ || Object.getPrototypeOf(CustomerEdit)).call.apply(_ref, [this].concat(args))), _this), _this.refreshCurrentCustomer = function (customer) {
      _this.setState(customer);
    }, _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomerEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var customerId = this.props.match.params.customer_id;
      this.props.getCurrentCustomer(customerId);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var _props = this.props,
          currentStore = _props.currentStore,
          currentOrder = _props.currentOrder,
          getCurrentOrder = _props.getCurrentOrder,
          setGrowler = _props.setGrowler,
          customer = _props.currentCustomer,
          email = _props.currentCustomer.email;


      if ((0, _validations.ValidateEmail)(email)) {
        (0, _actions.updateCustomer)(customer).then(function (res) {
          var kind = void 0,
              message = void 0;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
            (0, _actions.getCurrentCustomer)(customer.id);
            getCurrentOrder(currentStore.id, currentOrder.id);
          }
          setGrowler({ kind: kind, message: message });
        }).catch(function (err) {});
      } else {
        var kind = 'warning';
        var message = 'Email must be valid';
        this.props.setGrowler({ kind: kind, message: message });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentOrderId = this.props.currentOrder.id;

      var backLink = '/orders/' + currentOrderId;
      var _props2 = this.props,
          _props2$currentCustom = _props2.currentCustomer,
          email = _props2$currentCustom.email,
          first_name = _props2$currentCustom.first_name,
          last_name = _props2$currentCustom.last_name,
          phone = _props2$currentCustom.phone,
          street = _props2$currentCustom.street,
          unit = _props2$currentCustom.unit,
          city = _props2$currentCustom.city,
          state_province = _props2$currentCustom.state_province,
          zip_code = _props2$currentCustom.zip_code,
          updateCurrentCustomer = _props2.updateCurrentCustomer;


      console.log('customer edit');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: backLink },
          'Back'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.handleSubmit(e);
            } },
          _react2.default.createElement(_FormField2.default, {
            value: email,
            fieldName: 'email',
            title: 'Email',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: first_name,
            fieldName: 'first_name',
            title: 'First Name',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: last_name,
            fieldName: 'last_name',
            title: 'Last Name',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: phone,
            fieldName: 'phone',
            title: 'Phone',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: street,
            fieldName: 'street',
            title: 'Street',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: unit,
            fieldName: 'unit',
            title: 'Unit',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: city,
            fieldName: 'city',
            title: 'City',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: state_province,
            fieldName: 'state_province',
            title: 'State/Province',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement('input', { className: 'short-button ', type: 'submit', value: 'Update' })
        )
      );
    }
  }]);

  return CustomerEdit;
}(_react.Component);

CustomerEdit.propTypes = {
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCurrentCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerEdit);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJFZGl0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcz85OTFkKioqKioqIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRPcmRlciIsInN0b3JlIiwiY3VycmVudEN1c3RvbWVyIiwiY3VycmVudFN0b3JlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic2V0R3Jvd2xlciIsImdldEN1cnJlbnRPcmRlciIsImdldEN1cnJlbnRDdXN0b21lciIsInVwZGF0ZUN1cnJlbnRDdXN0b21lciIsImRpc3BhdGNoIiwiQ3VzdG9tZXJFZGl0IiwicmVmcmVzaEN1cnJlbnRDdXN0b21lciIsInNldFN0YXRlIiwiY3VzdG9tZXIiLCJ1cGRhdGVTdGF0ZSIsImZpZWxkIiwidmFsdWUiLCJjdXN0b21lcklkIiwicHJvcHMiLCJtYXRjaCIsInBhcmFtcyIsImN1c3RvbWVyX2lkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJ0aGVuIiwia2luZCIsIm1lc3NhZ2UiLCJyZXMiLCJkYXRhIiwiYm9keSIsImVycm9ycyIsImlkIiwiY2F0Y2giLCJjdXJyZW50T3JkZXJJZCIsImJhY2tMaW5rIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lIiwic3RyZWV0IiwidW5pdCIsImNpdHkiLCJzdGF0ZV9wcm92aW5jZSIsInppcF9jb2RlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiRm9ybUZpZWxkIiwidGl0bGUiLCJmaWVsZE5hbWUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInR5cGUiLCJpbnB1dFR5cGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztB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QUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU8sV0FBVSxZQUFqQjtBQUErQko7QUFBL0IsS0FERjtBQUVFLDZDQUZGO0FBR0U7QUFDRSxZQUFNSyxTQURSO0FBRUUsaUNBQXlCRixTQUYzQjtBQUdFLFlBQUssSUFIUDtBQUlFLGFBQU92QyxLQUpUO0FBS0UsZ0JBQVU7QUFBQSxlQUFLc0MsVUFBU0QsU0FBVCxFQUFvQi9CLEVBQUVvQyxNQUFGLENBQVMxQyxLQUE3QixDQUFMO0FBQUE7QUFMWixNQUhGO0FBVUUsNkNBVkY7QUFXRTtBQVhGLEdBREY7QUFlRCxDQWxCRDs7a0JBb0JlbUMsUyIsImZpbGUiOiIyMi4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgdXBkYXRlQ3VzdG9tZXIsXG4gIGdldEN1cnJlbnRDdXN0b21lcixcbiAgc2V0R3Jvd2xlcixcbiAgZ2V0Q3VycmVudE9yZGVyLFxuICB1cGRhdGVDdXJyZW50Q3VzdG9tZXIsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBWYWxpZGF0ZUVtYWlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGlvbnMnO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4uL0Zvcm1GaWVsZC5qcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50T3JkZXI6IHN0b3JlLmN1cnJlbnRPcmRlcixcbiAgICBjdXJyZW50Q3VzdG9tZXI6IHN0b3JlLmN1cnJlbnRDdXN0b21lcixcbiAgICBjdXJyZW50U3RvcmU6IHN0b3JlLmN1cnJlbnRTdG9yZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7IHNldEdyb3dsZXIsIGdldEN1cnJlbnRPcmRlciwgZ2V0Q3VycmVudEN1c3RvbWVyLCB1cGRhdGVDdXJyZW50Q3VzdG9tZXIgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgQ3VzdG9tZXJFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50T3JkZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY3VycmVudEN1c3RvbWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBzZXRHcm93bGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBnZXRDdXJyZW50T3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIGdldEN1cnJlbnRDdXN0b21lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgdXBkYXRlQ3VycmVudEN1c3RvbWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjdXN0b21lcklkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuY3VzdG9tZXJfaWQ7XG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50Q3VzdG9tZXIoY3VzdG9tZXJJZCk7XG4gIH1cblxuICByZWZyZXNoQ3VycmVudEN1c3RvbWVyID0gY3VzdG9tZXIgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoY3VzdG9tZXIpO1xuICB9O1xuXG4gIHVwZGF0ZVN0YXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U3RvcmUsXG4gICAgICBjdXJyZW50T3JkZXIsXG4gICAgICBnZXRDdXJyZW50T3JkZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgICAgY3VycmVudEN1c3RvbWVyOiBjdXN0b21lcixcbiAgICAgIGN1cnJlbnRDdXN0b21lcjogeyBlbWFpbCB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKFZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgICB1cGRhdGVDdXN0b21lcihjdXN0b21lcilcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBsZXQga2luZCwgbWVzc2FnZTtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuYm9keS5lcnJvcnMpIHtcbiAgICAgICAgICAgIGtpbmQgPSAnd2FybmluZyc7XG4gICAgICAgICAgICBtZXNzYWdlID0gcmVzLmRhdGEuYm9keS5lcnJvcnNbMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtpbmQgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICBtZXNzYWdlID0gJ0N1c3RvbWVyIFVwZGF0ZWQnO1xuICAgICAgICAgICAgZ2V0Q3VycmVudEN1c3RvbWVyKGN1c3RvbWVyLmlkKTtcbiAgICAgICAgICAgIGdldEN1cnJlbnRPcmRlcihjdXJyZW50U3RvcmUuaWQsIGN1cnJlbnRPcmRlci5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2luZCA9ICd3YXJuaW5nJztcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnRW1haWwgbXVzdCBiZSB2YWxpZCc7XG4gICAgICB0aGlzLnByb3BzLnNldEdyb3dsZXIoeyBraW5kLCBtZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRPcmRlcjogeyBpZDogY3VycmVudE9yZGVySWQgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBiYWNrTGluayA9IGAvb3JkZXJzLyR7Y3VycmVudE9yZGVySWR9YDtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50Q3VzdG9tZXI6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgcGhvbmUsXG4gICAgICAgIHN0cmVldCxcbiAgICAgICAgdW5pdCxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgc3RhdGVfcHJvdmluY2UsXG4gICAgICAgIHppcF9jb2RlLFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZUN1cnJlbnRDdXN0b21lcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBlZGl0Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPXtiYWNrTGlua30+QmFjazwvTGluaz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J2VtYWlsJ31cbiAgICAgICAgICAgIHRpdGxlPXsnRW1haWwnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUN1cnJlbnRDdXN0b21lcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0X25hbWV9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eydmaXJzdF9uYW1lJ31cbiAgICAgICAgICAgIHRpdGxlPXsnRmlyc3QgTmFtZSd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ3VycmVudEN1c3RvbWVyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17bGFzdF9uYW1lfVxuICAgICAgICAgICAgZmllbGROYW1lPXsnbGFzdF9uYW1lJ31cbiAgICAgICAgICAgIHRpdGxlPXsnTGFzdCBOYW1lJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDdXJyZW50Q3VzdG9tZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3Bob25lJ31cbiAgICAgICAgICAgIHRpdGxlPXsnUGhvbmUnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUN1cnJlbnRDdXN0b21lcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e3N0cmVldH1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3N0cmVldCd9XG4gICAgICAgICAgICB0aXRsZT17J1N0cmVldCd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ3VycmVudEN1c3RvbWVyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17dW5pdH1cbiAgICAgICAgICAgIGZpZWxkTmFtZT17J3VuaXQnfVxuICAgICAgICAgICAgdGl0bGU9eydVbml0J31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDdXJyZW50Q3VzdG9tZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxuICAgICAgICAgICAgZmllbGROYW1lPXsnY2l0eSd9XG4gICAgICAgICAgICB0aXRsZT17J0NpdHknfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUN1cnJlbnRDdXN0b21lcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlX3Byb3ZpbmNlfVxuICAgICAgICAgICAgZmllbGROYW1lPXsnc3RhdGVfcHJvdmluY2UnfVxuICAgICAgICAgICAgdGl0bGU9eydTdGF0ZS9Qcm92aW5jZSd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ3VycmVudEN1c3RvbWVyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17emlwX2NvZGV9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eyd6aXBfY29kZSd9XG4gICAgICAgICAgICB0aXRsZT17J1ppcCBDb2RlJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDdXJyZW50Q3VzdG9tZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaG9ydC1idXR0b24gXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDdXN0b21lckVkaXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY3VzdG9tZXJzL0N1c3RvbWVyRWRpdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvcm1GaWVsZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgdmFsdWUsIGZpZWxkTmFtZSwgb25DaGFuZ2UsIGNsYXNzTmFtZSwgdHlwZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGlucHV0VHlwZSA9IHR5cGUgPyB0eXBlIDogJ3RleHQnO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17aW5wdXRUeXBlfVxuICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHNpemU9XCI1MFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=