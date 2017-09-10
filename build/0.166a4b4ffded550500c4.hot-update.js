webpackHotUpdate(0,{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(6), ReactMount = __webpack_require__(4), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setNotesType = function setNotesType(role, order) {\n  console.log('setNotesType role order', role, order);\n  if (role === 'tailor') {\n    console.log('setNotesType tailor', order.provider_notes);\n    return order.provider_notes;\n  } else if (role === 'admin' || role === 'retailer') {\n    console.log('setNotesType admin', order.requester_notes);\n    return order.requester_notes || '';\n  }\n};\n\nvar UpdateNotesForm = function (_Component) {\n  _inherits(UpdateNotesForm, _Component);\n\n  function UpdateNotesForm(props) {\n    _classCallCheck(this, UpdateNotesForm);\n\n    var _this = _possibleConstructorReturn(this, (UpdateNotesForm.__proto__ || Object.getPrototypeOf(UpdateNotesForm)).call(this));\n\n    _this.state = {\n      displayNotes: true,\n      notes: props.notes\n    };\n    return _this;\n  }\n\n  _createClass(UpdateNotesForm, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(e, order) {\n      e.preventDefault();\n      var notes = e.target.children.notes.value;\n      this.props.submitNotes(notes, order);\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(value) {\n      this.setState({ notes: value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          order = _props.order,\n          submitNotes = _props.submitNotes,\n          role = _props.role;\n      var displayNotes = this.state.displayNotes;\n\n\n      if (displayNotes) {\n        return _react2.default.createElement(\n          'form',\n          { className: 'notes-form', onSubmit: function onSubmit(e) {\n              return _this2.handleSubmit(e, order);\n            } },\n          _react2.default.createElement('textarea', {\n            name: 'notes',\n            value: setNotesType(role, order),\n            onChange: function onChange(e) {\n              return _this2.handleChange(e.target.value);\n            },\n            cols: 43, rows: 10 }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Update Notes' }),\n          _react2.default.createElement('hr', null)\n        );\n      } else {\n        return _react2.default.createElement('div', null);\n      }\n    }\n  }]);\n\n  return UpdateNotesForm;\n}(_react.Component);\n\nexports.default = UpdateNotesForm;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(7); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"UpdateNotes.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJGb3Jtcy9VcGRhdGVOb3Rlcy5qcz8zODUzIl0sIm5hbWVzIjpbInNldE5vdGVzVHlwZSIsInJvbGUiLCJvcmRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlcl9ub3RlcyIsInJlcXVlc3Rlcl9ub3RlcyIsIlVwZGF0ZU5vdGVzRm9ybSIsInByb3BzIiwic3RhdGUiLCJkaXNwbGF5Tm90ZXMiLCJub3RlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoaWxkcmVuIiwidmFsdWUiLCJzdWJtaXROb3RlcyIsInNldFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDcENDLFVBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0gsSUFBdkMsRUFBNkNDLEtBQTdDO0FBQ0EsTUFBSUQsU0FBUyxRQUFiLEVBQXNCO0FBQ3BCRSxZQUFRQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLE1BQU1HLGNBQXpDO0FBQ0EsV0FBT0gsTUFBTUcsY0FBYjtBQUNELEdBSEQsTUFHTyxJQUFLSixTQUFTLE9BQVYsSUFBd0JBLFNBQVMsVUFBckMsRUFBaUQ7QUFDdERFLFlBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsTUFBTUksZUFBeEM7QUFDQSxXQUFPSixNQUFNSSxlQUFOLElBQXlCLEVBQWhDO0FBQ0Q7QUFDRixDQVREOztJQVdNQyxlOzs7QUFDSiwyQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUVoQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsSUFESDtBQUVYQyxhQUFPSCxNQUFNRztBQUZGLEtBQWI7QUFGZ0I7QUFNakI7Ozs7aUNBRVlDLEMsRUFBR1YsSyxFQUFNO0FBQ3BCVSxRQUFFQyxjQUFGO0FBQ0EsVUFBTUYsUUFBUUMsRUFBRUUsTUFBRixDQUFTQyxRQUFULENBQWtCSixLQUFsQixDQUF3QkssS0FBdEM7QUFDQSxXQUFLUixLQUFMLENBQVdTLFdBQVgsQ0FBdUJOLEtBQXZCLEVBQThCVCxLQUE5QjtBQUNEOzs7aUNBRVljLEssRUFBTTtBQUNqQixXQUFLRSxRQUFMLENBQWMsRUFBQ1AsT0FBTUssS0FBUCxFQUFkO0FBQ0Q7Ozs2QkFFTztBQUFBOztBQUFBLG1CQUM2QixLQUFLUixLQURsQztBQUFBLFVBQ0NOLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FlLFdBRFIsVUFDUUEsV0FEUjtBQUFBLFVBQ3FCaEIsSUFEckIsVUFDcUJBLElBRHJCO0FBQUEsVUFFQ1MsWUFGRCxHQUVpQixLQUFLRCxLQUZ0QixDQUVDQyxZQUZEOzs7QUFJTixVQUFJQSxZQUFKLEVBQWlCO0FBQ2YsZUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLFlBQWhCLEVBQTZCLFVBQVUsa0JBQUNFLENBQUQ7QUFBQSxxQkFBTyxPQUFLTyxZQUFMLENBQWtCUCxDQUFsQixFQUFxQlYsS0FBckIsQ0FBUDtBQUFBLGFBQXZDO0FBQ0U7QUFDRSxrQkFBSyxPQURQO0FBRUUsbUJBQU9GLGFBQWFDLElBQWIsRUFBbUJDLEtBQW5CLENBRlQ7QUFHRSxzQkFBVTtBQUFBLHFCQUFLLE9BQUtrQixZQUFMLENBQWtCUixFQUFFRSxNQUFGLENBQVNFLEtBQTNCLENBQUw7QUFBQSxhQUhaO0FBSUUsa0JBQU0sRUFKUixFQUlZLE1BQU0sRUFKbEIsR0FERjtBQVFFLG1EQVJGO0FBU0UsbURBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLFFBQXJDLEVBQThDLE9BQU0sY0FBcEQsR0FURjtBQVVFO0FBVkYsU0FERjtBQWNELE9BZkQsTUFlTztBQUNMLGVBQU8sMENBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBR1lULGUiLCJmaWxlIjoiNDU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc2V0Tm90ZXNUeXBlID0gKHJvbGUsIG9yZGVyKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzZXROb3Rlc1R5cGUgcm9sZSBvcmRlcicsIHJvbGUsIG9yZGVyKVxuICBpZiAocm9sZSA9PT0gJ3RhaWxvcicpe1xuICAgIGNvbnNvbGUubG9nKCdzZXROb3Rlc1R5cGUgdGFpbG9yJywgb3JkZXIucHJvdmlkZXJfbm90ZXMpXG4gICAgcmV0dXJuIG9yZGVyLnByb3ZpZGVyX25vdGVzO1xuICB9IGVsc2UgaWYgKChyb2xlID09PSAnYWRtaW4nICkgfHwgKHJvbGUgPT09ICdyZXRhaWxlcicpKXtcbiAgICBjb25zb2xlLmxvZygnc2V0Tm90ZXNUeXBlIGFkbWluJywgb3JkZXIucmVxdWVzdGVyX25vdGVzKVxuICAgIHJldHVybiBvcmRlci5yZXF1ZXN0ZXJfbm90ZXMgfHwgJyc7XG4gIH1cbn1cblxuY2xhc3MgVXBkYXRlTm90ZXNGb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheU5vdGVzOiB0cnVlLFxuICAgICAgbm90ZXM6IHByb3BzLm5vdGVzXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUsIG9yZGVyKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgbm90ZXMgPSBlLnRhcmdldC5jaGlsZHJlbi5ub3Rlcy52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnN1Ym1pdE5vdGVzKG5vdGVzLCBvcmRlcilcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm90ZXM6dmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtvcmRlciwgc3VibWl0Tm90ZXMsIHJvbGV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZGlzcGxheU5vdGVzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZGlzcGxheU5vdGVzKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbm90ZXMtZm9ybScgb25TdWJtaXQ9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlLCBvcmRlcil9PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZT0nbm90ZXMnXG4gICAgICAgICAgICB2YWx1ZT17c2V0Tm90ZXNUeXBlKHJvbGUsIG9yZGVyKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNvbHM9ezQzfSByb3dzPXsxMH0+XG5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Nob3J0LWJ1dHRvbicgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBkYXRlIE5vdGVzXCIgLz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZU5vdGVzRm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL29yZGVycy9vcmRlckZvcm1zL1VwZGF0ZU5vdGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})