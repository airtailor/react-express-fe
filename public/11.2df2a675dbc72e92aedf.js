webpackJsonp([11],{

/***/ 692:
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

var _FormSelect = __webpack_require__(710);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

var _actions = __webpack_require__(34);

var _SelectTailor = __webpack_require__(713);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _Checkbox = __webpack_require__(711);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    order: store.currentOrder,
    store: store.currentStore,
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getTailorList: _actions.getTailorList,
    getCurrentOrder: _actions.getCurrentOrder,
    updateOrder: _actions.updateOrder,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrdersEdit = function (_Component) {
  _inherits(OrdersEdit, _Component);

  function OrdersEdit(props) {
    _classCallCheck(this, OrdersEdit);

    var _this = _possibleConstructorReturn(this, (OrdersEdit.__proto__ || Object.getPrototypeOf(OrdersEdit)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.state = props.order;
    return _this;
  }

  _createClass(OrdersEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var order = this.props.order;

      if ((0, _isEmpty2.default)(order)) {
        var _props = this.props,
            orderId = _props.match.params.order_id,
            storeId = _props.store.id;


        this.props.setLoader();
        this.props.getCurrentOrder(storeId, orderId).then(function () {
          _this2.props.removeLoader();

          var order = _this2.props.order;

          _this2.setState(order);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      this.props.updateOrder({ order: this.state }).then(function (res) {
        _this3.props.setGrowler({ kind: 'success', message: 'Order updated!' });
      }).catch(function (err) {
        return console.log('errr', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var order = this.state;
      var submit = function submit(e) {
        return _this4.handleSubmit(e);
      };
      var updateState = this.updateState;

      var headerText = 'Orders / Edit';
      if ((0, _isEmpty2.default)(order)) {
        return _react2.default.createElement(_SectionHeader2.default, { text: headerText });
      } else {
        var id = order.id,
            fulfilled = order.fulfilled,
            arrived = order.arrived,
            _order$customer = order.customer,
            firstName = _order$customer.first_name,
            lastName = _order$customer.last_name,
            total = order.total,
            weight = order.weight,
            tailorId = order.provider_id;


        headerText = 'Orders / Edit / ' + id;
        var backLink = '/orders/' + this.state.id;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: backLink },
            'Back'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: submit },
            _react2.default.createElement(_FormField2.default, {
              value: firstName,
              fieldName: 'first_name',
              title: 'First Name:',
              onChange: function onChange() {}
            }),
            _react2.default.createElement(_FormField2.default, {
              value: lastName,
              fieldName: 'last_name',
              title: 'Last Name:',
              onChange: function onChange() {}
            }),
            _react2.default.createElement(_Checkbox2.default, {
              checked: arrived,
              type: 'checkbox',
              text: 'Arrived?',
              name: 'arrived',
              fieldName: 'arrived',
              onChange: updateState
            }),
            _react2.default.createElement(_Checkbox2.default, {
              checked: fulfilled,
              type: 'checkbox',
              text: 'Fulfilled?',
              name: 'fulfilled',
              fieldName: 'fulfilled',
              onChange: updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: total,
              fieldName: 'total',
              title: 'Total: $',
              onChange: updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: weight,
              fieldName: 'weight',
              title: 'Weight (grams):',
              onChange: updateState
            }),
            _react2.default.createElement(_SelectTailor2.default, { tailorId: tailorId, onChange: this.updateState }),
            _react2.default.createElement(_FormField2.default, {
              value: total,
              fieldName: 'total',
              title: 'Total:',
              onChange: updateState
            }),
            _react2.default.createElement('input', { type: 'submit', className: 'short-button', value: 'Update' })
          )
        );
      }
    }
  }]);

  return OrdersEdit;
}(_react.Component);

OrdersEdit.propTypes = {
  order: _propTypes2.default.object.isRequired, // mapStateToProps
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  getTailorList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersEdit);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvT3JkZXJzRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcz85OTFkKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtU2VsZWN0LmpzPzYzOGYqKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0NoZWNrYm94LmpzPzg3NjQqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlckZvcm1zL1NlbGVjdFRhaWxvci5qcz9hNDFiKiJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJvcmRlciIsInN0b3JlIiwiY3VycmVudE9yZGVyIiwiY3VycmVudFN0b3JlIiwidGFpbG9ycyIsInRhaWxvckxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJnZXRUYWlsb3JMaXN0IiwiZ2V0Q3VycmVudE9yZGVyIiwidXBkYXRlT3JkZXIiLCJzZXRMb2FkZXIiLCJyZW1vdmVMb2FkZXIiLCJzZXRHcm93bGVyIiwiZGlzcGF0Y2giLCJPcmRlcnNFZGl0IiwicHJvcHMiLCJ1cGRhdGVTdGF0ZSIsImZpZWxkIiwidmFsdWUiLCJzZXRTdGF0ZSIsInN0YXRlIiwib3JkZXJJZCIsIm1hdGNoIiwicGFyYW1zIiwib3JkZXJfaWQiLCJzdG9yZUlkIiwiaWQiLCJ0aGVuIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2luZCIsIm1lc3NhZ2UiLCJzdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJoZWFkZXJUZXh0IiwiZnVsZmlsbGVkIiwiYXJyaXZlZCIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwidG90YWwiLCJ3ZWlnaHQiLCJ0YWlsb3JJZCIsInByb3ZpZGVyX2lkIiwiYmFja0xpbmsiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiQ2FydFJpYmJvbiIsInJvdGF0ZSIsInVzZXJSb2xlcyIsImluY2x1ZGVMaW5rIiwibGluayIsIm9uQ2xpY2siLCJsZW5ndGgiLCJyZXNldENhcnQiLCJhZG1pbiIsInJldGFpbGVyIiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJjdXJyZW50VXNlciIsIkZvcm1GaWVsZCIsInRpdGxlIiwiZmllbGROYW1lIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaW5wdXRUeXBlIiwidGFyZ2V0IiwiYWRkUGxlYXNlU2VsZWN0IiwibmFtZSIsImNvbmNhdCIsIm9wdGlvbnMiLCJGb3JtU2VsZWN0Iiwic2VsZWN0T3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiU2VsZWN0VGFpbG9yIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFTO0FBQy9CLFNBQU87QUFDTEMsV0FBT0MsTUFBTUMsWUFEUjtBQUVMRCxXQUFPQSxNQUFNRSxZQUZSO0FBR0xDLGFBQVNILE1BQU1JO0FBSFYsR0FBUDtBQUtELENBTkQ7O0FBUUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsV0FBWTtBQUNyQyxTQUFPLCtCQUNMO0FBQ0VDLHlDQURGO0FBRUVDLDZDQUZGO0FBR0VDLHFDQUhGO0FBSUVDLGlDQUpGO0FBS0VDLHVDQUxGO0FBTUVDO0FBTkYsR0FESyxFQVNMQyxRQVRL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O0FBQUtrQztBQUFMLFNBREY7QUFFRTtBQUNFLGlCQUFPVSxRQURUO0FBRUUsbUJBQVM1QyxPQUZYO0FBR0UscUJBQVcsYUFIYjtBQUlFLGlCQUFPa0UsS0FKVDtBQUtFLG9CQUFVRTtBQUxaO0FBRkYsT0FERjtBQVlEOzs7Ozs7QUF2Q0dtQixZLENBQ0d4QyxTLEdBQVk7QUFDakIvQyxXQUFTLG9CQUFVa0QsS0FBVixDQUFnQkQsVUFEUixFQUNvQjtBQUNyQzlDLGlCQUFlLG9CQUFVZ0QsSUFBVixDQUFlRixVQUZiLEVBRXlCO0FBQzFDbUIsWUFBVSxvQkFBVWpCLElBQVYsQ0FBZUYsVUFIUixFQUdvQjtBQUNyQ0osZUFBYSxvQkFBVTJDLE1BSk4sQ0FJYztBQUpkLEM7a0JBeUNOLHlCQUFRN0YsZUFBUixFQUF5Qk8sa0JBQXpCLEVBQTZDcUYsWUFBN0MsQyIsImZpbGUiOiIxMS4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vRm9ybVNlbGVjdCc7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4uL0Zvcm1GaWVsZCc7XG5pbXBvcnQge1xuICBnZXRDdXJyZW50T3JkZXIsXG4gIHVwZGF0ZU9yZGVyLFxuICBnZXRUYWlsb3JMaXN0LFxuICBzZXRMb2FkZXIsXG4gIHJlbW92ZUxvYWRlcixcbiAgc2V0R3Jvd2xlcixcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBTZWxlY3RUYWlsb3IgZnJvbSAnLi9vcmRlckZvcm1zL1NlbGVjdFRhaWxvcic7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9DaGVja2JveCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvcmRlcjogc3RvcmUuY3VycmVudE9yZGVyLFxuICAgIHN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgdGFpbG9yczogc3RvcmUudGFpbG9yTGlzdCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICBnZXRUYWlsb3JMaXN0LFxuICAgICAgZ2V0Q3VycmVudE9yZGVyLFxuICAgICAgdXBkYXRlT3JkZXIsXG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5cbmNsYXNzIE9yZGVyc0VkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9yZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHRhaWxvcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRUYWlsb3JMaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBnZXRDdXJyZW50T3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZU9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHByb3BzLm9yZGVyO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNFbXB0eShvcmRlcikpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWF0Y2g6IHsgcGFyYW1zOiB7IG9yZGVyX2lkOiBvcmRlcklkIH0gfSxcbiAgICAgICAgc3RvcmU6IHsgaWQ6IHN0b3JlSWQgfSxcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnByb3BzLnNldExvYWRlcigpO1xuICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAuZ2V0Q3VycmVudE9yZGVyKHN0b3JlSWQsIG9yZGVySWQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxvYWRlcigpO1xuXG4gICAgICAgICAgY29uc3QgeyBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG9yZGVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0ZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wc1xuICAgICAgLnVwZGF0ZU9yZGVyKHsgb3JkZXI6IHRoaXMuc3RhdGUgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7IGtpbmQ6ICdzdWNjZXNzJywgbWVzc2FnZTogJ09yZGVyIHVwZGF0ZWQhJyB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnJyJywgZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGUgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSk7XG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlO1xuXG4gICAgbGV0IGhlYWRlclRleHQgPSBgT3JkZXJzIC8gRWRpdGA7XG4gICAgaWYgKGlzRW1wdHkob3JkZXIpKSB7XG4gICAgICByZXR1cm4gPFNlY3Rpb25IZWFkZXIgdGV4dD17aGVhZGVyVGV4dH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGZ1bGZpbGxlZCxcbiAgICAgICAgYXJyaXZlZCxcbiAgICAgICAgY3VzdG9tZXI6IHsgZmlyc3RfbmFtZTogZmlyc3ROYW1lLCBsYXN0X25hbWU6IGxhc3ROYW1lIH0sXG4gICAgICAgIHRvdGFsLFxuICAgICAgICB3ZWlnaHQsXG4gICAgICAgIHByb3ZpZGVyX2lkOiB0YWlsb3JJZCxcbiAgICAgIH0gPSBvcmRlcjtcblxuICAgICAgaGVhZGVyVGV4dCA9IGBPcmRlcnMgLyBFZGl0IC8gJHtpZH1gO1xuICAgICAgY29uc3QgYmFja0xpbmsgPSBgL29yZGVycy8ke3RoaXMuc3RhdGUuaWR9YDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXtoZWFkZXJUZXh0fSAvPlxuICAgICAgICAgIDxMaW5rIHRvPXtiYWNrTGlua30+QmFjazwvTGluaz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsnZmlyc3RfbmFtZSd9XG4gICAgICAgICAgICAgIHRpdGxlPXsnRmlyc3QgTmFtZTonfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsnbGFzdF9uYW1lJ31cbiAgICAgICAgICAgICAgdGl0bGU9eydMYXN0IE5hbWU6J31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2Fycml2ZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIHRleHQ9eydBcnJpdmVkPyd9XG4gICAgICAgICAgICAgIG5hbWU9eydhcnJpdmVkJ31cbiAgICAgICAgICAgICAgZmllbGROYW1lPVwiYXJyaXZlZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBjaGVja2VkPXtmdWxmaWxsZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIHRleHQ9eydGdWxmaWxsZWQ/J31cbiAgICAgICAgICAgICAgbmFtZT17J2Z1bGZpbGxlZCd9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT1cImZ1bGZpbGxlZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxuICAgICAgICAgICAgICBmaWVsZE5hbWU9eyd0b3RhbCd9XG4gICAgICAgICAgICAgIHRpdGxlPXsnVG90YWw6ICQnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU3RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt3ZWlnaHR9XG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17J3dlaWdodCd9XG4gICAgICAgICAgICAgIHRpdGxlPXsnV2VpZ2h0IChncmFtcyk6J31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVN0YXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFNlbGVjdFRhaWxvciB0YWlsb3JJZD17dGFpbG9ySWR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXRlfSAvPlxuXG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cbiAgICAgICAgICAgICAgZmllbGROYW1lPXsndG90YWwnfVxuICAgICAgICAgICAgICB0aXRsZT17J1RvdGFsOid9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCIgdmFsdWU9XCJVcGRhdGVcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmRlcnNFZGl0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9PcmRlcnNFZGl0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvcm1GaWVsZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgdmFsdWUsIGZpZWxkTmFtZSwgb25DaGFuZ2UsIGNsYXNzTmFtZSwgdHlwZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGlucHV0VHlwZSA9IHR5cGUgPyB0eXBlIDogJ3RleHQnO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17aW5wdXRUeXBlfVxuICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHNpemU9XCI1MFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFkZFBsZWFzZVNlbGVjdCA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gW3sgaWQ6ICcnLCBuYW1lOiAnUGxlYXNlIFNlbGVjdCcgfV0uY29uY2F0KG9wdGlvbnMpO1xufTtcblxuY29uc3QgRm9ybVNlbGVjdCA9IHByb3BzID0+IHtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IGFkZFBsZWFzZVNlbGVjdChwcm9wcy5vcHRpb25zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gcHJvcHMub25DaGFuZ2UocHJvcHMuZmllbGROYW1lLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJPcHRpb25zKHNlbGVjdE9wdGlvbnMpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLmlkfT5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VsZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybVNlbGVjdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoZWNrYm94ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkLCBmaWVsZE5hbWUsIHRleHQsIG5hbWUsIGxhYmVsQ2xhc3MgfSA9IHByb3BzO1xuICBpZiAoIWZpZWxkTmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPXtgJHtuYW1lfS1jaGVja2B9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtgJHtuYW1lfS1jaGVja2B9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2hlY2tib3gtbGFiZWwgJHtsYWJlbENsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBpZD17YCR7bmFtZX0tY2hlY2tgfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoZmllbGROYW1lLCAhY2hlY2tlZCl9XG4gICAgICAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj17YCR7bmFtZX0tY2hlY2tgfSBjbGFzc05hbWU9XCJjaGVja2JveC1sYWJlbFwiPlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0NoZWNrYm94LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRUYWlsb3JMaXN0IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0Zvcm1TZWxlY3QnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFpbG9yczogc3RvcmUudGFpbG9yTGlzdCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGdldFRhaWxvckxpc3QgfSwgZGlzcGF0Y2gpO1xufTtcblxuY2xhc3MgU2VsZWN0VGFpbG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0YWlsb3JzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgZ2V0VGFpbG9yTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICAgIHByb3ZpZGVyX2lkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXJlbnRDb21wb25lbnRcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFRhaWxvckxpc3QoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFpbG9ycyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdGFpbG9ySWQsXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBmaWVsZE5hbWUgPSAncHJvdmlkZXJfaWQnLFxuICAgICAgdGl0bGUgPSAnVGFpbG9yIFNob3A6JyxcbiAgICAgIGhlYWRlclRleHQgPSAnU2VsZWN0IFRhaWxvcicsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNFbXB0eSh0YWlsb3JzKSkge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnU2VsZWN0VGFpbG9yJ30+XG4gICAgICAgIDxoMz57aGVhZGVyVGV4dH08L2gzPlxuICAgICAgICA8Rm9ybVNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0YWlsb3JJZH1cbiAgICAgICAgICBvcHRpb25zPXt0YWlsb3JzfVxuICAgICAgICAgIGZpZWxkTmFtZT17J3Byb3ZpZGVyX2lkJ31cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWxlY3RUYWlsb3IpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL29yZGVyRm9ybXMvU2VsZWN0VGFpbG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==