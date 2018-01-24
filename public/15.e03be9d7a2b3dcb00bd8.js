webpackJsonp([15],{660:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(11),s=n(681),d=r(s),p=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h3",null,"Dashboard"),c.default.createElement("h4",null,"Lists"),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/admin/reports"},"Reports")),c.default.createElement("br",null)," ",c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/users/list"},"User List")),c.default.createElement("br",null)," ",c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/admin/tailors"},"Tailor List")),c.default.createElement("br",null)," ",c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/admin/retailers"},"Retailer List")),c.default.createElement("h4",null,"Make a New Thing"),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/admin/companies/new"},"New Company")),c.default.createElement("br",null)," ",c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/stores/new"},"New Store")),c.default.createElement("br",null)," ",c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/users/new"},"New User")),c.default.createElement("br",null)," ",c.default.createElement("br",null))}}]),t}(i.Component);t.default=(0,d.default)(p)},678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(16),u=n(24),o=n(11),i=n(28),c=function(e){var t=e.rotate,n=(e.userRoles,e.includeLink,e.link),r=void 0;if(t&&0!==t.length?r=function(){return e.resetCart()}:(n="/orders/new",r=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return l.default.createElement(o.Link,{className:"cart-ribbon",to:n},l.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:r},"+"),l.default.createElement("div",{className:"cart-ribbon-triangle"}))},f=function(e){return l.default.createElement("div",{className:"section-header"},l.default.createElement("h2",null,e.text),c(e))},s=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},d=function(e){return(0,u.bindActionCreators)({resetCart:i.resetCart},e)};t.default=(0,a.connect)(s,d)(f)},680:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSectionHeaderText=function(e){var t=e.match.path;return"/admin/reports"===t?"Air Tailor / Reports":"/admin/reports/orders"===t?"Air Tailor / Order Reports":"/stores/new"===t?"Stores / New":"/users/:user_id/edit"===t?"Edit User":"/orders/new"===t?"Agree To Terms":"/site/terms_of_service"===t?"":void 0}},681:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return function(t){function n(){l(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={text:""},e}return u(n,t),i(n,[{key:"componentDidMount",value:function(){var e=(0,p.getSectionHeaderText)(this.props);this.setState({text:e})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(d.default,{text:this.state.text}),f.default.createElement(e,this.props))}}]),n}(c.Component)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(678),d=r(s),p=n(680);t.default=o}});