webpackJsonp([13],{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _PrivacyPolicy = __webpack_require__(715);

var _PrivacyPolicy2 = _interopRequireDefault(_PrivacyPolicy);

var _WithSectionHeader = __webpack_require__(709);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _LogoMessage = __webpack_require__(113);

var _LogoMessage2 = _interopRequireDefault(_LogoMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivacyPolicyPage = function (_Component) {
  _inherits(PrivacyPolicyPage, _Component);

  function PrivacyPolicyPage() {
    _classCallCheck(this, PrivacyPolicyPage);

    return _possibleConstructorReturn(this, (PrivacyPolicyPage.__proto__ || Object.getPrototypeOf(PrivacyPolicyPage)).apply(this, arguments));
  }

  _createClass(PrivacyPolicyPage, [{
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
          text: 'Hi! Here\'s our Privacy Policy'
        }),
        _react2.default.createElement(
          'div',
          { style: { overflow: 'scroll', paddingBottom: '500px' } },
          _react2.default.createElement(_PrivacyPolicy2.default, null)
        )
      );
    }
  }]);

  return PrivacyPolicyPage;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(PrivacyPolicyPage);

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

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy(props) {
  return _react2.default.createElement(
    'div',
    {
      style: {
        fontFamily: 'arial',
        fontSize: '14px',
        padding: '20px',
        textAlign: 'justify'
      }
    },
    _react2.default.createElement(
      'p',
      {
        style: {
          fontWeight: 'bold',
          textAlign: 'center'
        }
      },
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We at Air Tailor (\u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D) know that our customers (\u201Cyou\u201D or \u201Cyour\u201D) care about how your personal information is used and shared, and we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclosure information, and your rights in relation to that information. Please read the following to learn more about our Privacy Policy. By using the Air Tailor text or web-based service, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways. You also acknowledge and agree that your use of any and all services, products, features, content or applications other than (or additional to) the Services offered by or for Air Tailor may be governed by separate terms of service.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'I. WHAT DOES THIS PRIVACY POLICY COVER?',
      _react2.default.createElement('br', null),
      'This Privacy Policy covers our treatment of Personal Information and Other Information we gather from you when you are accessing or using our Services. Personally identifiable information (\u201CPersonal Information\u201D) may include, but is not limited to, your name, username, home and/or work address, telephone number, e-mail address, company affiliation and associated interests. We collect some of this Personal Information by requesting it directly from you, and we may also obtain information about you from third-party sources, as described below.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Air Tailor also observes, derives, collects and infers other information (\u201COther Information\u201D) through your interaction with and use of the Services, which does not reveal your specific identity or does not directly relate to an individual. Other Information may include, but is not limited to, browser and device information (such as browser type and version, operating system and version, device ID and language, and Internet connection), data collected through automated electronic interactions, application usage data, demographic information, geographic or geo-location information (including without limitation, precise geo-location), IP address, and statistical and aggregated information. Other Information may constitute Personal Information when coupled with Personal Information that we hold and process about you. In such circumstances such Other Information shall be treated as Personal Information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This Privacy Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Our Services are not intended for users under 13 years of age. We do not knowingly collect or solicit Personal Information from anyone under the age of 13. If you are under 13, please do not attempt to access or use the Services or send any information about yourself to us, including your name, address, telephone number, or email address.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We gather various types of Personal Information and Other Information from our users, as explained more fully below. We may use this Personal Information and Other Information to personalize and improve our services, to allow our users to set up a user account and profile, to contact users, to fulfill your requests for certain products and services, to analyze how users utilize the Services, and as otherwise set forth in this Privacy Policy. We may share certain types of Personal Information with third parties, as described below.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'II. WHAT INFORMATION DOES AIR TAILOR COLLECT?',
      _react2.default.createElement('br', null),
      '1. Information You Provide to Us',
      _react2.default.createElement('br', null),
      'We collect information you provide directly to us, such as when you create or modify your account and profile, request or provide services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items and services requested, delivery and service notes, and other information you choose to provide. You can choose not to provide us with certain Personal Information, but then you may not be able to register with us or to take full advantage of our Services. We may also ask for additional information about items and services requested and delivery and service notes, and other information you may choose to provide. We may aggregate and/or anonymize your Personal Information so that you cannot be individually identified, and provide that information to our other customers, service providers, partners or other third parties, including, without limitation, to provide benchmarking data.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '2. Information We Collect Through Your Use of Our Services',
      _react2.default.createElement('br', null),
      'When you use our Services, we may collect the following information about you:'
    ),
    _react2.default.createElement(
      'ol',
      { type: 'a' },
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Transaction Information: We collect transaction details related to your use of our Services. This includes the type of Service requested, fees, the date and time the service was provided, and ratings feedback.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Financial Information: We do not currently collect financial information, such as your payment method (valid credit card number, type, expiration date or other financial information); that information is collected and stored by our third party payment processing company (the \u201CPayment Processor\u201D), and use and storage of that information is governed by the Payment Processor\u2019s applicable terms of service and privacy policy. Presently, we use Stripe as our Payment Processor, and their privacy policy is found',
        _react2.default.createElement(
          'a',
          { target: 'blank', href: 'http://stripe.com/us/privacy/' },
          ' ',
          'here'
        ),
        '.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Location Information: Where you consent to such use through the permission system on your mobile operating system, we may collect precise location data about your location. We use this location information, for example, to determine if the user is on site in a customer location. We may also approximate your current location using your IP address. Where you have allowed the App to access location services through your mobile operating system\u2019s permission system, we may also collect the location of your device when the App is running in the foreground or background.'
      ),
      _react2.default.createElement(
        'li',
        {
          style: {
            fontFamily: 'arial',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        },
        'Cookies and Similar Technologies: We and our service providers may use technologies like \u201Ccookies,\u201D pixels, and local storage (like on your browser or device, which is similar to a cookie but holds more information) and identifiers (including identifiers supplied by your browser or device or by app platform companies) on our website, in our emails, and within our apps to provide you with a range of products and services. You can control cookies through your browser settings and other tools. Please be aware that limiting the ability of websites to set cookies, however, may worsen your overall user experience, and in some cases the Services will not work properly without the use of cookies, local storage and similar technologies.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      '3. Information We Receive from Third Parties',
      _react2.default.createElement('br', null),
      'We receive and store information from third parties that interact in some way with the Services or that provide services to us in connection with the Services. In addition, you may choose to use third party services, websites or apps that share your Personal Information, activities and/or content with Air Tailor. Please read the privacy policy of any such service so that you understand its sharing practices.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'III. USE AND SHARING OF INFORMATION',
      _react2.default.createElement('br', null),
      'We neither rent nor sell your Personal Information in personally identifiable form to anyone. However, we do use and share with third parties your Personal Information and Other Information as described in Section II and in this Section:'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Service Providers.'
      ),
      ' We employ other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you, such as your profile information (including your address), the location of your device and other information. Unless we tell you differently, our service providers do not have any right to use the Personal Information we share with them beyond what is necessary to assist us.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Payment Processors.'
      ),
      ' As noted above, we use a third party Payment Processor, with which we share Personal Information in order to complete transactions on the Services. As noted above, we currently use Stripe as our Payment Processor, and their privacy policy is found here.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Facilitate Communications Between Air Tailor and you.'
      ),
      'We may use your information to send you communications we think will be of interest to you, including information about products, services, promotions, news, and events of Air Tailor and other companies, where permissible and according to local applicable laws.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Services Provision, Maintenance and Upgrades.'
      ),
      'We use your information to provide, maintain, improve and personalize our Services, including, to send receipts, provide products and services you request (and send related information), develop new features, provide customer support to you, develop safety features, authenticate users, send product updates and administrative messages, to perform internal operations, including, for example, to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Business Transfers.'
      ),
      ' We may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that would be transferred. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, Personal Information would be one of the assets transferred to or acquired by third parties.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Protection of Air Tailor and Others.'
      ),
      'We reserve the right to access, read, preserve, and disclose any information that we reasonably believe is necessary to comply with law or a court order; enforce or apply our conditions of use and other agreements; or protect the rights, property, or the safety of Air Tailor, our employees, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'With Your Consent.'
      ),
      ' Except as set forth above, you will be notified when your Personal Information may be shared with third parties in personally identifiable form, and will be offered an opportunity to prevent the sharing of this information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Internal Operations, Analytics and Testing.'
      ),
      ' ',
      'We use both Personal Information and Other Information to perform internal operations, including, for example, to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct analysis, testing, and research; and for monitoring and analyzing usage rates. In particular, we use Google Analytics to help us to collect and analyze certain information for the purposes discussed above. To opt-out of Google Analytics, click',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://tools.google.com/dlpage/gaoptout' },
        'here'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Aggregated and/or Anonymized Data.'
      ),
      'We may use any aggregated and/or anonymized data derived from or incorporating your Personal Information after you update or delete it for any purpose, but not in a manner that would identify you personally.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Advertisers.'
      ),
      'We may use third parties to administer a limited set of Air Tailor advertisements on third party electronic channels. No Personal Information is provided to the advertisers as part of this process, but aggregate profile information or Other Information, such as implied or inferred interests, may be used in the selection of advertising to make sure that it has relevance to the user. Some banner ads may contain embedded pixels that may write and read cookies or return session connection information that allows advertisers to better determine how many individual users have clicked on the ad banner. We may also use advertising technologies and participate in advertising technology networks that collect Other Information from Air Tailor and non-Air Tailor Services, as well as from other sources, to show you Air Tailor-related advertisements on Air Tailor\u2019s own and third-party websites and apps.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        'Other Information.'
      ),
      'We may use, transfer, and disclose Other Information we collect for any purpose, except where applicable law requires otherwise. If we are required to treat Other Information as Personal Information under applicable law, then we will only use it in the same way that we are permitted to use and disclose Personal Information.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The grounds on which we process your Personal Information include where you have given your consent, where it is necessary to provide you the Service, or where it is necessary to fulfil our obligations to a third party in providing you with the Services.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'IV. WHAT RIGHTS AND CHOICES DO I HAVE?',
      _react2.default.createElement('br', null),
      'If you wish to cancel your account, please email us at hello@airtailor.com. Please note that some information may remain in our records after your deletion of such information from your account. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Air Tailor will comply with individual\u2019s requests regarding access, correction, and/or deletion of the personal data it stores in accordance with applicable law.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '1. Interest Based Advertising',
      _react2.default.createElement('br', null),
      'As discussed above, we may partner with third parties to provide Interest Based Advertising. For information about how to opt out of receiving interest-based advertisements, or to learn more about interest-based advertising in general and to access the opt-outs of other online advertising companies, visit the Network Advertising Initiative at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.networkadvertising.org/choices/' },
        'http://www.networkadvertising.org/choices/'
      ),
      ' ',
      'or the Digital Advertising Alliance (DAA) at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.aboutads.info/choices/' },
        'http://www.aboutads.info/choices/'
      ),
      ' ',
      'or, for interest-based advertising in apps, by using the DAA\u2019s \u201CAppChoices\u201D application available at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'http://http://www.aboutads.info/appchoices' },
        'http://http://www.aboutads.info/appchoices'
      ),
      '. By opting out, you may still receive ads from Air Tailor, but you still stop receiving ads from Air Tailor that have been targeted to you based on your visits and browsing activity across websites over time.'
    ),
    _react2.default.createElement(
      'p',
      null,
      '2. Do Not Track Signals',
      _react2.default.createElement('br', null),
      'At this time we honor web browser Do Not Track (\u201CDNT\u201D) signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'V. MARKETING AND EMAIL COMMUNICATION',
      _react2.default.createElement('br', null),
      'By providing your email address to us, you expressly consent to receive emails from us, where permitted by law. We may use email to communicate with you, to send information that you have requested or to send information about other products or services developed or provided by us or our partners. If you do not want to receive commercial email or other mail from us, you may unsubscribe using the unsubscribe link at the bottom of an email you receive. Please note that if you do not want to receive legal notices from us, such as notices regarding this Privacy Policy, those legal notices will still govern your use of the Services, and you are responsible for reviewing such legal notices for changes. We may receive a confirmation when you open an email from Air Tailor if your computer supports this type of program. Air Tailor uses this confirmation to help us make emails more interesting and helpful and to improve our service.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VI. SECURITY',
      _react2.default.createElement('br', null),
      'Air Tailor uses commercially reasonable physical, electronic, and procedural safeguards to protect your Personal Information against loss or unauthorized access, use, modification, or deletion. However, no security program is foolproof, and thus we cannot guarantee the absolute security of your Personal Information or Other Information. We will retain your Personal Information for as long as reasonably necessary to accomplish the purposes in this Privacy Policy or as required by law.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VII. FAIR INFORMATION PRACTICES',
      _react2.default.createElement('br', null),
      'Should a data breach occur, we will notify you via email within 7 business days.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'VIII. CHANGES TO THIS PRIVACY POLICY',
      _react2.default.createElement('br', null),
      'We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we use Personal Information, we will notify you by posting an announcement on our Website or sending you a message. You are bound by any changes to the Privacy Policy when you use the Services after such changes have been first posted.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'IX. CONTACT US',
      _react2.default.createElement('br', null),
      'If you have any questions or concerns regarding our Privacy Policy, please send us a message to hello@airtailor.com.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Updated January 10th, 2018'
    )
  );
};

