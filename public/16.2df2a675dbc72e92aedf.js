webpackJsonp([16],{

/***/ 705:
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

var _actions = __webpack_require__(758);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _lodash = __webpack_require__(53);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return { users: store.usersList };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getUsersList: _actions.getUsersList }, dispatch);
};

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UsersList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call.apply(_ref, [this].concat(args))), _this), _this.renderUserRow = function (user) {
      var id = user.id,
          email = user.email,
          store = user.store;
      var roles = user.valid_roles;

      var roleString = (0, _lodash.isEmpty)(roles) ? 'N/A' : _this.extractRoles(roles);
      var storeName = store ? store.name : 'N/A';
      var route = '/users/' + id + '/edit';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'user-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'user-link' },
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              id
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              email
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              storeName
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              roleString
            )
          )
        )
      );
    }, _this.renderUserRows = function () {
      var users = _this.props.users;

      if (!(0, _lodash.isEmpty)(users)) {
        var userRowSet = users.map(function (user) {
          return _this.renderUserRow(user);
        });
        return _react2.default.createElement(
          'div',
          { className: 'user-container' },
          userRowSet
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Users...'
          )
        );
      }
    }, _this.renderUserHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'user-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'user-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Id'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Email'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Store Name'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Role'
            )
          ),
          _react2.default.createElement('hr', { className: 'user-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var users = this.props.users;

      if ((0, _lodash.isEmpty)(users)) {
        var _props = this.props,
            _setLoader = _props.setLoader,
            _removeLoader = _props.removeLoader,
            _getUsersList = _props.getUsersList;

        _setLoader();
        _getUsersList().then(function (res) {
          return _removeLoader();
        });
      }
    }
  }, {
    key: 'extractRoles',
    value: function extractRoles(roles) {
      var initVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return Object.keys(roles).reduce(function (acc, key, i) {
        return roles[key] ? (0, _lodash.startCase)(key) + (i == 0 ? '' : ', ') + acc : '';
      }, initVal);
    }
  }, {
    key: 'render',
    value: function render() {
      var userHeaders = this.renderUserHeaders;
      var userRows = this.renderUserRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Users', link: '/users/new' }),
        _react2.default.createElement(
          'div',
          { className: 'users' },
          userHeaders(),
          userRows()
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

UsersList.propTypes = {
  users: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getUsersList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersList);

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

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersList = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(341);

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
var getUsersList = exports.getUsersList = function getUsersList(id) {
  var url = _constants.expressApi + '/users/list';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setUsersList(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

var setUsersList = function setUsersList(users) {
  return {
    type: _constants.SET_USERS_LIST,
    users: users
  };
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9saXN0L2R1Y2tzL2FjdGlvbnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlcnMiLCJzdG9yZSIsInVzZXJzTGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNldExvYWRlciIsInJlbW92ZUxvYWRlciIsImdldFVzZXJzTGlzdCIsImRpc3BhdGNoIiwiVXNlcnNMaXN0IiwicmVuZGVyVXNlclJvdyIsImlkIiwidXNlciIsImVtYWlsIiwicm9sZXMiLCJ2YWxpZF9yb2xlcyIsInJvbGVTdHJpbmciLCJleHRyYWN0Um9sZXMiLCJzdG9yZU5hbWUiLCJuYW1lIiwicm91dGUiLCJyZW5kZXJVc2VyUm93cyIsInByb3BzIiwidXNlclJvd1NldCIsIm1hcCIsInJlbmRlclVzZXJIZWFkZXJzIiwidGhlbiIsImluaXRWYWwiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwiaSIsInVzZXJIZWFkZXJzIiwidXNlclJvd3MiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQ2FydFJpYmJvbiIsInJvdGF0ZSIsInVzZXJSb2xlcyIsImluY2x1ZGVMaW5rIiwibGluayIsIm9uQ2xpY2siLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicmVzZXRDYXJ0IiwiYWRtaW4iLCJyZXRhaWxlciIsIlNlY3Rpb25IZWFkZXIiLCJ0ZXh0IiwiY3VycmVudFVzZXIiLCJyZXF1aXJlIiwidmFsaWRhdGVUb2tlbiIsInNldFRva2VucyIsInVybCIsImdldCIsInNldFVzZXJzTGlzdCIsInJlcyIsImRhdGEiLCJib2R5IiwiY2F0Y2gi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QkEsZUFBa0IsUUFBUztBQUMvQixTQUFPO0FBQ0xzRCxpQkFBYXBELE1BQU1vRCxXQURkO0FBRUxaLGVBQVd4QyxNQUFNd0M7QUFGWixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNdEMscUJBQXFCLFNBQXJCQSxrQkFBcUIsV0FBWTtBQUNyQyxTQUFPLCtCQUNMO0FBQ0U2QztBQURGLEdBREssRUFJTHpDLFFBSkssQ0FBUDtBQU1ELENBUEQ7a0JBUWUseUJBQVFSLGVBQVIsRUFBeUJJLGtCQUF6QixFQUE2Q2dELGFBQTdDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3REZjs7OztBQUNBOzs7O2VBT0ksbUJBQUFHLENBQVEsRUFBUixDOztJQUpGbEQsUyxZQUFBQSxTO0lBQ0FDLFksWUFBQUEsWTtJQUNBa0QsYSxZQUFBQSxhO0lBQ0FDLFMsWUFBQUEsUzs7Ozs7QUFHSyxJQUFNbEQsc0NBQWUsU0FBZkEsWUFBZSxLQUFNO0FBQ2hDLE1BQU1tRCwyQ0FBTjtBQUNBLFNBQU8sb0JBQVk7QUFDakIsV0FBT0YsZ0JBQ0o5QixJQURJLENBQ0MrQixTQURELEVBRUovQixJQUZJLENBRUMsWUFBTTtBQUNWLGFBQU8sZ0JBQU1pQyxHQUFOLENBQVVELEdBQVYsRUFDSmhDLElBREksQ0FDQyxlQUFPO0FBQ1hsQixpQkFBU29ELGFBQWFDLElBQUlDLElBQUosQ0FBU0MsSUFBdEIsQ0FBVDtBQUNBLGVBQU9GLEdBQVA7QUFDRCxPQUpJLEVBS0pHLEtBTEksQ0FLRSxlQUFPO0FBQ1o7QUFDRCxPQVBJLENBQVA7QUFRRCxLQVhJLENBQVA7QUFZRCxHQWJEO0FBY0QsQ0FoQk07O0FBa0JQLElBQU1KLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQzVCLFNBQU87QUFDTEssbUNBREs7QUFFTGhFO0FBRkssR0FBUDtBQUlELENBTEQsQyIsImZpbGUiOiIxNi4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgc2V0TG9hZGVyLCByZW1vdmVMb2FkZXIsIGdldFVzZXJzTGlzdCB9IGZyb20gJy4vZHVja3MvYWN0aW9ucyc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7IGlzRW1wdHksIHN0YXJ0Q2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7IHVzZXJzOiBzdG9yZS51c2Vyc0xpc3QgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7IHNldExvYWRlciwgcmVtb3ZlTG9hZGVyLCBnZXRVc2Vyc0xpc3QgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcblxuY2xhc3MgVXNlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHNldExvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgcmVtb3ZlTG9hZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBnZXRVc2Vyc0xpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHVzZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc0VtcHR5KHVzZXJzKSkge1xuICAgICAgY29uc3QgeyBzZXRMb2FkZXIsIHJlbW92ZUxvYWRlciwgZ2V0VXNlcnNMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgc2V0TG9hZGVyKCk7XG4gICAgICBnZXRVc2Vyc0xpc3QoKS50aGVuKHJlcyA9PiByZW1vdmVMb2FkZXIoKSk7XG4gICAgfVxuICB9XG5cbiAgZXh0cmFjdFJvbGVzKHJvbGVzLCBpbml0VmFsID0gJycpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocm9sZXMpLnJlZHVjZShcbiAgICAgIChhY2MsIGtleSwgaSkgPT5cbiAgICAgICAgcm9sZXNba2V5XSA/IHN0YXJ0Q2FzZShrZXkpICsgKGkgPT0gMCA/ICcnIDogJywgJykgKyBhY2MgOiAnJyxcbiAgICAgIGluaXRWYWxcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyVXNlclJvdyA9IHVzZXIgPT4ge1xuICAgIGNvbnN0IHsgaWQsIGVtYWlsLCBzdG9yZSB9ID0gdXNlcjtcbiAgICBjb25zdCB7IHZhbGlkX3JvbGVzOiByb2xlcyB9ID0gdXNlcjtcbiAgICBjb25zdCByb2xlU3RyaW5nID0gaXNFbXB0eShyb2xlcykgPyAnTi9BJyA6IHRoaXMuZXh0cmFjdFJvbGVzKHJvbGVzKTtcbiAgICBjb25zdCBzdG9yZU5hbWUgPSBzdG9yZSA/IHN0b3JlLm5hbWUgOiAnTi9BJztcbiAgICBjb25zdCByb3V0ZSA9IGAvdXNlcnMvJHtpZH0vZWRpdGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRhdGEtcm93XCI+XG4gICAgICAgICAgPExpbmsgdG89e3JvdXRlfSBjbGFzc05hbWU9XCJ1c2VyLWxpbmtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1kYXRhLWNlbGxcIj57aWR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZGF0YS1jZWxsXCI+e2VtYWlsfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRhdGEtY2VsbFwiPntzdG9yZU5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZGF0YS1jZWxsXCI+e3JvbGVTdHJpbmd9PC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyVXNlclJvd3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWlzRW1wdHkodXNlcnMpKSB7XG4gICAgICBjb25zdCB1c2VyUm93U2V0ID0gdXNlcnMubWFwKHVzZXIgPT4gdGhpcy5yZW5kZXJVc2VyUm93KHVzZXIpKTtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY29udGFpbmVyXCI+e3VzZXJSb3dTZXR9PC9kaXY+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vcmRlcnNcIj5Mb2FkaW5nIFVzZXJzLi4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyVXNlckhlYWRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1oZWFkZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1oZWFkZXJzLXJvd1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVzZXItaGVhZGVyLWNlbGxcIj5JZDwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXNlci1oZWFkZXItY2VsbFwiPkVtYWlsPC9oMz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1c2VyLWhlYWRlci1jZWxsXCI+U3RvcmUgTmFtZTwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXNlci1oZWFkZXItY2VsbFwiPlJvbGU8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ1c2VyLWhlYWRlci1icmVhay1yb3dcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVzZXJIZWFkZXJzID0gdGhpcy5yZW5kZXJVc2VySGVhZGVycztcbiAgICBjb25zdCB1c2VyUm93cyA9IHRoaXMucmVuZGVyVXNlclJvd3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9eydNYW5hZ2UgVXNlcnMnfSBsaW5rPXsnL3VzZXJzL25ldyd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnNcIj5cbiAgICAgICAgICB7dXNlckhlYWRlcnMoKX1cbiAgICAgICAgICB7dXNlclJvd3MoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJzTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy91c2Vycy9saXN0L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTRVRfVVNFUlNfTElTVCwgZXhwcmVzc0FwaSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG4gIHZhbGlkYXRlVG9rZW4sXG4gIHNldFRva2Vucyxcbn0gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9hY3Rpb25zJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2Vyc0xpc3QgPSBpZCA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2V4cHJlc3NBcGl9L3VzZXJzL2xpc3RgO1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVRva2VuKClcbiAgICAgIC50aGVuKHNldFRva2VucylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEF4aW9zLmdldCh1cmwpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXJzTGlzdChyZXMuZGF0YS5ib2R5KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuY29uc3Qgc2V0VXNlcnNMaXN0ID0gdXNlcnMgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9VU0VSU19MSVNULFxuICAgIHVzZXJzLFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3VzZXJzL2xpc3QvZHVja3MvYWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=