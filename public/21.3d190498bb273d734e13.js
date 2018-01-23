webpackJsonp([21],{662:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=r(1),u=a(c),s=r(16),d=r(24),f=r(0),m=(a(f),r(51)),v=a(m),p=r(11),h=r(28),b=r(678),E=a(b),y=r(4),N=a(y),_=function(e){return{tailorList:e.tailorList}},L=function(e){return(0,d.bindActionCreators)({setLoader:h.setLoader,removeLoader:h.removeLoader,getTailorList:h.getTailorList},e)},g=function(e){function t(){var e,r,a,o;n(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.renderTailorRow=function(e){var t=e.id,r=e.name,n=e.active_orders_count,l=e.arrived_orders_count,o=e.late_orders_count,i=a.truncatedTailorName(r),c="/stores/"+t+"/orders";return u.default.createElement("div",{key:t},u.default.createElement("div",{className:"tailor-data-row"},u.default.createElement(p.Link,{to:c,className:"tailor-link"},u.default.createElement("div",{className:"tailor-data-cell"},i),u.default.createElement("div",{className:"tailor-data-cell"},n),u.default.createElement("div",{className:"tailor-data-cell"},l),u.default.createElement("div",{className:"tailor-data-cell",style:{color:"red"}},o))),u.default.createElement("hr",{className:"tailor-break-row"}))},a.renderTailorRows=function(){var e=a.props.tailorList;return(0,v.default)(e)?u.default.createElement("div",{className:"table-row"},u.default.createElement("div",{className:"loading-orders"},"Loading Tailors...")):u.default.createElement("div",{className:"tailor-container"},e.map(function(e){return a.renderTailorRow(e)}))},a.renderTailorHeaders=function(){return u.default.createElement("div",null,u.default.createElement("div",{className:"tailor-headers-container"},u.default.createElement("div",{className:"tailor-headers-row"},u.default.createElement("h3",{className:"tailor-header-cell"},"Tailor"),u.default.createElement("h3",{className:"tailor-header-cell"},"Assigned"),u.default.createElement("h3",{className:"tailor-header-cell"},"In Stock"),u.default.createElement("h3",{className:"tailor-header-cell"},"Late")),u.default.createElement("hr",{className:"tailor-header-break-row"})))},o=r,l(a,o)}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setLoader,r=e.removeLoader,a=e.getTailorList;t(),a().then(function(){return r()})}},{key:"truncatedTailorName",value:function(e){return e.length>14?e.substring(0,11)+"...":e}},{key:"render",value:function(){var e=this.renderTailorHeaders,t=this.renderTailorRows;return u.default.createElement("div",null,u.default.createElement(E.default,{text:"Manage Tailors"}),u.default.createElement("div",{className:"tailors"},e(),t()))}}]),t}(c.Component);g.propTypes={tailorList:N.default.array.isRequired,setLoader:N.default.func.isRequired,removeLoader:N.default.func.isRequired,getTailorList:N.default.func.isRequired},t.default=(0,s.connect)(_,L)(g)},678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a),l=r(16),o=r(24),i=r(11),c=r(28),u=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),a=void 0;if(t&&0!==t.length?a=function(){return e.resetCart()}:(r="/orders/new",a=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return n.default.createElement(i.Link,{className:"cart-ribbon",to:r},n.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:a},"+"),n.default.createElement("div",{className:"cart-ribbon-triangle"}))},s=function(e){return n.default.createElement("div",{className:"section-header"},n.default.createElement("h2",null,e.text),u(e))},d=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,o.bindActionCreators)({resetCart:c.resetCart},e)};t.default=(0,l.connect)(d,f)(s)}});