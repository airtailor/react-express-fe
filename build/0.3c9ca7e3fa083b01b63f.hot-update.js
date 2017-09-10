webpackHotUpdate(0,{

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(5), RootInstanceProvider = __webpack_require__(6), ReactMount = __webpack_require__(4), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(11);\n\nvar _redux = __webpack_require__(12);\n\nvar _moment = __webpack_require__(1);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _actions = __webpack_require__(13);\n\nvar _SectionHeader = __webpack_require__(26);\n\nvar _SectionHeader2 = _interopRequireDefault(_SectionHeader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Messages = function (_Component) {\n  _inherits(Messages, _Component);\n\n  function Messages() {\n    _classCallCheck(this, Messages);\n\n    var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this));\n\n    _this.state = {\n      newMessage: ''\n    };\n\n    _this.submitMessage = _this.submitMessage.bind(_this);\n    return _this;\n  }\n\n  _createClass(Messages, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var self = this;\n      var store_id = this.props.currentUser.user.store_id;\n\n      this.props.getConversations(store_id).then(function (res) {\n        if (_this2.props.store.name === 'Air Tailor') {\n          console.log(\"THE STORE IS AIR TAILOR\");\n          _this2.props.getMessages(_this2.props.store.id, _this2.props.match.params.id);\n        } else {\n          var conversation_id = self.props.conversations[0].id;\n          _this2.props.getMessages(store_id, conversation_id);\n        }\n      }).catch(function (err) {\n        return console.log('err', err);\n      });\n    }\n  }, {\n    key: 'renderMessages',\n    value: function renderMessages(messages) {\n      var user = this.props.currentUser.user;\n      ;\n      return messages.map(function (message, index) {\n        var body = message.body,\n            store_id = message.store_id,\n            store = message.store,\n            created_at = message.created_at;\n\n        var className = store_id === user.store_id ? 'sender' : 'receiver';\n\n        //const time = moment(created_at);\n        //const offset = moment().utcOffset() / 60;\n        //const localTime = time.add(offset, 'h');\n\n        var messageTime = (0, _moment2.default)(created_at).format('hh:mm a');\n        var messageDate = (0, _moment2.default)(created_at).format('MM-DD-YYYY');\n        return _react2.default.createElement(\n          'div',\n          { className: className + ' message', key: index },\n          _react2.default.createElement(\n            'b',\n            null,\n            store.name\n          ),\n          ' // General Message // ',\n          messageDate,\n          ' at ',\n          messageTime,\n          _react2.default.createElement('hr', null),\n          body\n        );\n      });\n    }\n  }, {\n    key: 'submitMessage',\n    value: function submitMessage(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var newMessage = this.state.newMessage;\n\n      var conversation = this.props.conversations[0];\n      var conversation_id = conversation.id;\n      var store_id = this.props.store.id;\n      var message = { body: newMessage, conversation_id: conversation_id, store_id: store_id };\n\n      this.props.createMessage(message).then(function (res) {\n        return _this3.setState({ newMessage: '' });\n      }).catch(function (err) {\n        return console.log(err);\n      });\n    }\n  }, {\n    key: 'updateNewMessage',\n    value: function updateNewMessage(text) {\n      this.setState({ newMessage: text });\n    }\n  }, {\n    key: 'renderMessageForm',\n    value: function renderMessageForm() {\n      var _this4 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'messages-form' },\n        _react2.default.createElement(\n          'form',\n          { onSubmit: this.submitMessage },\n          _react2.default.createElement('textarea', {\n            onChange: function onChange(e) {\n              return _this4.updateNewMessage(e.target.value);\n            },\n            value: this.state.newMessage }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { type: 'submit', className: 'button short-button', value: 'submit' })\n        )\n      );\n    }\n  }, {\n    key: 'markMessagesRead',\n    value: function markMessagesRead(props) {\n      if (props.messages.length > 0) {\n        var role = props.currentUser.user.roles[0].name;\n        var messageCheck = role === 'admin' ? 'sender_read' : 'recipient_read';\n\n        // if any of the messages in this conversation are unread\n        var unreads = props.messages.filter(function (mess) {\n          return !mess[messageCheck];\n        });\n\n        // if # of unread messages is > 0 then mark all of them as read\n        if (unreads.length > 0) {\n          unreads.forEach(function (mess) {\n            mess[messageCheck] = true;\n            props.updateMessage(mess);\n          });\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var headerText = 'Messages / ' + this.props.store.name;\n      this.markMessagesRead(this.props);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),\n        _react2.default.createElement(\n          'div',\n          { className: 'content' },\n          _react2.default.createElement(\n            'div',\n            { className: 'messages-container' },\n            this.renderMessageForm(),\n            this.renderMessages(this.props.messages)\n          )\n        )\n      );\n    }\n  }]);\n\n  return Messages;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(store) {\n  return {\n    conversations: store.conversations,\n    currentUser: store.currentUser,\n    messages: store.messages,\n    store: store.currentStore\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getConversations: _actions.getConversations, getMessages: _actions.getMessages, createMessage: _actions.createMessage, updateMessage: _actions.updateMessage }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(7); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"ConversationsShow.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9jb252ZXJzYXRpb25zL0NvbnZlcnNhdGlvbnNTaG93LmpzPzc2NjYiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJzdGF0ZSIsIm5ld01lc3NhZ2UiLCJzdWJtaXRNZXNzYWdlIiwiYmluZCIsInNlbGYiLCJzdG9yZV9pZCIsInByb3BzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiZ2V0Q29udmVyc2F0aW9ucyIsInRoZW4iLCJzdG9yZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXMiLCJpZCIsIm1hdGNoIiwicGFyYW1zIiwiY29udmVyc2F0aW9uX2lkIiwiY29udmVyc2F0aW9ucyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJib2R5IiwiY3JlYXRlZF9hdCIsImNsYXNzTmFtZSIsIm1lc3NhZ2VUaW1lIiwiZm9ybWF0IiwibWVzc2FnZURhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb252ZXJzYXRpb24iLCJjcmVhdGVNZXNzYWdlIiwic2V0U3RhdGUiLCJ0ZXh0IiwidXBkYXRlTmV3TWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwicm9sZSIsInJvbGVzIiwibWVzc2FnZUNoZWNrIiwidW5yZWFkcyIsImZpbHRlciIsIm1lc3MiLCJmb3JFYWNoIiwidXBkYXRlTWVzc2FnZSIsImhlYWRlclRleHQiLCJtYXJrTWVzc2FnZXNSZWFkIiwicmVuZGVyTWVzc2FnZUZvcm0iLCJyZW5kZXJNZXNzYWdlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRTdG9yZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osc0JBQWE7QUFBQTs7QUFBQTs7QUFFWCxVQUFL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NEMsYUFBTixDQUFvQkYsSUFBcEI7QUFDRCxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7NkJBRU87QUFDTixVQUFNRyw2QkFBMkIsS0FBSzdDLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsSUFBbEQ7QUFDQSxXQUFLd0MsZ0JBQUwsQ0FBc0IsS0FBSzlDLEtBQTNCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxpRUFBZSxNQUFNNkMsVUFBckIsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRyxpQkFBS0UsaUJBQUwsRUFESDtBQUVHLGlCQUFLQyxjQUFMLENBQW9CLEtBQUtoRCxLQUFMLENBQVdpQixRQUEvQjtBQUZIO0FBREY7QUFGRixPQURGO0FBV0Q7Ozs7OztBQUdILElBQU1nQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUM1QyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMUyxtQkFBZVQsTUFBTVMsYUFEaEI7QUFFTGIsaUJBQWFJLE1BQU1KLFdBRmQ7QUFHTGdCLGNBQVVaLE1BQU1ZLFFBSFg7QUFJTFosV0FBT0EsTUFBTTZDO0FBSlIsR0FBUDtBQU1ELENBUEQ7O0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU8sK0JBQW1CLEVBQUNqRCwyQ0FBRCxFQUFtQk0saUNBQW5CLEVBQWdDcUIscUNBQWhDLEVBQStDYyxxQ0FBL0MsRUFBbkIsRUFBa0ZRLFFBQWxGLENBQVA7QUFDRCxDQUZEOztrQkFJZSx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDMUQsUUFBN0MsQyIsImZpbGUiOiI0NDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7Z2V0Q29udmVyc2F0aW9ucywgZ2V0TWVzc2FnZXMsIGNyZWF0ZU1lc3NhZ2UsIHVwZGF0ZU1lc3NhZ2V9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vU2VjdGlvbkhlYWRlcic7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0TWVzc2FnZSA9IHRoaXMuc3VibWl0TWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCB7c3RvcmVfaWR9ID0gdGhpcy5wcm9wcy5jdXJyZW50VXNlci51c2VyO1xuICAgIHRoaXMucHJvcHMuZ2V0Q29udmVyc2F0aW9ucyhzdG9yZV9pZClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlLm5hbWUgPT09ICdBaXIgVGFpbG9yJyl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUSEUgU1RPUkUgSVMgQUlSIFRBSUxPUlwiKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKHRoaXMucHJvcHMuc3RvcmUuaWQsIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb252ZXJzYXRpb25faWQgPSBzZWxmLnByb3BzLmNvbnZlcnNhdGlvbnNbMF0uaWQ7XG4gICAgICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlcyhzdG9yZV9pZCwgY29udmVyc2F0aW9uX2lkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSlcbiAgfVxuXG4gIHJlbmRlck1lc3NhZ2VzKG1lc3NhZ2VzKXtcbiAgICBjb25zdCB7dXNlcn0gPSB0aGlzLnByb3BzLmN1cnJlbnRVc2VyOztcbiAgICByZXR1cm4gbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qge2JvZHksIHN0b3JlX2lkLCBzdG9yZSwgY3JlYXRlZF9hdH0gPSBtZXNzYWdlO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3RvcmVfaWQgPT09IHVzZXIuc3RvcmVfaWQgPyAnc2VuZGVyJyA6ICdyZWNlaXZlcic7XG5cbiAgICAgIC8vY29uc3QgdGltZSA9IG1vbWVudChjcmVhdGVkX2F0KTtcbiAgICAgIC8vY29uc3Qgb2Zmc2V0ID0gbW9tZW50KCkudXRjT2Zmc2V0KCkgLyA2MDtcbiAgICAgIC8vY29uc3QgbG9jYWxUaW1lID0gdGltZS5hZGQob2Zmc2V0LCAnaCcpO1xuXG4gICAgICBjb25zdCBtZXNzYWdlVGltZSA9IG1vbWVudChjcmVhdGVkX2F0KS5mb3JtYXQoJ2hoOm1tIGEnKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VEYXRlID0gbW9tZW50KGNyZWF0ZWRfYXQpLmZvcm1hdCgnTU0tREQtWVlZWScpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSArICcgbWVzc2FnZSd9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxiPntzdG9yZS5uYW1lfTwvYj4gLy8gR2VuZXJhbCBNZXNzYWdlIC8vIHttZXNzYWdlRGF0ZX0gYXQge21lc3NhZ2VUaW1lfVxuICAgICAgICAgIDxoci8+XG4gICAgICAgICAge2JvZHl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KVxuICB9XG5cbiAgc3VibWl0TWVzc2FnZShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qge25ld01lc3NhZ2V9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSB0aGlzLnByb3BzLmNvbnZlcnNhdGlvbnNbMF07XG4gICAgY29uc3QgY29udmVyc2F0aW9uX2lkID0gY29udmVyc2F0aW9uLmlkO1xuICAgIGNvbnN0IHN0b3JlX2lkID0gdGhpcy5wcm9wcy5zdG9yZS5pZDtcbiAgICBjb25zdCBtZXNzYWdlID0ge2JvZHk6IG5ld01lc3NhZ2UsIGNvbnZlcnNhdGlvbl9pZCwgc3RvcmVfaWR9O1xuXG4gICAgdGhpcy5wcm9wcy5jcmVhdGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7bmV3TWVzc2FnZTogJyd9KSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICB1cGRhdGVOZXdNZXNzYWdlKHRleHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe25ld01lc3NhZ2U6IHRleHR9KTtcbiAgfVxuXG4gIHJlbmRlck1lc3NhZ2VGb3JtKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlcy1mb3JtJz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0TWVzc2FnZX0+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlTmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdNZXNzYWdlfT5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24gc2hvcnQtYnV0dG9uJyB2YWx1ZT0nc3VibWl0JyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgbWFya01lc3NhZ2VzUmVhZChwcm9wcyl7XG4gICAgaWYgKHByb3BzLm1lc3NhZ2VzLmxlbmd0aCA+IDApe1xuICAgICAgY29uc3Qgcm9sZSA9IHByb3BzLmN1cnJlbnRVc2VyLnVzZXIucm9sZXNbMF0ubmFtZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VDaGVjayA9IHJvbGUgPT09ICdhZG1pbicgPyAnc2VuZGVyX3JlYWQnIDogJ3JlY2lwaWVudF9yZWFkJztcbiAgICAgIFxuICAgICAgLy8gaWYgYW55IG9mIHRoZSBtZXNzYWdlcyBpbiB0aGlzIGNvbnZlcnNhdGlvbiBhcmUgdW5yZWFkXG4gICAgICBjb25zdCB1bnJlYWRzID0gcHJvcHMubWVzc2FnZXMuZmlsdGVyKG1lc3MgPT4ge1xuICAgICAgICByZXR1cm4gIW1lc3NbbWVzc2FnZUNoZWNrXVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGlmICMgb2YgdW5yZWFkIG1lc3NhZ2VzIGlzID4gMCB0aGVuIG1hcmsgYWxsIG9mIHRoZW0gYXMgcmVhZFxuICAgICAgaWYgKHVucmVhZHMubGVuZ3RoID4gMCl7XG4gICAgICAgIHVucmVhZHMuZm9yRWFjaChtZXNzID0+IHtcbiAgICAgICAgICBtZXNzW21lc3NhZ2VDaGVja10gPSB0cnVlO1xuICAgICAgICAgIHByb3BzLnVwZGF0ZU1lc3NhZ2UobWVzcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gYE1lc3NhZ2VzIC8gJHt0aGlzLnByb3BzLnN0b3JlLm5hbWV9YDtcbiAgICB0aGlzLm1hcmtNZXNzYWdlc1JlYWQodGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD17aGVhZGVyVGV4dH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlcy1jb250YWluZXInPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZUZvcm0oKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lc3NhZ2VzKHRoaXMucHJvcHMubWVzc2FnZXMpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb252ZXJzYXRpb25zOiBzdG9yZS5jb252ZXJzYXRpb25zLFxuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICBtZXNzYWdlczogc3RvcmUubWVzc2FnZXMsXG4gICAgc3RvcmU6IHN0b3JlLmN1cnJlbnRTdG9yZVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHtnZXRDb252ZXJzYXRpb25zLCBnZXRNZXNzYWdlcywgY3JlYXRlTWVzc2FnZSwgdXBkYXRlTWVzc2FnZX0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvY29udmVyc2F0aW9ucy9Db252ZXJzYXRpb25zU2hvdy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})