exports.default = PrivacyPolicy;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy90ZXJtcy9Qcml2YWN5UG9saWN5UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyLmpzPzUyNTkqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSE9DL1dpdGhTZWN0aW9uSGVhZGVyL2hlbHBlci5qcz85OTIzKioqKiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaW5kZXguanM/MjhmMyoqKioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvdGVybXMvUHJpdmFjeVBvbGljeS5qcz9lN2JmIl0sIm5hbWVzIjpbIlByaXZhY3lQb2xpY3lQYWdlIiwid2lkdGgiLCJtYXJnaW4iLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nQm90dG9tIiwib3ZlcmZsb3ciLCJDYXJ0UmliYm9uIiwicm90YXRlIiwicHJvcHMiLCJ1c2VyUm9sZXMiLCJpbmNsdWRlTGluayIsImxpbmsiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlc2V0Q2FydCIsImFkbWluIiwicmV0YWlsZXIiLCJTZWN0aW9uSGVhZGVyIiwidGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwic3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldFNlY3Rpb25IZWFkZXJUZXh0IiwicGF0aCIsIm1hdGNoIiwiV2l0aFNlY3Rpb25IZWFkZXIiLCJXcmFwcGVkQ29tcG9uZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIlByaXZhY3lQb2xpY3kiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7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K1RFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLE9BQU8sRUFBRUEsWUFBWSxNQUFkLEVBQWI7QUFBQTtBQUFBLE9BREY7QUFBQTtBQUFBLEtBL1RGO0FBd1VFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4VUY7QUErVUU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBQUEsS0EvVUY7QUE0VkU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBUWdCLFNBUmhCO0FBU0U7QUFBQTtBQUFBLFVBQUcsTUFBSyw0Q0FBUjtBQUFBO0FBQUEsT0FURjtBQVdPLFNBWFA7QUFBQTtBQVkrQyxTQVovQztBQWFFO0FBQUE7QUFBQSxVQUFHLE1BQUssbUNBQVI7QUFBQTtBQUFBLE9BYkY7QUFlTyxTQWZQO0FBQUE7QUFpQndDLFNBakJ4QztBQWtCRTtBQUFBO0FBQUEsVUFBRyxNQUFLLDRDQUFSO0FBQUE7QUFBQSxPQWxCRjtBQUFBO0FBQUEsS0E1VkY7QUFxWEU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBQUEsS0FyWEY7QUE2WEU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBQUEsS0E3WEY7QUFnWkU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBQUEsS0FoWkY7QUE0WkU7QUFBQTtBQUFBO0FBQUE7QUFFRSwrQ0FGRjtBQUFBO0FBQUEsS0E1WkY7QUFtYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5hRjtBQTZhRTtBQUFBO0FBQUE7QUFBQTtBQUVFLCtDQUZGO0FBQUE7QUFBQSxLQTdhRjtBQXliRTtBQUFBO0FBQUE7QUFBQTtBQUVFLCtDQUZGO0FBQUE7QUFBQSxLQXpiRjtBQWdjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaGNGLEdBREY7QUFvY0QsQ0FyY0Q7O2tCQXVjZUosYSIsImZpbGUiOiIxMy4yZGYyYTY3NWRiYzcyZTkyYWVkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL1ByaXZhY3lQb2xpY3knO1xuaW1wb3J0IFdpdGhTZWN0aW9uSGVhZGVyIGZyb20gJy4uL0hPQy9XaXRoU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgTG9nb01lc3NhZ2UgZnJvbSAnLi4vTG9nb01lc3NhZ2UnO1xuXG5jbGFzcyBQcml2YWN5UG9saWN5UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgICBtYXJnaW46ICc1MHB4IGF1dG8nLFxuICAgICAgICAgIGhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxMDBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMb2dvTWVzc2FnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ24taW4tbG9nb1wiXG4gICAgICAgICAgdGV4dD1cIkhpISBIZXJlJ3Mgb3VyIFByaXZhY3kgUG9saWN5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnc2Nyb2xsJywgcGFkZGluZ0JvdHRvbTogJzUwMHB4JyB9fT5cbiAgICAgICAgICA8UHJpdmFjeVBvbGljeSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFdpdGhTZWN0aW9uSGVhZGVyKFByaXZhY3lQb2xpY3lQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3Rlcm1zL1ByaXZhY3lQb2xpY3lQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgQ2FydFJpYmJvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByb3RhdGUsIHVzZXJSb2xlcywgaW5jbHVkZUxpbmsgPSB0cnVlIH0gPSBwcm9wcztcbiAgbGV0IGxpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgb25DbGljaztcblxuICBpZiAoIXJvdGF0ZSB8fCByb3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluayA9ICcvb3JkZXJzL25ldyc7XG4gICAgb25DbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBvbkNsaWNrID0gKCkgPT4gcHJvcHMucmVzZXRDYXJ0KCk7XG4gIH1cblxuICBpZiAocHJvcHMudXNlclJvbGVzLmFkbWluIHx8IHByb3BzLnVzZXJSb2xlcy5yZXRhaWxlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJjYXJ0LXJpYmJvblwiIHRvPXtsaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGNhcnQtcmliYm9uLXNpZ24gJHtyb3RhdGV9YH0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgK1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmliYm9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgIDxoMj57cHJvcHMudGV4dH08L2gyPlxuICAgICAge0NhcnRSaWJib24ocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RvcmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVc2VyOiBzdG9yZS5jdXJyZW50VXNlcixcbiAgICB1c2VyUm9sZXM6IHN0b3JlLnVzZXJSb2xlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICByZXNldENhcnQsXG4gICAgfSxcbiAgICBkaXNwYXRjaFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlY3Rpb25IZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci5qcyIsImV4cG9ydCBjb25zdCBnZXRTZWN0aW9uSGVhZGVyVGV4dCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtYXRjaDogeyBwYXRoIH0gfSA9IHByb3BzO1xuICBpZiAocGF0aCA9PT0gJy9hZG1pbi9yZXBvcnRzJykge1xuICAgIHJldHVybiAnQWlyIFRhaWxvciAvIFJlcG9ydHMnO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvYWRtaW4vcmVwb3J0cy9vcmRlcnMnKSB7XG4gICAgcmV0dXJuICdBaXIgVGFpbG9yIC8gT3JkZXIgUmVwb3J0cyc7XG4gIH0gZWxzZSBpZiAocGF0aCA9PT0gJy9zdG9yZXMvbmV3Jykge1xuICAgIHJldHVybiAnU3RvcmVzIC8gTmV3JztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3VzZXJzLzp1c2VyX2lkL2VkaXQnKSB7XG4gICAgcmV0dXJuICdFZGl0IFVzZXInO1xuICB9IGVsc2UgaWYgKHBhdGggPT09ICcvb3JkZXJzL25ldycpIHtcbiAgICByZXR1cm4gJ0FncmVlIFRvIFRlcm1zJztcbiAgfSBlbHNlIGlmIChwYXRoID09PSAnL3NpdGUvdGVybXNfb2Zfc2VydmljZScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaGVscGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi8uLi9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7Z2V0U2VjdGlvbkhlYWRlclRleHR9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gV2l0aFNlY3Rpb25IZWFkZXIoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gY2xhc3MgV2l0aFNlY3Rpb25IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBnZXRTZWN0aW9uSGVhZGVyVGV4dCh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9e3RoaXMuc3RhdGUudGV4dH0gLz5cbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aFNlY3Rpb25IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IT0MvV2l0aFNlY3Rpb25IZWFkZXIvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdhcmlhbCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxwXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2UgYXQgQWlyIFRhaWxvciAo4oCcd2Us4oCdIOKAnHVz4oCdIG9yIOKAnG91cuKAnSkga25vdyB0aGF0IG91ciBjdXN0b21lcnMgKOKAnHlvdeKAnSBvclxuICAgICAgICDigJx5b3Vy4oCdKSBjYXJlIGFib3V0IGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHVzZWQgYW5kIHNoYXJlZCwgYW5kXG4gICAgICAgIHdlIHRha2UgeW91ciBwcml2YWN5IHNlcmlvdXNseS4gVGhpcyBQcml2YWN5IFBvbGljeSBkZXNjcmliZXMgaG93IHdlXG4gICAgICAgIGNvbGxlY3QsIHVzZSwgYW5kIGRpc2Nsb3N1cmUgaW5mb3JtYXRpb24sIGFuZCB5b3VyIHJpZ2h0cyBpbiByZWxhdGlvbiB0b1xuICAgICAgICB0aGF0IGluZm9ybWF0aW9uLiBQbGVhc2UgcmVhZCB0aGUgZm9sbG93aW5nIHRvIGxlYXJuIG1vcmUgYWJvdXQgb3VyXG4gICAgICAgIFByaXZhY3kgUG9saWN5LiBCeSB1c2luZyB0aGUgQWlyIFRhaWxvciB0ZXh0IG9yIHdlYi1iYXNlZCBzZXJ2aWNlLCB5b3VcbiAgICAgICAgYWNrbm93bGVkZ2UgdGhhdCB5b3UgYWNjZXB0IHRoZSBwcmFjdGljZXMgYW5kIHBvbGljaWVzIG91dGxpbmVkIGluIHRoaXNcbiAgICAgICAgUHJpdmFjeSBQb2xpY3ksIGFuZCB5b3UgaGVyZWJ5IGNvbnNlbnQgdGhhdCB3ZSB3aWxsIGNvbGxlY3QsIHVzZSwgYW5kXG4gICAgICAgIHNoYXJlIHlvdXIgaW5mb3JtYXRpb24gaW4gdGhlIGZvbGxvd2luZyB3YXlzLiBZb3UgYWxzbyBhY2tub3dsZWRnZSBhbmRcbiAgICAgICAgYWdyZWUgdGhhdCB5b3VyIHVzZSBvZiBhbnkgYW5kIGFsbCBzZXJ2aWNlcywgcHJvZHVjdHMsIGZlYXR1cmVzLCBjb250ZW50XG4gICAgICAgIG9yIGFwcGxpY2F0aW9ucyBvdGhlciB0aGFuIChvciBhZGRpdGlvbmFsIHRvKSB0aGUgU2VydmljZXMgb2ZmZXJlZCBieSBvclxuICAgICAgICBmb3IgQWlyIFRhaWxvciBtYXkgYmUgZ292ZXJuZWQgYnkgc2VwYXJhdGUgdGVybXMgb2Ygc2VydmljZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIEkuIFdIQVQgRE9FUyBUSElTIFBSSVZBQ1kgUE9MSUNZIENPVkVSP1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgVGhpcyBQcml2YWN5IFBvbGljeSBjb3ZlcnMgb3VyIHRyZWF0bWVudCBvZiBQZXJzb25hbCBJbmZvcm1hdGlvbiBhbmRcbiAgICAgICAgT3RoZXIgSW5mb3JtYXRpb24gd2UgZ2F0aGVyIGZyb20geW91IHdoZW4geW91IGFyZSBhY2Nlc3Npbmcgb3IgdXNpbmcgb3VyXG4gICAgICAgIFNlcnZpY2VzLiBQZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiAo4oCcUGVyc29uYWwgSW5mb3JtYXRpb27igJ0pXG4gICAgICAgIG1heSBpbmNsdWRlLCBidXQgaXMgbm90IGxpbWl0ZWQgdG8sIHlvdXIgbmFtZSwgdXNlcm5hbWUsIGhvbWUgYW5kL29yXG4gICAgICAgIHdvcmsgYWRkcmVzcywgdGVsZXBob25lIG51bWJlciwgZS1tYWlsIGFkZHJlc3MsIGNvbXBhbnkgYWZmaWxpYXRpb24gYW5kXG4gICAgICAgIGFzc29jaWF0ZWQgaW50ZXJlc3RzLiBXZSBjb2xsZWN0IHNvbWUgb2YgdGhpcyBQZXJzb25hbCBJbmZvcm1hdGlvbiBieVxuICAgICAgICByZXF1ZXN0aW5nIGl0IGRpcmVjdGx5IGZyb20geW91LCBhbmQgd2UgbWF5IGFsc28gb2J0YWluIGluZm9ybWF0aW9uXG4gICAgICAgIGFib3V0IHlvdSBmcm9tIHRoaXJkLXBhcnR5IHNvdXJjZXMsIGFzIGRlc2NyaWJlZCBiZWxvdy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIEFpciBUYWlsb3IgYWxzbyBvYnNlcnZlcywgZGVyaXZlcywgY29sbGVjdHMgYW5kIGluZmVycyBvdGhlciBpbmZvcm1hdGlvblxuICAgICAgICAo4oCcT3RoZXIgSW5mb3JtYXRpb27igJ0pIHRocm91Z2ggeW91ciBpbnRlcmFjdGlvbiB3aXRoIGFuZCB1c2Ugb2YgdGhlXG4gICAgICAgIFNlcnZpY2VzLCB3aGljaCBkb2VzIG5vdCByZXZlYWwgeW91ciBzcGVjaWZpYyBpZGVudGl0eSBvciBkb2VzIG5vdFxuICAgICAgICBkaXJlY3RseSByZWxhdGUgdG8gYW4gaW5kaXZpZHVhbC4gT3RoZXIgSW5mb3JtYXRpb24gbWF5IGluY2x1ZGUsIGJ1dCBpc1xuICAgICAgICBub3QgbGltaXRlZCB0bywgYnJvd3NlciBhbmQgZGV2aWNlIGluZm9ybWF0aW9uIChzdWNoIGFzIGJyb3dzZXIgdHlwZSBhbmRcbiAgICAgICAgdmVyc2lvbiwgb3BlcmF0aW5nIHN5c3RlbSBhbmQgdmVyc2lvbiwgZGV2aWNlIElEIGFuZCBsYW5ndWFnZSwgYW5kXG4gICAgICAgIEludGVybmV0IGNvbm5lY3Rpb24pLCBkYXRhIGNvbGxlY3RlZCB0aHJvdWdoIGF1dG9tYXRlZCBlbGVjdHJvbmljXG4gICAgICAgIGludGVyYWN0aW9ucywgYXBwbGljYXRpb24gdXNhZ2UgZGF0YSwgZGVtb2dyYXBoaWMgaW5mb3JtYXRpb24sXG4gICAgICAgIGdlb2dyYXBoaWMgb3IgZ2VvLWxvY2F0aW9uIGluZm9ybWF0aW9uIChpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLFxuICAgICAgICBwcmVjaXNlIGdlby1sb2NhdGlvbiksIElQIGFkZHJlc3MsIGFuZCBzdGF0aXN0aWNhbCBhbmQgYWdncmVnYXRlZFxuICAgICAgICBpbmZvcm1hdGlvbi4gT3RoZXIgSW5mb3JtYXRpb24gbWF5IGNvbnN0aXR1dGUgUGVyc29uYWwgSW5mb3JtYXRpb24gd2hlblxuICAgICAgICBjb3VwbGVkIHdpdGggUGVyc29uYWwgSW5mb3JtYXRpb24gdGhhdCB3ZSBob2xkIGFuZCBwcm9jZXNzIGFib3V0IHlvdS4gSW5cbiAgICAgICAgc3VjaCBjaXJjdW1zdGFuY2VzIHN1Y2ggT3RoZXIgSW5mb3JtYXRpb24gc2hhbGwgYmUgdHJlYXRlZCBhcyBQZXJzb25hbFxuICAgICAgICBJbmZvcm1hdGlvbi5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgUHJpdmFjeSBQb2xpY3kgZG9lcyBub3QgYXBwbHkgdG8gdGhlIHByYWN0aWNlcyBvZiBjb21wYW5pZXMgdGhhdCB3ZVxuICAgICAgICBkbyBub3Qgb3duIG9yIGNvbnRyb2wsIG9yIHRvIGluZGl2aWR1YWxzIHRoYXQgd2UgZG8gbm90IGVtcGxveSBvclxuICAgICAgICBtYW5hZ2UuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBPdXIgU2VydmljZXMgYXJlIG5vdCBpbnRlbmRlZCBmb3IgdXNlcnMgdW5kZXIgMTMgeWVhcnMgb2YgYWdlLiBXZSBkbyBub3RcbiAgICAgICAga25vd2luZ2x5IGNvbGxlY3Qgb3Igc29saWNpdCBQZXJzb25hbCBJbmZvcm1hdGlvbiBmcm9tIGFueW9uZSB1bmRlciB0aGVcbiAgICAgICAgYWdlIG9mIDEzLiBJZiB5b3UgYXJlIHVuZGVyIDEzLCBwbGVhc2UgZG8gbm90IGF0dGVtcHQgdG8gYWNjZXNzIG9yIHVzZVxuICAgICAgICB0aGUgU2VydmljZXMgb3Igc2VuZCBhbnkgaW5mb3JtYXRpb24gYWJvdXQgeW91cnNlbGYgdG8gdXMsIGluY2x1ZGluZ1xuICAgICAgICB5b3VyIG5hbWUsIGFkZHJlc3MsIHRlbGVwaG9uZSBudW1iZXIsIG9yIGVtYWlsIGFkZHJlc3MuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBXZSBnYXRoZXIgdmFyaW91cyB0eXBlcyBvZiBQZXJzb25hbCBJbmZvcm1hdGlvbiBhbmQgT3RoZXIgSW5mb3JtYXRpb25cbiAgICAgICAgZnJvbSBvdXIgdXNlcnMsIGFzIGV4cGxhaW5lZCBtb3JlIGZ1bGx5IGJlbG93LiBXZSBtYXkgdXNlIHRoaXMgUGVyc29uYWxcbiAgICAgICAgSW5mb3JtYXRpb24gYW5kIE90aGVyIEluZm9ybWF0aW9uIHRvIHBlcnNvbmFsaXplIGFuZCBpbXByb3ZlIG91clxuICAgICAgICBzZXJ2aWNlcywgdG8gYWxsb3cgb3VyIHVzZXJzIHRvIHNldCB1cCBhIHVzZXIgYWNjb3VudCBhbmQgcHJvZmlsZSwgdG9cbiAgICAgICAgY29udGFjdCB1c2VycywgdG8gZnVsZmlsbCB5b3VyIHJlcXVlc3RzIGZvciBjZXJ0YWluIHByb2R1Y3RzIGFuZFxuICAgICAgICBzZXJ2aWNlcywgdG8gYW5hbHl6ZSBob3cgdXNlcnMgdXRpbGl6ZSB0aGUgU2VydmljZXMsIGFuZCBhcyBvdGhlcndpc2VcbiAgICAgICAgc2V0IGZvcnRoIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kuIFdlIG1heSBzaGFyZSBjZXJ0YWluIHR5cGVzIG9mIFBlcnNvbmFsXG4gICAgICAgIEluZm9ybWF0aW9uIHdpdGggdGhpcmQgcGFydGllcywgYXMgZGVzY3JpYmVkIGJlbG93LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgSUkuIFdIQVQgSU5GT1JNQVRJT04gRE9FUyBBSVIgVEFJTE9SIENPTExFQ1Q/XG4gICAgICAgIDxiciAvPlxuICAgICAgICAxLiBJbmZvcm1hdGlvbiBZb3UgUHJvdmlkZSB0byBVc1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2UgY29sbGVjdCBpbmZvcm1hdGlvbiB5b3UgcHJvdmlkZSBkaXJlY3RseSB0byB1cywgc3VjaCBhcyB3aGVuIHlvdVxuICAgICAgICBjcmVhdGUgb3IgbW9kaWZ5IHlvdXIgYWNjb3VudCBhbmQgcHJvZmlsZSwgcmVxdWVzdCBvciBwcm92aWRlIHNlcnZpY2VzLFxuICAgICAgICBjb250YWN0IGN1c3RvbWVyIHN1cHBvcnQsIG9yIG90aGVyd2lzZSBjb21tdW5pY2F0ZSB3aXRoIHVzLiBUaGlzXG4gICAgICAgIGluZm9ybWF0aW9uIG1heSBpbmNsdWRlOiBuYW1lLCBlbWFpbCwgcGhvbmUgbnVtYmVyLCBwb3N0YWwgYWRkcmVzcyxcbiAgICAgICAgcHJvZmlsZSBwaWN0dXJlLCBwYXltZW50IG1ldGhvZCwgaXRlbXMgYW5kIHNlcnZpY2VzIHJlcXVlc3RlZCwgZGVsaXZlcnlcbiAgICAgICAgYW5kIHNlcnZpY2Ugbm90ZXMsIGFuZCBvdGhlciBpbmZvcm1hdGlvbiB5b3UgY2hvb3NlIHRvIHByb3ZpZGUuIFlvdSBjYW5cbiAgICAgICAgY2hvb3NlIG5vdCB0byBwcm92aWRlIHVzIHdpdGggY2VydGFpbiBQZXJzb25hbCBJbmZvcm1hdGlvbiwgYnV0IHRoZW4geW91XG4gICAgICAgIG1heSBub3QgYmUgYWJsZSB0byByZWdpc3RlciB3aXRoIHVzIG9yIHRvIHRha2UgZnVsbCBhZHZhbnRhZ2Ugb2Ygb3VyXG4gICAgICAgIFNlcnZpY2VzLiBXZSBtYXkgYWxzbyBhc2sgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgaXRlbXMgYW5kXG4gICAgICAgIHNlcnZpY2VzIHJlcXVlc3RlZCBhbmQgZGVsaXZlcnkgYW5kIHNlcnZpY2Ugbm90ZXMsIGFuZCBvdGhlciBpbmZvcm1hdGlvblxuICAgICAgICB5b3UgbWF5IGNob29zZSB0byBwcm92aWRlLiBXZSBtYXkgYWdncmVnYXRlIGFuZC9vciBhbm9ueW1pemUgeW91clxuICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbiBzbyB0aGF0IHlvdSBjYW5ub3QgYmUgaW5kaXZpZHVhbGx5IGlkZW50aWZpZWQsIGFuZFxuICAgICAgICBwcm92aWRlIHRoYXQgaW5mb3JtYXRpb24gdG8gb3VyIG90aGVyIGN1c3RvbWVycywgc2VydmljZSBwcm92aWRlcnMsXG4gICAgICAgIHBhcnRuZXJzIG9yIG90aGVyIHRoaXJkIHBhcnRpZXMsIGluY2x1ZGluZywgd2l0aG91dCBsaW1pdGF0aW9uLCB0b1xuICAgICAgICBwcm92aWRlIGJlbmNobWFya2luZyBkYXRhLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgMi4gSW5mb3JtYXRpb24gV2UgQ29sbGVjdCBUaHJvdWdoIFlvdXIgVXNlIG9mIE91ciBTZXJ2aWNlc1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2hlbiB5b3UgdXNlIG91ciBTZXJ2aWNlcywgd2UgbWF5IGNvbGxlY3QgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvblxuICAgICAgICBhYm91dCB5b3U6XG4gICAgICA8L3A+XG4gICAgICA8b2wgdHlwZT1cImFcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdhcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFRyYW5zYWN0aW9uIEluZm9ybWF0aW9uOiBXZSBjb2xsZWN0IHRyYW5zYWN0aW9uIGRldGFpbHMgcmVsYXRlZCB0b1xuICAgICAgICAgIHlvdXIgdXNlIG9mIG91ciBTZXJ2aWNlcy4gVGhpcyBpbmNsdWRlcyB0aGUgdHlwZSBvZiBTZXJ2aWNlIHJlcXVlc3RlZCxcbiAgICAgICAgICBmZWVzLCB0aGUgZGF0ZSBhbmQgdGltZSB0aGUgc2VydmljZSB3YXMgcHJvdmlkZWQsIGFuZCByYXRpbmdzXG4gICAgICAgICAgZmVlZGJhY2suXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnYXJpYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBGaW5hbmNpYWwgSW5mb3JtYXRpb246IFdlIGRvIG5vdCBjdXJyZW50bHkgY29sbGVjdCBmaW5hbmNpYWxcbiAgICAgICAgICBpbmZvcm1hdGlvbiwgc3VjaCBhcyB5b3VyIHBheW1lbnQgbWV0aG9kICh2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIsXG4gICAgICAgICAgdHlwZSwgZXhwaXJhdGlvbiBkYXRlIG9yIG90aGVyIGZpbmFuY2lhbCBpbmZvcm1hdGlvbik7IHRoYXRcbiAgICAgICAgICBpbmZvcm1hdGlvbiBpcyBjb2xsZWN0ZWQgYW5kIHN0b3JlZCBieSBvdXIgdGhpcmQgcGFydHkgcGF5bWVudFxuICAgICAgICAgIHByb2Nlc3NpbmcgY29tcGFueSAodGhlIOKAnFBheW1lbnQgUHJvY2Vzc29y4oCdKSwgYW5kIHVzZSBhbmQgc3RvcmFnZSBvZlxuICAgICAgICAgIHRoYXQgaW5mb3JtYXRpb24gaXMgZ292ZXJuZWQgYnkgdGhlIFBheW1lbnQgUHJvY2Vzc29y4oCZcyBhcHBsaWNhYmxlXG4gICAgICAgICAgdGVybXMgb2Ygc2VydmljZSBhbmQgcHJpdmFjeSBwb2xpY3kuIFByZXNlbnRseSwgd2UgdXNlIFN0cmlwZSBhcyBvdXJcbiAgICAgICAgICBQYXltZW50IFByb2Nlc3NvciwgYW5kIHRoZWlyIHByaXZhY3kgcG9saWN5IGlzIGZvdW5kXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwiaHR0cDovL3N0cmlwZS5jb20vdXMvcHJpdmFjeS9cIj5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBoZXJlXG4gICAgICAgICAgPC9hPi5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdhcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvY2F0aW9uIEluZm9ybWF0aW9uOiBXaGVyZSB5b3UgY29uc2VudCB0byBzdWNoIHVzZSB0aHJvdWdoIHRoZVxuICAgICAgICAgIHBlcm1pc3Npb24gc3lzdGVtIG9uIHlvdXIgbW9iaWxlIG9wZXJhdGluZyBzeXN0ZW0sIHdlIG1heSBjb2xsZWN0XG4gICAgICAgICAgcHJlY2lzZSBsb2NhdGlvbiBkYXRhIGFib3V0IHlvdXIgbG9jYXRpb24uIFdlIHVzZSB0aGlzIGxvY2F0aW9uXG4gICAgICAgICAgaW5mb3JtYXRpb24sIGZvciBleGFtcGxlLCB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgaXMgb24gc2l0ZSBpbiBhXG4gICAgICAgICAgY3VzdG9tZXIgbG9jYXRpb24uIFdlIG1heSBhbHNvIGFwcHJveGltYXRlIHlvdXIgY3VycmVudCBsb2NhdGlvbiB1c2luZ1xuICAgICAgICAgIHlvdXIgSVAgYWRkcmVzcy4gV2hlcmUgeW91IGhhdmUgYWxsb3dlZCB0aGUgQXBwIHRvIGFjY2VzcyBsb2NhdGlvblxuICAgICAgICAgIHNlcnZpY2VzIHRocm91Z2ggeW91ciBtb2JpbGUgb3BlcmF0aW5nIHN5c3RlbeKAmXMgcGVybWlzc2lvbiBzeXN0ZW0sIHdlXG4gICAgICAgICAgbWF5IGFsc28gY29sbGVjdCB0aGUgbG9jYXRpb24gb2YgeW91ciBkZXZpY2Ugd2hlbiB0aGUgQXBwIGlzIHJ1bm5pbmdcbiAgICAgICAgICBpbiB0aGUgZm9yZWdyb3VuZCBvciBiYWNrZ3JvdW5kLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ29va2llcyBhbmQgU2ltaWxhciBUZWNobm9sb2dpZXM6IFdlIGFuZCBvdXIgc2VydmljZSBwcm92aWRlcnMgbWF5IHVzZVxuICAgICAgICAgIHRlY2hub2xvZ2llcyBsaWtlIOKAnGNvb2tpZXMs4oCdIHBpeGVscywgYW5kIGxvY2FsIHN0b3JhZ2UgKGxpa2Ugb24geW91clxuICAgICAgICAgIGJyb3dzZXIgb3IgZGV2aWNlLCB3aGljaCBpcyBzaW1pbGFyIHRvIGEgY29va2llIGJ1dCBob2xkcyBtb3JlXG4gICAgICAgICAgaW5mb3JtYXRpb24pIGFuZCBpZGVudGlmaWVycyAoaW5jbHVkaW5nIGlkZW50aWZpZXJzIHN1cHBsaWVkIGJ5IHlvdXJcbiAgICAgICAgICBicm93c2VyIG9yIGRldmljZSBvciBieSBhcHAgcGxhdGZvcm0gY29tcGFuaWVzKSBvbiBvdXIgd2Vic2l0ZSwgaW4gb3VyXG4gICAgICAgICAgZW1haWxzLCBhbmQgd2l0aGluIG91ciBhcHBzIHRvIHByb3ZpZGUgeW91IHdpdGggYSByYW5nZSBvZiBwcm9kdWN0c1xuICAgICAgICAgIGFuZCBzZXJ2aWNlcy4gWW91IGNhbiBjb250cm9sIGNvb2tpZXMgdGhyb3VnaCB5b3VyIGJyb3dzZXIgc2V0dGluZ3NcbiAgICAgICAgICBhbmQgb3RoZXIgdG9vbHMuIFBsZWFzZSBiZSBhd2FyZSB0aGF0IGxpbWl0aW5nIHRoZSBhYmlsaXR5IG9mIHdlYnNpdGVzXG4gICAgICAgICAgdG8gc2V0IGNvb2tpZXMsIGhvd2V2ZXIsIG1heSB3b3JzZW4geW91ciBvdmVyYWxsIHVzZXIgZXhwZXJpZW5jZSwgYW5kXG4gICAgICAgICAgaW4gc29tZSBjYXNlcyB0aGUgU2VydmljZXMgd2lsbCBub3Qgd29yayBwcm9wZXJseSB3aXRob3V0IHRoZSB1c2Ugb2ZcbiAgICAgICAgICBjb29raWVzLCBsb2NhbCBzdG9yYWdlIGFuZCBzaW1pbGFyIHRlY2hub2xvZ2llcy5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG5cbiAgICAgIDxwPlxuICAgICAgICAzLiBJbmZvcm1hdGlvbiBXZSBSZWNlaXZlIGZyb20gVGhpcmQgUGFydGllc1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2UgcmVjZWl2ZSBhbmQgc3RvcmUgaW5mb3JtYXRpb24gZnJvbSB0aGlyZCBwYXJ0aWVzIHRoYXQgaW50ZXJhY3QgaW5cbiAgICAgICAgc29tZSB3YXkgd2l0aCB0aGUgU2VydmljZXMgb3IgdGhhdCBwcm92aWRlIHNlcnZpY2VzIHRvIHVzIGluIGNvbm5lY3Rpb25cbiAgICAgICAgd2l0aCB0aGUgU2VydmljZXMuIEluIGFkZGl0aW9uLCB5b3UgbWF5IGNob29zZSB0byB1c2UgdGhpcmQgcGFydHlcbiAgICAgICAgc2VydmljZXMsIHdlYnNpdGVzIG9yIGFwcHMgdGhhdCBzaGFyZSB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uLFxuICAgICAgICBhY3Rpdml0aWVzIGFuZC9vciBjb250ZW50IHdpdGggQWlyIFRhaWxvci4gUGxlYXNlIHJlYWQgdGhlIHByaXZhY3lcbiAgICAgICAgcG9saWN5IG9mIGFueSBzdWNoIHNlcnZpY2Ugc28gdGhhdCB5b3UgdW5kZXJzdGFuZCBpdHMgc2hhcmluZyBwcmFjdGljZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBJSUkuIFVTRSBBTkQgU0hBUklORyBPRiBJTkZPUk1BVElPTlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2UgbmVpdGhlciByZW50IG5vciBzZWxsIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gaW4gcGVyc29uYWxseVxuICAgICAgICBpZGVudGlmaWFibGUgZm9ybSB0byBhbnlvbmUuIEhvd2V2ZXIsIHdlIGRvIHVzZSBhbmQgc2hhcmUgd2l0aCB0aGlyZFxuICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gYW5kIE90aGVyIEluZm9ybWF0aW9uIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICBTZWN0aW9uIElJIGFuZCBpbiB0aGlzIFNlY3Rpb246XG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U2VydmljZSBQcm92aWRlcnMuPC9zcGFuPiBXZSBlbXBsb3lcbiAgICAgICAgb3RoZXIgY29tcGFuaWVzIGFuZCBwZW9wbGUgdG8gcGVyZm9ybSB0YXNrcyBvbiBvdXIgYmVoYWxmIGFuZCBuZWVkIHRvXG4gICAgICAgIHNoYXJlIHlvdXIgaW5mb3JtYXRpb24gd2l0aCB0aGVtIHRvIHByb3ZpZGUgcHJvZHVjdHMgb3Igc2VydmljZXMgdG8geW91LFxuICAgICAgICBzdWNoIGFzIHlvdXIgcHJvZmlsZSBpbmZvcm1hdGlvbiAoaW5jbHVkaW5nIHlvdXIgYWRkcmVzcyksIHRoZSBsb2NhdGlvblxuICAgICAgICBvZiB5b3VyIGRldmljZSBhbmQgb3RoZXIgaW5mb3JtYXRpb24uIFVubGVzcyB3ZSB0ZWxsIHlvdSBkaWZmZXJlbnRseSxcbiAgICAgICAgb3VyIHNlcnZpY2UgcHJvdmlkZXJzIGRvIG5vdCBoYXZlIGFueSByaWdodCB0byB1c2UgdGhlIFBlcnNvbmFsXG4gICAgICAgIEluZm9ybWF0aW9uIHdlIHNoYXJlIHdpdGggdGhlbSBiZXlvbmQgd2hhdCBpcyBuZWNlc3NhcnkgdG8gYXNzaXN0IHVzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlBheW1lbnQgUHJvY2Vzc29ycy48L3NwYW4+IEFzIG5vdGVkXG4gICAgICAgIGFib3ZlLCB3ZSB1c2UgYSB0aGlyZCBwYXJ0eSBQYXltZW50IFByb2Nlc3Nvciwgd2l0aCB3aGljaCB3ZSBzaGFyZVxuICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbiBpbiBvcmRlciB0byBjb21wbGV0ZSB0cmFuc2FjdGlvbnMgb24gdGhlIFNlcnZpY2VzLlxuICAgICAgICBBcyBub3RlZCBhYm92ZSwgd2UgY3VycmVudGx5IHVzZSBTdHJpcGUgYXMgb3VyIFBheW1lbnQgUHJvY2Vzc29yLCBhbmRcbiAgICAgICAgdGhlaXIgcHJpdmFjeSBwb2xpY3kgaXMgZm91bmQgaGVyZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICBGYWNpbGl0YXRlIENvbW11bmljYXRpb25zIEJldHdlZW4gQWlyIFRhaWxvciBhbmQgeW91LlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIFdlIG1heSB1c2UgeW91ciBpbmZvcm1hdGlvbiB0byBzZW5kIHlvdSBjb21tdW5pY2F0aW9ucyB3ZSB0aGluayB3aWxsIGJlXG4gICAgICAgIG9mIGludGVyZXN0IHRvIHlvdSwgaW5jbHVkaW5nIGluZm9ybWF0aW9uIGFib3V0IHByb2R1Y3RzLCBzZXJ2aWNlcyxcbiAgICAgICAgcHJvbW90aW9ucywgbmV3cywgYW5kIGV2ZW50cyBvZiBBaXIgVGFpbG9yIGFuZCBvdGhlciBjb21wYW5pZXMsIHdoZXJlXG4gICAgICAgIHBlcm1pc3NpYmxlIGFuZCBhY2NvcmRpbmcgdG8gbG9jYWwgYXBwbGljYWJsZSBsYXdzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgIFNlcnZpY2VzIFByb3Zpc2lvbiwgTWFpbnRlbmFuY2UgYW5kIFVwZ3JhZGVzLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIFdlIHVzZSB5b3VyIGluZm9ybWF0aW9uIHRvIHByb3ZpZGUsIG1haW50YWluLCBpbXByb3ZlIGFuZCBwZXJzb25hbGl6ZVxuICAgICAgICBvdXIgU2VydmljZXMsIGluY2x1ZGluZywgdG8gc2VuZCByZWNlaXB0cywgcHJvdmlkZSBwcm9kdWN0cyBhbmQgc2VydmljZXNcbiAgICAgICAgeW91IHJlcXVlc3QgKGFuZCBzZW5kIHJlbGF0ZWQgaW5mb3JtYXRpb24pLCBkZXZlbG9wIG5ldyBmZWF0dXJlcyxcbiAgICAgICAgcHJvdmlkZSBjdXN0b21lciBzdXBwb3J0IHRvIHlvdSwgZGV2ZWxvcCBzYWZldHkgZmVhdHVyZXMsIGF1dGhlbnRpY2F0ZVxuICAgICAgICB1c2Vycywgc2VuZCBwcm9kdWN0IHVwZGF0ZXMgYW5kIGFkbWluaXN0cmF0aXZlIG1lc3NhZ2VzLCB0byBwZXJmb3JtXG4gICAgICAgIGludGVybmFsIG9wZXJhdGlvbnMsIGluY2x1ZGluZywgZm9yIGV4YW1wbGUsIHRvIHByZXZlbnQgZnJhdWQgYW5kIGFidXNlXG4gICAgICAgIG9mIG91ciBTZXJ2aWNlczsgdG8gdHJvdWJsZXNob290IHNvZnR3YXJlIGJ1Z3MgYW5kIG9wZXJhdGlvbmFsIHByb2JsZW1zO1xuICAgICAgICB0byBjb25kdWN0IGRhdGEgYW5hbHlzaXMsIHRlc3RpbmcsIGFuZCByZXNlYXJjaDsgYW5kIHRvIG1vbml0b3IgYW5kXG4gICAgICAgIGFuYWx5emUgdXNhZ2UgYW5kIGFjdGl2aXR5IHRyZW5kcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5CdXNpbmVzcyBUcmFuc2ZlcnMuPC9zcGFuPiBXZSBtYXlcbiAgICAgICAgY2hvb3NlIHRvIGJ1eSBvciBzZWxsIGFzc2V0cy4gSW4gdGhlc2UgdHlwZXMgb2YgdHJhbnNhY3Rpb25zLCBjdXN0b21lclxuICAgICAgICBpbmZvcm1hdGlvbiBpcyB0eXBpY2FsbHkgb25lIG9mIHRoZSBidXNpbmVzcyBhc3NldHMgdGhhdCB3b3VsZCBiZVxuICAgICAgICB0cmFuc2ZlcnJlZC4gQWxzbywgaWYgd2UgKG9yIG91ciBhc3NldHMpIGFyZSBhY3F1aXJlZCwgb3IgaWYgd2UgZ28gb3V0XG4gICAgICAgIG9mIGJ1c2luZXNzLCBlbnRlciBiYW5rcnVwdGN5LCBvciBnbyB0aHJvdWdoIHNvbWUgb3RoZXIgY2hhbmdlIG9mXG4gICAgICAgIGNvbnRyb2wsIFBlcnNvbmFsIEluZm9ybWF0aW9uIHdvdWxkIGJlIG9uZSBvZiB0aGUgYXNzZXRzIHRyYW5zZmVycmVkIHRvXG4gICAgICAgIG9yIGFjcXVpcmVkIGJ5IHRoaXJkIHBhcnRpZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgUHJvdGVjdGlvbiBvZiBBaXIgVGFpbG9yIGFuZCBPdGhlcnMuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gYWNjZXNzLCByZWFkLCBwcmVzZXJ2ZSwgYW5kIGRpc2Nsb3NlIGFueVxuICAgICAgICBpbmZvcm1hdGlvbiB0aGF0IHdlIHJlYXNvbmFibHkgYmVsaWV2ZSBpcyBuZWNlc3NhcnkgdG8gY29tcGx5IHdpdGggbGF3XG4gICAgICAgIG9yIGEgY291cnQgb3JkZXI7IGVuZm9yY2Ugb3IgYXBwbHkgb3VyIGNvbmRpdGlvbnMgb2YgdXNlIGFuZCBvdGhlclxuICAgICAgICBhZ3JlZW1lbnRzOyBvciBwcm90ZWN0IHRoZSByaWdodHMsIHByb3BlcnR5LCBvciB0aGUgc2FmZXR5IG9mIEFpclxuICAgICAgICBUYWlsb3IsIG91ciBlbXBsb3llZXMsIG91ciB1c2Vycywgb3Igb3RoZXJzLiBUaGlzIGluY2x1ZGVzIGV4Y2hhbmdpbmdcbiAgICAgICAgaW5mb3JtYXRpb24gd2l0aCBvdGhlciBjb21wYW5pZXMgYW5kIG9yZ2FuaXphdGlvbnMgZm9yIGZyYXVkIHByb3RlY3Rpb25cbiAgICAgICAgYW5kIGNyZWRpdCByaXNrIHJlZHVjdGlvbi5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5XaXRoIFlvdXIgQ29uc2VudC48L3NwYW4+IEV4Y2VwdCBhc1xuICAgICAgICBzZXQgZm9ydGggYWJvdmUsIHlvdSB3aWxsIGJlIG5vdGlmaWVkIHdoZW4geW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiBtYXlcbiAgICAgICAgYmUgc2hhcmVkIHdpdGggdGhpcmQgcGFydGllcyBpbiBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBmb3JtLCBhbmQgd2lsbFxuICAgICAgICBiZSBvZmZlcmVkIGFuIG9wcG9ydHVuaXR5IHRvIHByZXZlbnQgdGhlIHNoYXJpbmcgb2YgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICBJbnRlcm5hbCBPcGVyYXRpb25zLCBBbmFseXRpY3MgYW5kIFRlc3RpbmcuXG4gICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICBXZSB1c2UgYm90aCBQZXJzb25hbCBJbmZvcm1hdGlvbiBhbmQgT3RoZXIgSW5mb3JtYXRpb24gdG8gcGVyZm9ybVxuICAgICAgICBpbnRlcm5hbCBvcGVyYXRpb25zLCBpbmNsdWRpbmcsIGZvciBleGFtcGxlLCB0byBwcmV2ZW50IGZyYXVkIGFuZCBhYnVzZVxuICAgICAgICBvZiBvdXIgU2VydmljZXM7IHRvIHRyb3VibGVzaG9vdCBzb2Z0d2FyZSBidWdzIGFuZCBvcGVyYXRpb25hbCBwcm9ibGVtcztcbiAgICAgICAgdG8gY29uZHVjdCBhbmFseXNpcywgdGVzdGluZywgYW5kIHJlc2VhcmNoOyBhbmQgZm9yIG1vbml0b3JpbmcgYW5kXG4gICAgICAgIGFuYWx5emluZyB1c2FnZSByYXRlcy4gSW4gcGFydGljdWxhciwgd2UgdXNlIEdvb2dsZSBBbmFseXRpY3MgdG8gaGVscCB1c1xuICAgICAgICB0byBjb2xsZWN0IGFuZCBhbmFseXplIGNlcnRhaW4gaW5mb3JtYXRpb24gZm9yIHRoZSBwdXJwb3NlcyBkaXNjdXNzZWRcbiAgICAgICAgYWJvdmUuIFRvIG9wdC1vdXQgb2YgR29vZ2xlIEFuYWx5dGljcywgY2xpY2t7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90b29scy5nb29nbGUuY29tL2RscGFnZS9nYW9wdG91dFwiPmhlcmU8L2E+LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgIEFnZ3JlZ2F0ZWQgYW5kL29yIEFub255bWl6ZWQgRGF0YS5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICBXZSBtYXkgdXNlIGFueSBhZ2dyZWdhdGVkIGFuZC9vciBhbm9ueW1pemVkIGRhdGEgZGVyaXZlZCBmcm9tIG9yXG4gICAgICAgIGluY29ycG9yYXRpbmcgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiBhZnRlciB5b3UgdXBkYXRlIG9yIGRlbGV0ZSBpdFxuICAgICAgICBmb3IgYW55IHB1cnBvc2UsIGJ1dCBub3QgaW4gYSBtYW5uZXIgdGhhdCB3b3VsZCBpZGVudGlmeSB5b3UgcGVyc29uYWxseS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5BZHZlcnRpc2Vycy48L3NwYW4+XG4gICAgICAgIFdlIG1heSB1c2UgdGhpcmQgcGFydGllcyB0byBhZG1pbmlzdGVyIGEgbGltaXRlZCBzZXQgb2YgQWlyIFRhaWxvclxuICAgICAgICBhZHZlcnRpc2VtZW50cyBvbiB0aGlyZCBwYXJ0eSBlbGVjdHJvbmljIGNoYW5uZWxzLiBObyBQZXJzb25hbFxuICAgICAgICBJbmZvcm1hdGlvbiBpcyBwcm92aWRlZCB0byB0aGUgYWR2ZXJ0aXNlcnMgYXMgcGFydCBvZiB0aGlzIHByb2Nlc3MsIGJ1dFxuICAgICAgICBhZ2dyZWdhdGUgcHJvZmlsZSBpbmZvcm1hdGlvbiBvciBPdGhlciBJbmZvcm1hdGlvbiwgc3VjaCBhcyBpbXBsaWVkIG9yXG4gICAgICAgIGluZmVycmVkIGludGVyZXN0cywgbWF5IGJlIHVzZWQgaW4gdGhlIHNlbGVjdGlvbiBvZiBhZHZlcnRpc2luZyB0byBtYWtlXG4gICAgICAgIHN1cmUgdGhhdCBpdCBoYXMgcmVsZXZhbmNlIHRvIHRoZSB1c2VyLiBTb21lIGJhbm5lciBhZHMgbWF5IGNvbnRhaW5cbiAgICAgICAgZW1iZWRkZWQgcGl4ZWxzIHRoYXQgbWF5IHdyaXRlIGFuZCByZWFkIGNvb2tpZXMgb3IgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgY29ubmVjdGlvbiBpbmZvcm1hdGlvbiB0aGF0IGFsbG93cyBhZHZlcnRpc2VycyB0byBiZXR0ZXIgZGV0ZXJtaW5lIGhvd1xuICAgICAgICBtYW55IGluZGl2aWR1YWwgdXNlcnMgaGF2ZSBjbGlja2VkIG9uIHRoZSBhZCBiYW5uZXIuIFdlIG1heSBhbHNvIHVzZVxuICAgICAgICBhZHZlcnRpc2luZyB0ZWNobm9sb2dpZXMgYW5kIHBhcnRpY2lwYXRlIGluIGFkdmVydGlzaW5nIHRlY2hub2xvZ3lcbiAgICAgICAgbmV0d29ya3MgdGhhdCBjb2xsZWN0IE90aGVyIEluZm9ybWF0aW9uIGZyb20gQWlyIFRhaWxvciBhbmQgbm9uLUFpclxuICAgICAgICBUYWlsb3IgU2VydmljZXMsIGFzIHdlbGwgYXMgZnJvbSBvdGhlciBzb3VyY2VzLCB0byBzaG93IHlvdSBBaXJcbiAgICAgICAgVGFpbG9yLXJlbGF0ZWQgYWR2ZXJ0aXNlbWVudHMgb24gQWlyIFRhaWxvcuKAmXMgb3duIGFuZCB0aGlyZC1wYXJ0eVxuICAgICAgICB3ZWJzaXRlcyBhbmQgYXBwcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5PdGhlciBJbmZvcm1hdGlvbi48L3NwYW4+XG4gICAgICAgIFdlIG1heSB1c2UsIHRyYW5zZmVyLCBhbmQgZGlzY2xvc2UgT3RoZXIgSW5mb3JtYXRpb24gd2UgY29sbGVjdCBmb3IgYW55XG4gICAgICAgIHB1cnBvc2UsIGV4Y2VwdCB3aGVyZSBhcHBsaWNhYmxlIGxhdyByZXF1aXJlcyBvdGhlcndpc2UuIElmIHdlIGFyZVxuICAgICAgICByZXF1aXJlZCB0byB0cmVhdCBPdGhlciBJbmZvcm1hdGlvbiBhcyBQZXJzb25hbCBJbmZvcm1hdGlvbiB1bmRlclxuICAgICAgICBhcHBsaWNhYmxlIGxhdywgdGhlbiB3ZSB3aWxsIG9ubHkgdXNlIGl0IGluIHRoZSBzYW1lIHdheSB0aGF0IHdlIGFyZVxuICAgICAgICBwZXJtaXR0ZWQgdG8gdXNlIGFuZCBkaXNjbG9zZSBQZXJzb25hbCBJbmZvcm1hdGlvbi5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBncm91bmRzIG9uIHdoaWNoIHdlIHByb2Nlc3MgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbiBpbmNsdWRlIHdoZXJlXG4gICAgICAgIHlvdSBoYXZlIGdpdmVuIHlvdXIgY29uc2VudCwgd2hlcmUgaXQgaXMgbmVjZXNzYXJ5IHRvIHByb3ZpZGUgeW91IHRoZVxuICAgICAgICBTZXJ2aWNlLCBvciB3aGVyZSBpdCBpcyBuZWNlc3NhcnkgdG8gZnVsZmlsIG91ciBvYmxpZ2F0aW9ucyB0byBhIHRoaXJkXG4gICAgICAgIHBhcnR5IGluIHByb3ZpZGluZyB5b3Ugd2l0aCB0aGUgU2VydmljZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBJVi4gV0hBVCBSSUdIVFMgQU5EIENIT0lDRVMgRE8gSSBIQVZFP1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgSWYgeW91IHdpc2ggdG8gY2FuY2VsIHlvdXIgYWNjb3VudCwgcGxlYXNlIGVtYWlsIHVzIGF0XG4gICAgICAgIGhlbGxvQGFpcnRhaWxvci5jb20uIFBsZWFzZSBub3RlIHRoYXQgc29tZSBpbmZvcm1hdGlvbiBtYXkgcmVtYWluIGluIG91clxuICAgICAgICByZWNvcmRzIGFmdGVyIHlvdXIgZGVsZXRpb24gb2Ygc3VjaCBpbmZvcm1hdGlvbiBmcm9tIHlvdXIgYWNjb3VudC4gV2VcbiAgICAgICAgbWF5IHVzZSBhbnkgYWdncmVnYXRlZCBkYXRhIGRlcml2ZWQgZnJvbSBvciBpbmNvcnBvcmF0aW5nIHlvdXIgUGVyc29uYWxcbiAgICAgICAgSW5mb3JtYXRpb24gYWZ0ZXIgeW91IHVwZGF0ZSBvciBkZWxldGUgaXQsIGJ1dCBub3QgaW4gYSBtYW5uZXIgdGhhdFxuICAgICAgICB3b3VsZCBpZGVudGlmeSB5b3UgcGVyc29uYWxseS4gQWlyIFRhaWxvciB3aWxsIGNvbXBseSB3aXRoIGluZGl2aWR1YWzigJlzXG4gICAgICAgIHJlcXVlc3RzIHJlZ2FyZGluZyBhY2Nlc3MsIGNvcnJlY3Rpb24sIGFuZC9vciBkZWxldGlvbiBvZiB0aGUgcGVyc29uYWxcbiAgICAgICAgZGF0YSBpdCBzdG9yZXMgaW4gYWNjb3JkYW5jZSB3aXRoIGFwcGxpY2FibGUgbGF3LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgMS4gSW50ZXJlc3QgQmFzZWQgQWR2ZXJ0aXNpbmdcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEFzIGRpc2N1c3NlZCBhYm92ZSwgd2UgbWF5IHBhcnRuZXIgd2l0aCB0aGlyZCBwYXJ0aWVzIHRvIHByb3ZpZGVcbiAgICAgICAgSW50ZXJlc3QgQmFzZWQgQWR2ZXJ0aXNpbmcuIEZvciBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gb3B0IG91dCBvZlxuICAgICAgICByZWNlaXZpbmcgaW50ZXJlc3QtYmFzZWQgYWR2ZXJ0aXNlbWVudHMsIG9yIHRvIGxlYXJuIG1vcmUgYWJvdXRcbiAgICAgICAgaW50ZXJlc3QtYmFzZWQgYWR2ZXJ0aXNpbmcgaW4gZ2VuZXJhbCBhbmQgdG8gYWNjZXNzIHRoZSBvcHQtb3V0cyBvZlxuICAgICAgICBvdGhlciBvbmxpbmUgYWR2ZXJ0aXNpbmcgY29tcGFuaWVzLCB2aXNpdCB0aGUgTmV0d29yayBBZHZlcnRpc2luZ1xuICAgICAgICBJbml0aWF0aXZlIGF0eycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubmV0d29ya2FkdmVydGlzaW5nLm9yZy9jaG9pY2VzL1wiPlxuICAgICAgICAgIGh0dHA6Ly93d3cubmV0d29ya2FkdmVydGlzaW5nLm9yZy9jaG9pY2VzL1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgb3IgdGhlIERpZ2l0YWwgQWR2ZXJ0aXNpbmcgQWxsaWFuY2UgKERBQSkgYXR7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5hYm91dGFkcy5pbmZvL2Nob2ljZXMvXCI+XG4gICAgICAgICAgaHR0cDovL3d3dy5hYm91dGFkcy5pbmZvL2Nob2ljZXMvXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBvciwgZm9yIGludGVyZXN0LWJhc2VkIGFkdmVydGlzaW5nIGluIGFwcHMsIGJ5IHVzaW5nIHRoZSBEQUHigJlzXG4gICAgICAgIOKAnEFwcENob2ljZXPigJ0gYXBwbGljYXRpb24gYXZhaWxhYmxlIGF0eycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9odHRwOi8vd3d3LmFib3V0YWRzLmluZm8vYXBwY2hvaWNlc1wiPlxuICAgICAgICAgIGh0dHA6Ly9odHRwOi8vd3d3LmFib3V0YWRzLmluZm8vYXBwY2hvaWNlc1xuICAgICAgICA8L2E+LiBCeSBvcHRpbmcgb3V0LCB5b3UgbWF5IHN0aWxsIHJlY2VpdmUgYWRzIGZyb20gQWlyIFRhaWxvciwgYnV0IHlvdVxuICAgICAgICBzdGlsbCBzdG9wIHJlY2VpdmluZyBhZHMgZnJvbSBBaXIgVGFpbG9yIHRoYXQgaGF2ZSBiZWVuIHRhcmdldGVkIHRvIHlvdVxuICAgICAgICBiYXNlZCBvbiB5b3VyIHZpc2l0cyBhbmQgYnJvd3NpbmcgYWN0aXZpdHkgYWNyb3NzIHdlYnNpdGVzIG92ZXIgdGltZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDIuIERvIE5vdCBUcmFjayBTaWduYWxzXG4gICAgICAgIDxiciAvPlxuICAgICAgICBBdCB0aGlzIHRpbWUgd2UgaG9ub3Igd2ViIGJyb3dzZXIgRG8gTm90IFRyYWNrICjigJxETlTigJ0pIHNpZ25hbHMgYW5kIERvXG4gICAgICAgIE5vdCBUcmFjaywgcGxhbnQgY29va2llcywgb3IgdXNlIGFkdmVydGlzaW5nIHdoZW4gYSBEbyBOb3QgVHJhY2sgKEROVClcbiAgICAgICAgYnJvd3NlciBtZWNoYW5pc20gaXMgaW4gcGxhY2UuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBWLiBNQVJLRVRJTkcgQU5EIEVNQUlMIENPTU1VTklDQVRJT05cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEJ5IHByb3ZpZGluZyB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gdXMsIHlvdSBleHByZXNzbHkgY29uc2VudCB0byByZWNlaXZlXG4gICAgICAgIGVtYWlscyBmcm9tIHVzLCB3aGVyZSBwZXJtaXR0ZWQgYnkgbGF3LiBXZSBtYXkgdXNlIGVtYWlsIHRvIGNvbW11bmljYXRlXG4gICAgICAgIHdpdGggeW91LCB0byBzZW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IGhhdmUgcmVxdWVzdGVkIG9yIHRvIHNlbmRcbiAgICAgICAgaW5mb3JtYXRpb24gYWJvdXQgb3RoZXIgcHJvZHVjdHMgb3Igc2VydmljZXMgZGV2ZWxvcGVkIG9yIHByb3ZpZGVkIGJ5IHVzXG4gICAgICAgIG9yIG91ciBwYXJ0bmVycy4gSWYgeW91IGRvIG5vdCB3YW50IHRvIHJlY2VpdmUgY29tbWVyY2lhbCBlbWFpbCBvciBvdGhlclxuICAgICAgICBtYWlsIGZyb20gdXMsIHlvdSBtYXkgdW5zdWJzY3JpYmUgdXNpbmcgdGhlIHVuc3Vic2NyaWJlIGxpbmsgYXQgdGhlXG4gICAgICAgIGJvdHRvbSBvZiBhbiBlbWFpbCB5b3UgcmVjZWl2ZS4gUGxlYXNlIG5vdGUgdGhhdCBpZiB5b3UgZG8gbm90IHdhbnQgdG9cbiAgICAgICAgcmVjZWl2ZSBsZWdhbCBub3RpY2VzIGZyb20gdXMsIHN1Y2ggYXMgbm90aWNlcyByZWdhcmRpbmcgdGhpcyBQcml2YWN5XG4gICAgICAgIFBvbGljeSwgdGhvc2UgbGVnYWwgbm90aWNlcyB3aWxsIHN0aWxsIGdvdmVybiB5b3VyIHVzZSBvZiB0aGUgU2VydmljZXMsXG4gICAgICAgIGFuZCB5b3UgYXJlIHJlc3BvbnNpYmxlIGZvciByZXZpZXdpbmcgc3VjaCBsZWdhbCBub3RpY2VzIGZvciBjaGFuZ2VzLiBXZVxuICAgICAgICBtYXkgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiB3aGVuIHlvdSBvcGVuIGFuIGVtYWlsIGZyb20gQWlyIFRhaWxvciBpZlxuICAgICAgICB5b3VyIGNvbXB1dGVyIHN1cHBvcnRzIHRoaXMgdHlwZSBvZiBwcm9ncmFtLiBBaXIgVGFpbG9yIHVzZXMgdGhpc1xuICAgICAgICBjb25maXJtYXRpb24gdG8gaGVscCB1cyBtYWtlIGVtYWlscyBtb3JlIGludGVyZXN0aW5nIGFuZCBoZWxwZnVsIGFuZCB0b1xuICAgICAgICBpbXByb3ZlIG91ciBzZXJ2aWNlLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVkkuIFNFQ1VSSVRZXG4gICAgICAgIDxiciAvPlxuICAgICAgICBBaXIgVGFpbG9yIHVzZXMgY29tbWVyY2lhbGx5IHJlYXNvbmFibGUgcGh5c2ljYWwsIGVsZWN0cm9uaWMsIGFuZFxuICAgICAgICBwcm9jZWR1cmFsIHNhZmVndWFyZHMgdG8gcHJvdGVjdCB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIGFnYWluc3QgbG9zc1xuICAgICAgICBvciB1bmF1dGhvcml6ZWQgYWNjZXNzLCB1c2UsIG1vZGlmaWNhdGlvbiwgb3IgZGVsZXRpb24uIEhvd2V2ZXIsIG5vXG4gICAgICAgIHNlY3VyaXR5IHByb2dyYW0gaXMgZm9vbHByb29mLCBhbmQgdGh1cyB3ZSBjYW5ub3QgZ3VhcmFudGVlIHRoZSBhYnNvbHV0ZVxuICAgICAgICBzZWN1cml0eSBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIG9yIE90aGVyIEluZm9ybWF0aW9uLiBXZSB3aWxsXG4gICAgICAgIHJldGFpbiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uIGZvciBhcyBsb25nIGFzIHJlYXNvbmFibHkgbmVjZXNzYXJ5IHRvXG4gICAgICAgIGFjY29tcGxpc2ggdGhlIHB1cnBvc2VzIGluIHRoaXMgUHJpdmFjeSBQb2xpY3kgb3IgYXMgcmVxdWlyZWQgYnkgbGF3LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVklJLiBGQUlSIElORk9STUFUSU9OIFBSQUNUSUNFU1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgU2hvdWxkIGEgZGF0YSBicmVhY2ggb2NjdXIsIHdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDdcbiAgICAgICAgYnVzaW5lc3MgZGF5cy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdFxuICAgICAgICBpbmRpdmlkdWFscyBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdFxuICAgICAgICBkYXRhIGNvbGxlY3RvcnMgYW5kIHByb2Nlc3NvcnMgd2hvIGZhaWwgdG8gYWRoZXJlIHRvIHRoZSBsYXcuIFRoaXNcbiAgICAgICAgcHJpbmNpcGxlIHJlcXVpcmVzIG5vdCBvbmx5IHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHNcbiAgICAgICAgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0IGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yXG4gICAgICAgIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGUgYW5kL29yIHByb3NlY3V0ZSBub24tY29tcGxpYW5jZSBieVxuICAgICAgICBkYXRhIHByb2Nlc3NvcnMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBWSUlJLiBDSEFOR0VTIFRPIFRISVMgUFJJVkFDWSBQT0xJQ1lcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIFdlIG1heSBhbWVuZCB0aGlzIFByaXZhY3kgUG9saWN5IGZyb20gdGltZSB0byB0aW1lLiBVc2Ugb2YgaW5mb3JtYXRpb25cbiAgICAgICAgd2UgY29sbGVjdCBub3cgaXMgc3ViamVjdCB0byB0aGUgUHJpdmFjeSBQb2xpY3kgaW4gZWZmZWN0IGF0IHRoZSB0aW1lXG4gICAgICAgIHN1Y2ggaW5mb3JtYXRpb24gaXMgdXNlZC4gSWYgd2UgbWFrZSBjaGFuZ2VzIGluIHRoZSB3YXkgd2UgdXNlIFBlcnNvbmFsXG4gICAgICAgIEluZm9ybWF0aW9uLCB3ZSB3aWxsIG5vdGlmeSB5b3UgYnkgcG9zdGluZyBhbiBhbm5vdW5jZW1lbnQgb24gb3VyXG4gICAgICAgIFdlYnNpdGUgb3Igc2VuZGluZyB5b3UgYSBtZXNzYWdlLiBZb3UgYXJlIGJvdW5kIGJ5IGFueSBjaGFuZ2VzIHRvIHRoZVxuICAgICAgICBQcml2YWN5IFBvbGljeSB3aGVuIHlvdSB1c2UgdGhlIFNlcnZpY2VzIGFmdGVyIHN1Y2ggY2hhbmdlcyBoYXZlIGJlZW5cbiAgICAgICAgZmlyc3QgcG9zdGVkLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgSVguIENPTlRBQ1QgVVNcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMgcmVnYXJkaW5nIG91ciBQcml2YWN5IFBvbGljeSxcbiAgICAgICAgcGxlYXNlIHNlbmQgdXMgYSBtZXNzYWdlIHRvIGhlbGxvQGFpcnRhaWxvci5jb20uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlVwZGF0ZWQgSmFudWFyeSAxMHRoLCAyMDE4PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3Rlcm1zL1ByaXZhY3lQb2xpY3kuanMiXSwic291cmNlUm9vdCI6IiJ9