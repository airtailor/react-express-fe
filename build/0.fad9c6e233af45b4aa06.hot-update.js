webpackHotUpdate(0,{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(6), ReactMount = __webpack_require__(4), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getPrintButtonPrompt = exports.getPrintButtonPrompt = function getPrintButtonPrompt(shippingType, order) {\n  var verb = labelExists(shippingType, order) ? 'Print' : 'Create';\n  return verb + ' Shipping Label';\n};\n\nvar getShippingType = exports.getShippingType = function getShippingType(role, orderType) {\n  // Tailors should only make outgoing shipments\n  // Admin should only make outgoing shipments\n  if (role === 'tailor') {\n    return 'OutgoingShipment';\n  } else if (role === 'admin') {\n    return 'OutgoingShipment';\n  } else if (role === 'sales_associate' && orderType !== 'WelcomeKit') {\n    return 'IncomingShipment';\n  } else if (orderType === 'WelcomeKit') {\n    return 'OutgoingShipment';\n  } else {\n    return 'IncomingShipment';\n    // if it gets here, we need to handle an error message\n    console.log('wtf fix this - ordersshow renderPrintLabels()');\n  }\n};\n\nvar toSnakeCaseFromCamelCase = exports.toSnakeCaseFromCamelCase = function toSnakeCaseFromCamelCase(string) {\n  return string.replace(/([A-Z])/g, function (letter) {\n    return '_' + letter.toLowerCase();\n  });\n};\n\nvar lowerCaseFirstLetter = exports.lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {\n  return string.charAt(0).toLowerCase() + string.slice(1);\n};\n\nvar labelExists = function labelExists(shippingType, order) {\n  var key = toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType));\n  debugger;\n  console.log('key', key, 'order[key]', order[key]);\n  if (order[key]) {\n    return order[key].shipping_label ? true : false;\n  }\n  return false;\n};\n\nvar makeShippingLabel = exports.makeShippingLabel = function makeShippingLabel(type) {\n  var data = { shipment: { type: type, order_id: undefined.props.currentOrder.id } };\n  createShipment(data).then(function (res) {\n    return undefined.refreshCurrentOrder();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar renderPrintLabels = exports.renderPrintLabels = function renderPrintLabels() {\n  var _props = undefined.props,\n      currentUser = _props.currentUser,\n      currentOrder = _props.currentOrder;\n\n  var role = currentUser.user.roles[0].name;\n  var shippingType = getShippingType(role, currentOrder.type);\n  debugger;\n  console.log('shippingType', shippingType, 'currentOrder', currentOrder);\n  var printPrompt = getPrintButtonPrompt(shippingType, currentOrder);\n\n  if (printPrompt.split(' ')[0] === \"Print\") {\n    var url = currentOrder[toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))].shipping_label;\n\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'button',\n        { className: 'pink-button', onClick: function onClick() {\n            return window.print();\n          } },\n        printPrompt\n      ),\n      React.createElement(OrderComplete, { shippingType: shippingType })\n    );\n  } else if (printPrompt.split(' ')[0] === 'Create') {\n    return React.createElement(\n      'button',\n      { className: 'pink-button', onClick: function onClick() {\n          return undefined.makeShippingLabel(shippingType);\n        } },\n      printPrompt\n    );\n  }\n};\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(7); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"shippingFunctions.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zaGlwcGluZy9zaGlwcGluZ0Z1bmN0aW9ucy5qcz9iNzMyIl0sIm5hbWVzIjpbImdldFByaW50QnV0dG9uUHJvbXB0Iiwic2hpcHBpbmdUeXBlIiwib3JkZXIiLCJ2ZXJiIiwibGFiZWxFeGlzdHMiLCJnZXRTaGlwcGluZ1R5cGUiLCJyb2xlIiwib3JkZXJUeXBlIiwiY29uc29sZSIsImxvZyIsInRvU25ha2VDYXNlRnJvbUNhbWVsQ2FzZSIsInN0cmluZyIsInJlcGxhY2UiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZUZpcnN0TGV0dGVyIiwiY2hhckF0Iiwic2xpY2UiLCJrZXkiLCJzaGlwcGluZ19sYWJlbCIsIm1ha2VTaGlwcGluZ0xhYmVsIiwidHlwZSIsImRhdGEiLCJzaGlwbWVudCIsIm9yZGVyX2lkIiwicHJvcHMiLCJjdXJyZW50T3JkZXIiLCJpZCIsImNyZWF0ZVNoaXBtZW50IiwidGhlbiIsInJlZnJlc2hDdXJyZW50T3JkZXIiLCJjYXRjaCIsImVyciIsInJlbmRlclByaW50TGFiZWxzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicm9sZXMiLCJuYW1lIiwicHJpbnRQcm9tcHQiLCJzcGxpdCIsInVybCIsIndpbmRvdyIsInByaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsWUFBRCxFQUFlQyxLQUFmLEVBQXdCO0FBQzFELE1BQU1DLE9BQU9DLFlBQVlILFlBQVosRUFBMEJDLEtBQTFCLElBQ1gsT0FEVyxHQUVYLFFBRkY7QUFHQSxTQUFVQyxJQUFWO0FBQ0QsQ0FMTTs7QUFPQSxJQUFNRSw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFvQjtBQUNqRDtBQUNBO0FBQ0EsTUFBSUQsU0FBUyxRQUFiLEVBQXNCO0FBQ3BCLFdBQU8sa0JBQVA7QUFDRCxHQUZELE1BRU8sSUFB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QUxGLEtBREY7QUFVRCxHQWJELE1BYU8sSUFBSXFDLFlBQVlDLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsUUFBbEMsRUFBMkM7QUFDaEQsV0FDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLGFBQWxCLEVBQWdDLFNBQVM7QUFBQSxpQkFBTSxVQUFLbkIsaUJBQUwsQ0FBdUJuQixZQUF2QixDQUFOO0FBQUEsU0FBekM7QUFDR3FDO0FBREgsS0FERjtBQUtEO0FBQ0YsQ0E3Qk0sQyIsImZpbGUiOiIyNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0UHJpbnRCdXR0b25Qcm9tcHQgPSAoc2hpcHBpbmdUeXBlLCBvcmRlcikgPT57XG4gIGNvbnN0IHZlcmIgPSBsYWJlbEV4aXN0cyhzaGlwcGluZ1R5cGUsIG9yZGVyKSA/XG4gICAgJ1ByaW50JyA6XG4gICAgJ0NyZWF0ZSc7XG4gIHJldHVybiBgJHt2ZXJifSBTaGlwcGluZyBMYWJlbGBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNoaXBwaW5nVHlwZSA9IChyb2xlLCBvcmRlclR5cGUpID0+e1xuICAvLyBUYWlsb3JzIHNob3VsZCBvbmx5IG1ha2Ugb3V0Z29pbmcgc2hpcG1lbnRzXG4gIC8vIEFkbWluIHNob3VsZCBvbmx5IG1ha2Ugb3V0Z29pbmcgc2hpcG1lbnRzXG4gIGlmIChyb2xlID09PSAndGFpbG9yJyl7XG4gICAgcmV0dXJuICdPdXRnb2luZ1NoaXBtZW50JztcbiAgfSBlbHNlIGlmIChyb2xlID09PSAnYWRtaW4nKXtcbiAgICAgIHJldHVybiAnT3V0Z29pbmdTaGlwbWVudCc7XG4gIH0gZWxzZSBpZiAocm9sZSA9PT0gJ3NhbGVzX2Fzc29jaWF0ZScgJiYgb3JkZXJUeXBlICE9PSAnV2VsY29tZUtpdCcpe1xuICAgIHJldHVybiAnSW5jb21pbmdTaGlwbWVudCc7XG4gIH0gZWxzZSBpZiAob3JkZXJUeXBlID09PSAnV2VsY29tZUtpdCcpe1xuICAgIHJldHVybiAnT3V0Z29pbmdTaGlwbWVudCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdJbmNvbWluZ1NoaXBtZW50JztcbiAgICAvLyBpZiBpdCBnZXRzIGhlcmUsIHdlIG5lZWQgdG8gaGFuZGxlIGFuIGVycm9yIG1lc3NhZ2VcbiAgICBjb25zb2xlLmxvZygnd3RmIGZpeCB0aGlzIC0gb3JkZXJzc2hvdyByZW5kZXJQcmludExhYmVscygpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvU25ha2VDYXNlRnJvbUNhbWVsQ2FzZSA9IChzdHJpbmcpID0+IHtcbiByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSkvZywgbGV0dGVyID0+IHtcbiAgIHJldHVybiBgXyR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YDtcbiB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvd2VyQ2FzZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5jb25zdCBsYWJlbEV4aXN0cyA9IChzaGlwcGluZ1R5cGUsIG9yZGVyKSA9PiB7XG4gIGNvbnN0IGtleSA9IHRvU25ha2VDYXNlRnJvbUNhbWVsQ2FzZShsb3dlckNhc2VGaXJzdExldHRlcihzaGlwcGluZ1R5cGUpKTtcbiAgZGVidWdnZXI7XG4gIGNvbnNvbGUubG9nKCdrZXknLCBrZXksICdvcmRlcltrZXldJywgb3JkZXJba2V5XSk7XG4gIGlmIChvcmRlcltrZXldKXtcbiAgICByZXR1cm4gb3JkZXJba2V5XS5zaGlwcGluZ19sYWJlbCA/IHRydWUgOiBmYWxzZVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTaGlwcGluZ0xhYmVsID0gKHR5cGUpID0+IHtcbiAgY29uc3QgZGF0YSA9IHsgc2hpcG1lbnQ6IHsgdHlwZSwgb3JkZXJfaWQ6IHRoaXMucHJvcHMuY3VycmVudE9yZGVyLmlkIH19O1xuICBjcmVhdGVTaGlwbWVudChkYXRhKVxuICAgIC50aGVuKHJlcyA9PiB0aGlzLnJlZnJlc2hDdXJyZW50T3JkZXIoKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJpbnRMYWJlbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIsIGN1cnJlbnRPcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgY29uc3Qgcm9sZSA9IGN1cnJlbnRVc2VyLnVzZXIucm9sZXNbMF0ubmFtZTtcbiAgY29uc3Qgc2hpcHBpbmdUeXBlID0gZ2V0U2hpcHBpbmdUeXBlKHJvbGUsIGN1cnJlbnRPcmRlci50eXBlKTtcbiAgZGVidWdnZXI7XG4gIGNvbnNvbGUubG9nKCdzaGlwcGluZ1R5cGUnLCBzaGlwcGluZ1R5cGUsICdjdXJyZW50T3JkZXInLCBjdXJyZW50T3JkZXIpXG4gIGNvbnN0IHByaW50UHJvbXB0ID0gZ2V0UHJpbnRCdXR0b25Qcm9tcHQoc2hpcHBpbmdUeXBlLCBjdXJyZW50T3JkZXIpO1xuXG5cbiAgaWYgKHByaW50UHJvbXB0LnNwbGl0KCcgJylbMF0gPT09IFwiUHJpbnRcIil7XG4gICAgY29uc3QgdXJsID0gY3VycmVudE9yZGVyW3RvU25ha2VDYXNlRnJvbUNhbWVsQ2FzZShsb3dlckNhc2VGaXJzdExldHRlcihzaGlwcGluZ1R5cGUpKV0uc2hpcHBpbmdfbGFiZWw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BpbmstYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX0+XG4gICAgICAgICAge3ByaW50UHJvbXB0fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8T3JkZXJDb21wbGV0ZSBzaGlwcGluZ1R5cGU9e3NoaXBwaW5nVHlwZX0vPlxuICAgICAgICB7LyogPE9yZGVyQ29tcGxldGUgb3JkZXI9e2N1cnJlbnRPcmRlcn0gc2hpcHBpbmdUeXBlPXtzaGlwcGluZ1R5cGV9IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKHByaW50UHJvbXB0LnNwbGl0KCcgJylbMF0gPT09ICdDcmVhdGUnKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BpbmstYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB0aGlzLm1ha2VTaGlwcGluZ0xhYmVsKHNoaXBwaW5nVHlwZSl9PlxuICAgICAgICB7cHJpbnRQcm9tcHR9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGlwcGluZy9zaGlwcGluZ0Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})