webpackHotUpdate(0,{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(6), ReactMount = __webpack_require__(4), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(11);\n\nvar _redux = __webpack_require__(12);\n\nvar _moment = __webpack_require__(1);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _actions = __webpack_require__(13);\n\nvar _alterationsLists = __webpack_require__(249);\n\nvar _shippingFunctions = __webpack_require__(248);\n\nvar _OrderComplete = __webpack_require__(84);\n\nvar _OrderComplete2 = _interopRequireDefault(_OrderComplete);\n\nvar _SetFulfilled = __webpack_require__(456);\n\nvar _SelectTailor = __webpack_require__(247);\n\nvar _SelectTailor2 = _interopRequireDefault(_SelectTailor);\n\nvar _UpdateNotes = __webpack_require__(457);\n\nvar _UpdateNotes2 = _interopRequireDefault(_UpdateNotes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NewOrderDetail = function (_Component) {\n  _inherits(NewOrderDetail, _Component);\n\n  function NewOrderDetail(props) {\n    _classCallCheck(this, NewOrderDetail);\n\n    var _this = _possibleConstructorReturn(this, (NewOrderDetail.__proto__ || Object.getPrototypeOf(NewOrderDetail)).call(this));\n\n    _this.state = props.order;\n    _this.updateState = _this.updateState.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.setFulfilled = _this.setFulfilled.bind(_this);\n    _this.updateOrderNotes = _this.updateOrderNotes.bind(_this);\n    return _this;\n  }\n\n  _createClass(NewOrderDetail, [{\n    key: 'refreshNewOrdersList',\n    value: function refreshNewOrdersList(props) {\n      this.props.getNewOrders()\n      // .then(res => console.log(res))\n      .catch(function (err) {\n        return console.log('error', err);\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.refreshNewOrdersList(this.props);\n    }\n  }, {\n    key: 'resetState',\n    value: function resetState(props) {\n      this.setState(props.order);\n    }\n  }, {\n    key: 'updateOrderFromProps',\n    value: function updateOrderFromProps() {\n      var order = this.props.order;\n      this.setState({ order: order });\n    }\n  }, {\n    key: 'updateState',\n    value: function updateState(field, value) {\n      this.setState(_defineProperty({}, field, value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit() {\n      var _this2 = this;\n\n      var obj = this.state;\n      obj.id = this.props.order.id;\n      this.props.updateOrder({ order: obj }).then(function (res) {\n        return _this2.refreshNewOrdersList({ order: {} });\n      }).catch(function (err) {\n        return console.log('errr', err);\n      });\n    }\n  }, {\n    key: 'updateOrderNotes',\n    value: function updateOrderNotes(notes, order) {\n      order.requester_notes = notes;\n      this.props.updateOrder({ order: order })\n      // .then(res => console.log('res', res))\n      .catch(function (err) {\n        return console.log('err', err);\n      });\n    }\n  }, {\n    key: 'makeShippingLabel',\n    value: function makeShippingLabel(type, order) {\n      var _this3 = this;\n\n      var data = { shipment: { type: type, order_id: order.id } };\n      (0, _actions.createShipment)(data).then(function (res) {\n        var order = res.data.body;\n        _this3.props.updateOrder({ order: order }).then(function (res) {\n          return _this3.props.selectOrder(order);\n        }).catch(function (err) {\n          return console.log('err', err);\n        });\n      }).catch(function (err) {\n        return console.log('err', err);\n      });\n    }\n  }, {\n    key: 'renderPrintLabels',\n    value: function renderPrintLabels(order) {\n      var _this4 = this;\n\n      // const { currentUser, currentOrder } = this.props;\n      // const role = currentUser.user.roles[0].name;\n      var role = 'admin';\n      var shippingType = (0, _shippingFunctions.getShippingType)(role, order.type);\n      var printPrompt = (0, _shippingFunctions.getPrintButtonPrompt)(shippingType, order);\n\n      //console.log('print prompt', order.fulfilled, order, printPrompt)\n      if (printPrompt.split(' ')[0] === \"Print\") {\n        var url = order[(0, _shippingFunctions.toSnakeCaseFromCamelCase)((0, _shippingFunctions.lowerCaseFirstLetter)(shippingType))].shipping_label;\n\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { className: 'pink-button', onClick: function onClick() {\n                return window.print();\n              } },\n            printPrompt\n          ),\n          _react2.default.createElement(_OrderComplete2.default, { currentOrder: order, shippingType: shippingType })\n        );\n      } else if (printPrompt.split(' ')[0] === 'Create') {\n        return _react2.default.createElement(\n          'button',\n          { className: 'pink-button', onClick: function onClick() {\n              return _this4.makeShippingLabel(shippingType, order);\n            } },\n          printPrompt\n        );\n      }\n    }\n  }, {\n    key: 'setFulfilled',\n    value: function setFulfilled(order) {\n      order.fulfilled = true;\n      this.props.updateOrder({ order: order })\n      //.then(res => console.log('res',this.props))\n      .catch(function (err) {\n        return console.log('errr', err);\n      });\n    }\n  }, {\n    key: 'welcomeKit',\n    value: function welcomeKit(order) {\n      if (!order.fulfilled) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          this.renderPrintLabels(order),\n          _react2.default.createElement(_SetFulfilled.SetFulfilledButton, { order: order, onClick: this.setFulfilled })\n        );\n      } else {\n        return _react2.default.createElement(\n          'div',\n          null,\n          this.renderPrintLabels(order),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'button',\n              { className: 'pink-button', disabled: true },\n              'Order Completed \\u2714\\uFE0F'\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var order = this.props.order;\n\n      console.log('order render', order.fulfilled);\n      if (order.customer) {\n        var id = order.id,\n            weight = order.weight,\n            created_at = order.created_at,\n            total = order.total,\n            provider_notes = order.provider_notes,\n            items = order.items;\n\n        var orderDate = (0, _moment2.default)(created_at).format('MM-DD-YYYY');\n        var selectTailor = _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'p',\n            null,\n            'Alterations:'\n          ),\n          (0, _alterationsLists.renderAlterationList)(order.items, 'new-order-detail'),\n          _react2.default.createElement(_SelectTailor2.default, { onChange: this.updateState, provider_id: order.provider_id }),\n          _react2.default.createElement(\n            'button',\n            { className: 'button short-button', onClick: this.handleSubmit },\n            'Change Tailor'\n          )\n        );\n        // const printLabelButton = (\n        //   <button className='pink-button'>Print Shipping Label</button>\n        // );\n        var display = order.type === 'TailorOrder' ? selectTailor : this.welcomeKit(order);\n        console.log('detail', this.props.order.provider_notes);\n        return _react2.default.createElement(\n          'div',\n          { className: 'order-details' },\n          _react2.default.createElement(\n            'h3',\n            null,\n            'Order Details:'\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Order ID: ',\n            id\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Order Weight: ',\n            weight\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Order Date: ',\n            orderDate\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Total Charges: $',\n            total\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Order Notes: ',\n            provider_notes\n          ),\n          _react2.default.createElement(_UpdateNotes2.default, {\n            notes: provider_notes,\n            order: order,\n            role: this.props.currentUser.user.roles[0].name,\n            submitNotes: this.updateOrderNotes }),\n          display\n        );\n      } else {\n        return _react2.default.createElement('div', null);\n      }\n    }\n  }]);\n\n  return NewOrderDetail;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(store) {\n  return {\n    tailors: store.tailorList,\n    currentUser: store.currentUser\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ updateOrder: _actions.updateOrder }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderDetail);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(7); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"NewOrderDetail.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9OZXdPcmRlckRldGFpbC5qcz8xMTI3Il0sIm5hbWVzIjpbIk5ld09yZGVyRGV0YWlsIiwicHJvcHMiLCJzdGF0ZSIsIm9yZGVyIiwidXBkYXRlU3RhdGUiLCJiaW5kIiwiaGFuZGxlU3VibWl0Iiwic2V0RnVsZmlsbGVkIiwidXBkYXRlT3JkZXJOb3RlcyIsImdldE5ld09yZGVycyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlZnJlc2hOZXdPcmRlcnNMaXN0Iiwic2V0U3RhdGUiLCJmaWVsZCIsInZhbHVlIiwib2JqIiwiaWQiLCJ1cGRhdGVPcmRlciIsInRoZW4iLCJub3RlcyIsInJlcXVlc3Rlcl9ub3RlcyIsInR5cGUiLCJkYXRhIiwic2hpcG1lbnQiLCJvcmRlcl9pZCIsInJlcyIsImJvZHkiLCJzZWxlY3RPcmRlciIsInJvbGUiLCJzaGlwcGluZ1R5cGUiLCJwcmludFByb21wdCIsInNwbGl0IiwidXJsIiwic2hpcHBpbmdfbGFiZWwiLCJ3aW5kb3ciLCJwcmludCIsIm1ha2VTaGlwcGluZ0xhYmVsIiwiZnVsZmlsbGVkIiwicmVuZGVyUHJpbnRMYWJlbHMiLCJjdXN0b21lciIsIndlaWdodCIsImNyZWF0ZWRfYXQiLCJ0b3RhbCIsInByb3ZpZGVyX25vdGVzIiwiaXRlbXMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJzZWxlY3RUYWlsb3IiLCJwcm92aWRlcl9pZCIsImRpc3BsYXkiLCJ3ZWxjb21lS2l0IiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicm9sZXMiLCJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJ0YWlsb3JzIiwidGFpbG9yTGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQVNBOzs7O0FBQ0E7O0FB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Q0FBRCxFQUFuQixFQUFrQzJDLFFBQWxDLENBQVA7QUFDRCxDQUZEOztrQkFJZSx5QkFBUUwsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDOUQsY0FBN0MsQyIsImZpbGUiOiI0NDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7dXBkYXRlT3JkZXIsIGNyZWF0ZVNoaXBtZW50fSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7cmVuZGVyQWx0ZXJhdGlvbkxpc3R9IGZyb20gJy4uLy4uL3V0aWxzL2FsdGVyYXRpb25zTGlzdHMnO1xuXG5pbXBvcnQge1xuICBnZXRTaGlwcGluZ1R5cGUsXG4gIGdldFByaW50QnV0dG9uUHJvbXB0LFxuICBsb3dlckNhc2VGaXJzdExldHRlcixcbiAgdG9TbmFrZUNhc2VGcm9tQ2FtZWxDYXNlLFxuICBtYWtlU2hpcHBpbmdMYWJlbCxcbiAgLy9yZW5kZXJQcmludExhYmVsc1xufSBmcm9tICcuLi9zaGlwcGluZy9zaGlwcGluZ0Z1bmN0aW9ucyc7XG5cbmltcG9ydCBPcmRlckNvbXBsZXRlIGZyb20gJy4uL3ByaW50cy9PcmRlckNvbXBsZXRlLmpzJztcbmltcG9ydCB7U2V0RnVsZmlsbGVkQnV0dG9ufSBmcm9tICcuLi9vcmRlcnMvb3JkZXJGb3Jtcy9TZXRGdWxmaWxsZWQnO1xuaW1wb3J0IFNlbGVjdFRhaWxvciBmcm9tICcuLi9vcmRlcnMvb3JkZXJGb3Jtcy9TZWxlY3RUYWlsb3InO1xuaW1wb3J0IFVwZGF0ZU5vdGVzIGZyb20gJy4uL29yZGVycy9vcmRlckZvcm1zL1VwZGF0ZU5vdGVzJztcblxuY2xhc3MgTmV3T3JkZXJEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSBwcm9wcy5vcmRlclxuICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RnVsZmlsbGVkID0gdGhpcy5zZXRGdWxmaWxsZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZU9yZGVyTm90ZXMgPSB0aGlzLnVwZGF0ZU9yZGVyTm90ZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlZnJlc2hOZXdPcmRlcnNMaXN0KHByb3BzKXtcbiAgICB0aGlzLnByb3BzLmdldE5ld09yZGVycygpXG4gICAgICAvLyAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5yZWZyZXNoTmV3T3JkZXJzTGlzdCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUocHJvcHMpe1xuICAgIHRoaXMuc2V0U3RhdGUocHJvcHMub3JkZXIpXG4gIH1cblxuICB1cGRhdGVPcmRlckZyb21Qcm9wcygpe1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5wcm9wcy5vcmRlcjtcbiAgICB0aGlzLnNldFN0YXRlKHtvcmRlcn0pXG4gIH1cblxuICB1cGRhdGVTdGF0ZShmaWVsZCwgdmFsdWUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1tmaWVsZF06IHZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKXtcbiAgICBsZXQgb2JqID0gdGhpcy5zdGF0ZTtcbiAgICBvYmouaWQgPSB0aGlzLnByb3BzLm9yZGVyLmlkXG4gICAgdGhpcy5wcm9wcy51cGRhdGVPcmRlcih7b3JkZXI6IG9ian0pXG4gICAgICAudGhlbihyZXMgPT4gdGhpcy5yZWZyZXNoTmV3T3JkZXJzTGlzdCh7b3JkZXI6IHt9fSkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnJyJywgZXJyKSk7XG4gIH1cblxuICB1cGRhdGVPcmRlck5vdGVzKG5vdGVzLCBvcmRlcil7XG4gICAgb3JkZXIucmVxdWVzdGVyX25vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVPcmRlcih7b3JkZXJ9KVxuICAgICAgLy8gLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdyZXMnLCByZXMpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gIH1cblxuICBtYWtlU2hpcHBpbmdMYWJlbCh0eXBlLCBvcmRlcil7XG4gICAgY29uc3QgZGF0YSA9IHsgc2hpcG1lbnQ6IHsgdHlwZSwgb3JkZXJfaWQ6IG9yZGVyLmlkIH19O1xuICAgIGNyZWF0ZVNoaXBtZW50KGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCBvcmRlciA9IHJlcy5kYXRhLmJvZHk7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlT3JkZXIoe29yZGVyfSlcbiAgICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5wcm9wcy5zZWxlY3RPcmRlcihvcmRlcikpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpKTtcbiAgfVxuXG4gIHJlbmRlclByaW50TGFiZWxzKG9yZGVyKXtcbiAgICAvLyBjb25zdCB7IGN1cnJlbnRVc2VyLCBjdXJyZW50T3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc3Qgcm9sZSA9IGN1cnJlbnRVc2VyLnVzZXIucm9sZXNbMF0ubmFtZTtcbiAgICBjb25zdCByb2xlID0gJ2FkbWluJztcbiAgICBjb25zdCBzaGlwcGluZ1R5cGUgPSBnZXRTaGlwcGluZ1R5cGUocm9sZSwgb3JkZXIudHlwZSk7XG4gICAgY29uc3QgcHJpbnRQcm9tcHQgPSBnZXRQcmludEJ1dHRvblByb21wdChzaGlwcGluZ1R5cGUsIG9yZGVyKTtcblxuICAgIC8vY29uc29sZS5sb2coJ3ByaW50IHByb21wdCcsIG9yZGVyLmZ1bGZpbGxlZCwgb3JkZXIsIHByaW50UHJvbXB0KVxuICAgIGlmIChwcmludFByb21wdC5zcGxpdCgnICcpWzBdID09PSBcIlByaW50XCIpe1xuICAgICAgY29uc3QgdXJsID0gb3JkZXJbdG9TbmFrZUNhc2VGcm9tQ2FtZWxDYXNlKGxvd2VyQ2FzZUZpcnN0TGV0dGVyKHNoaXBwaW5nVHlwZSkpXS5zaGlwcGluZ19sYWJlbDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGluay1idXR0b24nIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfT5cbiAgICAgICAgICAgIHtwcmludFByb21wdH1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxPcmRlckNvbXBsZXRlIGN1cnJlbnRPcmRlcj17b3JkZXJ9IHNoaXBwaW5nVHlwZT17c2hpcHBpbmdUeXBlfS8+XG4gICAgICAgICAgey8qIDxPcmRlckNvbXBsZXRlIG9yZGVyPXtjdXJyZW50T3JkZXJ9IHNoaXBwaW5nVHlwZT17c2hpcHBpbmdUeXBlfSAvPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmIChwcmludFByb21wdC5zcGxpdCgnICcpWzBdID09PSAnQ3JlYXRlJyl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGluay1idXR0b24nIG9uQ2xpY2s9eygpID0+IHRoaXMubWFrZVNoaXBwaW5nTGFiZWwoc2hpcHBpbmdUeXBlLCBvcmRlcil9PlxuICAgICAgICAgIHtwcmludFByb21wdH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldEZ1bGZpbGxlZChvcmRlcil7XG4gICAgb3JkZXIuZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZU9yZGVyKHsgb3JkZXIgfSlcbiAgICAgIC8vLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdyZXMnLHRoaXMucHJvcHMpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJycicsIGVycikpO1xuICB9XG5cbiAgd2VsY29tZUtpdChvcmRlcil7XG4gICAgaWYgKCFvcmRlci5mdWxmaWxsZWQpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJQcmludExhYmVscyhvcmRlcil9XG4gICAgICAgICAgPFNldEZ1bGZpbGxlZEJ1dHRvbiBvcmRlcj17b3JkZXJ9IG9uQ2xpY2s9e3RoaXMuc2V0RnVsZmlsbGVkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucmVuZGVyUHJpbnRMYWJlbHMob3JkZXIpfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGluay1idXR0b24nIGRpc2FibGVkPXt0cnVlfT5cbiAgICAgICAgICAgICAgT3JkZXIgQ29tcGxldGVkIOKclO+4j1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtvcmRlcn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKCdvcmRlciByZW5kZXInLCBvcmRlci5mdWxmaWxsZWQpXG4gICAgaWYgKG9yZGVyLmN1c3RvbWVyKXtcbiAgICAgIGNvbnN0IHtpZCwgd2VpZ2h0LCBjcmVhdGVkX2F0LCB0b3RhbCwgcHJvdmlkZXJfbm90ZXMsIGl0ZW1zfSA9IG9yZGVyO1xuICAgICAgY29uc3Qgb3JkZXJEYXRlID0gbW9tZW50KGNyZWF0ZWRfYXQpLmZvcm1hdCgnTU0tREQtWVlZWScpO1xuICAgICAgY29uc3Qgc2VsZWN0VGFpbG9yID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPkFsdGVyYXRpb25zOjwvcD5cbiAgICAgICAgICB7cmVuZGVyQWx0ZXJhdGlvbkxpc3Qob3JkZXIuaXRlbXMsICduZXctb3JkZXItZGV0YWlsJyl9XG4gICAgICAgICAgPFNlbGVjdFRhaWxvciBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX0gcHJvdmlkZXJfaWQ9e29yZGVyLnByb3ZpZGVyX2lkfSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gc2hvcnQtYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+Q2hhbmdlIFRhaWxvcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICAvLyBjb25zdCBwcmludExhYmVsQnV0dG9uID0gKFxuICAgICAgLy8gICA8YnV0dG9uIGNsYXNzTmFtZT0ncGluay1idXR0b24nPlByaW50IFNoaXBwaW5nIExhYmVsPC9idXR0b24+XG4gICAgICAvLyApO1xuICAgICAgY29uc3QgZGlzcGxheSA9IG9yZGVyLnR5cGUgPT09ICdUYWlsb3JPcmRlcicgPyBzZWxlY3RUYWlsb3IgOiB0aGlzLndlbGNvbWVLaXQob3JkZXIpO1xuICAgICAgY29uc29sZS5sb2coJ2RldGFpbCcsIHRoaXMucHJvcHMub3JkZXIucHJvdmlkZXJfbm90ZXMpXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcmRlci1kZXRhaWxzJz5cbiAgICAgICAgICAgIDxoMz5PcmRlciBEZXRhaWxzOjwvaDM+XG4gICAgICAgICAgICA8cD5PcmRlciBJRDoge2lkfTwvcD5cbiAgICAgICAgICAgIDxwPk9yZGVyIFdlaWdodDoge3dlaWdodH08L3A+XG4gICAgICAgICAgICA8cD5PcmRlciBEYXRlOiB7b3JkZXJEYXRlfTwvcD5cbiAgICAgICAgICAgIDxwPlRvdGFsIENoYXJnZXM6ICR7dG90YWx9PC9wPlxuICAgICAgICAgICAgPHA+T3JkZXIgTm90ZXM6IHtwcm92aWRlcl9ub3Rlc308L3A+XG4gICAgICAgICAgICA8VXBkYXRlTm90ZXNcbiAgICAgICAgICAgICAgbm90ZXM9e3Byb3ZpZGVyX25vdGVzfVxuICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgIHJvbGU9e3RoaXMucHJvcHMuY3VycmVudFVzZXIudXNlci5yb2xlc1swXS5uYW1lfVxuICAgICAgICAgICAgICBzdWJtaXROb3Rlcz17dGhpcy51cGRhdGVPcmRlck5vdGVzfSAvPlxuXG4gICAgICAgICAgICB7IGRpc3BsYXl9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWlsb3JzOiBzdG9yZS50YWlsb3JMaXN0LFxuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt1cGRhdGVPcmRlcn0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmV3T3JkZXJEZXRhaWwpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9OZXdPcmRlckRldGFpbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})