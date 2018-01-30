webpackJsonp([6],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(11);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(53);

var _actions = __webpack_require__(34);

var _shippingFunctions = __webpack_require__(332);

var _garments = __webpack_require__(759);

var _supplies = __webpack_require__(764);

var _supplies2 = _interopRequireDefault(_supplies);

var _logo = __webpack_require__(116);

var _logo2 = _interopRequireDefault(_logo);

var _Measurements = __webpack_require__(739);

var _Measurements2 = _interopRequireDefault(_Measurements);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderComplete = __webpack_require__(334);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCurrentOrder: _actions.getCurrentOrder,
    updateOrder: _actions.updateOrder,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrdersShow = function (_Component) {
  _inherits(OrdersShow, _Component);

  function OrdersShow(props) {
    _classCallCheck(this, OrdersShow);

    var _this = _possibleConstructorReturn(this, (OrdersShow.__proto__ || Object.getPrototypeOf(OrdersShow)).call(this));

    _this.checkOrderIn = function () {
      var _this$props = _this.props,
          _this$props$currentOr = _this$props.currentOrder,
          orderId = _this$props$currentOr.id,
          storeId = _this$props$currentOr.store_id,
          tailor = _this$props.userRoles.tailor;

      var data = { order: { id: orderId, store_id: storeId, arrived: true } };

      _this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    };

    _this.fulfillOrder = function () {
      var _this$props$currentOr2 = _this.props.currentOrder,
          orderId = _this$props$currentOr2.id,
          storeId = _this$props$currentOr2.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      _this.props.setLoader();
      _this.setState({ loadingLabel: true });

      _this.props.updateOrder(data).then(function (res) {
        var _this$props2 = _this.props,
            order = _this$props2.currentOrder,
            roles = _this$props2.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has('mail_shipment')) {
          _this.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.postShipment = function (orders, action, type) {
      _this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        if (res.data.body.errors) {
          var message = res.data.body.errors[0];
          var kind = 'warning';
          _this.props.setGrowler({ kind: kind, message: message });
        } else {
          _this.refreshCurrentOrder();
        }
        _this.setState({ loadingLabel: false });
        _this.props.removeLoader();
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.makeShippingLabel = function (action) {
      return _this.postShipment([_this.props.currentOrder], action, 'mail_shipment');
    };

    _this.toggleMeasurementDetailButton = function (boolean) {
      _this.setState({ showMeasurements: !boolean });
    };

    _this.renderArrivedButton = function () {
      return _this.renderButton('Check Order In', { disabled: false }, _this.checkOrderIn);
    };

    _this.renderFulfillButton = function () {
      return _this.renderButton('Fulfill This Order', { disabled: false }, _this.fulfillOrder);
    };

    _this.renderCompletedButton = function () {
      return _this.renderButton('Order Completed ✔️', { disabled: true });
    };

    _this.renderPrintLabel = function () {
      var _this$props3 = _this.props,
          order = _this$props3.currentOrder,
          roles = _this$props3.userRoles;

      var disabled = _this.state.loadingLabel;
      var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);

      var onClick = void 0,
          printPrompt = void 0,
          clickArgs = void 0,
          shipmentDiv = void 0;
      switch ((0, _shippingFunctions.labelState)(roles, order, disabled)) {
        case 'needs_label':
          printPrompt = 'Create Label';
          onClick = _this.makeShippingLabel;
          clickArgs = shipmentAction;
          break;
        case 'in_progress':
          printPrompt = 'Creating Label';
        case 'label_created':
          printPrompt = 'Print Label';
          onClick = function onClick() {
            return window.print();
          };
          shipmentDiv = _react2.default.createElement(_OrderComplete2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        'div',
        null,
        _this.renderButton(printPrompt, { disabled: disabled, clickArgs: clickArgs }, onClick),
        shipmentDiv
      );
    };

    _this.renderNotesForm = function () {
      if (_this.state.displayNotesForm) {
        var _this$props$userRoles = _this.props.userRoles,
            isTailor = _this$props$userRoles.tailor,
            isAdmin = _this$props$userRoles.admin;

        var prompt = void 0,
            party = void 0;

        if (isTailor) {
          prompt = 'Add Tailor Notes?';
          party = 'provider_notes';
        } else if (isAdmin) {
          prompt = 'Add Admin Notes?';
          party = 'requester_notes';
        }

        var notesField = _this.props.currentOrder[party];

        return _react2.default.createElement(
          'form',
          { className: 'notes-form', onSubmit: function onSubmit(e) {
              return _this.submitNotes(e);
            } },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement(
              'h3',
              null,
              prompt
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('textarea', {
              cols: 43,
              rows: 10,
              defaultValue: notesField,
              onChange: function onChange(e) {
                return _this.updateNotes(e.target.value);
              }
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Submit' }),
          _react2.default.createElement('hr', null)
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    };

    _this.renderToggleNotesFormButton = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            className: 'pink-button',
            onClick: function onClick() {
              return _this.showHideNotesForm();
            }
          },
          _this.state.displayNotesForm ? 'Hide' : 'Add Notes'
        )
      );
    };

    _this.renderPrintInstructions = function () {
      var _this$props$currentOr3 = _this.props.currentOrder,
          orderId = _this$props$currentOr3.id,
          requesterNotes = _this$props$currentOr3.requester_notes,
          providerNotes = _this$props$currentOr3.provider_notes,
          _this$props$currentOr4 = _this$props$currentOr3.customer,
          firstName = _this$props$currentOr4.first_name,
          lastName = _this$props$currentOr4.last_name;

      var orderNotes = requesterNotes || 'Not Provided';
      var tailorNotes = providerNotes || 'Not Provided';
      var printableContent = _this.renderList();

      return _react2.default.createElement(
        'div',
        null,
        _this.renderButton('Print Instructions', { disabled: false }, function () {
          return window.print();
        }),
        _react2.default.createElement(
          'div',
          { className: 'print print-instructions' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: _logo2.default, style: { maxWidth: '100px' } })
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Alterations for Order #',
            orderId
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Customer Name: ',
            firstName + ' ' + lastName
          ),
          printableContent,
          _react2.default.createElement(
            'h3',
            null,
            'Order Notes: ',
            _react2.default.createElement(
              'p',
              { style: { display: 'inline' } },
              orderNotes
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Taior Notes: ',
            _react2.default.createElement(
              'p',
              { style: { display: 'inline' } },
              tailorNotes
            )
          )
        )
      );
    };

    _this.state = {
      notes: '',
      displayNotesForm: false,
      showMeasurements: false,
      loadingLabel: false,
      sendingMessenger: false
    };
    return _this;
  }

  _createClass(OrdersShow, [{
    key: 'refreshCurrentOrder',
    value: function refreshCurrentOrder() {
      var _this2 = this;

      this.props.setLoader();
      var order_id = this.props.match.params.order_id;

      var store_id = this.props.currentStore.id;
      var getCurrentOrder = this.props.getCurrentOrder;


      getCurrentOrder(store_id, order_id).then(function () {
        return _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshCurrentOrder();
    }
  }, {
    key: 'getUniqueItemTypes',
    value: function getUniqueItemTypes(items) {
      return (0, _lodash.uniqBy)(items.map(function (i) {
        return { type: i.item_type.name, items: [] };
      }), 'type');
    }
  }, {
    key: 'sortItemsByType',
    value: function sortItemsByType() {
      var items = this.props.currentOrder.items;


      if ((0, _lodash.isEmpty)(items)) return [];

      var sortedItems = new Set(this.getUniqueItemTypes(items));

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var itemType = item.item_type.name;
          var sortedItemsIterator = sortedItems.values();
          var sortingItem = true;

          while (sortingItem) {
            var currentIter = sortedItemsIterator.next();
            var currentValue = currentIter.value;

            if (currentIter.done) {
              sortingItem = false;
            } else if (currentValue.type === itemType) {
              currentValue.items.push(item);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return [].concat(_toConsumableArray(sortedItems));
    }
  }, {
    key: 'getImageForItemType',
    value: function getImageForItemType(name) {
      switch (name) {
        case 'Pants':
          return _garments.pantsImage;
        case 'Shirt':
          return _garments.shirtImage;
        case 'Dress':
          return _garments.dressImage;
        case 'Suit Jacket':
          return _garments.suitImage;
        case 'SuitJacket':
          return _garments.suitImage;
        case 'Necktie':
          return _garments.tieImage;
        case 'Skirt':
          return _garments.skirtImage;
        default:
          return _supplies2.default;
      }
    }
  }, {
    key: 'updateNotes',
    value: function updateNotes(notes) {
      this.setState({ notes: notes });
    }
  }, {
    key: 'submitNotes',
    value: function submitNotes(event) {
      var _order;

      event.preventDefault();
      var _props = this.props,
          _props$currentOrder = _props.currentOrder,
          orderId = _props$currentOrder.id,
          storeId = _props$currentOrder.store_id,
          tailor = _props.userRoles.tailor;

      var key = tailor ? 'provider_notes' : 'requester_notes';
      var data = {
        order: (_order = {}, _defineProperty(_order, key, this.state.notes), _defineProperty(_order, 'id', orderId), _defineProperty(_order, 'store_id', storeId), _order)
      };

      this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'showHideNotesForm',
    value: function showHideNotesForm() {
      this.setState({ displayNotesForm: !this.state.displayNotesForm });
    }
  }, {
    key: 'printShippingLabel',
    value: function printShippingLabel() {
      return window.print();
    }
  }, {
    key: 'renderDisabledCustLink',
    value: function renderDisabledCustLink() {
      var _props$currentOrder$c = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c.first_name,
          last_name = _props$currentOrder$c.last_name;

      return this.renderLink({
        text: first_name + ' ' + last_name,
        enabled: false
      });
    }
  }, {
    key: 'renderEnabledCustLink',
    value: function renderEnabledCustLink() {
      var _props$currentOrder$c2 = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c2.first_name,
          last_name = _props$currentOrder$c2.last_name,
          id = _props$currentOrder$c2.id;

      return this.renderLink({
        text: first_name + ' ' + last_name,
        path: '/customers/' + id + '/edit',
        enabled: true
      });
    }
  }, {
    key: 'renderOrderNotes',
    value: function renderOrderNotes(field) {
      // retailer should not see tailor notes
      if (this.props.userRoles.retailer && field === 'provider_notes') {
        return _react2.default.createElement('div', null);
      }

      var notes = this.props.currentOrder[field] || 'Not Provided';
      var title = field === 'provider_notes' ? 'Tailor Notes:' : 'Order Notes:';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          { className: 'notes' },
          notes
        )
      );
    }
  }, {
    key: 'renderAlteration',
    value: function renderAlteration(alteration, index) {
      // original, blind stitch, and cuffed hems should be red
      var hemAlts = ['Shorten Pant Length - Original Hem', 'Shorten Pant Length - Blind Stitch Hem', 'Shorten Pant Length - Cuffed Hem'];

      var className = hemAlts.includes(alteration.name) ? 'red' : '';
      var splitAlt = alteration.name.split(' - ');
      var alt = { name: splitAlt[0] + ' - ', specific: splitAlt[1] };

      if (splitAlt[1]) {
        return _react2.default.createElement(
          'li',
          { key: index },
          alt.name,
          _react2.default.createElement(
            'span',
            { className: className },
            alt.specific
          )
        );
      } else {
        return _react2.default.createElement(
          'li',
          { key: index },
          alteration.name
        );
      }
    }
  }, {
    key: 'renderLink',
    value: function renderLink(args) {
      var text = args.text,
          path = args.path,
          enabled = args.enabled;

      var linkDiv = void 0;

      if (enabled == true) {
        linkDiv = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: path },
          ' ',
          text,
          ' '
        );
      } else {
        linkDiv = _react2.default.createElement(
          'div',
          null,
          text
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Customer:'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'blue-link' },
          linkDiv
        )
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var className = params.className || 'pink-button';
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return callback(clickArgs);
            },
            disabled: disabled,
            className: className
          },
          text
        )
      );
    }
  }, {
    key: 'renderItemCaption',
    value: function renderItemCaption(item, itemType, index) {
      var alterations = item.alterations.map(this.renderAlteration);
      var itemCaption = itemType.type + ' #' + (index + 1);
      var image = this.getImageForItemType(itemType.type);

      return _react2.default.createElement(
        'div',
        { className: 'card', key: index },
        _react2.default.createElement(
          'div',
          { className: 'type-heading' },
          _react2.default.createElement('img', { className: 'item-type-image', src: image, alt: itemType.name }),
          _react2.default.createElement(
            'h3',
            null,
            itemCaption
          ),
          _react2.default.createElement(
            'ul',
            null,
            alterations
          )
        )
      );
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this3 = this;

      return this.sortItemsByType().map(function (itemType, index) {
        return itemType.items.map(function (item, index) {
          return _this3.renderItemCaption(item, itemType, index);
        });
      });
    }
  }, {
    key: 'renderEmptyDiv',
    value: function renderEmptyDiv() {
      return _react2.default.createElement('div', null);
    }
  }, {
    key: 'renderEmptyButtonDivs',
    value: function renderEmptyButtonDivs(count) {
      var output = [];
      while (count > 0) {
        output.push(this.renderEmptyDiv);
        count--;
      }
      return output;
    }
  }, {
    key: 'renderEditOrderButton',
    value: function renderEditOrderButton() {
      var _props2 = this.props,
          admin = _props2.userRoles.admin,
          order = _props2.currentOrder;

      var orderEditPath = '/orders/' + order.id + '/edit';

      if (admin) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: orderEditPath },
            _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Edit Order' })
          )
        );
      }
    }
  }, {
    key: 'renderOrderControls',
    value: function renderOrderControls() {
      var _props3 = this.props,
          order = _props3.currentOrder,
          roles = _props3.userRoles;
      var admin = roles.admin,
          tailor = roles.tailor,
          retailer = roles.retailer,
          customer = roles.customer;
      var arrived = order.arrived,
          fulfilled = order.fulfilled;

      var action = (0, _shippingFunctions.shipmentActions)(order, roles);

      // NOTE: This all needs to go into a higher-order interface component.
      // If a new button, is assigned, this will error out and help you realize it.

      var _renderEmptyButtonDiv = this.renderEmptyButtonDivs(8),
          _renderEmptyButtonDiv2 = _slicedToArray(_renderEmptyButtonDiv, 8),
          notesForm = _renderEmptyButtonDiv2[0],
          arrivedButton = _renderEmptyButtonDiv2[1],
          instructionButton = _renderEmptyButtonDiv2[2],
          fulfillButton = _renderEmptyButtonDiv2[3],
          labelButton = _renderEmptyButtonDiv2[4],
          messengerButton = _renderEmptyButtonDiv2[5],
          notesButton = _renderEmptyButtonDiv2[6],
          completedButton = _renderEmptyButtonDiv2[7];

      if (tailor || admin) {
        notesForm = this.renderNotesForm;
        notesButton = this.renderToggleNotesFormButton;

        if (!arrived && !fulfilled) {
          arrivedButton = this.renderArrivedButton;
        }

        if (arrived && !fulfilled) {
          instructionButton = this.renderPrintInstructions;
          fulfillButton = this.renderFulfillButton;
        }

        if (arrived && fulfilled) {
          labelButton = this.renderPrintLabel;
          completedButton = this.renderCompletedButton;

          if ((0, _shippingFunctions.messengerAllowed)(action, roles)) {
            messengerButton = this.renderSendMessenger;
          }
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        notesButton(),
        notesForm(),
        arrivedButton(),
        instructionButton(),
        fulfillButton(),
        completedButton(),
        labelButton()
      );
    }
  }, {
    key: 'renderOrderDetails',
    value: function renderOrderDetails() {
      var _props$userRoles = this.props.userRoles,
          admin = _props$userRoles.admin,
          retailer = _props$userRoles.retailer,
          tailor = _props$userRoles.tailor,
          customer = _props$userRoles.customer;


      var renderList = this.renderList();
      var requesterNotes = this.renderOrderNotes('requester_notes');
      var providerNotes = this.renderOrderNotes('provider_notes');
      var customerLink = tailor || admin ? this.renderEnabledCustLink() : this.renderDisabledCustLink();

      return _react2.default.createElement(
        'div',
        null,
        renderList,
        customerLink,
        requesterNotes,
        providerNotes
      );
    }
  }, {
    key: 'renderDetailsOrMeasurementsButton',
    value: function renderDetailsOrMeasurementsButton() {
      var showMeasurements = this.state.showMeasurements;
      var _props$userRoles2 = this.props.userRoles,
          tailor = _props$userRoles2.tailor,
          admin = _props$userRoles2.admin;

      var value = showMeasurements ? 'See Order Details' : 'See Measurements';
      var toggleFunction = this.toggleMeasurementDetailButton;

      if (tailor || admin) {
        return _react2.default.createElement('input', {
          type: 'submit',
          value: value,
          className: 'short-button',
          onClick: function onClick() {
            return toggleFunction(showMeasurements);
          }
        });
      }
    }
  }, {
    key: 'renderMeasurements',
    value: function renderMeasurements() {
      var customer = this.props.currentOrder.customer;

      return _react2.default.createElement(_Measurements2.default, { customer: customer });
    }
  }, {
    key: 'setMainContent',
    value: function setMainContent() {
      var mainContent = void 0;

      if (this.state.showMeasurements) {
        var measurements = this.renderMeasurements();
        mainContent = _react2.default.createElement(
          'div',
          null,
          measurements
        );
      } else {
        var editButton = this.renderEditOrderButton();
        var measurementsButton = this.renderDetailsOrMeasurementsButton();
        var details = this.renderOrderDetails();
        var controls = this.renderOrderControls();
        // NOTE: here we should be rendering 1 of 2 main components
        mainContent = _react2.default.createElement(
          'div',
          null,
          editButton,
          measurementsButton,
          details,
          controls
        );
      }

      return mainContent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          store = _props4.currentStore,
          order = _props4.currentOrder;

      var mainContent = _react2.default.createElement('div', null);
      var headerText = '';

      if (!(0, _lodash.isEmpty)(order)) {
        mainContent = this.setMainContent();
        headerText = 'Orders / ' + store.name + ' / #' + order.id;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'order-show' },
          mainContent
        )
      );
    }
  }]);

  return OrdersShow;
}(_react.Component);

OrdersShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
OrdersShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersShow);

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

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMeasurement = function (_Component) {
  _inherits(InputMeasurement, _Component);

  function InputMeasurement() {
    _classCallCheck(this, InputMeasurement);

    return _possibleConstructorReturn(this, (InputMeasurement.__proto__ || Object.getPrototypeOf(InputMeasurement)).apply(this, arguments));
  }

  _createClass(InputMeasurement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          kind = _props.kind,
          value = _props.value,
          update = _props.update,
          disabled = _props.disabled;

      var editEnabled = disabled;
      var styling = 'input-measurement ' + kind;
      var val = void 0;

      if (value) {
        val = editEnabled ? '' + value : value + '"';
      } else {
        val = value;
      }

      return _react2.default.createElement('input', {
        className: styling,
        value: val,
        disabled: !editEnabled,
        onChange: function onChange(e) {
          return update(kind, e.target.value);
        }
      });
    }
  }]);

  return InputMeasurement;
}(_react.Component);

