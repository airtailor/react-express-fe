webpackJsonp([18],{

/***/ 687:
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

var _actions = __webpack_require__(34);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _FormField = __webpack_require__(707);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var CompaniesNew = function (_Component) {
  _inherits(CompaniesNew, _Component);

  function CompaniesNew(props) {
    _classCallCheck(this, CompaniesNew);

    var _this = _possibleConstructorReturn(this, (CompaniesNew.__proto__ || Object.getPrototypeOf(CompaniesNew)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.setLoader();
      var company = _this.state;
      (0, _actions.createCompany)({ company: company }).then(function (res) {
        _this.props.removeLoader();

        var errors = res.data.body.errors;
        if ((0, _isEmpty2.default)(errors)) {
          _this.setState({ name: '' });
          _this.props.setGrowler({
            kind: 'success',
            message: 'Company created!'
          });
        } else {
          _this.props.setGrowler({
            kind: 'warning',
            message: errors.message
          });
        }
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(CompaniesNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          hq_store_id = _state.hq_store_id;

      var headerText = 'Companies / New';
      var submit = function submit(e) {
        return _this2.handleSubmit(e);
      };
      var setField = this.updateState;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText, includeLink: false }),
        _react2.default.createElement(
          'form',
          { onSubmit: submit },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            fieldName: 'name',
            title: 'Name: ',
            onChange: setField
          }),
          _react2.default.createElement('input', {
            type: 'submit',
            className: 'standard-button',
            value: 'Create New Company'
          })
        )
      );
    }
  }]);

  return CompaniesNew;
}(_react.Component);

CompaniesNew.propTypes = {
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CompaniesNew);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9jb21wYW5pZXMvQ29tcGFuaWVzTmV3LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1GaWVsZC5qcz85OTFkKioqKioiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic2V0TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwic2V0R3Jvd2xlciIsImRpc3BhdGNoIiwiQ29tcGFuaWVzTmV3IiwicHJvcHMiLCJ1cGRhdGVTdGF0ZSIsImZpZWxkIiwidmFsdWUiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBhbnkiLCJzdGF0ZSIsInRoZW4iLCJlcnJvcnMiLCJyZXMiLCJkYXRhIiwiYm9keSIsIm5hbWUiLCJraW5kIiwibWVzc2FnZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsImhxX3N0b3JlX2lkIiwiaGVhZGVyVGV4dCIsInN1Ym1pdCIsInNldEZpZWxkIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwidXNlclJvbGVzIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwib25DbGljayIsImxlbmd0aCIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJGb3JtRmllbGQiLCJ0aXRsZSIsImZpZWxkTmFtZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwidHlwZSIsImlucHV0VHlwZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU1B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TEQ7O0FBT0EsSUFBTXJDLHFCQUFxQixTQUFyQkEsa0JBQXFCLFdBQVk7QUFDckMsU0FBTywrQkFDTDtBQUNFMEM7QUFERixHQURLLEVBSUx0QyxRQUpLLENBQVA7QUFNRCxDQVBEO2tCQVFlLHlCQUFRTCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkM2QyxhQUE3QyxDOzs7Ozs7Ozs7Ozs7OztBQ3REZjs7Ozs7O0FBRUEsSUFBTUksWUFBWSxTQUFaQSxTQUFZLFFBQVM7QUFBQSxNQUNqQkMsS0FEaUIsR0FDc0M1QyxLQUR0QyxDQUNqQjRDLEtBRGlCO0FBQUEsTUFDVnpDLEtBRFUsR0FDc0NILEtBRHRDLENBQ1ZHLEtBRFU7QUFBQSxNQUNIMEMsU0FERyxHQUNzQzdDLEtBRHRDLENBQ0g2QyxTQURHO0FBQUEsTUFDUUMsU0FEUixHQUNzQzlDLEtBRHRDLENBQ1E4QyxRQURSO0FBQUEsTUFDa0JDLFNBRGxCLEdBQ3NDL0MsS0FEdEMsQ0FDa0IrQyxTQURsQjtBQUFBLE1BQzZCQyxJQUQ3QixHQUNzQ2hELEtBRHRDLENBQzZCZ0QsSUFEN0I7O0FBRXpCLE1BQU1DLFlBQVlELE9BQU9BLElBQVAsR0FBYyxNQUFoQztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU8sV0FBVSxZQUFqQjtBQUErQko7QUFBL0IsS0FERjtBQUVFLDZDQUZGO0FBR0U7QUFDRSxZQUFNSyxTQURSO0FBRUUsaUNBQXlCRixTQUYzQjtBQUdFLFlBQUssSUFIUDtBQUlFLGFBQU81QyxLQUpUO0FBS0UsZ0JBQVU7QUFBQSxlQUFLMkMsVUFBU0QsU0FBVCxFQUFvQnZDLEVBQUU0QyxNQUFGLENBQVMvQyxLQUE3QixDQUFMO0FBQUE7QUFMWixNQUhGO0FBVUUsNkNBVkY7QUFXRTtBQVhGLEdBREY7QUFlRCxDQWxCRDs7a0JBb0Jld0MsUyIsImZpbGUiOiIxOC4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29tcGFueSxcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG4gIHNldEdyb3dsZXIsXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4uLy4uL0Zvcm1GaWVsZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHNldExvYWRlcixcbiAgICAgIHJlbW92ZUxvYWRlcixcbiAgICAgIHNldEdyb3dsZXIsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgQ29tcGFuaWVzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNldExvYWRlcigpO1xuICAgIGNvbnN0IGNvbXBhbnkgPSB0aGlzLnN0YXRlO1xuICAgIGNyZWF0ZUNvbXBhbnkoeyBjb21wYW55IH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUxvYWRlcigpO1xuXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHJlcy5kYXRhLmJvZHkuZXJyb3JzO1xuICAgICAgICBpZiAoaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6ICcnIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMuc2V0R3Jvd2xlcih7XG4gICAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ29tcGFueSBjcmVhdGVkIScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHtcbiAgICAgICAgICAgIGtpbmQ6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9ycy5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaHFfc3RvcmVfaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9ICdDb21wYW5pZXMgLyBOZXcnO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGUgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSk7XG4gICAgY29uc3Qgc2V0RmllbGQgPSB0aGlzLnVwZGF0ZVN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e2hlYWRlclRleHR9IGluY2x1ZGVMaW5rPXtmYWxzZX0gLz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBmaWVsZE5hbWU9eyduYW1lJ31cbiAgICAgICAgICAgIHRpdGxlPXsnTmFtZTogJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRGaWVsZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdGFuZGFyZC1idXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJDcmVhdGUgTmV3IENvbXBhbnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tcGFuaWVzTmV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FkbWluL2NvbXBhbmllcy9Db21wYW5pZXNOZXcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9ybUZpZWxkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCB2YWx1ZSwgZmllbGROYW1lLCBvbkNoYW5nZSwgY2xhc3NOYW1lLCB0eXBlIH0gPSBwcm9wcztcbiAgY29uc3QgaW5wdXRUeXBlID0gdHlwZSA/IHR5cGUgOiAndGV4dCc7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e3RpdGxlfTwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17YGZvcm0taW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgc2l6ZT1cIjUwXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShmaWVsZE5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybUZpZWxkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==