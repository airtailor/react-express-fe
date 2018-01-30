webpackJsonp([12],{

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _TermsOfService = __webpack_require__(716);

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _LogoMessage = __webpack_require__(113);

var _LogoMessage2 = _interopRequireDefault(_LogoMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermsOfServicePage = function (_Component) {
  _inherits(TermsOfServicePage, _Component);

  function TermsOfServicePage() {
    _classCallCheck(this, TermsOfServicePage);

    return _possibleConstructorReturn(this, (TermsOfServicePage.__proto__ || Object.getPrototypeOf(TermsOfServicePage)).apply(this, arguments));
  }

  _createClass(TermsOfServicePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            width: '80%',
            margin: '50px auto',
            height: '800px',
            textAlign: 'center',
            paddingBottom: '100px'
          }
        },
        _react2.default.createElement(_LogoMessage2.default, {
          className: 'sign-in-logo',
          text: 'Hi! Here\'s our Terms of Service'
        }),
        _react2.default.createElement(
          'div',
          { style: { overflow: 'scroll', paddingBottom: '500px' } },
          _react2.default.createElement(_TermsOfService2.default, null)
        )
      );
    }
  }]);

  return TermsOfServicePage;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(TermsOfServicePage);

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

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSectionHeaderText = exports.getSectionHeaderText = function getSectionHeaderText(props) {
  var path = props.match.path;

  if (path === '/admin/reports') {
    return 'Air Tailor / Reports';
  } else if (path === '/admin/reports/orders') {
    return 'Air Tailor / Order Reports';
  } else if (path === '/stores/new') {
    return 'Stores / New';
  } else if (path === '/users/:user_id/edit') {
    return 'Edit User';
  } else if (path === '/orders/new') {
    return 'Agree To Terms';
  } else if (path === '/site/terms_of_service') {
    return '';
  }
};

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _SectionHeader = __webpack_require__(706);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _helper = __webpack_require__(708);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WithSectionHeader(WrappedComponent) {
  return function (_Component) {
    _inherits(WithSectionHeader, _Component);

    function WithSectionHeader() {
      _classCallCheck(this, WithSectionHeader);

      var _this = _possibleConstructorReturn(this, (WithSectionHeader.__proto__ || Object.getPrototypeOf(WithSectionHeader)).call(this));

      _this.state = {
        text: ''
      };
      return _this;
    }

    _createClass(WithSectionHeader, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var text = (0, _helper.getSectionHeaderText)(this.props);
        this.setState({ text: text });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: this.state.text }),
          _react2.default.createElement(WrappedComponent, this.props)
        );
      }
    }]);

    return WithSectionHeader;
  }(_react.Component);
}

exports.default = WithSectionHeader;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsOfService = function TermsOfService(props) {
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'justify', margin: '20px 20px 0 20px' } },
    _react2.default.createElement(
      'p',
      { style: { textAlign: 'center', fontWeight: 'bold' } },
      'Terms of Service'
    ),
    _react2.default.createElement(
      'p',
      { style: { fontFamily: 'sans-serif', fontWeight: 'bold' } },
      'The Air Tailor Platform provides easy-to-use software to our Retail Partners, referred to herein as the "Partners", allowing their store associates to order clothing alterations from the Air Tailor Tailors. This solution will help Partners offer their retail customers a heightened shopping experience, which promotes higher store sales and lowers the amount of returned merchandise.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Services'
        ),
        '. Air Tailor agrees to provide the following Technology Services (defined below) and Management Services (defined below) to Partners. Together, the Technology Services and Management Services are referred to herein as the "Services."'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Technology Services'
          ),
          '. Air Tailor will provide Partners with its alteration and tailor management software via a web client ("Air Tailor Platform") in order to permit Partners to place garment tailoring orders to third party tailors (collectively, "Tailors"); track tailoring orders and provide centralized, up-to-date shipment and status reporting; centralize customer service, account management, billing, reporting and payment functionalities for tailoring orders.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Management Services'
          ),
          '. Air Tailor will provide its Air Tailor Platform to facilitate all back-end ordering, fulfillment, shipping/delivery, payment and related services between Partners and Tailors (collectively, "Management Services"). For the avoidance of doubt, Air Tailor, shall not be responsible for any costs associated with goods, clothing or other products lost or damaged during shipment, including without limitation, goods, clothing or other products lost or damaged by shipping or messenger/delivery services. Should a tailored garment be found in good faith to be unsatisfactory by a Partner, Air Tailor shall use commercially reasonable efforts to replace or repair said garment at no additional charge.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Tailors'
          ),
          '. In the course of providing the Services contemplated herein, Air Tailor shall manage and facilitate all services that are performed by the Tailors including managing Tailoring orders, tracking and managing Tailor activity, and responding to any customer service concerns with respect to the performance of the applicable Tailors. Tailors shall have access to and utilize portions of the Air Tailor Platform in order to assist Air Tailor in managing these tasks. All Tailors utilized by the Air Tailor Portal must be previously vetted and approved to the system by Air Tailor staff prior to accessing the Air Tailor Platform or Services.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partner\u2019s Users'
          ),
          '. Partners may permit employees and sales associates at its store locations ("Users") to access and use the Services. Partners shall safeguard all access to the Services and all credentials provided by Air Tailor and shall ensure the confidentiality and security thereof. Partners shall be fully responsible for, and shall indemnify Air Tailor and its Indemnitees for, the acts and omissions of its Users.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Fees'
        ),
        '. All applicable costs shall be paid in full within thirty (30) days after the date of the corresponding invoice and are non-refundable once paid. Partners shall be responsible for all sales, use, or other taxes and other governmental charges on all alterations ordered as well as shipping/messenger costs from the store to the Tailor. Air Tailor will be responsible for all shipping and messenger/delivery costs back to the retail customer from the Tailor. Air Tailor may suspend the provision of the Services upon prior written notice to Customer if any payments become thirty (30) or more days past due.'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Ownership'
        ),
        '.'
      ),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Trademarks'
          ),
          '. Air Tailor grants Partners a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use Air Tailor\u2019s names, logos, designs, and other trademarks ("Marks") solely for the purposes of marketing, displaying and utilizing the Services, Air Tailor Alterations Portal and Air Tailor Platform. Partners agree to use the Air Tailor Marks consistent with the highest standards of quality so as to protect and maintain the Air Tailor Marks and Air Tailor\u2019s rights therein. To this end, Partners shall have the right to review and approve the manner of use of the Air Tailor Marks, and Partners agree to modify use of any Air Tailor Marks which do not meet the standards required by the Partner.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Air Tailor Ownership'
          ),
          '. Air Tailor shall retain all right, title and interest in and to the Services, the Air Tailor Alterations Portal, and the Air Tailor Platform including without limitation, all content, concepts, know-how, tools, scripts, methodologies, processes, code, or other intellectual property or trade secrets associated with the Air Tailor Alterations Portal, Air Tailor Platform, or other pre-existing or independently developed intellectual property created by Air Tailor and any enhancements, modifications, or improvements to the foregoing developed during or independent of the Services (collectively, "Air Tailor IP"). In connection with the Services herein, Air Tailor and Partners shall exchange data which shall include, without limitation, Tailoring order information (collectively, "Data"). Partner grants Air Tailor an irrevocable, perpetual, worldwide, transferable, non-exclusive, royalty-free license to use and modify Data in the course of its business. Further, Partners are not required to provide any suggestions, enhancement requests, recommendations or other feedback regarding the Services ("Feedback"), but if Partners do so, Partners grants Air Tailor a non-exclusive, royalty-free, worldwide, transferable, sub-licensable, irrevocable, perpetual license to use or incorporate into the Services any Feedback so provided.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Restrictions'
          ),
          '. Partners shall not (or permit any third party to) directly or indirectly (i) use any of the Air Tailor IP or Air Tailor Confidential Information to create any service, software, documentation or data that is competitive with, substantially similar or confusingly similar to any aspect of the Services; (ii) reverse engineer or use any other means to attempt to discover any source code in connection with the Services, Air Tailor IP or Air Tailor Confidential Information; (iii) encumber, pledge, resell, share, sublicense, transfer, rent, lease, time-share or use the Services, Air Tailor IP or Air Tailor Confidential Information for the benefit of any third party; (iv) modify, manufacture, adapt, create derivative works of or otherwise modify any aspect of the Services, Air Tailor IP or Air Tailor Confidential Information; (v) use the Services, Air Tailor IP and Air Tailor Confidential Information to support any activity that is infringing or illegal; (vi) transmit harmful, disabling or malicious code or devices or disable, override or access the Services, Air Tailor IP and Air Tailor Confidential Information, or access the same for purposes of monitoring their performance or functionality; or (vii) remove, alter or obscure any copyright or other proprietary notices on the Services, Air Tailor IP or Air Tailor Confidential Information. Notwithstanding anything to the contrary herein, Air Tailor may, in its sole discretion, immediately revoke access if a Partner breaches the restrictions in this Section or creates other security or legal concerns. Partner hereby agrees that Air Tailor will be entitled, in addition to any other remedies available to it at law or in equity, to injunctive relief to prevent the breach or threatened breach of Partner\u2019s obligations under this Section, without any requirement to demonstrate irreparable harm or post a bond.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partner Ownership'
          ),
          '. Partners shall retain all right, title, ownership and interest in and to (i) the Partner\u2019s websites; (ii) all materials or products that are the subject of any Tailoring Orders; and (ii) all content, trademarks, copyrights, patents, or other intellectual and/or proprietary property of the Partner contained therein (collectively, "Partner Content"). Partners grants Air Tailor a non-exclusive, limited, royalty-free, non-transferable license to use, host, distribute, reproduce, perform, display, modify and create derivative works of Partner Content to the extent necessary to perform Services for Partner.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Representations, Warranties, and Indemnity'
        ),
        '.'
      ),
      _react2.default.createElement(
        'ol',
        { type: 'a' },
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Partners'
          ),
          '. Partners represent and warrant that they shall provide all information, materials, access and cooperation necessary for Air Tailor to provide the Services and shall procure all connectivity, equipment and software as needed to access the Services or Air Tailor Platform; (ii) the Partner Content, and Air Tailor\u2019s use of Partner Content as contemplated herein, will not violate the intellectual property, privacy or publicity or other rights of any third party; (iii) Partners shall comply with all applicable federal, state, and local laws, rules and regulations; and (iv) Partners have the right to provide Data to Air Tailor for the purposes contemplated herein and that its collection, provision and use of the Data is compliant with all applicable laws and self-regulatory principles concerning privacy and data security and with Partner\u2019s privacy policies.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Air Tailor'
          ),
          '. Air Tailor represents and warrants that (i) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not to Air Tailor\u2019s knowledge at the time of delivery contain any Trojan horses, viruses, damaging computer programming, worms, or undocumented disabling devices; (ii) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not infringe on, misappropriate and/or violate the copyright, trademark, patent, right of privacy or publicity, or trade secret rights or any other intellectual property rights of any third Party, and (iii) in providing the Services, Air Tailor shall comply with all applicable laws, rules and regulations.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Disclaimers'
          ),
          '. Except as set forth herein in this agreement, Air Tailor does not warrant that the services will meet Partner\u2019s requirements or result in any outcome, or that their operation will be uninterrupted or error-free. Air Tailor hereby disclaims all other warranties, whether express or implied, oral or written, including without limitation, all implied warranties or title, merchantability, non-infringement or fitness for any particular purpose. Air Tailor shall not be responsible for any third party suppliers or for any third party platforms, software or intellectual property.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Indemnity'
          ),
          '. Each Party shall defend, indemnify and hold harmless the other Party and its affiliates, employees, representatives, successors and assigns from and against any and all losses, costs, damages, liabilities (including reasonable outside attorney\'s fees and expenses) in connection with any third Party claim, action, suits, regulatory investigations or subpoenas (collectively, "Claims") to the extent arising from such indemnifying Party\'s (i) breach of its representations, warranties or covenants under this Agreement; and/or (ii) gross negligence or willful misconduct of such Party, its employees or agents, provided that the indemnified Party gives the indemnifying Party (a) prompt written notice of any Claims, (b) sole control over the defense and/or settlement of any Claims, and (c) reasonable cooperation in connection with such defense and/or settlement.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          {
            style: {
              fontFamily: 'sans-serif',
              weight: 400,
              fontSize: '16px',
              lineHeight: '18px'
            }
          },
          _react2.default.createElement(
            'span',
            { style: { textDecoration: 'underline' } },
            'Limitation on Liability'
          ),
          '. In no event shall either party be liable for any indirect, punitive, incidental, reliance, special, exemplary or consequential damages including, but not limited to, loss of business, revenues, profits and goodwill and Air Tailor\u2019s aggregate liability for any direct damages shall not exceed the fees paid during the term of this agreement.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'sans-serif',
            weight: 400,
            fontSize: '16px',
            lineHeight: '18px'
          }
        },
        _react2.default.createElement(
          'span',
          { style: { textDecoration: 'underline' } },
          'Miscellaneous'
        ),
        '. The Agreement shall be governed by the laws of the State of New York, without regard to conflict of law principles. Any dispute arising out of or in connection with this agreement shall be brought in the federal or state courts of New York County, New York. In the event that either Party is prevented from performing, or is unable to perform (other than Partner\u2019s payment obligations), any of its obligations under this Agreement due to any force majeure (e.g., force of nature, fire, natural disaster, accident, riots, acts of government, acts of war or terrorism, failure of transportation or communications or of suppliers of goods or services, changes to any third Party platforms, transport failures, any usage restrictions imposed by any such third Party platforms, or any delays or outages arising in connection with such third Party platforms, the malicious acts of third Parties (e.g. cyber-attacks), or any other cause beyond the reasonable control of such Party), the affected Party shall give written notice thereof to the other Party and its performance shall be extended for the period of delay or inability to perform due to such occurrence.'
      )
    )
  );
};