exports.default = InputMeasurement;

/***/ }),

/***/ 739:
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

var _InputMeasurement = __webpack_require__(738);

var _InputMeasurement2 = _interopRequireDefault(_InputMeasurement);

var _measurements = __webpack_require__(760);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    measurements: store.measurements
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCustomerMeasurements: _actions.getCustomerMeasurements, createCustomerMeasurements: _actions.createCustomerMeasurements }, dispatch);
};

var Measurements = function (_Component) {
  _inherits(Measurements, _Component);

  function Measurements(props) {
    _classCallCheck(this, Measurements);

    var _this = _possibleConstructorReturn(this, (Measurements.__proto__ || Object.getPrototypeOf(Measurements)).call(this));

    _this.resetCustomerMeasurements = function () {
      var _this$props = _this.props,
          getCustomerMeasurements = _this$props.getCustomerMeasurements,
          customer = _this$props.customer;


      var customer_id = customer.id;
      var self = _this;
      getCustomerMeasurements({ customer_id: customer_id }).then(function (res) {
        self.setState({ measurements: res });
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.updateMeasurement = function (kind, value) {
      var newState = _this.state;
      newState.measurements[kind] = value;
      _this.setState(newState);
    };

    _this.state = {
      showFront: true,
      editEnabled: false,
      measurements: props.measurements
    };
    return _this;
  }

  _createClass(Measurements, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetCustomerMeasurements();
    }
  }, {
    key: 'getImage',
    value: function getImage(state) {
      var showFront = this.state.showFront;

      var alt = void 0,
          image = void 0;

      if (showFront) {
        alt = 'front';
        image = _measurements.FrontImage;
      } else {
        alt = 'back';
        image = _measurements.BackImage;
      }

      return _react2.default.createElement('img', { className: 'measurements-image', src: image, alt: alt });
    }
  }, {
    key: 'showFrontOrBack',
    value: function showFrontOrBack(boolean) {
      this.setState({ showFront: boolean });
    }
  }, {
    key: 'enableEditButton',
    value: function enableEditButton(editEnabled) {
      var _this2 = this;

      if (!editEnabled) {
        return _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Edit',
          onClick: function onClick() {
            return _this2.toggleEditEnabled(editEnabled);
          }
        });
      } else {
        return _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Submit',
          onClick: function onClick() {
            return _this2.submitNewMeasurements(_this2.state.measurements);
          }
        });
      }
    }
  }, {
    key: 'submitNewMeasurements',
    value: function submitNewMeasurements(measurements) {
      var _this3 = this;

      this.setState({ editEnabled: false });
      this.props.createCustomerMeasurements(this.state.measurements).then(function (res) {
        return _this3.resetCustomerMeasurements();
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(editEnabled) {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'measurement-buttons-container' },
        _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Front',
          onClick: function onClick() {
            return _this4.showFrontOrBack(true);
          }
        }),
        _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Back',
          onClick: function onClick() {
            return _this4.showFrontOrBack(false);
          }
        }),
        this.enableEditButton(editEnabled)
      );
    }
  }, {
    key: 'toggleEditEnabled',
    value: function toggleEditEnabled(editEnabled) {
      this.setState({ editEnabled: !editEnabled });
    }
  }, {
    key: 'validateMeasurement',
    value: function validateMeasurement(value) {
      var last = value[0];
      var lastCharInt = last.isNaN() ? true : false;
    }
  }, {
    key: 'renderInputs',
    value: function renderInputs(showFront, editEnabled, measurements) {
      if (!(0, _isEmpty2.default)(measurements)) {
        if (showFront) {
          return _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'ankle',
              value: measurements.ankle
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'calf',
              value: measurements.calf
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'chest_bust',
              value: measurements.chest_bust
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'hips',
              value: measurements.hips
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'knee',
              value: measurements.knee
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'pant_length',
              value: measurements.pant_length
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'sleeve_length',
              value: measurements.sleeve_length
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'shoulder_to_waist',
              value: measurements.shoulder_to_waist
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'thigh',
              value: measurements.thigh
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'upper_torso',
              value: measurements.upper_torso
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'waist',
              value: measurements.waist
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'back_width',
              value: measurements.back_width
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'bicep',
              value: measurements.bicep
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'elbow',
              value: measurements.elbow
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'forearm',
              value: measurements.forearm
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'inseam',
              value: measurements.inseam
            })
          );
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          showFront = _state.showFront,
          editEnabled = _state.editEnabled,
          measurements = _state.measurements;

      return _react2.default.createElement(
        'div',
        { className: 'customer-measurements' },
        _react2.default.createElement(
          'div',
          { className: 'measurements-header' },
          _react2.default.createElement(
            'h3',
            null,
            'Customer Measurements'
          ),
          this.renderButtons(editEnabled)
        ),
        this.getImage(this.state),
        this.renderInputs(showFront, editEnabled, measurements)
      );
    }
  }]);

  return Measurements;
}(_react.Component);

