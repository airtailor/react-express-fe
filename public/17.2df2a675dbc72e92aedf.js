webpackJsonp([17],{

/***/ 689:
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

var _isEmpty = __webpack_require__(51);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(11);

var _actions = __webpack_require__(727);

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
    retailerList: store.retailerList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getRetailerList: _actions.getRetailerList }, dispatch);
};

var RetailerIndex = function (_Component) {
  _inherits(RetailerIndex, _Component);

  function RetailerIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RetailerIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RetailerIndex.__proto__ || Object.getPrototypeOf(RetailerIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderRetailerRow = function (retailer) {
      var id = retailer.id,
          name = retailer.name,
          active = retailer.active_orders_count;


      var truncatedRetailerName = _this.truncatedRetailerName(name);
      var route = '/stores/' + id + '/orders';
      var editRoute = '/stores/' + id + '/edit';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'tailor-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'tailor-link' },
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              truncatedRetailerName
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              active
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: editRoute },
                'Edit'
              )
            )
          )
        ),
        _react2.default.createElement('hr', { className: 'tailor-break-row' })
      );
    }, _this.renderRetailerRows = function () {
      var retailerList = _this.props.retailerList;

      if (!(0, _isEmpty2.default)(retailerList)) {
        return _react2.default.createElement(
          'div',
          { className: 'tailor-container' },
          retailerList.map(function (tailor) {
            return _this.renderRetailerRow(tailor);
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Retailers...'
          )
        );
      }
    }, _this.renderRetailerHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tailor-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'tailor-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Retailer'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Assigned Orders'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Edit'
            )
          ),
          _react2.default.createElement('hr', { className: 'tailor-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RetailerIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getRetailerList = _props.getRetailerList;

      setLoader();
      getRetailerList().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'truncatedRetailerName',
    value: function truncatedRetailerName(name) {
      // const length = 14;
      // return name.length > 20 ? `${name.substring(0, 11)}...` : name;
      return name;
    }
  }, {
    key: 'render',
    value: function render() {
      var retailerOrderHeaders = this.renderRetailerHeaders;
      var retailerOrderRows = this.renderRetailerRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Retailers' }),
        _react2.default.createElement(
          'div',
          { className: 'tailors' },
          retailerOrderHeaders(),
          retailerOrderRows()
        )
      );
    }
  }]);

  return RetailerIndex;
}(_react.Component);

RetailerIndex.propTypes = {
  retailerList: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getRetailerList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RetailerIndex);

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

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;
exports.getRetailerList = getRetailerList;

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(337);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(34);

var setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
function getRetailerList() {
  var url = _constants.expressApi + '/stores/retailers';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setRetailerList(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function setRetailerList(retailers) {
  return {
    type: _constants.SET_RETAILER_LIST,
    retailers: retailers
  };
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9yZXRhaWxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcz81MjU5KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9hZG1pbi9yZXRhaWxlcnMvZHVja3MvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJyZXRhaWxlckxpc3QiLCJzdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsImdldFJldGFpbGVyTGlzdCIsImRpc3BhdGNoIiwiUmV0YWlsZXJJbmRleCIsInJlbmRlclJldGFpbGVyUm93IiwiaWQiLCJyZXRhaWxlciIsIm5hbWUiLCJhY3RpdmUiLCJhY3RpdmVfb3JkZXJzX2NvdW50IiwidHJ1bmNhdGVkUmV0YWlsZXJOYW1lIiwicm91dGUiLCJlZGl0Um91dGUiLCJyZW5kZXJSZXRhaWxlclJvd3MiLCJwcm9wcyIsIm1hcCIsInRhaWxvciIsInJlbmRlclJldGFpbGVySGVhZGVycyIsInRoZW4iLCJyZXRhaWxlck9yZGVySGVhZGVycyIsInJldGFpbGVyT3JkZXJSb3dzIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkNhcnRSaWJib24iLCJyb3RhdGUiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwiU2VjdGlvbkhlYWRlciIsInRleHQiLCJjdXJyZW50VXNlciIsInJlcXVpcmUiLCJ2YWxpZGF0ZVRva2VuIiwic2V0VG9rZW5zIiwidXJsIiwiZ2V0Iiwic2V0UmV0YWlsZXJMaXN0IiwicmVzIiwiZGF0YSIsImJvZHkiLCJjYXRjaCIsInJldGFpbGVycyIsInR5cGUi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b0JBQVk7QUFDakIsV0FBT0YsY0FBY3RDLFFBQWQsRUFDSmdCLElBREksQ0FDQ3VCLFNBREQsRUFFSnZCLElBRkksQ0FFQyxZQUFNO0FBQ1YsYUFBTyxnQkFBTXlCLEdBQU4sQ0FBVUQsR0FBVixFQUNKeEIsSUFESSxDQUNDLGVBQU87QUFDWGhCLGlCQUFTMEMsZ0JBQWdCQyxJQUFJQyxJQUFKLENBQVNDLElBQXpCLENBQVQ7QUFDRCxPQUhJLEVBSUpDLEtBSkksQ0FJRSxlQUFPO0FBQ1o7QUFDRCxPQU5JLENBQVA7QUFPRCxLQVZJLENBQVA7QUFXRCxHQVpEO0FBYUQ7O0FBRUQsU0FBU0osZUFBVCxDQUF5QkssU0FBekIsRUFBb0M7QUFDbEMsU0FBTztBQUNMQyxzQ0FESztBQUVMRDtBQUZLLEdBQVA7QUFJRCxDIiwiZmlsZSI6IjE3LjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgZ2V0UmV0YWlsZXJMaXN0LCBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gJy4vZHVja3MvYWN0aW9ucyc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZXRhaWxlckxpc3Q6IHN0b3JlLnJldGFpbGVyTGlzdCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7IHNldExvYWRlciwgcmVtb3ZlTG9hZGVyLCBnZXRSZXRhaWxlckxpc3QgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgUmV0YWlsZXJJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcmV0YWlsZXJMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgc2V0TG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICByZW1vdmVMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIGdldFJldGFpbGVyTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgZ2V0UmV0YWlsZXJMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldExvYWRlcigpO1xuICAgIGdldFJldGFpbGVyTGlzdCgpLnRoZW4oKCkgPT4gcmVtb3ZlTG9hZGVyKCkpO1xuICB9XG5cbiAgdHJ1bmNhdGVkUmV0YWlsZXJOYW1lKG5hbWUpIHtcbiAgICAvLyBjb25zdCBsZW5ndGggPSAxNDtcbiAgICAvLyByZXR1cm4gbmFtZS5sZW5ndGggPiAyMCA/IGAke25hbWUuc3Vic3RyaW5nKDAsIDExKX0uLi5gIDogbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHJlbmRlclJldGFpbGVyUm93ID0gcmV0YWlsZXIgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIGFjdGl2ZV9vcmRlcnNfY291bnQ6IGFjdGl2ZSB9ID0gcmV0YWlsZXI7XG5cbiAgICBjb25zdCB0cnVuY2F0ZWRSZXRhaWxlck5hbWUgPSB0aGlzLnRydW5jYXRlZFJldGFpbGVyTmFtZShuYW1lKTtcbiAgICBjb25zdCByb3V0ZSA9IGAvc3RvcmVzLyR7aWR9L29yZGVyc2A7XG4gICAgY29uc3QgZWRpdFJvdXRlID0gYC9zdG9yZXMvJHtpZH0vZWRpdGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItZGF0YS1yb3dcIj5cbiAgICAgICAgICA8TGluayB0bz17cm91dGV9IGNsYXNzTmFtZT1cInRhaWxvci1saW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhaWxvci1kYXRhLWNlbGxcIj57dHJ1bmNhdGVkUmV0YWlsZXJOYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItZGF0YS1jZWxsXCI+e2FjdGl2ZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFpbG9yLWRhdGEtY2VsbFwiPlxuICAgICAgICAgICAgICA8TGluayB0bz17ZWRpdFJvdXRlfT5FZGl0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGFpbG9yLWJyZWFrLXJvd1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclJldGFpbGVyUm93cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJldGFpbGVyTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWlzRW1wdHkocmV0YWlsZXJMaXN0KSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAge3JldGFpbGVyTGlzdC5tYXAodGFpbG9yID0+IHRoaXMucmVuZGVyUmV0YWlsZXJSb3codGFpbG9yKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctb3JkZXJzXCI+TG9hZGluZyBSZXRhaWxlcnMuLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJSZXRhaWxlckhlYWRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFpbG9yLWhlYWRlcnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVycy1yb3dcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVyLWNlbGxcIj5SZXRhaWxlcjwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFpbG9yLWhlYWRlci1jZWxsXCI+QXNzaWduZWQgT3JkZXJzPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWlsb3ItaGVhZGVyLWNlbGxcIj5FZGl0PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGFpbG9yLWhlYWRlci1icmVhay1yb3dcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJldGFpbGVyT3JkZXJIZWFkZXJzID0gdGhpcy5yZW5kZXJSZXRhaWxlckhlYWRlcnM7XG4gICAgY29uc3QgcmV0YWlsZXJPcmRlclJvd3MgPSB0aGlzLnJlbmRlclJldGFpbGVyUm93cztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD17J01hbmFnZSBSZXRhaWxlcnMnfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhaWxvcnNcIj5cbiAgICAgICAgICB7cmV0YWlsZXJPcmRlckhlYWRlcnMoKX1cbiAgICAgICAgICB7cmV0YWlsZXJPcmRlclJvd3MoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJldGFpbGVySW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvYWRtaW4vcmV0YWlsZXJzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTRVRfUkVUQUlMRVJfTElTVCwgZXhwcmVzc0FwaSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG4gIHZhbGlkYXRlVG9rZW4sXG4gIHNldFRva2Vucyxcbn0gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9hY3Rpb25zJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXRhaWxlckxpc3QoKSB7XG4gIGNvbnN0IHVybCA9IGAke2V4cHJlc3NBcGl9L3N0b3Jlcy9yZXRhaWxlcnNgO1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVRva2VuKGRpc3BhdGNoKVxuICAgICAgLnRoZW4oc2V0VG9rZW5zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gQXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0UmV0YWlsZXJMaXN0KHJlcy5kYXRhLmJvZHkpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0UmV0YWlsZXJMaXN0KHJldGFpbGVycykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9SRVRBSUxFUl9MSVNULFxuICAgIHJldGFpbGVycyxcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL2FkbWluL3JldGFpbGVycy9kdWNrcy9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==