exports.default = TermsOfService;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9UZXJtc09mU2VydmljZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcz81MjU5KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcz85OTIzKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9pbmRleC5qcz8yOGYzKioqIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3Rlcm1zL1Rlcm1zT2ZTZXJ2aWNlLmpzP2RhZWIiXSwibmFtZXMiOlsiVGVybXNPZlNlcnZpY2VQYWdlIiwid2lkdGgiLCJtYXJnaW4iLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nQm90dG9tIiwib3ZlcmZsb3ciLCJDYXJ0UmliYm9uIiwicm90YXRlIiwicHJvcHMiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldFNlY3Rpb25IZWFkZXJUZXh0IiwicGF0aCIsIm1hdGNoIiwiV2l0aFNlY3Rpb25IZWFkZXIiLCJXcmFwcGVkQ29tcG9uZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIlRlcm1zT2ZTZXJ2aWNlIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIndlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7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RjtBQWlERTtBQUFBO0FBQUE7QUFDRSxtQkFBTztBQUNMSCwwQkFBWSxZQURQO0FBRUxJLHNCQUFRLEdBRkg7QUFHTEgsd0JBQVUsTUFITDtBQUlMQywwQkFBWTtBQUpQO0FBRFQ7QUFRRTtBQUFBO0FBQUEsY0FBTSxPQUFPLEVBQUVDLGdCQUFnQixXQUFsQixFQUFiO0FBQUE7QUFBQSxXQVJGO0FBQUE7QUFBQSxTQWpERjtBQW9FRSxpREFwRUY7QUFxRUU7QUFBQTtBQUFBO0FBQ0UsbUJBQU87QUFDTEgsMEJBQVksWUFEUDtBQUVMSSxzQkFBUSxHQUZIO0FBR0xILHdCQUFVLE1BSEw7QUFJTEMsMEJBQVk7QUFKUDtBQURUO0FBUUU7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFFQyxnQkFBZ0IsV0FBbEIsRUFBYjtBQUFBO0FBQUEsV0FSRjtBQUFBO0FBQUEsU0FyRUY7QUE2RkUsaURBN0ZGO0FBOEZFO0FBQUE7QUFBQTtBQUNFLG1CQUFPO0FBQ0xILDBCQUFZLFlBRFA7QUFFTEksc0JBQVEsR0FGSDtBQUdMSCx3QkFBVSxNQUhMO0FBSUxDLDBCQUFZO0FBSlA7QUFEVDtBQVFFO0FBQUE7QUFBQSxjQUFNLE9BQU8sRUFBRUMsZ0JBQWdCLFdBQWxCLEVBQWI7QUFBQTtBQUFBLFdBUkY7QUFBQTtBQUFBO0FBOUZGLE9BelFGO0FBeVhFLCtDQXpYRjtBQTBYRTtBQUFBO0FBQUE7QUFDRSxpQkFBTztBQUNMSCx3QkFBWSxZQURQO0FBRUxJLG9CQUFRLEdBRkg7QUFHTEgsc0JBQVUsTUFITDtBQUlMQyx3QkFBWTtBQUpQO0FBRFQ7QUFRRTtBQUFBO0FBQUEsWUFBTSxPQUFPLEVBQUVDLGdCQUFnQixXQUFsQixFQUFiO0FBQUE7QUFBQSxTQVJGO0FBQUE7QUFBQTtBQTFYRjtBQWJGLEdBREY7QUF1YUQsQ0F4YUQ7O2tCQTBhZUwsYyIsImZpbGUiOiIxMi4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVybXNPZlNlcnZpY2UgZnJvbSAnLi9UZXJtc09mU2VydmljZSc7XG5pbXBvcnQgV2l0aFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vSE9DL1dpdGhTZWN0aW9uSGVhZGVyJztcbmltcG9ydCBMb2dvTWVzc2FnZSBmcm9tICcuLi9Mb2dvTWVzc2FnZSc7XG5cbmNsYXNzIFRlcm1zT2ZTZXJ2aWNlUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgICBtYXJnaW46ICc1MHB4IGF1dG8nLFxuICAgICAgICAgIGhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxMDBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMb2dvTWVzc2FnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ24taW4tbG9nb1wiXG4gICAgICAgICAgdGV4dD1cIkhpISBIZXJlJ3Mgb3VyIFRlcm1zIG9mIFNlcnZpY2VcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdzY3JvbGwnLCBwYWRkaW5nQm90dG9tOiAnNTAwcHgnIH19PlxuICAgICAgICAgIDxUZXJtc09mU2VydmljZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyKFRlcm1zT2ZTZXJ2aWNlUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9UZXJtc09mU2VydmljZVBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBDYXJ0UmliYm9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJvdGF0ZSwgdXNlclJvbGVzLCBpbmNsdWRlTGluayA9IHRydWUgfSA9IHByb3BzO1xuICBsZXQgbGluayA9IHByb3BzLmxpbms7XG4gIGxldCBvbkNsaWNrO1xuXG4gIGlmICghcm90YXRlIHx8IHJvdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5rID0gJy9vcmRlcnMvbmV3JztcbiAgICBvbkNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJycpO1xuICB9IGVsc2Uge1xuICAgIG9uQ2xpY2sgPSAoKSA9PiBwcm9wcy5yZXNldENhcnQoKTtcbiAgfVxuXG4gIGlmIChwcm9wcy51c2VyUm9sZXMuYWRtaW4gfHwgcHJvcHMudXNlclJvbGVzLnJldGFpbGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhcnQtcmliYm9uXCIgdG89e2xpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgY2FydC1yaWJib24tc2lnbiAke3JvdGF0ZX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICArXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWJib24tdHJpYW5nbGVcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgPGgyPntwcm9wcy50ZXh0fTwvaDI+XG4gICAgICB7Q2FydFJpYmJvbihwcm9wcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVzZXI6IHN0b3JlLmN1cnJlbnRVc2VyLFxuICAgIHVzZXJSb2xlczogc3RvcmUudXNlclJvbGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIHJlc2V0Q2FydCxcbiAgICB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VjdGlvbkhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzIiwiZXhwb3J0IGNvbnN0IGdldFNlY3Rpb25IZWFkZXJUZXh0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG1hdGNoOiB7IHBhdGggfSB9ID0gcHJvcHM7XG4gIGlmIChwYXRoID09PSAnL2FkbWluL3JlcG9ydHMnKSB7XG4gICAgcmV0dXJuICdBaXIgVGFpbG9yIC8gUmVwb3J0cyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9hZG1pbi9yZXBvcnRzL29yZGVycycpIHtcbiAgICByZXR1cm4gJ0FpciBUYWlsb3IgLyBPcmRlciBSZXBvcnRzJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3N0b3Jlcy9uZXcnKSB7XG4gICAgcmV0dXJuICdTdG9yZXMgLyBOZXcnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvdXNlcnMvOnVzZXJfaWQvZWRpdCcpIHtcbiAgICByZXR1cm4gJ0VkaXQgVXNlcic7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9vcmRlcnMvbmV3Jykge1xuICAgIHJldHVybiAnQWdyZWUgVG8gVGVybXMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvc2l0ZS90ZXJtc19vZl9zZXJ2aWNlJykge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9oZWxwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uLy4uL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0IHtnZXRTZWN0aW9uSGVhZGVyVGV4dH0gZnJvbSAnLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBXaXRoU2VjdGlvbkhlYWRlcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBjbGFzcyBXaXRoU2VjdGlvbkhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgdGV4dCA9IGdldFNlY3Rpb25IZWFkZXJUZXh0KHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGV4dH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD17dGhpcy5zdGF0ZS50ZXh0fSAvPlxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoU2VjdGlvbkhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hPQy9XaXRoU2VjdGlvbkhlYWRlci9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRlcm1zT2ZTZXJ2aWNlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnanVzdGlmeScsIG1hcmdpbjogJzIwcHggMjBweCAwIDIwcHgnIH19PlxuICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlXG4gICAgICA8L3A+XG4gICAgICA8cCBzdHlsZT17eyBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgVGhlIEFpciBUYWlsb3IgUGxhdGZvcm0gcHJvdmlkZXMgZWFzeS10by11c2Ugc29mdHdhcmUgdG8gb3VyIFJldGFpbFxuICAgICAgICBQYXJ0bmVycywgcmVmZXJyZWQgdG8gaGVyZWluIGFzIHRoZSBcIlBhcnRuZXJzXCIsIGFsbG93aW5nIHRoZWlyIHN0b3JlXG4gICAgICAgIGFzc29jaWF0ZXMgdG8gb3JkZXIgY2xvdGhpbmcgYWx0ZXJhdGlvbnMgZnJvbSB0aGUgQWlyIFRhaWxvciBUYWlsb3JzLlxuICAgICAgICBUaGlzIHNvbHV0aW9uIHdpbGwgaGVscCBQYXJ0bmVycyBvZmZlciB0aGVpciByZXRhaWwgY3VzdG9tZXJzIGFcbiAgICAgICAgaGVpZ2h0ZW5lZCBzaG9wcGluZyBleHBlcmllbmNlLCB3aGljaCBwcm9tb3RlcyBoaWdoZXIgc3RvcmUgc2FsZXMgYW5kXG4gICAgICAgIGxvd2VycyB0aGUgYW1vdW50IG9mIHJldHVybmVkIG1lcmNoYW5kaXNlLlxuICAgICAgPC9wPlxuXG4gICAgICA8b2w+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+U2VydmljZXM8L3NwYW4+XG4gICAgICAgICAgLiBBaXIgVGFpbG9yIGFncmVlcyB0byBwcm92aWRlIHRoZSBmb2xsb3dpbmcgVGVjaG5vbG9neSBTZXJ2aWNlc1xuICAgICAgICAgIChkZWZpbmVkIGJlbG93KSBhbmQgTWFuYWdlbWVudCBTZXJ2aWNlcyAoZGVmaW5lZCBiZWxvdykgdG8gUGFydG5lcnMuXG4gICAgICAgICAgVG9nZXRoZXIsIHRoZSBUZWNobm9sb2d5IFNlcnZpY2VzIGFuZCBNYW5hZ2VtZW50IFNlcnZpY2VzIGFyZSByZWZlcnJlZFxuICAgICAgICAgIHRvIGhlcmVpbiBhcyB0aGUgXCJTZXJ2aWNlcy5cIlxuICAgICAgICA8L2xpPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8b2wgdHlwZT1cImFcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICBUZWNobm9sb2d5IFNlcnZpY2VzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAuIEFpciBUYWlsb3Igd2lsbCBwcm92aWRlIFBhcnRuZXJzIHdpdGggaXRzIGFsdGVyYXRpb24gYW5kIHRhaWxvclxuICAgICAgICAgICAgbWFuYWdlbWVudCBzb2Z0d2FyZSB2aWEgYSB3ZWIgY2xpZW50IChcIkFpciBUYWlsb3IgUGxhdGZvcm1cIikgaW5cbiAgICAgICAgICAgIG9yZGVyIHRvIHBlcm1pdCBQYXJ0bmVycyB0byBwbGFjZSBnYXJtZW50IHRhaWxvcmluZyBvcmRlcnMgdG8gdGhpcmRcbiAgICAgICAgICAgIHBhcnR5IHRhaWxvcnMgKGNvbGxlY3RpdmVseSwgXCJUYWlsb3JzXCIpOyB0cmFjayB0YWlsb3Jpbmcgb3JkZXJzIGFuZFxuICAgICAgICAgICAgcHJvdmlkZSBjZW50cmFsaXplZCwgdXAtdG8tZGF0ZSBzaGlwbWVudCBhbmQgc3RhdHVzIHJlcG9ydGluZztcbiAgICAgICAgICAgIGNlbnRyYWxpemUgY3VzdG9tZXIgc2VydmljZSwgYWNjb3VudCBtYW5hZ2VtZW50LCBiaWxsaW5nLCByZXBvcnRpbmdcbiAgICAgICAgICAgIGFuZCBwYXltZW50IGZ1bmN0aW9uYWxpdGllcyBmb3IgdGFpbG9yaW5nIG9yZGVycy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAgTWFuYWdlbWVudCBTZXJ2aWNlc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgLiBBaXIgVGFpbG9yIHdpbGwgcHJvdmlkZSBpdHMgQWlyIFRhaWxvciBQbGF0Zm9ybSB0byBmYWNpbGl0YXRlIGFsbFxuICAgICAgICAgICAgYmFjay1lbmQgb3JkZXJpbmcsIGZ1bGZpbGxtZW50LCBzaGlwcGluZy9kZWxpdmVyeSwgcGF5bWVudCBhbmRcbiAgICAgICAgICAgIHJlbGF0ZWQgc2VydmljZXMgYmV0d2VlbiBQYXJ0bmVycyBhbmQgVGFpbG9ycyAoY29sbGVjdGl2ZWx5LFxuICAgICAgICAgICAgXCJNYW5hZ2VtZW50IFNlcnZpY2VzXCIpLiBGb3IgdGhlIGF2b2lkYW5jZSBvZiBkb3VidCwgQWlyIFRhaWxvcixcbiAgICAgICAgICAgIHNoYWxsIG5vdCBiZSByZXNwb25zaWJsZSBmb3IgYW55IGNvc3RzIGFzc29jaWF0ZWQgd2l0aCBnb29kcyxcbiAgICAgICAgICAgIGNsb3RoaW5nIG9yIG90aGVyIHByb2R1Y3RzIGxvc3Qgb3IgZGFtYWdlZCBkdXJpbmcgc2hpcG1lbnQsXG4gICAgICAgICAgICBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBnb29kcywgY2xvdGhpbmcgb3Igb3RoZXIgcHJvZHVjdHMgbG9zdFxuICAgICAgICAgICAgb3IgZGFtYWdlZCBieSBzaGlwcGluZyBvciBtZXNzZW5nZXIvZGVsaXZlcnkgc2VydmljZXMuIFNob3VsZCBhXG4gICAgICAgICAgICB0YWlsb3JlZCBnYXJtZW50IGJlIGZvdW5kIGluIGdvb2QgZmFpdGggdG8gYmUgdW5zYXRpc2ZhY3RvcnkgYnkgYVxuICAgICAgICAgICAgUGFydG5lciwgQWlyIFRhaWxvciBzaGFsbCB1c2UgY29tbWVyY2lhbGx5IHJlYXNvbmFibGUgZWZmb3J0cyB0b1xuICAgICAgICAgICAgcmVwbGFjZSBvciByZXBhaXIgc2FpZCBnYXJtZW50IGF0IG5vIGFkZGl0aW9uYWwgY2hhcmdlLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlRhaWxvcnM8L3NwYW4+XG4gICAgICAgICAgICAuIEluIHRoZSBjb3Vyc2Ugb2YgcHJvdmlkaW5nIHRoZSBTZXJ2aWNlcyBjb250ZW1wbGF0ZWQgaGVyZWluLCBBaXJcbiAgICAgICAgICAgIFRhaWxvciBzaGFsbCBtYW5hZ2UgYW5kIGZhY2lsaXRhdGUgYWxsIHNlcnZpY2VzIHRoYXQgYXJlIHBlcmZvcm1lZFxuICAgICAgICAgICAgYnkgdGhlIFRhaWxvcnMgaW5jbHVkaW5nIG1hbmFnaW5nIFRhaWxvcmluZyBvcmRlcnMsIHRyYWNraW5nIGFuZFxuICAgICAgICAgICAgbWFuYWdpbmcgVGFpbG9yIGFjdGl2aXR5LCBhbmQgcmVzcG9uZGluZyB0byBhbnkgY3VzdG9tZXIgc2VydmljZVxuICAgICAgICAgICAgY29uY2VybnMgd2l0aCByZXNwZWN0IHRvIHRoZSBwZXJmb3JtYW5jZSBvZiB0aGUgYXBwbGljYWJsZSBUYWlsb3JzLlxuICAgICAgICAgICAgVGFpbG9ycyBzaGFsbCBoYXZlIGFjY2VzcyB0byBhbmQgdXRpbGl6ZSBwb3J0aW9ucyBvZiB0aGUgQWlyIFRhaWxvclxuICAgICAgICAgICAgUGxhdGZvcm0gaW4gb3JkZXIgdG8gYXNzaXN0IEFpciBUYWlsb3IgaW4gbWFuYWdpbmcgdGhlc2UgdGFza3MuIEFsbFxuICAgICAgICAgICAgVGFpbG9ycyB1dGlsaXplZCBieSB0aGUgQWlyIFRhaWxvciBQb3J0YWwgbXVzdCBiZSBwcmV2aW91c2x5IHZldHRlZFxuICAgICAgICAgICAgYW5kIGFwcHJvdmVkIHRvIHRoZSBzeXN0ZW0gYnkgQWlyIFRhaWxvciBzdGFmZiBwcmlvciB0byBhY2Nlc3NpbmdcbiAgICAgICAgICAgIHRoZSBBaXIgVGFpbG9yIFBsYXRmb3JtIG9yIFNlcnZpY2VzLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlBhcnRuZXLigJlzIFVzZXJzPC9zcGFuPlxuICAgICAgICAgICAgLiBQYXJ0bmVycyBtYXkgcGVybWl0IGVtcGxveWVlcyBhbmQgc2FsZXMgYXNzb2NpYXRlcyBhdCBpdHMgc3RvcmVcbiAgICAgICAgICAgIGxvY2F0aW9ucyAoXCJVc2Vyc1wiKSB0byBhY2Nlc3MgYW5kIHVzZSB0aGUgU2VydmljZXMuIFBhcnRuZXJzIHNoYWxsXG4gICAgICAgICAgICBzYWZlZ3VhcmQgYWxsIGFjY2VzcyB0byB0aGUgU2VydmljZXMgYW5kIGFsbCBjcmVkZW50aWFscyBwcm92aWRlZCBieVxuICAgICAgICAgICAgQWlyIFRhaWxvciBhbmQgc2hhbGwgZW5zdXJlIHRoZSBjb25maWRlbnRpYWxpdHkgYW5kIHNlY3VyaXR5XG4gICAgICAgICAgICB0aGVyZW9mLiBQYXJ0bmVycyBzaGFsbCBiZSBmdWxseSByZXNwb25zaWJsZSBmb3IsIGFuZCBzaGFsbFxuICAgICAgICAgICAgaW5kZW1uaWZ5IEFpciBUYWlsb3IgYW5kIGl0cyBJbmRlbW5pdGVlcyBmb3IsIHRoZSBhY3RzIGFuZCBvbWlzc2lvbnNcbiAgICAgICAgICAgIG9mIGl0cyBVc2Vycy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkZlZXM8L3NwYW4+LiBBbGxcbiAgICAgICAgICBhcHBsaWNhYmxlIGNvc3RzIHNoYWxsIGJlIHBhaWQgaW4gZnVsbCB3aXRoaW4gdGhpcnR5ICgzMCkgZGF5cyBhZnRlclxuICAgICAgICAgIHRoZSBkYXRlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGludm9pY2UgYW5kIGFyZSBub24tcmVmdW5kYWJsZSBvbmNlXG4gICAgICAgICAgcGFpZC4gUGFydG5lcnMgc2hhbGwgYmUgcmVzcG9uc2libGUgZm9yIGFsbCBzYWxlcywgdXNlLCBvciBvdGhlciB0YXhlc1xuICAgICAgICAgIGFuZCBvdGhlciBnb3Zlcm5tZW50YWwgY2hhcmdlcyBvbiBhbGwgYWx0ZXJhdGlvbnMgb3JkZXJlZCBhcyB3ZWxsIGFzXG4gICAgICAgICAgc2hpcHBpbmcvbWVzc2VuZ2VyIGNvc3RzIGZyb20gdGhlIHN0b3JlIHRvIHRoZSBUYWlsb3IuIEFpciBUYWlsb3Igd2lsbFxuICAgICAgICAgIGJlIHJlc3BvbnNpYmxlIGZvciBhbGwgc2hpcHBpbmcgYW5kIG1lc3Nlbmdlci9kZWxpdmVyeSBjb3N0cyBiYWNrIHRvXG4gICAgICAgICAgdGhlIHJldGFpbCBjdXN0b21lciBmcm9tIHRoZSBUYWlsb3IuIEFpciBUYWlsb3IgbWF5IHN1c3BlbmQgdGhlXG4gICAgICAgICAgcHJvdmlzaW9uIG9mIHRoZSBTZXJ2aWNlcyB1cG9uIHByaW9yIHdyaXR0ZW4gbm90aWNlIHRvIEN1c3RvbWVyIGlmIGFueVxuICAgICAgICAgIHBheW1lbnRzIGJlY29tZSB0aGlydHkgKDMwKSBvciBtb3JlIGRheXMgcGFzdCBkdWUuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGlcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+T3duZXJzaGlwPC9zcGFuPi5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG9sIHR5cGU9XCJhXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5UcmFkZW1hcmtzPC9zcGFuPi4gQWlyXG4gICAgICAgICAgICBUYWlsb3IgZ3JhbnRzIFBhcnRuZXJzIGEgbGltaXRlZCwgcmV2b2NhYmxlLCBub24tZXhjbHVzaXZlLFxuICAgICAgICAgICAgbm9uLXRyYW5zZmVyYWJsZSwgbm9uLXN1YmxpY2Vuc2FibGUgbGljZW5zZSB0byBhY2Nlc3MgYW5kIHVzZSBBaXJcbiAgICAgICAgICAgIFRhaWxvcuKAmXMgbmFtZXMsIGxvZ29zLCBkZXNpZ25zLCBhbmQgb3RoZXIgdHJhZGVtYXJrcyAoXCJNYXJrc1wiKVxuICAgICAgICAgICAgc29sZWx5IGZvciB0aGUgcHVycG9zZXMgb2YgbWFya2V0aW5nLCBkaXNwbGF5aW5nIGFuZCB1dGlsaXppbmcgdGhlXG4gICAgICAgICAgICBTZXJ2aWNlcywgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwgYW5kIEFpciBUYWlsb3IgUGxhdGZvcm0uXG4gICAgICAgICAgICBQYXJ0bmVycyBhZ3JlZSB0byB1c2UgdGhlIEFpciBUYWlsb3IgTWFya3MgY29uc2lzdGVudCB3aXRoIHRoZVxuICAgICAgICAgICAgaGlnaGVzdCBzdGFuZGFyZHMgb2YgcXVhbGl0eSBzbyBhcyB0byBwcm90ZWN0IGFuZCBtYWludGFpbiB0aGUgQWlyXG4gICAgICAgICAgICBUYWlsb3IgTWFya3MgYW5kIEFpciBUYWlsb3LigJlzIHJpZ2h0cyB0aGVyZWluLiBUbyB0aGlzIGVuZCwgUGFydG5lcnNcbiAgICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHJpZ2h0IHRvIHJldmlldyBhbmQgYXBwcm92ZSB0aGUgbWFubmVyIG9mIHVzZSBvZiB0aGVcbiAgICAgICAgICAgIEFpciBUYWlsb3IgTWFya3MsIGFuZCBQYXJ0bmVycyBhZ3JlZSB0byBtb2RpZnkgdXNlIG9mIGFueSBBaXIgVGFpbG9yXG4gICAgICAgICAgICBNYXJrcyB3aGljaCBkbyBub3QgbWVldCB0aGUgc3RhbmRhcmRzIHJlcXVpcmVkIGJ5IHRoZSBQYXJ0bmVyLlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cbiAgICAgICAgICAgICAgQWlyIFRhaWxvciBPd25lcnNoaXBcbiAgICAgICAgICAgIDwvc3Bhbj4uIEFpciBUYWlsb3Igc2hhbGwgcmV0YWluIGFsbCByaWdodCwgdGl0bGUgYW5kIGludGVyZXN0IGluXG4gICAgICAgICAgICBhbmQgdG8gdGhlIFNlcnZpY2VzLCB0aGUgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwsIGFuZCB0aGUgQWlyXG4gICAgICAgICAgICBUYWlsb3IgUGxhdGZvcm0gaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgYWxsIGNvbnRlbnQsIGNvbmNlcHRzLFxuICAgICAgICAgICAga25vdy1ob3csIHRvb2xzLCBzY3JpcHRzLCBtZXRob2RvbG9naWVzLCBwcm9jZXNzZXMsIGNvZGUsIG9yIG90aGVyXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3IgdHJhZGUgc2VjcmV0cyBhc3NvY2lhdGVkIHdpdGggdGhlIEFpclxuICAgICAgICAgICAgVGFpbG9yIEFsdGVyYXRpb25zIFBvcnRhbCwgQWlyIFRhaWxvciBQbGF0Zm9ybSwgb3Igb3RoZXJcbiAgICAgICAgICAgIHByZS1leGlzdGluZyBvciBpbmRlcGVuZGVudGx5IGRldmVsb3BlZCBpbnRlbGxlY3R1YWwgcHJvcGVydHlcbiAgICAgICAgICAgIGNyZWF0ZWQgYnkgQWlyIFRhaWxvciBhbmQgYW55IGVuaGFuY2VtZW50cywgbW9kaWZpY2F0aW9ucywgb3JcbiAgICAgICAgICAgIGltcHJvdmVtZW50cyB0byB0aGUgZm9yZWdvaW5nIGRldmVsb3BlZCBkdXJpbmcgb3IgaW5kZXBlbmRlbnQgb2YgdGhlXG4gICAgICAgICAgICBTZXJ2aWNlcyAoY29sbGVjdGl2ZWx5LCBcIkFpciBUYWlsb3IgSVBcIikuIEluIGNvbm5lY3Rpb24gd2l0aCB0aGVcbiAgICAgICAgICAgIFNlcnZpY2VzIGhlcmVpbiwgQWlyIFRhaWxvciBhbmQgUGFydG5lcnMgc2hhbGwgZXhjaGFuZ2UgZGF0YSB3aGljaFxuICAgICAgICAgICAgc2hhbGwgaW5jbHVkZSwgd2l0aG91dCBsaW1pdGF0aW9uLCBUYWlsb3Jpbmcgb3JkZXIgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIChjb2xsZWN0aXZlbHksIFwiRGF0YVwiKS4gUGFydG5lciBncmFudHMgQWlyIFRhaWxvciBhbiBpcnJldm9jYWJsZSxcbiAgICAgICAgICAgIHBlcnBldHVhbCwgd29ybGR3aWRlLCB0cmFuc2ZlcmFibGUsIG5vbi1leGNsdXNpdmUsIHJveWFsdHktZnJlZVxuICAgICAgICAgICAgbGljZW5zZSB0byB1c2UgYW5kIG1vZGlmeSBEYXRhIGluIHRoZSBjb3Vyc2Ugb2YgaXRzIGJ1c2luZXNzLlxuICAgICAgICAgICAgRnVydGhlciwgUGFydG5lcnMgYXJlIG5vdCByZXF1aXJlZCB0byBwcm92aWRlIGFueSBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGVuaGFuY2VtZW50IHJlcXVlc3RzLCByZWNvbW1lbmRhdGlvbnMgb3Igb3RoZXIgZmVlZGJhY2sgcmVnYXJkaW5nXG4gICAgICAgICAgICB0aGUgU2VydmljZXMgKFwiRmVlZGJhY2tcIiksIGJ1dCBpZiBQYXJ0bmVycyBkbyBzbywgUGFydG5lcnMgZ3JhbnRzXG4gICAgICAgICAgICBBaXIgVGFpbG9yIGEgbm9uLWV4Y2x1c2l2ZSwgcm95YWx0eS1mcmVlLCB3b3JsZHdpZGUsIHRyYW5zZmVyYWJsZSxcbiAgICAgICAgICAgIHN1Yi1saWNlbnNhYmxlLCBpcnJldm9jYWJsZSwgcGVycGV0dWFsIGxpY2Vuc2UgdG8gdXNlIG9yIGluY29ycG9yYXRlXG4gICAgICAgICAgICBpbnRvIHRoZSBTZXJ2aWNlcyBhbnkgRmVlZGJhY2sgc28gcHJvdmlkZWQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlJlc3RyaWN0aW9uczwvc3Bhbj4uXG4gICAgICAgICAgICBQYXJ0bmVycyBzaGFsbCBub3QgKG9yIHBlcm1pdCBhbnkgdGhpcmQgcGFydHkgdG8pIGRpcmVjdGx5IG9yXG4gICAgICAgICAgICBpbmRpcmVjdGx5IChpKSB1c2UgYW55IG9mIHRoZSBBaXIgVGFpbG9yIElQIG9yIEFpciBUYWlsb3JcbiAgICAgICAgICAgIENvbmZpZGVudGlhbCBJbmZvcm1hdGlvbiB0byBjcmVhdGUgYW55IHNlcnZpY2UsIHNvZnR3YXJlLFxuICAgICAgICAgICAgZG9jdW1lbnRhdGlvbiBvciBkYXRhIHRoYXQgaXMgY29tcGV0aXRpdmUgd2l0aCwgc3Vic3RhbnRpYWxseVxuICAgICAgICAgICAgc2ltaWxhciBvciBjb25mdXNpbmdseSBzaW1pbGFyIHRvIGFueSBhc3BlY3Qgb2YgdGhlIFNlcnZpY2VzOyAoaWkpXG4gICAgICAgICAgICByZXZlcnNlIGVuZ2luZWVyIG9yIHVzZSBhbnkgb3RoZXIgbWVhbnMgdG8gYXR0ZW1wdCB0byBkaXNjb3ZlciBhbnlcbiAgICAgICAgICAgIHNvdXJjZSBjb2RlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uOyAoaWlpKSBlbmN1bWJlciwgcGxlZGdlLCByZXNlbGwsXG4gICAgICAgICAgICBzaGFyZSwgc3VibGljZW5zZSwgdHJhbnNmZXIsIHJlbnQsIGxlYXNlLCB0aW1lLXNoYXJlIG9yIHVzZSB0aGVcbiAgICAgICAgICAgIFNlcnZpY2VzLCBBaXIgVGFpbG9yIElQIG9yIEFpciBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIGZvclxuICAgICAgICAgICAgdGhlIGJlbmVmaXQgb2YgYW55IHRoaXJkIHBhcnR5OyAoaXYpIG1vZGlmeSwgbWFudWZhY3R1cmUsIGFkYXB0LFxuICAgICAgICAgICAgY3JlYXRlIGRlcml2YXRpdmUgd29ya3Mgb2Ygb3Igb3RoZXJ3aXNlIG1vZGlmeSBhbnkgYXNwZWN0IG9mIHRoZVxuICAgICAgICAgICAgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyIFRhaWxvciBDb25maWRlbnRpYWwgSW5mb3JtYXRpb247ICh2KVxuICAgICAgICAgICAgdXNlIHRoZSBTZXJ2aWNlcywgQWlyIFRhaWxvciBJUCBhbmQgQWlyIFRhaWxvciBDb25maWRlbnRpYWxcbiAgICAgICAgICAgIEluZm9ybWF0aW9uIHRvIHN1cHBvcnQgYW55IGFjdGl2aXR5IHRoYXQgaXMgaW5mcmluZ2luZyBvciBpbGxlZ2FsO1xuICAgICAgICAgICAgKHZpKSB0cmFuc21pdCBoYXJtZnVsLCBkaXNhYmxpbmcgb3IgbWFsaWNpb3VzIGNvZGUgb3IgZGV2aWNlcyBvclxuICAgICAgICAgICAgZGlzYWJsZSwgb3ZlcnJpZGUgb3IgYWNjZXNzIHRoZSBTZXJ2aWNlcywgQWlyIFRhaWxvciBJUCBhbmQgQWlyXG4gICAgICAgICAgICBUYWlsb3IgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uLCBvciBhY2Nlc3MgdGhlIHNhbWUgZm9yIHB1cnBvc2VzIG9mXG4gICAgICAgICAgICBtb25pdG9yaW5nIHRoZWlyIHBlcmZvcm1hbmNlIG9yIGZ1bmN0aW9uYWxpdHk7IG9yICh2aWkpIHJlbW92ZSxcbiAgICAgICAgICAgIGFsdGVyIG9yIG9ic2N1cmUgYW55IGNvcHlyaWdodCBvciBvdGhlciBwcm9wcmlldGFyeSBub3RpY2VzIG9uIHRoZVxuICAgICAgICAgICAgU2VydmljZXMsIEFpciBUYWlsb3IgSVAgb3IgQWlyIFRhaWxvciBDb25maWRlbnRpYWwgSW5mb3JtYXRpb24uXG4gICAgICAgICAgICBOb3R3aXRoc3RhbmRpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnRyYXJ5IGhlcmVpbiwgQWlyIFRhaWxvciBtYXksIGluXG4gICAgICAgICAgICBpdHMgc29sZSBkaXNjcmV0aW9uLCBpbW1lZGlhdGVseSByZXZva2UgYWNjZXNzIGlmIGEgUGFydG5lciBicmVhY2hlc1xuICAgICAgICAgICAgdGhlIHJlc3RyaWN0aW9ucyBpbiB0aGlzIFNlY3Rpb24gb3IgY3JlYXRlcyBvdGhlciBzZWN1cml0eSBvciBsZWdhbFxuICAgICAgICAgICAgY29uY2VybnMuIFBhcnRuZXIgaGVyZWJ5IGFncmVlcyB0aGF0IEFpciBUYWlsb3Igd2lsbCBiZSBlbnRpdGxlZCwgaW5cbiAgICAgICAgICAgIGFkZGl0aW9uIHRvIGFueSBvdGhlciByZW1lZGllcyBhdmFpbGFibGUgdG8gaXQgYXQgbGF3IG9yIGluIGVxdWl0eSxcbiAgICAgICAgICAgIHRvIGluanVuY3RpdmUgcmVsaWVmIHRvIHByZXZlbnQgdGhlIGJyZWFjaCBvciB0aHJlYXRlbmVkIGJyZWFjaCBvZlxuICAgICAgICAgICAgUGFydG5lcuKAmXMgb2JsaWdhdGlvbnMgdW5kZXIgdGhpcyBTZWN0aW9uLCB3aXRob3V0IGFueSByZXF1aXJlbWVudCB0b1xuICAgICAgICAgICAgZGVtb25zdHJhdGUgaXJyZXBhcmFibGUgaGFybSBvciBwb3N0IGEgYm9uZC5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XG4gICAgICAgICAgICAgIFBhcnRuZXIgT3duZXJzaGlwXG4gICAgICAgICAgICA8L3NwYW4+LiBQYXJ0bmVycyBzaGFsbCByZXRhaW4gYWxsIHJpZ2h0LCB0aXRsZSwgb3duZXJzaGlwIGFuZFxuICAgICAgICAgICAgaW50ZXJlc3QgaW4gYW5kIHRvIChpKSB0aGUgUGFydG5lcuKAmXMgd2Vic2l0ZXM7IChpaSkgYWxsIG1hdGVyaWFscyBvclxuICAgICAgICAgICAgcHJvZHVjdHMgdGhhdCBhcmUgdGhlIHN1YmplY3Qgb2YgYW55IFRhaWxvcmluZyBPcmRlcnM7IGFuZCAoaWkpIGFsbFxuICAgICAgICAgICAgY29udGVudCwgdHJhZGVtYXJrcywgY29weXJpZ2h0cywgcGF0ZW50cywgb3Igb3RoZXIgaW50ZWxsZWN0dWFsXG4gICAgICAgICAgICBhbmQvb3IgcHJvcHJpZXRhcnkgcHJvcGVydHkgb2YgdGhlIFBhcnRuZXIgY29udGFpbmVkIHRoZXJlaW5cbiAgICAgICAgICAgIChjb2xsZWN0aXZlbHksIFwiUGFydG5lciBDb250ZW50XCIpLiBQYXJ0bmVycyBncmFudHMgQWlyIFRhaWxvciBhXG4gICAgICAgICAgICBub24tZXhjbHVzaXZlLCBsaW1pdGVkLCByb3lhbHR5LWZyZWUsIG5vbi10cmFuc2ZlcmFibGUgbGljZW5zZSB0b1xuICAgICAgICAgICAgdXNlLCBob3N0LCBkaXN0cmlidXRlLCByZXByb2R1Y2UsIHBlcmZvcm0sIGRpc3BsYXksIG1vZGlmeSBhbmRcbiAgICAgICAgICAgIGNyZWF0ZSBkZXJpdmF0aXZlIHdvcmtzIG9mIFBhcnRuZXIgQ29udGVudCB0byB0aGUgZXh0ZW50IG5lY2Vzc2FyeVxuICAgICAgICAgICAgdG8gcGVyZm9ybSBTZXJ2aWNlcyBmb3IgUGFydG5lci5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgUmVwcmVzZW50YXRpb25zLCBXYXJyYW50aWVzLCBhbmQgSW5kZW1uaXR5XG4gICAgICAgICAgPC9zcGFuPi5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG9sIHR5cGU9XCJhXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5QYXJ0bmVyczwvc3Bhbj4uXG4gICAgICAgICAgICBQYXJ0bmVycyByZXByZXNlbnQgYW5kIHdhcnJhbnQgdGhhdCB0aGV5IHNoYWxsIHByb3ZpZGUgYWxsXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiwgbWF0ZXJpYWxzLCBhY2Nlc3MgYW5kIGNvb3BlcmF0aW9uIG5lY2Vzc2FyeSBmb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgdG8gcHJvdmlkZSB0aGUgU2VydmljZXMgYW5kIHNoYWxsIHByb2N1cmUgYWxsIGNvbm5lY3Rpdml0eSxcbiAgICAgICAgICAgIGVxdWlwbWVudCBhbmQgc29mdHdhcmUgYXMgbmVlZGVkIHRvIGFjY2VzcyB0aGUgU2VydmljZXMgb3IgQWlyXG4gICAgICAgICAgICBUYWlsb3IgUGxhdGZvcm07IChpaSkgdGhlIFBhcnRuZXIgQ29udGVudCwgYW5kIEFpciBUYWlsb3LigJlzIHVzZSBvZlxuICAgICAgICAgICAgUGFydG5lciBDb250ZW50IGFzIGNvbnRlbXBsYXRlZCBoZXJlaW4sIHdpbGwgbm90IHZpb2xhdGUgdGhlXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHksIHByaXZhY3kgb3IgcHVibGljaXR5IG9yIG90aGVyIHJpZ2h0cyBvZiBhbnlcbiAgICAgICAgICAgIHRoaXJkIHBhcnR5OyAoaWlpKSBQYXJ0bmVycyBzaGFsbCBjb21wbHkgd2l0aCBhbGwgYXBwbGljYWJsZVxuICAgICAgICAgICAgZmVkZXJhbCwgc3RhdGUsIGFuZCBsb2NhbCBsYXdzLCBydWxlcyBhbmQgcmVndWxhdGlvbnM7IGFuZCAoaXYpXG4gICAgICAgICAgICBQYXJ0bmVycyBoYXZlIHRoZSByaWdodCB0byBwcm92aWRlIERhdGEgdG8gQWlyIFRhaWxvciBmb3IgdGhlXG4gICAgICAgICAgICBwdXJwb3NlcyBjb250ZW1wbGF0ZWQgaGVyZWluIGFuZCB0aGF0IGl0cyBjb2xsZWN0aW9uLCBwcm92aXNpb24gYW5kXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIERhdGEgaXMgY29tcGxpYW50IHdpdGggYWxsIGFwcGxpY2FibGUgbGF3cyBhbmRcbiAgICAgICAgICAgIHNlbGYtcmVndWxhdG9yeSBwcmluY2lwbGVzIGNvbmNlcm5pbmcgcHJpdmFjeSBhbmQgZGF0YSBzZWN1cml0eSBhbmRcbiAgICAgICAgICAgIHdpdGggUGFydG5lcuKAmXMgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+QWlyIFRhaWxvcjwvc3Bhbj4uIEFpclxuICAgICAgICAgICAgVGFpbG9yIHJlcHJlc2VudHMgYW5kIHdhcnJhbnRzIHRoYXQgKGkpIHRoZSBBaXIgVGFpbG9yIElQLCBpbmNsdWRpbmdcbiAgICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0byB0aGUgQWlyIFRhaWxvciBBbHRlcmF0aW9ucyBQb3J0YWwgYW5kIEFpciBUYWlsb3JcbiAgICAgICAgICAgIFBsYXRmb3JtLCBzaGFsbCBub3QgdG8gQWlyIFRhaWxvcuKAmXMga25vd2xlZGdlIGF0IHRoZSB0aW1lIG9mXG4gICAgICAgICAgICBkZWxpdmVyeSBjb250YWluIGFueSBUcm9qYW4gaG9yc2VzLCB2aXJ1c2VzLCBkYW1hZ2luZyBjb21wdXRlclxuICAgICAgICAgICAgcHJvZ3JhbW1pbmcsIHdvcm1zLCBvciB1bmRvY3VtZW50ZWQgZGlzYWJsaW5nIGRldmljZXM7IChpaSkgdGhlIEFpclxuICAgICAgICAgICAgVGFpbG9yIElQLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHRoZSBBaXIgVGFpbG9yIEFsdGVyYXRpb25zXG4gICAgICAgICAgICBQb3J0YWwgYW5kIEFpciBUYWlsb3IgUGxhdGZvcm0sIHNoYWxsIG5vdCBpbmZyaW5nZSBvbixcbiAgICAgICAgICAgIG1pc2FwcHJvcHJpYXRlIGFuZC9vciB2aW9sYXRlIHRoZSBjb3B5cmlnaHQsIHRyYWRlbWFyaywgcGF0ZW50LFxuICAgICAgICAgICAgcmlnaHQgb2YgcHJpdmFjeSBvciBwdWJsaWNpdHksIG9yIHRyYWRlIHNlY3JldCByaWdodHMgb3IgYW55IG90aGVyXG4gICAgICAgICAgICBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzIG9mIGFueSB0aGlyZCBQYXJ0eSwgYW5kIChpaWkpIGluXG4gICAgICAgICAgICBwcm92aWRpbmcgdGhlIFNlcnZpY2VzLCBBaXIgVGFpbG9yIHNoYWxsIGNvbXBseSB3aXRoIGFsbCBhcHBsaWNhYmxlXG4gICAgICAgICAgICBsYXdzLCBydWxlcyBhbmQgcmVndWxhdGlvbnMuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkRpc2NsYWltZXJzPC9zcGFuPi5cbiAgICAgICAgICAgIEV4Y2VwdCBhcyBzZXQgZm9ydGggaGVyZWluIGluIHRoaXMgYWdyZWVtZW50LCBBaXIgVGFpbG9yIGRvZXMgbm90XG4gICAgICAgICAgICB3YXJyYW50IHRoYXQgdGhlIHNlcnZpY2VzIHdpbGwgbWVldCBQYXJ0bmVy4oCZcyByZXF1aXJlbWVudHMgb3IgcmVzdWx0XG4gICAgICAgICAgICBpbiBhbnkgb3V0Y29tZSwgb3IgdGhhdCB0aGVpciBvcGVyYXRpb24gd2lsbCBiZSB1bmludGVycnVwdGVkIG9yXG4gICAgICAgICAgICBlcnJvci1mcmVlLiBBaXIgVGFpbG9yIGhlcmVieSBkaXNjbGFpbXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsXG4gICAgICAgICAgICB3aGV0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZCwgb3JhbCBvciB3cml0dGVuLCBpbmNsdWRpbmcgd2l0aG91dFxuICAgICAgICAgICAgbGltaXRhdGlvbiwgYWxsIGltcGxpZWQgd2FycmFudGllcyBvciB0aXRsZSwgbWVyY2hhbnRhYmlsaXR5LFxuICAgICAgICAgICAgbm9uLWluZnJpbmdlbWVudCBvciBmaXRuZXNzIGZvciBhbnkgcGFydGljdWxhciBwdXJwb3NlLiBBaXIgVGFpbG9yXG4gICAgICAgICAgICBzaGFsbCBub3QgYmUgcmVzcG9uc2libGUgZm9yIGFueSB0aGlyZCBwYXJ0eSBzdXBwbGllcnMgb3IgZm9yIGFueVxuICAgICAgICAgICAgdGhpcmQgcGFydHkgcGxhdGZvcm1zLCBzb2Z0d2FyZSBvciBpbnRlbGxlY3R1YWwgcHJvcGVydHkuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PkluZGVtbml0eTwvc3Bhbj4uIEVhY2hcbiAgICAgICAgICAgIFBhcnR5IHNoYWxsIGRlZmVuZCwgaW5kZW1uaWZ5IGFuZCBob2xkIGhhcm1sZXNzIHRoZSBvdGhlciBQYXJ0eSBhbmRcbiAgICAgICAgICAgIGl0cyBhZmZpbGlhdGVzLCBlbXBsb3llZXMsIHJlcHJlc2VudGF0aXZlcywgc3VjY2Vzc29ycyBhbmQgYXNzaWduc1xuICAgICAgICAgICAgZnJvbSBhbmQgYWdhaW5zdCBhbnkgYW5kIGFsbCBsb3NzZXMsIGNvc3RzLCBkYW1hZ2VzLCBsaWFiaWxpdGllc1xuICAgICAgICAgICAgKGluY2x1ZGluZyByZWFzb25hYmxlIG91dHNpZGUgYXR0b3JuZXkncyBmZWVzIGFuZCBleHBlbnNlcykgaW5cbiAgICAgICAgICAgIGNvbm5lY3Rpb24gd2l0aCBhbnkgdGhpcmQgUGFydHkgY2xhaW0sIGFjdGlvbiwgc3VpdHMsIHJlZ3VsYXRvcnlcbiAgICAgICAgICAgIGludmVzdGlnYXRpb25zIG9yIHN1YnBvZW5hcyAoY29sbGVjdGl2ZWx5LCBcIkNsYWltc1wiKSB0byB0aGUgZXh0ZW50XG4gICAgICAgICAgICBhcmlzaW5nIGZyb20gc3VjaCBpbmRlbW5pZnlpbmcgUGFydHkncyAoaSkgYnJlYWNoIG9mIGl0c1xuICAgICAgICAgICAgcmVwcmVzZW50YXRpb25zLCB3YXJyYW50aWVzIG9yIGNvdmVuYW50cyB1bmRlciB0aGlzIEFncmVlbWVudDtcbiAgICAgICAgICAgIGFuZC9vciAoaWkpIGdyb3NzIG5lZ2xpZ2VuY2Ugb3Igd2lsbGZ1bCBtaXNjb25kdWN0IG9mIHN1Y2ggUGFydHksXG4gICAgICAgICAgICBpdHMgZW1wbG95ZWVzIG9yIGFnZW50cywgcHJvdmlkZWQgdGhhdCB0aGUgaW5kZW1uaWZpZWQgUGFydHkgZ2l2ZXNcbiAgICAgICAgICAgIHRoZSBpbmRlbW5pZnlpbmcgUGFydHkgKGEpIHByb21wdCB3cml0dGVuIG5vdGljZSBvZiBhbnkgQ2xhaW1zLCAoYilcbiAgICAgICAgICAgIHNvbGUgY29udHJvbCBvdmVyIHRoZSBkZWZlbnNlIGFuZC9vciBzZXR0bGVtZW50IG9mIGFueSBDbGFpbXMsIGFuZFxuICAgICAgICAgICAgKGMpIHJlYXNvbmFibGUgY29vcGVyYXRpb24gaW4gY29ubmVjdGlvbiB3aXRoIHN1Y2ggZGVmZW5zZSBhbmQvb3JcbiAgICAgICAgICAgIHNldHRsZW1lbnQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxuICAgICAgICAgICAgICBMaW1pdGF0aW9uIG9uIExpYWJpbGl0eVxuICAgICAgICAgICAgPC9zcGFuPi4gSW4gbm8gZXZlbnQgc2hhbGwgZWl0aGVyIHBhcnR5IGJlIGxpYWJsZSBmb3IgYW55IGluZGlyZWN0LFxuICAgICAgICAgICAgcHVuaXRpdmUsIGluY2lkZW50YWwsIHJlbGlhbmNlLCBzcGVjaWFsLCBleGVtcGxhcnkgb3IgY29uc2VxdWVudGlhbFxuICAgICAgICAgICAgZGFtYWdlcyBpbmNsdWRpbmcsIGJ1dCBub3QgbGltaXRlZCB0bywgbG9zcyBvZiBidXNpbmVzcywgcmV2ZW51ZXMsXG4gICAgICAgICAgICBwcm9maXRzIGFuZCBnb29kd2lsbCBhbmQgQWlyIFRhaWxvcuKAmXMgYWdncmVnYXRlIGxpYWJpbGl0eSBmb3IgYW55XG4gICAgICAgICAgICBkaXJlY3QgZGFtYWdlcyBzaGFsbCBub3QgZXhjZWVkIHRoZSBmZWVzIHBhaWQgZHVyaW5nIHRoZSB0ZXJtIG9mXG4gICAgICAgICAgICB0aGlzIGFncmVlbWVudC5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19Pk1pc2NlbGxhbmVvdXM8L3NwYW4+LlxuICAgICAgICAgIFRoZSBBZ3JlZW1lbnQgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3Mgb2YgdGhlIFN0YXRlIG9mIE5ldyBZb3JrLFxuICAgICAgICAgIHdpdGhvdXQgcmVnYXJkIHRvIGNvbmZsaWN0IG9mIGxhdyBwcmluY2lwbGVzLiBBbnkgZGlzcHV0ZSBhcmlzaW5nIG91dFxuICAgICAgICAgIG9mIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGlzIGFncmVlbWVudCBzaGFsbCBiZSBicm91Z2h0IGluIHRoZVxuICAgICAgICAgIGZlZGVyYWwgb3Igc3RhdGUgY291cnRzIG9mIE5ldyBZb3JrIENvdW50eSwgTmV3IFlvcmsuIEluIHRoZSBldmVudFxuICAgICAgICAgIHRoYXQgZWl0aGVyIFBhcnR5IGlzIHByZXZlbnRlZCBmcm9tIHBlcmZvcm1pbmcsIG9yIGlzIHVuYWJsZSB0b1xuICAgICAgICAgIHBlcmZvcm0gKG90aGVyIHRoYW4gUGFydG5lcuKAmXMgcGF5bWVudCBvYmxpZ2F0aW9ucyksIGFueSBvZiBpdHNcbiAgICAgICAgICBvYmxpZ2F0aW9ucyB1bmRlciB0aGlzIEFncmVlbWVudCBkdWUgdG8gYW55IGZvcmNlIG1hamV1cmUgKGUuZy4sIGZvcmNlXG4gICAgICAgICAgb2YgbmF0dXJlLCBmaXJlLCBuYXR1cmFsIGRpc2FzdGVyLCBhY2NpZGVudCwgcmlvdHMsIGFjdHMgb2ZcbiAgICAgICAgICBnb3Zlcm5tZW50LCBhY3RzIG9mIHdhciBvciB0ZXJyb3Jpc20sIGZhaWx1cmUgb2YgdHJhbnNwb3J0YXRpb24gb3JcbiAgICAgICAgICBjb21tdW5pY2F0aW9ucyBvciBvZiBzdXBwbGllcnMgb2YgZ29vZHMgb3Igc2VydmljZXMsIGNoYW5nZXMgdG8gYW55XG4gICAgICAgICAgdGhpcmQgUGFydHkgcGxhdGZvcm1zLCB0cmFuc3BvcnQgZmFpbHVyZXMsIGFueSB1c2FnZSByZXN0cmljdGlvbnNcbiAgICAgICAgICBpbXBvc2VkIGJ5IGFueSBzdWNoIHRoaXJkIFBhcnR5IHBsYXRmb3Jtcywgb3IgYW55IGRlbGF5cyBvciBvdXRhZ2VzXG4gICAgICAgICAgYXJpc2luZyBpbiBjb25uZWN0aW9uIHdpdGggc3VjaCB0aGlyZCBQYXJ0eSBwbGF0Zm9ybXMsIHRoZSBtYWxpY2lvdXNcbiAgICAgICAgICBhY3RzIG9mIHRoaXJkIFBhcnRpZXMgKGUuZy4gY3liZXItYXR0YWNrcyksIG9yIGFueSBvdGhlciBjYXVzZSBiZXlvbmRcbiAgICAgICAgICB0aGUgcmVhc29uYWJsZSBjb250cm9sIG9mIHN1Y2ggUGFydHkpLCB0aGUgYWZmZWN0ZWQgUGFydHkgc2hhbGwgZ2l2ZVxuICAgICAgICAgIHdyaXR0ZW4gbm90aWNlIHRoZXJlb2YgdG8gdGhlIG90aGVyIFBhcnR5IGFuZCBpdHMgcGVyZm9ybWFuY2Ugc2hhbGwgYmVcbiAgICAgICAgICBleHRlbmRlZCBmb3IgdGhlIHBlcmlvZCBvZiBkZWxheSBvciBpbmFiaWxpdHkgdG8gcGVyZm9ybSBkdWUgdG8gc3VjaFxuICAgICAgICAgIG9jY3VycmVuY2UuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNPZlNlcnZpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9UZXJtc09mU2VydmljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=