Measurements.propTypes = {
  measurements: _propTypes2.default.array.isRequired, // mapStateToProps
  getCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  createCustomerMeasurements: _propTypes2.default.func.isRequired // mapDispatchToProps
};
Measurements.propTypes = {
  measurements: _propTypes2.default.object.isRequired, // mapStateToProps
  getCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  createCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  customer: _propTypes2.default.object.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Measurements);

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tieImage = exports.tieImage = 'https://i.imgur.com/PUnAR7i.png';
var shirtImage = exports.shirtImage = 'https://i.imgur.com/a7t107p.png';
var suitImage = exports.suitImage = 'https://i.imgur.com/EqpP7Hs.png';
var skirtImage = exports.skirtImage = 'https://i.imgur.com/EODAyOd.png';
var dressImage = exports.dressImage = 'https://i.imgur.com/imbBrh2.png';
var pantsImage = exports.pantsImage = 'https://i.imgur.com/L0CbJYT.png';
var coatImage = exports.coatImage = 'https://i.imgur.com/S6qHRxm.png';

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FrontImage = exports.FrontImage = 'https://s3.us-east-2.amazonaws.com/airtailor-images/new_measurments_front.png';
var BackImage = exports.BackImage = 'https://s3.us-east-2.amazonaws.com/airtailor-images/new_measurements_back.png';

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAJmCAYAAAHjhFB2AAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNy0wMi0yMVQyMjozNzozNy0wNTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0wMi0yMVQyMjozOTowNy0wNTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxZGI3NzE2Zi0wOTNkLTQzMDYtYTJiOC02OWEyMGNlMTg4N2Q8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YTBiMDliMi0zOTEyLTExN2EtYWJiYi04ZjE2ZTk2MTgyYWM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3ZGQzZjZhNC1kMzhlLTQxZjEtOWMzMy1iMzM0MzEyYzdiNTQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6N2RkM2Y2YTQtZDM4ZS00MWYxLTljMzMtYjMzNDMxMmM3YjU0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM3OjM3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWRiNzcxNmYtMDkzZC00MzA2LWEyYjgtNjlhMjBjZTE4ODdkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTU5PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjYxNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+H7u/4AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAiC0lEQVR42uycW47CMAxF44x3NPtfAktCno8BUZBa8vAzsSXED22d0+sbJ60AIirPAIBSfn6LYVApBbqOuN94E3jwqMVH0ONTDt+mUZ1AuQJlEugMyNlvYAcwNHEMrFhKHOVBq4EhZ4DNS4kUzg2RwGhJHqIoJjwQCTA2UDg79UMXjYuphLiUhYsCGV97TYIh50CmZy9cUCUsgHADIEOAcCMgXf6DAXxEMpdT9eBmKmkGhCcJ0yZATvPCky5SAo5/IIcuGi8kBUzJWvtIa15v5YQNjj0DKELZ0OisNAIohI9c5YAdA4AG/wkP5Bk9W5v0cSEIWjZNOYyulcC5sTb5iOTqGlYoG04wkabf4g1MmLLRBgMKygEphVahEqKBzrcXCEiWrYbHSC4vxNSo8Yj2W/8j2o94N1/O5YXKbKc9K80sL1Snf6vp+sp/TIF46WNe2xv32//3a7PI9FWzyjAwEjiH+QuKlbk0Ii4lxEvJxYAi9TEJJsEkmASTkWASTIJJMAkmwSSYBJNgEkyCyUgwX+NzB0/jebPXgCswOwKCkVKCxYHAjMfAgoC+jgcHTkYrAxkBExlQt+Kr5sW8+YhkH+PZf6byQuYkKDoQqc4XIpaNpGIs1SNyM2qUO6itUFS8oxSpZKuyB0RQocm2A9frrOrbDtrqIW9ArMG0ADJtHOH4l5IZdh4TJv4AAAD//+ydSZLCMAxFUdo34v5nU++6i6oET5r9vaQIkGdZtoLz8hcxAQSka01JQhrlRi4xhVKV5Mud190AXY5AeANcSTCsBDHtUDJRKGWKGOkeT38jV1oBqWbEpF9OQ0KqDMYPSFAJaUkB6W6Oia6F25oNW0EgIjNYKwzk7hjxP/Wr6CWHo+dUCWkXUDsMyDCgdiiQbv65jFeU9IqphaPndcyngJQco8QPys+b74bSjuMl07B5+l3cS74zjpdyQEam6x3HVFor68wCb0Zhmx7I6sr3CVAZK+tqEbkiIU3p21y97MDC79McNuYS0m/VajpNrVTESFXKGqtpkU6RBsOGcOilaFPUkpBalhcqZYT2w+20ywu1XGb1OETp8iL9cyJ3yws3vaT1NpCZ/GOqqfWKmJ3y4jgJ6SeIghJSCUDsOWy0ckzJHdTZdjukipiSDWAABmAABmAABmAABmAABmAABg1gAAZgDMAQcPwzsN7OGhkI9YYSHQbo9lzbwAF8EpARMFUBDY2GS/oDM+URyek6a/6Z/s1t84u4GhCpBR5VGDaSERM1esQ66orUS5GiFxJShyIyyt1yYSJGO3pKuTaletcsh1lvNVuNIPOk7nWhiowjLQ2YkZOGhDRiwzXfh/YLAAD//+zd227CMBBF0Yw0///L7kOLkFBI6nhsz2Wfdyi4i2MTEudUjMif4oibko5n7b6fxpuomg/Ghw/lM3O7cnC3cezOKEiGHiuAAYjf6QswIZGUbh8FSZLFM2DCASnRPgqSre9BAAOQu4SemhQkAIkIpm6LXB9N37dw/nIEWkHirkWa54WzAmQ7kmb0OMkAhhZZNy5L2kcB4rpFrP6eeAIDEv/jYtY+CpCUQKa1j4KkfLt2tY8WgQKQvvcnT8FI4AEDyYTxOgfzvtmSXDxpA0haIO3jpmOPpiRx2D4gsURi/C3pbnW9on28HzxLB8Tia3Vv+zQnSGgRgzGYtWm6DExdtIgjILPAjLYPLeIYyQowT9sHJM9ad9kYeLhXEECctYg3MDSJ8xbJAkYS4pFoHxDvYJrRNy+QFJ+SsvxkEa4po175GPkni9DTaYZrq73/ZJFqsZ5x94ZV7VMGSXYws9qnJJBqYEYXziBxBKYde687Pm+f30tE36/Lyc3YAXP/id/1WiIf4yk1JfGPCRA2MCaAIYAhgCGAIYAhBDAEMAQwBDAEMAQwhACGAIYAhgCGAIaUzbcz7l6nKXIWXM2U3HaVGADpBXP1xOApgmQEDO1TDIglGNqnCJJZYGifhEBWgaF9EiHZAYb2CYxkNxjaJxAQj2BoH+dIPIOp3D4S4UVq4AFtIAFM9vaR6MKz7EBV4U5xgEk6dcmROBX2uIt2pzjAJGwfOYpGj9qx2na1zoC1xsFV8v9wTi/pyg8AAAD//+zdW24bMQyFYUvljrr/takPadAiie3R6Eby/OelQJC0tvwNSdUT+VuFKeVv5f13Pq1i9pwh/HEmsN9F+KH7GNfM0yF49geY0pISY/n6dQY9wHSDAI14S2oDP8P/wwAFOLSk9W1Fbr6pQlBaIIi0pCQVRb5NVbCEq2aASfqCpURjyaB4fUwFMECRhFPBwnyjACb6wjfAAEUCjbG4RxJ2ljGwACULGKoKYIACGKDch3Ltvum2Hd2Le40NLK4rSvvy5/FqZUBxiaW5qTZOwADl/rocrTYGljBQXMAxoLiZU0Z+vmQCQ/tZvy7bqo0BJTSU7XAMLCmgbINTFzxQsPi5gKb/uxZ8QYCyudoYUNJCWQLHwOJum+wajolDyV5V3j3eshIMUPKtS3e1MaDQknvgmNCiKM0py+ConA9DVZmUKx903oAiA2W4Jf3/lzSgUIG/g/n1+9l2KwIc5pQZ6/XiXuN6Y7HKw+ed8DOrii6WN2tgAxOzl/mG9jMXyvAM8wrOyTZF+9kI5c622hMcqsq8tepag7vvJZVDOyqgHKgqo2BOzDdAOQxlFMyuNsWc4gTKLDAr4VBVnGGZCebqfNOAEhPKKjAj1QYojqGsBNMLhznl4DbZE5iebThQHFeV3WCubMOB4hzKbjCz4QDl0BqcOqe3geUtlOJxDSLdoklVcbAGHOwMlJRgSmI4JdKFYkEXtyWH4vY51qSLHb2quL0gvFcYr3f7SbSfDENvxt9mCNVeI35e0qsXpYCFCtNTbT6/3oACmChtKiWUDGC8wQm5TVbZVnubb8JukxUrzMn5JnX7UQCzq03JQckOZhUciTlFZYZZPd/IzCnKFWbGfCPbftTB9LYpoADmApyPT1T9+NrPJzFJH4xYH6R1fJ/8KZo1wAu167E0oPivMM0hHNpPgBmmXdyVEGYYhkoqDGioMIQAhgCGAIYAhgCGAIYQwBDAEMAQwBDAEMAQAhgCGAIYAhgCGAIYQgBDAEMAQwBDAEMIYAhgCGAIYAhgCGAIAQwBDAEMiQWGM+bIUwf25ps5OgwoXS3J6wdvkgNYemYY0OSHcuk1thv6aFNCFWUEDHCEoczYVjPfiGEZBcN8k3ROmd2SaFNCFWUVGOAkhzKzJTHfiGBZCYb5JvCcsrMl0aaSVZQTYICTqIJXhScJlpgVhmqT4IIzJ08eOEEqc3W0GLSqAG28sjDa2+RoLYk2FezCsQCL1oDiJzXIIhawAIb5JuAFYUGvwpYESrhY8MVuQKElZZ5vwrfVLL8qW4BNS8rQptIN6hl/Gd/L1ZxyV5f59IYiDpaW5LxNSbwPZg+NrIQj9Yap2oFCs9uF3LvrqidQFWfwaElJ25T8/Tr2IFfgcGPX50K0xu20hBmGAIYAhoTLHwAAAP//7N1LchNBEEXRaKt2pP0vwUtyNANmNii6VR9XZp47dgCW0ofXQJhLG+Y4vm2+x9MrV6sz5cPA16d3tucoLtjhqVp3QHn1cf7kQYBRNyqwEWC0BJWrPy5wACOgLPl5YQMYQWXZrwc4gBFQrBsBBiq5Pg/gAEZAsW4EGKhYNwKMgGLdAEZQsW4EGKBYNwIMVGTdAEZAsW4EGKjo30EFMFARVAADFAFFgIEKVAQYoAgogIGKUqDS/72lz1LwvfE9jAEDFCtl7L34a3DAQAUqS+6l/D/yqwIMUKCyw72UWzeZgYEKUHa+lxLrJhMwQIFK5HtJuW6iAwMVoGS8lzTrJhowQIFKxXsJu25asBdXQKl+L6HWTXMgslKsm+zAQAUo7iUhNs2RyErxKJUBGEcCFPdSbN00RwIVoFg3UYBxJEBxL9bNUGAcCVTci3UzFBhHAhW3Yt1MA+ZwQECBivta8YgEG6h4393WNGBgY6XIfXUA83i+8xx2OEgrRYnu6+/3ML5lQes8tOPNT8ixWimKcV9dN9AGHuDR8cme3nSgKAcqI4F59YuybqwUxbmvKXfQFh1u5XVjpSj1SvktYKquGytFpVbKDsBkXzdWisqulB2Bib5urBRZKUGAibJurBRZKQmA2WXdWCmyUpIDs3rdQEVWSmFgZqwboMhKAcy0dQMVWSmAWbZugCKoACbcuoEKUMrdQHMrQBFUAAMVxQDFHQBm+lE6MCtFgFlyqI7PSgGMlh2xw7RSAKNbB+eba1kpAszW2DhoKwUwun2k1o2VAhhZN1aKAGPdVP0isVIAI+vGShFgrBuoCDDAKYANUACjoOsm2//CABXAyLoBigADm7lfzFARYDxKDVs3/hpZgLFuhq4bK0WAUce6+fr8/8c+nlARYDR03QBFgLlw+Ie3v3PdQEWAufw7+Amd2+sGKALMjS+oyP95m7RdH16Cl+icfreWLJhVjwv+/EayYJaiIwkwkgAjCTCSBBhJgJEEGEkCjCTASAKMJAFGEmAkAUaSACMJMJIAI0mAkQQYSYCRJMBIAowkwEgSYCQBRpIAIwkwkgAjSYCRBBhJgJEkwEgCjCTASBJgJE3puPJB7c0f7PT6SlAZBcyrnwg2ElCGAmPdSFBZAox1IwFlGTDWjVQYlZXAWDdSIVB+GxjYSMlR2QUYj1JSQlR2BMa6kRKAEgUY60YKiko0YKwbASVoLdmLDxxBBTDWjZQRlOzAWDeCCmCsGwEFMNaNBBXAWDcCCmCsG0EFMLJuBBTAWDeCCmCsG0EFMIKN90+A8SglqABG1g1QACPrBioCjHUjoABG1g1UBBjrBigCjKwbqABG1g1QBBjrBioCjCqsG6AARtYNVAQY7blugAIYwWYoNlARYDT0UQoq+nkU5+nfb0ma04eXQBJgJIXrDwAAAP//7N1bbiLJGkZRAzEj5j8ED8nKfmkky13uAjIi87+s9Xrkkg3B5gvKp/qvV6TL5cfV+nb3qPX0OCg1Pmv5+vSM7jkMT3y04gNeno1KzcjgakSIsPz83/zNAJYL06JS+7qE5cKyqGw7vhbEhSVxcFXCtYili8NVCcvFFShduLBcaLRUrBgsF2EpvZSwXGgUFUvGcqFoVLbA3xuWC5aKFYPlIiwWFpYLrhmWjOWCd32hxHKxVKwYLBeEpd8yExe80AQV1yIvrE6Pg6uS5YKwWHCWC6JiyWC5eFdGiC0XvECsGMsFYbH8sFxEBUvGcsG7q4BbLjjoVgyWi7BgMYqLA43QuxbhAIO4iAqv8rmLuAgLoiIuiIqoIC6iIiyIi7AgKuIiKogK4iIqooK4iArCIi7CgqggLqLSPCq3++zzUjt2X5/iIiqictJ5qR8YcREVYTntvPinHcRFWERl6VkRmeZxERVRWX1eWkemY1xERViOPi8tP4/pFhdhEZWzzkq7FdMlLqIiKlHOS5vIVI+LqIhK1PNS/qpUNS6iIiwZzkvpFVMxLsIiKtnOSsnIVIqLqIhK9vNSKjIV4iIqolLtvJT4PCZzXERFWCqfl/QrJmtchEVUupyVtJEZSR9oRKXbeUkXmZHsgUVUup+XNJ/HjAQPJMLivCRcMSPBA4ioOC8JIzMcEkTFVal6XBwSYXFeCq2Y4aAgKiJTMS4Oiqg4L0UjMxwSRKV8ZE55TodDgiuQFZM9Lg6KqDgrjSIzHBRRERaRyRYXh0RUnJf4kVl2FoZDIiyiYsWsOBfDQREVUWFFZIaDIirCworIDIdEVESFX56rXWdoOCTCIiqsWDFXB6VcVISFEM/hePMAOzCWiqg4X0uuRRcHSFhExdlaEReRERVRcb6WxsVVSVSExflaGhcrRlRwvpbFRWRcgXC+XojL7f7uL9OIjKhQ5Xzd7j/PwV+/drx4qN6NjEPpCkT+8/XSGRhv/uGXN38YB1RUyHm+Xj4He3/9X2RcgbBWpsblpbuXyIgKfaIyKy57VszjazZPurBQJyoz4+KqZK1Q42xNPQer/plLVyVRoeFaWR2XGVelagffFYg2UVkdl1mR2Zo+6aJCqivQGXHZG5nMK8YViJZROTou33+w6lclUaHdFShCXCpflVyBEJWT41LtqiQqtL8CRYtLhci4AmGtBI7L9wcky+cxooKoJIrLnhXz+Jot6JMuLLSJStS4RL0qiQpR37TCnoMR/EGPEBlXIKyVgnH5/kAe/XmMtYKoNIjLnhXz+Jpt8ZMuKrS9AmWPyxFXJVcgRKVxXFZclUQFVyBxmXpVivwzISqpjSJP4rbzyRQVXIHEpVxkREVYSp6DUfQJ3j7iB0ZURKX0ORiFn+zIK0ZYRKX8GRgNnvxIkREVUWlzDkajw3BmZERFWNqdg+GciAqiIi7CgqiIi6jQOCrOgbiICtaKuOQ4jA6WqPCvq4cgzIzm/OdOWCyXFIFx4Oq/IXiOxUVkcAUSF5FBVErwmUuO+c2850BYxCW87eDDzXlrRVhci04JTJb/SqSoWCriknTBRP2vRIqKqIhL08hYMTGi4jkQF5HBWhEXkfF5jKiIC6FWzONrHH5RERdclRJExWN5IL/nck5k3nkx+f2Y/WtFWCwXK8aScQWyXNgTme3gF1rWqAiL5cKBS6b6ivG5iuXC5Mgc+c5e8QokLJYLE1fM42uyv7Bcf8QFVyVXIMRFZKwVxIX/eSFV+6trUREXkq+Yx9dEeVGKirjgqhQiKsIiLoiMtYK4VItM1M9jRKUxv0RXJzCR/q8EfmUfy8VVaeqK8bkKlkuTyBy5OPzKPpaLFTN1ybj+YLk0jsyKz2N8roLlwq4l86cVIyqIC398gT8fh6/P34Nyu4sK4sKUFWOp8DSfuYjMtvDPxnJBZKYtGVGh9XLxApj/uPh9FdrHZROZqZEQFVyLfonMjL9i7XpVEhUsF1cmEBdhAdeiFpFxVQLLxaIBcREWcC3CVQksF2sGxAUQFwBxAcQFEBcAcQHEBRAXAHEBxAUQFwBxAcQFEBcAcQHEBRAXAHEBxAUQFwBxAcQFEBcAcQHEBRAXAHEBxAUQFwBxAcQFEBcAcQHEBRAXAHEBxAUQFwBxAcQFEBcAcQHEBRAXAHEBxAUQFwBxAcQFEBdAXADEBRAXQFwAxAUQF0BcAMQFEBdAXADEBRAXQFwAxAUQF0BcAA6Ky8XDBKxaLgIDPFrwVA/Gi3/ox8fHx+bxhZZRWbJc3ioX0DMsry4XSwZEZelymfoNACGjsvt1PSZ+M1YMNF4qK5bL9OIBucMyc7lYMiAqS5fLYd84EPuWMQ76IawYKL5Ujl4uh5YSiHOTGCf+gJYMFIzKGcslxA8MzaJy2uvs2vmHB2ul1rXIVQka3AiuHhhwBaq8XKwYKPaGfA3+oFkykHTpj0QPoCUDCaKSYbmkfEDBms+zXKwYRCWha+IH25JBWCwXSwa6fQxw9USAVW65WDFYKpaL8kPv5X31hIE3QtciVyW88Vku3iGg96IeTZ9YSwZRsVw80VjNlosVA97Ami8X7ywIi+ViySAqlosDgvWL5WLF4I3IcvGOhLBYLpYMooLl4mBhxVouVgzeUCwX72QIC+LiAOKNw7XIVQlvFJaLdzyExXLBkvFcYbk4uFiZlgtWjOBbLninFBYsF0sGUbFccOCtRcsFK0a4sVy8wyIslguWjKhYLnihWH2IixcNIuxahKuSqFgueEFZc1guVoywYrngHVxYLBcsGVHBcqHiC9HnKpYLVoxAYrl0i8wl4feM5YIlIypYLsR8AftcxXLBirFUsFyIvRiERVxwVXIFwrWIuFclQbFcEJnpIRAWLBemLhlRwXJhaiB8rsJ/D8W2+TeIAMsFEBdAXADEBRAXQFwAZvoHAAD//+zdUW7jOhZFUavMGXn+Q8iQAr3f4FWFthNJvIdcC2igPxpJLJGXG0xV9SG/it62J3/E4f7wpGF+z4aJPwtVweeHZ8C4IXHQH3/zNwCAM4Plu/+tkAHEC1AuVt75OmIGEC9AuWB59XsIGUC8AOVi5Z3vL2YA8QKUC5ZXfzYhA4gXECvRP7eYAfECCJbYzyRkQLwAYiX684oZEC+AYIl9FkIGxAsgWIQMIF4AsTLi+YkZEC+AYIl9tkIGxAsgVqKfu5gB8QIIlth3ImRAvICD0SOIfl9iBsQLCBZi36WQAfECYoXo9yxmQLyAYCF2DQgZEC8gVoheH2IGxAsIFmLXjpAB8QJiheh1JWZAvIBgIXbNCRkQLyBWiF6PYgbECwgWYteqkEG8gGABIQPiBcQKjFjfYgbxAoIFYte+kEG8gFiB6H0hZhAvIFggbs8IGMQLiBUoT7AgXkCwgFgB8QJiBQQLiBcEC4gVEC8gVkCwgHhBsABiBcQLYgUEC4gXECwgWEC8IFhArADiBbECggXEC4IFSI+V+6P6bBF5yT4/xAtiBQTLcvPF/5kk4gXBAmIlerbsnjfiBbECgiV1vriVQbwYKIBYiZ4tbmXECwYK4CCMnS9uZcQLBgqIFaJni1sZ8YKBAoLFfJnmc3j34gUDBcSK2RL7Oa0L8YKBAoLFfIn+/NaMeMFAAbFivsQ+G+tJvGCYgGAxX6Kfm7UmXjBQQLCYL7HP1BoULwYKIFbMFiGDeDFQQLCYL4x4D9aueDFQQKxgtsS+J+tavBgoIFjMF6LfnzUvXgwUECtmC7Hv134QLwYKCBbzhej3bq+IFwMFxIrZQuy6sI/Ei4ECgsV8IXq92GPixUABsWK2ELuelt9/bfEFAAgW84X0dbbc3myLvmhArJgtzLgOl9i3bYEXCQgW84VV1+eUe7pN/MIAwWK+YO1OuNfbRC8FECtmCywQMi34wQOCxXyBY9Z71IxogQ8YECtmC5y3H8rPj1b8AQKCxXyBsfuk3GxpRR8UIFbMFqi3j0rMnVbgQQCCxXyBzP01ZCa1gR8YECtmC8yz/y6bV23AhwMEi5kCc+7LS+bXVfGyGTwgVsQKmF9J8dL7sIYSNjyCBcyv8vHSewgGFja7WAHMr9Lx0ntIhhk2vGABzK/y8dJ7eAYdNrtgARafXy344RqA2PBiBVhwfh0TL/fHiH+0xq0MNrxgASrNrvvj2Sw45Gc46+ZlxD9a41YGsSJWgPHz6/R50AZ8CLcy2PCCBRArpeOl9yHdyiBWxAogWMrHS+/DX30rYxjb8AgWML/CZkG1v2109a2MXy/Z7NgDYH6FzYPKf1XarQyCRbCA+WUWRMVL76G6lUGsiBUwvxadBy30BbuVQbAIFjC/Fp0FbZKX71bGZseaBPNrkXnQJlwYbmVseMECrDy/pp8FbYFF41bGZhcswOzza6lZ0BZbUP6BPBterACCRbxMcwi4lREsggUQK+Il9oBwKyNWxAogWMRL9OHhVkawGFAgVswC8RJ7sLiVESsGFAgW80C8RB86/iq2YDGgQKyYBeIl9kBa6ddLYsWAAsFiHoiXCQ+r2W5lBIsBBYLFLBAvCx1kibcyYsWAArFiHogXh9ywmNkLb3jBAiQGi1kgXpY+AEfeyogVAwrEinkgXvj1Ztgm3fSCBUibXWaBeOEHm0VkGFAgVswDxIuQwYACwWIWiBdGbDAxY0iBWDELxAuxB7GQMaBAsJgH4oXoQ3rzLACxgngh8QDfFvqsgGAxD8QLCBZArCBewIACwWIeIF4QLMC0wWIWIF4QLEDpWDELEC/EDknDC9YJFvsd8cKUw9Nwg3lixZ5GvLDccDX0IC9Y7FvEC4auoQilY8XeRLzAi0PZsIRxwWL/IV7ggGFtmCJWBAviBQ4ZclcNWbcyCBbBgniBU4bfFQPYrQxiRawgXuCU4ehWBgQLiBdiQ+aqwe1WBrEC4gVOGapuZRAsggXxArEhc9XAFzLMEizWL+IFisWMXy8hVgQL4gViQ2ZEzDgkqBAs1iHiBSaJGbcyzBor1hriBRYImREx43ARLGIFxAscNvzdylA9VqwZEC/QPRTcylAhWKwLEC/wo0PDrYxYESwgXkDIvHFoOswECyBe4LBDxq2MWBErIF4gNmbcyggWwQLiBWJD5qoD0q2MWAHxApxyeLmVESyAeIHYkLnqYF3tVkasgHgBLjr03MoIFkC8QGzIXHUgJ4eMfygOxAtQOGb8esntCiBeIDZkRsTMqEPc7QogXmDCmJnpVsbtCiBeYLGQGREz+4FfS6wA4gUWj5mKtzJuVwDxApQJmf9/n31QsIgVEC/AZCFzbFB8frwSMn+7PwQLIF6AHx322wSfARAvwKIhUzlmxAogXhY7nLbbuD+DQG7MbIV+FgDxsvCBtH85lAQN78TDdvH3AxAvvBw0YoZna2Y74WsCiBfeOjC+ixnoraHtwDUI8JI/HgFPDpf9y38AQLwQETAAUIZfG/HbmPHrJQAu5eaFo4LGr5cAEC/EBcx3QQMA4oWooBEwABzGn3lhRMwAwI+5eQEAxAsAgHgBABAvAIB4AQAQLwAA4gUAEC8AAOIFAEC8AADiBQBAvAAAiBcAQLwAAIgXAADxAgCIFwAA8QIAIF4AAPECACBeAADECwAgXgAAxAsAgHgBAMQLAIB4AQAQLwCAeAEAEC8AAOIFABAvAADiBQBAvAAA4gUAQLwAAIgXAEC8AACIFwAA8QIAiBcAAPECACBeAADxAgAgXgAAxAsAIF4AAMQLAIB4AQDECwCAeAEAEC8AgHgBABAvAADiBQAQLwAA4gUAQLwAAOIFAEC8AACIFwBAvAAAiBcAAPECAIgXAADxAgDwe+2gr7N9+e+7xwoA/KMRSsWLkAEATguWs+Ol98OLGQAQK6XjpffhhAwACJby8dL70GIGAMRK6XjpPRQhAwCCpXy8CBkAECyx8dJ7iGIGABaKlcR46T1kIQMACwRLerz0Hr6YAYDJYmW2eOm9HCEDgGCZUFvopYkZAMSKeIl9qUIGAMEiXqJftpgBQKyIl9jFIGQAECziJXqRiBkAxIp4iV1EQgYAwSJeoheXmAFArIiX2MUnZAAQLOIlelGKGQDnAuIldtEKGQDBgngRMgAIFvHCiEUuZgDECuIldhMIGQDBgniJ3hxiBkCsIF5iN4+QARAsiJfoTSVmAMSKeCF20wkZAMEiXojejGIGQKyIF2I3q5ABBAvihehNLGYAsYJ4IXaTCxlAsCBeiN78YgYQK4gXYoeDkAEEC+IFIQMgWBAvjBgmYgYQK4gXYoeNkAEEC+KF6CEkZgCxgnghdkgJGTALQLwQPbzEDIgVEC/EDjchA4IFxAvRQ0/MgFgB8ULsUBQyIFhAvBA9LMUMiBUQL8QOUyEDggXxAtFDVsyAWEG8QOwQFjIgWBAvIGRArIB4gRGDW8wgWEC8QOxQFzIIFhAvED3sxQxiBcQLxB4GQgbBAuIFog8JMYNYAfECsYeIkEGwgHiB6MNFzCBWQLxA7OEjZBAsIF4g+lASM4gVEC8Qe2gJGcECiBeIPszEjFgBxAvEHnZCRrAA4gWiD0ExI1YA8QKxh6SQESyAeAEhg2AB8QKMOFTFjFgB8QLEHrpCRrCAeAGiD2MxI1ZAvACxh/XuGQDiBUg+xPdFPicgXoAJD/l9os8CiBdgsZBJiBmxAogX4Ns42Av+TADiBXg5GvZB3xdAvAC/jor9xK8N8Hxo7Lt/EgIAyPHHIwAAxAsAgHgBABAvAIB4AQAQLwAAt9vtdvtvANaTpNKa5u7nAAAAAElFTkSuQmCC"

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy9PcmRlcnNTaG93LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanM/NTI1OSoqKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy9tZWFzdXJlbWVudHMvSW5wdXRNZWFzdXJlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy9tZWFzdXJlbWVudHMvTWVhc3VyZW1lbnRzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9pbWFnZXMvZ2FybWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2ltYWdlcy9tZWFzdXJlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2ltYWdlcy9zdXBwbGllcy5wbmciXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFVzZXIiLCJzdG9yZSIsImN1cnJlbnRTdG9yZSIsIm9wZW5PcmRlcnMiLCJzdG9yZU9yZGVycyIsImN1cnJlbnRPcmRlciIsInVzZXJSb2xlcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEN1cnJlbnRPcmRlciIsInVwZGF0ZU9yZGVyIiwic2V0TG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwic2V0R3Jvd2xlciIsImRpc3BhdGNoIiwiT3JkZXJzU2hvdyIsInByb3BzIiwiY2hlY2tPcmRlckluIiwib3JkZXJJZCIsImlkIiwic3RvcmVJZCIsInN0b3JlX2lkIiwidGFpbG9yIiwiZGF0YSIsIm9yZGVyIiwiYXJyaXZlZCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsImZ1bGZpbGxPcmRlciIsImZ1bGZpbGxlZCIsInNldFN0YXRlIiwibG9hZGluZ0xhYmVsIiwidGhlbiIsInJvbGVzIiwic2hpcG1lbnRBY3Rpb24iLCJzaGlwbWVudFR5cGUiLCJoYXMiLCJtYWtlU2hpcHBpbmdMYWJlbCIsInBvc3RTaGlwbWVudCIsIm9yZGVycyIsImFjdGlvbiIsInR5cGUiLCJyZXMiLCJib2R5IiwiZXJyb3JzIiwibWVzc2FnZSIsImtpbmQiLCJyZWZyZXNoQ3VycmVudE9yZGVyIiwidG9nZ2xlTWVhc3VyZW1lbnREZXRhaWxCdXR0b24iLCJzaG93TWVhc3VyZW1lbnRzIiwiYm9vbGVhbiIsInJlbmRlckFycml2ZWRCdXR0b24iLCJyZW5kZXJCdXR0b24iLCJkaXNhYmxlZCIsInJlbmRlckZ1bGZpbGxCdXR0b24iLCJyZW5kZXJDb21wbGV0ZWRCdXR0b24iLCJyZW5kZXJQcmludExhYmVsIiwic3RhdGUiLCJvbkNsaWNrIiwicHJpbnRQcm9tcHQiLCJjbGlja0FyZ3MiLCJzaGlwbWVudERpdiIsIndpbmRvdyIsInByaW50IiwicmVuZGVyTm90ZXNGb3JtIiwiZGlzcGxheU5vdGVzRm9ybSIsImlzVGFpbG9yIiwiaXNBZG1pbiIsImFkbWluIiwicHJvbXB0IiwicGFydHkiLCJub3Rlc0ZpZWxkIiwic3VibWl0Tm90ZXMiLCJlIiwidXBkYXRlTm90ZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlclRvZ2dsZU5vdGVzRm9ybUJ1dHRvbiIsInNob3dIaWRlTm90ZXNGb3JtIiwicmVuZGVyUHJpbnRJbnN0cnVjdGlvbnMiLCJyZXF1ZXN0ZXJOb3RlcyIsInJlcXVlc3Rlcl9ub3RlcyIsInByb3ZpZGVyTm90ZXMiLCJwcm92aWRlcl9ub3RlcyIsImN1c3RvbWVyIiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwib3JkZXJOb3RlcyIsInRhaWxvck5vdGVzIiwicHJpbnRhYmxlQ29udGVudCIsInJlbmRlckxpc3QiLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJub3RlcyIsInNlbmRpbmdNZXNzZW5nZXIiLCJvcmRlcl9pZCIsIm1hdGNoIiwicGFyYW1zIiwiaXRlbXMiLCJtYXAiLCJpIiwiaXRlbV90eXBlIiwibmFtZSIsInNvcnRlZEl0ZW1zIiwiU2V0IiwiZ2V0VW5pcXVlSXRlbVR5cGVzIiwiaXRlbSIsIml0ZW1UeXBlIiwic29ydGVkSXRlbXNJdGVyYXRvciIsInZhbHVlcyIsInNvcnRpbmdJdGVtIiwiY3VycmVudEl0ZXIiLCJuZXh0IiwiY3VycmVudFZhbHVlIiwiZG9uZSIsInB1c2giLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVuZGVyTGluayIsInRleHQiLCJlbmFibGVkIiwicGF0aCIsImZpZWxkIiwicmV0YWlsZXIiLCJ0aXRsZSIsImFsdGVyYXRpb24iLCJpbmRleCIsImhlbUFsdHMiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInNwbGl0QWx0Iiwic3BsaXQiLCJhbHQiLCJzcGVjaWZpYyIsImFyZ3MiLCJsaW5rRGl2IiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJhbHRlcmF0aW9ucyIsInJlbmRlckFsdGVyYXRpb24iLCJpdGVtQ2FwdGlvbiIsImltYWdlIiwiZ2V0SW1hZ2VGb3JJdGVtVHlwZSIsInNvcnRJdGVtc0J5VHlwZSIsInJlbmRlckl0ZW1DYXB0aW9uIiwiY291bnQiLCJvdXRwdXQiLCJyZW5kZXJFbXB0eURpdiIsIm9yZGVyRWRpdFBhdGgiLCJyZW5kZXJFbXB0eUJ1dHRvbkRpdnMiLCJub3Rlc0Zvcm0iLCJhcnJpdmVkQnV0dG9uIiwiaW5zdHJ1Y3Rpb25CdXR0b24iLCJmdWxmaWxsQnV0dG9uIiwibGFiZWxCdXR0b24iLCJtZXNzZW5nZXJCdXR0b24iLCJub3Rlc0J1dHRvbiIsImNvbXBsZXRlZEJ1dHRvbiIsInJlbmRlclNlbmRNZXNzZW5nZXIiLCJyZW5kZXJPcmRlck5vdGVzIiwiY3VzdG9tZXJMaW5rIiwicmVuZGVyRW5hYmxlZEN1c3RMaW5rIiwicmVuZGVyRGlzYWJsZWRDdXN0TGluayIsInRvZ2dsZUZ1bmN0aW9uIiwibWFpbkNvbnRlbnQiLCJtZWFzdXJlbWVudHMiLCJyZW5kZXJNZWFzdXJlbWVudHMiLCJlZGl0QnV0dG9uIiwicmVuZGVyRWRpdE9yZGVyQnV0dG9uIiwibWVhc3VyZW1lbnRzQnV0dG9uIiwicmVuZGVyRGV0YWlsc09yTWVhc3VyZW1lbnRzQnV0dG9uIiwiZGV0YWlscyIsInJlbmRlck9yZGVyRGV0YWlscyIsImNvbnRyb2xzIiwicmVuZGVyT3JkZXJDb250cm9scyIsImhlYWRlclRleHQiLCJzZXRNYWluQ29udGVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJDYXJ0UmliYm9uIiwicm90YXRlIiwiaW5jbHVkZUxpbmsiLCJsaW5rIiwibGVuZ3RoIiwicmVzZXRDYXJ0IiwiU2VjdGlvbkhlYWRlciIsIklucHV0TWVhc3VyZW1lbnQiLCJ1cGRhdGUiLCJlZGl0RW5hYmxlZCIsInN0eWxpbmciLCJ2YWwiLCJnZXRDdXN0b21lck1lYXN1cmVtZW50cyIsImNyZWF0ZUN1c3RvbWVyTWVhc3VyZW1lbnRzIiwiTWVhc3VyZW1lbnRzIiwicmVzZXRDdXN0b21lck1lYXN1cmVtZW50cyIsImN1c3RvbWVyX2lkIiwic2VsZiIsInVwZGF0ZU1lYXN1cmVtZW50IiwibmV3U3RhdGUiLCJzaG93RnJvbnQiLCJ0b2dnbGVFZGl0RW5hYmxlZCIsInN1Ym1pdE5ld01lYXN1cmVtZW50cyIsInNob3dGcm9udE9yQmFjayIsImVuYWJsZUVkaXRCdXR0b24iLCJsYXN0IiwibGFzdENoYXJJbnQiLCJpc05hTiIsImFua2xlIiwiY2FsZiIsImNoZXN0X2J1c3QiLCJoaXBzIiwia25lZSIsInBhbnRfbGVuZ3RoIiwic2xlZXZlX2xlbmd0aCIsInNob3VsZGVyX3RvX3dhaXN0IiwidGhpZ2giLCJ1cHBlcl90b3JzbyIsIndhaXN0IiwiYmFja193aWR0aCIsImJpY2VwIiwiZWxib3ciLCJmb3JlYXJtIiwiaW5zZWFtIiwicmVuZGVyQnV0dG9ucyIsImdldEltYWdlIiwicmVuZGVySW5wdXRzIiwidGllSW1hZ2UiLCJzaGlydEltYWdlIiwic3VpdEltYWdlIiwic2tpcnRJbWFnZSIsImRyZXNzSW1hZ2UiLCJwYW50c0ltYWdlIiwiY29hdElt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O0FBQ0EsSUFBTUMsZ0NBQVksaUNBQWxCO0FBQ0EsSUFBTUMsa0NBQWEsaUNBQW5CO0FBQ0EsSUFBTUMsa0NBQWEsaUNBQW5CO0FBQ0EsSUFBTUMsa0NBQWEsaUNBQW5CO0FBQ0EsSUFBTUMsZ0NBQVksaUNBQWxCLEM7Ozs7Ozs7Ozs7Ozs7QUNOQSxJQUFNQyxrQ0FDWCwrRUFESztBQUVBLElBQU1DLGdDQUNYLCtFQURLLEM7Ozs7Ozs7QUNGUCxpQ0FBaUMsbzI5QiIsImZpbGUiOiI2LjJkZjJhNjc1ZGJjNzJlOTJhZWRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSwgdW5pcUJ5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgZ2V0Q3VycmVudE9yZGVyLFxuICB1cGRhdGVPcmRlcixcbiAgc2V0TG9hZGVyLFxuICByZW1vdmVMb2FkZXIsXG4gIHNldEdyb3dsZXIsXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBzaGlwbWVudFR5cGVzLFxuICBzaGlwbWVudEFjdGlvbnMsXG4gIGxhYmVsU3RhdGUsXG4gIG1lc3NlbmdlckFsbG93ZWQsXG4gIGZpcmVTaGlwbWVudENyZWF0ZSxcbn0gZnJvbSAnLi4vLi4vc2hpcHBpbmcvc2hpcHBpbmdGdW5jdGlvbnMnO1xuXG5pbXBvcnQge1xuICB0aWVJbWFnZSxcbiAgc2hpcnRJbWFnZSxcbiAgc3VpdEltYWdlLFxuICBza2lydEltYWdlLFxuICBkcmVzc0ltYWdlLFxuICBwYW50c0ltYWdlLFxuICBjb2F0SW1hZ2UsXG59IGZyb20gJy4uLy4uLy4uL2ltYWdlcy9nYXJtZW50cyc7XG5cbmltcG9ydCBzdXBwbGllc0ltYWdlIGZyb20gJy4uLy4uLy4uL2ltYWdlcy9zdXBwbGllcy5wbmcnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuLi8uLi8uLi9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IE1lYXN1cmVtZW50cyBmcm9tICcuL21lYXN1cmVtZW50cy9NZWFzdXJlbWVudHMnO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vLi4vU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgT3JkZXJDb21wbGV0ZSBmcm9tICcuLi8uLi9wcmludHMvT3JkZXJDb21wbGV0ZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgY3VycmVudFN0b3JlOiBzdG9yZS5jdXJyZW50U3RvcmUsXG4gICAgb3Blbk9yZGVyczogc3RvcmUuc3RvcmVPcmRlcnMsXG4gICAgY3VycmVudE9yZGVyOiBzdG9yZS5jdXJyZW50T3JkZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgZ2V0Q3VycmVudE9yZGVyLFxuICAgICAgdXBkYXRlT3JkZXIsXG4gICAgICBzZXRMb2FkZXIsXG4gICAgICByZW1vdmVMb2FkZXIsXG4gICAgICBzZXRHcm93bGVyLFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5cbmNsYXNzIE9yZGVyc1Nob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBvcGVuT3JkZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY3VycmVudE9yZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHVzZXJSb2xlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRDdXJyZW50T3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZU9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlczogJycsXG4gICAgICBkaXNwbGF5Tm90ZXNGb3JtOiBmYWxzZSxcbiAgICAgIHNob3dNZWFzdXJlbWVudHM6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xhYmVsOiBmYWxzZSxcbiAgICAgIHNlbmRpbmdNZXNzZW5nZXI6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIGN1cnJlbnRTdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBvcGVuT3JkZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgY3VycmVudE9yZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG1hcFN0YXRlVG9Qcm9wc1xuICAgIHVzZXJSb2xlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRDdXJyZW50T3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHVwZGF0ZU9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICBzZXRMb2FkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIHJlbW92ZUxvYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgc2V0R3Jvd2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIH07XG5cbiAgcmVmcmVzaEN1cnJlbnRPcmRlcigpIHtcbiAgICB0aGlzLnByb3BzLnNldExvYWRlcigpO1xuICAgIGNvbnN0IHsgb3JkZXJfaWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgIGNvbnN0IHN0b3JlX2lkID0gdGhpcy5wcm9wcy5jdXJyZW50U3RvcmUuaWQ7XG4gICAgY29uc3QgeyBnZXRDdXJyZW50T3JkZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBnZXRDdXJyZW50T3JkZXIoc3RvcmVfaWQsIG9yZGVyX2lkKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlZnJlc2hDdXJyZW50T3JkZXIoKTtcbiAgfVxuXG4gIGdldFVuaXF1ZUl0ZW1UeXBlcyhpdGVtcykge1xuICAgIHJldHVybiB1bmlxQnkoXG4gICAgICBpdGVtcy5tYXAoaSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IGkuaXRlbV90eXBlLm5hbWUsIGl0ZW1zOiBbXSB9O1xuICAgICAgfSksXG4gICAgICAndHlwZSdcbiAgICApO1xuICB9XG5cbiAgc29ydEl0ZW1zQnlUeXBlKCkge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHMuY3VycmVudE9yZGVyO1xuXG4gICAgaWYgKGlzRW1wdHkoaXRlbXMpKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBzb3J0ZWRJdGVtcyA9IG5ldyBTZXQodGhpcy5nZXRVbmlxdWVJdGVtVHlwZXMoaXRlbXMpKTtcblxuICAgIGZvciAodmFyIGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbS5pdGVtX3R5cGUubmFtZTtcbiAgICAgIGNvbnN0IHNvcnRlZEl0ZW1zSXRlcmF0b3IgPSBzb3J0ZWRJdGVtcy52YWx1ZXMoKTtcbiAgICAgIGxldCBzb3J0aW5nSXRlbSA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChzb3J0aW5nSXRlbSkge1xuICAgICAgICBsZXQgY3VycmVudEl0ZXIgPSBzb3J0ZWRJdGVtc0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRJdGVyLnZhbHVlO1xuXG4gICAgICAgIGlmIChjdXJyZW50SXRlci5kb25lKSB7XG4gICAgICAgICAgc29ydGluZ0l0ZW0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWUudHlwZSA9PT0gaXRlbVR5cGUpIHtcbiAgICAgICAgICBjdXJyZW50VmFsdWUuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbLi4uc29ydGVkSXRlbXNdO1xuICB9XG5cbiAgZ2V0SW1hZ2VGb3JJdGVtVHlwZShuYW1lKSB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdQYW50cyc6XG4gICAgICAgIHJldHVybiBwYW50c0ltYWdlO1xuICAgICAgY2FzZSAnU2hpcnQnOlxuICAgICAgICByZXR1cm4gc2hpcnRJbWFnZTtcbiAgICAgIGNhc2UgJ0RyZXNzJzpcbiAgICAgICAgcmV0dXJuIGRyZXNzSW1hZ2U7XG4gICAgICBjYXNlICdTdWl0IEphY2tldCc6XG4gICAgICAgIHJldHVybiBzdWl0SW1hZ2U7XG4gICAgICBjYXNlICdTdWl0SmFja2V0JzpcbiAgICAgICAgcmV0dXJuIHN1aXRJbWFnZTtcbiAgICAgIGNhc2UgJ05lY2t0aWUnOlxuICAgICAgICByZXR1cm4gdGllSW1hZ2U7XG4gICAgICBjYXNlICdTa2lydCc6XG4gICAgICAgIHJldHVybiBza2lydEltYWdlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN1cHBsaWVzSW1hZ2U7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTm90ZXMobm90ZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbm90ZXMgfSk7XG4gIH1cblxuICBzdWJtaXROb3RlcyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudE9yZGVyOiB7IGlkOiBvcmRlcklkLCBzdG9yZV9pZDogc3RvcmVJZCB9LFxuICAgICAgdXNlclJvbGVzOiB7IHRhaWxvciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IHRhaWxvciA/ICdwcm92aWRlcl9ub3RlcycgOiAncmVxdWVzdGVyX25vdGVzJztcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgb3JkZXI6IHsgW2tleV06IHRoaXMuc3RhdGUubm90ZXMsIGlkOiBvcmRlcklkLCBzdG9yZV9pZDogc3RvcmVJZCB9LFxuICAgIH07XG5cbiAgICB0aGlzLnByb3BzLnVwZGF0ZU9yZGVyKGRhdGEpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIGNoZWNrT3JkZXJJbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50T3JkZXI6IHsgaWQ6IG9yZGVySWQsIHN0b3JlX2lkOiBzdG9yZUlkIH0sXG4gICAgICB1c2VyUm9sZXM6IHsgdGFpbG9yIH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0YSA9IHsgb3JkZXI6IHsgaWQ6IG9yZGVySWQsIHN0b3JlX2lkOiBzdG9yZUlkLCBhcnJpdmVkOiB0cnVlIH0gfTtcblxuICAgIHRoaXMucHJvcHMudXBkYXRlT3JkZXIoZGF0YSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHNob3dIaWRlTm90ZXNGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5Tm90ZXNGb3JtOiAhdGhpcy5zdGF0ZS5kaXNwbGF5Tm90ZXNGb3JtIH0pO1xuICB9XG5cbiAgZnVsZmlsbE9yZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudE9yZGVyOiB7IGlkOiBvcmRlcklkLCBzdG9yZV9pZDogc3RvcmVJZCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGEgPSB7IG9yZGVyOiB7IGlkOiBvcmRlcklkLCBzdG9yZV9pZDogc3RvcmVJZCwgZnVsZmlsbGVkOiB0cnVlIH0gfTtcblxuICAgIHRoaXMucHJvcHMuc2V0TG9hZGVyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMYWJlbDogdHJ1ZSB9KTtcblxuICAgIHRoaXMucHJvcHNcbiAgICAgIC51cGRhdGVPcmRlcihkYXRhKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50T3JkZXI6IG9yZGVyLCB1c2VyUm9sZXM6IHJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzaGlwbWVudEFjdGlvbiA9IHNoaXBtZW50QWN0aW9ucyhvcmRlciwgcm9sZXMpO1xuICAgICAgICBjb25zdCBzaGlwbWVudFR5cGUgPSBzaGlwbWVudFR5cGVzKHJvbGVzKTtcblxuICAgICAgICBpZiAoc2hpcG1lbnRUeXBlLmhhcygnbWFpbF9zaGlwbWVudCcpKSB7XG4gICAgICAgICAgdGhpcy5tYWtlU2hpcHBpbmdMYWJlbChzaGlwbWVudEFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHBvc3RTaGlwbWVudCA9IChvcmRlcnMsIGFjdGlvbiwgdHlwZSkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0TG9hZGVyKCk7XG4gICAgZmlyZVNoaXBtZW50Q3JlYXRlKG9yZGVycywgYWN0aW9uLCB0eXBlKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmJvZHkuZXJyb3JzKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcy5kYXRhLmJvZHkuZXJyb3JzWzBdO1xuICAgICAgICAgIGNvbnN0IGtpbmQgPSAnd2FybmluZyc7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXRHcm93bGVyKHsga2luZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDdXJyZW50T3JkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0xhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMb2FkZXIoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpKTtcbiAgfTtcblxuICBtYWtlU2hpcHBpbmdMYWJlbCA9IGFjdGlvbiA9PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdFNoaXBtZW50KFxuICAgICAgW3RoaXMucHJvcHMuY3VycmVudE9yZGVyXSxcbiAgICAgIGFjdGlvbixcbiAgICAgICdtYWlsX3NoaXBtZW50J1xuICAgICk7XG4gIH07XG5cbiAgcHJpbnRTaGlwcGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB3aW5kb3cucHJpbnQoKTtcbiAgfVxuXG4gIHRvZ2dsZU1lYXN1cmVtZW50RGV0YWlsQnV0dG9uID0gYm9vbGVhbiA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZWFzdXJlbWVudHM6ICFib29sZWFuIH0pO1xuICB9O1xuXG4gIHJlbmRlckRpc2FibGVkQ3VzdExpbmsoKSB7XG4gICAgY29uc3QgeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUgfSA9IHRoaXMucHJvcHMuY3VycmVudE9yZGVyLmN1c3RvbWVyO1xuICAgIHJldHVybiB0aGlzLnJlbmRlckxpbmsoe1xuICAgICAgdGV4dDogYCR7Zmlyc3RfbmFtZX0gJHtsYXN0X25hbWV9YCxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRW5hYmxlZEN1c3RMaW5rKCkge1xuICAgIGNvbnN0IHsgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBpZCB9ID0gdGhpcy5wcm9wcy5jdXJyZW50T3JkZXIuY3VzdG9tZXI7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGluayh7XG4gICAgICB0ZXh0OiBgJHtmaXJzdF9uYW1lfSAke2xhc3RfbmFtZX1gLFxuICAgICAgcGF0aDogYC9jdXN0b21lcnMvJHtpZH0vZWRpdGAsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyT3JkZXJOb3RlcyhmaWVsZCkge1xuICAgIC8vIHJldGFpbGVyIHNob3VsZCBub3Qgc2VlIHRhaWxvciBub3Rlc1xuICAgIGlmICh0aGlzLnByb3BzLnVzZXJSb2xlcy5yZXRhaWxlciAmJiBmaWVsZCA9PT0gJ3Byb3ZpZGVyX25vdGVzJykge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgY29uc3Qgbm90ZXMgPSB0aGlzLnByb3BzLmN1cnJlbnRPcmRlcltmaWVsZF0gfHwgJ05vdCBQcm92aWRlZCc7XG4gICAgY29uc3QgdGl0bGUgPSBmaWVsZCA9PT0gJ3Byb3ZpZGVyX25vdGVzJyA/ICdUYWlsb3IgTm90ZXM6JyA6ICdPcmRlciBOb3RlczonO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGVzXCI+e25vdGVzfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJBbHRlcmF0aW9uKGFsdGVyYXRpb24sIGluZGV4KSB7XG4gICAgLy8gb3JpZ2luYWwsIGJsaW5kIHN0aXRjaCwgYW5kIGN1ZmZlZCBoZW1zIHNob3VsZCBiZSByZWRcbiAgICBjb25zdCBoZW1BbHRzID0gW1xuICAgICAgJ1Nob3J0ZW4gUGFudCBMZW5ndGggLSBPcmlnaW5hbCBIZW0nLFxuICAgICAgJ1Nob3J0ZW4gUGFudCBMZW5ndGggLSBCbGluZCBTdGl0Y2ggSGVtJyxcbiAgICAgICdTaG9ydGVuIFBhbnQgTGVuZ3RoIC0gQ3VmZmVkIEhlbScsXG4gICAgXTtcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGhlbUFsdHMuaW5jbHVkZXMoYWx0ZXJhdGlvbi5uYW1lKSA/ICdyZWQnIDogJyc7XG4gICAgY29uc3Qgc3BsaXRBbHQgPSBhbHRlcmF0aW9uLm5hbWUuc3BsaXQoJyAtICcpO1xuICAgIGNvbnN0IGFsdCA9IHsgbmFtZTogc3BsaXRBbHRbMF0gKyAnIC0gJywgc3BlY2lmaWM6IHNwbGl0QWx0WzFdIH07XG5cbiAgICBpZiAoc3BsaXRBbHRbMV0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7YWx0Lm5hbWV9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9PnthbHQuc3BlY2lmaWN9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57YWx0ZXJhdGlvbi5uYW1lfTwvbGk+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckxpbmsoYXJncykge1xuICAgIGNvbnN0IHsgdGV4dCwgcGF0aCwgZW5hYmxlZCB9ID0gYXJncztcbiAgICBsZXQgbGlua0RpdjtcblxuICAgIGlmIChlbmFibGVkID09IHRydWUpIHtcbiAgICAgIGxpbmtEaXYgPSA8TGluayB0bz17cGF0aH0+IHt0ZXh0fSA8L0xpbms+O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rRGl2ID0gPGRpdj57dGV4dH08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5DdXN0b21lcjo8L2gzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmx1ZS1saW5rXCI+e2xpbmtEaXZ9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJBcnJpdmVkQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvbihcbiAgICAgICdDaGVjayBPcmRlciBJbicsXG4gICAgICB7IGRpc2FibGVkOiBmYWxzZSB9LFxuICAgICAgdGhpcy5jaGVja09yZGVySW5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckZ1bGZpbGxCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQnV0dG9uKFxuICAgICAgJ0Z1bGZpbGwgVGhpcyBPcmRlcicsXG4gICAgICB7IGRpc2FibGVkOiBmYWxzZSB9LFxuICAgICAgdGhpcy5mdWxmaWxsT3JkZXJcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNvbXBsZXRlZEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJCdXR0b24oJ09yZGVyIENvbXBsZXRlZCDinJTvuI8nLCB7IGRpc2FibGVkOiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlclByaW50TGFiZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50T3JkZXI6IG9yZGVyLCB1c2VyUm9sZXM6IHJvbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5zdGF0ZS5sb2FkaW5nTGFiZWw7XG4gICAgY29uc3Qgc2hpcG1lbnRBY3Rpb24gPSBzaGlwbWVudEFjdGlvbnMob3JkZXIsIHJvbGVzKTtcblxuICAgIGxldCBvbkNsaWNrLCBwcmludFByb21wdCwgY2xpY2tBcmdzLCBzaGlwbWVudERpdjtcbiAgICBzd2l0Y2ggKGxhYmVsU3RhdGUocm9sZXMsIG9yZGVyLCBkaXNhYmxlZCkpIHtcbiAgICAgIGNhc2UgJ25lZWRzX2xhYmVsJzpcbiAgICAgICAgcHJpbnRQcm9tcHQgPSAnQ3JlYXRlIExhYmVsJztcbiAgICAgICAgb25DbGljayA9IHRoaXMubWFrZVNoaXBwaW5nTGFiZWw7XG4gICAgICAgIGNsaWNrQXJncyA9IHNoaXBtZW50QWN0aW9uO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luX3Byb2dyZXNzJzpcbiAgICAgICAgcHJpbnRQcm9tcHQgPSAnQ3JlYXRpbmcgTGFiZWwnO1xuICAgICAgY2FzZSAnbGFiZWxfY3JlYXRlZCc6XG4gICAgICAgIHByaW50UHJvbXB0ID0gJ1ByaW50IExhYmVsJztcbiAgICAgICAgb25DbGljayA9ICgpID0+IHdpbmRvdy5wcmludCgpO1xuICAgICAgICBzaGlwbWVudERpdiA9IDxPcmRlckNvbXBsZXRlIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oXG4gICAgICAgICAgcHJpbnRQcm9tcHQsXG4gICAgICAgICAgeyBkaXNhYmxlZDogZGlzYWJsZWQsIGNsaWNrQXJnczogY2xpY2tBcmdzIH0sXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICApfVxuICAgICAgICB7c2hpcG1lbnREaXZ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckJ1dHRvbih0ZXh0LCBwYXJhbXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBwYXJhbXMuY2xhc3NOYW1lIHx8ICdwaW5rLWJ1dHRvbic7XG4gICAgY29uc3QgY2xpY2tBcmdzID0gcGFyYW1zLmNsaWNrQXJncyB8fCB1bmRlZmluZWQ7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBwYXJhbXMuZGlzYWJsZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYWxsYmFjayhjbGlja0FyZ3MpfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2FwdGlvbihpdGVtLCBpdGVtVHlwZSwgaW5kZXgpIHtcbiAgICBjb25zdCBhbHRlcmF0aW9ucyA9IGl0ZW0uYWx0ZXJhdGlvbnMubWFwKHRoaXMucmVuZGVyQWx0ZXJhdGlvbik7XG4gICAgY29uc3QgaXRlbUNhcHRpb24gPSBgJHtpdGVtVHlwZS50eXBlfSAjJHtpbmRleCArIDF9YDtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZ2V0SW1hZ2VGb3JJdGVtVHlwZShpdGVtVHlwZS50eXBlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIml0ZW0tdHlwZS1pbWFnZVwiIHNyYz17aW1hZ2V9IGFsdD17aXRlbVR5cGUubmFtZX0gLz5cbiAgICAgICAgICA8aDM+e2l0ZW1DYXB0aW9ufTwvaDM+XG4gICAgICAgICAgPHVsPnthbHRlcmF0aW9uc308L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNvcnRJdGVtc0J5VHlwZSgpLm1hcCgoaXRlbVR5cGUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbVR5cGUuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJdGVtQ2FwdGlvbihpdGVtLCBpdGVtVHlwZSwgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJOb3Rlc0Zvcm0gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheU5vdGVzRm9ybSkge1xuICAgICAgY29uc3QgeyB0YWlsb3I6IGlzVGFpbG9yLCBhZG1pbjogaXNBZG1pbiB9ID0gdGhpcy5wcm9wcy51c2VyUm9sZXM7XG4gICAgICBsZXQgcHJvbXB0LCBwYXJ0eTtcblxuICAgICAgaWYgKGlzVGFpbG9yKSB7XG4gICAgICAgIHByb21wdCA9ICdBZGQgVGFpbG9yIE5vdGVzPyc7XG4gICAgICAgIHBhcnR5ID0gJ3Byb3ZpZGVyX25vdGVzJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBZG1pbikge1xuICAgICAgICBwcm9tcHQgPSAnQWRkIEFkbWluIE5vdGVzPyc7XG4gICAgICAgIHBhcnR5ID0gJ3JlcXVlc3Rlcl9ub3Rlcyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdGVzRmllbGQgPSB0aGlzLnByb3BzLmN1cnJlbnRPcmRlcltwYXJ0eV07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5vdGVzLWZvcm1cIiBvblN1Ym1pdD17ZSA9PiB0aGlzLnN1Ym1pdE5vdGVzKGUpfT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aDM+e3Byb21wdH08L2gzPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY29scz17NDN9XG4gICAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vdGVzRmllbGR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlTm90ZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyVG9nZ2xlTm90ZXNGb3JtQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGluay1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0hpZGVOb3Rlc0Zvcm0oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlOb3Rlc0Zvcm0gPyAnSGlkZScgOiAnQWRkIE5vdGVzJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckVtcHR5RGl2KCkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG5cbiAgcmVuZGVyRW1wdHlCdXR0b25EaXZzKGNvdW50KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgb3V0cHV0LnB1c2godGhpcy5yZW5kZXJFbXB0eURpdik7XG4gICAgICBjb3VudC0tO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcmVuZGVyRWRpdE9yZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgdXNlclJvbGVzOiB7IGFkbWluIH0sIGN1cnJlbnRPcmRlcjogb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3JkZXJFZGl0UGF0aCA9IGAvb3JkZXJzLyR7b3JkZXIuaWR9L2VkaXRgO1xuXG4gICAgaWYgKGFkbWluKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIHRvPXtvcmRlckVkaXRQYXRofT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaG9ydC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0IE9yZGVyXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJPcmRlckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IHsgY3VycmVudE9yZGVyOiBvcmRlciwgdXNlclJvbGVzOiByb2xlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFkbWluLCB0YWlsb3IsIHJldGFpbGVyLCBjdXN0b21lciB9ID0gcm9sZXM7XG4gICAgY29uc3QgeyBhcnJpdmVkLCBmdWxmaWxsZWQgfSA9IG9yZGVyO1xuICAgIGNvbnN0IGFjdGlvbiA9IHNoaXBtZW50QWN0aW9ucyhvcmRlciwgcm9sZXMpO1xuXG4gICAgLy8gTk9URTogVGhpcyBhbGwgbmVlZHMgdG8gZ28gaW50byBhIGhpZ2hlci1vcmRlciBpbnRlcmZhY2UgY29tcG9uZW50LlxuICAgIC8vIElmIGEgbmV3IGJ1dHRvbiwgaXMgYXNzaWduZWQsIHRoaXMgd2lsbCBlcnJvciBvdXQgYW5kIGhlbHAgeW91IHJlYWxpemUgaXQuXG4gICAgbGV0IFtcbiAgICAgIG5vdGVzRm9ybSxcbiAgICAgIGFycml2ZWRCdXR0b24sXG4gICAgICBpbnN0cnVjdGlvbkJ1dHRvbixcbiAgICAgIGZ1bGZpbGxCdXR0b24sXG4gICAgICBsYWJlbEJ1dHRvbixcbiAgICAgIG1lc3NlbmdlckJ1dHRvbixcbiAgICAgIG5vdGVzQnV0dG9uLFxuICAgICAgY29tcGxldGVkQnV0dG9uLFxuICAgIF0gPSB0aGlzLnJlbmRlckVtcHR5QnV0dG9uRGl2cyg4KTtcblxuICAgIGlmICh0YWlsb3IgfHwgYWRtaW4pIHtcbiAgICAgIG5vdGVzRm9ybSA9IHRoaXMucmVuZGVyTm90ZXNGb3JtO1xuICAgICAgbm90ZXNCdXR0b24gPSB0aGlzLnJlbmRlclRvZ2dsZU5vdGVzRm9ybUJ1dHRvbjtcblxuICAgICAgaWYgKCFhcnJpdmVkICYmICFmdWxmaWxsZWQpIHtcbiAgICAgICAgYXJyaXZlZEJ1dHRvbiA9IHRoaXMucmVuZGVyQXJyaXZlZEJ1dHRvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFycml2ZWQgJiYgIWZ1bGZpbGxlZCkge1xuICAgICAgICBpbnN0cnVjdGlvbkJ1dHRvbiA9IHRoaXMucmVuZGVyUHJpbnRJbnN0cnVjdGlvbnM7XG4gICAgICAgIGZ1bGZpbGxCdXR0b24gPSB0aGlzLnJlbmRlckZ1bGZpbGxCdXR0b247XG4gICAgICB9XG5cbiAgICAgIGlmIChhcnJpdmVkICYmIGZ1bGZpbGxlZCkge1xuICAgICAgICBsYWJlbEJ1dHRvbiA9IHRoaXMucmVuZGVyUHJpbnRMYWJlbDtcbiAgICAgICAgY29tcGxldGVkQnV0dG9uID0gdGhpcy5yZW5kZXJDb21wbGV0ZWRCdXR0b247XG5cbiAgICAgICAgaWYgKG1lc3NlbmdlckFsbG93ZWQoYWN0aW9uLCByb2xlcykpIHtcbiAgICAgICAgICBtZXNzZW5nZXJCdXR0b24gPSB0aGlzLnJlbmRlclNlbmRNZXNzZW5nZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge25vdGVzQnV0dG9uKCl9XG4gICAgICAgIHtub3Rlc0Zvcm0oKX1cbiAgICAgICAge2Fycml2ZWRCdXR0b24oKX1cbiAgICAgICAge2luc3RydWN0aW9uQnV0dG9uKCl9XG4gICAgICAgIHtmdWxmaWxsQnV0dG9uKCl9XG4gICAgICAgIHtjb21wbGV0ZWRCdXR0b24oKX1cbiAgICAgICAge2xhYmVsQnV0dG9uKCl9XG4gICAgICAgIHsvKm1lc3NlbmdlckJ1dHRvbigpKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3JkZXJEZXRhaWxzKCkge1xuICAgIGNvbnN0IHsgdXNlclJvbGVzOiB7IGFkbWluLCByZXRhaWxlciwgdGFpbG9yLCBjdXN0b21lciB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVuZGVyTGlzdCA9IHRoaXMucmVuZGVyTGlzdCgpO1xuICAgIGNvbnN0IHJlcXVlc3Rlck5vdGVzID0gdGhpcy5yZW5kZXJPcmRlck5vdGVzKCdyZXF1ZXN0ZXJfbm90ZXMnKTtcbiAgICBjb25zdCBwcm92aWRlck5vdGVzID0gdGhpcy5yZW5kZXJPcmRlck5vdGVzKCdwcm92aWRlcl9ub3RlcycpO1xuICAgIGNvbnN0IGN1c3RvbWVyTGluayA9XG4gICAgICB0YWlsb3IgfHwgYWRtaW5cbiAgICAgICAgPyB0aGlzLnJlbmRlckVuYWJsZWRDdXN0TGluaygpXG4gICAgICAgIDogdGhpcy5yZW5kZXJEaXNhYmxlZEN1c3RMaW5rKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3JlbmRlckxpc3R9XG4gICAgICAgIHtjdXN0b21lckxpbmt9XG4gICAgICAgIHtyZXF1ZXN0ZXJOb3Rlc31cbiAgICAgICAge3Byb3ZpZGVyTm90ZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUHJpbnRJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudE9yZGVyOiB7XG4gICAgICAgIGlkOiBvcmRlcklkLFxuICAgICAgICByZXF1ZXN0ZXJfbm90ZXM6IHJlcXVlc3Rlck5vdGVzLFxuICAgICAgICBwcm92aWRlcl9ub3RlczogcHJvdmlkZXJOb3RlcyxcbiAgICAgICAgY3VzdG9tZXI6IHsgZmlyc3RfbmFtZTogZmlyc3ROYW1lLCBsYXN0X25hbWU6IGxhc3ROYW1lIH0sXG4gICAgICB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9yZGVyTm90ZXMgPSByZXF1ZXN0ZXJOb3RlcyB8fCAnTm90IFByb3ZpZGVkJztcbiAgICBjb25zdCB0YWlsb3JOb3RlcyA9IHByb3ZpZGVyTm90ZXMgfHwgJ05vdCBQcm92aWRlZCc7XG4gICAgY29uc3QgcHJpbnRhYmxlQ29udGVudCA9IHRoaXMucmVuZGVyTGlzdCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignUHJpbnQgSW5zdHJ1Y3Rpb25zJywgeyBkaXNhYmxlZDogZmFsc2UgfSwgKCkgPT5cbiAgICAgICAgICB3aW5kb3cucHJpbnQoKVxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW50IHByaW50LWluc3RydWN0aW9uc1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb0ltYWdlfSBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4JyB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5BbHRlcmF0aW9ucyBmb3IgT3JkZXIgI3tvcmRlcklkfTwvaDI+XG4gICAgICAgICAgPGg0PkN1c3RvbWVyIE5hbWU6IHtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH08L2g0PlxuICAgICAgICAgIHtwcmludGFibGVDb250ZW50fVxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIE9yZGVyIE5vdGVzOiA8cCBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT57b3JkZXJOb3Rlc308L3A+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBUYWlvciBOb3RlczogPHAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZScgfX0+e3RhaWxvck5vdGVzfTwvcD5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRGV0YWlsc09yTWVhc3VyZW1lbnRzQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgc2hvd01lYXN1cmVtZW50cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHVzZXJSb2xlczogeyB0YWlsb3IsIGFkbWluIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSBzaG93TWVhc3VyZW1lbnRzID8gJ1NlZSBPcmRlciBEZXRhaWxzJyA6ICdTZWUgTWVhc3VyZW1lbnRzJztcbiAgICBjb25zdCB0b2dnbGVGdW5jdGlvbiA9IHRoaXMudG9nZ2xlTWVhc3VyZW1lbnREZXRhaWxCdXR0b247XG5cbiAgICBpZiAodGFpbG9yIHx8IGFkbWluKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVGdW5jdGlvbihzaG93TWVhc3VyZW1lbnRzKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTWVhc3VyZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY3VycmVudE9yZGVyOiB7IGN1c3RvbWVyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxNZWFzdXJlbWVudHMgY3VzdG9tZXI9e2N1c3RvbWVyfSAvPjtcbiAgfVxuXG4gIHNldE1haW5Db250ZW50KCkge1xuICAgIGxldCBtYWluQ29udGVudDtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dNZWFzdXJlbWVudHMpIHtcbiAgICAgIGNvbnN0IG1lYXN1cmVtZW50cyA9IHRoaXMucmVuZGVyTWVhc3VyZW1lbnRzKCk7XG4gICAgICBtYWluQ29udGVudCA9IDxkaXY+e21lYXN1cmVtZW50c308L2Rpdj47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLnJlbmRlckVkaXRPcmRlckJ1dHRvbigpO1xuICAgICAgY29uc3QgbWVhc3VyZW1lbnRzQnV0dG9uID0gdGhpcy5yZW5kZXJEZXRhaWxzT3JNZWFzdXJlbWVudHNCdXR0b24oKTtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLnJlbmRlck9yZGVyRGV0YWlscygpO1xuICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLnJlbmRlck9yZGVyQ29udHJvbHMoKTtcbiAgICAgIC8vIE5PVEU6IGhlcmUgd2Ugc2hvdWxkIGJlIHJlbmRlcmluZyAxIG9mIDIgbWFpbiBjb21wb25lbnRzXG4gICAgICBtYWluQ29udGVudCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZWRpdEJ1dHRvbn1cbiAgICAgICAgICB7bWVhc3VyZW1lbnRzQnV0dG9ufVxuICAgICAgICAgIHtkZXRhaWxzfVxuICAgICAgICAgIHtjb250cm9sc31cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBtYWluQ29udGVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRTdG9yZTogc3RvcmUsIGN1cnJlbnRPcmRlcjogb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1haW5Db250ZW50ID0gPGRpdiAvPjtcbiAgICBsZXQgaGVhZGVyVGV4dCA9ICcnO1xuXG4gICAgaWYgKCFpc0VtcHR5KG9yZGVyKSkge1xuICAgICAgbWFpbkNvbnRlbnQgPSB0aGlzLnNldE1haW5Db250ZW50KCk7XG4gICAgICBoZWFkZXJUZXh0ID0gYE9yZGVycyAvICR7c3RvcmUubmFtZX0gLyAjJHtvcmRlci5pZH1gO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PXtoZWFkZXJUZXh0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXNob3dcIj57bWFpbkNvbnRlbnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9yZGVyc1Nob3cpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL3Nob3cvT3JkZXJzU2hvdy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcmVzZXRDYXJ0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcnRSaWJib24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcm90YXRlLCB1c2VyUm9sZXMsIGluY2x1ZGVMaW5rID0gdHJ1ZSB9ID0gcHJvcHM7XG4gIGxldCBsaW5rID0gcHJvcHMubGluaztcbiAgbGV0IG9uQ2xpY2s7XG5cbiAgaWYgKCFyb3RhdGUgfHwgcm90YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIGxpbmsgPSAnL29yZGVycy9uZXcnO1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnJyk7XG4gIH0gZWxzZSB7XG4gICAgb25DbGljayA9ICgpID0+IHByb3BzLnJlc2V0Q2FydCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLnVzZXJSb2xlcy5hZG1pbiB8fCBwcm9wcy51c2VyUm9sZXMucmV0YWlsZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY2FydC1yaWJib25cIiB0bz17bGlua30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BjYXJ0LXJpYmJvbi1zaWduICR7cm90YXRlfWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvbi10cmlhbmdsZVwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICA8aDI+e3Byb3BzLnRleHR9PC9oMj5cbiAgICAgIHtDYXJ0UmliYm9uKHByb3BzKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXNlcjogc3RvcmUuY3VycmVudFVzZXIsXG4gICAgdXNlclJvbGVzOiBzdG9yZS51c2VyUm9sZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgcmVzZXRDYXJ0LFxuICAgIH0sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWN0aW9uSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSW5wdXRNZWFzdXJlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7a2luZCwgdmFsdWUsIHVwZGF0ZSwgZGlzYWJsZWR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlZGl0RW5hYmxlZCA9IGRpc2FibGVkO1xuICAgIGNvbnN0IHN0eWxpbmcgPSBgaW5wdXQtbWVhc3VyZW1lbnQgJHtraW5kfWA7XG4gICAgbGV0IHZhbDtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsID0gZWRpdEVuYWJsZWQgPyBgJHt2YWx1ZX1gIDogYCR7dmFsdWV9XCJgO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGluZ31cbiAgICAgICAgdmFsdWU9e3ZhbH1cbiAgICAgICAgZGlzYWJsZWQ9eyFlZGl0RW5hYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGtpbmQsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1lYXN1cmVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvb3JkZXJzL3Nob3cvbWVhc3VyZW1lbnRzL0lucHV0TWVhc3VyZW1lbnQuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBnZXRDdXN0b21lck1lYXN1cmVtZW50cyxcbiAgY3JlYXRlQ3VzdG9tZXJNZWFzdXJlbWVudHMsXG59IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgSW5wdXRNZWFzdXJlbWVudCBmcm9tICcuL0lucHV0TWVhc3VyZW1lbnQnO1xuaW1wb3J0IHtGcm9udEltYWdlLCBCYWNrSW1hZ2V9IGZyb20gJy4uLy4uLy4uLy4uL2ltYWdlcy9tZWFzdXJlbWVudHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVhc3VyZW1lbnRzOiBzdG9yZS5tZWFzdXJlbWVudHMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge2dldEN1c3RvbWVyTWVhc3VyZW1lbnRzLCBjcmVhdGVDdXN0b21lck1lYXN1cmVtZW50c30sXG4gICAgZGlzcGF0Y2hcbiAgKTtcbn07XG5cbmNsYXNzIE1lYXN1cmVtZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWVhc3VyZW1lbnRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gbWFwU3RhdGVUb1Byb3BzXG4gICAgZ2V0Q3VzdG9tZXJNZWFzdXJlbWVudHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIGNyZWF0ZUN1c3RvbWVyTWVhc3VyZW1lbnRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dGcm9udDogdHJ1ZSxcbiAgICAgIGVkaXRFbmFibGVkOiBmYWxzZSxcbiAgICAgIG1lYXN1cmVtZW50czogcHJvcHMubWVhc3VyZW1lbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lYXN1cmVtZW50czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBtYXBTdGF0ZVRvUHJvcHNcbiAgICBnZXRDdXN0b21lck1lYXN1cmVtZW50czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgY3JlYXRlQ3VzdG9tZXJNZWFzdXJlbWVudHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgIGN1c3RvbWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIHBhcmVudENvbXBvbmVudFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVzZXRDdXN0b21lck1lYXN1cmVtZW50cygpO1xuICB9XG5cbiAgcmVzZXRDdXN0b21lck1lYXN1cmVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB7Z2V0Q3VzdG9tZXJNZWFzdXJlbWVudHMsIGN1c3RvbWVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjdXN0b21lcl9pZCA9IGN1c3RvbWVyLmlkO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGdldEN1c3RvbWVyTWVhc3VyZW1lbnRzKHtjdXN0b21lcl9pZH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzZWxmLnNldFN0YXRlKHttZWFzdXJlbWVudHM6IHJlc30pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycikpO1xuICB9O1xuXG4gIGdldEltYWdlKHN0YXRlKSB7XG4gICAgY29uc3Qge3Nob3dGcm9udH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBhbHQsIGltYWdlO1xuXG4gICAgaWYgKHNob3dGcm9udCkge1xuICAgICAgYWx0ID0gJ2Zyb250JztcbiAgICAgIGltYWdlID0gRnJvbnRJbWFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWx0ID0gJ2JhY2snO1xuICAgICAgaW1hZ2UgPSBCYWNrSW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwibWVhc3VyZW1lbnRzLWltYWdlXCIgc3JjPXtpbWFnZX0gYWx0PXthbHR9IC8+O1xuICB9XG5cbiAgc2hvd0Zyb250T3JCYWNrKGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93RnJvbnQ6IGJvb2xlYW59KTtcbiAgfVxuXG4gIGVuYWJsZUVkaXRCdXR0b24oZWRpdEVuYWJsZWQpIHtcbiAgICBpZiAoIWVkaXRFbmFibGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0aW55LWJ1dHRvblwiXG4gICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgdmFsdWU9XCJFZGl0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZUVkaXRFbmFibGVkKGVkaXRFbmFibGVkKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cInRpbnktYnV0dG9uXCJcbiAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXROZXdNZWFzdXJlbWVudHModGhpcy5zdGF0ZS5tZWFzdXJlbWVudHMpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXROZXdNZWFzdXJlbWVudHMobWVhc3VyZW1lbnRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdEVuYWJsZWQ6IGZhbHNlfSk7XG4gICAgdGhpcy5wcm9wc1xuICAgICAgLmNyZWF0ZUN1c3RvbWVyTWVhc3VyZW1lbnRzKHRoaXMuc3RhdGUubWVhc3VyZW1lbnRzKVxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMucmVzZXRDdXN0b21lck1lYXN1cmVtZW50cygpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSk7XG4gIH1cblxuICByZW5kZXJCdXR0b25zKGVkaXRFbmFibGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVhc3VyZW1lbnQtYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGlueS1idXR0b25cIlxuICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgIHZhbHVlPVwiRnJvbnRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0Zyb250T3JCYWNrKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0aW55LWJ1dHRvblwiXG4gICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgdmFsdWU9XCJCYWNrXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dGcm9udE9yQmFjayhmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLmVuYWJsZUVkaXRCdXR0b24oZWRpdEVuYWJsZWQpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZUVkaXRFbmFibGVkKGVkaXRFbmFibGVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdEVuYWJsZWQ6ICFlZGl0RW5hYmxlZH0pO1xuICB9XG5cbiAgdXBkYXRlTWVhc3VyZW1lbnQgPSAoa2luZCwgdmFsdWUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIG5ld1N0YXRlLm1lYXN1cmVtZW50c1traW5kXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIHZhbGlkYXRlTWVhc3VyZW1lbnQodmFsdWUpIHtcbiAgICBjb25zdCBsYXN0ID0gdmFsdWVbMF07XG4gICAgY29uc3QgbGFzdENoYXJJbnQgPSBsYXN0LmlzTmFOKCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICByZW5kZXJJbnB1dHMoc2hvd0Zyb250LCBlZGl0RW5hYmxlZCwgbWVhc3VyZW1lbnRzKSB7XG4gICAgaWYgKCFpc0VtcHR5KG1lYXN1cmVtZW50cykpIHtcbiAgICAgIGlmIChzaG93RnJvbnQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxJbnB1dE1lYXN1cmVtZW50XG4gICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGVNZWFzdXJlbWVudH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VkaXRFbmFibGVkfVxuICAgICAgICAgICAgICBraW5kPVwiYW5rbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVhc3VyZW1lbnRzLmFua2xlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJjYWxmXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5jYWxmfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJjaGVzdF9idXN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5jaGVzdF9idXN0fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJoaXBzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5oaXBzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJrbmVlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5rbmVlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJwYW50X2xlbmd0aFwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudHMucGFudF9sZW5ndGh9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SW5wdXRNZWFzdXJlbWVudFxuICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlTWVhc3VyZW1lbnR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlZGl0RW5hYmxlZH1cbiAgICAgICAgICAgICAga2luZD1cInNsZWV2ZV9sZW5ndGhcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVhc3VyZW1lbnRzLnNsZWV2ZV9sZW5ndGh9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SW5wdXRNZWFzdXJlbWVudFxuICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlTWVhc3VyZW1lbnR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlZGl0RW5hYmxlZH1cbiAgICAgICAgICAgICAga2luZD1cInNob3VsZGVyX3RvX3dhaXN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5zaG91bGRlcl90b193YWlzdH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJbnB1dE1lYXN1cmVtZW50XG4gICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGVNZWFzdXJlbWVudH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VkaXRFbmFibGVkfVxuICAgICAgICAgICAgICBraW5kPVwidGhpZ2hcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVhc3VyZW1lbnRzLnRoaWdofVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJ1cHBlcl90b3Jzb1wiXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudHMudXBwZXJfdG9yc299XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SW5wdXRNZWFzdXJlbWVudFxuICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlTWVhc3VyZW1lbnR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlZGl0RW5hYmxlZH1cbiAgICAgICAgICAgICAga2luZD1cIndhaXN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy53YWlzdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJiYWNrX3dpZHRoXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5iYWNrX3dpZHRofVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPElucHV0TWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZU1lYXN1cmVtZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdEVuYWJsZWR9XG4gICAgICAgICAgICAgIGtpbmQ9XCJiaWNlcFwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudHMuYmljZXB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SW5wdXRNZWFzdXJlbWVudFxuICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlTWVhc3VyZW1lbnR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlZGl0RW5hYmxlZH1cbiAgICAgICAgICAgICAga2luZD1cImVsYm93XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5lbGJvd31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJbnB1dE1lYXN1cmVtZW50XG4gICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGVNZWFzdXJlbWVudH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VkaXRFbmFibGVkfVxuICAgICAgICAgICAgICBraW5kPVwiZm9yZWFybVwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudHMuZm9yZWFybX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJbnB1dE1lYXN1cmVtZW50XG4gICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGVNZWFzdXJlbWVudH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VkaXRFbmFibGVkfVxuICAgICAgICAgICAgICBraW5kPVwiaW5zZWFtXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50cy5pbnNlYW19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2hvd0Zyb250LCBlZGl0RW5hYmxlZCwgbWVhc3VyZW1lbnRzfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItbWVhc3VyZW1lbnRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVhc3VyZW1lbnRzLWhlYWRlclwiPlxuICAgICAgICAgIDxoMz5DdXN0b21lciBNZWFzdXJlbWVudHM8L2gzPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbnMoZWRpdEVuYWJsZWQpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dGhpcy5nZXRJbWFnZSh0aGlzLnN0YXRlKX1cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRzKHNob3dGcm9udCwgZWRpdEVuYWJsZWQsIG1lYXN1cmVtZW50cyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lYXN1cmVtZW50cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy9tZWFzdXJlbWVudHMvTWVhc3VyZW1lbnRzLmpzIiwiZXhwb3J0IGNvbnN0IHRpZUltYWdlID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vUFVuQVI3aS5wbmcnO1xuZXhwb3J0IGNvbnN0IHNoaXJ0SW1hZ2UgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9hN3QxMDdwLnBuZyc7XG5leHBvcnQgY29uc3Qgc3VpdEltYWdlID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vRXFwUDdIcy5wbmcnO1xuZXhwb3J0IGNvbnN0IHNraXJ0SW1hZ2UgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9FT0RBeU9kLnBuZyc7XG5leHBvcnQgY29uc3QgZHJlc3NJbWFnZSA9ICdodHRwczovL2kuaW1ndXIuY29tL2ltYkJyaDIucG5nJztcbmV4cG9ydCBjb25zdCBwYW50c0ltYWdlID0gJ2h0dHBzOi8vaS5pbWd1ci5jb20vTDBDYkpZVC5wbmcnO1xuZXhwb3J0IGNvbnN0IGNvYXRJbWFnZSA9ICdodHRwczovL2kuaW1ndXIuY29tL1M2cUhSeG0ucG5nJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbWFnZXMvZ2FybWVudHMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgRnJvbnRJbWFnZSA9XG4gICdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2FpcnRhaWxvci1pbWFnZXMvbmV3X21lYXN1cm1lbnRzX2Zyb250LnBuZyc7XG5leHBvcnQgY29uc3QgQmFja0ltYWdlID1cbiAgJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vYWlydGFpbG9yLWltYWdlcy9uZXdfbWVhc3VyZW1lbnRzX2JhY2sucG5nJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbWFnZXMvbWVhc3VyZW1lbnRzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBaThBQUFKbUNBWUFBQUhqaEZCMkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUE1OUdsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNd01UUWdOemt1TVRVMk56azNMQ0F5TURFMEx6QTRMekl3TFRBNU9qVXpPakF5SUNBZ0lDQWdJQ0FpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02Y0dodmRHOXphRzl3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQm9iM1J2YzJodmNDOHhMakF2SWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjM1JGZG5ROUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlVWMlpXNTBJeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21WNGFXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2WlhocFppOHhMakF2SWo0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHOXlWRzl2YkQ1QlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhOQ0FvVFdGamFXNTBiM05vS1R3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ0lDQWdJQ0FnSUNBOGVHMXdPa055WldGMFpVUmhkR1UrTWpBeE55MHdNaTB5TVZReU1qb3pOem96Tnkwd05Ub3dNRHd2ZUcxd09rTnlaV0YwWlVSaGRHVStDaUFnSUNBZ0lDQWdJRHg0YlhBNlRXOWthV1o1UkdGMFpUNHlNREUzTFRBeUxUSXhWREl5T2pNNU9qQTNMVEExT2pBd1BDOTRiWEE2VFc5a2FXWjVSR0YwWlQ0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBOWlhSaFpHRjBZVVJoZEdVK01qQXhOeTB3TWkweU1WUXlNam96T1Rvd055MHdOVG93TUR3dmVHMXdPazFsZEdGa1lYUmhSR0YwWlQ0S0lDQWdJQ0FnSUNBZ1BHUmpPbVp2Y20xaGRENXBiV0ZuWlM5d2JtYzhMMlJqT21admNtMWhkRDRLSUNBZ0lDQWdJQ0FnUEhCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVK016d3ZjR2h2ZEc5emFHOXdPa052Ykc5eVRXOWtaVDRLSUNBZ0lDQWdJQ0FnUEhodGNFMU5Pa2x1YzNSaGJtTmxTVVErZUcxd0xtbHBaRG94WkdJM056RTJaaTB3T1ROa0xUUXpNRFl0WVRKaU9DMDJPV0V5TUdObE1UZzROMlE4TDNodGNFMU5Pa2x1YzNSaGJtTmxTVVErQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBFYjJOMWJXVnVkRWxFUG1Ga2IySmxPbVJ2WTJsa09uQm9iM1J2YzJodmNEbzNZVEJpTURsaU1pMHpPVEV5TFRFeE4yRXRZV0ppWWkwNFpqRTJaVGsyTVRneVlXTThMM2h0Y0UxTk9rUnZZM1Z0Wlc1MFNVUStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUStlRzF3TG1ScFpEbzNaR1F6WmpaaE5DMWtNemhsTFRReFpqRXRPV016TXkxaU16TTBNekV5WXpkaU5UUThMM2h0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJENEtJQ0FnSUNBZ0lDQWdQSGh0Y0UxTk9raHBjM1J2Y25rK0NpQWdJQ0FnSUNBZ0lDQWdJRHh5WkdZNlUyVnhQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjbVJtT214cElISmtaanB3WVhKelpWUjVjR1U5SWxKbGMyOTFjbU5sSWo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21GamRHbHZiajVqY21WaGRHVmtQQzl6ZEVWMmREcGhZM1JwYjI0K0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwcGJuTjBZVzVqWlVsRVBuaHRjQzVwYVdRNk4yUmtNMlkyWVRRdFpETTRaUzAwTVdZeExUbGpNek10WWpNek5ETXhNbU0zWWpVMFBDOXpkRVYyZERwcGJuTjBZVzVqWlVsRVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1JGZG5RNmQyaGxiajR5TURFM0xUQXlMVEl4VkRJeU9qTTNPak0zTFRBMU9qQXdQQzl6ZEVWMmREcDNhR1Z1UGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWRENUJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4TkNBb1RXRmphVzUwYjNOb0tUd3ZjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl5WkdZNmJHaytDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBpVW1WemIzVnlZMlVpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2WVdOMGFXOXVQbk5oZG1Wa1BDOXpkRVYyZERwaFkzUnBiMjQrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHBwYm5OMFlXNWpaVWxFUG5odGNDNXBhV1E2TVdSaU56Y3hObVl0TURrelpDMDBNekEyTFdFeVlqZ3ROamxoTWpCalpURTRPRGRrUEM5emRFVjJkRHBwYm5OMFlXNWpaVWxFUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2ZDJobGJqNHlNREUzTFRBeUxUSXhWREl5T2pNNU9qQTNMVEExT2pBd1BDOXpkRVYyZERwM2FHVnVQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQ1QlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhOQ0FvVFdGamFXNTBiM05vS1R3dmMzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tTm9ZVzVuWldRK0x6d3ZjM1JGZG5RNlkyaGhibWRsWkQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdQQzk0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUGNtbGxiblJoZEdsdmJqNHhQQzkwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWpBd01EQXZNVEF3TURBOEwzUnBabVk2V0ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xsU1pYTnZiSFYwYVc5dVBqY3lNREF3TUM4eE1EQXdNRHd2ZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZVbVZ6YjJ4MWRHbHZibFZ1YVhRK01qd3ZkR2xtWmpwU1pYTnZiSFYwYVc5dVZXNXBkRDRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZRMjlzYjNKVGNHRmpaVDQyTlRVek5Ud3ZaWGhwWmpwRGIyeHZjbE53WVdObFBnb2dJQ0FnSUNBZ0lDQThaWGhwWmpwUWFYaGxiRmhFYVcxbGJuTnBiMjQrTlRVNVBDOWxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WlJHbHRaVzV6YVc5dVBqWXhORHd2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvZ0lDQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW84UDNod1lXTnJaWFFnWlc1a1BTSjNJajgrSDd1LzRBQUFBQ0JqU0ZKTkFBQjZKUUFBZ0lNQUFQbi9BQUNBNlFBQWRUQUFBT3BnQUFBNm1BQUFGMitTWDhWR0FBQWlDMGxFUVZSNDJ1eWNXNDdDTUF4RjQ0eDNOUHRmQWt0Q25vOEJVWkJhOHZBenNTWEVEMjJkMCtzYko2MEFJaXJQQUlCU2ZuNkxZVkFwQmJxT3VOOTRFM2p3cU1WSDBPTlREdCttVVoxQXVRSmxFdWdNeU5sdllBY3dOSEVNckZoS0hPVkJxNEVoWjRETlM0a1V6ZzJSd0doSkhxSW9KandRQ1RBMlVEZzc5VU1Yall1cGhMaVVoWXNDR1Y5N1RZSWg1MENtWnk5Y1VDVXNnSEFESUVPQWNDTWdYZjZEQVh4RU1wZFQ5ZUJtS21rR2hDY0oweVpBVHZQQ2t5NVNBbzUvSUljdUdpOGtCVXpKV3Z0SWExNXY1WVFOamowREtFTFowT2lzTkFJb2hJOWM1WUFkQTRBRy93a1A1Qms5VzV2MGNTRUlXalpOT1l5dWxjQzVzVGI1aU9UcUdsWW9HMDR3a2FiZjRnMU1tTExSQmdNS3lnRXBoVmFoRXFLQnpyY1hDRWlXclliSFNDNHZ4TlNvOFlqMlcvOGoybzk0TjEvTzVZWEtiS2M5Szgwc0wxU25mNnZwK3NwL1RJRjQ2V05lMnh2MzIvLzNhN1BJOUZXenlqQXdFamlIK1F1S2xiazBJaTRseEV2SnhZQWk5VEVKSnNFa21BU1RrV0FTVElKSk1Ba213U1NZQkpOZ0VreUN5VWd3WCtOekIwL2plYlBYZ0Nzd093S0NrVktDeFlIQWpNZkFnb0MramdjSFRrWXJBeGtCRXhsUXQrS3I1c1c4K1loa0grUFpmNmJ5UXVZa0tEb1FxYzRYSXBhTnBHSXMxU055TTJxVU82aXRVRlM4b3hTcFpLdXlCMFJRb2NtMkE5ZnJyT3JiRHRycUlXOUFyTUcwQURKdEhPSDRsNUlaZGg0VEp2NEFBQUQvLyt5ZFNaTENNQXhGVWRvMzR2NW5VKys2aTZvRVQ1cjl2YVFJa0dkWnRvTHo4aGN4QVFTa2EwMUpRaHJsUmk0eGhWS1Y1TXVkMTkwQVhZNUFlQU5jU1RDc0JESHRVREpSS0dXS0dPa2VUMzhqVjFvQnFXYkVwRjlPUTBLcURNWVBTRkFKYVVrQjZXNk9pYTZGMjVvTlcwRWdJak5ZS3d6azdoanhQL1dyNkNXSG8rZFVDV2tYVURzTXlEQ2dkaWlRYnY2NWpGZVU5SXFwaGFQbmRjeW5nSlFjbzhRUHlzK2I3NGJTanVNbDA3QjUrbDNjUzc0empwZHlRRWFtNngzSFZGb3I2OHdDYjBaaG14N0k2c3IzQ1ZBWksrdHFFYmtpSVUzcDIxeTk3TURDNzlNY051WVMwbS9WYWpwTnJWVEVTRlhLR3F0cGtVNlJCc09HY09pbGFGUFVrcEJhbGhjcVpZVDJ3KzIweXd1MVhHYjFPRVRwOGlMOWN5SjN5d3MzdmFUMU5wQ1ovR09xcWZXS21KM3k0amdKNlNlSWdoSlNDVURzT1d5MGNrekpIZFRaZGp1a2lwaVNEV0FBQm1BQUJtQUFCbUFBQm1BQUJtQUFCZzFnQUFaZ0RNQVFjUHd6c043T0doa0k5WVlTSFFibzlsemJ3QUY4RXBBUk1GVUJEWTJHUy9vRE0rVVJ5ZWs2YS82Wi9zMXQ4NHU0R2hDcEJSNVZHRGFTRVJNMWVzUTY2b3JVUzVHaUZ4SlNoeUl5eXQxeVlTSkdPM3BLdVRhbGV0Y3NoMWx2TlZ1TklQT2s3bldoaW93akxRMllrWk9HaERSaXd6WGZoL1lMQUFELy8remQyMjdDTUJCRjBZdzAvLy9MN2tPTGtGQkk2bmhzejJXZmR5aTRpMk1URXVkVWpNaWY0b2lia281bjdiNmZ4cHVvbWcvR2h3L2xNM083Y25DM2Nlek9LRWlHSGl1QUFZamY2UXN3SVpHVWJoOEZTWkxGTTJEQ0FTblJQZ3FTcmU5QkFBT1F1NFNlbWhRa0FJa0lwbTZMWEI5TjM3ZHcvbklFV2tIaXJrV2E1NFd6QW1RN2ttYjBPTWtBaGhaWk55NUwya2NCNHJwRnJQNmVlQUlERXYvall0WStDcENVUUthMWo0S2tmTHQydFk4V2dRS1F2dmNuVDhGSTRBRUR5WVR4T2dmenZ0bVNYRHhwQTBoYUlPM2pwbU9QcGlSeDJENGdzVVJpL0MzcGJuVzlvbjI4SHp4TEI4VGlhM1Z2K3pRblNHZ1JnekdZdFdtNkRFeGR0SWdqSUxQQWpMWVBMZUlZeVFvd1Q5c0hKTTlhZDlrWWVMaFhFRUNjdFlnM01EU0o4eGJKQWtZUzRwRm9IeER2WUpyUk55K1FGSitTc3Z4a0VhNHBvMTc1R1Brbmk5RFRhWVpycTczL1pKRnFzWjV4OTRaVjdWTUdTWFl3czlxbkpKQnFZRVlYemlCeEJLWWRlNjg3UG0rZjMwdEUzNi9MeWMzWUFYUC9pZC8xV2lJZjR5azFKZkdQQ1JBMk1DYUFJWUFoZ0NHQUlZQWhCREFFTUFRd0JEQUVNQVF3aEFDR0FJWUFoZ0NHQUlhVXpiY3o3bDZuS1hJV1hNMlUzSGFWR0FEcEJYUDF4T0FwZ21RRURPMVRESWdsR05xbkNKSlpZR2lmaEVCV2dhRjlFaUhaQVliMkNZeGtOeGphSnhBUWoyQm9IK2RJUElPcDNENFM0VVZxNEFGdElBRk05dmFSNk1LejdFQlY0VTV4Z0VrNmRjbVJPQlgydUl0MnB6akFKR3dmT1lwR2o5cXgybmExem9DMXhzRlY4djl3VGkvcHlnOEFBQUQvLyt6ZFcyNGJNUXlGWVV2bGpyci90YWtQYWRBaWllM1I2RWJ5L09lbFFKQzB0dndOU2RVVCtWdUZLZVZ2NWYxM1BxMWk5cHdoL0hFbXNOOUYrS0g3R05mTTB5RjQ5Z2VZMHBJU1kvbjZkUVk5d0hTREFJMTRTMm9EUDhQL3d3QUZPTFNrOVcxRmJyNnBRbEJhSUlpMHBDUVZSYjVOVmJDRXEyYUFTZnFDcFVSanlhQjRmVXdGTUVDUmhGUEJ3bnlqQUNiNndqZkFBRVVDamJHNFJ4SjJsakd3QUNVTEdLb0tZSUFDR0tEY2gzTHR2dW0ySGQyTGU0ME5MSzRyU3Z2eTUvRnFaVUJ4aWFXNXFUWk93QURsL3JvY3JUWUdsakJRWE1BeG9MaVpVMFordm1RQ1EvdFp2eTdicW8wQkpUU1U3WEFNTENtZ2JJTlRGenhRc1BpNWdLYi91eFo4UVlDeXVkb1lVTkpDV1FMSHdPSnVtK3dham9sRHlWNVYzajNlc2hJTVVQS3RTM2UxTWFEUWtudmdtTkNpS00wcHkrQ29uQTlEVlptVUt4OTAzb0FpQTJXNEpmMy9selNnVUlHL2cvbjErOWwyS3dJYzVwUVo2L1hpWHVONlk3SEt3K2VkOERPcmlpNldOMnRnQXhPemwvbUc5ak1YeXZBTTh3ck95VFpGKzlrSTVjNjIyaE1jcXNxOHRlcGFnN3Z2SlpWRE95cWdIS2dxbzJCT3pEZEFPUXhsRk15dU5zV2M0Z1RLTERBcjRWQlZuR0daQ2VicWZOT0FFaFBLS2pBajFRWW9qcUdzQk5NTGh6bmw0RGJaRTVpZWJUaFFIRmVWM1dDdWJNT0I0aHpLYmpDejRRRGwwQnFjT3FlM2dlVXRsT0p4RFNMZG9rbFZjYkFHSE93TWxKUmdTbUk0SmRLRllrRVh0eVdINHZZNTFxU0xIYjJxdUwwZ3ZGY1lyM2Y3U2JTZkRFTnZ4dDltQ05WZUkzNWUwcXNYcFlDRkN0TlRiVDYvM29BQ21DaHRLaVdVREdDOHdRbTVUVmJaVm51YmI4SnVreFVyek1uNUpuWDdVUUN6cTAzSlFja09aaFVjaVRsRlpZWlpQZC9JekNuS0ZXYkdmQ1BiZnRUQjlMWXBvQURtQXB5UFQxVDkrTnJQSnpGSkg0eFlINlIxZkovOEtabzF3QXUxNjdFMG9QaXZNTTBoSE5wUGdCbW1YZHlWRUdZWWhrb3FER2lvTUlRQWhnQ0dBSVlBaGdDR0FJWVF3QkRBRU1BUXdCREFFTUFRQWhnQ0dBSVlBaGdDR0FJWVFnQkRBRU1BUXdCREFFTUlZQWhnQ0dBSVlBaGdDR0FJQVF3QkRBRU1pUVdHTStiSVV3ZjI1cHM1T2d3b1hTM0o2d2R2a2dOWWVtWVkwT1NIY3VrMXRodjZhRk5DRldVRURIQ0VvY3pZVmpQZmlHRVpCY044azNST21kMlNhRk5DRldVVkdPQWtoekt6SlRIZmlHQlpDWWI1SnZDY3NyTWwwYWFTVlpRVFlJQ1RxSUpYaFNjSmxwZ1ZobXFUNElJekowOGVPRUVxYzNXMEdMU3FBRzI4c2pEYTIrUm9MWWsyRmV6Q3NRQ0wxb0RpSnpYSUloYXdBSWI1SnVBRllVR3Z3cFlFU3JoWThNVnVRS0VsWlo1dndyZlZMTDhxVzRCTlM4clFwdElONmhsL0dkL0wxWnh5VjVmNTlJWWlEcGFXNUx4TlNid1BaZytOcklRajlZYXAyb0ZDczl1RjNMdnJxaWRRRldmd2FFbEoyNVQ4L1RyMklGZmdjR1BYNTBLMHh1MjBoQm1HQUlZQWhvVExId0FBQVAvLzdOMUxjaE5CRUVYUmFLdDJwUDB2d1V0eU5BTm1OaWk2VlI5WFpwNDdkZ0NXMG9mWFFKaExHK1k0dm0yK3g5TXJWNnN6NWNQQTE2ZDN0dWNvTHRqaHFWcDNRSG4xY2Y3a1FZQlJOeXF3RVdDMEJKV3JQeTV3QUNPZ0xQbDVZUU1ZUVdYWnJ3YzRnQkZRckJzQkJpcTVQZy9nQUVaQXNXNEVHS2hZTndLTWdHTGRBRVpRc1c0RUdLQllOd0lNVkdUZEFFWkFzVzRFR0tqbzMwRUZNRkFSVkFBREZBRkZnSUVLVkFRWW9BZ29nSUdLVXFEUy83Mmx6MUx3dmZFOWpBRURGQ3RsN0wzNGEzREFRQVVxUys2bC9EL3lxd0lNVUtDeXc3MlVXemVaZ1lFS1VIYStseExySmhNd1FJRks1SHRKdVc2aUF3TVZvR1M4bHpUckpob3dRSUZLeFhzSnUyNWFzQmRYUUtsK0w2SFdUWE1nc2xLc20rekFRQVVvN2lVaE5zMlJ5RXJ4S0pVQkdFY0NGUGRTYk4wMFJ3SVZvRmczVVlCeEpFQnhMOWJOVUdBY0NWVGNpM1V6RkJoSEFoVzNZdDFNQStad1FFQ0JpdnRhOFlnRUc2aDQzOTNXTkdCZ1k2WElmWFVBODNpKzh4eDJPRWdyUlludTYrLzNNTDVsUWVzOHRPUE5UOGl4V2ltS2NWOWROOUFHSHVEUjhjbWUzblNnS0FjcUk0RjU5WXV5YnF3VXhibXZLWGZRRmgxdTVYVmpwU2oxU3ZrdFlLcXVHeXRGcFZiS0RzQmtYemRXaXNxdWxCMkJpYjV1ckJSWktVR0FpYkp1ckJSWktRbUEyV1hkV0NteVVwSURzM3JkUUVWV1NtRmdacXdib01oS0FjeTBkUU1WV1NtQVdiWnVnQ0tvQUNiY3VvRUtVTXJkUUhNclFCRlVBQU1WeFFERkhRQm0rbEU2TUN0RmdGbHlxSTdQU2dHTWxoMnh3N1JTQUtOYkIrZWJhMWtwQXN6VzJEaG9Ld1V3dW4yazFvMlZBaGhaTjFhS0FHUGRWUDBpc1ZJQUkrdkdTaEZnckJ1b0NEREFLWUFOVUFDam9Pc20yLy9DQUJYQXlMb0JpZ0FEbTdsZnpGQVJZRHhLRFZzMy9ocFpnTEZ1aHE0YkswV0FVY2U2K2ZyOC84YytubEFSWURSMDNRQkZnTGx3K0llM3YzUGRRRVdBdWZ3NytBbWQyK3NHS0FMTWpTK295UDk1bTdSZEgxNkNsK2ljZnJlV0xKaFZqd3YrL0VheVlKYWlJd2t3a2dBakNUQ1NCQmhKZ0pFRUdFa0NqQ1RBU0FLTUpBRkdFbUFrQVVhU0FDTUpNSklBSTBtQWtRUVlTWUNSSk1CSUFvd2t3RWdTWUNRQlJwSUFJd2t3a2dBalNZQ1JCQmhKZ0pFa3dFZ0NqQ1RBU0JKZ0pFM3B1UEpCN2MwZjdQVDZTbEFaQmN5cm53ZzJFbENHQW1QZFNGQlpBb3gxSXdGbEdURFdqVlFZbFpYQVdEZFNJVkIrR3hqWVNNbFIyUVVZajFKU1FsUjJCTWE2a1JLQUVnVVk2MFlLaWtvMFlLd2JBU1ZvTGRtTER4eEJCVERXalpRUmxPekFXRGVDQ21Dc0d3RUZNTmFOQkJYQVdEY0NDbUNzRzBFRk1MSnVCQlRBV0RlQ0NtQ3NHMEVGTUlLTjkwK0E4U2dscUFCRzFnMVFBQ1ByQmlvQ2pIVWpvQUJHMWcxVUJCanJCaWdDakt3YnFBQkcxZzFRQkJqckJpb0NqQ3FzRzZBQVJ0WU5WQVFZN2JsdWdBSVl3V1lvTmxBUllEVDBVUW9xK25rVTUrbmZiMG1hMDRlWFFCSmdKSVhyRHdBQUFQLy83TjFiYmlMSkdrWlJBekVqNWo4RUQ4bktmbWtreTEzdUFqSWk4NytzOVhya2tnM0I1Z3ZLcC9xdlY2VEw1Y2ZWK25iM3FQWDBPQ2cxUG12NSt2U003amtNVDN5MDRnTmVubzFLemNqZ2FrU0lzUHo4My96TkFKWUwwNkpTKzdxRTVjS3lxR3c3dmhiRWhTVnhjRlhDdFlpbGk4TlZDY3ZGRlNoZHVMQmNhTFJVckJnc0YyRXB2WlN3WEdnVUZVdkdjcUZvVkxiQTN4dVdDNWFLRllQbElpd1dGcFlMcmhtV2pPV0NkMzJoeEhLeFZLd1lMQmVFcGQ4eUV4ZTgwQVFWMXlJdnJFNlBnNnVTNVlLd1dIQ1dDNkppeVdDNWVGZEdpQzBYdkVDc0dNc0ZZYkg4c0Z4RUJVdkdjc0c3cTRCYkxqam9WZ3lXaTdCZ01ZcUxBNDNRdXhiaEFJTzRpQXF2OHJtTHVBZ0xvaUl1aUlxb0lDNmlJaXlJaTdBZ0t1SWlLb2dLNGlJcW9vSzRpQXJDSWk3Q2dxZ2dMcUxTUENxMysrenpVanQyWDUvaUlpcWljdEo1cVI4WWNSRVZZVG50dlBpbkhjUkZXRVJsNlZrUm1lWnhFUlZSV1gxZVdrZW1ZMXhFUlZpT1BpOHRQNC9wRmhkaEVaV3p6a3E3RmRNbExxSWlLbEhPUzV2SVZJK0xxSWhLMVBOUy9xcFVOUzZpSWl3WnprdnBGVk14THNJaUt0bk9Tc25JVklxTHFJaEs5dk5TS2pJVjRpSXFvbEx0dkpUNFBDWnpYRVJGV0NxZmwvUXJKbXRjaEVWVXVweVZ0SkVaU1I5b1JLWGJlVWtYbVpIc2dVVlV1cCtYTkovSGpBUVBKTUxpdkNSY01TUEJBNGlvT0M4Skl6TWNFa1RGVmFsNlhCd1NZWEZlQ3EyWTRhQWdLaUpUTVM0T2lxZzRMMFVqTXh3U1JLVjhaRTU1VG9kRGdpdVFGWk05TGc2S3FEZ3JqU0l6SEJSUkVSYVJ5UllYaDBSVW5KZjRrVmwyRm9aRElpeWlZc1dzT0JmRFFSRVZVV0ZGWklhRElpckN3b3JJRElkRVZFU0ZYNTZyWFdkb09DVENJaXFzV0RGWEI2VmNWSVNGRU0vaGVQTUFPekNXaXFnNFgwdXVSUmNIU0ZoRXhkbGFFUmVSRVJWUmNiNld4c1ZWU1ZTRXhmbGFHaGNyUmxSd3ZwYkZSV1JjZ1hDK1hvakw3Zjd1TDlPSWpLaFE1WHpkN2ovUHdWKy9kcng0cU42TmpFUHBDa1QrOC9YU0dSaHYvdUdYTjM4WUIxUlV5SG0rWGo0SGUzLzlYMlJjZ2JCV3BzYmxwYnVYeUlnS2ZhSXlLeTU3VnN6amF6WlB1ckJRSnlvejQrS3FaSzFRNDJ4TlBRZXIvcGxMVnlWUm9lRmFXUjJYR1ZlbGFnZmZGWWcyVVZrZGwxbVIyWm8rNmFKQ3FpdlFHWEhaRzVuTUs4WVZpSlpST1RvdTMzK3c2bGNsVWFIZEZTaENYQ3BmbFZ5QkVKV1Q0MUx0cWlRcXRMOENSWXRMaGNpNEFtR3RCSTdMOXdja3krY3hvb0tvSklyTG5oWHorSm90NkpNdUxMU0pTdFM0UkwwcWlRcFIzN1RDbm9NUi9FR1BFQmxYSUt5VmduSDUva0FlL1htTXRZS29OSWpMbmhYeitKcHQ4Wk11S3JTOUFtV1B5eEZYSlZjZ1JLVnhYRlpjbFVRRlZ5QnhtWHBWaXZ3eklTcXBqU0pQNHJienlSUVZYSUhFcFZ4a1JFVllTcDZEVWZRSjNqN2lCMFpVUktYME9SaUZuK3pJSzBaWVJLWDhHUmdObnZ4SWtSRVZVV2x6RGthanczQm1aRVJGV05xZGcrR2NpQXFpSWk3Q2dxaUlpNmpRT0NyT2diaUlDdGFLdU9RNGpBNldxUEN2cTRjZ3pJem0vT2RPV0N5WEZJRng0T3EvSVhpT3hVVmtjQVVTRjVGQlZFcndtVXVPK2MyODUwQll4Q1c4N2VERHpYbHJSVmhjaTA0SlRKYi9TcVNvV0NyaWtuVEJSUDJ2UklxS3FJaEwwOGhZTVRHaTRqa1FGNUhCV2hFWGtmRjVqS2lJQzZGV3pPTnJISDVSRVJkY2xSSkV4V041SUwvbmNrNWszbmt4K2YyWS9XdEZXQ3dYSzhhU2NRV3lYTmdUbWUzZ0YxcldxQWlMNWNLQlM2YjZpdkc1aXVYQzVNZ2MrYzVlOFFva0xKWUxFMWZNNDJ1eXY3QmNmOFFGVnlWWElNUkZaS3dWeElYL2VTRlYrNnRyVVJFWGtxK1l4OWRFZVZHS2lyamdxaFFpS3NJaUxvaU10WUs0Vkl0TTFNOWpSS1V4djBSWEp6Q1IvcThFZm1VZnk4VlZhZXFLOGJrS2xrdVR5Qnk1T1B6S1BwYUxGVE4xeWJqK1lMazBqc3lLejJOOHJvTGx3cTRsODZjVkl5cUlDMzk4Z1Q4Zmg2L1AzNE55dTRzSzRzS1VGV09wOERTZnVZak10dkRQeG5KQlpLWXRHVkdoOVhMeEFwai91UGg5RmRySFpST1pxWkVRRlZ5TGZvbk1qTDlpN1hwVkVoVXNGMWNtRUJkaEFkZWlGcEZ4VlFMTHhhSUJjUkVXY0MzQ1ZRa3NGMnNHeEFVUUZ3QnhBY1FGRUJjQWNRSEVCUkFYQUhFQnhBVVFGd0J4QWNRRkVCY0FjUUhFQlJBWEFIRUJ4QVVRRndCeEFjUUZFQmNBY1FIRUJSQVhBSEVCeEFVUUZ3QnhBY1FGRUJjQWNRSEVCUkFYQUhFQnhBVVFGd0J4QWNRRkVCY0FjUUhFQlJBWEFIRUJ4QVVRRndCeEFjUUZFQmRBWEFERUJSQVhRRndBeEFVUUYwQmNBTVFGRUJkQVhBREVCUkFYUUZ3QXhBVVFGMEJjQUE2S3k4WERCS3hhTGdJRFBGcndWQS9HaTMvb3g4Zkh4K2J4aFpaUldiSmMzaW9YMERNc3J5NFhTd1pFWmVseW1mb05BQ0dqc3Z0MVBTWitNMVlNTkY0cUs1Ykw5T0lCdWNNeWM3bFlNaUFxUzVmTFlkODRFUHVXTVE3Nklhd1lLTDVVamw0dWg1WVNpSE9UR0NmK2dKWU1GSXpLR2NzbHhBOE16YUp5MnV2czJ2bUhCMnVsMXJYSVZRa2EzQWl1SGhod0JhcThYS3dZS1BhR2ZBMytvRmt5a0hUcGowUVBvQ1VEQ2FLU1libWtmRURCbXMrelhLd1lSQ1doYStJSDI1SkJXQ3dYU3dhNmZReHc5VVNBVlc2NVdERllLcGFMOGtQdjVYMzFoSUUzUXRjaVZ5Vzg4Vmt1M2lHZzk2SWVUWjlZU3daUnNWdzgwVmpObG9zVkE5N0FtaThYN3l3SWkrVml5U0FxbG9zRGd2V0w1V0xGNEkzSWN2R09oTEJZTHBZTW9vTGw0bUJoeFZvdVZnemVVQ3dYNzJRSUMrTGlBT0tOdzdYSVZRbHZGSmFMZHp5RXhYTEJrdkZjWWJrNHVGaVpsZ3RXak9CYkxuaW5GQllzRjBzR1ViRmNjT0N0UmNzRkswYTRzVnk4d3lJc2xndVdqS2hZTG5paFdIMklpeGNOSXV4YWhLdVNxRmd1ZUVGWmMxZ3VWb3l3WXJuZ0hWeFlMQmNzR1ZIQmNxSGlDOUhuS3BZTFZveEFZcmwwaTh3bDRmZU01WUlsSXlwWUxzUjhBZnRjeFhMQmlyRlVzRnlJdlJpRVJWeHdWWElGd3JXSXVGY2xRYkZjRUpucElSQVdMQmVtTGhsUndYSmhhaUI4cnNKL0Q4VzIrVGVJQU1zRkVCZEFYQURFQlJBWFFGd0Fadm9IQUFELy8remRVVzdqT2haRlVhdk1HWG4rUThpUUFyM2Y0RldGdGhOSnZJZGNDMmlnUHhwSkxKR1hHMHhWOVNHL2l0NjJKMy9FNGY3d3BHRit6NGFKUHd0VndlZUhaOEM0SVhIUUgzL3pOd0NBTTRQbHUvK3RrQUhFQzFBdVZ0NzVPbUlHRUM5QXVXQjU5WHNJR1VDOEFPVmk1WjN2TDJZQThRS1VDNVpYZnpZaEE0Z1hFQ3ZSUDdlWUFmRUNDSmJZenlSa1FMd0FZaVg2ODRvWkVDK0FZSWw5RmtJR3hBc2dXSVFNSUY0QXNUTGkrWWtaRUMrQVlJbDl0a0lHeEFzZ1ZxS2Z1NWdCOFFJSWx0aDNJbVJBdklDRDBTT0lmbDlpQnNRTENCWmkzNldRQWZFQ1lvWG85eXhtUUx5QVlDRjJEUWdaRUM4Z1ZvaGVIMklHeEFzSUZtTFhqcEFCOFFKaWhlaDFKV1pBdklCZ0lYYk5DUmtRTHlCV2lGNlBZZ2JFQ3dnV1l0ZXFrRUc4Z0dBQklRUGlCY1FLakZqZllnYnhBb0lGWXRlK2tFRzhnRmlCNkgwaFpoQXZJRmdnYnM4SUdNUUxpQlVvVDdBZ1hrQ3dnRmdCOFFKaUJRUUxpQmNFQzRnVkVDOGdWa0N3Z0hoQnNBQmlCY1FMWWdVRUM0Z1hFQ3dnV0VDOElGaEFyQURpQmJFQ2dnWEVDNElGU0krVis2UDZiQkY1eVQ0L3hBdGlCUVRMY3ZQRi81a2s0Z1hCQW1JbGVyYnNuamZpQmJFQ2dpVjF2cmlWUWJ3WUtJQllpWjR0Ym1YRUN3WUs0Q0NNblM5dVpjUUxCZ3FJRmFKbmkxc1o4WUtCQW9MRmZKbm1jM2ozNGdVREJjU0syUkw3T2EwTDhZS0JBb0xGZkluKy9OYU1lTUZBQWJGaXZzUStHK3RKdkdDWWdHQXhYNktmbTdVbVhqQlFRTENZTDdIUDFCb1VMd1lLSUZiTUZpR0RlREZRUUxDWUw0eDREOWF1ZURGUVFLeGd0c1MrSit0YXZCZ29JRmpNRjZMZm56VXZYZ3dVRUN0bUM3SHYxMzRRTHdZS0NCYnpoZWozYnErSUZ3TUZ4SXJaUXV5NnNJL0VpNEVDZ3NWOElYcTkyR1BpeFVBQnNXSzJFTHVlbHQ5L2JmRUZBQWdXODRYMGRiYmMzbXlMdm1oQXJKZ3R6TGdPbDlpM2JZRVhDUWdXODRWVjErZVVlN3BOL01JQXdXSytZTzFPdU5mYlJDOEZFQ3RtQ3l3UU1pMzR3UU9DeFh5Qlk5WjcxSXhvZ1E4WUVDdG1DNXkzSDhyUGoxYjhBUUtDeFh5QnNmdWszR3hwUlI4VUlGYk1GcWkzajByTW5WYmdRUUNDeFh5QnpQMDFaQ2ExZ1I4WUVDdG1DOHl6L3k2YlYyM0Fod01FaTVrQ2MrN0xTK2JYVmZHeUdUd2dWc1FLbUY5SjhkTDdzSVlTTmp5Q0JjeXY4dkhTZXdnR0ZqYTdXQUhNcjlMeDBudEloaGsydkdBQnpLL3k4ZEo3ZUFZZE5ydGdBUmFmWHkzNDRScUEyUEJpQlZod2ZoMFRML2ZIaUgrMHhxME1OcnhnQVNyTnJ2dmoyU3c0NUdjNDYrWmx4RDlhNDFZR3NTSldnUEh6Ni9SNTBBWjhDTGN5MlBDQ0JSQXJwZU9sOXlIZHlpQld4QW9nV01ySFMrL0RYMzByWXhqYjhBZ1dNTC9DWmtHMXYyMTA5YTJNWHkvWjdOZ0RZSDZGellQS2YxWGFyUXlDUmJDQStXVVdSTVZMNzZHNmxVR3NpQlV3dnhhZEJ5MzBCYnVWUWJBSUZqQy9GcDBGYlpLWDcxYkdac2VhQlBOcmtYblFKbHdZYm1Wc2VNRUNyRHkvcHA4RmJZRkY0MWJHWmhjc3dPenphNmxaMEJaYlVQNkJQQnRlckFDQ1JieE1jd2k0bFJFc2dnVVFLK0lsOW9Cd0t5Tld4QW9nV01STDlPSGhWa2F3R0ZBZ1Zzd0M4Uko3c0xpVkVTc0dGQWdXODBDOFJCODYvaXEyWURHZ1FLeVlCZUlsOWtCYTZkZExZc1dBQXNGaUhvaVhDUStyMlc1bEJJc0JCWUxGTEJBdkN4MWtpYmN5WXNXQUFyRmlIb2dYaDl5d21Oa0xiM2pCQWlRR2kxa2dYcFkrQUVmZXlvZ1ZBd3JFaW5rZ1h2ajFadGdtM2ZTQ0JVaWJYV2FCZU9FSG0wVmtHRkFnVnN3RHhJdVF3WUFDd1dJV2lCZEdiREF4WTBpQldERUx4QXV4QjdHUU1hQkFzSmdING9Yb1EzcnpMQUN4Z25naDhRRGZGdnFzZ0dBeEQ4UUxDQlpBckNCZXdJQUN3V0llSUY0UUxNQzB3V0lXSUY0UUxFRHBXREVMRUMvRURrbkRDOVlKRnZzZDhjS1V3OU53ZzNsaXhaNUd2TERjY0RYMElDOVk3RnZFQzRhdW9RaWxZOFhlUkx6QWkwUFpzSVJ4d1dML0lWN2dnR0Z0bUNKV0JBdmlCUTRaY2xjTldiY3lDQmJCZ25pQlU0YmZGUVBZclF4aVJhd2dYdUNVNGVoV0JnUUxpQmRpUSthcXdlMVdCckVDNGdWT0dhcHVaUkFzZ2dYeEFyRWhjOVhBRnpMTUVpeldMK0lGaXNXTVh5OGhWZ1FMNGdWaVEyWkV6RGdrcUJBczFpSGlCU2FKR2JjeXpCb3IxaHJpQlJZSW1SRXg0M0FSTEdJRnhBc2NOdnpkeWxBOVZxd1pFQy9RUFJUY3lsQWhXS3dMRUMvd28wUERyWXhZRVN3Z1hrREl2SEZvT3N3RUN5QmU0TEJEeHEyTVdCRXJJRjRnTm1iY3lnZ1d3UUxpQldKRDVxb0QwcTJNV0FIeEFweHllTG1WRVN5QWVJSFlrTG5xWUYzdFZrYXNnSGdCTGpyMDNNb0lGa0M4UUd6SVhIVWdKNGVNZnlnT3hBdFFPR2I4ZXNudENpQmVJRFprUnNUTXFFUGM3UW9nWG1EQ21KbnBWc2J0Q2lCZVlMR1FHUkV6KzRGZlM2d0E0Z1VXajVtS3R6SnVWd0R4QXBRSm1mOS9uMzFRc0lnVkVDL0FaQ0Z6YkZCOGZyd1NNbis3UHdRTElGNkFIeDMyMndTZkFSQXZ3S0loVXpsbXhBb2dYaFk3bkxiYnVEK0RRRzdNYklWK0ZnRHhzdkNCdEg4NWxBUU43OFREZHZIM0F4QXZ2QncwWW9abmEyWTc0V3NDaUJmZU9qQytpeG5vcmFIdHdEVUk4SkkvSGdGUERwZjl5MzhBUUx3UUVUQUFVSVpmRy9IYm1QSHJKUUF1NWVhRm80TEdyNWNBRUMvRUJjeDNRUU1BNG9Xb29CRXdBQnpHbjNsaFJNd0F3SSs1ZVFFQXhBc0FnSGdCQUJBdkFJQjRBUUFRTHdBQTRnVUFFQzhBQU9JRkFFQzhBQURpQlFCQXZBQUFpQmNBUUx3QUFJZ1hBQUR4QWdDSUZ3QUE4UUlBSUY0QUFQRUNBQ0JlQUFERUN3QWdYZ0FBeEFzQWdIZ0JBTVFMQUlCNEFRQVFMd0NBZUFFQUVDOEFBT0lGQUJBdkFBRGlCUUJBdkFBQTRnVUFRTHdBQUlnWEFFQzhBQUNJRndBQThRSUFpQmNBQVBFQ0FDQmVBQUR4QWdBZ1hnQUF4QXNBSUY0QUFNUUxBSUI0QVFERUN3Q0FlQUVBRUM4QWdIZ0JBQkF2QUFEaUJRQVFMd0FBNGdVQVFMd0FBT0lGQUVDOEFBQ0lGd0JBdkFBQWlCY0FBUEVDQUlnWEFBRHhBZ0R3ZSsyZ3I3TjkrZSs3eHdvQS9LTVJTc1dMa0FFQVRndVdzK09sOThPTEdRQVFLNlhqcGZmaGhBd0FDSmJ5OGRMNzBHSUdBTVJLNlhqcFBSUWhBd0NDcFh5OENCa0FFQ3l4OGRKN2lHSUdBQmFLbGNSNDZUMWtJUU1BQ3dSTGVyejBIcjZZQVlESlltVzJlT205SENFRGdHQ1pVRnZvcFlrWkFNU0tlSWw5cVVJR0FNRWlYcUpmdHBnQlFLeUlsOWpGSUdRQUVDemlKWHFSaUJrQXhJcDRpVjFFUWdZQXdTSmVvaGVYbUFGQXJJaVgyTVVuWkFBUUxPSWxlbEdLR1FEbkF1SWxkdEVLR1FEQmduZ1JNZ0FJRnZIQ2lFVXVaZ0RFQ3VJbGRoTUlHUURCZ25pSjNoeGlCa0NzSUY1aU40K1FBUkFzaUpmb1RTVm1BTVNLZUNGMjB3a1pBTUVpWG9qZWpHSUdRS3lJRjJJM3E1QUJCQXZpaGVoTkxHWUFzWUo0SVhhVEN4bEFzQ0JlaU43OFlnWVFLNGdYWW9lRGtBRUVDK0lGSVFNZ1dCQXZqQmdtWWdZUUs0Z1hZb2VOa0FFRUMrS0Y2Q0VrWmdDeGduZ2hka2dKR1RBTFFMd1FQYnpFRElnVkVDL0VEamNoQTRJRnhBdlJRMC9NZ0ZnQjhVTHNVQlF5SUZoQXZCQTlMTVVNaUJVUUw4UU9VeUVEZ2dYeEF0RkRWc3lBV0VHOFFPd1FGaklnV0JBdklHUkFySUI0Z1JHRFc4d2dXRUM4UU94UUZ6SUlGaEF2RUQzc3hReGlCY1FMeEI0R1FnYkJBdUlGb2c4Sk1ZTllBZkVDc1llSWtFR3dnSGlCNk1ORnpDQldRTHhBN09FalpCQXNJRjRnK2xBU000Z1ZFQzhRZTJnSkdjRUNpQmVJUHN6RWpGZ0J4QXZFSG5aQ1JyQUE0Z1dpRDBFeEkxWUE4UUt4aDZTUUVTeUFlQUVoZzJBQjhRS01PRlRGakZnQjhRTEVIcnBDUnJDQWVBR2lEMk14STFaQXZBQ3hoL1h1R1FEaUJVZyt4UGRGUGljZ1hvQUpEL2w5b3M4Q2lCZGdzWkJKaUJteEFvZ1g0TnM0MkF2K1RBRGlCWGc1R3ZaQjN4ZEF2QUMvam9yOXhLOE44SHhvN0x0L0VnSUF5UEhISXdBQXhBc0FnSGdCQUJBdkFJQjRBUUFRTHdBQXQ5dnRkdnR2QU5hVHBOS2E1dTduQUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvaW1hZ2VzL3N1cHBsaWVzLnBuZ1xuLy8gbW9kdWxlIGlkID0gNzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=